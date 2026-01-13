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
    content: `
Exam Lens started with a simple observation: many aspiring candidates miss important exam notifications and deadlines because they don't have a centralized way to track them. As a developer passionate about education, I decided to create a solution that would solve this problem once and for all.

The first version was built over a weekend, with just basic exam tracking functionality. But the response from beta testers was overwhelming. Students loved having all their exams in one place, with smart reminders and a beautiful interface.

Over the past few months, we've added calendar views, a public hub for discovering new exams, dark mode support, and so much more. The journey has been incredible, and we're just getting started.
    `,
  },
  {
    id: 2,
    title: "Why We Built Exam Lens in Glassmorphism",
    excerpt: "Exploring our design choices and why glassmorphism is perfect for educational apps.",
    date: "January 5, 2026",
    category: "Design",
    content: `
When designing Exam Lens, we wanted to create an interface that felt modern, clean, and approachable. Glassmorphism - with its frosted glass effect and transparency - seemed like the perfect fit.

Glassmorphism provides several benefits:
- It creates visual hierarchy through depth and layers
- The transparency conveys openness and clarity
- It feels contemporary without being trendy
- The soft edges are psychologically calming

Combined with our purple-to-blue gradient theme, we achieved a design that's both professional and inviting. It resonates with students who want a modern app for their academic journey.
    `,
  },
  {
    id: 3,
    title: "iOS App Launch: What's Coming Next",
    excerpt: "Sneak peek into the iOS version of Exam Lens and what features are coming next.",
    date: "December 28, 2025",
    category: "Updates",
    content: `
We're excited to announce that Exam Lens for iOS is coming very soon! The app is currently in beta testing, and we've been overwhelmed by the positive feedback from our testers.

The iOS version includes everything from the Android app, plus some iOS-specific optimizations:
- Native notifications that work seamlessly with iOS
- Siri shortcuts for quick exam checks
- Widget support for glanceability
- Deep integration with iOS Calendar

We're aiming to launch on the App Store in early February 2026. Stay tuned for more updates!
    `,
  },
]

export default function BlogPage() {
  return (
    <div>
      <Header />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-foreground">Blog</h1>
            <p className="text-xl text-muted-foreground">Stories, updates, and insights from the Exam Lens journey</p>
          </div>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="glass-card p-8 hover:shadow-xl transition">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold mb-3 text-foreground">{post.title}</h2>
                <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-primary font-semibold hover:underline inline-flex items-center gap-2"
                >
                  Read More →
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
