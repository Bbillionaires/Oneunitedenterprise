import type { Metadata } from 'next'
import { Suspense } from 'react'
import './globals.css'
import SpaceBackground from '@/components/SpaceBackground'
import { AffiliateTracker } from '@/components/AffiliateTracker'

const BASE_URL = 'https://oneunitedenterprise.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'One United Enterprise LLC | Multi-Industry Business Ecosystem',
    template: '%s | One United Enterprise LLC',
  },
  description: 'One United Enterprise LLC is a vertically integrated enterprise ecosystem delivering excellence across Film & Entertainment, Business Consulting, Non-Profit, Health & Medical, Investment Opportunities, and more.',
  keywords: [
    'One United Enterprise',
    'business consulting',
    'film production',
    'investment opportunities',
    'healthcare consulting',
    'nonprofit organization',
    'business ecosystem',
    'enterprise solutions',
    'DeAris Henry',
    'multi-industry company',
  ],
  authors: [{ name: 'One United Enterprise LLC', url: BASE_URL }],
  creator: 'One United Enterprise LLC',
  publisher: 'One United Enterprise LLC',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'One United Enterprise LLC',
    title: 'One United Enterprise LLC | Multi-Industry Business Ecosystem',
    description: 'A vertically integrated enterprise ecosystem delivering excellence across Film, Consulting, Non-Profit, Medical, Investment, and more.',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'One United Enterprise LLC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'One United Enterprise LLC',
    description: 'A vertically integrated enterprise ecosystem delivering excellence across multiple industries.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: '',   // Add Google Search Console verification code here when ready
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SpaceBackground />
        <Suspense fallback={null}>
          <AffiliateTracker />
        </Suspense>
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  )
}
