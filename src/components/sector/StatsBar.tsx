import { type Sector } from '@/data/config'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

interface StatsBarProps { sector: Sector }

export default function StatsBar({ sector }: StatsBarProps) {
  return (
    <div className="border-y border-white/7 bg-surface/40">
      <div className="container-wide mx-auto px-6 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {sector.stats.map(stat => {
            const numericValue = parseFloat(stat.value.replace(/[^0-9.]/g, ''))
            const autoSuffix = stat.suffix || stat.value.replace(/[0-9.,]/g, '')
            return (
              <div key={stat.label} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-light mb-1" style={{ color: sector.color }}>
                  {stat.prefix && <span>{stat.prefix}</span>}
                  <AnimatedCounter
                    target={numericValue}
                    decimals={stat.value.includes('.') ? 1 : 0}
                    suffix={autoSuffix}
                  />
                </div>
                <div className="font-body text-xs text-white/35 tracking-wide uppercase">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
