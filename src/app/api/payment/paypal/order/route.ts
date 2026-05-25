import { NextRequest, NextResponse } from 'next/server'

const PAYPAL_BASE = 'https://api-m.paypal.com'

async function getAccessToken(): Promise<string> {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
  const secret   = process.env.PAYPAL_CLIENT_SECRET
  if (!clientId || !secret) throw new Error('PayPal credentials not configured')

  const res = await fetch(`${PAYPAL_BASE}/v1/oauth2/token`, {
    method:  'POST',
    headers: {
      'Authorization': `Basic ${Buffer.from(`${clientId}:${secret}`).toString('base64')}`,
      'Content-Type':  'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  })
  if (!res.ok) throw new Error(`PayPal token error: ${await res.text()}`)
  return (await res.json()).access_token as string
}

export async function POST(req: NextRequest) {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
  const secret   = process.env.PAYPAL_CLIENT_SECRET
  if (!clientId || !secret) return NextResponse.json({ error: 'PayPal not configured' }, { status: 503 })

  let body: { amount: number; packageName: string; service: string }
  try { body = await req.json() }
  catch { return NextResponse.json({ error: 'Invalid request' }, { status: 400 }) }

  const { amount, packageName, service } = body
  if (!amount || amount <= 0) return NextResponse.json({ error: 'Invalid amount' }, { status: 422 })

  try {
    const accessToken = await getAccessToken()
    const res = await fetch(`${PAYPAL_BASE}/v2/checkout/orders`, {
      method:  'POST',
      headers: { 'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [{
          amount: { currency_code: 'USD', value: amount.toFixed(2) },
          description: `${packageName} — ${service} | One United Enterprise LLC`,
        }],
        application_context: {
          brand_name:   'One United Enterprise LLC',
          user_action:  'PAY_NOW',
          landing_page: 'NO_PREFERENCE',
        },
      }),
    })
    const order = await res.json()
    if (!res.ok) { console.error('[paypal/order]', order); return NextResponse.json({ error: 'Order creation failed' }, { status: 502 }) }
    return NextResponse.json({ id: order.id })
  } catch (err) {
    console.error('[paypal/order]', err)
    return NextResponse.json({ error: 'PayPal unreachable' }, { status: 503 })
  }
}
