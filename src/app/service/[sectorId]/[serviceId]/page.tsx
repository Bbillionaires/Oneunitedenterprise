import { notFound } from 'next/navigation'
import { type Metadata } from 'next'
import { SECTORS, getSector, getService } from '@/data/config'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FunnelHero from '@/components/funnel/FunnelHero'
import PainPoints from '@/components/funnel/PainPoints'
import ProcessTimeline from '@/components/funnel/ProcessTimeline'
import PricingSection from '@/components/funnel/PricingSection'
import TestimonialsRow from '@/components/funnel/TestimonialsRow'
import FAQSection from '@/components/funnel/FAQSection'
import LeadForm from '@/components/funnel/LeadForm'
import StickyMobileCTA from '@/components/funnel/StickyMobileCTA'

export function generateStaticParams() {
  return SECTORS.flatMap(s => s.services.map(svc => ({ sectorId: s.id, serviceId: svc.id })))
}

export async function generateMetadata({ params }: { params: { sectorId: string; serviceId: string } }): Promise<Metadata> {
  const service = getService(params.sectorId, params.serviceId)
  if (!service) return {}
  return {
    title: service.name,
    description: service.tagline,
  }
}

export default function ServicePage({ params }: { params: { sectorId: string; serviceId: string } }) {
  const sector = getSector(params.sectorId)
  const service = getService(params.sectorId, params.serviceId)
  if (!sector || !service) notFound()

  return (
    <>
      <Navbar />
      <main>
        <FunnelHero sector={sector} service={service} />
        <PainPoints sector={sector} service={service} />
        <ProcessTimeline sector={sector} service={service} />
        <PricingSection sector={sector} service={service} />
        <TestimonialsRow sector={sector} service={service} />
        <FAQSection sector={sector} service={service} />
        <div id="lead-form">
          <LeadForm sector={sector} service={service} />
        </div>
      </main>
      <Footer />
      <StickyMobileCTA sector={sector} service={service} />
    </>
  )
}
