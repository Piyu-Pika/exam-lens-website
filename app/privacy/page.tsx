import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div>
      <Header />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-12 text-foreground">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground">
                Exam Lens ("we", "us", "our", or "Company") operates the mobile application and website. This page
                informs you of our policies regarding the collection, use, and disclosure of personal data when you use
                our Service and the choices you have associated with that data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information Collection and Use</h2>
              <p className="text-muted-foreground mb-4">
                We collect several different types of information for various purposes to provide and improve our
                Service to you.
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-2">Types of Data Collected:</h3>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Personal Data (email address, name, usage preferences)</li>
                <li>Device Information (device type, OS version)</li>
                <li>Usage Data (pages visited, features used, time spent)</li>
                <li>Exam preferences and tags you select</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Use of Data</h2>
              <p className="text-muted-foreground">Exam Lens uses the collected data for various purposes:</p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our Service</li>
                <li>To monitor the usage of our Service</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Security of Data</h2>
              <p className="text-muted-foreground">
                The security of your data is important to us but remember that no method of transmission over the
                Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable
                means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at:{" "}
                <a href="mailto:privacy@examlens.com" className="text-primary hover:underline">
                  privacy@examlens.com
                </a>
              </p>
            </div>

            <div className="pt-6 border-t border-border mt-8">
              <p className="text-sm text-muted-foreground">Last updated: January 13, 2026</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
