import { cn } from '@/lib/utils'
import { type ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'ghost' | 'outline' | 'sector'
  size?: 'sm' | 'md' | 'lg'
  sectorColor?: string
  loading?: boolean
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'gold', size = 'md', sectorColor, loading, children, disabled, asChild, ...props }, ref) => {
    const base = 'inline-flex items-center justify-center gap-2 font-body font-semibold tracking-wide transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden'

    const sizes = {
      sm: 'px-5 py-2.5 text-sm rounded-lg',
      md: 'px-7 py-3.5 text-sm rounded-xl',
      lg: 'px-10 py-4 text-base rounded-xl',
    }

    const variants = {
      gold: 'bg-gradient-to-r from-gold-dark via-gold to-gold-light text-base hover:shadow-gold hover:scale-[1.02] active:scale-[0.98]',
      ghost: 'text-gold hover:text-gold-light hover:bg-gold/10',
      outline: 'border border-gold/30 text-gold hover:border-gold/60 hover:bg-gold/5',
      sector: 'text-white hover:scale-[1.02] active:scale-[0.98]',
    }

    const sectorStyle = variant === 'sector' && sectorColor
      ? { background: sectorColor, boxShadow: `0 0 30px ${sectorColor}40` }
      : {}

    return (
      <button
        ref={ref}
        className={cn(base, sizes[size], variants[variant], className)}
        style={sectorStyle}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
