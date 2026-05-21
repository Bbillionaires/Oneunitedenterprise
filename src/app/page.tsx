import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/home/HeroSection'
import SectorGrid from '@/components/home/SectorGrid'
import TrustBar from '@/components/home/TrustBar'
import HomeCTA from '@/components/home/HomeCTA'

export default function HomePage() {
  return (
    <>
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
