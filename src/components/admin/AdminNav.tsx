'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { LayoutDashboard, Users, FileText, ArrowLeft, LogOut } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV = [
  { href: '/admin',         label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/leads',   label: 'Leads',     icon: Users },
  { href: '/admin/content', label: 'Content',   icon: FileText },
]

export default function AdminNav() {
  const pathname = usePathname()
  const router   = useRouter()

  async function handleLogout() {
    await fetch('/api/admin/auth', { method: 'DELETE' })
    router.push('/admin-login')
    router.refresh()
  }

  return (
    <aside className="w-60 shrink-0 bg-surface border-r border-black/7 flex flex-col min-h-screen">
      <div className="p-6 border-b border-black/7">
        <div className="font-display text-base font-semibold text-gold">ONE UNITED</div>
        <div className="font-body text-[10px] tracking-[0.2em] text-gray-900/30 uppercase">Admin Panel</div>
      </div>
      <nav className="flex-1 p-4 flex flex-col gap-1">
        {NAV.map(item => {
          const Icon   = item.icon
          const active = pathname === item.href
          return (
            <Link key={item.href} href={item.href}
              className={cn('flex items-center gap-3 px-4 py-3 rounded-xl font-body text-sm transition-all duration-200',
                active ? 'bg-gold/10 text-gold' : 'text-gray-900/50 hover:text-gray-900 hover:bg-white/5')}
            >
              <Icon size={16} />{item.label}
            </Link>
          )
        })}
      </nav>
      <div className="p-4 border-t border-black/7 flex flex-col gap-2">
        <Link href="/" className="flex items-center gap-2 font-body text-xs text-gray-900/30 hover:text-gray-900/60 transition-colors">
          <ArrowLeft size={14} />Back to Site
        </Link>
        <button onClick={handleLogout}
          className="flex items-center gap-2 font-body text-xs text-gray-900/30 hover:text-red-400/70 transition-colors text-left w-full">
          <LogOut size={14} />Sign Out
        </button>
      </div>
    </aside>
  )
}
