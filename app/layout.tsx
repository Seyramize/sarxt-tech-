import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import GDPRCookieConsent from "@/components/gdpr-cookie-consent"
import { siteMetadata } from "./site-metadata"

const inter = Inter({ subsets: ["latin"] })

export const metadata = siteMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/placeholder-logo.svg" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon1.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon0.svg" />
        <link rel="manifest" href="/manifest.json" />

        {/* SEO Meta Tags */}
        <meta name="description" content={process.env.NEXT_PUBLIC_SITE_DESCRIPTION} />
        <meta name="keywords" content={process.env.NEXT_PUBLIC_SITE_KEYWORDS} />
        <meta property="og:title" content={process.env.NEXT_PUBLIC_SITE_NAME} />
        <meta property="og:description" content={process.env.NEXT_PUBLIC_SITE_DESCRIPTION} />
        <meta property="og:image" content={process.env.NEXT_PUBLIC_SITE_IMAGE} />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={process.env.NEXT_PUBLIC_SITE_LOCALE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={process.env.NEXT_PUBLIC_SITE_NAME} />
        <meta name="twitter:description" content={process.env.NEXT_PUBLIC_SITE_DESCRIPTION} />
        <meta name="twitter:image" content={process.env.NEXT_PUBLIC_SITE_IMAGE} />
        <meta name="twitter:site" content={process.env.NEXT_PUBLIC_SITE_TWITTER} />
      </head>
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
