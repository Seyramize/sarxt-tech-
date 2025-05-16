import { siteMetadata } from "../site-metadata"
import type { Metadata } from "next"

export const metadata: Metadata = {
  ...siteMetadata,
  title: {
    default: "About | Sarxt Tech",
    template: "%s | Sarxt Tech",
  },
  description: "Learn more about Sarxt Tech, our mission, vision, values, and the team driving innovation for startups and businesses.",
  openGraph: {
    ...siteMetadata.openGraph,
    title: "About | Sarxt Tech",
    description: "Learn more about Sarxt Tech, our mission, vision, values, and the team driving innovation for startups and businesses.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
  },
  twitter: {
    ...siteMetadata.twitter,
    title: "About | Sarxt Tech",
    description: "Learn more about Sarxt Tech, our mission, vision, values, and the team driving innovation for startups and businesses.",
  },
}
