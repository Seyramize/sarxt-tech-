import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  name: string
  position: string
  content: string
  avatar: string
}

export default function TestimonialCard({ name, position, content, avatar }: TestimonialCardProps) {
  return (
    <Card className="bg-white text-slate-800">
      <CardContent className="p-6">
        <div className="mb-4">
          <svg className="h-8 w-8 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="mb-4">{content}</p>
        <div className="flex items-center">
          <div className="mr-4">
            <Image src={avatar || "/placeholder.svg"} alt={name} width={48} height={48} className="rounded-full" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900">{name}</h4>
            <p className="text-slate-600 text-sm">{position}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
