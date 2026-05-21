'use client'
import { useEffect, useState } from 'react'
import GlassCard from '@/components/ui/GlassCard'
import { Mail, Building2, Clock } from 'lucide-react'

interface Lead {
  id: string
  createdAt: string
  name: string
  email: string
  company?: string
  sector?: string
  service?: string
  message?: string
  status: string
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/leads')
      .then(r => r.json())
      .then(data => { setLeads(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-4xl font-light text-white mb-1">Leads</h1>
        <p className="font-body text-sm text-white/40">{leads.length} total enquiries</p>
      </div>

      {loading ? (
        <div className="font-body text-white/40 text-sm">Loading leads...</div>
      ) : leads.length === 0 ? (
        <GlassCard className="p-12 text-center" hover={false}>
          <p className="font-body text-white/40">No leads yet. They'll appear here when visitors fill out the contact form.</p>
        </GlassCard>
      ) : (
        <div className="flex flex-col gap-3">
          {leads.map(lead => (
            <GlassCard key={lead.id} className="p-6 flex flex-col sm:flex-row sm:items-start gap-4" hover={false}>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-body text-sm font-semibold text-white">{lead.name}</h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-body font-semibold bg-gold/15 text-gold uppercase tracking-wide">
                    {lead.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-xs text-white/40">
                  <span className="flex items-center gap-1"><Mail size={11} />{lead.email}</span>
                  {lead.company && <span className="flex items-center gap-1"><Building2 size={11} />{lead.company}</span>}
                  <span className="flex items-center gap-1"><Clock size={11} />{new Date(lead.createdAt).toLocaleDateString()}</span>
                </div>
                {lead.message && (
                  <p className="font-body text-xs text-white/40 mt-3 line-clamp-2 leading-relaxed">{lead.message}</p>
                )}
              </div>
              <div className="flex gap-2 shrink-0">
                {lead.sector && (
                  <span className="px-3 py-1 rounded-lg font-body text-xs text-white/50 bg-white/5 border border-white/7">
                    {lead.sector}
                  </span>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      )}
    </div>
  )
}
