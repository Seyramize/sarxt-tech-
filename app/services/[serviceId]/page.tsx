import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft } from "lucide-react"
import PageHeader from "@/components/page-header"
import ScheduleButton from "@/components/schedule-button"

interface ServicePageProps {
  params: {
    serviceId: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const services = [
    {
      id: "web-development",
      title: "Web Development",
      description:
        "Custom websites and web applications built with cutting-edge technologies for exceptional user experiences.",
      longDescription:
        "Our web development services include everything from responsive websites to complex web applications. We use modern frameworks and technologies to create fast, secure, and scalable web solutions that meet your business needs.",
      image: "/web-dev-team-collaboration.png",
      features: [
        "Responsive website design and development",
        "Custom web application development",
        "E-commerce solutions",
        "Content management systems",
        "Web portal development",
        "API development and integration",
      ],
      process: [
        {
          title: "Requirements Gathering",
          description:
            "We start by understanding your business goals, target audience, and specific requirements for your web project.",
        },
        {
          title: "Design and Prototyping",
          description:
            "Our designers create wireframes and prototypes to visualize the user interface and experience before development begins.",
        },
        {
          title: "Development",
          description:
            "Our developers build your website or web application using modern frameworks and best practices for performance and security.",
        },
        {
          title: "Testing and Quality Assurance",
          description:
            "We thoroughly test your web solution across different devices and browsers to ensure a consistent experience.",
        },
        {
          title: "Deployment and Launch",
          description:
            "We handle the deployment of your website or application to your hosting environment and ensure everything is working properly.",
        },
        {
          title: "Maintenance and Support",
          description:
            "We provide ongoing maintenance and support to keep your web solution up-to-date and running smoothly.",
        },
      ],
      technologies: [
        "React",
        "Next.js",
        "Angular",
        "Vue.js",
        "Node.js",
        "PHP",
        "Laravel",
        "WordPress",
        "Shopify",
        "AWS",
        "Azure",
      ],
    },
    {
      id: "mobile-applications",
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver seamless experiences across all devices.",
      longDescription:
        "We develop high-performance mobile applications for iOS and Android platforms. Our mobile solutions are designed to provide intuitive user experiences while leveraging the full capabilities of modern mobile devices.",
      image: "/placeholder.svg?key=1afc5",
      features: [
        "iOS app development",
        "Android app development",
        "Cross-platform app development",
        "Mobile app UI/UX design",
        "App testing and quality assurance",
        "App store submission and optimization",
      ],
      process: [
        {
          title: "Discovery and Planning",
          description: "We work with you to define the app's purpose, target audience, and key features.",
        },
        {
          title: "UI/UX Design",
          description:
            "Our designers create intuitive and engaging user interfaces that follow platform-specific design guidelines.",
        },
        {
          title: "Development",
          description:
            "Our developers build your mobile application using native or cross-platform technologies based on your requirements.",
        },
        {
          title: "Testing",
          description:
            "We conduct thorough testing on different devices and operating system versions to ensure compatibility and performance.",
        },
        {
          title: "Deployment",
          description:
            "We handle the submission process to the App Store and Google Play Store, ensuring compliance with their guidelines.",
        },
        {
          title: "Maintenance and Updates",
          description:
            "We provide ongoing support and updates to keep your app functioning optimally and up-to-date with the latest OS versions.",
        },
      ],
      technologies: [
        "Swift",
        "Objective-C",
        "Kotlin",
        "Java",
        "React Native",
        "Flutter",
        "Ionic",
        "Firebase",
        "AWS Amplify",
      ],
    },
    {
      id: "internet-solutions",
      title: "Internet Solutions",
      description:
        "Complete internet infrastructure solutions including hosting, domain management, and cloud services.",
      longDescription:
        "Our internet solutions provide the foundation for your online presence. From domain registration and hosting to cloud infrastructure and security, we ensure your digital assets are reliable, secure, and performant.",
      image: "/placeholder.svg?key=lzpcn",
      features: [
        "Domain registration and management",
        "Web hosting solutions",
        "Cloud infrastructure setup and management",
        "Email hosting and management",
        "CDN implementation",
        "SSL certificate installation and management",
      ],
      process: [
        {
          title: "Assessment",
          description: "We assess your current internet infrastructure and identify areas for improvement.",
        },
        {
          title: "Planning",
          description: "We develop a plan for your internet infrastructure that meets your business needs and budget.",
        },
        {
          title: "Implementation",
          description: "Our team sets up and configures your internet infrastructure according to the plan.",
        },
        {
          title: "Testing",
          description: "We test your infrastructure to ensure everything is working properly and securely.",
        },
        {
          title: "Documentation",
          description: "We provide comprehensive documentation of your internet infrastructure for future reference.",
        },
        {
          title: "Monitoring and Support",
          description:
            "We monitor your infrastructure and provide ongoing support to ensure reliability and performance.",
        },
      ],
      technologies: [
        "AWS",
        "Azure",
        "Google Cloud",
        "cPanel",
        "Plesk",
        "Cloudflare",
        "Let's Encrypt",
        "Apache",
        "Nginx",
        "Docker",
        "Kubernetes",
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
      process: [
        {
          title: "Requirements Analysis",
          description:
            "We work with you to understand your business processes and define the requirements for your software solution.",
        },
        {
          title: "Architecture Design",
          description:
            "Our architects design a software architecture that meets your requirements and follows best practices.",
        },
        {
          title: "Development",
          description:
            "Our developers build your software solution using modern technologies and development methodologies.",
        },
        {
          title: "Testing",
          description:
            "We conduct thorough testing to ensure your software is reliable, secure, and performs as expected.",
        },
        {
          title: "Deployment",
          description:
            "We deploy your software solution to your preferred environment and ensure everything is working properly.",
        },
        {
          title: "Maintenance and Support",
          description:
            "We provide ongoing maintenance and support to keep your software up-to-date and running smoothly.",
        },
      ],
      technologies: [
        "Java",
        "C#",
        ".NET",
        "Python",
        "Ruby",
        "Go",
        "SQL",
        "NoSQL",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "Git",
      ],
    },
    {
      id: "network-engineering",
      title: "Network Engineering",
      description: "Design, implementation, and maintenance of secure and efficient network infrastructures.",
      longDescription:
        "Our network engineering services help you build and maintain a robust network infrastructure. We design, implement, and support networks that are secure, reliable, and optimized for your business operations.",
      image: "/placeholder.svg?key=ugo7d",
      features: [
        "Network design and implementation",
        "Network security solutions",
        "Wireless network setup",
        "VPN implementation",
        "Network monitoring and maintenance",
        "Network troubleshooting and optimization",
      ],
      process: [
        {
          title: "Network Assessment",
          description: "We assess your current network infrastructure and identify areas for improvement.",
        },
        {
          title: "Network Design",
          description:
            "Our engineers design a network architecture that meets your business requirements and security needs.",
        },
        {
          title: "Implementation",
          description:
            "We implement your network infrastructure according to the design, ensuring minimal disruption to your operations.",
        },
        {
          title: "Testing",
          description: "We thoroughly test your network to ensure reliability, performance, and security.",
        },
        {
          title: "Documentation",
          description: "We provide comprehensive documentation of your network infrastructure for future reference.",
        },
        {
          title: "Monitoring and Support",
          description:
            "We monitor your network and provide ongoing support to ensure optimal performance and security.",
        },
      ],
      technologies: [
        "Cisco",
        "Juniper",
        "Fortinet",
        "Palo Alto",
        "Ubiquiti",
        "VMware NSX",
        "SD-WAN",
        "MPLS",
        "VPN",
        "Firewall",
        "IDS/IPS",
      ],
    },
    {
      id: "hardware-solutions",
      title: "Hardware Solutions",
      description: "Hardware consultancy, procurement, and maintenance services for businesses of all sizes.",
      longDescription:
        "We provide comprehensive hardware solutions to meet your technology needs. From hardware procurement and setup to maintenance and support, we ensure your hardware infrastructure supports your business operations effectively.",
      image: "/placeholder.svg?height=600&width=1200&query=professional IT technician working on computer hardware",
      features: [
        "Hardware procurement and setup",
        "Server installation and configuration",
        "Hardware maintenance and support",
        "Hardware upgrades and optimization",
        "Data backup and recovery solutions",
        "Hardware inventory management",
      ],
      process: [
        {
          title: "Needs Assessment",
          description: "We assess your hardware needs based on your business requirements and budget.",
        },
        {
          title: "Procurement",
          description: "We source and procure the hardware that best meets your needs, ensuring competitive pricing.",
        },
        {
          title: "Installation and Configuration",
          description:
            "Our technicians install and configure your hardware, ensuring it integrates with your existing infrastructure.",
        },
        {
          title: "Testing",
          description: "We thoroughly test your hardware to ensure it performs as expected.",
        },
        {
          title: "Training",
          description: "We provide training for your staff on how to use and maintain the new hardware.",
        },
        {
          title: "Ongoing Support",
          description: "We provide ongoing maintenance and support to keep your hardware running optimally.",
        },
      ],
      technologies: ["Dell", "HP", "Lenovo", "Cisco", "IBM", "Intel", "AMD", "RAID", "SAN", "NAS", "Virtualization"],
    },
  ]

  const service = services.find((s) => s.id === params.serviceId)

  if (!service) {
    notFound()
  }

  return (
    <main>
      <PageHeader title={service.title} description={service.description} />

      {/* Service Overview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/services" className="inline-flex items-center text-blue-600 hover:text-blue-700">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="lg:w-2/3">
              <div className="relative w-full h-[400px] mb-8">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Overview</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">{service.longDescription}</p>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Process</h3>
              <div className="space-y-6 mb-8">
                {service.process.map((step, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {index + 1}. {step.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Technologies We Use</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {service.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:w-1/3 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Ready to Get Started?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Contact us today to discuss your {service.title.toLowerCase()} needs and how we can help your business
                succeed.
              </p>
              <ScheduleButton fullWidth service={service.id}>
                Request a Consultation
              </ScheduleButton>
              <Button variant="outline" className="w-full border-gray-300 dark:border-gray-700">
                View Our Portfolio
              </Button>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4">Related Services</h4>
                <ul className="space-y-3">
                  {services
                    .filter((s) => s.id !== service.id)
                    .slice(0, 3)
                    .map((relatedService, index) => (
                      <li key={index}>
                        <Link href={`/services/${relatedService.id}`} className="text-blue-600 hover:text-blue-700">
                          {relatedService.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need {service.title}?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your project and how our {service.title.toLowerCase()} services can help your
            business succeed.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Get a Free Consultation
          </Button>
        </div>
      </section>
    </main>
  )
}
