'use client'
import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { type Service, type Sector, BRAND } from '@/data/config'
import SectionLabel from '@/components/ui/SectionLabel'
import { getAffiliateCode } from '@/components/AffiliateTracker'

interface LeadFormProps { sector: Sector; service: Service }

export default function LeadForm({ sector, service }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const affiliateCode = getAffiliateCode()
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          sector: sector.id,
          service: service.id,
          ...(affiliateCode ? { affiliate_code: affiliateCode } : {}),
        }),
      })
    } catch {}
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section className="section-padding container-wide mx-auto px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <SectionLabel color={sector.color} className="justify-center">Get Started</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-light text-gray-900 mb-3">
            Let's <span style={{ color: sector.color }}>Connect</span>
          </h2>
          <p className="font-body text-gray-900/50">
            Tell us about your needs and we'll be in touch within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-16">
            <CheckCircle2 size={48} className="mx-auto mb-4" style={{ color: sector.color }} />
            <h3 className="font-display text-3xl text-gray-900 mb-3">Message Received!</h3>
            <p className="font-body text-gray-900/50">Our team will reach out within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-body text-xs text-gray-900/40 mb-2 tracking-wide uppercase">Full Name *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-card/80 border border-black/7 rounded-xl px-4 py-3.5 font-body text-sm text-gray-900 placeholder-white/25 focus:outline-none focus:border-opacity-60 transition-colors"
                  style={{ '--focus-border': sector.color } as React.CSSProperties}
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block font-body text-xs text-gray-900/40 mb-2 tracking-wide uppercase">Email *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-card/80 border border-black/7 rounded-xl px-4 py-3.5 font-body text-sm text-gray-900 placeholder-white/25 focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>
            </div>
            <div>
              <label className="block font-body text-xs text-gray-900/40 mb-2 tracking-wide uppercase">Company</label>
              <input
                type="text"
                value={form.company}
                onChange={e => setForm({ ...form, company: e.target.value })}
                className="w-full bg-card/80 border border-black/7 rounded-xl px-4 py-3.5 font-body text-sm text-gray-900 placeholder-white/25 focus:outline-none transition-colors"
                placeholder="Your Company"
              />
            </div>
            <div>
              <label className="block font-body text-xs text-gray-900/40 mb-2 tracking-wide uppercase">How can we help?</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full bg-card/80 border border-black/7 rounded-xl px-4 py-3.5 font-body text-sm text-gray-900 placeholder-white/25 focus:outline-none transition-colors resize-none"
                placeholder={`Tell us about your ${service.name.toLowerCase()} needs...`}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 font-body text-sm font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-[1.01] disabled:opacity-50"
              style={{ background: sector.color, boxShadow: `0 0 30px ${sector.color}40` }}
            >
              {loading ? (
                <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
              ) : (
                <>Send Message <ArrowRight size={16} /></>
              )}
            </button>
            <p className="font-body text-xs text-gray-900/25 text-center">
              Or{' '}
              <a href={service.calendlyUrl || BRAND.calendly} target="_blank" className="underline hover:text-gray-900/50 transition-colors" style={{ color: sector.color }}>
                book a call directly
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
