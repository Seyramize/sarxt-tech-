"use client";

import Link from "next/link"
import type { ReactNode } from "react"
import { buttonVariants } from "@/components/custom-button"
import { cn } from "@/lib/utils"
import type { VariantProps } from "class-variance-authority"

interface ButtonLinkProps extends VariantProps<typeof buttonVariants> {
  href: string
  children: ReactNode
  className?: string
}

export default function ButtonLink({
  href,
  children,
  className = "",
  variant = "default",
  size = "default",
  fullWidth = false,
  animated = true,
  animationType = "default",
}: ButtonLinkProps) {
  // Get animation classes based on animation type
  const getAnimationClasses = () => {
    if (!animated) return ""

    switch (animationType) {
      case "glow":
        return "animate-pulse-glow"
      case "gradient":
        return "bg-size-200 animate-gradient-shift"
      case "border":
        return variant === "outline" || variant === "neon" ? "animate-border-glow" : ""
      default:
        return ""
    }
  }

  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant, size, fullWidth }),
        getAnimationClasses(),
        variant === "glow" && "animate-pulse-glow",
        variant === "neon" && "hover:text-white group",
        "hover:scale-[1.03] active:scale-[0.97] transition-transform",
        className,
      )}
    >
      {/* Shine effect that triggers on component mount */}
      {animated && animationType === "shine" && (
        <span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"
          style={{
            backgroundSize: "200% 100%",
          }}
        />
      )}

      {/* Hover gradient for neon buttons */}
      {animated && variant === "neon" && (
        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-opacity duration-300 opacity-0 group-hover:opacity-100 -z-10" />
      )}

      <span className="relative z-10">{children}</span>
    </Link>
  )
}
