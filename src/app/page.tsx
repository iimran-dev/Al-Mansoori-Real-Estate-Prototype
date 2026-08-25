import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { TrustMetrics } from "@/components/sections/trust-metrics";
import { Services } from "@/components/sections/services";
import { InvestmentIntelligence } from "@/components/sections/investment-intelligence";
import { FeaturedOpportunities } from "@/components/sections/featured-opportunities";
import { WhyDubai } from "@/components/sections/why-dubai";
import { FounderStory } from "@/components/sections/founder-story";
import { InvestmentJourney } from "@/components/sections/investment-journey";
import { TrackRecord } from "@/components/sections/track-record";
import { DubaiFuture } from "@/components/sections/dubai-future";
import { Testimonials } from "@/components/sections/testimonials";
import { MarketInsights } from "@/components/sections/market-insights";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0B0D10]">
      <Header />
      <Hero />
      {/*<TrustMetrics />*/}
      <Services />
      {/*<InvestmentIntelligence />*/}
      <FeaturedOpportunities />
      <WhyDubai />
      <InvestmentJourney />
      <TrackRecord />
      <DubaiFuture />
      <Testimonials />
      <MarketInsights />
      <FinalCTA />
      <Footer />
    </main>
  );
}
