import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, TrendingUp, Users, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-crypto-green/10 via-crypto-purple/5 to-crypto-gold/10">
      <div className="container mx-auto">
        <Card className="p-12 bg-card border-crypto-green/30 crypto-glow-green max-w-4xl mx-auto text-center">
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Ready to Start Your Perpetual Contracts Success?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join successful perpetual contracts traders who've already transformed their financial future. 
            Your journey to consistent derivatives profits starts today.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-3 p-4 bg-crypto-green/10 border border-crypto-green/20 rounded-lg">
              <TrendingUp className="w-6 h-6 text-crypto-green" />
              <div className="text-left">
                <div className="font-semibold text-crypto-green">Proven Perpetual Results</div>
                <div className="text-sm text-muted-foreground">Consistent derivatives profits</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-crypto-gold/10 border border-crypto-gold/20 rounded-lg">
              <Shield className="w-6 h-6 text-crypto-gold" />
              <div className="text-left">
                <div className="font-semibold text-crypto-gold">Proven System</div>
                <div className="text-sm text-muted-foreground">Professional risk management</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-crypto-purple/10 border border-crypto-purple/20 rounded-lg">
              <Users className="w-6 h-6 text-crypto-purple" />
              <div className="text-left">
                <div className="font-semibold text-crypto-purple">Community</div>
                <div className="text-sm text-muted-foreground">Active perpetual contracts community</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-crypto-green hover:bg-crypto-green/90 text-crypto-green-foreground text-lg px-8 py-4">
              🚀 Get Started with Your Profitable Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-crypto-gold/50 hover:bg-crypto-gold/10 bg-transparent text-crypto-gold">
              Download Free Guide
            </Button>
          </div>


          <div className="p-6 bg-muted/50 rounded-lg">
            <h3 className="font-bold text-lg mb-4 text-crypto-green">What You Get Today:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-crypto-green rounded-full" />
                  <span className="text-sm">Complete Perpetual Contracts Course (8 hours)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-crypto-green rounded-full" />
                  <span className="text-sm">Live Trading Signals (3 months)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-crypto-green rounded-full" />
                  <span className="text-sm">$100K Virtual Trading Simulator</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-crypto-green rounded-full" />
                  <span className="text-sm">Professional Trading Tools</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-crypto-green rounded-full" />
                  <span className="text-sm">Private Discord Community</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-crypto-green rounded-full" />
                  <span className="text-sm">Weekly Live Q&A Sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-crypto-green rounded-full" />
                  <span className="text-sm">1-on-1 Strategy Session (30 min)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-crypto-green rounded-full" />
                  <span className="text-sm">Lifetime Access to Updates</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            ⚡ Secure checkout • Instant access • Cancel anytime
          </p>
        </Card>
      </div>
    </section>
  )
}
