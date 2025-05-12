"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Twitter } from "lucide-react"

interface TeamMemberCardProps {
  name: string
  position: string
  bio: string
  image: string
  linkedin?: string
  twitter?: string
}

export default function TeamMemberCard({ name, position, bio, image, linkedin, twitter }: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-blue-500/20">
        <div className="relative h-80 w-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

          {/* Social links */}
          <div className="absolute top-4 right-4 flex space-x-2">
            {linkedin && (
              <a
                href={linkedin}
                className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-blue-600 transition-colors"
                aria-label={`${name}'s LinkedIn profile`}
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-blue-400 transition-colors"
                aria-label={`${name}'s Twitter profile`}
              >
                <Twitter className="h-4 w-4" />
              </a>
            )}
          </div>

          {/* Name and position */}
          <div className="absolute bottom-0 left-0 w-full p-6">
            <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
            <p className="text-blue-400 font-medium">{position}</p>
          </div>
        </div>

        <div className="p-6">
          <p className="text-gray-300">{bio}</p>
        </div>
      </div>
    </motion.div>
  )
}
