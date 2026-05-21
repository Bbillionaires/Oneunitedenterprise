import { AlertCircle } from 'lucide-react'
import { type Service, type Sector } from '@/data/config'
import GlassCard from '@/components/ui/GlassCard'
import SectionLabel from '@/components/ui/SectionLabel'

interface PainPointsProps { sector: Sector; service: Service }

export default function PainPoints({ sector, service }: PainPointsProps) {
  return (
    <section className="section-padding bg-surface/30 border-y border-white/7">
      <div className="container-wide mx-auto px-6">
        <div className="text-center mb-12">
          <SectionLabel color={sector.color} className="justify-center">The Problem</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-4">
            Sound <span className="text-white/40">Familiar?</span>
          </h2>
          <p className="font-body text-white/50 max-w-xl mx-auto">
            {service.solution}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.painPoints.map(pp => (
            <GlassCard key={pp.title} className="p-8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: `${sector.color}15`, border: `1px solid ${sector.color}25` }}>
                <AlertCircle size={20} style={{ color: sector.color }} />
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-3">{pp.title}</h3>
              <p className="font-body text-sm text-white/50 leading-relaxed">{pp.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
