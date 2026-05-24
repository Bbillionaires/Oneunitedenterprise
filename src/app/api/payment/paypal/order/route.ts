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

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`PayPal token error: ${err}`)
  }

  const data = await res.json()
  return data.access_token as string
}

export async function POST(req: NextRequest) {
  const clientId = process.env.PAYPAL_CLIENT_ID || process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
  const secret   = process.env.PAYPAL_CLIENT_SECRET

  if (!clientId || !secret) {
    return NextResponse.json({ error: 'PayPal not configured' }, { status: 503 })
  }

  let body: { amount: number; packageName: string; service: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const { amount, packageName, service } = body

  if (!amount || amount <= 0) {
    return NextResponse.json({ error: 'Invalid amount' }, { status: 422 })
  }

  try {
    const accessToken = await getAccessToken()

    const res = await fetch(`${PAYPAL_BASE}/v2/checkout/orders`, {
      method:  'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type':  'application/json',
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value:         amount.toFixed(2),
            },
            description: `${packageName} — ${service} | One United Enterprise LLC`,
          },
        ],
        application_context: {
          brand_name:          'One United Enterprise LLC',
          landing_page:        'NO_PREFERENCE',
          user_action:         'PAY_NOW',
          return_url:          `${process.env.NEXT_PUBLIC_BASE_URL || 'https://oneunitedenterprise.vercel.app'}/payment/success`,
          cancel_url:          `${process.env.NEXT_PUBLIC_BASE_URL || 'https://oneunitedenterprise.vercel.app'}/payment/cancel`,
        },
      }),
    })

    const order = await res.json()

    if (!res.ok) {
      console.error('[paypal/order] error:', order)
      return NextResponse.json({ error: 'Order creation failed', details: order }, { status: 502 })
    }

    return NextResponse.json({ id: order.id })
  } catch (err) {
    console.error('[paypal/order] failed:', err)
    return NextResponse.json({ error: 'PayPal unreachable' }, { status: 503 })
  }
}
