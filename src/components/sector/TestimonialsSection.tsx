import { Star } from 'lucide-react'
import { type Sector } from '@/data/config'
import GlassCard from '@/components/ui/GlassCard'
import SectionLabel from '@/components/ui/SectionLabel'

interface TestimonialsSectionProps { sector: Sector }

export default function TestimonialsSection({ sector }: TestimonialsSectionProps) {
  if (!sector.testimonials.length) return null
  return (
    <section className="section-padding bg-surface/30 border-y border-white/7">
      <div className="container-wide mx-auto px-6">
        <div className="text-center mb-12">
          <SectionLabel color={sector.color} className="justify-center">Client Stories</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white">
            What Our <span style={{ color: sector.color }}>Clients Say</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sector.testimonials.map(t => (
            <GlassCard key={t.name} className="p-8 flex flex-col gap-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill={sector.color} style={{ color: sector.color }} />
                ))}
              </div>
              <p className="font-body text-sm text-white/65 leading-relaxed flex-1">"{t.quote}"</p>
              <div>
                <div className="font-body text-sm font-semibold text-white">{t.name}</div>
                <div className="font-body text-xs text-white/35">{t.title}, {t.company}</div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
