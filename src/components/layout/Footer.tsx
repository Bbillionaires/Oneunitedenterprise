import Link from 'next/link'
import { SECTORS, BRAND } from '@/data/config'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/7 pt-16 pb-8">
      <div className="container-wide px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="font-display text-xl font-semibold text-gold tracking-wide">ONE UNITED</div>
              <div className="font-body text-[10px] tracking-[0.3em] text-white/40 uppercase">Enterprise LLC</div>
            </div>
            <p className="font-body text-sm text-white/50 leading-relaxed mb-6">
              {BRAND.tagline}
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/40">
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 hover:text-gold transition-colors">
                <Mail size={14} />
                {BRAND.email}
              </a>
              {BRAND.phone && (
                <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2 hover:text-gold transition-colors">
                  <Phone size={14} />
                  {BRAND.phone}
                </a>
              )}
              {BRAND.address && (
                <span className="flex items-center gap-2">
                  <MapPin size={14} />
                  {BRAND.address}
                </span>
              )}
            </div>
          </div>

          {/* Sectors */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-white/30 mb-5">Our Sectors</h4>
            <ul className="flex flex-col gap-3">
              {SECTORS.map(s => (
                <li key={s.id}>
                  <Link
                    href={`/sector/${s.id}`}
                    className="font-body text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full opacity-60" style={{ background: s.color }} />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services quick links */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-white/30 mb-5">Services</h4>
            <ul className="flex flex-col gap-3">
              {SECTORS.map(s => s.services[0] && (
                <li key={s.services[0].id}>
                  <Link
                    href={`/service/${s.id}/${s.services[0].id}`}
                    className="font-body text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {s.services[0].name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-white/30 mb-5">Ready to Start?</h4>
            <p className="font-body text-sm text-white/50 mb-5 leading-relaxed">
              Schedule a complimentary strategy call with our leadership team.
            </p>
            <Link
              href={BRAND.calendly}
              target="_blank"
              className="inline-block font-body text-sm font-semibold px-6 py-3 rounded-xl bg-gradient-to-r from-gold-dark via-gold to-gold-light text-base hover:shadow-gold transition-all duration-300"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        <div className="border-t border-white/7 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/25">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="font-body text-xs text-white/25 hover:text-white/50 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="font-body text-xs text-white/25 hover:text-white/50 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
