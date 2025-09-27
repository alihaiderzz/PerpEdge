import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, ArrowRight } from "lucide-react"

const roadmapSteps = [
  {
    step: 1,
    title: "Foundation",
    description: "Master the basics of perpetual contracts",
    duration: "2 hours",
    status: "completed",
    badge: "✅ Complete"
  },
  {
    step: 2,
    title: "Risk Management",
    description: "Learn position sizing and stop losses",
    duration: "3 hours",
    status: "completed",
    badge: "✅ Complete"
  },
  {
    step: 3,
    title: "Trading Strategies",
    description: "Apply proven trading methodologies",
    duration: "4 hours",
    status: "in-progress",
    badge: "🔥 In Progress"
  },
  {
    step: 4,
    title: "Advanced Techniques",
    description: "Master professional-level strategies",
    duration: "5 hours",
    status: "locked",
    badge: "🔒 Locked"
  },
  {
    step: 5,
    title: "Certification",
    description: "Earn your PerpMaster certificate",
    duration: "1 hour",
    status: "locked",
    badge: "🏆 Final Goal"
  }
]

export function LearningRoadmap() {
  return (
    <section className="py-20 px-4 bg-muted/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Your Learning Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow our proven 5-step roadmap from beginner to certified perpetual contracts trader
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Progress line */}
            <div className="absolute top-8 left-8 right-8 h-1 bg-muted rounded-full">
              <div className="h-full bg-gradient-to-r from-crypto-green via-crypto-gold to-crypto-purple rounded-full" 
                   style={{ width: '60%' }} />
            </div>

            <div className="grid md:grid-cols-5 gap-4">
              {roadmapSteps.map((step, index) => (
                <Card key={index} className={`p-6 text-center relative ${
                  step.status === 'completed' 
                    ? 'bg-crypto-green/10 border-crypto-green/30' 
                    : step.status === 'in-progress'
                    ? 'bg-crypto-gold/10 border-crypto-gold/30'
                    : 'bg-muted/50 border-border'
                }`}>
                  <div className="relative z-10">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      step.status === 'completed' 
                        ? 'bg-crypto-green text-crypto-green-foreground' 
                        : step.status === 'in-progress'
                        ? 'bg-crypto-gold text-crypto-gold-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {step.status === 'completed' ? (
                        <CheckCircle className="w-8 h-8" />
                      ) : step.status === 'in-progress' ? (
                        <div className="w-8 h-8 border-2 border-current rounded-full animate-spin" />
                      ) : (
                        <Circle className="w-8 h-8" />
                      )}
                    </div>

                    <div className="mb-2">
                      <Badge className={`text-xs ${
                        step.status === 'completed' 
                          ? 'bg-crypto-green text-crypto-green-foreground' 
                          : step.status === 'in-progress'
                          ? 'bg-crypto-gold text-crypto-gold-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        Step {step.step}
                      </Badge>
                    </div>

                    <h3 className="font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
                    <p className="text-xs text-muted-foreground mb-3">⏱️ {step.duration}</p>
                    
                    <Badge variant="outline" className="text-xs">
                      {step.badge}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Progress stats */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center bg-crypto-green/10 border-crypto-green/20">
              <div className="text-3xl font-bold text-crypto-green mb-2">40%</div>
              <div className="text-sm text-muted-foreground">Course Progress</div>
            </Card>
            <Card className="p-6 text-center bg-crypto-gold/10 border-crypto-gold/20">
              <div className="text-3xl font-bold text-crypto-gold mb-2">2/5</div>
              <div className="text-sm text-muted-foreground">Modules Completed</div>
            </Card>
            <Card className="p-6 text-center bg-crypto-purple/10 border-crypto-purple/20">
              <div className="text-3xl font-bold text-crypto-purple mb-2">9h</div>
              <div className="text-sm text-muted-foreground">Total Learning Time</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
