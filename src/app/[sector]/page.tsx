import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { SECTORS } from '@/data/config'
import SectorFunnelClient from './SectorFunnelClient'

const BASE_URL = 'https://oneunitedenterprise.vercel.app'

// Tell Next.js all valid sector slugs at build time
export function generateStaticParams() {
  return SECTORS.map(s => ({ sector: s.id }))
}

// Unique metadata per sector page
export async function generateMetadata(
  { params }: { params: { sector: string } }
): Promise<Metadata> {
  const sector = SECTORS.find(s => s.id === params.sector)
  if (!sector) return {}

  const title = `${sector.name} Services`
  const description = sector.heroSub
  const url = `${BASE_URL}/${sector.id}`
  const serviceNames = sector.services.map(s => s.name).join(', ')

  return {
    title,
    description,
    keywords: [
      sector.name,
      ...sector.services.map(s => s.name),
      'One United Enterprise',
      'business services',
      serviceNames,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | One United Enterprise LLC`,
      description,
      url,
      type: 'website',
      siteName: 'One United Enterprise LLC',
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${sector.name} — One United Enterprise LLC`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | One United Enterprise LLC`,
      description,
      images: [`${BASE_URL}/og-image.png`],
    },
  }
}

export default function SectorFunnelPage({ params }: { params: { sector: string } }) {
  const sector = SECTORS.find(s => s.id === params.sector)
  if (!sector) notFound()
  return <SectorFunnelClient sector={sector} />
}
