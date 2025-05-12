"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { submitContactForm } from "@/actions/contact-form"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formErrors, setFormErrors] = useState<Record<string, string[]>>({})

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setFormErrors({})

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
          variant: "default",
        })
        // Reset the form
        const form = document.getElementById("contactForm") as HTMLFormElement
        form.reset()
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        })

        if (result.errors) {
          setFormErrors(result.errors)
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Get in Touch</h2>

        <form id="contactForm" action={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={`w-full px-4 py-2 border ${formErrors.name ? "border-red-500" : "border-gray-300 dark:border-gray-600"} rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white`}
                placeholder="John Doe"
              />
              {formErrors.name && <p className="mt-1 text-sm text-red-500">{formErrors.name[0]}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={`w-full px-4 py-2 border ${formErrors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"} rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white`}
                placeholder="john@example.com"
              />
              {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email[0]}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Your Company"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className={`w-full px-4 py-2 border ${formErrors.message ? "border-red-500" : "border-gray-300 dark:border-gray-600"} rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white`}
              placeholder="Tell us about your project or inquiry..."
            ></textarea>
            {formErrors.message && <p className="mt-1 text-sm text-red-500">{formErrors.message[0]}</p>}
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 px-4 rounded-lg hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  )
}
