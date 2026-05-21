import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { type Sector } from '@/data/config'
import { BRAND } from '@/data/config'

interface FunnelCTAProps { sector: Sector }

export default function FunnelCTA({ sector }: FunnelCTAProps) {
  return (
    <section className="section-padding px-6">
      <div className="container-narrow mx-auto text-center">
        <div
          className="rounded-3xl p-12 md:p-20 border relative overflow-hidden"
          style={{ borderColor: `${sector.color}30`, background: `linear-gradient(135deg, ${sector.color}10 0%, var(--surface) 100%)` }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 blur-[60px] pointer-events-none"
            style={{ background: `${sector.color}20` }}
          />
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="font-body text-white/50 mb-8 max-w-lg mx-auto">
              Let's discuss how our {sector.name} services can transform your outcomes.
            </p>
            <Link
              href={BRAND.calendly}
              target="_blank"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
              style={{ background: sector.color, boxShadow: `0 0 30px ${sector.color}40` }}
            >
              Book a Free Consultation
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
