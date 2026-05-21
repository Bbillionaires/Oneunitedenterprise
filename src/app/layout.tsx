import type { Metadata } from 'next'
import './globals.css'
import SpaceBackground from '@/components/SpaceBackground'

export const metadata: Metadata = {
  title: {
    default: 'One United Enterprise LLC',
    template: '%s | One United Enterprise LLC',
  },
  description: 'A vertically integrated enterprise ecosystem delivering excellence across Film & Entertainment, Business Consulting, Non-Profit initiatives, Health & Medical, and Investment & Acquisition.',
  keywords: ['One United Enterprise', 'business consulting', 'film production', 'investment', 'healthcare', 'nonprofit'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'One United Enterprise LLC',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SpaceBackground />
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  )
}
