import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import GDPRCookieConsent from "@/components/gdpr-cookie-consent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sarxt Tech - Professional Technology Solutions",
  description:
    "Sarxt Tech provides enterprise-grade website and mobile application development, internet solutions, software and network engineering, and computer hardware solutions.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <div className="min-h-screen pt-16">{children}</div>
          <Footer />
          <GDPRCookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
