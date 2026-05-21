import { notFound } from 'next/navigation'
import { type Metadata } from 'next'
import { SECTORS, getSector } from '@/data/config'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectorHero from '@/components/sector/SectorHero'
import StatsBar from '@/components/sector/StatsBar'
import ServiceGrid from '@/components/sector/ServiceGrid'
import TestimonialsSection from '@/components/sector/TestimonialsSection'
import FunnelCTA from '@/components/sector/FunnelCTA'

export function generateStaticParams() {
  return SECTORS.map(s => ({ id: s.id }))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const sector = getSector(params.id)
  if (!sector) return {}
  return {
    title: sector.name,
    description: sector.tagline,
  }
}

export default function SectorPage({ params }: { params: { id: string } }) {
  const sector = getSector(params.id)
  if (!sector) notFound()

  return (
    <>
      <Navbar />
      <main>
        <SectorHero sector={sector} />
        <StatsBar sector={sector} />
        <ServiceGrid sector={sector} />
        <TestimonialsSection sector={sector} />
        <FunnelCTA sector={sector} />
      </main>
      <Footer />
    </>
  )
}
