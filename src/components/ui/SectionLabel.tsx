import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  color?: string
  className?: string
}

export default function SectionLabel({ children, color, className }: SectionLabelProps) {
  return (
    <div className={cn('inline-flex items-center gap-2 mb-4', className)}>
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: color || 'var(--gold)', boxShadow: `0 0 8px ${color || 'var(--gold)'}` }}
      />
      <span
        className="text-xs font-semibold tracking-[0.2em] uppercase font-body"
        style={{ color: color || 'var(--gold)' }}
      >
        {children}
      </span>
    </div>
  )
}
