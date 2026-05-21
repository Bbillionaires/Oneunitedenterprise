'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { SECTORS, BRAND } from '@/data/config'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled ? 'bg-base/90 backdrop-blur-xl border-b border-white/7 py-3' : 'py-5'
      )}
    >
      <nav className="container-wide px-6 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-lg font-semibold text-gold tracking-wide">ONE UNITED</span>
          <span className="font-body text-[10px] tracking-[0.3em] text-white/40 uppercase">Enterprise LLC</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {SECTORS.map(s => (
            <Link
              key={s.id}
              href={`/sector/${s.id}`}
              className="font-body text-sm text-white/60 hover:text-white transition-colors duration-200"
              style={{ '--hover-color': s.color } as React.CSSProperties}
            >
              {s.shortName}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
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
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-surface/95 backdrop-blur-xl border-t border-white/7">
          <div className="px-6 py-6 flex flex-col gap-4">
            {SECTORS.map(s => (
              <Link
                key={s.id}
                href={`/sector/${s.id}`}
                className="flex items-center gap-3 font-body text-sm text-white/70 hover:text-white py-2"
              >
                <span className="w-2 h-2 rounded-full" style={{ background: s.color }} />
                {s.name}
              </Link>
            ))}
            <Link
              href={BRAND.calendly}
              target="_blank"
              className="mt-2 text-center font-body text-sm font-semibold px-5 py-3 rounded-lg bg-gradient-to-r from-gold-dark via-gold to-gold-light text-base"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
