import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, DollarSign, AlertTriangle } from "lucide-react"

export function TradingSimulator() {
  return (
    <section id="tools" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 gradient-text">$100K Virtual Perpetual Contracts Simulator</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Practice perpetual contracts trading with $100K virtual money using real market data. Perfect your derivatives strategies before risking real capital.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm text-muted-foreground">
            <span>🎯 Real-time perpetual contracts data</span>
            <span className="hidden sm:inline">•</span>
            <span>💰 $100K virtual balance</span>
            <span className="hidden sm:inline">•</span>
            <span>📊 Professional derivatives tools</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="p-4 sm:p-6 lg:p-8 bg-card border-border crypto-glow-green">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Trading Interface */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold gradient-text">BTC/USDT Perpetual</h3>
                  <Badge className="bg-crypto-purple/20 text-crypto-purple border-crypto-purple/30 crypto-pulse text-xs sm:text-sm">
                    LIVE DEMO
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 bg-crypto-green/10 border-crypto-green/20 crypto-glow-bullish">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-crypto-green" />
                      <span className="text-sm text-muted-foreground">Mark Price</span>
                    </div>
                    <div className="text-2xl font-bold text-crypto-green">$43,250.50</div>
                    <div className="text-sm text-crypto-green font-semibold">+2.34%</div>
                  </Card>

                  <Card className="p-4 bg-crypto-gold/10 border-crypto-gold/20">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-4 h-4 text-crypto-gold" />
                      <span className="text-sm text-muted-foreground">Funding Rate</span>
                    </div>
                    <div className="text-2xl font-bold text-crypto-gold">0.0125%</div>
                    <div className="text-sm text-muted-foreground">8h countdown</div>
                  </Card>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-crypto-green hover:bg-crypto-green/90 text-crypto-green-foreground crypto-glow-bullish">
                      Long BTC
                      <TrendingUp className="w-4 h-4 ml-2" />
                    </Button>
                    <Button className="flex-1 bg-crypto-red hover:bg-crypto-red/90 text-crypto-red-foreground crypto-glow-bearish">
                      Short BTC
                      <TrendingDown className="w-4 h-4 ml-2" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground">Position Size</label>
                      <div className="mt-1 p-3 bg-muted rounded-lg border border-primary/20 text-primary font-semibold">
                        $1,000
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Leverage</label>
                      <div className="mt-1 p-3 bg-crypto-gold/10 border border-crypto-gold/20 rounded-lg text-crypto-gold font-bold">
                        10x
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Educational Panel */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold gradient-text">What You're Learning</h4>

                <div className="space-y-4">
                  <Card className="p-4 bg-crypto-red/10 border-crypto-red/20 crypto-glow-red">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-crypto-red mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-crypto-red">Liquidation Risk</h5>
                        <p className="text-sm text-muted-foreground mt-1">
                          With 10x leverage, your liquidation price is{" "}
                          <span className="text-crypto-red font-semibold">$38,925</span>. Price needs to drop 10% to
                          liquidate your position.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 bg-crypto-gold/10 border-crypto-gold/20">
                    <div className="flex items-start gap-3">
                      <DollarSign className="w-5 h-5 text-crypto-gold mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-crypto-gold">Funding Costs</h5>
                        <p className="text-sm text-muted-foreground mt-1">
                          Positive funding rate means{" "}
                          <span className="text-crypto-green font-semibold">longs pay shorts</span>. You'll pay{" "}
                          <span className="text-crypto-gold font-semibold">~$1.25</span> every 8 hours for this
                          position.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 bg-crypto-purple/10 border-crypto-purple/20">
                    <h5 className="font-semibold mb-2 text-crypto-purple">Quick Tips</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>
                        • Start with <span className="text-crypto-green">lower leverage (2-5x)</span> as a beginner
                      </li>
                      <li>
                        • Always set <span className="text-crypto-red">stop losses</span> to limit downside
                      </li>
                      <li>
                        • Monitor <span className="text-crypto-gold">funding rates</span> for cost efficiency
                      </li>
                      <li>
                        • Practice position sizing with <span className="text-primary">1-2% risk</span> per trade
                      </li>
                    </ul>
                  </Card>
                </div>

                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-primary/30 hover:bg-primary/10 gradient-border"
                  >
                    <span className="gradient-text">Learn More About This Scenario</span>
                  </Button>
                  
                  <Button className="w-full bg-crypto-green hover:bg-crypto-green/90 text-crypto-green-foreground">
                    🚀 Get Full Access to Simulator + Course
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    Free preview • Full access with Pro plan
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
