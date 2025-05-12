import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle } from "lucide-react"
import PageHeader from "@/components/page-header"
import ScheduleButton from "@/components/schedule-button"

interface ProjectPageProps {
  params: {
    projectId: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const projects = [
    {
      id: "enterprise-ecommerce",
      title: "Enterprise E-Commerce Platform",
      client: "RetailPlus Inc.",
      category: "Web Development",
      description:
        "A comprehensive online shopping platform with integrated payment systems and inventory management for a leading retail chain.",
      challenge:
        "RetailPlus Inc., a leading retail chain with over 50 physical stores, was struggling to establish a strong online presence. Their existing e-commerce platform was outdated, difficult to manage, and provided a poor user experience, resulting in low conversion rates and customer satisfaction.",
      solution:
        "We developed a custom enterprise e-commerce platform that integrated seamlessly with their existing inventory and POS systems. The solution included a user-friendly frontend, robust admin dashboard, advanced search and filtering capabilities, personalized product recommendations, and a streamlined checkout process.",
      results: [
        "200% increase in online sales within the first six months",
        "35% improvement in conversion rate",
        "50% reduction in cart abandonment",
        "Seamless inventory management across online and physical stores",
        "Improved customer satisfaction and loyalty",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Redis", "AWS", "Stripe API", "Elasticsearch"],
      image: "/ecommerce-dashboard-analytics.png",
      gallery: [
        "/ecommerce-product-page.png",
        "/ecommerce-checkout.png",
        "/ecommerce-admin-dashboard.png",
        "/ecommerce-mobile-design.png",
      ],
      testimonial: {
        quote:
          "Sarxt Tech delivered an e-commerce platform that exceeded our expectations. The seamless integration with our existing systems and the intuitive user experience have significantly improved our online sales and customer satisfaction.",
        author: "Jennifer Lee",
        position: "CTO, RetailPlus Inc.",
      },
    },
    {
      id: "healthcare-management",
      title: "Healthcare Management System",
      client: "MediCare Hospital Network",
      category: "Software Engineering",
      description:
        "Custom healthcare management system for a network of hospitals, streamlining patient care and administrative processes.",
      challenge:
        "MediCare Hospital Network, with 5 hospitals and 15 clinics, was struggling with inefficient patient management, fragmented medical records, and complex administrative processes. This resulted in longer wait times, increased administrative costs, and potential risks to patient care quality.",
      solution:
        "We developed a comprehensive healthcare management system that centralized patient records, automated administrative tasks, and provided real-time access to critical information. The system included modules for patient registration, appointment scheduling, electronic medical records, billing, inventory management, and reporting.",
      results: [
        "30% reduction in administrative overhead",
        "40% decrease in patient wait times",
        "Improved accuracy of medical records and billing",
        "Enhanced coordination between different departments and facilities",
        "Better data-driven decision making through comprehensive reporting",
      ],
      technologies: ["Angular", ".NET Core", "SQL Server", "Azure", "FHIR API", "HL7 Integration"],
      image: "/placeholder.svg?height=600&width=1200&query=professional healthcare management system dashboard",
      gallery: [
        "/placeholder.svg?height=400&width=600&query=professional healthcare patient records interface",
        "/placeholder.svg?height=400&width=600&query=professional healthcare appointment scheduling system",
        "/placeholder.svg?height=400&width=600&query=professional healthcare billing module",
        "/placeholder.svg?height=400&width=600&query=professional healthcare reporting dashboard",
      ],
      testimonial: {
        quote:
          "The healthcare management system developed by Sarxt Tech has transformed our operations. We've seen significant improvements in efficiency, patient care, and staff satisfaction. The system is intuitive, reliable, and has become an essential part of our daily operations.",
        author: "Dr. Michael Chen",
        position: "CEO, MediCare Hospital Network",
      },
    },
    {
      id: "logistics-mobile-app",
      title: "Logistics Mobile Application",
      client: "FastTrack Logistics",
      category: "Mobile Applications",
      description:
        "A mobile application for a logistics company that enables real-time tracking of shipments and fleet management.",
      challenge:
        "FastTrack Logistics was facing challenges with shipment tracking, driver management, and customer communication. Their manual processes were inefficient, prone to errors, and resulted in customer dissatisfaction due to lack of visibility into shipment status.",
      solution:
        "We developed a comprehensive mobile application with separate interfaces for drivers, administrators, and customers. The app included real-time GPS tracking, automated notifications, digital proof of delivery, route optimization, and analytics dashboards.",
      results: [
        "25% improvement in delivery efficiency",
        "60% reduction in customer service calls about shipment status",
        "Improved driver productivity and satisfaction",
        "Enhanced visibility into operations for management",
        "Significant fuel savings through optimized routing",
      ],
      technologies: ["React Native", "Firebase", "Google Maps API", "Node.js", "MongoDB", "AWS"],
      image: "/placeholder.svg?height=600&width=1200&query=professional logistics mobile app tracking interface",
      gallery: [
        "/placeholder.svg?height=400&width=600&query=professional logistics app driver interface",
        "/placeholder.svg?height=400&width=600&query=professional logistics app customer tracking view",
        "/placeholder.svg?height=400&width=600&query=professional logistics app route optimization",
        "/placeholder.svg?height=400&width=600&query=professional logistics app analytics dashboard",
      ],
      testimonial: {
        quote:
          "The mobile application developed by Sarxt Tech has revolutionized our logistics operations. The real-time tracking and automated notifications have significantly improved our efficiency and customer satisfaction. It's been a game-changer for our business.",
        author: "Robert Johnson",
        position: "Operations Director, FastTrack Logistics",
      },
    },
    {
      id: "financial-dashboard",
      title: "Financial Analytics Dashboard",
      client: "Global Financial Services",
      category: "Software Engineering",
      description:
        "A comprehensive financial analytics dashboard for a financial services firm, providing real-time insights and reporting.",
      challenge:
        "Global Financial Services was struggling to consolidate and analyze data from multiple sources, resulting in delayed decision-making and inefficient reporting processes. They needed a centralized solution to visualize key financial metrics and generate insights in real-time.",
      solution:
        "We developed a sophisticated financial analytics dashboard that integrated data from various sources, provided interactive visualizations, and enabled customizable reporting. The solution included real-time data processing, predictive analytics, and role-based access control.",
      results: [
        "70% reduction in time spent on report generation",
        "Improved decision-making through real-time insights",
        "Enhanced data accuracy and consistency",
        "Increased ability to identify trends and opportunities",
        "Better compliance with regulatory reporting requirements",
      ],
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker", "Kubernetes", "Tableau API", "Machine Learning"],
      image: "/placeholder.svg?height=600&width=1200&query=professional financial dashboard with multiple charts",
      gallery: [
        "/placeholder.svg?height=400&width=600&query=professional financial performance metrics dashboard",
        "/placeholder.svg?height=400&width=600&query=professional financial risk analysis visualization",
        "/placeholder.svg?height=400&width=600&query=professional financial reporting interface",
        "/placeholder.svg?height=400&width=600&query=professional financial predictive analytics",
      ],
      testimonial: {
        quote:
          "The financial analytics dashboard has transformed how we analyze and report on our financial data. The real-time insights and interactive visualizations have significantly improved our decision-making process and operational efficiency.",
        author: "Sarah Williams",
        position: "CFO, Global Financial Services",
      },
    },
    {
      id: "manufacturing-erp",
      title: "Manufacturing ERP System",
      client: "IndustrialTech Manufacturing",
      category: "Software Engineering",
      description:
        "A custom ERP system for a manufacturing company, integrating production, inventory, and sales processes.",
      challenge:
        "IndustrialTech Manufacturing was operating with disparate systems for production planning, inventory management, and sales, leading to inefficiencies, data inconsistencies, and challenges in meeting customer demands. They needed an integrated solution to streamline their operations.",
      solution:
        "We developed a comprehensive ERP system tailored to their manufacturing processes. The system integrated production planning, inventory management, supply chain, quality control, sales, and financial modules into a unified platform with real-time data synchronization.",
      results: [
        "40% improvement in production efficiency",
        "30% reduction in inventory costs",
        "Improved on-time delivery performance",
        "Enhanced quality control and reduced defects",
        "Better financial visibility and reporting",
      ],
      technologies: ["Java", "Spring Boot", "Oracle", "Kubernetes", "Angular", "RabbitMQ", "Elasticsearch"],
      image: "/placeholder.svg?height=600&width=1200&query=professional manufacturing ERP system production dashboard",
      gallery: [
        "/placeholder.svg?height=400&width=600&query=professional manufacturing ERP inventory management",
        "/placeholder.svg?height=400&width=600&query=professional manufacturing ERP production planning",
        "/placeholder.svg?height=400&width=600&query=professional manufacturing ERP quality control",
        "/placeholder.svg?height=400&width=600&query=professional manufacturing ERP sales dashboard",
      ],
      testimonial: {
        quote:
          "The ERP system developed by Sarxt Tech has transformed our manufacturing operations. The integration of all our processes into a single platform has significantly improved our efficiency, reduced costs, and enhanced our ability to meet customer demands.",
        author: "David Thompson",
        position: "COO, IndustrialTech Manufacturing",
      },
    },
    {
      id: "real-estate-platform",
      title: "Real Estate Platform",
      client: "Premier Properties",
      category: "Web Development",
      description:
        "A comprehensive real estate platform with property listings, virtual tours, and agent management for a real estate agency.",
      challenge:
        "Premier Properties was struggling with an outdated website that didn't effectively showcase their properties or support their agents. They needed a modern platform to improve their online presence, streamline property management, and enhance the customer experience.",
      solution:
        "We developed a feature-rich real estate platform with advanced property search, virtual tours, interactive maps, agent profiles, and a robust admin dashboard. The platform also included CRM functionality, automated marketing tools, and analytics to track performance.",
      results: [
        "150% increase in website traffic",
        "45% improvement in lead generation",
        "Enhanced property visualization through virtual tours",
        "Streamlined property management for agents",
        "Improved customer engagement and satisfaction",
      ],
      technologies: ["Next.js", "GraphQL", "MongoDB", "AWS", "Three.js", "Mapbox API", "Sendgrid"],
      image: "/placeholder.svg?height=600&width=1200&query=professional real estate website with property search",
      gallery: [
        "/placeholder.svg?height=400&width=600&query=professional real estate property detail page",
        "/placeholder.svg?height=400&width=600&query=professional real estate virtual tour interface",
        "/placeholder.svg?height=400&width=600&query=professional real estate agent dashboard",
        "/placeholder.svg?height=400&width=600&query=professional real estate map search feature",
      ],
      testimonial: {
        quote:
          "The real estate platform developed by Sarxt Tech has exceeded our expectations. The modern design, intuitive interface, and powerful features have significantly improved our online presence and operational efficiency. Our agents love the platform, and our clients appreciate the enhanced property viewing experience.",
        author: "Emily Rodriguez",
        position: "Marketing Director, Premier Properties",
      },
    },
  ]

  const project = projects.find((p) => p.id === params.projectId)

  if (!project) {
    notFound()
  }

  return (
    <main>
      <PageHeader title={project.title} description={`Case study: ${project.description}`} />

      {/* Project Overview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-700">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>
          </div>

          <div className="relative w-full h-[500px] mb-12">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Client</h3>
                    <p className="text-gray-600 dark:text-gray-300">{project.client}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Industry</h3>
                    <p className="text-gray-600 dark:text-gray-300">{project.category}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">The Challenge</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">{project.challenge}</p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Solution</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">{project.solution}</p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Results</h2>
                <div className="space-y-4 mb-8">
                  {project.results.map((result, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                      <p className="text-gray-700 dark:text-gray-300">{result}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="relative h-64 w-full">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} - Image ${index + 1}`}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg sticky top-24">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Testimonial</h3>
                  <div className="mb-4">
                    <svg className="h-8 w-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic mb-4">{project.testimonial.quote}</p>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">{project.testimonial.author}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{project.testimonial.position}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Interested in a Similar Solution?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Contact us today to discuss how we can help you achieve similar results for your business.
                  </p>
                  <ScheduleButton fullWidth className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-4">
                    Request a Consultation
                  </ScheduleButton>
                </div>

                <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Related Projects</h3>
                  <div className="space-y-4">
                    {projects
                      .filter((p) => p.id !== project.id && p.category === project.category)
                      .slice(0, 2)
                      .map((relatedProject, index) => (
                        <div key={index} className="flex items-start">
                          <div className="relative h-16 w-16 mr-4 flex-shrink-0">
                            <Image
                              src={relatedProject.image || "/placeholder.svg"}
                              alt={relatedProject.title}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                          <div>
                            <Link
                              href={`/projects/${relatedProject.id}`}
                              className="font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500"
                            >
                              {relatedProject.title}
                            </Link>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{relatedProject.category}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                  <Button variant="outline" className="w-full border-gray-300 dark:border-gray-700 mt-4">
                    <Link href="/projects">View Our Portfolio</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Contact us today to discuss how we can help you achieve similar results for your business.
          </p>
          <ScheduleButton variant="white" size="lg" animationType="shine">
            Get a Free Consultation
          </ScheduleButton>
        </div>
      </section>
    </main>
  )
}
