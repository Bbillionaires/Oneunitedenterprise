'use client'

import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react'
import { getSolarProgress } from '@/lib/solarTheme'

export type ThemePreference = 'auto' | 'light' | 'dark'

interface ThemeContextValue {
  isDark: boolean
  /** 0 = full day, 1 = full night — use this for smooth canvas transitions */
  progress: number
  preference: ThemePreference
  setPreference: (p: ThemePreference) => void
}

const ThemeContext = createContext<ThemeContextValue>({
  isDark: false,
  progress: 0,
  preference: 'auto',
  setPreference: () => {},
})

export function useTheme() {
  return useContext(ThemeContext)
}

function resolveProgress(pref: ThemePreference): number {
  if (pref === 'light') return 0
  if (pref === 'dark')  return 1
  return getSolarProgress()
}

function applyDarkClass(p: number) {
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('dark', p > 0.5)
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [preference, setPref]   = useState<ThemePreference>('auto')
  const [progress,   setProgress] = useState(0)
  const prefRef = useRef<ThemePreference>('auto')

  // Hydrate from localStorage once on mount
  useEffect(() => {
    const stored = (localStorage.getItem('oe-theme') as ThemePreference) ?? 'auto'
    prefRef.current = stored
    setPref(stored)
    const p = resolveProgress(stored)
    setProgress(p)
    applyDarkClass(p)
  }, [])

  // Auto mode: recalculate every 60 s (covers sunrise/sunset window smoothly)
  useEffect(() => {
    const tick = () => {
      if (prefRef.current !== 'auto') return
      const p = getSolarProgress()
      setProgress(p)
      applyDarkClass(p)
    }
    const id = setInterval(tick, 60_000)
    return () => clearInterval(id)
  }, [])

  const setPreference = useCallback((pref: ThemePreference) => {
    prefRef.current = pref
    localStorage.setItem('oe-theme', pref)
    setPref(pref)
    const p = resolveProgress(pref)
    setProgress(p)
    applyDarkClass(p)
  }, [])

  return (
    <ThemeContext.Provider value={{ isDark: progress > 0.5, progress, preference, setPreference }}>
      {children}
    </ThemeContext.Provider>
  )
}
