import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Financial Disclaimer</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: January 15, 2025</p>

            <div className="bg-crypto-red/10 border border-crypto-red/30 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-crypto-red">⚠️ IMPORTANT DISCLAIMER</h2>
              <p className="text-lg font-semibold text-crypto-red">
                TRADING CRYPTOCURRENCIES INVOLVES SUBSTANTIAL RISK OF LOSS AND IS NOT SUITABLE FOR ALL INVESTORS. 
                YOU SHOULD NEVER INVEST MORE THAN YOU CAN AFFORD TO LOSE.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">Educational Purpose Only</h2>
            <p className="mb-4">
              PerpEdge provides educational content and tools for learning about cryptocurrency 
              trading. All content, including but not limited to courses, tutorials, tools, and 
              community discussions, is for educational purposes only.
            </p>

            <h2 className="text-2xl font-bold mb-4">Not Financial Advice</h2>
            <p className="mb-4">
              Nothing on our platform constitutes financial advice, investment advice, trading advice, 
              or any other type of advice. We are not licensed financial advisors, investment advisors, 
              or registered investment advisors.
            </p>

            <h2 className="text-2xl font-bold mb-4">No Guarantees</h2>
            <p className="mb-4">
              We make no representations or warranties about the accuracy, completeness, or suitability 
              of any information on our platform. Past performance does not guarantee future results. 
              Any examples or case studies are for illustrative purposes only.
            </p>

            <h2 className="text-2xl font-bold mb-4">Trading Risks</h2>
            <p className="mb-4">
              Cryptocurrency trading involves substantial risk of loss and is not suitable for all 
              investors. The high degree of leverage can work against you as well as for you. 
              Before deciding to trade, you should carefully consider your investment objectives, 
              level of experience, and risk appetite.
            </p>

            <h2 className="text-2xl font-bold mb-4">No Liability for Losses</h2>
            <p className="mb-4">
              PerpEdge, its officers, directors, employees, and affiliates are not liable for any 
              financial losses, damages, or other consequences arising from your use of our 
              educational content or any trading activities. You trade at your own risk.
            </p>

            <h2 className="text-2xl font-bold mb-4">Market Volatility</h2>
            <p className="mb-4">
              Cryptocurrency markets are highly volatile and unpredictable. Prices can fluctuate 
              dramatically in short periods. You may lose all or more than your initial investment.
            </p>

            <h2 className="text-2xl font-bold mb-4">Regulatory Risks</h2>
            <p className="mb-4">
              Cryptocurrency regulations vary by jurisdiction and may change at any time. Regulatory 
              changes could adversely affect the value of cryptocurrencies and your ability to trade them.
            </p>

            <h2 className="text-2xl font-bold mb-4">Technology Risks</h2>
            <p className="mb-4">
              Trading cryptocurrencies involves technology risks, including but not limited to 
              system failures, cyber attacks, and loss of private keys. These risks could result 
              in the loss of your funds.
            </p>

            <h2 className="text-2xl font-bold mb-4">No Refunds</h2>
            <p className="mb-4">
              All sales are final. We do not offer refunds for our educational courses or services. 
              By purchasing our courses, you acknowledge that you have read and understood this policy.
            </p>

            <h2 className="text-2xl font-bold mb-4">Independent Research</h2>
            <p className="mb-4">
              You should always do your own research and consult with qualified financial professionals 
              before making any investment decisions. Never rely solely on information from our platform 
              or any single source.
            </p>

            <h2 className="text-2xl font-bold mb-4">No Endorsement</h2>
            <p className="mb-4">
              Any mention of specific cryptocurrencies, exchanges, or trading strategies does not 
              constitute an endorsement or recommendation. We do not endorse any particular 
              investment or trading strategy.
            </p>

            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, PerpEdge shall not be liable for any direct, 
              indirect, incidental, special, consequential, or punitive damages, including but not 
              limited to loss of profits, data, or other intangible losses, resulting from your use 
              of our services.
            </p>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
