import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import ScheduleConsultation from "@/components/schedule-consultation"

export const metadata: Metadata = {
  title: "Schedule a Consultation | Sarxt Tech",
  description:
    "Book a free consultation with our experts to discuss your project needs and how we can help you achieve your technology goals.",
}

export default function ScheduleConsultationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-20 pb-20">
      <PageHeader
        title="Schedule a Consultation"
        description="Book a free consultation with our experts to discuss your project needs and how we can help you achieve your technology goals."
        className="mb-12"
      />

      <div className="container mx-auto px-4">
        <ScheduleConsultation />
      </div>
    </div>
  )
}
