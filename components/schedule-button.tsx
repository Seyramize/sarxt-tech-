"use client"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { CustomButton, type CustomButtonProps } from "@/components/custom-button"

interface ScheduleButtonProps extends Omit<CustomButtonProps, "onClick"> {
  text?: string
  useLink?: boolean
}

export default function ScheduleButton({
  text = "Schedule a Consultation",
  variant = "default",
  size = "default",
  animationType,
  className,
  useLink = true,
  ...props
}: ScheduleButtonProps) {
  if (useLink) {
    return (
      <CustomButton
        asChild
        variant={variant}
        size={size}
        animationType={animationType}
        className={className}
        {...props}
      >
        <Link href="/schedule-consultation" className="inline-flex items-center">
          <Calendar className="mr-2 h-4 w-4" />
          {text}
        </Link>
      </CustomButton>
    )
  }

  return (
    <CustomButton variant={variant} size={size} animationType={animationType} className={className} {...props}>
      <Calendar className="mr-2 h-4 w-4" />
      {text}
    </CustomButton>
  )
}
