import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl crypto-float" />
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl crypto-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Master Perpetual Contracts Trading and Learn How to
            <br />
            <span className="gradient-text">Grow Your Capital</span> — While Controlling Risk
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Master the same perpetual contracts trading strategies used by professional derivatives traders. Join successful students who've transformed their approach to crypto derivatives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-crypto-green hover:bg-crypto-green/90 text-crypto-green-foreground crypto-glow-green text-lg px-8 py-4">
              🚀 Get Started with Your Profitable Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-crypto-gold/50 hover:bg-crypto-gold/10 bg-transparent text-crypto-gold">
              Download Free Guide
            </Button>
          </div>



          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="p-6 bg-crypto-green/10 border-crypto-green/20 hover:bg-crypto-green/20 transition-all duration-300 crypto-float">
              <div className="w-12 h-12 bg-crypto-green/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="w-6 h-6 text-crypto-green" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-crypto-green">💰 Perpetual Contracts Strategies</h3>
              <p className="text-muted-foreground text-sm">
                Learn the same risk management and position sizing techniques used by institutional derivatives traders
              </p>
            </Card>

            <Card
              className="p-6 bg-crypto-gold/10 border-crypto-gold/20 hover:bg-crypto-gold/20 transition-all duration-300 crypto-float"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="w-12 h-12 bg-crypto-gold/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-6 h-6 text-crypto-gold" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-crypto-gold">🛡️ Risk-Free Perpetual Trading</h3>
              <p className="text-muted-foreground text-sm">
                Practice perpetual contracts trading with our $100K virtual simulator before risking real money
              </p>
            </Card>

            <Card
              className="p-6 bg-crypto-purple/10 border-crypto-purple/20 hover:bg-crypto-purple/20 transition-all duration-300 crypto-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="w-12 h-12 bg-crypto-purple/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-crypto-purple" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-crypto-purple">⚡ Live Perpetual Signals</h3>
              <p className="text-muted-foreground text-sm">
                Get real-time perpetual contracts alerts and entry/exit signals from our professional derivatives trading team
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
