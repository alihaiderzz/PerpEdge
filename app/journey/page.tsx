import { Header } from "@/components/header"
import { TradingChart } from "@/components/trading-chart"
import { LearningPath } from "@/components/learning-path"
import { LearningRoadmap } from "@/components/learning-roadmap"
import { AchievementBadges } from "@/components/achievement-badges"
import { Footer } from "@/components/footer"
import { CryptoAnimations } from "@/components/crypto-animations"

export default function JourneyPage() {
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
                Master Your
                <br />
                <span className="gradient-text">Trading Journey</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                Your complete path to mastering perpetual contracts trading. Transform from beginner to advanced trader with our structured curriculum.
              </p>
            </div>
          </div>
        </section>
        
        <TradingChart />
        
        <LearningPath />
        <LearningRoadmap />
        <AchievementBadges />
        
        <Footer />
      </div>
    </main>
  )
}
