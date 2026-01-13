"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  useEffect(() => {
    // Check for dark mode preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full gradient-primary p-1 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-background dark:bg-slate-900 flex items-center justify-center">
                <img src="/images/logo.jpg" alt="Exam Lens Logo" className="w-24 h-24 object-contain" />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-foreground text-balance">
            Never Miss an Exam Again
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-balance">Navigate Your Academic Journey</p>

          {/* iOS Beta Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-primary font-semibold text-sm">iOS Coming Soon - Currently in Beta</span>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
            Exam Lens helps you track, organize, and get reminded about every competitive exam and job opportunity that
            matters to you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="px-8 py-4 gradient-primary text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/50 transition">
              Download Now
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="px-8 py-4 bg-muted text-foreground rounded-xl font-semibold hover:bg-muted/80 transition"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Powerful Features</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Track Every Exam",
                desc: "All competitive exams in one place",
                icon: "📝",
              },
              {
                title: "Smart Reminders",
                desc: "Personalized notifications at the right time",
                icon: "🔔",
              },
              {
                title: "Visual Calendar",
                desc: "See your exam schedule at a glance",
                icon: "📅",
              },
              {
                title: "Your Interests",
                desc: "Only see what matters to you",
                icon: "🏷️",
              },
              {
                title: "Dark Mode",
                desc: "Easy on the eyes, day or night",
                icon: "🌙",
              },
              {
                title: "Works Offline",
                desc: "Access your data anywhere",
                icon: "📴",
              },
            ].map((feature, idx) => (
              <div key={idx} className="glass-card p-8 hover:shadow-xl transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">App Preview</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Beautiful Design</h3>
              <p className="text-muted-foreground mb-4">
                Experience a stunning glassmorphic interface with smooth animations and intuitive navigation.
              </p>
              <p className="text-muted-foreground">
                Available on iOS, Android, and Web platforms with seamless synchronization across all devices.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/screenshot-20260113-132647.jpg"
                alt="Home Screen"
                className="rounded-2xl shadow-xl h-80 object-cover"
              />
              <img
                src="/images/screenshot-20260113-132701.jpg"
                alt="Profile Screen"
                className="rounded-2xl shadow-xl h-80 object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mt-16 md:flex-row-reverse">
            <div className="grid grid-cols-2 gap-4 md:order-last">
              <img
                src="/images/screenshot-20260113-132654.jpg"
                alt="Calendar Screen"
                className="rounded-2xl shadow-xl h-80 object-cover"
              />
              <img
                src="/images/screenshot-20260113-132710.jpg"
                alt="Public Hub Screen"
                className="rounded-2xl shadow-xl h-80 object-cover"
              />
            </div>
            <div className="md:order-first">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Comprehensive Features</h3>
              <p className="text-muted-foreground mb-4">
                Manage your exam schedule with an integrated calendar view, track important dates, and stay updated with
                exam details.
              </p>
              <p className="text-muted-foreground">
                Connect with other students through the Public Hub and discover exams that align with your interests.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mt-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Dark Mode Support</h3>
              <p className="text-muted-foreground mb-4">
                Switch between light and dark themes based on your preference or system settings.
              </p>
              <p className="text-muted-foreground">
                View detailed exam information, notification settings, and priority levels at a glance.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/screenshot-20260113-132738.jpg"
                alt="Dark Mode Exam Details"
                className="rounded-2xl shadow-xl h-80 object-cover"
              />
              <img
                src="/images/screenshot-20260113-132730.jpg"
                alt="Dark Mode Calendar"
                className="rounded-2xl shadow-xl h-80 object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mt-16 md:flex-row-reverse">
            <div className="md:order-last">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Dark Public Hub</h3>
              <p className="text-muted-foreground mb-4">
                Browse upcoming exams with detailed information about job openings and application deadlines.
              </p>
              <p className="text-muted-foreground">
                Filter and sort exams by your interests to stay informed about the opportunities that matter most to
                you.
              </p>
            </div>
            <div className="md:order-first">
              <img
                src="/images/screenshot-20260113-132722.jpg"
                alt="Dark Mode Public Hub"
                className="rounded-2xl shadow-xl h-96 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Developer Message Section */}
      <section id="developer" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-12 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 gradient-primary rounded-full mx-auto mb-4"></div>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Message from the Developer</h2>
            <p className="text-xl text-muted-foreground mb-8 italic text-balance leading-relaxed">
              "Hi friends, this is an exam notifier and I just wanted to help the people so no one misses the exam
              anymore."
            </p>
            <div className="border-t border-border pt-6">
              <p className="font-semibold text-foreground">Piyush Bhardwaj</p>
              <p className="text-muted-foreground">Founder & Developer</p>
              <p className="text-sm text-muted-foreground mt-2">piyushbhardwaj@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Start Your Journey Today</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of students who never miss an exam deadline
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 gradient-primary text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/50 transition">
              Download for Android
            </button>
            <button className="px-8 py-4 gradient-primary text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/50 transition">
              Download for iOS
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
