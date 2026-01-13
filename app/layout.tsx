import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Exam Lens - Never Miss an Exam",
  description:
    "Track, organize, and get reminded about every competitive exam and job opportunity. Navigate your academic journey with Exam Lens.",

  icons: {
    icon: [
      {
        url: "public/images/logo.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "public/images/logo.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "public/images/logo.jpg",
        type: "image/svg+xml",
      },
    ],
    apple: "public/images/logo.jpg",
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
