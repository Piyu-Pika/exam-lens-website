import Header from "@/components/header"
import Footer from "@/components/footer"

export default function LicensePage() {
  return (
    <div>
      <Header />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-12 text-foreground">Software License</h1>

          <div className="prose prose-invert max-w-none space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Exam Lens Software License Agreement</h2>
              <p className="text-muted-foreground">
                This Software License Agreement ("Agreement") is entered into as of January 13, 2026, between Exam Lens,
                Inc. ("Licensor") and any person or entity using the Exam Lens software ("Licensee").
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Grant of License</h2>
              <p className="text-muted-foreground">
                Licensor hereby grants to Licensee a non-exclusive, non-transferable license to use the Exam Lens
                software in object code form only, for the purposes of tracking exams and receiving notifications.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Restrictions</h2>
              <p className="text-muted-foreground">Licensee shall not:</p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Reverse engineer, decompile, or disassemble the software</li>
                <li>Rent, lease, or lend the software</li>
                <li>Modify or create derivative works of the software</li>
                <li>Remove any proprietary notices or labels on the software</li>
                <li>Use the software for any illegal purpose</li>
                <li>Sell, transfer, or sublicense the software</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Ownership</h2>
              <p className="text-muted-foreground">
                The Exam Lens software is licensed, not sold. Licensor retains all right, title, and interest in the
                software and all copies thereof, including without limitation all rights to patches, updates, and
                modifications.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Term and Termination</h2>
              <p className="text-muted-foreground">
                This license is effective until terminated. Licensee's rights under this license will terminate
                automatically without notice from Licensor if Licensee fails to comply with any terms of this Agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground">
                THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
                LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                IN NO EVENT SHALL LICENSOR BE LIABLE FOR ANY SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES
                ARISING OUT OF OR RELATING TO THIS LICENSE OR THE USE OF THE SOFTWARE.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact</h2>
              <p className="text-muted-foreground">
                For license inquiries, please contact us at:{" "}
                <a href="mailto:license@examlens.com" className="text-primary hover:underline">
                  license@examlens.com
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
