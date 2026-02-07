import Header from "@/components/header"
import Footer from "@/components/footer"
import { Check } from "lucide-react"

const perks = [
  "Unlimited exams",
  "Smart reminders",
  "Calendar view",
  "Offline mode",
  "Public hub access",
  "Dark mode support",
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white">
      <Header />

      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(76,120,255,0.25),_transparent_55%)]"></div>
        <div className="absolute -bottom-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-[#ff7a59]/20 blur-[140px]"></div>

        <div className="relative mx-auto max-w-6xl space-y-12">
          <div className="text-center space-y-4">
            <p className="uppercase tracking-[0.4em] text-xs text-[#9aa5b5]">Pricing</p>
            <h1 className="text-4xl sm:text-5xl font-semibold font-['Fraunces']">
              Pricing is free for everyone.
            </h1>
            <p className="text-lg text-[#c7ced9] max-w-2xl mx-auto">
              Exam Lens is currently free for all users. Paid plans are coming soon.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Free for everyone</h2>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">Current plan</span>
              </div>
              <p className="mt-4 text-4xl font-semibold text-white">₹0</p>
              <p className="mt-3 text-[#c7ced9]">
                Full access while we finish the next generation of pricing.
              </p>
              <div className="mt-6 space-y-3">
                {perks.map((perk) => (
                  <div key={perk} className="flex items-center gap-3 text-sm text-white">
                    <Check className="h-4 w-4 text-[#8ba7ff]" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
              <button className="mt-8 w-full rounded-2xl px-5 py-3 font-semibold border border-white/20 text-white hover:bg-white/10 transition">
                Start free
              </button>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/10 p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[#9aa5b5]">Upcoming</p>
              <h3 className="mt-4 text-2xl font-semibold">Paid plans coming soon</h3>
              <p className="mt-3 text-[#c7ced9]">
                We’re crafting Pro and Team plans with deeper personalization, analytics, and collaboration features.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-[#c7ced9]">
                <li>Priority alerts and advanced filters</li>
                <li>Shared calendars for study groups</li>
                <li>Coaching and mentorship dashboards</li>
              </ul>
              <button className="mt-8 w-full rounded-2xl px-5 py-3 font-semibold bg-white text-[#0b0f1a] hover:bg-[#e5e7eb] transition">
                Get notified
              </button>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#9aa5b5]">Beta note</p>
            <p className="mt-4 text-lg text-[#c7ced9]">
              Pricing activates when the iOS launch goes public. Early users will receive bonus perks at launch.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
