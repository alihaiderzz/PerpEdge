import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calculator, Target, Trophy, ArrowRight } from "lucide-react"

const learningSteps = [
  {
    icon: BookOpen,
    title: "Module 1: Perp Fundamentals",
    description: "Master the basics of perpetual contracts and how they differ from spot trading",
    duration: "2 hours",
    difficulty: "Beginner",
    topics: ["What are Perps?", "Funding Rates", "Mark Price vs Index Price", "Liquidation Basics"],
    price: "FREE",
    premium: false,
    results: "Understand how perps work and avoid common beginner mistakes"
  },
  {
    icon: Calculator,
    title: "Module 2: Risk Management Mastery",
    description: "Learn the exact risk management system that protects our students' capital",
    duration: "3 hours",
    difficulty: "Intermediate", 
    topics: ["Position Sizing Formula", "Stop Loss Strategies", "Leverage Control", "Portfolio Management"],
    price: "Included with PerpEdge Pro",
    premium: true,
    results: "Protect your capital while maximizing profit potential"
  },
  {
    icon: Target,
    title: "Module 3: Profit Strategies",
    description: "Discover the exact trading strategies that generated $2.3M+ for our students",
    duration: "4 hours",
    difficulty: "Intermediate",
    topics: ["Trend Following System", "Mean Reversion Tactics", "Funding Arbitrage", "Scalping Methods"],
    price: "Included with PerpEdge Pro", 
    premium: true,
    results: "Start making consistent profits with proven strategies"
  },
  {
    icon: Trophy,
    title: "Module 4: Advanced Techniques",
    description: "Master professional-level strategies used by institutional traders",
    duration: "5 hours",
    difficulty: "Advanced",
    topics: ["Funding Rate Arbitrage", "Basis Trading", "Market Making", "Cross-Exchange Strategies"],
    price: "Included with PerpEdge Pro",
    premium: true,
    results: "Achieve institutional-level trading performance"
  },
]

export function LearningPath() {
  return (
    <section id="learn" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Course Curriculum</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master perpetual contracts trading with our comprehensive 4-module course
          </p>
        </div>

        <div className="space-y-8">
          {learningSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card
                key={index}
                className={`p-6 relative ${
                  step.premium 
                    ? 'bg-crypto-green/5 border-crypto-green/30 hover:border-crypto-green/50' 
                    : 'bg-card border-border hover:border-primary/50'
                } transition-all duration-300 group`}
              >
                {step.premium && (
                  <div className="absolute -top-3 -right-3">
                    <Badge className="bg-crypto-green text-crypto-green-foreground px-3 py-1">
                      PREMIUM
                    </Badge>
                  </div>
                )}

                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    step.premium 
                      ? 'bg-crypto-green/20' 
                      : 'bg-primary/20'
                  }`}>
                    <Icon className={`w-6 h-6 ${step.premium ? 'text-crypto-green' : 'text-primary'}`} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <Badge variant={step.premium ? "default" : "secondary"} className="text-xs">
                        {step.difficulty}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground mb-3">{step.description}</p>

                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-sm text-muted-foreground">⏱️ {step.duration}</span>
                      <span className="text-sm text-muted-foreground">📚 {step.topics.length} topics</span>
                      <span className={`text-sm font-semibold ${
                        step.premium ? 'text-crypto-green' : 'text-crypto-gold'
                      }`}>
                        {step.price}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {step.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                          {topic}
                        </div>
                      ))}
                    </div>

                    <div className="text-sm text-muted-foreground mb-4">
                      <span className="font-semibold text-crypto-green">Expected Results:</span> {step.results}
                    </div>

                    <Button className={`${
                      step.premium 
                        ? 'bg-crypto-green hover:bg-crypto-green/90 text-crypto-green-foreground' 
                        : 'bg-primary hover:bg-primary/90'
                    }`}>
                      {step.premium ? 'Unlock Premium Module' : 'Start Free Module'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
