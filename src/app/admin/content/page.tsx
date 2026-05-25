import Link from 'next/link'
import { SECTORS } from '@/data/config'
import GlassCard from '@/components/ui/GlassCard'
import { ExternalLink, FileCode2 } from 'lucide-react'

export default function ContentPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-4xl font-light text-gray-900 mb-1">Content</h1>
        <p className="font-body text-sm text-gray-900/40">
          All site content is managed in{' '}
          <code className="font-mono text-gold text-xs bg-gold/10 px-2 py-0.5 rounded">src/data/config.ts</code>
        </p>
      </div>

      <GlassCard className="p-6 mb-6 border-gold/20" hover={false}>
        <div className="flex items-start gap-4">
          <FileCode2 size={20} className="text-gold mt-0.5 shrink-0" />
          <div>
            <h2 className="font-body text-sm font-semibold text-gray-900 mb-1">Central Config File</h2>
            <p className="font-body text-sm text-gray-900/50 leading-relaxed">
              Edit <code className="font-mono text-gold text-xs">src/data/config.ts</code> to update all sector names, service descriptions, pricing, testimonials, FAQ, and contact information. Changes rebuild automatically in dev mode.
            </p>
          </div>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SECTORS.map(sector => (
          <GlassCard key={sector.id} className="p-6" hover={false}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full" style={{ background: sector.color }} />
              <h3 className="font-body text-sm font-semibold text-gray-900">{sector.name}</h3>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                href={`/sector/${sector.id}`}
                target="_blank"
                className="flex items-center gap-2 font-body text-xs text-gray-900/40 hover:text-gray-900/70 transition-colors"
              >
                <ExternalLink size={11} />
                View Sector Page
              </Link>
              {sector.services.map(svc => (
                <Link
                  key={svc.id}
                  href={`/service/${sector.id}/${svc.id}`}
                  target="_blank"
                  className="flex items-center gap-2 font-body text-xs text-gray-900/30 hover:text-gray-900/60 transition-colors ml-3"
                >
                  <ExternalLink size={10} />
                  {svc.name}
                </Link>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}
