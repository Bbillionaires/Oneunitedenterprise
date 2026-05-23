'use client'

import { useState } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowDown, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react'
import { SECTORS, type Sector, type Service } from '@/data/config'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import LeadForm from '@/components/funnel/LeadForm'

// ─── Service Selector Card ─────────────────────────────────────────────────
function ServiceCard({
  service,
  sector,
  selected,
  index,
  onClick,
}: {
  service: Service
  sector: Sector
  selected: boolean
  index: number
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left rounded-2xl border transition-all duration-300 p-6 md:p-8 relative overflow-hidden focus:outline-none"
      style={{
        borderColor: selected ? sector.color : 'rgba(255,255,255,0.07)',
        background: selected
          ? `linear-gradient(135deg, ${sector.color}15 0%, rgba(10,10,10,0.95) 70%)`
          : 'rgba(255,255,255,0.02)',
        boxShadow: selected ? `0 0 32px ${sector.glow}, inset 0 1px 0 ${sector.color}20` : 'none',
      }}
    >
      {/* Top glow line when selected */}
      <div
        className="absolute top-0 left-0 right-0 h-px transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${sector.color}, transparent)`,
          opacity: selected ? 1 : 0,
        }}
      />

      {/* Number badge */}
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center font-display text-sm font-semibold mb-5 transition-all duration-300"
        style={{
          background: selected ? `${sector.color}30` : `${sector.color}10`,
          color: sector.color,
          border: `1px solid ${selected ? sector.color + '60' : sector.color + '20'}`,
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      <h3 className="font-display text-xl font-semibold text-white mb-2 leading-tight">
        {service.name}
      </h3>
      <p className="font-body text-sm text-white/50 leading-relaxed mb-5">{service.tagline}</p>

      {/* Pain point bullets */}
      <ul className="flex flex-col gap-2">
        {service.painPoints.slice(0, 3).map(pp => (
          <li key={pp.title} className="flex items-start gap-2 font-body text-xs text-white/40">
            <CheckCircle2
              size={12}
              className="mt-0.5 flex-shrink-0 transition-colors duration-300"
              style={{ color: selected ? sector.color : 'rgba(255,255,255,0.3)' }}
            />
            {pp.title}
          </li>
        ))}
      </ul>

      {/* Selected indicator */}
      {selected && (
        <div
          className="mt-5 inline-flex items-center gap-1.5 font-body text-xs font-semibold px-3 py-1.5 rounded-full"
          style={{ background: `${sector.color}20`, color: sector.color }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: sector.color }} />
          Selected
        </div>
      )}
    </button>
  )
}

// ─── Pain Points Section ───────────────────────────────────────────────────
function PainPointsSection({ sector, service }: { sector: Sector; service: Service }) {
  if (!service.painPoints?.length) return null
  return (
    <section className="py-20 bg-white/[0.02] border-y border-white/7">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-4 font-body text-xs tracking-[0.2em] uppercase"
            style={{ borderColor: `${sector.color}30`, background: `${sector.color}10`, color: sector.color }}
          >
            The Problem
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-3">
            Sound <span className="text-white/35">Familiar?</span>
          </h2>
          <p className="font-body text-white/45 max-w-lg mx-auto text-sm leading-relaxed">
            {service.solution}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {service.painPoints.map(pp => (
            <div
              key={pp.title}
              className="rounded-2xl border border-white/7 p-7"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-5"
                style={{ background: `${sector.color}12`, border: `1px solid ${sector.color}20` }}
              >
                {pp.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">{pp.title}</h3>
              <p className="font-body text-sm text-white/45 leading-relaxed">{pp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Inner Page (has hooks, receives validated sector) ─────────────────────
function SectorFunnelInner({ sector }: { sector: Sector }) {
  const [selectedService, setSelectedService] = useState<Service>(sector.services[0])

  return (
    <>
      <Navbar />
      <main style={{ background: '#0a0a0a', minHeight: '100vh' }}>

        {/* ── Section A: Hero ─────────────────────────────────────── */}
        <section className="relative min-h-[80vh] flex flex-col justify-end px-6 pb-20 pt-36 overflow-hidden">
          {/* Radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 30% 50%, ${sector.glow} 0%, transparent 55%)` }}
          />
          {/* Gradient fade to black */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent pointer-events-none" />
          {/* Top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${sector.color}, transparent)` }}
          />

          <div className="relative z-10 max-w-6xl mx-auto w-full">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 font-body text-xs text-white/30 mb-8 flex-wrap">
              <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span style={{ color: `${sector.color}cc` }}>{sector.name}</span>
            </div>

            {/* Sector badge */}
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border"
              style={{ borderColor: `${sector.color}30`, background: `${sector.color}10` }}
            >
              <span className="text-lg">{sector.icon}</span>
              <span className="font-body text-xs tracking-[0.2em] uppercase" style={{ color: sector.color }}>
                {sector.shortName}
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] text-white mb-5 max-w-4xl">
              {sector.heroHeadline}
            </h1>
            <p className="font-body text-xl text-white/55 max-w-2xl leading-relaxed mb-10">
              {sector.heroSub}
            </p>

            {/* Sector stats */}
            <div className="flex flex-wrap gap-4 mb-10">
              {sector.stats.slice(0, 3).map(stat => (
                <div key={stat.label} className="px-5 py-3 rounded-xl border border-white/7 bg-white/[0.03] text-center min-w-[100px]">
                  <div className="font-display text-2xl font-semibold" style={{ color: sector.color }}>
                    {stat.prefix || ''}{stat.value}{stat.suffix || ''}
                  </div>
                  <div className="font-body text-[10px] text-white/35 tracking-wide mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Scroll CTA */}
            <a
              href="#services"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
              style={{ background: sector.color, boxShadow: `0 0 30px ${sector.color}40`, color: '#0a0a0a' }}
            >
              Choose Your Service
              <ArrowDown size={16} />
            </a>
          </div>
        </section>

        {/* ── Section B: Service Selector ─────────────────────────── */}
        <section id="services" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-4 font-body text-xs tracking-[0.2em] uppercase"
                style={{ borderColor: `${sector.color}30`, background: `${sector.color}10`, color: sector.color }}
              >
                Choose Your Service
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-3">
                What We <span style={{ color: sector.color }}>Deliver</span>
              </h2>
              <p className="font-body text-white/45 max-w-lg mx-auto text-sm">
                Select the service that best fits your needs — your selection updates the form below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {sector.services.map((service, i) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  sector={sector}
                  selected={selectedService.id === service.id}
                  index={i}
                  onClick={() => setSelectedService(service)}
                />
              ))}
            </div>

            {/* Pointer to form */}
            <div className="flex justify-center mt-10">
              <div className="flex flex-col items-center gap-2 font-body text-xs text-white/30">
                <span>
                  Selected:{' '}
                  <span style={{ color: sector.color }}>{selectedService.name}</span>
                </span>
                <a href="#pain-points" className="transition-colors hover:text-white/50">
                  <ArrowDown size={20} style={{ color: sector.color }} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section D: Pain Points ───────────────────────────────── */}
        <div id="pain-points">
          <PainPointsSection sector={sector} service={selectedService} />
        </div>

        {/* ── Section C: Lead Form ─────────────────────────────────── */}
        <div id="lead-form" className="py-8">
          <LeadForm sector={sector} service={selectedService} />
        </div>

        {/* ── Bottom CTA ───────────────────────────────────────────── */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="rounded-3xl p-12 border relative overflow-hidden"
              style={{
                borderColor: `${sector.color}25`,
                background: `linear-gradient(135deg, ${sector.color}08 0%, rgba(10,10,10,0.95) 100%)`,
              }}
            >
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-20 blur-[50px] pointer-events-none"
                style={{ background: `${sector.color}20` }}
              />
              <div className="relative z-10">
                <h2 className="font-display text-3xl md:text-4xl font-light text-white mb-3">
                  Prefer to Talk First?
                </h2>
                <p className="font-body text-white/45 mb-7 text-sm">
                  Book a free strategy call with our {sector.name} team.
                </p>
                <a
                  href={selectedService.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                  style={{ background: sector.color, boxShadow: `0 0 24px ${sector.color}35`, color: '#0a0a0a' }}
                >
                  Book a Free Consultation
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

// ─── Route Entry Point ─────────────────────────────────────────────────────
export default function SectorFunnelPage({ params }: { params: { sector: string } }) {
  const sector = SECTORS.find(s => s.id === params.sector)
  if (!sector) notFound()
  return <SectorFunnelInner sector={sector} />
}
