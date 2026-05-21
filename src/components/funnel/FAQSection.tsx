'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { type Service, type Sector } from '@/data/config'
import SectionLabel from '@/components/ui/SectionLabel'
import { cn } from '@/lib/utils'

interface FAQSectionProps { sector: Sector; service: Service }

export default function FAQSection({ sector, service }: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section-padding bg-surface/30 border-t border-white/7">
      <div className="container-narrow mx-auto px-6">
        <div className="text-center mb-12">
          <SectionLabel color={sector.color} className="justify-center">FAQ</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white">
            Common <span style={{ color: sector.color }}>Questions</span>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {service.faq.map((item, i) => (
            <div
              key={item.q}
              className="rounded-2xl border border-white/7 bg-card/60 overflow-hidden transition-all duration-300"
              style={open === i ? { borderColor: `${sector.color}30` } : {}}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
              >
                <span className="font-body text-sm font-semibold text-white">{item.q}</span>
                <ChevronDown
                  size={16}
                  className={cn('flex-shrink-0 transition-transform duration-300 text-white/40', open === i && 'rotate-180')}
                  style={open === i ? { color: sector.color } : {}}
                />
              </button>
              {open === i && (
                <div className="px-7 pb-5">
                  <p className="font-body text-sm text-white/55 leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
