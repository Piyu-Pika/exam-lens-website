import Header from "@/components/header"
import Footer from "@/components/footer"
import { Mail, MessageSquare, PhoneCall } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f1f5ff] text-[#111827]">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="uppercase tracking-[0.4em] text-xs text-[#6b7aa6]">Contact</p>
              <h1 className="text-4xl sm:text-5xl font-semibold font-['Fraunces']">
                Tell us what you need, we’ll respond fast.
              </h1>
              <p className="text-lg text-[#4c5a7a] max-w-xl">
                Whether it’s a feature request, a bug, or collaboration, the team is listening.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[22px] border border-[#d9e3ff] bg-white p-5 shadow-[0_12px_36px_-30px_rgba(20,40,120,0.6)]">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-[#ebf0ff] p-2 text-[#2f4bb3]">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#7a88b5]">Email</p>
                    <p className="text-lg font-semibold">piyushbhardwaj@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[22px] border border-[#d9e3ff] bg-white p-5 shadow-[0_12px_36px_-30px_rgba(20,40,120,0.6)]">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-[#ebf0ff] p-2 text-[#2f4bb3]">
                    <MessageSquare className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#7a88b5]">Support</p>
                    <p className="text-lg font-semibold">support@examlens.com</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[22px] border border-[#d9e3ff] bg-white p-5 shadow-[0_12px_36px_-30px_rgba(20,40,120,0.6)]">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-[#ebf0ff] p-2 text-[#2f4bb3]">
                    <PhoneCall className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#7a88b5]">Office Hours</p>
                    <p className="text-lg font-semibold">Mon-Fri, 10 AM - 6 PM IST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-[#d9e3ff] bg-white p-8 shadow-[0_20px_60px_-45px_rgba(26,50,130,0.6)]">
            <h2 className="text-2xl font-semibold">Send a message</h2>
            <p className="mt-2 text-[#4c5a7a]">We reply within 24 hours during weekdays.</p>
            <form className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#4c5a7a] mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-[#d9e3ff] bg-[#f7f9ff] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2f4bb3]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#4c5a7a] mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-[#d9e3ff] bg-[#f7f9ff] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2f4bb3]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#4c5a7a] mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full rounded-xl border border-[#d9e3ff] bg-[#f7f9ff] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2f4bb3]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#4c5a7a] mb-2">Message</label>
                <textarea
                  placeholder="Your message..."
                  rows={5}
                  className="w-full rounded-xl border border-[#d9e3ff] bg-[#f7f9ff] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2f4bb3] resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-[#2f4bb3] px-5 py-3 font-semibold text-white hover:bg-[#243a8f] transition"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
