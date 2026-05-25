'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { SECTORS, BRAND } from '@/data/config'
import { cn } from '@/lib/utils'

const PLANET_IDS = [
  'film', 'consulting', 'nonprofit', 'medical', 'investment',
  'technology', 'education', 'infrastructure', 'legal', 'agriculture', 'energy',
]

const PLANETS = SECTORS.filter(s => PLANET_IDS.includes(s.id))

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname  = usePathname()
  const dropRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false); setDropdownOpen(false) }, [pathname])

  // Close dropdown on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const activePlanet = PLANETS.find(s => pathname.startsWith(`/${s.id}`))

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled ? 'bg-base/90 backdrop-blur-xl border-b border-white/7 py-3' : 'py-5'
      )}
    >
      <nav className="container-wide px-6 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none flex-shrink-0">
          <span className="font-display text-lg font-semibold text-gold tracking-wide">ONE UNITED</span>
          <span className="font-body text-[10px] tracking-[0.3em] text-white/40 uppercase">Enterprise LLC</span>
        </Link>

        {/* Desktop — Sectors dropdown */}
        <div className="hidden lg:flex items-center gap-6 flex-1 justify-center" ref={dropRef}>
          <button
            onClick={() => setDropdownOpen(v => !v)}
            className={cn(
              'flex items-center gap-1.5 font-body text-sm font-medium transition-colors duration-200',
              dropdownOpen ? 'text-gold' : 'text-white/60 hover:text-white'
            )}
          >
            Sectors
            <ChevronDown
              size={14}
              className={cn('transition-transform duration-200', dropdownOpen && 'rotate-180')}
            />
          </button>

          {/* Dropdown panel */}
          {dropdownOpen && (
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[780px] rounded-2xl border border-white/10 p-5 shadow-2xl"
              style={{ background: 'rgba(10,10,18,0.97)', backdropFilter: 'blur(20px)' }}
            >
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-white/25 mb-4 px-1">
                ★ The Solar System — Choose a Planet
              </p>
              <div className="grid grid-cols-4 gap-2">
                {PLANETS.map(s => (
                  <Link
                    key={s.id}
                    href={`/${s.id}`}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl transition-all duration-200 group"
                    style={{
                      background: pathname.startsWith(`/${s.id}`) ? `${s.color}18` : 'transparent',
                      border: `1px solid ${pathname.startsWith(`/${s.id}`) ? s.color + '35' : 'transparent'}`,
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = `${s.color}12`)}
                    onMouseLeave={e => (e.currentTarget.style.background = pathname.startsWith(`/${s.id}`) ? `${s.color}18` : 'transparent')}
                  >
                    <span className="text-base flex-shrink-0">{s.icon}</span>
                    <div className="min-w-0">
                      <p
                        className="font-body text-xs font-semibold leading-tight truncate"
                        style={{ color: pathname.startsWith(`/${s.id}`) ? s.color : 'rgba(255,255,255,0.75)' }}
                      >
                        {s.shortName}
                      </p>
                      <p className="font-body text-[10px] text-white/30 leading-tight truncate mt-0.5">
                        {s.name}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
          {activePlanet && (
            <span
              className="font-body text-xs px-3 py-1.5 rounded-full border"
              style={{ color: activePlanet.color, borderColor: `${activePlanet.color}40`, background: `${activePlanet.color}10` }}
            >
              {activePlanet.icon} {activePlanet.shortName}
            </span>
          )}
          <Link
            href={BRAND.calendly}
            target="_blank"
            className="font-body text-sm font-semibold px-5 py-2.5 rounded-lg bg-gradient-to-r from-gold-dark via-gold to-gold-light text-base hover:shadow-gold transition-all duration-300"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-white/70 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-surface/95 backdrop-blur-xl border-t border-white/7">
          <div className="px-6 py-5">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-white/25 mb-3">
              ★ The Solar System
            </p>
            <div className="grid grid-cols-2 gap-2 mb-5">
              {PLANETS.map(s => (
                <Link
                  key={s.id}
                  href={`/${s.id}`}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl border transition-colors"
                  style={{
                    borderColor: pathname.startsWith(`/${s.id}`) ? `${s.color}50` : 'rgba(255,255,255,0.07)',
                    background: pathname.startsWith(`/${s.id}`) ? `${s.color}12` : 'rgba(255,255,255,0.02)',
                  }}
                >
                  <span className="text-sm">{s.icon}</span>
                  <span
                    className="font-body text-xs font-medium leading-tight"
                    style={{ color: pathname.startsWith(`/${s.id}`) ? s.color : 'rgba(255,255,255,0.65)' }}
                  >
                    {s.shortName}
                  </span>
                </Link>
              ))}
            </div>
            <Link
              href={BRAND.calendly}
              target="_blank"
              className="block text-center font-body text-sm font-semibold px-5 py-3 rounded-lg bg-gradient-to-r from-gold-dark via-gold to-gold-light text-base"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
