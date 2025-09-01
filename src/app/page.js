
import HeroSection from '@/components/home/HeroSection'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import ServicesOverview from '@/components/home/ServicesOverview'
import FeaturesSection from '@/components/home/FeaturesSection'
import WorkLocations from '@/components/home/WorkLocations'
import CallToAction from '@/components/home/CallToAction'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhyChooseUs />
      {/* <ServicesOverview /> */}
      <FeaturesSection />
      {/* <WorkLocations /> */}
      {/* <CallToAction /> */}
    </main>
  )
}