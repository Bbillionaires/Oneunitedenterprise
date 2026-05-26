'use client'

import { Sun, Moon, SunMoon } from 'lucide-react'
import { useTheme, type ThemePreference } from '@/context/ThemeContext'

const CYCLE: ThemePreference[] = ['auto', 'light', 'dark']

const LABELS: Record<ThemePreference, string> = {
  auto:  'Auto (Eastern Time)',
  light: 'Day',
  dark:  'Night',
}

export default function ThemeToggle() {
  const { preference, setPreference, isDark } = useTheme()

  function cycle() {
    const next = CYCLE[(CYCLE.indexOf(preference) + 1) % CYCLE.length]
    setPreference(next)
  }

  const Icon = preference === 'auto' ? SunMoon : preference === 'light' ? Sun : Moon

  return (
    <button
      onClick={cycle}
      title={`${LABELS[preference]} — click to cycle`}
      className="p-2 rounded-lg transition-all duration-200 flex items-center justify-center"
      style={{
        color:      isDark ? 'rgba(245,240,232,0.55)' : 'rgba(20,20,20,0.45)',
        background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
        border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
      }}
    >
      <Icon size={15} />
    </button>
  )
}
