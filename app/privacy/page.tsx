import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: January 15, 2025</p>

            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="mb-4">
              We collect information you provide directly to us, such as when you create an account, 
              purchase a course, or contact us for support. This may include your name, email address, 
              payment information, and any other information you choose to provide.
            </p>

            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to provide, maintain, and improve our services, 
              process transactions, send you technical notices and support messages, and communicate 
              with you about products, services, and promotional offers.
            </p>

            <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy. We may share your information 
              with service providers who assist us in operating our website and conducting our business.
            </p>

            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold mb-4">Cookies</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website, 
              analyze usage patterns, and personalize content and advertisements.
            </p>

            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="mb-4">
              You have the right to access, update, or delete your personal information. You may also 
              opt out of certain communications from us. To exercise these rights, please contact us 
              using the information provided below.
            </p>

            <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
            <p className="mb-4">
              We may update this privacy policy from time to time. We will notify you of any changes 
              by posting the new policy on this page and updating the "Last updated" date.
            </p>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
