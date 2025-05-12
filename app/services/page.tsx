import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function ServicesPage() {
  const services = [
    {
      id: "web-development",
      title: "Web Development",
      description:
        "Custom websites and web applications built with cutting-edge technologies for exceptional user experiences.",
      longDescription:
        "Our web development services include everything from responsive websites to complex web applications. We use modern frameworks and technologies to create fast, secure, and scalable web solutions that meet your business needs.",
      image: "/placeholder.svg?key=zsvx9",
      features: [
        "Responsive website design and development",
        "Custom web application development",
        "E-commerce solutions",
        "Content management systems",
        "Web portal development",
        "API development and integration",
      ],
    },
    {
      id: "mobile-applications",
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver seamless experiences across all devices.",
      longDescription:
        "We develop high-performance mobile applications for iOS and Android platforms. Our mobile solutions are designed to provide intuitive user experiences while leveraging the full capabilities of modern mobile devices.",
      image: "/mobile-app-development.png",
      features: [
        "iOS app development",
        "Android app development",
        "Cross-platform app development",
        "Mobile app UI/UX design",
        "App testing and quality assurance",
        "App store submission and optimization",
      ],
    },
    {
      id: "internet-solutions",
      title: "Internet Solutions",
      description:
        "Complete internet infrastructure solutions including hosting, domain management, and cloud services.",
      longDescription:
        "Our internet solutions provide the foundation for your online presence. From domain registration and hosting to cloud infrastructure and security, we ensure your digital assets are reliable, secure, and performant.",
      image: "/professional-server-room-data-center.png",
      features: [
        "Domain registration and management",
        "Web hosting solutions",
        "Cloud infrastructure setup and management",
        "Email hosting and management",
        "CDN implementation",
        "SSL certificate installation and management",
      ],
    },
    {
      id: "software-engineering",
      title: "Software Engineering",
      description: "Custom software development following industry best practices for reliability and scalability.",
      longDescription:
        "We design and develop custom software solutions that address your specific business challenges. Our software engineering team follows best practices to ensure that your software is reliable, maintainable, and scalable.",
      image: "/software-team-collaboration.png",
      features: [
        "Custom software development",
        "Legacy system modernization",
        "Software architecture design",
        "Database design and optimization",
        "Software integration services",
        "DevOps implementation",
      ],
    },
    {
      id: "network-engineering",
      title: "Network Engineering",
      description: "Design, implementation, and maintenance of secure and efficient network infrastructures.",
      longDescription:
        "Our network engineering services help you build and maintain a robust network infrastructure. We design, implement, and support networks that are secure, reliable, and optimized for your business operations.",
      image: "/placeholder.svg?key=jhwuy",
      features: [
        "Network design and implementation",
        "Network security solutions",
        "Wireless network setup",
        "VPN implementation",
        "Network monitoring and maintenance",
        "Network troubleshooting and optimization",
      ],
    },
    {
      id: "hardware-solutions",
      title: "Hardware Solutions",
      description: "Hardware consultancy, procurement, and maintenance services for businesses of all sizes.",
      longDescription:
        "We provide comprehensive hardware solutions to meet your technology needs. From hardware procurement and setup to maintenance and support, we ensure your hardware infrastructure supports your business operations effectively.",
      image: "/placeholder.svg?height=400&width=600&query=professional computer hardware components",
      features: [
        "Hardware procurement and setup",
        "Server installation and configuration",
        "Hardware maintenance and support",
        "Hardware upgrades and optimization",
        "Data backup and recovery solutions",
        "Hardware inventory management",
      ],
    },
  ]

  return (
    <main>
      <PageHeader
        title="Our Services"
        description="Comprehensive technology solutions tailored to meet your business needs."
      />

      {/* Services Overview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800" id="service-process">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Service Process</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We follow a structured approach to ensure that our services meet your specific needs and deliver the
              results you expect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Discovery",
                description:
                  "We start by understanding your business, goals, and challenges to identify the right solution for your needs.",
              },
              {
                step: "2",
                title: "Planning",
                description:
                  "We develop a detailed plan outlining the scope, timeline, resources, and deliverables for your project.",
              },
              {
                step: "3",
                title: "Implementation",
                description:
                  "Our team executes the plan, developing and implementing the solution with regular updates and feedback.",
              },
              {
                step: "4",
                title: "Support",
                description:
                  "After implementation, we provide ongoing support and maintenance to ensure your solution continues to perform optimally.",
              },
            ].map((step, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Custom Solutions for Your Business
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We understand that every business is unique, with its own set of challenges and requirements. That's why
                we specialize in developing custom technology solutions tailored to your specific needs.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Our team works closely with you to understand your business processes, identify areas for improvement,
                and develop solutions that address your specific challenges. Whether you need a custom software
                application, a specialized network setup, or a comprehensive technology overhaul, we have the expertise
                to deliver.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/contact" className="text-white">
                  Discuss Your Custom Solution
                </Link>
              </Button>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/placeholder.svg?height=600&width=800&query=professional business meeting discussing custom solutions"
                alt="Custom Technology Solutions"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Industries We Serve</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We have experience working with clients across a wide range of industries, delivering solutions that
              address industry-specific challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                industry: "Healthcare",
                description:
                  "Solutions for patient management, electronic health records, and healthcare administration.",
                image: "/placeholder.svg?height=300&width=400&query=professional healthcare technology",
              },
              {
                industry: "Finance",
                description: "Secure systems for financial management, reporting, and compliance.",
                image: "/placeholder.svg?height=300&width=400&query=professional finance technology",
              },
              {
                industry: "Retail",
                description: "E-commerce platforms, inventory management, and customer engagement solutions.",
                image: "/placeholder.svg?height=300&width=400&query=professional retail technology",
              },
              {
                industry: "Manufacturing",
                description: "Systems for production management, quality control, and supply chain optimization.",
                image: "/placeholder.svg?height=300&width=400&query=professional manufacturing technology",
              },
              {
                industry: "Education",
                description: "Learning management systems, student information systems, and educational tools.",
                image: "/placeholder.svg?height=300&width=400&query=professional education technology",
              },
              {
                industry: "Professional Services",
                description: "Solutions for project management, client relationship management, and service delivery.",
                image: "/placeholder.svg?height=300&width=400&query=professional services technology",
              },
            ].map((industry, index) => (
              <Card key={index} className="border-0 shadow-md overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.industry}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{industry.industry}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your technology needs and how our services can help your business succeed.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
