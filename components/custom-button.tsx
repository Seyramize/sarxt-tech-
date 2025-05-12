"use client"

import type React from "react"

import { forwardRef, useState, useRef, useEffect } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md hover:shadow-lg active:shadow-inner",
        secondary:
          "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md hover:shadow-lg active:shadow-inner",
        outline:
          "border-2 border-gray-200 dark:border-gray-700 bg-transparent text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-700",
        ghost:
          "bg-transparent text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-700",
        link: "bg-transparent text-blue-600 dark:text-blue-400 underline-offset-4 hover:underline p-0 h-auto",
        white: "bg-white text-blue-600 shadow-md hover:shadow-lg active:shadow-inner",
        dark: "bg-gray-900 text-white shadow-md hover:shadow-lg active:shadow-inner",
        glow: "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md",
        neon: "border-2 border-blue-500 bg-transparent text-blue-500 dark:text-blue-400",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 px-3 py-1.5 text-xs",
        lg: "h-12 px-8 py-3 text-base",
        xl: "h-14 px-10 py-4 text-lg",
        icon: "h-10 w-10",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
      animated: {
        true: "",
        false: "",
      },
      animationType: {
        default: "",
        glow: "",
        ripple: "",
        shine: "",
        gradient: "",
        border: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
      animated: true,
      animationType: "default",
    },
  },
)

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  (
    { className, variant, size, fullWidth, animated = true, animationType = "default", isLoading, children, ...props },
    ref,
  ) => {
    const [isHovered, setIsHovered] = useState(false)
    const [isPressed, setIsPressed] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [showRipple, setShowRipple] = useState(false)
    const [ripplePosition, setRipplePosition] = useState({ x: 0, y: 0 })
    const [showShine, setShowShine] = useState(false)
    const buttonRef = useRef<HTMLButtonElement>(null)

    // Combine the forwarded ref with our local ref
    useEffect(() => {
      if (typeof ref === "function") {
        ref(buttonRef.current)
      } else if (ref) {
        ;(ref as React.MutableRefObject<HTMLButtonElement | null>).current = buttonRef.current
      }
    }, [ref])

    // Handle mouse enter
    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!animated) return
      setIsHovered(true)

      if (animationType === "shine") {
        setShowShine(true)
        setTimeout(() => setShowShine(false), 1500)
      }
    }

    // Handle mouse leave
    const handleMouseLeave = () => {
      if (!animated) return
      setIsHovered(false)
    }

    // Handle mouse move for hover effects
    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!animated || !buttonRef.current) return

      const rect = buttonRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      setMousePosition({ x, y })
    }

    // Handle mouse down for ripple effect
    const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!animated || animationType !== "ripple" || !buttonRef.current) return

      setIsPressed(true)

      const rect = buttonRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      setRipplePosition({ x, y })
      setShowRipple(true)

      setTimeout(() => {
        setShowRipple(false)
      }, 600)
    }

    // Handle mouse up
    const handleMouseUp = () => {
      if (!animated) return
      setIsPressed(false)
    }

    // Determine animation classes based on variant and animation type
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

    // Get hover effect styles
    const getHoverStyles = () => {
      if (!animated || !isHovered) return {}

      if (variant === "default" || variant === "secondary" || variant === "glow") {
        return {
          backgroundSize: "200% 200%",
          transition: "all 0.3s ease",
        }
      }

      return {}
    }

    // Get press effect styles
    const getPressStyles = () => {
      if (!animated || !isPressed) return {}

      return {
        transform: "scale(0.97)",
        transition: "transform 0.1s ease",
      }
    }

    return (
      <motion.button as="button"
        className={cn(
          buttonVariants({ variant, size, fullWidth, className }),
          getAnimationClasses(),
          variant === "glow" && "animate-pulse-glow",
          variant === "neon" && "hover:text-white",
        )}
        ref={buttonRef}
        whileHover={animated ? { scale: 1.03 } : {}}
        whileTap={animated ? { scale: 0.97 } : {}}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        style={{
          ...getHoverStyles(),
          ...getPressStyles(),
        }}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {/* Ripple effect */}
        {animated && animationType === "ripple" && showRipple && (
          <span
            className="absolute rounded-full bg-white/30 animate-ripple"
            style={{
              left: ripplePosition.x,
              top: ripplePosition.y,
              width: "10px",
              height: "10px",
              transform: "translate(-50%, -50%)",
            }}
          />
        )}

        {/* Shine effect */}
        {animated && animationType === "shine" && showShine && (
          <span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"
            style={{
              backgroundSize: "200% 100%",
            }}
          />
        )}

        {/* Hover gradient for neon buttons */}
        {animated && variant === "neon" && isHovered && (
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-opacity duration-300 opacity-100 -z-10" />
        )}

        {isLoading ? (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        <span className="relative z-10">{children}</span>
      </motion.button>
    )
  },
)
CustomButton.displayName = "CustomButton"

export { CustomButton, buttonVariants }
