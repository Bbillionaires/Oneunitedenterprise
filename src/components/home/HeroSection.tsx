'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { BRAND } from '@/data/config'

export default function HeroSection() {
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = lineRef.current
    if (!el) return
    const t = setTimeout(() => el.classList.add('w-24'), 300)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Background radial rings */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-gold/3" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full border border-gold/2" />
      </div>

      {/* Ambient orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gold/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto animate-fade-up">
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-gold/20 bg-gold/5">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-glow-pulse" />
          <span className="font-body text-xs tracking-[0.25em] uppercase text-gold/80">Premium Enterprise Ecosystem</span>
        </div>

        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-6">
          <span className="text-white">One Universe.</span>
          <br />
          <span className="text-gradient-gold">Infinite Reach.</span>
        </h1>

        {/* Animated gold line */}
        <div className="flex justify-center mb-8">
          <div
            ref={lineRef}
            className="h-px bg-gradient-to-r from-transparent via-gold to-transparent transition-all duration-1000 ease-out w-0"
          />
        </div>

        <p className="font-body text-lg md:text-xl text-white/55 max-w-2xl mx-auto leading-relaxed mb-12">
          {BRAND.sub}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={BRAND.calendly}
            target="_blank"
            className="inline-flex items-center gap-2 font-body text-base font-semibold px-10 py-4 rounded-xl bg-gradient-to-r from-gold-dark via-gold to-gold-light text-base hover:shadow-gold hover:scale-[1.02] transition-all duration-300"
          >
            Schedule a Strategy Call
            <ArrowRight size={18} />
          </Link>
          <Link
            href="#sectors"
            className="inline-flex items-center gap-2 font-body text-base font-medium px-8 py-4 rounded-xl border border-white/10 text-white/60 hover:border-white/20 hover:text-white transition-all duration-300"
          >
            Explore the Planets
            <ChevronDown size={18} />
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-white/50">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  )
}
