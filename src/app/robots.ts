import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    sitemap: 'https://oneunitedenterprise.vercel.app/sitemap.xml',
    host: 'https://oneunitedenterprise.vercel.app',
  }
}
