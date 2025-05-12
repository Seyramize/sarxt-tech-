"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
}

export default function AnimatedCard({ children, className = "" }: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card
        className={`border-0 overflow-hidden transition-all duration-300 ${
          isHovered ? "shadow-xl" : "shadow-md"
        } ${className}`}
      >
        <CardContent className="p-0">{children}</CardContent>
      </Card>
    </motion.div>
  )
}
