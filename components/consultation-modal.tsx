"use client"

import type React from "react"

import { useState } from "react"
import { X, Calendar, Clock, User, Mail, Phone, MessageSquare, Briefcase } from "lucide-react"
import { CustomButton } from "@/components/custom-button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { scheduleConsultation, type ConsultationFormData } from "@/actions/schedule-consultation"
import { motion, AnimatePresence } from "framer-motion"

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
  defaultService?: string
}

export default function ConsultationModal({ isOpen, onClose, defaultService = "" }: ConsultationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
    service: defaultService,
  })
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)
  const [step, setStep] = useState(1)
  const totalSteps = 3

  if (!isOpen) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setResult(null)

    try {
      const response = await scheduleConsultation(formData)
      setResult(response)

      if (response.success) {
        // Reset form if successful
        setTimeout(() => {
          onClose()
        }, 3000)
      }
    } catch (error) {
      setResult({
        success: false,
        message: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Generate available time slots
  const generateTimeSlots = () => {
    const slots = []
    for (let hour = 9; hour <= 17; hour++) {
      const hourFormatted = hour > 12 ? hour - 12 : hour
      const amPm = hour >= 12 ? "PM" : "AM"
      slots.push(`${hourFormatted}:00 ${amPm}`)
      if (hour !== 17) {
        slots.push(`${hourFormatted}:30 ${amPm}`)
      }
    }
    return slots
  }

  const timeSlots = generateTimeSlots()

  // Get today's date in YYYY-MM-DD format for min date attribute
  const today = new Date().toISOString().split("T")[0]

  // Calculate if a step is valid to proceed
  const isStepValid = () => {
    if (step === 1) {
      return formData.name && formData.email
    } else if (step === 2) {
      return formData.date && formData.time
    }
    return true
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
      >
        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>

        <div className="p-6 pt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Schedule a Consultation</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {result && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 mb-6 rounded-lg ${
                result.success
                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                  : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
              }`}
            >
              {result.message}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-3">
                      <User className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Your Information</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Tell us a bit about yourself</p>
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-4 w-4 text-gray-400" />
                      </div>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="pl-10 w-full"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Email *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-4 w-4 text-gray-400" />
                      </div>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="pl-10 w-full"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number (Optional)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-4 w-4 text-gray-400" />
                      </div>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className="pl-10 w-full"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-3">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Schedule</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Select your preferred date and time</p>
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-4 w-4 text-gray-400" />
                      </div>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="pl-10 w-full"
                        min={today}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Preferred Time *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                        <Clock className="h-4 w-4 text-gray-400" />
                      </div>
                      <Select
                        value={formData.time}
                        onValueChange={(value) => handleSelectChange("time", value)}
                        disabled={isSubmitting}
                      >
                        <SelectTrigger className="w-full pl-10">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-3">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Project Details</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Tell us about your project</p>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Service You're Interested In
                    </label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => handleSelectChange("service", value)}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="mobile-applications">Mobile Applications</SelectItem>
                        <SelectItem value="internet-solutions">Internet Solutions</SelectItem>
                        <SelectItem value="software-engineering">Software Engineering</SelectItem>
                        <SelectItem value="network-engineering">Network Engineering</SelectItem>
                        <SelectItem value="hardware-solutions">Hardware Solutions</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                        <MessageSquare className="h-4 w-4 text-gray-400" />
                      </div>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or specific needs..."
                        className="pl-10 w-full min-h-[120px]"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      By scheduling a consultation, you agree to our{" "}
                      <a href="/terms-of-service" className="text-blue-600 hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="/privacy-policy" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-between pt-4">
              {step > 1 ? (
                <CustomButton
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={isSubmitting}
                  className="px-4"
                >
                  Back
                </CustomButton>
              ) : (
                <div></div>
              )}

              {step < totalSteps ? (
                <CustomButton
                  type="button"
                  onClick={nextStep}
                  disabled={isSubmitting || !isStepValid()}
                  className="px-4"
                  animationType="shine"
                >
                  Next
                </CustomButton>
              ) : (
                <CustomButton
                  type="submit"
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                  className="px-4"
                  animationType="shine"
                >
                  Schedule Now
                </CustomButton>
              )}
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  )
}
