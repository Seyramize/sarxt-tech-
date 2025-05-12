"use client"

import { useEffect, useRef } from "react"

export default function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match parent
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.offsetWidth
        canvas.height = parent.offsetHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create gradient animation
    let gradientAngle = 0
    const colors = [
      { r: 59, g: 130, b: 246 }, // blue-500
      { r: 139, g: 92, b: 246 }, // purple-500
      { r: 236, g: 72, b: 153 }, // pink-500
      { r: 14, g: 165, b: 233 }, // sky-500
    ]

    const animate = () => {
      if (!ctx) return

      gradientAngle = (gradientAngle + 0.2) % 360
      const angleRad = (gradientAngle * Math.PI) / 180

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = Math.max(canvas.width, canvas.height)

      const x1 = centerX + Math.cos(angleRad) * radius
      const y1 = centerY + Math.sin(angleRad) * radius
      const x2 = centerX + Math.cos(angleRad + Math.PI) * radius
      const y2 = centerY + Math.sin(angleRad + Math.PI) * radius

      const gradient = ctx.createLinearGradient(x1, y1, x2, y2)

      colors.forEach((color, index) => {
        const offset = index / (colors.length - 1)
        gradient.addColorStop(offset, `rgba(${color.r}, ${color.g}, ${color.b}, 0.8)`)
      })

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10" />
}
