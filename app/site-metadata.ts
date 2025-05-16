import type { Metadata } from "next"

export const siteMetadata: Metadata = {
  title: {
    default: process.env.NEXT_PUBLIC_SITE_NAME || "Sarxt Tech",
    template: "%s | Sarxt Tech",
  },
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
  keywords: process.env.NEXT_PUBLIC_SITE_KEYWORDS,
  openGraph: {
    title: process.env.NEXT_PUBLIC_SITE_NAME,
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    images: [
      {
        url: process.env.NEXT_PUBLIC_SITE_IMAGE || "/logo.png",
        width: 1200,
        height: 630,
        alt: process.env.NEXT_PUBLIC_SITE_NAME || "Sarxt Tech",
      },
    ],
    locale: process.env.NEXT_PUBLIC_SITE_LOCALE || "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: process.env.NEXT_PUBLIC_SITE_TWITTER,
    title: process.env.NEXT_PUBLIC_SITE_NAME,
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
    images: [process.env.NEXT_PUBLIC_SITE_IMAGE || "/logo.png"],
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.sarxttech.com"),
};
