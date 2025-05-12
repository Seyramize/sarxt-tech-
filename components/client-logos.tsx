"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useAnimationControls } from "framer-motion"

// Define company data with logos and names
const companies = [
  {
    id: 1,
    name: "TechVision",
    logo: "/modern-tech-logo-2.png",
    alt: "TechVision logo",
  },
  {
    id: 2,
    name: "InnovateCorp",
    logo: "/modern-tech-company-logo-3.png",
    alt: "InnovateCorp logo",
  },
  {
    id: 3,
    name: "FutureSystems",
    logo: "/modern-tech-company-logo-4.png",
    alt: "FutureSystems logo",
  },
  {
    id: 4,
    name: "GlobalTech",
    logo: "/modern-tech-company-logo-5.png",
    alt: "GlobalTech logo",
  },
  {
    id: 5,
    name: "NexusWave",
    logo: "/modern-tech-company-logo-7.png",
    alt: "NexusWave logo",
  },
  {
    id: 6,
    name: "QuantumEdge",
    logo: "/modern-tech-company-logo-8.png",
    alt: "QuantumEdge logo",
  },
]

// Duplicate the companies array to create a seamless loop
const duplicatedCompanies = [...companies, ...companies]

export default function ClientLogos() {
  const [isMounted, setIsMounted] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const controls = useAnimationControls()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)

    // Start the animation
    controls.start({
      x: [0, -100 * companies.length],
      transition: {
        x: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    })
  }, [controls])

  // Pause animation on hover
  useEffect(() => {
    if (isPaused) {
      controls.stop()
    } else {
      controls.start({
        x: [0, -100 * companies.length],
        transition: {
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      })
    }
  }, [isPaused, controls])

  if (!isMounted) {
    return null
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            Trusted by Leading Companies
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're proud to partner with forward-thinking organizations across industries to deliver exceptional digital
            solutions.
          </p>
        </motion.div>

        {/* Sliding logos container */}
        <div
          ref={containerRef}
          className="relative overflow-hidden mx-auto max-w-6xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div className="flex items-center gap-16 py-8" animate={controls} style={{ width: "fit-content" }}>
            {duplicatedCompanies.map((company, index) => (
              <div key={`${company.id}-${index}`} className="flex flex-col items-center group w-[100px]">
                <div className="relative h-20 w-full mb-3 transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110 hover:shadow-lg rounded-lg overflow-hidden">
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={company.alt}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  {company.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400 italic">
            "Sarxt Tech has consistently delivered innovative solutions that have transformed our digital presence."
          </p>
          <p className="mt-2 font-semibold text-gray-700 dark:text-gray-200">— CTO, FutureSystems</p>
        </motion.div>
      </div>
    </section>
  )
}
