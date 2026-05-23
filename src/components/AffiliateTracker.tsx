'use client'
/**
 * AffiliateTracker
 * Reads the ?ref= query param (set by Azoth's /r/[code] redirect)
 * and stores it in localStorage so every lead form on the site
 * can include the affiliate code automatically.
 *
 * Also reads the aff_ref cookie set by the same redirect.
 * Cookie takes precedence over URL param.
 */
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export function AffiliateTracker() {
  const searchParams = useSearchParams()

  useEffect(() => {
    // Check URL param first
    const refFromUrl = searchParams.get('ref')

    // Check cookie (set by Azoth /r/[code] redirect)
    const cookieRef = document.cookie
      .split('; ')
      .find(row => row.startsWith('aff_ref='))
      ?.split('=')[1]

    const ref = refFromUrl || cookieRef
    if (ref) {
      localStorage.setItem('aff_ref', ref)
    }
  }, [searchParams])

  return null
}

/** Call this anywhere before submitting a lead form */
export function getAffiliateCode(): string | null {
  if (typeof window === 'undefined') return null

  // Check localStorage (set by AffiliateTracker)
  const stored = localStorage.getItem('aff_ref')
  if (stored) return stored

  // Fallback: check cookie directly
  const cookieRef = document.cookie
    .split('; ')
    .find(row => row.startsWith('aff_ref='))
    ?.split('=')[1]

  return cookieRef ?? null
}
