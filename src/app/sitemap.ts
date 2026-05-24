import { MetadataRoute } from 'next'
import { SECTORS } from '@/data/config'

const BASE = 'https://oneunitedenterprise.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]

  const sectorRoutes: MetadataRoute.Sitemap = SECTORS.map(sector => ({
    url: `${BASE}/${sector.id}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [...staticRoutes, ...sectorRoutes]
}
