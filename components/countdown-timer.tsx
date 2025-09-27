"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, AlertTriangle } from "lucide-react"

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 32
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else {
          // Reset to 24 hours when countdown reaches 0
          return { hours: 23, minutes: 59, seconds: 59 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Card className="p-4 bg-crypto-red/10 border-crypto-red/30 crypto-glow-bearish">
      <div className="flex items-center gap-3 mb-3">
        <AlertTriangle className="w-5 h-5 text-crypto-red" />
        <Badge className="bg-crypto-red/20 text-crypto-red border-crypto-red/30">
          🔥 LIMITED TIME OFFER
        </Badge>
      </div>
      
      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-2">50% OFF expires in:</p>
        <div className="flex items-center justify-center gap-2 text-2xl font-bold text-crypto-red">
          <div className="bg-crypto-red/20 px-3 py-2 rounded-lg">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <span>:</span>
          <div className="bg-crypto-red/20 px-3 py-2 rounded-lg">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <span>:</span>
          <div className="bg-crypto-red/20 px-3 py-2 rounded-lg">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Only 47 spots left at this price
        </p>
      </div>
    </Card>
  )
}
