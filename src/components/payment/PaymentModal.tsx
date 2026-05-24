'use client'

import { useState, useEffect, useCallback } from 'react'
import { X, Tag, CheckCircle2, AlertCircle, Loader2, CreditCard, Building2, Copy, Check } from 'lucide-react'
import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'

// ── Types ────────────────────────────────────────────────────────────────
interface Package {
  name:   string
  price:  string
  period: string
  cta:    string
}

interface PaymentModalProps {
  isOpen:      boolean
  onClose:     () => void
  pkg:         Package
  service:     string
  sectorColor: string
}

type PayMethod = 'stripe' | 'paypal' | 'square' | 'cashapp' | 'zelle'

// ── Promo code ──────────────────────────────────────────────────────────
function usePromo(rawPrice: string) {
  const [code, setCode]       = useState('')
  const [applied, setApplied] = useState<{ label: string; discount: number } | null>(null)
  const [error, setError]     = useState('')
  const [loading, setLoading] = useState(false)

  const baseAmount = parseFloat(rawPrice.replace(/[^0-9.]/g, '')) || 0

  const apply = useCallback(async () => {
    if (!code.trim()) return
    setLoading(true); setError('')
    try {
      const res  = await fetch('/api/payment/intent?validate=1', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ amount: baseAmount, promoCode: code, packageName: '', service: '' }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error || 'Invalid code'); setApplied(null) }
      else setApplied({ label: data.label, discount: data.discount })
    } catch { setError('Could not verify code') }
    finally { setLoading(false) }
  }, [code, baseAmount])

  const remove = () => { setApplied(null); setCode('') }
  const finalAmount = applied ? baseAmount * (1 - applied.discount) : baseAmount

  return { code, setCode, applied, error, loading, apply, remove, baseAmount, finalAmount }
}

// ── Stripe ─────────────────────────────────────────────────────────────────
function StripeForm({ amount, pkg, service, sectorColor, promoCode, onSuccess }: {
  amount:      number
  pkg:         Package
  service:     string
  sectorColor: string
  promoCode:   string
  onSuccess:   () => void
}) {
  const stripe   = useStripe()
  const elements = useElements()
  const [status,  setStatus]  = useState<'idle' | 'loading' | 'error' | 'success'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!stripe || !elements) return
    setStatus('loading'); setMessage('')

    const res = await fetch('/api/payment/intent', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ amount, packageName: pkg.name, service, promoCode }),
    })
    const { clientSecret, error } = await res.json()
    if (error) { setStatus('error'); setMessage(error); return }

    const { error: stripeErr } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: elements.getElement(CardElement)! },
    })
    if (stripeErr) { setStatus('error'); setMessage(stripeErr.message || 'Payment failed') }
    else           { setStatus('success'); onSuccess() }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3.5">
        <CardElement options={{
          style: {
            base: {
              color:         '#F5F0E8',
              fontFamily:    'Inter, sans-serif',
              fontSize:      '15px',
              '::placeholder': { color: 'rgba(245,240,232,0.35)' },
            },
            invalid: { color: '#ff6b6b' },
          },
        }} />
      </div>

      {status === 'error' && (
        <p className="flex items-center gap-2 text-sm text-red-400">
          <AlertCircle size={14} /> {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading' || !stripe}
        className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:scale-[1.02] disabled:opacity-50"
        style={{ background: sectorColor, boxShadow: `0 0 24px ${sectorColor}40` }}
      >
        {status === 'loading'
          ? <Loader2 size={16} className="animate-spin" />
          : <CreditCard size={16} />
        }
        {status === 'loading' ? 'Processing…' : `Pay $${amount.toFixed(2)}`}
      </button>
    </form>
  )
}

// ── PayPal ─────────────────────────────────────────────────────────────────
function PayPalTab({ amount, packageName, service, onSuccess }: {
  amount:      number
  packageName: string
  service:     string
  onSuccess:   () => void
}) {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID

  if (!clientId) {
    return <PaymentNotConfigured label="PayPal" />
  }

  return (
    <PayPalScriptProvider options={{ clientId, currency: 'USD', intent: 'capture' }}>
      <PayPalInner
        amount={amount}
        packageName={packageName}
        service={service}
        onSuccess={onSuccess}
      />
    </PayPalScriptProvider>
  )
}

function PayPalInner({ amount, packageName, service, onSuccess }: {
  amount:      number
  packageName: string
  service:     string
  onSuccess:   () => void
}) {
  const [error, setError] = useState('')

  async function createOrder() {
    const res = await fetch('/api/payment/paypal/order', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ amount, packageName, service }),
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.error || 'Order creation failed')
    return data.id as string
  }

  async function onApprove(data: { orderID: string }) {
    setError('')
    const res = await fetch(`/api/payment/paypal/capture/${data.orderID}`, { method: 'POST' })
    if (res.ok) {
      onSuccess()
    } else {
      const err = await res.json()
      setError(err.error || 'Payment capture failed. Please contact support.')
    }
  }

  return (
    <div className="flex flex-col gap-3">
      {error && (
        <p className="flex items-center gap-2 text-sm text-red-400">
          <AlertCircle size={14} /> {error}
        </p>
      )}
      <PayPalButtons
        style={{ layout: 'vertical', color: 'gold', shape: 'rect', label: 'pay', height: 48 }}
        createOrder={createOrder}
        onApprove={onApprove}
        onError={() => setError('PayPal encountered an error. Please try again or choose another payment method.')}
      />
    </div>
  )
}

// ── Square ─────────────────────────────────────────────────────────────────
function SquareTab({ amount, sectorColor }: { amount: number; sectorColor: string }) {
  const appId      = process.env.NEXT_PUBLIC_SQUARE_APP_ID
  const locationId = process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID

  if (!appId) return <PaymentNotConfigured label="Square" />

  return (
    <div className="flex flex-col gap-4 items-center text-center">
      <Building2 size={36} style={{ color: sectorColor }} />
      <p className="text-sm text-white/60">
        Square Web Payments — App ID: <span className="font-mono text-white/80 text-xs">{appId}</span>
      </p>
      <p className="text-xs text-white/40">Location: {locationId}</p>
      <div className="rounded-xl border border-white/10 bg-white/5 p-4 w-full">
        <p className="text-sm text-white/50">Square card form loads here when keys are configured.</p>
      </div>
      <p className="text-sm font-semibold" style={{ color: sectorColor }}>Amount due: ${amount.toFixed(2)}</p>
    </div>
  )
}

// ── Cash App ───────────────────────────────────────────────────────────────
function CashAppTab({ amount, sectorColor }: { amount: number; sectorColor: string }) {
  if (!process.env.NEXT_PUBLIC_SQUARE_APP_ID) return <PaymentNotConfigured label="Cash App Pay" />

  return (
    <div className="flex flex-col gap-4 items-center text-center">
      <div className="w-14 h-14 rounded-2xl bg-[#00D632] flex items-center justify-center">
        <span className="text-black font-black text-xl">$</span>
      </div>
      <p className="text-white/60 text-sm">Cash App Pay via Square SDK</p>
      <div className="rounded-xl border border-white/10 bg-white/5 p-4 w-full">
        <p className="text-sm text-white/50">Cash App Pay button loads via Square Web Payments SDK.</p>
      </div>
      <p className="text-sm font-semibold" style={{ color: sectorColor }}>Amount due: ${amount.toFixed(2)}</p>
    </div>
  )
}

// ── Zelle ─────────────────────────────────────────────────────────────────
function ZelleTab({ amount, sectorColor }: { amount: number; sectorColor: string }) {
  const [copied, setCopied] = useState<string | null>(null)

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

  const CopyBtn = ({ value, id }: { value: string; id: string }) => (
    <button onClick={() => copy(value, id)} className="ml-auto text-white/40 hover:text-white transition-colors">
      {copied === id ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
    </button>
  )

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-[#6D1ED4] flex items-center justify-center">
          <span className="text-white font-black text-lg">Z</span>
        </div>
        <div>
          <p className="text-white font-semibold">Send via Zelle</p>
          <p className="text-white/40 text-xs">Instant bank transfer — no fees</p>
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 divide-y divide-white/5">
        <div className="flex items-center gap-3 px-4 py-3">
          <span className="text-white/40 text-xs w-16">Name</span>
          <span className="text-white text-sm font-medium flex-1">One United Enterprise LLC</span>
          <CopyBtn value="One United Enterprise LLC" id="name" />
        </div>
        <div className="flex items-center gap-3 px-4 py-3">
          <span className="text-white/40 text-xs w-16">Email</span>
          <span className="text-white text-sm font-medium flex-1">payments@oneunitedenterprise.com</span>
          <CopyBtn value="payments@oneunitedenterprise.com" id="email" />
        </div>
        <div className="flex items-center gap-3 px-4 py-3">
          <span className="text-white/40 text-xs w-16">Amount</span>
          <span className="font-semibold flex-1" style={{ color: sectorColor }}>${amount.toFixed(2)}</span>
          <CopyBtn value={amount.toFixed(2)} id="amount" />
        </div>
      </div>

      <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-3">
        <p className="text-xs text-amber-300/80 leading-relaxed">
          After sending, email <strong>payments@oneunitedenterprise.com</strong> with your name,
          the service purchased, and your Zelle confirmation number to activate your account.
        </p>
      </div>
    </div>
  )
}

// ── Not configured ─────────────────────────────────────────────────────────
function PaymentNotConfigured({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-3 py-8 text-center">
      <AlertCircle size={28} className="text-amber-400" />
      <p className="text-white/60 text-sm">{label} is not yet configured.</p>
      <p className="text-white/30 text-xs">
        Add your {label} credentials to the environment to enable this payment method.
      </p>
    </div>
  )
}

// ── Success ─────────────────────────────────────────────────────────────────
function SuccessScreen({ pkg, sectorColor, onClose }: { pkg: Package; sectorColor: string; onClose: () => void }) {
  return (
    <div className="flex flex-col items-center gap-6 py-8 text-center">
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center"
        style={{ background: `${sectorColor}20`, border: `2px solid ${sectorColor}60` }}
      >
        <CheckCircle2 size={40} style={{ color: sectorColor }} />
      </div>
      <div>
        <h3 className="font-display text-2xl text-white mb-2">Payment Confirmed!</h3>
        <p className="text-white/50 text-sm">
          You’ve successfully enrolled in <strong className="text-white">{pkg.name}</strong>.
        </p>
        <p className="text-white/40 text-xs mt-1">
          A confirmation email is on its way. We’ll be in touch within 24 hours.
        </p>
      </div>
      <button
        onClick={onClose}
        className="px-8 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:scale-[1.02]"
        style={{ background: sectorColor }}
      >
        Done
      </button>
    </div>
  )
}

// ── Stripe provider ─────────────────────────────────────────────────────────
let stripePromise: ReturnType<typeof loadStripe> | null = null
function getStripe() {
  const pk = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  if (!pk || pk.includes('YOUR_')) return null
  if (!stripePromise) stripePromise = loadStripe(pk)
  return stripePromise
}

// ── Main modal ─────────────────────────────────────────────────────────────
export default function PaymentModal({ isOpen, onClose, pkg, service, sectorColor }: PaymentModalProps) {
  const [method,  setMethod]  = useState<PayMethod>('zelle')
  const [success, setSuccess] = useState(false)
  const promo  = usePromo(pkg.price)
  const stripe = getStripe()

  useEffect(() => {
    if (!isOpen) { setSuccess(false); setMethod('zelle') }
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  const METHODS: { id: PayMethod; label: string; icon: string }[] = [
    { id: 'zelle',   label: 'Zelle',    icon: 'Z' },
    { id: 'stripe',  label: 'Card',     icon: '💳' },
    { id: 'paypal',  label: 'PayPal',   icon: 'P' },
    { id: 'cashapp', label: 'Cash App', icon: '$' },
    { id: 'square',  label: 'Square',   icon: '□' },
  ]

  const amount = promo.finalAmount || promo.baseAmount

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(7,7,15,0.85)', backdropFilter: 'blur(12px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="relative w-full max-w-md rounded-2xl flex flex-col max-h-[90vh] overflow-y-auto"
        style={{ background: '#12121F', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-0">
          <div>
            <h2 className="font-display text-xl text-white">{pkg.name}</h2>
            <div className="flex items-baseline gap-1.5 mt-1">
              <span className="font-display text-3xl font-light" style={{ color: sectorColor }}>{pkg.price}</span>
              <span className="text-white/35 text-xs">{pkg.period}</span>
            </div>
          </div>
          <button onClick={onClose} className="text-white/30 hover:text-white transition-colors mt-1">
            <X size={20} />
          </button>
        </div>

        <div className="px-6 pt-4 pb-6 flex flex-col gap-5">
          {success ? (
            <SuccessScreen pkg={pkg} sectorColor={sectorColor} onClose={onClose} />
          ) : (
            <>
              {/* Promo code */}
              <div className="flex flex-col gap-2">
                <label className="text-xs text-white/40 font-medium tracking-wide uppercase">Promo Code</label>
                {promo.applied ? (
                  <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-green-500/30 bg-green-500/10">
                    <Tag size={14} className="text-green-400" />
                    <span className="text-green-300 text-sm flex-1">{promo.applied.label}</span>
                    <button onClick={promo.remove} className="text-white/30 hover:text-white">
                      <X size={13} />
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promo.code}
                      onChange={e => promo.setCode(e.target.value.toUpperCase())}
                      onKeyDown={e => e.key === 'Enter' && promo.apply()}
                      placeholder="Enter code…"
                      className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white placeholder-white/25 outline-none focus:border-white/25 font-mono tracking-widest"
                    />
                    <button
                      onClick={promo.apply}
                      disabled={promo.loading || !promo.code}
                      className="px-4 rounded-xl text-sm font-semibold transition-all hover:scale-[1.03] disabled:opacity-40"
                      style={{ background: sectorColor, color: '#07070F' }}
                    >
                      {promo.loading ? <Loader2 size={14} className="animate-spin" /> : 'Apply'}
                    </button>
                  </div>
                )}
                {promo.error && <p className="text-xs text-red-400">{promo.error}</p>}
              </div>

              {/* Discounted total */}
              {promo.applied && (
                <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-sm">
                  <span className="text-white/50">Total after discount</span>
                  <span className="font-semibold" style={{ color: sectorColor }}>${amount.toFixed(2)}</span>
                </div>
              )}

              {/* Method tabs */}
              <div>
                <label className="text-xs text-white/40 font-medium tracking-wide uppercase mb-2 block">Payment Method</label>
                <div className="flex gap-2 flex-wrap">
                  {METHODS.map(m => (
                    <button
                      key={m.id}
                      onClick={() => setMethod(m.id)}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all"
                      style={method === m.id
                        ? { background: `${sectorColor}20`, border: `1px solid ${sectorColor}50`, color: sectorColor }
                        : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.45)' }
                      }
                    >
                      <span>{m.icon}</span> {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active method */}
              <div>
                {method === 'stripe' && (
                  stripe
                    ? <Elements stripe={stripe}>
                        <StripeForm
                          amount={amount}
                          pkg={pkg}
                          service={service}
                          sectorColor={sectorColor}
                          promoCode={promo.applied ? promo.code : ''}
                          onSuccess={() => setSuccess(true)}
                        />
                      </Elements>
                    : <PaymentNotConfigured label="Stripe" />
                )}
                {method === 'paypal' && (
                  <PayPalTab
                    amount={amount}
                    packageName={pkg.name}
                    service={service}
                    onSuccess={() => setSuccess(true)}
                  />
                )}
                {method === 'square'  && <SquareTab  amount={amount} sectorColor={sectorColor} />}
                {method === 'cashapp' && <CashAppTab amount={amount} sectorColor={sectorColor} />}
                {method === 'zelle'   && <ZelleTab   amount={amount} sectorColor={sectorColor} />}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
