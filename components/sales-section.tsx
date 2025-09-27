import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingDown, AlertTriangle, DollarSign, ArrowRight } from "lucide-react"

export function SalesSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-crypto-red/10 via-crypto-red/5 to-crypto-red/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-crypto-red/20 text-crypto-red border-crypto-red/30 mb-6">
            ⚠️ WAKE UP CALL
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Tired of Losing Money on Perpetual Contracts?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            You've been getting rekt by poor risk management, over-leveraging, and emotional trading on perpetual contracts. 
            It's time to stop gambling and start making REAL money with professional derivatives trading strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-crypto-red/10 border-crypto-red/20 crypto-glow-bearish">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-crypto-red/20 rounded-lg flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-crypto-red" />
              </div>
              <h3 className="text-2xl font-bold text-crypto-red">What You're Losing Right Now</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-crypto-red rounded-full" />
                <span className="text-muted-foreground">Getting liquidated on perpetual contracts due to poor risk management</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-crypto-red rounded-full" />
                <span className="text-muted-foreground">Over-leveraging and losing everything on one bad trade</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-crypto-red rounded-full" />
                <span className="text-muted-foreground">No understanding of funding rates and mark prices</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-crypto-red rounded-full" />
                <span className="text-muted-foreground">Following signals without understanding perpetual contracts mechanics</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-crypto-red rounded-full" />
                <span className="text-muted-foreground">Trading emotions instead of systematic strategies</span>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-crypto-green/10 border-crypto-green/20 crypto-glow-bullish">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-crypto-green/20 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-crypto-green" />
              </div>
              <h3 className="text-2xl font-bold text-crypto-green">What You'll Gain</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-crypto-green rounded-full" />
                <span className="text-muted-foreground">Professional risk management for perpetual contracts trading</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-crypto-green rounded-full" />
                <span className="text-muted-foreground">Systematic perpetual contracts strategies that actually work</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-crypto-green rounded-full" />
                <span className="text-muted-foreground">Master funding rates, mark prices, and liquidation mechanics</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-crypto-green rounded-full" />
                <span className="text-muted-foreground">Learn from real derivatives traders, not influencers</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-crypto-green rounded-full" />
                <span className="text-muted-foreground">Consistent profits from perpetual contracts instead of gambling</span>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-card border-crypto-red/30 crypto-glow-bearish text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-crypto-red" />
            <h3 className="text-2xl font-bold text-crypto-red">The Harsh Reality</h3>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            <strong className="text-crypto-red">95% of perpetual contracts traders lose money</strong> because they're gambling instead of trading systematically. 
            They over-leverage, ignore risk management, and trade with emotions. 
            <strong className="text-crypto-green">You don't have to be one of them.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-crypto-green hover:bg-crypto-green/90 text-crypto-green-foreground text-lg px-8 py-4">
              🚀 Stop Losing Money - Start Learning
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-crypto-red/50 hover:bg-crypto-red/10 bg-transparent text-crypto-red">
              Download Free Guide
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
