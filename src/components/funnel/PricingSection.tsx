'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { type Service, type Sector } from '@/data/config'
import GlassCard from '@/components/ui/GlassCard'
import SectionLabel from '@/components/ui/SectionLabel'
import PaymentModal from '@/components/payment/PaymentModal'

interface PricingSectionProps { sector: Sector; service: Service }

type SelectedPkg = { name: string; price: string; period: string; cta: string } | null

export default function PricingSection({ sector, service }: PricingSectionProps) {
  const [selected, setSelected] = useState<SelectedPkg>(null)

  return (
    <>
      <section id="pricing" className="section-padding bg-surface/30 border-y border-black/7">
        <div className="container-wide mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel color={sector.color} className="justify-center">Investment</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Choose Your <span style={{ color: sector.color }}>Package</span>
            </h2>
            <p className="font-body text-gray-900/50 max-w-xl mx-auto">
              Transparent pricing. No hidden fees. Cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {service.packages.map(pkg => {
              const isFeatured = pkg.highlight
              return (
                <GlassCard
                  key={pkg.name}
                  className={`relative flex flex-col p-8 transition-all duration-300 hover:-translate-y-2 ${isFeatured ? 'ring-1' : ''}`}
                  style={isFeatured ? { '--tw-ring-color': sector.color } as React.CSSProperties : {}}
                >
                  {isFeatured && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-body font-semibold text-gray-900 tracking-wide"
                      style={{ background: sector.color }}
                    >
                      Most Popular
                    </div>
                  )}

                  {isFeatured && (
                    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${sector.color}, transparent)` }} />
                  )}

                  <div className="mb-6">
                    <h3 className="font-display text-2xl font-semibold text-gray-900 mb-1">{pkg.name}</h3>
                  </div>

                  <div className="mb-8">
                    <div className="font-display text-4xl font-light" style={{ color: isFeatured ? sector.color : 'white' }}>
                      {pkg.price}
                    </div>
                    <div className="font-body text-xs text-gray-900/35 mt-1">{pkg.period}</div>
                  </div>

                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-start gap-2 font-body text-sm text-gray-900/60">
                        <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: sector.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelected({ name: pkg.name, price: pkg.price, period: pkg.period, cta: pkg.cta })}
                    className="flex items-center justify-center gap-2 font-body text-sm font-semibold py-3.5 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                    style={isFeatured
                      ? { background: sector.color, boxShadow: `0 0 20px ${sector.color}40`, color: '#07070F' }
                      : { border: `1px solid ${sector.color}30`, color: sector.color }
                    }
                  >
                    {pkg.cta}
                  </button>
                </GlassCard>
              )
            })}
          </div>
        </div>
      </section>

      {selected && (
        <PaymentModal
          isOpen={!!selected}
          onClose={() => setSelected(null)}
          pkg={selected}
          service={service.id}
          sectorColor={sector.color}
        />
      )}
    </>
  )
}
