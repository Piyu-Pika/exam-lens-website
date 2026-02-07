import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f3f1ff] text-[#1b1a24]">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-4">
            <p className="uppercase tracking-[0.4em] text-xs text-[#716f8b]">Terms</p>
            <h1 className="text-4xl sm:text-5xl font-semibold font-['Fraunces']">Terms of Service</h1>
            <p className="text-lg text-[#5b5875] max-w-2xl">
              These terms define how you can use Exam Lens, and how we deliver the service.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#e2ddf7] bg-white p-8 shadow-[0_18px_50px_-40px_rgba(50,40,120,0.4)] space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-[#1b1a24] mb-3">1. Acceptance</h2>
              <p className="text-[#5b5875]">
                By accessing or using Exam Lens, you agree to these terms and any updates we publish.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1b1a24] mb-3">2. Use License</h2>
              <p className="text-[#5b5875] mb-4">
                We grant you a personal, non-commercial license to use the app. You may not:
              </p>
              <ul className="list-disc list-inside text-[#5b5875] space-y-2">
                <li>Copy or redistribute the materials for commercial purposes</li>
                <li>Reverse engineer, decompile, or tamper with the software</li>
                <li>Remove proprietary notices or labels</li>
                <li>Mirror the service on another server</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1b1a24] mb-3">3. Disclaimer</h2>
              <p className="text-[#5b5875]">
                The service is provided \"as is\". We make no warranties regarding accuracy, availability, or fitness for
                a particular purpose.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1b1a24] mb-3">4. Limitation of Liability</h2>
              <p className="text-[#5b5875]">
                Exam Lens is not liable for indirect, incidental, or consequential damages arising from your use of the
                service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1b1a24] mb-3">5. Contact</h2>
              <p className="text-[#5b5875]">
                Questions about these terms? Email{" "}
                <a href="mailto:terms@examlens.com" className="text-[#1b1a24] underline">
                  terms@examlens.com
                </a>
                .
              </p>
            </div>

            <div className="pt-6 border-t border-[#efe9ff] text-sm text-[#7b78a0]">
              Last updated: January 13, 2026
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
