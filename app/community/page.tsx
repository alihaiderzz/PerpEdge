import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CryptoAnimations } from "@/components/crypto-animations"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CommunityPage() {
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-balance">
                Join the
                <br />
                <span className="gradient-text">PerpEdge Trading Community</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                Learn, share, and grow with traders who are mastering perpetual contracts.
              </p>
            </div>
          </div>
        </section>
        
        <div className="py-20 px-4">
          <div className="container mx-auto">
            <Card className="p-6 sm:p-8 lg:p-12 bg-card border-crypto-green/30 crypto-glow-green max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 gradient-text">What's Inside</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-left">
                    <span className="text-2xl">📈</span>
                    <span className="text-lg">Member-only strategy discussions</span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <span className="text-2xl">🛠️</span>
                    <span className="text-lg">Exclusive trading tools & calculators</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-left">
                    <span className="text-2xl">🎯</span>
                    <span className="text-lg">Monthly insights & resources</span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <span className="text-2xl">🤝</span>
                    <span className="text-lg">Peer support and accountability</span>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-crypto-green hover:bg-crypto-green/90 text-crypto-green-foreground text-base sm:text-lg px-6 sm:px-8 py-4 w-full sm:w-auto">
                🔥 Join the Community — $97/month
              </Button>
            </Card>
          </div>
        </div>
        
        <Footer />
      </div>
    </main>
  )
}
