import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f8f8f6] text-[#1c1b19]">
      <Header />

      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-4">
            <p className="uppercase tracking-[0.4em] text-xs text-[#8c8a86]">Privacy</p>
            <h1 className="text-4xl sm:text-5xl font-semibold font-['Fraunces']">Privacy Policy</h1>
            <p className="text-lg text-[#5f5c57] max-w-2xl">
              We believe transparency builds trust. Here is exactly how Exam Lens handles your data.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#e6e1da] bg-white p-8 shadow-[0_18px_50px_-40px_rgba(40,35,28,0.4)] space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-[#1c1b19] mb-3">1. Introduction</h2>
              <p className="text-[#5f5c57]">
                Exam Lens ("we", "us", or "our") operates the mobile application and website. This policy explains what
                information we collect, why we collect it, and how you can manage it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1c1b19] mb-3">2. Information We Collect</h2>
              <p className="text-[#5f5c57] mb-4">We collect information necessary to deliver the service:</p>
              <ul className="list-disc list-inside text-[#5f5c57] space-y-2">
                <li>Account data like name and email address</li>
                <li>Device information such as device type and OS version</li>
                <li>Usage data including feature interactions and preferences</li>
                <li>Exam tags and reminders you configure</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1c1b19] mb-3">3. How We Use Data</h2>
              <ul className="list-disc list-inside text-[#5f5c57] space-y-2">
                <li>Provide and maintain the service</li>
                <li>Send critical exam and job notifications</li>
                <li>Improve product performance and reliability</li>
                <li>Respond to support requests</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1c1b19] mb-3">4. Data Security</h2>
              <p className="text-[#5f5c57]">
                We use industry-standard safeguards to protect your data. No system is fully secure, but we continually
                improve our practices.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1c1b19] mb-3">5. Updates</h2>
              <p className="text-[#5f5c57]">
                We may update this policy. When we do, we will update the effective date and notify users when required.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1c1b19] mb-3">6. Contact</h2>
              <p className="text-[#5f5c57]">
                Questions? Email{" "}
                <a href="mailto:privacy@examlens.com" className="text-[#1c1b19] underline">
                  privacy@examlens.com
                </a>
                .
              </p>
            </div>

            <div className="pt-6 border-t border-[#efeae3] text-sm text-[#8c8a86]">
              Last updated: January 13, 2026
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
