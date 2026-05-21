'use client'
import Link from 'next/link'
import { ArrowRight, Film, Briefcase, Heart, TrendingUp, Globe } from 'lucide-react'
import { SECTORS } from '@/data/config'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

const SECTOR_ICONS: Record<string, React.ElementType> = {
  film: Film,
  consulting: Briefcase,
  nonprofit: Globe,
  medical: Heart,
  investment: TrendingUp,
}

export default function SectorGrid() {
  return (
    <section id="sectors" className="section-padding container-wide mx-auto px-6">
      <div className="text-center mb-16">
        <SectionLabel className="justify-center">What We Do</SectionLabel>
        <h2 className="font-display text-5xl md:text-6xl font-light text-white mb-4">
          Five Pillars of <span className="text-gradient-gold">Excellence</span>
        </h2>
        <p className="font-body text-white/50 max-w-xl mx-auto text-lg">
          Each sector is a fully operational division with dedicated expertise, networks, and resources.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SECTORS.map((sector, i) => {
          const Icon = SECTOR_ICONS[sector.id] || Briefcase
          const isLast = i === SECTORS.length - 1
          return (
            <Link
              key={sector.id}
              href={`/sector/${sector.id}`}
              className={`group relative rounded-2xl overflow-hidden border border-white/7 transition-all duration-500 hover:-translate-y-2 hover:border-opacity-30 ${isLast ? 'md:col-span-2 lg:col-span-1' : ''}`}
              style={{
                background: `linear-gradient(135deg, ${sector.color}10 0%, rgba(13,13,28,0.95) 60%)`,
                '--sector-glow': sector.glow,
              } as React.CSSProperties}
            >
              {/* Hover glow overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${sector.glow} 0%, transparent 60%)` }}
              />

              {/* Top accent line */}
              <div className="h-px w-full" style={{ background: `linear-gradient(90deg, ${sector.color} 0%, transparent 100%)` }} />

              <div className="p-8">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${sector.color}20`, border: `1px solid ${sector.color}30` }}
                >
                  <Icon size={24} style={{ color: sector.color }} />
                </div>

                <div className="mb-2">
                  <span className="font-body text-xs tracking-[0.2em] uppercase" style={{ color: sector.color }}>
                    {sector.shortName}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-semibold text-white mb-3 leading-tight">
                  {sector.name}
                </h3>

                <p className="font-body text-sm text-white/50 leading-relaxed mb-6">
                  {sector.tagline}
                </p>

                {/* Mini stats */}
                <div className="flex gap-6 mb-8">
                  {sector.stats.slice(0, 2).map(stat => (
                    <div key={stat.label}>
                      <div className="font-display text-2xl font-semibold" style={{ color: sector.color }}>
                        <AnimatedCounter
                          target={parseFloat(stat.value.replace(/[^0-9.]/g, ''))}
                          prefix={stat.prefix || ''}
                          suffix={stat.suffix || stat.value.replace(/[0-9.]/g, '')}
                          decimals={stat.value.includes('.') ? 1 : 0}
                        />
                      </div>
                      <div className="font-body text-xs text-white/35">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div
                  className="flex items-center gap-2 font-body text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                  style={{ color: sector.color }}
                >
                  Explore Sector
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
