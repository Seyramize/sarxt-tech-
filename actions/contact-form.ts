"use server"

import nodemailer from "nodemailer"
import { z } from "zod"

// Define validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = (formData.get("phone") as string) || "Not provided"
    const company = (formData.get("company") as string) || "Not provided"
    const message = formData.get("message") as string

    // Validate form data
    const result = contactFormSchema.safeParse({
      name,
      email,
      phone,
      company,
      message,
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
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Company: ${company}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return {
      success: true,
      message: "Your message has been sent successfully. We'll get back to you soon!",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "There was an error sending your message. Please try again later.",
    }
  }
}
