import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: January 15, 2025</p>

            <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using PerpEdge's services, you accept and agree to be bound by the 
              terms and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>

            <h2 className="text-2xl font-bold mb-4">Educational Purpose Only</h2>
            <p className="mb-4">
              PerpEdge provides educational content and tools for learning about cryptocurrency 
              trading. All content is for educational purposes only and does not constitute financial 
              advice, investment advice, or trading advice.
            </p>

            <h2 className="text-2xl font-bold mb-4">No Financial Advice</h2>
            <p className="mb-4">
              We are not licensed financial advisors, and nothing on our platform should be construed 
              as financial advice. You should always do your own research and consult with qualified 
              financial professionals before making any investment decisions.
            </p>

            <h2 className="text-2xl font-bold mb-4">Trading Risks</h2>
            <p className="mb-4">
              Cryptocurrency trading involves substantial risk of loss and is not suitable for all 
              investors. Past performance is not indicative of future results. You should never 
              invest more than you can afford to lose.
            </p>

            <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
            <p className="mb-4">
              You are solely responsible for your trading decisions and any financial losses that may 
              result. PerpEdge is not liable for any financial losses, damages, or other consequences 
              arising from your use of our educational content or trading activities.
            </p>

            <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>
            <p className="mb-4">
              All payments are processed through Axiom. Refunds are not available for digital products. 
              By purchasing our courses, you acknowledge that you have read and understood our refund policy.
            </p>

            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p className="mb-4">
              All content, including but not limited to text, graphics, logos, images, and software, 
              is the property of PerpEdge and is protected by copyright and other intellectual 
              property laws.
            </p>

            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              PerpEdge shall not be liable for any direct, indirect, incidental, special, or 
              consequential damages resulting from the use or inability to use our services, even if 
              we have been advised of the possibility of such damages.
            </p>

            <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
            <p className="mb-4">
              You agree to indemnify and hold PerpEdge harmless from any claims, damages, or expenses 
              arising from your use of our services or violation of these terms.
            </p>

            <h2 className="text-2xl font-bold mb-4">Modifications</h2>
            <p className="mb-4">
              PerpEdge reserves the right to modify these terms at any time. Your continued use 
              of our services after any modifications constitutes acceptance of the new terms.
            </p>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
