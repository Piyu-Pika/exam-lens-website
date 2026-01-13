import Header from "@/components/header"
import Footer from "@/components/footer"
import { Check } from "lucide-react"

export default function PricingPage() {
  return (
    <div>
      <Header />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-foreground">Pricing</h1>
            <p className="text-xl text-muted-foreground">
              We're working on our pricing plans to bring you the best value
            </p>
          </div>

          <div className="glass-card p-12 text-center">
            <div className="mb-6">
              <div className="text-6xl mb-4">🚀</div>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-foreground">Pricing Coming Soon</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're designing flexible pricing plans that work for everyone. Stay tuned for updates!
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-primary font-semibold">Currently Free During Beta</span>
            </div>

            <div className="mt-12 pt-12 border-t border-border">
              <h3 className="text-2xl font-semibold mb-8 text-foreground">Current Free Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Track unlimited exams",
                  "Smart notifications",
                  "Visual calendar view",
                  "Dark mode support",
                  "Offline access",
                  "Public Hub access",
                  "Cross-platform sync",
                  "Priority support",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-accent" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
