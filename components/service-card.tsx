import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 text-cyan-600">{icon}</div>
          <h3 className="text-xl font-bold mb-4 text-slate-800">{title}</h3>
          <p className="text-slate-600">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
