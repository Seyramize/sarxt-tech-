import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Code,
  Cpu,
  Globe,
  BarChart3,
  Layers,
  Smartphone,
  Award,
  Users,
  Clock,
  Shield,
  HeartHandshake,
  Zap,
  CheckCircle,
  TrendingUp,
  Star,
  ThumbsUp,
} from "lucide-react"
import AnimatedCard from "@/components/animated-card"
import GlassCard from "@/components/glass-card"
import ButtonLink from "@/components/button-link"
import HeroParticles from "@/components/hero-particles"
import TestimonialCarousel from "@/components/testimonial-carousel"
// Import the ScheduleButton component at the top of the file
import ScheduleButton from "@/components/schedule-button"

export default function Home() {
  return (
    <main>
      {/* Redesigned Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden">
        {/* Particle animation background */}
        <HeroParticles />

        {/* Content */}
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 lg:pr-8">
              <div className="mb-6 inline-block">
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-1 rounded-full text-white text-sm font-medium">
                  Innovative Technology Solutions
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Transforming Ideas Into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Digital Reality
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-xl">
                We build cutting-edge digital solutions that drive business growth and create exceptional user
                experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 mb-12">
                <ButtonLink href="/services" size="lg" animationType="shine">
                  Explore Services
                </ButtonLink>
                <ButtonLink href="/contact" variant="outline" size="lg" animationType="border">
                  Get in Touch
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              {/* 3D-like floating elements */}
              <div className="relative h-[500px] w-full">
                {/* Main image */}
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                  <div className="relative w-[90%] h-[90%] transform transition-all duration-700 hover:scale-105">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30"></div>
                    <div className="relative bg-gray-800 rounded-2xl overflow-hidden h-full">
                      <Image
                        src="/homescreen.png"
                        alt="Sarxt Tech Digital Solutions"
                        fill
                        className="object-cover opacity-90"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Floating element 1 */}
                <div className="absolute top-[10%] -right-[5%] w-[150px] h-[150px] animate-float-slow">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-sm opacity-70"></div>
                  <div className="relative bg-gray-800 rounded-xl overflow-hidden h-full">
                    <Image src="/tech-code-visualization.png" alt="Code Visualization" fill className="object-cover" />
                  </div>
                </div>

                {/* Floating element 2 */}
                <div className="absolute bottom-[15%] -left-[5%] w-[180px] h-[120px] animate-float">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-sm opacity-70"></div>
                  <div className="relative bg-gray-800 rounded-xl overflow-hidden h-full">
                    <Image src="/mobile-app-interface.png" alt="Mobile Interface" fill className="object-cover" />
                  </div>
                </div>

                {/* Tech icons floating */}
                <div className="absolute top-[40%] -left-[10%] bg-gray-800/80 backdrop-blur-sm p-3 rounded-full animate-pulse">
                  <Code className="h-8 w-8 text-blue-400" />
                </div>
                <div className="absolute bottom-[30%] right-[5%] bg-gray-800/80 backdrop-blur-sm p-3 rounded-full animate-pulse delay-700">
                  <Cpu className="h-8 w-8 text-purple-400" />
                </div>
                <div className="absolute top-[20%] left-[20%] bg-gray-800/80 backdrop-blur-sm p-3 rounded-full animate-pulse delay-1000">
                  <Globe className="h-8 w-8 text-cyan-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Curved divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#111827"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Core Services Section - Redesigned with icons */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 inline-block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our Core Services
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We provide comprehensive technology solutions tailored to meet the unique needs of your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description:
                  "Custom websites and web applications built with cutting-edge technologies for exceptional user experiences.",
                link: "/services/web-development",
                image: "/professional-web-development.png",
                icon: <Code className="h-10 w-10 text-blue-400" />,
              },
              {
                title: "Mobile Applications",
                description:
                  "Native and cross-platform mobile apps that deliver seamless experiences across all devices.",
                link: "/services/mobile-applications",
                image: "/professional-mobile-app-development.png",
                icon: <Smartphone className="h-10 w-10 text-purple-400" />,
              },
              {
                title: "Software Engineering",
                description:
                  "Custom software development following industry best practices for reliability and scalability.",
                link: "/services/software-engineering",
                image: "/professional-software-engineering.png",
                icon: <Cpu className="h-10 w-10 text-cyan-400" />,
              },
              {
                title: "Internet Solutions",
                description:
                  "Complete internet infrastructure solutions including hosting, domain management, and cloud services.",
                link: "/services/internet-solutions",
                image: "/internetsol.jpg",
                icon: <Globe className="h-10 w-10 text-green-400" />,
              },
              {
                title: "Network Engineering",
                description: "Design, implementation, and maintenance of secure and efficient network infrastructures.",
                link: "/services/network-engineering",
                image: "/professional-network-engineering.png",
                icon: <Layers className="h-10 w-10 text-red-400" />,
              },
              {
                title: "Business Intelligence",
                description: "Data analytics and visualization solutions to help you make informed business decisions.",
                link: "/services/business-intelligence",
                image: "/business-intelligence-dashboard.png",
                icon: <BarChart3 className="h-10 w-10 text-yellow-400" />,
              },
            ].map((service, index) => (
              <AnimatedCard key={index}>
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/30 p-2 rounded-full backdrop-blur-sm">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6 bg-white dark:bg-gray-800">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <ButtonLink href="/services" variant="outline" animationType="border">
              View All Services
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 animate-gradient-slow"></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section header with animated underline */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Sarxt Tech
              <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-4 rounded-full animate-pulse"></div>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              With over a decade of experience, we've helped businesses of all sizes achieve their digital
              transformation goals.
            </p>
          </div>

          {/* Redesigned Stats Section */}
          <div className="flex flex-wrap justify-center mb-16 gap-4">
            {[
              {
                value: "4+",
                label: "Years Experience",
                icon: <Clock className="h-10 w-10 text-blue-300" />,
                description: "Delivering excellence since 2013",
              },
              {
                value: "85+",
                label: "Projects Completed",
                icon: <CheckCircle className="h-10 w-10 text-green-300" />,
                description: "Across diverse industries worldwide",
              },
              {
                value: "10+",
                label: "Team Members",
                icon: <Users className="h-10 w-10 text-purple-300" />,
                description: "Experts in their respective fields",
              },
              {
                value: "85%",
                label: "Client Satisfaction",
                icon: <ThumbsUp className="h-10 w-10 text-yellow-300" />,
                description: "Based on post-project surveys",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                <div className="relative bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 h-full border border-white/10 group-hover:border-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-white/10 mr-4">{stat.icon}</div>
                    <div>
                      <div className="text-4xl font-bold text-white">{stat.value}</div>
                      <div className="text-blue-300 font-medium">{stat.label}</div>
                    </div>
                  </div>
                  <p className="text-blue-100 text-sm">{stat.description}</p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side - Feature cards */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Award className="h-8 w-8 text-blue-300" />,
                  title: "Industry Expertise",
                  description:
                    "Our team holds certifications from leading technology providers and stays current with emerging trends.",
                },
                {
                  icon: <Star className="h-8 w-8 text-purple-300" />,
                  title: "Quality Assurance",
                  description:
                    "Rigorous testing and quality control processes ensure reliable, high-performance solutions.",
                },
                {
                  icon: <Shield className="h-8 w-8 text-green-300" />,
                  title: "Secure Solutions",
                  description:
                    "We implement industry-standard security practices to protect your data and applications.",
                },
                {
                  icon: <TrendingUp className="h-8 w-8 text-yellow-300" />,
                  title: "Scalable Architecture",
                  description: "Our solutions are designed to grow with your business and adapt to changing needs.",
                },
                {
                  icon: <HeartHandshake className="h-8 w-8 text-red-300" />,
                  title: "Client Partnership",
                  description: "We view our clients as partners and focus on building long-term relationships.",
                },
                {
                  icon: <Zap className="h-8 w-8 text-cyan-300" />,
                  title: "Innovative Approach",
                  description: "We leverage cutting-edge technologies to create forward-thinking solutions.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/15 hover:shadow-lg hover:shadow-blue-500/10 group"
                >
                  <div className="bg-white/10 rounded-full p-3 w-fit mb-4 group-hover:bg-white/20 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-blue-100">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Right side - Image */}
            <div className="lg:col-span-5">
              {/* Featured image with glow effect */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-all duration-500"></div>
                <div className="relative">
                  <GlassCard className="p-0 overflow-hidden">
                    <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                      <Image
                        src="/tech-team-collaboration.png"
                        alt="Sarxt Tech Team Collaboration"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-xl font-bold text-white mb-2">Our Approach</h3>
                        <p className="text-blue-100">
                          We combine technical excellence with deep business understanding to deliver solutions that
                          drive real results.
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </div>

              {/* CTA button */}
              <div className="mt-8 text-center lg:text-left">
                <ButtonLink href="/about" variant="glow" size="lg" animationType="shine">
                  Learn More About Us
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section - Enhanced with better visuals */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 inline-block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore some of our most successful projects delivered to clients across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Enterprise E-Commerce Platform",
                category: "Web Development",
                description:
                  "A comprehensive online shopping platform with integrated payment systems and inventory management for a leading retail chain.",
                image: "/placeholder.svg?key=o6g0m",
                link: "/projects/enterprise-ecommerce",
              },
              {
                title: "Healthcare Management System",
                category: "Software Engineering",
                description:
                  "Custom healthcare management system for a network of hospitals, streamlining patient care and administrative processes.",
                image: "/healthcare-system-interface.png",
                link: "/projects/healthcare-management",
              },
              {
                title: "Logistics Mobile Application",
                category: "Mobile Applications",
                description:
                  "A mobile application for a logistics company that enables real-time tracking of shipments and fleet management.",
                image: "/logistics-app-interface.png",
                link: "/projects/logistics-mobile-app",
              },
            ].map((project, index) => (
              <AnimatedCard key={index}>
                <div className="relative h-64 w-full group">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <div className="text-sm text-blue-400 font-medium mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>
                    <Link
                      href={project.link}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group"
                    >
                      View Project{" "}
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <ButtonLink href="/projects" variant="neon">
              View All Projects
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Redesigned as a carousel */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-blue-900"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 inline-block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Client Testimonials
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hear what our clients have to say about working with Sarxt Tech.
            </p>
          </div>

          <TestimonialCarousel
            testimonials={[
              {
                name: "Sarah Johnson",
                position: "CTO, Global Enterprises",
                content:
                  "Sarxt Tech delivered our enterprise software solution on time and within budget. Their team's technical expertise and project management skills were exceptional. The attention to detail and commitment to quality exceeded our expectations.",
                avatar: "/professional-business-woman-portrait.png",
              },
              {
                name: "Michael Chen",
                position: "CEO, TechStart Inc.",
                content:
                  "The mobile application developed by Sarxt Tech has been instrumental in our growth. Their attention to detail and technical expertise is unmatched. We've seen a 40% increase in user engagement since launching the app they built for us.",
                avatar: "/asian-ceo-portrait.png",
              },
              {
                name: "Emily Rodriguez",
                position: "Marketing Director, InnovateNow",
                content:
                  "Working with Sarxt Tech was a seamless experience. They understood our needs perfectly and delivered a solution that helped us reach our business goals. Their team was responsive, professional, and truly cared about the success of our project.",
                avatar: "/professional-latina-woman-smiling.png",
              },
              {
                name: "David Wilson",
                position: "Operations Manager, LogiTech Solutions",
                content:
                  "Sarxt Tech transformed our logistics operations with their custom software solution. The system they built has improved our efficiency by 35% and significantly reduced errors. Their ongoing support has been invaluable to our business.",
                avatar: "/professional-black-male-manager.png",
              },
              {
                name: "Jennifer Park",
                position: "Founder, HealthTech Innovations",
                content:
                  "As a healthcare startup, we needed a technology partner who understood both tech and healthcare compliance. Sarxt Tech delivered a secure, HIPAA-compliant platform that has become the foundation of our business. Highly recommended!",
                avatar: "/asian-female-executive.png",
              },
            ]}
          />
        </div>
      </section>

      {/* CTA Section - Enhanced with better visuals */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Contact us today to discuss how our technology solutions can help your business grow and succeed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ScheduleButton variant="white" size="lg" animationType="shine" />
            <ButtonLink
              href="/about"
              variant="outline"
              size="lg"
              className="border-white text-white"
              animationType="border"
            >
              Learn More About Us
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  )
}
