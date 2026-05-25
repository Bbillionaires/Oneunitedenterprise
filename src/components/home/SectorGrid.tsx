'use client'
import Link from 'next/link'
import { SECTORS } from '@/data/config'
import SectionLabel from '@/components/ui/SectionLabel'

const PLANET_SECTORS = ['film', 'consulting', 'nonprofit', 'medical', 'investment', 'technology']

export default function SectorGrid() {
  const planets = SECTORS.filter(s => PLANET_SECTORS.includes(s.id))

  return (
    <section id="sectors" className="relative section-padding overflow-hidden">
      {/* Orbital ring backdrops */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="absolute rounded-full border border-gold/6" style={{ width: 520, height: 520 }} />
        <div className="absolute rounded-full border border-gold/4" style={{ width: 820, height: 820 }} />
        <div className="absolute rounded-full border border-gold/[0.025]" style={{ width: 1120, height: 1120 }} />
        <div className="absolute rounded-full border border-gold/[0.015]" style={{ width: 1420, height: 1420 }} />
      </div>

      <div className="container-wide mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <SectionLabel className="justify-center">The Solar System</SectionLabel>
          <h2 className="font-display text-5xl md:text-6xl font-light text-white mb-4">
            Choose Your <span className="text-gradient-gold">Planet</span>
          </h2>
          <p className="font-body text-white/50 max-w-xl mx-auto text-lg">
            Each planet is a fully operational economic division. Select one to explore its stars and enter the system.
          </p>
        </div>

        {/* Planet grid — 3 top + 3 bottom */}
        <div className="flex flex-col items-center gap-10 md:gap-14">
          {/* Row 1: 3 planets */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-14">
            {planets.slice(0, 3).map(sector => (
              <PlanetCard key={sector.id} sector={sector} />
            ))}
          </div>
          {/* Row 2: 3 planets */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-14">
            {planets.slice(3).map(sector => (
              <PlanetCard key={sector.id} sector={sector} />
            ))}
          </div>
        </div>

        <p className="text-center font-body text-xs text-white/20 mt-16 tracking-widest uppercase">
          More planets coming soon — Education · Infrastructure · Legal · Agriculture · Energy
        </p>
      </div>
    </section>
  )
}

function PlanetCard({ sector }: { sector: (typeof SECTORS)[number] }) {
  return (
    <Link href={`/${sector.id}`} className="group flex flex-col items-center gap-4">
      {/* The planet */}
      <div
        className="relative flex flex-col items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-3"
        style={{
          width: 210,
          height: 210,
          borderRadius: '50%',
          background: `radial-gradient(circle at 38% 32%, ${sector.color}45 0%, ${sector.color}18 40%, rgba(5,5,14,0.97) 100%)`,
          border: '2.5px solid #D4A217',
          boxShadow: `0 0 35px ${sector.glow}, 0 0 70px ${sector.glow}22, inset 0 0 40px ${sector.color}0c`,
        }}
      >
        {/* Surface highlight — light catches top-left like a sphere */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '14%', left: '18%',
            width: '34%', height: '22%',
            borderRadius: '50%',
            background: `${sector.color}35`,
            filter: 'blur(10px)',
          }}
        />

        {/* Atmosphere ring 1 */}
        <div
          className="absolute inset-0 rounded-full border border-gold/28 transition-all duration-500 group-hover:border-gold/65 group-hover:scale-[1.04]"
          style={{ margin: -7 }}
        />
        {/* Atmosphere ring 2 */}
        <div
          className="absolute inset-0 rounded-full border border-gold/10 transition-all duration-500 group-hover:border-gold/32 group-hover:scale-[1.10]"
          style={{ margin: -18 }}
        />

        {/* Icon */}
        <span className="text-5xl mb-3 relative z-10 drop-shadow-lg">{sector.icon}</span>

        {/* Short name */}
        <span
          className="font-display text-lg font-semibold text-white text-center px-6 relative z-10 leading-tight"
        >
          {sector.shortName}
        </span>

        {/* Subtle CTA */}
        <span
          className="font-body text-[10px] tracking-[0.25em] uppercase mt-1.5 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ color: sector.color }}
        >
          Enter ↗
        </span>
      </div>

      {/* Label below planet */}
      <div className="text-center">
        <p className="font-display text-sm text-white/70 group-hover:text-white transition-colors duration-300">
          {sector.name}
        </p>
        <p className="font-body text-[11px] text-white/30 mt-0.5 max-w-[180px] leading-snug">
          {sector.tagline.split('.')[0]}
        </p>
      </div>
    </Link>
  )
}
