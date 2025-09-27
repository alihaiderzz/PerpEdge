"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Clock, DollarSign } from "lucide-react"

interface FundingData {
  symbol: string
  fundingRate: number
  nextFunding: string
  countdown: string
  status: 'positive' | 'negative' | 'neutral'
}

export function FundingTracker() {
  const [fundingData, setFundingData] = useState<FundingData[]>([
    {
      symbol: "BTC/USDT",
      fundingRate: 0.0125,
      nextFunding: "2024-01-15 08:00:00",
      countdown: "2h 34m",
      status: 'positive'
    },
    {
      symbol: "ETH/USDT", 
      fundingRate: -0.0087,
      nextFunding: "2024-01-15 08:00:00",
      countdown: "2h 34m",
      status: 'negative'
    },
    {
      symbol: "SOL/USDT",
      fundingRate: 0.0034,
      nextFunding: "2024-01-15 08:00:00", 
      countdown: "2h 34m",
      status: 'positive'
    },
    {
      symbol: "AVAX/USDT",
      fundingRate: -0.0156,
      nextFunding: "2024-01-15 08:00:00",
      countdown: "2h 34m", 
      status: 'negative'
    }
  ])

  const [selectedPair, setSelectedPair] = useState("BTC/USDT")

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'positive': return 'text-crypto-green bg-crypto-green/10 border-crypto-green/20'
      case 'negative': return 'text-crypto-red bg-crypto-red/10 border-crypto-red/20'
      default: return 'text-muted-foreground bg-muted'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'positive': return <TrendingUp className="w-4 h-4" />
      case 'negative': return <TrendingDown className="w-4 h-4" />
      default: return <Clock className="w-4 h-4" />
    }
  }

  const calculateFundingCost = (rate: number, positionSize: number) => {
    return (rate / 100) * positionSize
  }

  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center gap-3 mb-6">
        <DollarSign className="w-6 h-6 text-crypto-gold" />
        <h3 className="text-xl font-bold gradient-text">Funding Rate Tracker</h3>
        <Badge className="bg-crypto-gold/20 text-crypto-gold border-crypto-gold/30">
          LIVE
        </Badge>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold mb-4">Current Funding Rates</h4>
          <div className="space-y-3">
            {fundingData.map((data, index) => (
              <Card 
                key={index}
                className={`p-4 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedPair === data.symbol ? 'border-crypto-green/50 bg-crypto-green/5' : 'border-border'
                }`}
                onClick={() => setSelectedPair(data.symbol)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${getStatusColor(data.status)}`}>
                      {getStatusIcon(data.status)}
                    </div>
                    <div>
                      <div className="font-semibold">{data.symbol}</div>
                      <div className="text-sm text-muted-foreground">
                        Next: {data.nextFunding}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-bold ${
                      data.fundingRate > 0 ? 'text-crypto-green' : 'text-crypto-red'
                    }`}>
                      {data.fundingRate > 0 ? '+' : ''}{data.fundingRate}%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {data.countdown}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Funding Cost Calculator</h4>
          <Card className="p-4 bg-crypto-gold/10 border-crypto-gold/20">
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground">Position Size ($)</label>
                <input 
                  type="number" 
                  defaultValue="10,000"
                  className="w-full mt-1 p-2 bg-background border border-border rounded-lg"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">8-Hour Cost:</span>
                  <span className="font-semibold text-crypto-gold">
                    ${calculateFundingCost(0.0125, 10000).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Daily Cost:</span>
                  <span className="font-semibold text-crypto-gold">
                    ${(calculateFundingCost(0.0125, 10000) * 3).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Monthly Cost:</span>
                  <span className="font-semibold text-crypto-gold">
                    ${(calculateFundingCost(0.0125, 10000) * 3 * 30).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-4 p-4 bg-muted/50 rounded-lg">
            <h5 className="font-semibold mb-2 text-crypto-green">💡 Funding Rate Strategy:</h5>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• <strong>Positive rates:</strong> Longs pay shorts (consider shorting)</li>
              <li>• <strong>Negative rates:</strong> Shorts pay longs (consider longing)</li>
              <li>• <strong>High rates:</strong> Market might reverse soon</li>
              <li>• <strong>Low rates:</strong> Trend might continue</li>
            </ul>
          </div>
        </div>
      </div>
    </Card>
  )
}
