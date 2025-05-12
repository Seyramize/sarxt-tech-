import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  image: string
  title: string
  category: string
  description: string
}

export default function ProjectCard({ image, title, category, description }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <div className="inline-block px-3 py-1 mb-4 text-xs text-white bg-cyan-600 rounded-full">{category}</div>
        <h3 className="text-xl font-bold mb-2 text-slate-800">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </CardContent>
    </Card>
  )
}
