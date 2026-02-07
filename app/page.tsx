"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const featurePillars = [
  {
    title: "Unified Exam Radar",
    desc: "Track UPSC, SSC, Banking, Railways, State PSC, and private sector openings in one clean timeline.",
    icon: "🎯",
  },
  {
    title: "Smart Reminders",
    desc: "Get alerts that understand priority, deadline windows, and your personal preferences.",
    icon: "⏱️",
  },
  {
    title: "Calendar Intelligence",
    desc: "Visualize exam dates, application windows, and admit-card releases in a single view.",
    icon: "🗓️",
  },
  {
    title: "Public Hub",
    desc: "Discover trending exams and opportunities curated from the community.",
    icon: "🌐",
  },
  {
    title: "Offline Ready",
    desc: "Save everything to your device and keep moving even without a connection.",
    icon: "📴",
  },
  {
    title: "Personal Filters",
    desc: "Pin the categories you care about and hide the noise.",
    icon: "🏷️",
  },
]

const workflow = [
  {
    title: "Pick your focus",
    desc: "Select the exams and jobs that match your goals and interests.",
  },
  {
    title: "Track the timeline",
    desc: "Every key date is organized in your calendar with priorities.",
  },
  {
    title: "Get notified",
    desc: "Never miss a form window, admit card, or result announcement.",
  },
]

const stats = [
  { label: "Exam categories", value: "25+" },
  { label: "Alerts covered", value: "1200+" },
  { label: "Avg. rating", value: "4.8" },
]

export default function Home() {
  useEffect(() => {
    const stored = window.localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldUseDark = stored ? stored === "dark" : prefersDark
    document.documentElement.classList.toggle("dark", shouldUseDark)

    const nodes = Array.from(document.querySelectorAll("[data-reveal]")) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18 }
    )

    nodes.forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Exam Lens",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Android, iOS",
        description:
          "Track, organize, and get reminded about every competitive exam and job opportunity. The best exam and job notification app for UPSC, SSC, Banking, Railway, State PSC exams and government jobs.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          ratingCount: "100",
          bestRating: "5",
          worstRating: "1",
        },
        author: {
          "@type": "Person",
          name: "Piyush Bhardwaj",
        },
        downloadUrl: "https://github.com/Piyu-Pika/deployuemnonly/releases/download/v5/app-release.apk",
      },
      {
        "@type": "Organization",
        name: "Exam Lens",
        url: "https://exam-lens.vercel.app",
        logo: "https://exam-lens.vercel.app/images/logo.png",
        sameAs: [],
        contactPoint: {
          "@type": "ContactPoint",
          email: "piyushbhardwaj@gmail.com",
          contactType: "customer support",
        },
      },
      {
        "@type": "WebSite",
        name: "Exam Lens",
        url: "https://exam-lens.vercel.app",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://exam-lens.vercel.app/?search={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  }

  return (
    <div className="bg-[#f7f4ef] text-[#121317]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <section className="relative overflow-hidden pt-28 pb-20 px-6">
        <div className="absolute inset-0 hero-sheen"></div>
        <div className="absolute -top-28 right-[-10%] h-[420px] w-[420px] rounded-full bg-[#f6c86e]/50 blur-[120px]"></div>
        <div className="absolute bottom-[-200px] left-[-120px] h-[360px] w-[360px] rounded-full bg-[#86b9ff]/40 blur-[130px]"></div>

        <div className="relative mx-auto max-w-6xl grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1c1f26]/10 bg-white/70 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#48505e]">
              SaaS for exam planning
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] text-balance font-['Fraunces']">
              Never miss a deadline again. Build your exam roadmap in minutes.
            </h1>
            <p className="text-lg sm:text-xl text-[#49505c] max-w-xl">
              Exam Lens keeps your entire preparation universe in sync: exams, job alerts, admit cards, and results. One
              timeline, zero chaos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://github.com/Piyu-Pika/deployuemnonly/releases/download/v5/app-release.apk"
                className="px-7 py-4 rounded-2xl bg-[#121317] text-white font-semibold shadow-lg shadow-[#121317]/25 hover:-translate-y-0.5 transition"
              >
                Download Android
              </a>
              <button
                onClick={() => scrollToSection("features")}
                className="px-7 py-4 rounded-2xl border border-[#121317]/15 bg-white/80 font-semibold text-[#121317] hover:-translate-y-0.5 transition"
              >
                Explore the platform
              </button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-[#6a6f78]">
              <span className="inline-flex items-center gap-2">⚡ Real-time alerts</span>
              <span className="inline-flex items-center gap-2">🧠 Built for serious aspirants</span>
              <span className="inline-flex items-center gap-2">🔒 Offline-first data</span>
            </div>
            <div className="grid grid-cols-3 gap-4 max-w-md">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-[#121317]/10 bg-white/70 p-4">
                  <p className="text-2xl font-semibold text-[#121317]">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#6b717d]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" data-reveal>
            <div className="absolute -top-10 right-10 rounded-full bg-[#f6c86e]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#121317] shadow-lg">
              iOS beta soon
            </div>
            <div className="relative rounded-[32px] bg-white shadow-[0_40px_120px_-60px_rgba(18,19,23,0.6)] p-6">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/screenshot-20260113-132647.jpg"
                  alt="Exam Lens home screen"
                  className="rounded-2xl h-48 object-cover"
                />
                <img
                  src="/images/screenshot-20260113-132701.jpg"
                  alt="Exam Lens profile"
                  className="rounded-2xl h-48 object-cover"
                />
                <img
                  src="/images/screenshot-20260113-132654.jpg"
                  alt="Exam calendar"
                  className="rounded-2xl h-48 object-cover"
                />
                <img
                  src="/images/screenshot-20260113-132710.jpg"
                  alt="Public hub"
                  className="rounded-2xl h-48 object-cover"
                />
              </div>
              <div className="mt-6 flex items-center justify-between rounded-2xl border border-[#121317]/10 bg-[#f7f4ef] px-5 py-4">
                <div>
                  <p className="text-sm font-semibold text-[#121317]">Instant alerts</p>
                  <p className="text-xs text-[#6a6f78]">Never miss an application window.</p>
                </div>
                <span className="text-2xl">🔔</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16" id="features">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="flex flex-col gap-4 max-w-2xl" data-reveal>
            <p className="uppercase tracking-[0.4em] text-xs text-[#7c828d]">Product core</p>
            <h2 className="text-4xl sm:text-5xl font-semibold font-['Fraunces']">Everything you need to stay ahead.</h2>
            <p className="text-lg text-[#505862]">
              Designed like a modern SaaS dashboard but built for aspirants. Crisp insights, beautiful layouts, and
              proactive notifications.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featurePillars.map((feature, idx) => (
              <div
                key={feature.title}
                data-reveal
                style={{ transitionDelay: `${idx * 90}ms` }}
                className="reveal rounded-[28px] border border-[#121317]/10 bg-white/80 p-6 shadow-[0_25px_70px_-50px_rgba(18,19,23,0.4)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{feature.icon}</span>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#9aa0aa]">Core</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[#121317]">{feature.title}</h3>
                <p className="mt-3 text-[#5a616b]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-[#121317] text-white relative overflow-hidden">
        <div className="absolute inset-0 glow-grid opacity-40"></div>
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center relative">
          <div className="space-y-6" data-reveal>
            <p className="uppercase tracking-[0.4em] text-xs text-[#d0d4dc]">How it works</p>
            <h2 className="text-4xl sm:text-5xl font-semibold font-['Fraunces']">A focused workflow for serious prep.</h2>
            <p className="text-lg text-[#c4c8d0]">
              Exam Lens keeps your momentum by making every next action obvious. Open the app, see what matters, and
              move.
            </p>
            <div className="space-y-4">
              {workflow.map((step, idx) => (
                <div key={step.title} className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold">
                    0{idx + 1}
                  </div>
                  <div>
                    <p className="text-lg font-semibold">{step.title}</p>
                    <p className="text-[#c4c8d0]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4" data-reveal>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[#9aa0aa]">Live dashboard</p>
              <h3 className="mt-4 text-2xl font-semibold">See every deadline in one timeline.</h3>
              <p className="mt-3 text-[#c4c8d0]">
                Exam Lens highlights what needs action today and what can wait.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold">Priority alerts</p>
                <p className="text-sm text-[#c4c8d0]">Upcoming in 3 days</p>
                <p className="text-2xl font-semibold mt-4">SSC CGL</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold">New job listing</p>
                <p className="text-sm text-[#c4c8d0]">Last date: 22 Feb</p>
                <p className="text-2xl font-semibold mt-4">Railways 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6" data-reveal>
            <p className="uppercase tracking-[0.4em] text-xs text-[#7c828d]">Design focus</p>
            <h2 className="text-4xl sm:text-5xl font-semibold font-['Fraunces']">Glassmorphic. Focused. Fast.</h2>
            <p className="text-lg text-[#505862]">
              A layout built to reduce stress: clean surfaces, warm tones, and a clear path from discovery to action.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://indusapp.store/9dg2kul7"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-[#121317]/15 bg-white px-5 py-3 shadow-md"
              >
                <img
                  alt="Get it on Indus Appstore"
                  src="https://docstore.indusappstore.com/public/external/developerdashboard-static/badge-black-background-english.png"
                  className="h-10 w-auto"
                />
              </a>
              <div className="rounded-2xl border border-[#121317]/15 bg-white p-3 shadow-md">
                <img src="/images/QR-code.svg" alt="Scan to download" className="w-20 h-20" />
              </div>
            </div>
          </div>
          <div className="relative" data-reveal>
            <div className="absolute -top-10 -left-12 h-24 w-24 rounded-3xl bg-[#f6c86e]/70 blur-[1px]"></div>
            <img
              src="/images/screenshot-20260113-132738.jpg"
              alt="Exam details dark mode"
              className="rounded-[32px] shadow-[0_35px_100px_-60px_rgba(18,19,23,0.6)]"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-[#f0ede8]">
        <div className="mx-auto max-w-5xl text-center space-y-8" data-reveal>
          <h2 className="text-4xl sm:text-5xl font-semibold font-['Fraunces']">A message from the builder</h2>
          <p className="text-xl text-[#505862] italic leading-relaxed">
            "I wanted a calm, focused space for serious aspirants. Exam Lens keeps every exam, job listing, and update in
            one place so your energy goes into preparation, not searching."
          </p>
          <div className="flex flex-col items-center gap-1">
            <p className="font-semibold text-[#121317]">Piyush Bhardwaj</p>
            <p className="text-sm text-[#6a6f78]">Founder & Developer</p>
            <p className="text-sm text-[#6a6f78]">piyushbhardwaj@gmail.com</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-[#121317] text-white px-8 py-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 hero-sheen opacity-40"></div>
          <div className="relative space-y-6" data-reveal>
            <h2 className="text-4xl sm:text-5xl font-semibold font-['Fraunces']">Start building your exam strategy.</h2>
            <p className="text-lg text-[#c4c8d0]">
              Download the app now and get every deadline, admit card, and job opportunity organized.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/Piyu-Pika/deployuemnonly/releases/download/v5/app-release.apk"
                className="px-7 py-4 rounded-2xl bg-white text-[#121317] font-semibold hover:-translate-y-0.5 transition"
              >
                Download for Android
              </a>
              <button className="px-7 py-4 rounded-2xl border border-white/30 text-white font-semibold hover:-translate-y-0.5 transition">
                Join iOS waitlist
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
