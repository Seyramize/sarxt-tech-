"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { CustomButton } from "@/components/custom-button"
import { motion, AnimatePresence } from "framer-motion"

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookie-consent")
    if (!hasConsented) {
      // Show the consent banner after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true")
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "false")
    setShowConsent(false)
  }

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white dark:bg-gray-800 shadow-lg border-t border-gray-200 dark:border-gray-700"
        >
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">We use cookies</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
                  traffic. By clicking "Accept All", you consent to our use of cookies.{" "}
                  <Link href="/cookie-policy" className="text-blue-600 hover:underline">
                    Read our Cookie Policy
                  </Link>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-2 md:mt-0">
                <CustomButton variant="outline" size="sm" onClick={declineCookies} className="whitespace-nowrap">
                  Decline
                </CustomButton>
                <CustomButton
                  variant="default"
                  size="sm"
                  onClick={acceptCookies}
                  animationType="shine"
                  className="whitespace-nowrap"
                >
                  Accept All
                </CustomButton>
              </div>
              <button
                onClick={() => setShowConsent(false)}
                className="absolute top-4 right-4 md:static text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
