import Link from 'next/link'
import { SECTORS } from '@/data/config'
import { Users, TrendingUp, BarChart2, Globe } from 'lucide-react'
import GlassCard from '@/components/ui/GlassCard'

async function getLeadStats(): Promise<{ total: number; thisMonth: number }> {
  const AZOTH_URL    = process.env.AZOTH_URL    || 'http://localhost:3002'
  const AZOTH_SECRET = process.env.AZOTH_API_SECRET
  const WORKSPACE_ID = process.env.AZOTH_WORKSPACE_ID
  const PIPELINE_ID  = process.env.AZOTH_PIPELINE_ID
  const STAGE_ID     = process.env.AZOTH_DEFAULT_STAGE_ID
  if (!AZOTH_SECRET || !WORKSPACE_ID || !PIPELINE_ID) return { total: 0, thisMonth: 0 }
  try {
    const res = await fetch(
      `${AZOTH_URL}/api/contacts?pipeline=${PIPELINE_ID}&stage=${STAGE_ID}&limit=500`,
      { headers: { 'Authorization': `Bearer ${AZOTH_SECRET}`, 'x-workspace-id': WORKSPACE_ID }, next: { revalidate: 60 } }
    )
    if (!res.ok) return { total: 0, thisMonth: 0 }
    const data     = await res.json()
    const contacts = Array.isArray(data) ? data : (data.contacts ?? [])
    const monthStart = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getTime()
    const thisMonth  = (contacts as { createdAt?: string }[]).filter(c => c.createdAt && new Date(c.createdAt).getTime() >= monthStart).length
    return { total: contacts.length, thisMonth }
  } catch { return { total: 0, thisMonth: 0 } }
}

export default async function AdminDashboard() {
  const { total, thisMonth } = await getLeadStats()
  const totalServices = SECTORS.reduce((sum, s) => sum + s.services.length, 0)
  const STAT_CARDS = [
    { label: 'Total Leads',    value: total     > 0 ? String(total)     : '—', icon: Users,     color: '#C9A84C' },
    { label: 'This Month',     value: thisMonth > 0 ? String(thisMonth) : '—', icon: TrendingUp, color: '#10C98F' },
    { label: 'Sectors Active', value: String(SECTORS.length),                  icon: Globe,     color: '#4F8EF7' },
    { label: 'Services',       value: String(totalServices),                    icon: BarChart2,  color: '#F97316' },
  ]
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-4xl font-light text-white mb-1">Dashboard</h1>
        <p className="font-body text-sm text-white/40">One United Enterprise LLC — Admin Overview</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {STAT_CARDS.map(card => {
          const Icon = card.icon
          return (
            <GlassCard key={card.label} className="p-6 flex flex-col gap-3" hover={false}>
              <div className="flex items-center justify-between">
                <span className="font-body text-xs text-white/40 uppercase tracking-wide">{card.label}</span>
                <Icon size={16} style={{ color: card.color }} />
              </div>
              <div className="font-display text-3xl font-light text-white">{card.value}</div>
            </GlassCard>
          )
        })}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard className="p-6" hover={false}>
          <h2 className="font-display text-xl text-white mb-4">Sector Overview</h2>
          <div className="flex flex-col gap-3">
            {SECTORS.map(s => (
              <div key={s.id} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ background: s.color }} />
                <span className="font-body text-sm text-white/70 flex-1">{s.name}</span>
                <span className="font-body text-sm text-white/30">{s.services.length} services</span>
              </div>
            ))}
          </div>
        </GlassCard>
        <GlassCard className="p-6" hover={false}>
          <h2 className="font-display text-xl text-white mb-4">Quick Actions</h2>
          <div className="flex flex-col gap-3">
            {[{ label: 'View All Leads', href: '/admin/leads' }, { label: 'Edit Site Content', href: '/admin/content' }, { label: 'View Homepage', href: '/' }].map(a => (
              <Link key={a.href} href={a.href}
                className="font-body text-sm text-white/60 hover:text-white transition-colors px-4 py-3 rounded-xl bg-white/3 hover:bg-white/7 border border-white/5">
                {a.label}
              </Link>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
