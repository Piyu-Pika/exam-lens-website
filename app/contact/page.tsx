import Header from "@/components/header"
import Footer from "@/components/footer"
import { Mail, MessageSquare } from "lucide-react"

export default function ContactPage() {
  return (
    <div>
      <Header />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-foreground">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We'd love to hear from you. Reach out anytime!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Email</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">Send us a message directly</p>
              <a
                href="mailto:piyushbhardwaj@gmail.com"
                className="text-primary font-semibold hover:underline inline-flex items-center gap-2"
              >
                piyushbhardwaj@gmail.com
              </a>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Support</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">Get help and report issues</p>
              <a href="mailto:support@examlens.com" className="text-primary font-semibold hover:underline">
                support@examlens.com
              </a>
            </div>
          </div>

          <div className="glass-card p-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Contact Form</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  placeholder="Your message..."
                  rows={5}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 gradient-primary text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/50 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
