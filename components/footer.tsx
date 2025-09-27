import { TrendingUp } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold gradient-text">PerpEdge</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering the next generation of crypto traders with comprehensive perpetual contracts education.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Learn</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/learn" className="hover:text-foreground transition-colors">
                  Course & Pricing
                </a>
              </li>
              <li>
                <a href="/journey" className="hover:text-foreground transition-colors">
                  Master Your Journey
                </a>
              </li>
              <li>
                <a href="/learn" className="hover:text-foreground transition-colors">
                  Perpetual Contracts Course
                </a>
              </li>
              <li>
                <a href="/learn" className="hover:text-foreground transition-colors">
                  Risk Management System
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Tools</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/tools" className="hover:text-foreground transition-colors">
                  Trading Simulator
                </a>
              </li>
              <li>
                <a href="/tools" className="hover:text-foreground transition-colors">
                  Position Calculator
                </a>
              </li>
              <li>
                <a href="/tools" className="hover:text-foreground transition-colors">
                  Funding Tracker
                </a>
              </li>
              <li>
                <a href="/tools" className="hover:text-foreground transition-colors">
                  All Trading Tools
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/community" className="hover:text-foreground transition-colors">
                  Join Community
                </a>
              </li>
              <li>
                <a href="/community" className="hover:text-foreground transition-colors">
                  Strategy Discussions
                </a>
              </li>
              <li>
                <a href="/community" className="hover:text-foreground transition-colors">
                  Trading Tools
                </a>
              </li>
              <li>
                <a href="/community" className="hover:text-foreground transition-colors">
                  Peer Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="bg-muted/30 rounded-lg p-4 mb-6">
            <p className="text-xs text-muted-foreground text-center">
              <strong>Risk Disclaimer:</strong> Trading involves substantial risk of loss and is not suitable for all investors. 
              Past performance is not indicative of future results. This course is for educational purposes only and does not constitute financial advice. 
              Always do your own research and consider consulting with a financial advisor before making investment decisions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">© 2025 PerpEdge. All rights reserved.</p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
              <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="/disclaimer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
