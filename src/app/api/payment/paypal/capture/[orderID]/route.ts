import { NextRequest, NextResponse } from 'next/server'

const PAYPAL_BASE = 'https://api-m.paypal.com'

async function getAccessToken(): Promise<string> {
  const clientId = process.env.PAYPAL_CLIENT_ID || process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
  const secret   = process.env.PAYPAL_CLIENT_SECRET

  if (!clientId || !secret) throw new Error('PayPal credentials not configured')

  const credentials = Buffer.from(`${clientId}:${secret}`).toString('base64')
  const res = await fetch(`${PAYPAL_BASE}/v1/oauth2/token`, {
    method:  'POST',
    headers: {
      'Authorization': `Basic ${credentials}`,
      'Content-Type':  'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  })

  if (!res.ok) throw new Error('PayPal token failed')
  const data = await res.json()
  return data.access_token as string
}

export async function POST(
  _req: NextRequest,
  { params }: { params: { orderID: string } }
) {
  const { orderID } = params

  const clientId = process.env.PAYPAL_CLIENT_ID || process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
  const secret   = process.env.PAYPAL_CLIENT_SECRET

  if (!clientId || !secret) {
    return NextResponse.json({ error: 'PayPal not configured' }, { status: 503 })
  }

  try {
    const accessToken = await getAccessToken()

    const res = await fetch(
      `${PAYPAL_BASE}/v2/checkout/orders/${orderID}/capture`,
      {
        method:  'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type':  'application/json',
        },
      }
    )

    const capture = await res.json()

    if (!res.ok || capture.status !== 'COMPLETED') {
      console.error('[paypal/capture] failed:', capture)
      return NextResponse.json({ error: 'Capture failed', details: capture }, { status: 502 })
    }

    const unit    = capture.purchase_units?.[0]
    const payment = unit?.payments?.captures?.[0]
    const amount  = parseFloat(payment?.amount?.value || '0')
    const description = unit?.description || ''

    sendPaymentEmail({ orderID, amount, description })
      .catch(err => console.error('[paypal/capture] email error:', err))

    return NextResponse.json({ status: 'COMPLETED', orderID, amount })
  } catch (err) {
    console.error('[paypal/capture] error:', err)
    return NextResponse.json({ error: 'PayPal unreachable' }, { status: 503 })
  }
}

async function sendPaymentEmail(data: {
  orderID: string
  amount:  number
  description: string
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
      subject: `PayPal payment received: $${data.amount.toFixed(2)} USD`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px;background:#12121F;color:#F5F0E8;border-radius:12px">
          <h2 style="color:#009CDE;margin:0 0 8px">PayPal Payment Received</h2>
          <p style="color:rgba(245,240,232,0.5);font-size:13px;margin:0 0 24px">A PayPal payment was captured on oneunitedenterprise.com</p>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:6px 0;color:rgba(245,240,232,0.5);font-size:13px;width:110px">Amount</td>
                <td style="padding:6px 0;font-size:13px;color:#009CDE;font-weight:bold">$${data.amount.toFixed(2)} USD</td></tr>
            <tr><td style="padding:6px 0;color:rgba(245,240,232,0.5);font-size:13px">Service</td>
                <td style="padding:6px 0;font-size:13px">${data.description}</td></tr>
            <tr><td style="padding:6px 0;color:rgba(245,240,232,0.5);font-size:13px">Order ID</td>
                <td style="padding:6px 0;font-size:11px;font-family:monospace">${data.orderID}</td></tr>
          </table>
          <p style="margin:24px 0 0;color:rgba(245,240,232,0.3);font-size:11px">One United Enterprise LLC — Payment Notification</p>
        </div>
      `,
    }),
  })
}
