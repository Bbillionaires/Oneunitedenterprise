import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const stripeKey     = process.env.STRIPE_SECRET_KEY
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!stripeKey || !webhookSecret) {
    return NextResponse.json({ error: 'Payment not configured' }, { status: 503 })
  }

  const body = await req.text()
  const sig  = req.headers.get('stripe-signature')

  if (!sig) {
    return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 })
  }

  const Stripe = (await import('stripe')).default
  const stripe = new Stripe(stripeKey)

  let event: Awaited<ReturnType<typeof stripe.webhooks.constructEventAsync>>
  try {
    event = await stripe.webhooks.constructEventAsync(body, sig, webhookSecret)
  } catch (err) {
    console.error('[webhook] signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  try {
    switch (event.type) {
      case 'payment_intent.succeeded': {
        const intent = event.data.object as import('stripe').Stripe.PaymentIntent
        await sendPaymentEmail({
          amount:          intent.amount / 100,
          currency:        intent.currency.toUpperCase(),
          packageName:     intent.metadata.packageName || 'Unknown Package',
          service:         intent.metadata.service     || 'Unknown Service',
          promoCode:       intent.metadata.promoCode   || '',
          paymentIntentId: intent.id,
        })
        break
      }
      case 'payment_intent.payment_failed': {
        const intent = event.data.object as import('stripe').Stripe.PaymentIntent
        console.error('[webhook] payment failed:', intent.id, intent.last_payment_error?.message)
        break
      }
    }
  } catch (err) {
    console.error('[webhook] handler error:', err)
  }

  return NextResponse.json({ received: true })
}

async function sendPaymentEmail(data: {
  amount:          number
  currency:        string
  packageName:     string
  service:         string
  promoCode:       string
  paymentIntentId: string
}) {
  const resendKey = process.env.RESEND_API_KEY
  if (!resendKey) return

  const to   = process.env.ADMIN_EMAIL       || 'greenwood100inc@gmail.com'
  const from = process.env.NOTIFICATION_FROM || 'noreply@oneunitedenterprise.com'

  await fetch('https://api.resend.com/emails', {
    method:  'POST',
    headers: {
      'Authorization': `Bearer ${resendKey}`,
      'Content-Type':  'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      subject: `Payment received: ${data.packageName} — $${data.amount.toFixed(2)} ${data.currency}`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px;background:#12121F;color:#F5F0E8;border-radius:12px">
          <h2 style="color:#C9A84C;margin:0 0 8px">Payment Received</h2>
          <p style="color:rgba(245,240,232,0.5);font-size:13px;margin:0 0 24px">A new payment was processed on oneunitedenterprise.com</p>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:6px 0;color:rgba(245,240,232,0.5);font-size:13px;width:100px">Package</td><td style="padding:6px 0;font-size:13px">${data.packageName}</td></tr>
            <tr><td style="padding:6px 0;color:rgba(245,240,232,0.5);font-size:13px">Service</td><td style="padding:6px 0;font-size:13px">${data.service}</td></tr>
            <tr><td style="padding:6px 0;color:rgba(245,240,232,0.5);font-size:13px">Amount</td><td style="padding:6px 0;font-size:13px;color:#C9A84C;font-weight:bold">$${data.amount.toFixed(2)} ${data.currency}</td></tr>
            ${data.promoCode ? `<tr><td style="padding:6px 0;color:rgba(245,240,232,0.5);font-size:13px">Promo</td><td style="padding:6px 0;font-size:13px">${data.promoCode}</td></tr>` : ''}
            <tr><td style="padding:6px 0;color:rgba(245,240,232,0.5);font-size:13px">Payment ID</td><td style="padding:6px 0;font-size:11px;font-family:monospace">${data.paymentIntentId}</td></tr>
          </table>
          <p style="margin:24px 0 0;color:rgba(245,240,232,0.3);font-size:11px">One United Enterprise LLC — Payment Notification</p>
        </div>
      `,
    }),
  }).catch(err => console.error('[webhook] email send failed:', err))
}
