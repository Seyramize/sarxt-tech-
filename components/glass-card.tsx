import type React from "react"
interface GlassCardProps {
  children: React.ReactNode
  className?: string
}

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border border-white/20 dark:border-gray-800/20 rounded-xl shadow-xl ${className}`}
    >
      {children}
    </div>
  )
}
