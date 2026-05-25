import AnimatedCounter from '@/components/ui/AnimatedCounter'
import SectionLabel from '@/components/ui/SectionLabel'

const METRICS = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 12, suffix: 'M+', label: 'Revenue Generated', prefix: '$' },
  { value: 5, suffix: '', label: 'Active Sectors' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
]

export default function TrustBar() {
  return (
    <section className="section-padding border-y border-black/7 bg-surface/40">
      <div className="container-wide mx-auto px-6">
        <div className="text-center mb-12">
          <SectionLabel className="justify-center">By The Numbers</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-light text-gray-900">
            Results That <span className="text-gradient-gold">Speak</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {METRICS.map(m => (
            <div key={m.label} className="text-center">
              <div className="font-display text-5xl md:text-6xl font-light text-gradient-gold mb-2">
                <AnimatedCounter target={m.value} prefix={m.prefix} suffix={m.suffix} />
              </div>
              <div className="font-body text-sm text-gray-900/40 tracking-wide">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
