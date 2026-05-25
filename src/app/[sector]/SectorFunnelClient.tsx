'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { type Sector, type Service } from '@/data/config'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// ─── Black Hole Overlay ────────────────────────────────────────────────────
function BlackHoleOverlay({ color }: { color: string }) {
  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black">
      {/* Spinning concentric rings */}
      {[0, 1, 2, 3, 4].map(i => (
        <div
          key={i}
          className="absolute rounded-full border-2"
          style={{
            width:  80 + i * 56,
            height: 80 + i * 56,
            borderColor: i === 0 ? color : `rgba(212,162,23,${0.55 - i * 0.1})`,
            animation: `spin ${0.35 + i * 0.12}s linear infinite ${i % 2 === 0 ? 'normal' : 'reverse'}`,
          }}
        />
      ))}

      {/* Event horizon */}
      <div
        className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center"
        style={{ background: 'radial-gradient(circle, #0a0012 40%, #1a0020 100%)' }}
      >
        <div
          className="w-10 h-10 rounded-full animate-pulse"
          style={{ background: 'radial-gradient(circle, #050008, #000)' }}
        />
      </div>

      <p className="absolute bottom-16 font-body text-[11px] tracking-[0.45em] uppercase animate-pulse"
        style={{ color: 'rgba(212,162,23,0.5)' }}>
        Entering the system…
      </p>
    </div>
  )
}

// ─── Star Card ────────────────────────────────────────────────────────────
function StarCard({
  service, sector, index, onClick,
}: {
  service: Service; sector: Sector; index: number; onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="group w-full text-left rounded-2xl border p-8 relative overflow-hidden transition-all duration-400 hover:-translate-y-2 focus:outline-none"
      style={{
        borderColor: `${sector.color}28`,
        background: `radial-gradient(ellipse at 50% 0%, ${sector.color}12 0%, rgba(5,5,14,0.97) 65%)`,
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-px transition-all duration-500 group-hover:w-full"
        style={{ background: `linear-gradient(90deg, transparent, ${sector.color}, transparent)` }}
      />

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top, ${sector.glow} 0%, transparent 60%)` }}
      />

      {/* Star marker */}
      <div className="relative z-10 flex items-center gap-3 mb-5">
        <div
          className="flex items-center justify-center w-10 h-10 rounded-full text-lg font-bold transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${sector.color}20`, border: `1.5px solid ${sector.color}50`, color: sector.color }}
        >
          ★
        </div>
        <span
          className="font-body text-[10px] tracking-[0.25em] uppercase"
          style={{ color: sector.color }}
        >
          Star {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="font-display text-xl font-semibold text-white mb-2 leading-tight relative z-10">
        ★ {service.name}
      </h3>
      <p className="font-body text-sm text-white/50 leading-relaxed mb-6 relative z-10">
        {service.tagline}
      </p>

      {/* Key pain points as bullets */}
      <ul className="flex flex-col gap-2 mb-6 relative z-10">
        {service.painPoints.slice(0, 3).map(pp => (
          <li key={pp.title} className="flex items-start gap-2 font-body text-xs text-white/40">
            <span className="mt-0.5 flex-shrink-0" style={{ color: sector.color }}>✦</span>
            {pp.title}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div
        className="relative z-10 inline-flex items-center gap-2 font-body text-xs font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 group-hover:gap-3"
        style={{ background: `${sector.color}18`, border: `1px solid ${sector.color}40`, color: sector.color }}
      >
        Enter This Star <ChevronRight size={14} />
      </div>
    </button>
  )
}

// ─── JSON-LD ───────────────────────────────────────────────────────────────
function ServiceJsonLd({ sector }: { sector: Sector }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: sector.name,
    description: sector.tagline,
    provider: {
      '@type': 'Organization',
      name: 'One United Enterprise LLC',
      url: 'https://oneunitedenterprise.vercel.app',
    },
    url: `https://oneunitedenterprise.vercel.app/${sector.id}`,
    serviceType: sector.name,
    areaServed: 'United States',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${sector.name} Services`,
      itemListElement: sector.services.map((s, i) => ({
        '@type': 'Offer', position: i + 1, name: s.name, description: s.tagline,
      })),
    },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

// ─── Main Page ─────────────────────────────────────────────────────────────
export default function SectorFunnelClient({ sector }: { sector: Sector }) {
  const router = useRouter()
  const [entering, setEntering] = useState(false)

  async function handleStarClick(serviceId: string) {
    setEntering(true)
    await new Promise(r => setTimeout(r, 900))
    router.push(`/service/${sector.id}/${serviceId}`)
  }

  return (
    <>
      <ServiceJsonLd sector={sector} />
      {entering && <BlackHoleOverlay color={sector.color} />}

      <Navbar />
      <main style={{ background: '#07070F', minHeight: '100vh' }}>

        {/* ── Planet Hero ─────────────────────────────────────────── */}
        <section
          className="relative min-h-[60vh] flex flex-col justify-center items-center text-center px-6 pt-36 pb-24 overflow-hidden"
        >
          {/* Radial atmosphere */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 50% 0%, ${sector.glow} 0%, transparent 60%)` }}
          />
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${sector.color}, transparent)` }} />

          {/* Orbital rings behind planet icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="rounded-full border border-gold/8" style={{ width: 340, height: 340, margin: -170 }} />
            <div className="absolute rounded-full border border-gold/5" style={{ width: 520, height: 520, top: -90, left: -90 }} />
          </div>

          {/* Breadcrumb */}
          <div className="relative z-10 flex items-center gap-2 font-body text-xs text-white/30 mb-10">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span style={{ color: `${sector.color}cc` }}>{sector.name}</span>
          </div>

          {/* Planet disc */}
          <div
            className="relative z-10 flex items-center justify-center mb-8 rounded-full"
            style={{
              width: 130, height: 130,
              background: `radial-gradient(circle at 38% 32%, ${sector.color}40 0%, ${sector.color}16 40%, rgba(5,5,14,0.97) 100%)`,
              border: '2.5px solid #D4A217',
              boxShadow: `0 0 40px ${sector.glow}, 0 0 80px ${sector.glow}25`,
            }}
          >
            <span className="text-5xl">{sector.icon}</span>
          </div>

          <div className="relative z-10">
            <div
              className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border font-body text-[10px] tracking-[0.25em] uppercase"
              style={{ borderColor: `${sector.color}30`, background: `${sector.color}10`, color: sector.color }}
            >
              {sector.shortName} — Select Your Star
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4 leading-[1.05]">
              {sector.name}
            </h1>
            <p className="font-body text-lg text-white/50 max-w-2xl leading-relaxed">
              {sector.tagline}
            </p>
          </div>

          {/* Down arrow */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
            <span className="font-body text-[9px] tracking-[0.3em] uppercase text-white/40">Choose a Star</span>
            <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
          </div>
        </section>

        {/* ── Stars Picker ────────────────────────────────────────── */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-body text-xs text-white/30 tracking-[0.3em] uppercase mb-3">
                ★ Stars in the {sector.shortName} System
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-light text-white">
                Which <span style={{ color: sector.color }}>Star</span> Will You Enter?
              </h2>
              <p className="font-body text-sm text-white/40 mt-3 max-w-lg mx-auto">
                Each star is a dedicated service. Click to enter its black hole and access pricing, the team, and enrollment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sector.services.map((service, i) => (
                <StarCard
                  key={service.id}
                  service={service}
                  sector={sector}
                  index={i}
                  onClick={() => handleStarClick(service.id)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ──────────────────────────────────────────── */}
        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div
              className="rounded-3xl p-10 border relative overflow-hidden"
              style={{ borderColor: `${sector.color}20`, background: `linear-gradient(135deg, ${sector.color}08 0%, rgba(5,5,14,0.97) 100%)` }}
            >
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-16 blur-[50px] pointer-events-none"
                style={{ background: `${sector.color}20` }}
              />
              <p className="font-display text-2xl font-light text-white mb-2 relative z-10">Not sure which star?</p>
              <p className="font-body text-sm text-white/40 mb-6 relative z-10">
                Book a free strategy call — we&apos;ll map the right path through the system.
              </p>
              <a
                href="https://calendly.com/oneunitedenterprise"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                style={{ background: sector.color, color: '#07070F' }}
              >
                Book a Free Consultation
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
