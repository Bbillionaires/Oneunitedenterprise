import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { type Sector } from '@/data/config'
import { BRAND } from '@/data/config'

interface SectorHeroProps { sector: Sector }

export default function SectorHero({ sector }: SectorHeroProps) {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-end px-6 pb-20 pt-32 overflow-hidden">
      {/* Cinematic background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 20% 50%, ${sector.glow} 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, ${sector.glow}60 0%, transparent 50%)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-base via-base/40 to-transparent pointer-events-none" />

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${sector.color}, transparent)` }} />

      <div className="relative z-10 container-wide mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-body text-xs text-white/30 mb-8">
          <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span style={{ color: sector.color }}>{sector.shortName}</span>
        </div>

        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border" style={{ borderColor: `${sector.color}30`, background: `${sector.color}10` }}>
            <span className="w-1.5 h-1.5 rounded-full animate-glow-pulse" style={{ background: sector.color }} />
            <span className="font-body text-xs tracking-[0.2em] uppercase" style={{ color: sector.color }}>{sector.name}</span>
          </div>

          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] text-white mb-6">
            {sector.heroHeadline}
          </h1>

          <p className="font-body text-xl text-white/55 max-w-2xl leading-relaxed mb-10">
            {sector.heroSub}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={BRAND.calendly}
              target="_blank"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
              style={{ background: sector.color, boxShadow: `0 0 30px ${sector.color}40` }}
            >
              Start a Conversation
              <ArrowRight size={16} />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center gap-2 font-body text-sm font-medium px-8 py-4 rounded-xl border border-white/10 text-white/60 hover:border-white/20 hover:text-white transition-all duration-300"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
