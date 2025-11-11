import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import FeatureSection from "@/components/feature-section"
import Footer from "@/components/footer"
import { hrAssistantFeature, salesAgentFeature, dataAnalysisFeature, feedbackAnalysisFeature } from "@/lib/features"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 py-16 space-y-32">
        <FeatureSection id="hr-assistant" feature={hrAssistantFeature} reversed={false} />
        <FeatureSection id="sales-agent" feature={salesAgentFeature} reversed={true} />
        <FeatureSection id="data-analysis" feature={dataAnalysisFeature} reversed={false} />
        <FeatureSection id="feedback-analysis" feature={feedbackAnalysisFeature} reversed={true} />
      </div>
      <Footer />
    </div>
  )
}
