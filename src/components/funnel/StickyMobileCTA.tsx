'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { type Service, type Sector, BRAND } from '@/data/config'

interface StickyMobileCTAProps { sector: Sector; service: Service }

export default function StickyMobileCTA({ sector, service }: StickyMobileCTAProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden border-t border-black/10 bg-base/95 backdrop-blur-xl px-4 py-3 flex gap-3">
      <a
        href="#lead-form"
        className="flex-1 flex items-center justify-center gap-2 font-body text-sm font-semibold py-3 rounded-xl border border-black/10 text-gray-900/70 hover:text-gray-900 transition-colors"
      >
        Contact Us
      </a>
      <Link
        href={service.calendlyUrl || BRAND.calendly}
        target="_blank"
        className="flex-1 flex items-center justify-center gap-2 font-body text-sm font-semibold py-3 rounded-xl transition-all duration-300"
        style={{ background: sector.color }}
      >
        Book a Call
        <ArrowRight size={14} />
      </Link>
    </div>
  )
}
