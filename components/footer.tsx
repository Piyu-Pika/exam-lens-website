import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-background rounded flex items-center justify-center">
                <span className="text-foreground font-bold text-xs">EL</span>
              </div>
              <span className="font-semibold">Exam Lens</span>
            </div>
            <p className="text-sm opacity-80">Your Gateway to Exams & Career Opportunities</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="/#features" className="hover:opacity-100 transition">
                  Features
                </a>
              </li>
              <li>
                <a href="/#screenshots" className="hover:opacity-100 transition">
                  Download
                </a>
              </li>
              <li>
                <Link href="/pricing" className="hover:opacity-100 transition">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="/#developer" className="hover:opacity-100 transition">
                  About
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-100 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:opacity-100 transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/privacy" className="hover:opacity-100 transition">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:opacity-100 transition">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/license" className="hover:opacity-100 transition">
                  License
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
          <p>© 2026 Exam Lens. All rights reserved. Private & Proprietary.</p>
        </div>
      </div>
    </footer>
  )
}
