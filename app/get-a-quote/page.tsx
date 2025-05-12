"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import PageHeader from "@/components/page-header"
import { submitQuoteRequest } from "@/actions/submit-quote-request"
import { useToast } from "@/hooks/use-toast"

export default function GetAQuotePage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formErrors, setFormErrors] = useState<Record<string, string[]>>({})

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setFormErrors({})

    try {
      const result = await submitQuoteRequest(formData)

      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
          variant: "default",
        })
        // Reset the form
        const form = document.getElementById("quoteForm") as HTMLFormElement
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <PageHeader
        title="Get a Quote"
        description="Tell us about your project and we'll provide you with a detailed proposal and timeline."
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-8">
              <form id="quoteForm" action={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Contact Information</h3>

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
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
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
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
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
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
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
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6 space-y-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Project Details</h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        className={`w-full px-4 py-2 border ${formErrors.projectType ? "border-red-500" : "border-gray-300 dark:border-gray-600"} rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white`}
                      >
                        <option value="">Select Type</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="Enterprise Software">Enterprise Software</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Digital Transformation">Digital Transformation</option>
                        <option value="Other">Other</option>
                      </select>
                      {formErrors.projectType && (
                        <p className="mt-1 text-sm text-red-500">{formErrors.projectType[0]}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Budget Range *
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        required
                        className={`w-full px-4 py-2 border ${formErrors.budget ? "border-red-500" : "border-gray-300 dark:border-gray-600"} rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white`}
                      >
                        <option value="">Select Budget</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                        <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                        <option value="$100,000+">$100,000+</option>
                        <option value="Not Sure">Not Sure</option>
                      </select>
                      {formErrors.budget && <p className="mt-1 text-sm text-red-500">{formErrors.budget[0]}</p>}
                    </div>

                    <div>
                      <label
                        htmlFor="timeline"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Timeline *
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        required
                        className={`w-full px-4 py-2 border ${formErrors.timeline ? "border-red-500" : "border-gray-300 dark:border-gray-600"} rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white`}
                      >
                        <option value="">Select Timeline</option>
                        <option value="Less than 1 month">Less than 1 month</option>
                        <option value="1-3 months">1-3 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6+ months">6+ months</option>
                        <option value="Ongoing">Ongoing</option>
                        <option value="Not Sure">Not Sure</option>
                      </select>
                      {formErrors.timeline && <p className="mt-1 text-sm text-red-500">{formErrors.timeline[0]}</p>}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Project Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={6}
                      required
                      className={`w-full px-4 py-2 border ${formErrors.description ? "border-red-500" : "border-gray-300 dark:border-gray-600"} rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white`}
                      placeholder="Please describe your project, goals, and any specific requirements..."
                    ></textarea>
                    {formErrors.description && <p className="mt-1 text-sm text-red-500">{formErrors.description[0]}</p>}
                  </div>
                </div>

                <div className="pt-4">
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
                        Submitting...
                      </span>
                    ) : (
                      "Request a Quote"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              Need immediate assistance? Call us at <span className="font-semibold">+1 (555) 123-4567</span> or email{" "}
              <span className="font-semibold">contact@sarxttech.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
