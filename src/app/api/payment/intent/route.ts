import { NextRequest, NextResponse } from 'next/server'

// Promo codes: code → { discount (0-1 fraction), label }
const PROMO_CODES: Record<string, { discount: number; label: string }> = {
  WELCOME10:  { discount: 0.10, label: '10% off — Welcome discount' },
  LAUNCH20:   { discount: 0.20, label: '20% off — Launch special' },
  OUE25:      { discount: 0.25, label: '25% off — OUE member discount' },
  PARTNER15:  { discount: 0.15, label: '15% off — Partner rate' },
  FULLPAY5:   { discount: 0.05, label: '5% off — Pay-in-full bonus' },
}

export async function POST(req: NextRequest) {
  const { amount, currency = 'usd', promoCode, packageName, service } = await req.json() as {
    amount: number
    currency?: string
    promoCode?: string
    packageName: string
    service: string
  }

  let finalAmount = Math.round(amount * 100) // cents
  let discountApplied: string | null = null

  if (promoCode) {
    const promo = PROMO_CODES[promoCode.toUpperCase()]
    if (promo) {
      finalAmount = Math.round(finalAmount * (1 - promo.discount))
      discountApplied = promo.label
    } else {
      return NextResponse.json({ error: 'Invalid promo code' }, { status: 400 })
    }
  }

  // Validate promo code without creating intent
  if (req.nextUrl.searchParams.get('validate') === '1') {
    const promo = promoCode ? PROMO_CODES[promoCode.toUpperCase()] : null
    if (promoCode && !promo) return NextResponse.json({ error: 'Invalid promo code' }, { status: 400 })
    return NextResponse.json({
      valid: true,
      discount: promo ? promo.discount : 0,
      label: promo ? promo.label : null,
      finalAmount: finalAmount / 100,
    })
  }

  const stripeKey = process.env.STRIPE_SECRET_KEY
  if (!stripeKey || stripeKey.includes('xxxxx')) {
    return NextResponse.json({ error: 'Payment not configured' }, { status: 503 })
  }

  const Stripe = (await import('stripe')).default
  const stripe = new Stripe(stripeKey)

  const intent = await stripe.paymentIntents.create({
    amount: finalAmount,
    currency,
    metadata: {
      packageName,
      service,
      promoCode: promoCode || '',
      discountApplied: discountApplied || '',
    },
    automatic_payment_methods: { enabled: true },
  })

  return NextResponse.json({
    clientSecret: intent.client_secret,
    discountApplied,
    finalAmount: finalAmount / 100,
  })
}

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code')?.toUpperCase()
  if (!code) return NextResponse.json({ error: 'code required' }, { status: 400 })
  const promo = PROMO_CODES[code]
  if (!promo) return NextResponse.json({ valid: false }, { status: 404 })
  return NextResponse.json({ valid: true, discount: promo.discount, label: promo.label })
}
