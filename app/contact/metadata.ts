import { siteMetadata } from "../site-metadata"
import type { Metadata } from "next"

export const metadata: Metadata = {
  ...siteMetadata,
  title: {
    default: "Contact | Sarxt Tech",
    template: "%s | Sarxt Tech",
  },
  description: "Contact Sarxt Tech for innovative technology solutions, startup support, and digital transformation services.",
  openGraph: {
    ...siteMetadata.openGraph,
    title: "Contact | Sarxt Tech",
    description: "Contact Sarxt Tech for innovative technology solutions, startup support, and digital transformation services.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
  },
  twitter: {
    ...siteMetadata.twitter,
    title: "Contact | Sarxt Tech",
    description: "Contact Sarxt Tech for innovative technology solutions, startup support, and digital transformation services.",
  },
}
