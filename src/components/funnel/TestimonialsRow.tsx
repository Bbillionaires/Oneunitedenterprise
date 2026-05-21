import { Star } from 'lucide-react'
import { type Service, type Sector } from '@/data/config'
import GlassCard from '@/components/ui/GlassCard'
import SectionLabel from '@/components/ui/SectionLabel'

interface TestimonialsRowProps { sector: Sector; service: Service }

export default function TestimonialsRow({ sector, service }: TestimonialsRowProps) {
  return (
    <section className="section-padding container-wide mx-auto px-6">
      <div className="text-center mb-12">
        <SectionLabel color={sector.color} className="justify-center">Client Results</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl font-light text-white">
          Real <span style={{ color: sector.color }}>Transformations</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {service.testimonials.map(t => (
          <GlassCard key={t.name} className="p-8 flex flex-col gap-4">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} fill={sector.color} style={{ color: sector.color }} />
              ))}
            </div>
            <p className="font-body text-sm text-white/65 leading-relaxed flex-1 italic">"{t.quote}"</p>
            <div className="border-t border-white/7 pt-4">
              <div className="font-body text-sm font-semibold text-white">{t.name}</div>
              <div className="font-body text-xs text-white/35">{t.title}, {t.company}</div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
