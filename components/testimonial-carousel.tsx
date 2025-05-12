"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import GlassCard from "@/components/glass-card"
import { Button } from "@/components/ui/button"

interface Testimonial {
  name: string
  position: string
  content: string
  avatar: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"left" | "right" | null>(null)

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 8000)

    return () => clearInterval(interval)
  }, [currentIndex])

  const goToPrevious = () => {
    if (isAnimating) return
    setDirection("left")
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToNext = () => {
    if (isAnimating) return
    setDirection("right")
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return
    setDirection(index > currentIndex ? "right" : "left")
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 overflow-hidden">
      {/* Carousel container */}
      <div className="relative h-full">
        <div
          className={`transition-transform duration-500 ease-in-out flex ${
            isAnimating ? (direction === "right" ? "-translate-x-[100%]" : "translate-x-[100%]") : "translate-x-0"
          }`}
        >
          {/* Previous slide (for animation) */}
          <div className="min-w-full px-4">
            <GlassCard className="p-6 md:p-8 h-full">
              <div className="mb-4">
                <svg className="h-8 w-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-white mb-6 text-lg">
                {testimonials[currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1].content}
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <Image
                    src={
                      testimonials[currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1].avatar ||
                      "/placeholder.svg"
                    }
                    alt={testimonials[currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1].name}
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-blue-400"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">
                    {testimonials[currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1].name}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {testimonials[currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1].position}
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Current slide */}
          <div className="min-w-full px-4">
            <GlassCard className="p-6 md:p-8 h-full">
              <div className="mb-4">
                <svg className="h-8 w-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-white mb-6 text-lg">{testimonials[currentIndex].content}</p>
              <div className="flex items-center">
                <div className="mr-4">
                  <Image
                    src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-blue-400"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-300 text-sm">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Next slide (for animation) */}
          <div className="min-w-full px-4">
            <GlassCard className="p-6 md:p-8 h-full">
              <div className="mb-4">
                <svg className="h-8 w-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-white mb-6 text-lg">
                {testimonials[currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1].content}
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <Image
                    src={
                      testimonials[currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1].avatar ||
                      "/placeholder.svg"
                    }
                    alt={testimonials[currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1].name}
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-blue-400"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">
                    {testimonials[currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1].name}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {testimonials[currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1].position}
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/20 backdrop-blur-sm border-white/10 text-white hover:bg-black/30 hover:text-white"
        onClick={goToPrevious}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/20 backdrop-blur-sm border-white/10 text-white hover:bg-black/30 hover:text-white"
        onClick={goToNext}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-blue-400 w-6" : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
