import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BRAND } from '@/data/config'

export default function HomeCTA() {
  return (
    <section className="section-padding px-6">
      <div className="container-narrow mx-auto text-center">
        <div className="relative rounded-3xl overflow-hidden border border-gold/20 p-12 md:p-20">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold/8 via-surface to-surface pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-gold/10 rounded-full blur-[60px] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="font-display text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
              Ready to Build <br />
              <span className="text-gradient-gold">Something Extraordinary?</span>
            </h2>
            <p className="font-body text-white/50 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Schedule a complimentary strategy session with our leadership team. No commitment required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={BRAND.calendly}
                target="_blank"
                className="inline-flex items-center gap-2 font-body text-base font-semibold px-10 py-4 rounded-xl bg-gradient-to-r from-gold-dark via-gold to-gold-light text-base hover:shadow-gold hover:scale-[1.02] transition-all duration-300"
              >
                Book Your Strategy Call
                <ArrowRight size={18} />
              </Link>
              <Link
                href={`mailto:${BRAND.email}`}
                className="inline-flex items-center gap-2 font-body text-sm font-medium px-8 py-4 rounded-xl border border-white/10 text-white/60 hover:border-white/20 hover:text-white transition-all duration-300"
              >
                Send Us an Email
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
