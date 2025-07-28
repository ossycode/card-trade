import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { FinalCTASection } from '@/components/FinalCTA'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Hero />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <CallToAction />
      <FinalCTASection />
      <Faqs />
    </>
  )
}
