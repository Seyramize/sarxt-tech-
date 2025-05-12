"use server"

import nodemailer from "nodemailer"
import { z } from "zod"

// Define validation schema
const quoteFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.string().min(1, { message: "Please select a project type" }),
  budget: z.string().min(1, { message: "Please select a budget range" }),
  timeline: z.string().min(1, { message: "Please select a timeline" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
})

export type QuoteFormData = z.infer<typeof quoteFormSchema>

export async function submitQuoteRequest(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = (formData.get("phone") as string) || "Not provided"
    const company = (formData.get("company") as string) || "Not provided"
    const projectType = formData.get("projectType") as string
    const budget = formData.get("budget") as string
    const timeline = formData.get("timeline") as string
    const description = formData.get("description") as string

    // Validate form data
    const result = quoteFormSchema.safeParse({
      name,
      email,
      phone,
      company,
      projectType,
      budget,
      timeline,
      description,
    })

    if (!result.success) {
      return {
        success: false,
        message: "Validation failed",
        errors: result.error.flatten().fieldErrors,
      }
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `New Quote Request from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Company: ${company}
        
        Project Details:
        Type: ${projectType}
        Budget: ${budget}
        Timeline: ${timeline}
        
        Description:
        ${description}
      `,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        
        <h3>Project Details:</h3>
        <p><strong>Type:</strong> ${projectType}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        
        <h3>Description:</h3>
        <p>${description.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return {
      success: true,
      message:
        "Your quote request has been submitted successfully. We'll get back to you soon with a detailed proposal!",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "There was an error submitting your quote request. Please try again later.",
    }
  }
}
