"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  CalendarIcon,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  Briefcase,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Globe,
  Smartphone,
} from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { scheduleConsultation, type ConsultationFormData } from "@/actions/schedule-consultation"
import Link from "next/link"

interface ScheduleConsultationProps {
  defaultService?: string
}

export default function ScheduleConsultation({ defaultService = "" }: ScheduleConsultationProps) {
  const [step, setStep] = useState(1)
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
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [availableTimes, setAvailableTimes] = useState<string[]>([])

  // Generate available time slots when date changes
  useEffect(() => {
    if (date) {
      // In a real app, you would fetch available times from your API
      // For now, we'll generate some sample times
      const times = []
      for (let hour = 9; hour <= 17; hour++) {
        const hourFormatted = hour > 12 ? hour - 12 : hour
        const amPm = hour >= 12 ? "PM" : "AM"
        times.push(`${hourFormatted}:00 ${amPm}`)
        if (hour !== 17) {
          times.push(`${hourFormatted}:30 ${amPm}`)
        }
      }
      setAvailableTimes(times)
      setFormData((prev) => ({ ...prev, date: format(date, "yyyy-MM-dd") }))
    }
  }, [date])

  // Update form data when time is selected
  useEffect(() => {
    if (selectedTime) {
      setFormData((prev) => ({ ...prev, time: selectedTime }))
    }
  }, [selectedTime])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
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
          setStep(4) // Success step
        }, 500)
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

  // Check if current step is valid to proceed
  const isStepValid = () => {
    if (step === 1) {
      return formData.name && formData.email
    } else if (step === 2) {
      return formData.date && formData.time
    }
    return true
  }

  // Services list
  const services = [
    { id: "web-development", name: "Web Development", icon: <Globe className="h-5 w-5" /> },
    { id: "mobile-applications", name: "Mobile Applications", icon: <Smartphone className="h-5 w-5" /> },
    { id: "software-engineering", name: "Software Engineering", icon: <Briefcase className="h-5 w-5" /> },
    { id: "internet-solutions", name: "Internet Solutions", icon: <Globe className="h-5 w-5" /> },
    { id: "network-engineering", name: "Network Engineering", icon: <Briefcase className="h-5 w-5" /> },
    { id: "other", name: "Other Services", icon: <Briefcase className="h-5 w-5" /> },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress bar */}
      {step < 4 && (
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Step {step} of 3</span>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {step === 1 ? "Your Information" : step === 2 ? "Schedule" : "Project Details"}
            </span>
          </div>
          <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 ease-in-out"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Form content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-8"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
                  <User className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Your Information</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Tell us a bit about yourself so we can personalize your consultation.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base">
                    Full Name
                  </Label>
                  <div className="mt-1.5 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-base">
                    Email Address
                  </Label>
                  <div className="mt-1.5 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base">
                    Phone Number <span className="text-gray-500 dark:text-gray-400 text-sm">(Optional)</span>
                  </Label>
                  <div className="mt-1.5 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Continue <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-8"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
                  <CalendarIcon className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Choose Your Date & Time</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Select a convenient date and time for your consultation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Calendar picker */}
                <div>
                  <Label className="text-base mb-4 block">Select a Date</Label>
                  <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) =>
                        date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 2))
                      }
                      className="rounded-xl"
                    />
                  </div>
                </div>

                {/* Time slots */}
                <div>
                  <Label className="text-base mb-4 block">Select a Time</Label>
                  {date ? (
                    <div className="grid grid-cols-2 gap-2 h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                      {availableTimes.map((time) => (
                        <Button
                          key={time}
                          type="button"
                          variant={selectedTime === time ? "default" : "outline"}
                          className={cn(
                            "justify-start",
                            selectedTime === time && "bg-gradient-to-r from-blue-600 to-purple-600 text-white",
                          )}
                          onClick={() => setSelectedTime(time)}
                        >
                          <Clock className="mr-2 h-4 w-4" />
                          {time}
                        </Button>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-[350px] border border-dashed border-gray-300 dark:border-gray-700 rounded-xl">
                      <p className="text-gray-500 dark:text-gray-400">Please select a date first</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <Button type="button" variant="outline" onClick={prevStep}>
                  <ChevronLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Continue <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-8"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
                  <Briefcase className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Project Details</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Tell us about your project and what you're looking to achieve.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label className="text-base mb-4 block">Which service are you interested in?</Label>
                  <RadioGroup
                    value={formData.service || ""}
                    onValueChange={handleServiceChange}
                    className="grid grid-cols-1 md:grid-cols-2 gap-3"
                  >
                    {services.map((service) => (
                      <div key={service.id}>
                        <RadioGroupItem value={service.id} id={service.id} className="peer sr-only" />
                        <Label
                          htmlFor={service.id}
                          className="flex items-center justify-between px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:border-blue-500 dark:hover:border-blue-500 peer-checked:border-blue-500 dark:peer-checked:border-blue-500 peer-checked:bg-blue-50 dark:peer-checked:bg-blue-900/20 peer-checked:text-blue-600 dark:peer-checked:text-blue-400 transition-all"
                        >
                          <div className="flex items-center">
                            <div className="mr-3 text-blue-600 dark:text-blue-400">{service.icon}</div>
                            <span>{service.name}</span>
                          </div>
                          <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center peer-checked:border-blue-500 dark:peer-checked:border-blue-500 peer-checked:bg-blue-500 dark:peer-checked:bg-blue-500">
                            <div className="w-2.5 h-2.5 bg-white rounded-full hidden peer-checked:block"></div>
                          </div>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="message" className="text-base">
                    Project Description
                  </Label>
                  <div className="mt-1.5 relative">
                    <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project goals, requirements, and any specific challenges you're facing..."
                      className="pl-10 min-h-[150px]"
                    />
                  </div>
                </div>

                <div className="pt-4 text-sm text-gray-500 dark:text-gray-400">
                  By scheduling a consultation, you agree to our{" "}
                  <a href="/terms-of-service" className="text-blue-600 hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="/privacy-policy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </div>

                {result && !result.success && (
                  <div className="p-4 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 rounded-lg">
                    {result.message}
                  </div>
                )}

                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={prevStep}>
                    <ChevronLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                        Processing...
                      </>
                    ) : (
                      <>Schedule Consultation</>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-6">
                <CheckCircle className="h-10 w-10" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Consultation Scheduled!</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                Thank you for scheduling a consultation with Sarxt Tech. We've sent a confirmation email to{" "}
                {formData.email} with all the details.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 mb-8 max-w-md mx-auto">
                <div className="flex justify-between mb-4">
                  <span className="text-gray-500 dark:text-gray-400">Date:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {date ? format(date, "MMMM d, yyyy") : ""}
                  </span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-500 dark:text-gray-400">Time:</span>
                  <span className="font-medium text-gray-900 dark:text-white">{selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Service:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {services.find((s) => s.id === formData.service)?.name || "Consultation"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline">
                  <Link href="/">Return to Homepage</Link>
                </Button>
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
