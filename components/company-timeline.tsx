"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface Milestone {
  year: string
  title: string
  description: string
  icon: ReactNode
}

interface CompanyTimelineProps {
  milestones: Milestone[]
}

export default function CompanyTimeline({ milestones }: CompanyTimelineProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>

        {/* Timeline items */}
        <div className="space-y-20">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`relative z-10 flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              {/* Content */}
              <motion.div
                className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="mb-1 text-blue-400 font-bold">{milestone.year}</div>
                <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                <p className="text-gray-300">{milestone.description}</p>
              </motion.div>

              {/* Center icon */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 border-4 border-gray-900 z-20"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
              >
                <div className="text-white">{milestone.icon}</div>
              </motion.div>

              {/* Empty space for the other side */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
