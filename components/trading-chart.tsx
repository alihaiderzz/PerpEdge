import { Card } from "@/components/ui/card"
import { Heart } from "lucide-react"

export function TradingChart() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-md">
        <Card className="p-6 bg-crypto-green/10 border-crypto-green/30 text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 text-crypto-green mr-2" />
            <span className="text-lg font-semibold text-crypto-green">Welcome to Your Journey</span>
          </div>
          <p className="text-muted-foreground">
            You're about to embark on an exciting path to mastering perpetual contracts trading. 
            Take your time, learn at your own pace, and remember - every expert was once a beginner. 
            You've got this! 🌟
          </p>
        </Card>
      </div>
    </section>
  )
}
