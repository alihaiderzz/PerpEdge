import { Header } from "@/components/header"
import { TradingSimulator } from "@/components/trading-simulator"
import { PositionCalculator } from "@/components/position-calculator"
import { FundingTracker } from "@/components/funding-tracker"
import { Footer } from "@/components/footer"
import { CryptoAnimations } from "@/components/crypto-animations"

export default function ToolsPage() {
  return (
    <main className="min-h-screen crypto-background crypto-grid relative">
      <CryptoAnimations />
      <div className="relative z-10">
        <Header />
        
        <section className="py-20 px-4 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
                <span className="gradient-text">Perpetual Contract Tools</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                Access our suite of professional-grade perpetual contracts trading tools to maximize your success in the derivatives market.
              </p>
            </div>
          </div>
        </section>
        
        <div className="py-20 px-4">
          <div className="container mx-auto">
            
            <TradingSimulator />
            
            <div className="grid lg:grid-cols-2 gap-8 mt-16">
              <PositionCalculator />
              <FundingTracker />
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </main>
  )
}
