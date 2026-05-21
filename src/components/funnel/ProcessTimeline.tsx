import { type Service, type Sector } from '@/data/config'
import SectionLabel from '@/components/ui/SectionLabel'

interface ProcessTimelineProps { sector: Sector; service: Service }

export default function ProcessTimeline({ sector, service }: ProcessTimelineProps) {
  return (
    <section className="section-padding container-wide mx-auto px-6">
      <div className="text-center mb-16">
        <SectionLabel color={sector.color} className="justify-center">Our Process</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl font-light text-white">
          How We <span style={{ color: sector.color }}>Deliver</span>
        </h2>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-px" style={{ background: `linear-gradient(to bottom, ${sector.color}60, transparent)` }} />

        <div className="flex flex-col gap-10">
          {service.process.map((step, i) => (
            <div key={step.title} className="flex gap-8 relative">
              {/* Step number */}
              <div
                className="relative z-10 w-16 h-16 flex-shrink-0 rounded-2xl flex items-center justify-center font-display text-xl font-semibold"
                style={{ background: `${sector.color}15`, border: `2px solid ${sector.color}40`, color: sector.color }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="pt-3 flex-1">
                <div className="font-body text-xs tracking-[0.2em] uppercase mb-1" style={{ color: sector.color }}>
                  {step.duration}
                </div>
                <h3 className="font-display text-2xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="font-body text-sm text-white/50 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
