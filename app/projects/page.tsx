"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import PageHeader from "@/components/page-header"
import { CustomButton } from "@/components/custom-button"
import ScheduleButton from "@/components/schedule-button"

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const projects = [
    {
      id: "enterprise-ecommerce",
      title: "Enterprise E-Commerce Platform",
      category: "Web Development",
      description:
        "A comprehensive online shopping platform with integrated payment systems and inventory management for a leading retail chain.",
      image: "/ecommerce-dashboard.png",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
    },
    {
      id: "healthcare-management",
      title: "Healthcare Management System",
      category: "Software Engineering",
      description:
        "Custom healthcare management system for a network of hospitals, streamlining patient care and administrative processes.",
      image: "/healthcare-management-interface.png",
      technologies: ["Angular", ".NET Core", "SQL Server", "Azure"],
    },
    {
      id: "logistics-mobile-app",
      title: "Logistics Mobile Application",
      category: "Mobile Applications",
      description:
        "A mobile application for a logistics company that enables real-time tracking of shipments and fleet management.",
      image: "/placeholder.svg?key=67ael",
      technologies: ["React Native", "Firebase", "Google Maps API"],
    },
    {
      id: "financial-dashboard",
      title: "Financial Analytics Dashboard",
      category: "Software Engineering",
      description:
        "A comprehensive financial analytics dashboard for a financial services firm, providing real-time insights and reporting.",
      image: "/professional-financial-dashboard.png",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
    },
    {
      id: "manufacturing-erp",
      title: "Manufacturing ERP System",
      category: "Software Engineering",
      description:
        "A custom ERP system for a manufacturing company, integrating production, inventory, and sales processes.",
      image: "/manufacturing-erp-interface.png",
      technologies: ["Java", "Spring Boot", "Oracle", "Kubernetes"],
    },
    {
      id: "real-estate-platform",
      title: "Real Estate Platform",
      category: "Web Development",
      description:
        "A comprehensive real estate platform with property listings, virtual tours, and agent management for a real estate agency.",
      image: "/real-estate-website.png",
      technologies: ["Next.js", "GraphQL", "MongoDB", "AWS"],
    },
  ]

  const categories = ["All", "Web Development", "Mobile Applications", "Software Engineering", "Network Engineering"]

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  return (
    <main>
      <PageHeader
        title="Our Projects"
        description="Explore our portfolio of successful projects delivered to clients across industries."
      />

      {/* Projects Filter */}
      <section className="py-8 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <CustomButton
                key={index}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </CustomButton>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="border-0 shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Contact us today to discuss how we can help you achieve your business goals with our technology solutions.
          </p>
          <ScheduleButton
            text="Get a Free Consultation"
            variant="white"
            size="lg"
            animationType="shine"
            className="font-medium"
          />
        </div>
      </section>
    </main>
  )
}
