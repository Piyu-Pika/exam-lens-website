import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "How Exam Lens Began: A Developer's Mission",
    excerpt:
      "The story behind creating Exam Lens - from a simple idea to helping thousands of students never miss an exam.",
    date: "January 10, 2026",
    category: "Journey",
  },
  {
    id: 2,
    title: "Why We Built Exam Lens in Glassmorphism",
    excerpt: "Exploring our design choices and why glassmorphism is perfect for educational apps.",
    date: "January 5, 2026",
    category: "Design",
  },
  {
    id: 3,
    title: "iOS App Launch: What's Coming Next",
    excerpt: "Sneak peek into the iOS version of Exam Lens and what features are coming next.",
    date: "December 28, 2025",
    category: "Updates",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#fff7ef] text-[#1d1b16]">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-end">
            <div className="space-y-4">
              <p className="uppercase tracking-[0.5em] text-xs text-[#8b7a6a]">Blog</p>
              <h1 className="text-4xl sm:text-5xl font-semibold font-['Fraunces']">
                Notes, updates, and quiet wins.
              </h1>
              <p className="text-lg text-[#6c5c4f] max-w-xl">
                Stories from the team building Exam Lens and the aspirants shaping it.
              </p>
            </div>
            <div className="rounded-[26px] border border-[#e7d9cc] bg-white p-6 shadow-[0_20px_60px_-40px_rgba(52,40,32,0.45)]">
              <p className="text-xs uppercase tracking-[0.4em] text-[#a08978]">Featured</p>
              <h2 className="mt-4 text-2xl font-semibold">Preparing for 2026 exams with clarity</h2>
              <p className="mt-2 text-[#6c5c4f]">
                A quick guide to building a calm prep system using Exam Lens.
              </p>
              <Link
                href="/blog/1"
                className="mt-5 inline-flex rounded-full border border-[#1d1b16] px-4 py-2 text-sm font-semibold hover:bg-[#1d1b16] hover:text-white transition"
              >
                Read guide
              </Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="rounded-[24px] border border-[#eddccf] bg-white p-6 shadow-[0_16px_40px_-32px_rgba(52,40,32,0.5)]"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[#9a8575]">
                  <span>{post.category}</span>
                  <span className="normal-case tracking-normal text-[#a48f80]">{post.date}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#1d1b16]">{post.title}</h3>
                <p className="mt-3 text-[#6c5c4f]">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.id}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1d1b16] hover:underline"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
