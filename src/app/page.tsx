import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/home/HeroSection'
import SectorGrid from '@/components/home/SectorGrid'
import TrustBar from '@/components/home/TrustBar'
import HomeCTA from '@/components/home/HomeCTA'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://oneunitedenterprise.vercel.app',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'One United Enterprise LLC',
  url: 'https://oneunitedenterprise.vercel.app',
  logo: 'https://oneunitedenterprise.vercel.app/logo.png',
  description: 'A vertically integrated enterprise ecosystem delivering excellence across Film & Entertainment, Business Consulting, Non-Profit, Health & Medical, Investment Opportunities, and more.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'oneunitedenterprisellc@gmail.com',
    areaServed: 'US',
    availableLanguage: 'English',
  },
  sameAs: [],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  knowsAbout: [
    'Film Production',
    'Business Consulting',
    'Non-Profit Management',
    'Healthcare Services',
    'Investment Opportunities',
    'Entrepreneurship',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'One United Enterprise LLC',
  url: 'https://oneunitedenterprise.vercel.app',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://oneunitedenterprise.vercel.app/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <SectorGrid />
        <HomeCTA />
      </main>
      <Footer />
    </>
  )
}
