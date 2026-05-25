import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { type Sector } from '@/data/config'
import SectionLabel from '@/components/ui/SectionLabel'
import GlassCard from '@/components/ui/GlassCard'

interface ServiceGridProps { sector: Sector }

export default function ServiceGrid({ sector }: ServiceGridProps) {
  return (
    <section id="services" className="section-padding container-wide mx-auto px-6">
      <div className="text-center mb-16">
        <SectionLabel color={sector.color} className="justify-center">Our Services</SectionLabel>
        <h2 className="font-display text-5xl md:text-6xl font-light text-gray-900 mb-4">
          What We <span style={{ color: sector.color }}>Deliver</span>
        </h2>
        <p className="font-body text-gray-900/50 max-w-xl mx-auto">
          Three specialized service offerings, each engineered for maximum impact.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {sector.services.map((service, i) => (
          <GlassCard
            key={service.id}
            hover={false}
            className="group relative flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            glow={sector.glow}
          >
            <Link href={`/service/${sector.id}/${service.id}`} className="flex flex-col flex-1 p-8">
              {/* Number badge */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-display text-lg font-semibold mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${sector.color}20`, color: sector.color, border: `1px solid ${sector.color}30` }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Top border glow on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${sector.color}, transparent)` }}
              />

              <h3 className="font-display text-2xl font-semibold text-gray-900 mb-3 leading-tight">{service.name}</h3>
              <p className="font-body text-sm text-gray-900/50 leading-relaxed mb-6">{service.tagline}</p>

              {/* Pain point preview */}
              <ul className="flex flex-col gap-2 mb-8 flex-1">
                {service.painPoints.slice(0, 3).map(pp => (
                  <li key={pp.title} className="flex items-start gap-2 font-body text-sm text-gray-900/45">
                    <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: sector.color }} />
                    {pp.title}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div
                className="flex items-center gap-2 font-body text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                style={{ color: sector.color }}
              >
                Learn More
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
