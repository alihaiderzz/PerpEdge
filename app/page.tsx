import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SalesSection } from "@/components/sales-section"
import { TradingSimulator } from "@/components/trading-simulator"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"
import { CryptoAnimations } from "@/components/crypto-animations"

export default function Home() {
  return (
    <main className="min-h-screen crypto-background crypto-grid relative">
      <CryptoAnimations />
          <div className="relative z-10">
            <Header />
            <HeroSection />
            <SalesSection />
            <TradingSimulator />
            <PricingSection />
            <Footer />
          </div>
    </main>
  )
}
