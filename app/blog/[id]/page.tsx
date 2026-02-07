import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { notFound } from "next/navigation"

const posts = {
  "1": {
    title: "How Exam Lens Began: A Developer's Mission",
    date: "January 10, 2026",
    category: "Journey",
    content: [
      "Exam Lens started with a simple observation: many aspiring candidates miss important exam notifications and deadlines because there isn't a single calm place to track everything.",
      "The first version was built over a weekend with just a few core features. The response from early users was overwhelming—students loved having all their exams in one place, with smart reminders and a clear timeline.",
      "Over the months, the product grew into a full system: calendar views, a public hub for new exams, dark mode support, and instant alerts. The mission stayed the same—help aspirants focus on preparation, not searching.",
    ],
  },
  "2": {
    title: "Why We Built Exam Lens in Glassmorphism",
    date: "January 5, 2026",
    category: "Design",
    content: [
      "When designing Exam Lens, we wanted the UI to feel modern, calm, and approachable. Glassmorphism gave us the balance between clarity and depth.",
      "The subtle transparency creates visual hierarchy without clutter, while soft edges and layers reduce visual stress. For aspirants who spend hours preparing, the interface needs to feel supportive, not noisy.",
      "Combined with warm neutrals and precise typography, the design gives a premium feel without being flashy. It's professional, focused, and built for serious study.",
    ],
  },
  "3": {
    title: "iOS App Launch: What's Coming Next",
    date: "December 28, 2025",
    category: "Updates",
    content: [
      "We are preparing the iOS version of Exam Lens for a public launch. The beta phase has been encouraging, and we are polishing the experience for a wider release.",
      "The iOS build includes native notifications, calendar integration, and a smooth onboarding flow. We also tuned performance to keep the experience fast on older devices.",
      "Our goal is to launch in early February 2026. We'll keep improving the app across Android, iOS, and web with deeper personalization and smarter alerts.",
    ],
  },
} as const

type PostId = keyof typeof posts

export function generateStaticParams() {
  return Object.keys(posts).map((id) => ({ id }))
}

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = posts[id as PostId]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#fff7ef] text-[#1d1b16]">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-3xl space-y-10">
          <div className="space-y-4">
            <Link href="/blog" className="text-sm font-semibold text-[#6c5c4f] hover:underline">
              ← Back to blog
            </Link>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#9a8575]">
              <span>{post.category}</span>
              <span className="normal-case tracking-normal text-[#a48f80]">{post.date}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold font-['Fraunces']">{post.title}</h1>
          </div>

          <div className="rounded-[28px] border border-[#eddccf] bg-white p-8 shadow-[0_18px_50px_-40px_rgba(52,40,32,0.45)] space-y-6">
            {post.content.map((paragraph) => (
              <p key={paragraph} className="text-lg text-[#6c5c4f] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="rounded-[26px] border border-[#e7d9cc] bg-white p-6 text-sm text-[#6c5c4f]">
            Want more updates? Follow the next releases in the Exam Lens app.
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
