import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star, Shield, Zap, Target, Award } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "PerpEdge Certified",
    description: "Complete all 5 modules and pass the final exam",
    rarity: "Legendary",
    color: "crypto-gold",
    requirements: "Complete all modules + 80% exam score"
  },
  {
    icon: Star,
    title: "Risk Management Expert",
    description: "Master position sizing and risk control",
    rarity: "Epic",
    color: "crypto-green",
    requirements: "Complete Module 2 + simulator practice"
  },
  {
    icon: Shield,
    title: "Safe Trader",
    description: "Complete 10 risk-free trades in simulator",
    rarity: "Rare",
    color: "crypto-purple",
    requirements: "10 successful simulator trades"
  },
  {
    icon: Zap,
    title: "Speed Learner",
    description: "Complete a module in record time",
    rarity: "Rare",
    color: "crypto-red",
    requirements: "Complete any module in under 2 hours"
  },
  {
    icon: Target,
    title: "Precision Trader",
    description: "Achieve 90%+ accuracy in trading simulator",
    rarity: "Epic",
    color: "crypto-gold",
    requirements: "90% win rate in 20+ simulator trades"
  },
  {
    icon: Award,
    title: "Community Helper",
    description: "Help 5+ fellow students in Discord",
    rarity: "Common",
    color: "crypto-blue",
    requirements: "5 helpful responses in community"
  }
]

export function AchievementBadges() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Earn Your Trading Badges</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unlock achievements as you progress. Show off your trading skills and build your reputation in the community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <Card key={index} className={`p-6 relative group hover:scale-105 transition-all duration-300 ${
                achievement.color === 'crypto-gold' 
                  ? 'bg-crypto-gold/10 border-crypto-gold/30' 
                  : achievement.color === 'crypto-green'
                  ? 'bg-crypto-green/10 border-crypto-green/30'
                  : achievement.color === 'crypto-purple'
                  ? 'bg-crypto-purple/10 border-crypto-purple/30'
                  : achievement.color === 'crypto-red'
                  ? 'bg-crypto-red/10 border-crypto-red/30'
                  : 'bg-crypto-blue/10 border-crypto-blue/30'
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    achievement.color === 'crypto-gold' 
                      ? 'bg-crypto-gold/20' 
                      : achievement.color === 'crypto-green'
                      ? 'bg-crypto-green/20'
                      : achievement.color === 'crypto-purple'
                      ? 'bg-crypto-purple/20'
                      : achievement.color === 'crypto-red'
                      ? 'bg-crypto-red/20'
                      : 'bg-crypto-blue/20'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      achievement.color === 'crypto-gold' 
                        ? 'text-crypto-gold' 
                        : achievement.color === 'crypto-green'
                        ? 'text-crypto-green'
                        : achievement.color === 'crypto-purple'
                        ? 'text-crypto-purple'
                        : achievement.color === 'crypto-red'
                        ? 'text-crypto-red'
                        : 'text-crypto-blue'
                    }`} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold">{achievement.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {achievement.rarity}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
                    <div className="text-xs text-muted-foreground bg-muted/50 p-2 rounded">
                      <strong>Requirements:</strong> {achievement.requirements}
                    </div>
                  </div>
                </div>

                {/* Lock overlay for locked achievements */}
                <div className="absolute inset-0 bg-background/80 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Badge className="bg-muted text-muted-foreground">
                    🔒 Locked
                  </Badge>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto p-6 bg-crypto-gold/10 border-crypto-gold/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className="w-6 h-6 text-crypto-gold" />
              <h3 className="text-xl font-bold text-crypto-gold">PerpEdge Certificate</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Complete all modules and earn your official PerpEdge certificate. 
              Share it on LinkedIn, Twitter, and your resume to showcase your trading expertise.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>✅ Verifiable on blockchain</span>
              <span>✅ LinkedIn compatible</span>
              <span>✅ Industry recognized</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
