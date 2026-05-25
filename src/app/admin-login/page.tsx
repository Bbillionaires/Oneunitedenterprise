'use client'
import { useState, FormEvent, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Loader2, Lock, Eye, EyeOff } from 'lucide-react'

function LoginForm() {
  const [password, setPassword] = useState('')
  const [show,     setShow]     = useState(false)
  const [error,    setError]    = useState('')
  const [loading,  setLoading]  = useState(false)
  const router = useRouter()
  const params = useSearchParams()
  const from   = params.get('from') || '/admin'

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/auth', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ password }),
      })
      if (res.ok) {
        router.push(from)
        router.refresh()
      } else {
        const data = await res.json()
        setError(data.error || 'Invalid password')
      }
    } catch {
      setError('Network error — please try again')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div
        className="w-full max-w-sm rounded-2xl p-8 flex flex-col gap-6"
        style={{ background: '#12121F', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 0 60px rgba(201,168,76,0.06)' }}
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
            <Lock size={20} className="text-gold" />
          </div>
          <div>
            <div className="font-display text-gold tracking-wider text-xs uppercase mb-1">One United Enterprise</div>
            <h1 className="font-display text-2xl text-white">Admin Access</h1>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <input
              type={show ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Admin password"
              autoFocus
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-11 text-sm text-white placeholder-white/25 outline-none focus:border-gold/40 font-body transition-colors"
            />
            <button type="button" onClick={() => setShow(s => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors p-1">
              {show ? <EyeOff size={14} /> : <Eye size={14} />}
            </button>
          </div>
          {error && (
            <p className="text-xs text-red-400 text-center bg-red-400/5 border border-red-400/20 rounded-lg px-3 py-2">{error}</p>
          )}
          <button type="submit" disabled={loading || !password}
            className="flex items-center justify-center gap-2 py-3 rounded-xl font-body text-sm font-semibold text-black bg-gradient-to-r from-gold-dark via-gold to-gold-light hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed">
            {loading ? <Loader2 size={16} className="animate-spin text-black" /> : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default function AdminLoginPage() {
  return <Suspense fallback={null}><LoginForm /></Suspense>
}
