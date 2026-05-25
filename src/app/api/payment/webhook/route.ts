import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const stripeKey     = process.env.STRIPE_SECRET_KEY
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!stripeKey || !webhookSecret) return NextResponse.json({ error: 'Not configured' }, { status: 503 })

  const body = await req.text()
  const sig  = req.headers.get('stripe-signature')
  if (!sig) return NextResponse.json({ error: 'Missing signature' }, { status: 400 })

  const Stripe = (await import('stripe')).default
  const stripe = new Stripe(stripeKey)

  let event: Awaited<ReturnType<typeof stripe.webhooks.constructEventAsync>>
  try {
    event = await stripe.webhooks.constructEventAsync(body, sig, webhookSecret)
  } catch (err) {
    console.error('[webhook] signature failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'payment_intent.succeeded') {
    const intent = event.data.object as import('stripe').Stripe.PaymentIntent
    const resendKey = process.env.RESEND_API_KEY
    if (resendKey) {
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: process.env.NOTIFICATION_FROM || 'noreply@oneunitedenterprise.com',
          to:   process.env.ADMIN_EMAIL || 'greenwood100inc@gmail.com',
          subject: `Payment received: ${intent.metadata.packageName} — $${(intent.amount/100).toFixed(2)}`,
          html: `<p>Payment of <strong>$${(intent.amount/100).toFixed(2)}</strong> for <strong>${intent.metadata.packageName}</strong> (${intent.metadata.service}) confirmed.</p><p>ID: ${intent.id}</p>`,
        }),
      }).catch(console.error)
    }
  }

  return NextResponse.json({ received: true })
}
