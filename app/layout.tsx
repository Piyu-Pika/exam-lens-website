import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Exam Lens - Never Miss an Exam or Job | Exam & Job Alert App",
    template: "%s | Exam Lens",
  },
  description:
    "Track, organize, and get reminded about every competitive exam and job opportunity. The best exam and job notification app for UPSC, SSC, Banking, Railway, State PSC exams and government jobs. Download now for Android & iOS.",
  keywords: [
    "exam notification app",
    "competitive exam tracker",
    "job alert app",
    "exam calendar app",
    "exam reminders",
    "UPSC exam dates",
    "SSC exam notification",
    "banking exam alerts",
    "railway exam dates",
    "government job alerts",
    "exam deadline tracker",
    "competitive exam app",
    "exam schedule app",
    "job notification app india",
    "sarkari exam app",
    "exam lens",
    "never miss exam",
    "exam organizer",
    "state PSC exam dates",
    "exam preparation app",
  ],
  authors: [{ name: "Piyush Bhardwaj", url: "mailto:piyushbhardwaj@gmail.com" }],
  creator: "Piyush Bhardwaj",
  publisher: "Exam Lens",
  metadataBase: new URL("https://exam-lens.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://exam-lens.vercel.app",
    siteName: "Exam Lens",
    title: "Exam Lens - Never Miss an Exam or Job | Exam & Job Alert App",
    description:
      "Track, organize, and get reminded about every competitive exam and job opportunity. Download the best exam and job notification app for UPSC, SSC, Banking, Railway exams and government jobs.",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Exam Lens - Competitive Exam & Job Alert App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exam Lens - Never Miss an Exam or Job",
    description:
      "Track & get notified about every competitive exam and job opportunity. Your gateway to exams & career success!",
    images: ["/images/logo.jpg"],
    creator: "@piyushbhardwaj",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  category: "Education",
  icons: {
    icon: [
      {
        url: "/images/logo.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/logo.jpg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/images/logo.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
