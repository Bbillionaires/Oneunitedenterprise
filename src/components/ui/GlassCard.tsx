import { cn } from '@/lib/utils'
import { type HTMLAttributes } from 'react'

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  glow?: string
  hover?: boolean
  variant?: 'default' | 'dark' | 'light'
}

export default function GlassCard({ className, glow, hover = true, variant = 'default', children, style, ...props }: GlassCardProps) {
  const variants = {
    default: 'bg-card/80 backdrop-blur-xl border border-black/7',
    dark: 'bg-base/90 backdrop-blur-xl border border-black/5',
    light: 'bg-card2/70 backdrop-blur-lg border border-black/10',
  }

  return (
    <div
      className={cn(
        'rounded-2xl transition-all duration-300',
        variants[variant],
        hover && 'hover:-translate-y-1 hover:border-black/12',
        className
      )}
      style={{
        boxShadow: '0 4px 24px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.04) inset',
        ...(glow ? { '--glow': glow } as React.CSSProperties : {}),
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  )
}
