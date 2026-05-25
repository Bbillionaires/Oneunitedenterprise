import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { type Service, type Sector, BRAND } from '@/data/config'

interface FunnelHeroProps { sector: Sector; service: Service }

export default function FunnelHero({ sector, service }: FunnelHeroProps) {
  return (
    <section className="relative min-h-[75vh] flex flex-col justify-end px-6 pb-20 pt-36 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 30% 50%, ${sector.glow} 0%, transparent 55%)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-base via-base/30 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${sector.color}, transparent)` }} />

      <div className="relative z-10 container-wide mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-body text-xs text-gray-900/30 mb-8 flex-wrap">
          <Link href="/" className="hover:text-gray-900/60 transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href={`/${sector.id}`} className="hover:text-gray-900/60 transition-colors" style={{ color: `${sector.color}80` }}>
            {sector.shortName}
          </Link>
          <ChevronRight size={12} />
          <span className="text-gray-900/50">{service.name}</span>
        </div>

        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border" style={{ borderColor: `${sector.color}30`, background: `${sector.color}10` }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: sector.color }} />
            <span className="font-body text-xs tracking-[0.2em] uppercase" style={{ color: sector.color }}>{sector.shortName}</span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1] text-gray-900 mb-4">
            {service.heroHeadline}
          </h1>
          <p className="font-body text-xl text-gray-900/55 max-w-2xl leading-relaxed mb-10">
            {service.heroSub}
          </p>

          {/* Social proof */}
          <div className="flex items-center gap-4 mb-10">
            {service.metrics.slice(0, 3).map(m => (
              <div key={m.label} className="text-center px-5 py-3 rounded-xl border border-black/7 bg-white/3">
                <div className="font-display text-2xl font-semibold" style={{ color: sector.color }}>{m.value}</div>
                <div className="font-body text-[10px] text-gray-900/35 tracking-wide">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={service.calendlyUrl || BRAND.calendly}
              target="_blank"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
              style={{ background: sector.color, boxShadow: `0 0 30px ${sector.color}40` }}
            >
              Get Started Today
              <ArrowRight size={16} />
            </Link>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 font-body text-sm font-medium px-8 py-4 rounded-xl border border-black/10 text-gray-900/60 hover:border-black/20 hover:text-gray-900 transition-all duration-300"
            >
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
