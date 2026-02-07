import Header from "@/components/header"
import Footer from "@/components/footer"

export default function LicensePage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-[#e2e8f0]">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-4">
            <p className="uppercase tracking-[0.4em] text-xs text-[#94a3b8]">License</p>
            <h1 className="text-4xl sm:text-5xl font-semibold font-['Fraunces']">Software License</h1>
            <p className="text-lg text-[#cbd5f5] max-w-2xl">
              This agreement defines the boundaries for using Exam Lens software.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.8)] space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">Exam Lens Software License Agreement</h2>
              <p className="text-[#cbd5f5]">
                This agreement is entered into as of January 13, 2026, between Exam Lens, Inc. and any person or entity
                using the software.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">1. Grant of License</h2>
              <p className="text-[#cbd5f5]">
                We grant a non-exclusive, non-transferable license to use Exam Lens in object code form to track exams
                and receive notifications.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">2. Restrictions</h2>
              <ul className="list-disc list-inside text-[#cbd5f5] space-y-2">
                <li>No reverse engineering, decompiling, or disassembly</li>
                <li>No renting, leasing, or sublicensing</li>
                <li>No modification or derivative works</li>
                <li>No removal of proprietary notices</li>
                <li>No illegal use</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">3. Ownership</h2>
              <p className="text-[#cbd5f5]">
                Exam Lens is licensed, not sold. We retain all rights to the software, updates, and related materials.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">4. Termination</h2>
              <p className="text-[#cbd5f5]">
                This license remains active until terminated. It ends automatically if terms are violated.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">5. Disclaimer</h2>
              <p className="text-[#cbd5f5]">
                The software is provided \"as is\" without warranties of any kind, express or implied.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-3">6. Contact</h2>
              <p className="text-[#cbd5f5]">
                For license questions, email{" "}
                <a href="mailto:license@examlens.com" className="text-white underline">
                  license@examlens.com
                </a>
                .
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 text-sm text-[#94a3b8]">
              Last updated: January 13, 2026
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
