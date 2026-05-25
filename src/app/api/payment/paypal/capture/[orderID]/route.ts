import { NextRequest, NextResponse } from 'next/server'

const PAYPAL_BASE = 'https://api-m.paypal.com'

async function getAccessToken(): Promise<string> {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
  const secret   = process.env.PAYPAL_CLIENT_SECRET
  if (!clientId || !secret) throw new Error('PayPal not configured')
  const res = await fetch(`${PAYPAL_BASE}/v1/oauth2/token`, {
    method:  'POST',
    headers: {
      'Authorization': `Basic ${Buffer.from(`${clientId}:${secret}`).toString('base64')}`,
      'Content-Type':  'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  })
  if (!res.ok) throw new Error('PayPal token failed')
  return (await res.json()).access_token as string
}

export async function POST(
  _req: NextRequest,
  { params }: { params: { orderID: string } }
) {
  const { orderID } = params
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
  const secret   = process.env.PAYPAL_CLIENT_SECRET
  if (!clientId || !secret) return NextResponse.json({ error: 'PayPal not configured' }, { status: 503 })

  try {
    const accessToken = await getAccessToken()
    const res = await fetch(`${PAYPAL_BASE}/v2/checkout/orders/${orderID}/capture`, {
      method:  'POST',
      headers: { 'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
    })
    const capture = await res.json()
    if (!res.ok || capture.status !== 'COMPLETED') {
      console.error('[paypal/capture]', capture)
      return NextResponse.json({ error: 'Capture failed' }, { status: 502 })
    }

    const amount      = parseFloat(capture.purchase_units?.[0]?.payments?.captures?.[0]?.amount?.value || '0')
    const description = capture.purchase_units?.[0]?.description || ''
    const resendKey   = process.env.RESEND_API_KEY
    if (resendKey) {
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: process.env.NOTIFICATION_FROM || 'noreply@oneunitedenterprise.com',
          to:   process.env.ADMIN_EMAIL || 'greenwood100inc@gmail.com',
          subject: `PayPal payment received: $${amount.toFixed(2)} USD`,
          html: `<p>PayPal payment of <strong>$${amount.toFixed(2)}</strong> captured.</p><p>Service: ${description}</p><p>Order ID: ${orderID}</p>`,
        }),
      }).catch(console.error)
    }

    return NextResponse.json({ status: 'COMPLETED', orderID, amount })
  } catch (err) {
    console.error('[paypal/capture]', err)
    return NextResponse.json({ error: 'PayPal unreachable' }, { status: 503 })
  }
}
