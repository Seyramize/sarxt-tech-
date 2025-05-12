"use server"

import { z } from "zod"

// Define the schema for consultation scheduling
const ConsultationSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  date: z.string().min(1, { message: "Please select a date" }),
  time: z.string().min(1, { message: "Please select a time" }),
  message: z.string().optional(),
  service: z.string().optional(),
})

export type ConsultationFormData = z.infer<typeof ConsultationSchema>

export async function scheduleConsultation(formData: ConsultationFormData) {
  try {
    // Validate the form data
    const validatedData = ConsultationSchema.parse(formData)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In a real application, you would:
    // 1. Save the consultation request to your database
    // 2. Send notification emails to the team and confirmation to the client
    // 3. Potentially integrate with a calendar system like Google Calendar

    return {
      success: true,
      message: "Your consultation has been scheduled successfully. We'll contact you shortly to confirm.",
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation failed. Please check your information.",
        errors: error.errors,
      }
    }

    return {
      success: false,
      message: "Failed to schedule consultation. Please try again later.",
    }
  }
}
