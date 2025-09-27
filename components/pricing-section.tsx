import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Zap, Crown, TrendingUp, Users, Shield } from "lucide-react"

const pricingPlan = {
  name: "PerpEdge Pro",
  monthlyPrice: 97,
  yearlyPrice: 850,
  yearlyOriginalPrice: 1164,
  description: "Join a growing community of traders mastering perpetual contracts. Your path to consistent profits begins today.",
  features: [
    "Complete Perpetual Contracts Course (8+ hours, on-demand)",
    "Advanced Risk Management System (lessons + calculators)",
    "Trading Tools Pack: Position Sizing & Liquidation Calculators",
    "Proven Strategy Vault (scalping, swing, funding plays)",
    "Private Discord Community (peer support + discussions)",
    "Trading Simulator Access (practice risk-free)",
    "Resource Hub (checklists, cheat sheets, glossary)",
    "Monthly Market Recap PDF (auto-generated from news sources)"
  ],
  popular: true,
  color: "crypto-green"
}

export function PricingSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-crypto-green/5 via-crypto-purple/5 to-crypto-gold/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-crypto-green/20 text-crypto-green border-crypto-green/30 mb-6">
            🔥 ONE PLAN, ONE PRICE
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 gradient-text">Ready to Start Your Trading Success?</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            {pricingPlan.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-6 sm:p-8 lg:p-12 bg-card border-crypto-green/30 crypto-glow-green relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-crypto-green text-crypto-green-foreground px-6 py-2">
                <Crown className="w-4 h-4 mr-2" />
                MOST POPULAR
              </Badge>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">{pricingPlan.name}</h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-8">{pricingPlan.description}</p>
              
              <div className="mb-8">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-6">
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-crypto-green">${pricingPlan.monthlyPrice.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">per month</div>
                  </div>
                  <div className="text-lg sm:text-xl text-muted-foreground hidden md:block">OR</div>
                  <div className="text-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mb-1">
                      <span className="text-3xl sm:text-4xl font-bold text-crypto-green">${pricingPlan.yearlyPrice.toLocaleString()}</span>
                      <span className="text-base sm:text-lg text-muted-foreground line-through">${pricingPlan.yearlyOriginalPrice.toLocaleString()}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">per year</div>
                    <div className="text-sm text-crypto-green font-semibold">Save ${(pricingPlan.yearlyOriginalPrice - pricingPlan.yearlyPrice).toLocaleString()}</div>
                  </div>
                </div>
                <div className="text-center">
                  <Badge className="bg-crypto-red/20 text-crypto-red border-crypto-red/30">
                    50% OFF - Limited Time
                  </Badge>
                </div>
              </div>

              <Button size="lg" className="bg-crypto-green hover:bg-crypto-green/90 text-crypto-green-foreground text-lg px-8 py-4 mb-8">
                🚀 Get Started Now
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center gap-3 p-4 bg-crypto-green/10 border border-crypto-green/20 rounded-lg">
                <TrendingUp className="w-6 h-6 text-crypto-green" />
                <div className="text-left">
                  <div className="font-semibold text-crypto-green">Live Signals</div>
                  <div className="text-sm text-muted-foreground">Daily trading alerts</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-crypto-gold/10 border border-crypto-gold/20 rounded-lg">
                <Users className="w-6 h-6 text-crypto-gold" />
                <div className="text-left">
                  <div className="font-semibold text-crypto-gold">Community</div>
                  <div className="text-sm text-muted-foreground">Growing community</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-crypto-purple/10 border border-crypto-purple/20 rounded-lg">
                <Shield className="w-6 h-6 text-crypto-purple" />
                <div className="text-left">
                  <div className="font-semibold text-crypto-purple">Risk Management</div>
                  <div className="text-sm text-muted-foreground">Protect your capital</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-center mb-6">What's Included:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {pricingPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-crypto-green flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 bg-muted/50 rounded-lg text-center">
              <p className="text-sm text-muted-foreground">
                ⚡ Secure checkout • Instant access • Cancel anytime
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}