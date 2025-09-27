"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calculator, AlertTriangle, TrendingUp, DollarSign } from "lucide-react"

export function PositionCalculator() {
  const [accountBalance, setAccountBalance] = useState("10,000")
  const [riskPercentage, setRiskPercentage] = useState("2")
  const [entryPrice, setEntryPrice] = useState("43,250")
  const [stopLoss, setStopLoss] = useState("42,000")
  const [leverage, setLeverage] = useState("10")

  const calculatePosition = () => {
    const balance = parseFloat(accountBalance.replace(/,/g, ''))
    const risk = parseFloat(riskPercentage) / 100
    const entry = parseFloat(entryPrice.replace(/,/g, ''))
    const stop = parseFloat(stopLoss.replace(/,/g, ''))
    const lev = parseFloat(leverage)

    const riskAmount = balance * risk
    const priceDiff = Math.abs(entry - stop)
    const riskPerUnit = priceDiff / entry
    const positionSize = riskAmount / riskPerUnit
    const leveragedSize = positionSize * lev
    const marginRequired = positionSize / lev

    return {
      riskAmount,
      positionSize,
      leveragedSize,
      marginRequired,
      liquidationPrice: entry * (1 - (1 / lev)),
      riskReward: priceDiff > 0 ? (entry - stop) / priceDiff : 0
    }
  }

  const results = calculatePosition()

  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="w-6 h-6 text-crypto-green" />
        <h3 className="text-xl font-bold gradient-text">Position Size Calculator</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="balance">Account Balance ($)</Label>
            <Input
              id="balance"
              type="number"
              value={accountBalance}
              onChange={(e) => setAccountBalance(e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="risk">Risk Per Trade (%)</Label>
            <Input
              id="risk"
              type="number"
              value={riskPercentage}
              onChange={(e) => setRiskPercentage(e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="entry">Entry Price ($)</Label>
            <Input
              id="entry"
              type="number"
              value={entryPrice}
              onChange={(e) => setEntryPrice(e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="stop">Stop Loss ($)</Label>
            <Input
              id="stop"
              type="number"
              value={stopLoss}
              onChange={(e) => setStopLoss(e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="leverage">Leverage (x)</Label>
            <Input
              id="leverage"
              type="number"
              value={leverage}
              onChange={(e) => setLeverage(e.target.value)}
              className="mt-1"
            />
          </div>
        </div>

        <div className="space-y-4">
          <Card className="p-4 bg-crypto-green/10 border-crypto-green/20">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-4 h-4 text-crypto-green" />
              <span className="font-semibold text-crypto-green">Risk Amount</span>
            </div>
            <div className="text-2xl font-bold text-crypto-green">
              ${results.riskAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="text-sm text-muted-foreground">
              Maximum you can afford to lose
            </div>
          </Card>

          <Card className="p-4 bg-crypto-gold/10 border-crypto-gold/20">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-crypto-gold" />
              <span className="font-semibold text-crypto-gold">Position Size</span>
            </div>
            <div className="text-2xl font-bold text-crypto-gold">
              ${results.positionSize.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="text-sm text-muted-foreground">
              Recommended position size
            </div>
          </Card>

          <Card className="p-4 bg-crypto-purple/10 border-crypto-purple/20">
            <div className="flex items-center gap-2 mb-2">
              <Calculator className="w-4 h-4 text-crypto-purple" />
              <span className="font-semibold text-crypto-purple">Margin Required</span>
            </div>
            <div className="text-2xl font-bold text-crypto-purple">
              ${results.marginRequired.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="text-sm text-muted-foreground">
              Capital needed for this trade
            </div>
          </Card>

          <Card className="p-4 bg-crypto-red/10 border-crypto-red/20">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-crypto-red" />
              <span className="font-semibold text-crypto-red">Liquidation Price</span>
            </div>
            <div className="text-2xl font-bold text-crypto-red">
              ${results.liquidationPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="text-sm text-muted-foreground">
              Price where you get liquidated
            </div>
          </Card>
        </div>
      </div>

      <div className="mt-6 p-4 bg-muted/50 rounded-lg">
        <h4 className="font-semibold mb-2">💡 Pro Tips:</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Never risk more than 2% of your account per trade</li>
          <li>• Always set stop losses to protect your capital</li>
          <li>• Start with lower leverage (2-5x) as a beginner</li>
          <li>• Keep at least 50% of your account as free margin</li>
        </ul>
      </div>
    </Card>
  )
}
