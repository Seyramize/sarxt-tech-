import Image from "next/image"
import { CheckCircle, Users, Award, Lightbulb, Target, Clock } from "lucide-react"
import GlassCard from "@/components/glass-card"
import ButtonLink from "@/components/button-link"
import CompanyTimeline from "@/components/company-timeline"
import TeamMemberCard from "@/components/team-member-card"
import AboutParticles from "@/components/about-particles"

export default function AboutPage() {
  return (
    <main className="bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <AboutParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-purple-900/50 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-blue-300 font-medium">Our Story</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Pioneering Digital{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Innovation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Since 2019, we've been on a mission to help startups and forward-thinking businesses innovate, grow, and make an impact through technology.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-xl opacity-20"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/modern-office-building.png"
                  alt="Sarxt Tech Headquarters"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-[240px]">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">12+</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Team Members</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-full">
                    <Award className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">5+</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-block mb-4 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium">
                About Sarxt Tech
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Empowering Innovation as a Startup
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Founded in 2019, Sarxt Tech began as a passionate startup with a bold vision: to disrupt the technology landscape and empower businesses of all sizes with innovative digital solutions. Our journey is defined by agility, creativity, and a relentless drive to solve real-world problems.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We specialize in building scalable, user-centric products for startups and forward-thinking organizations. Our diverse team of engineers, designers, and entrepreneurs thrives on collaboration, rapid iteration, and a growth mindset.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                At Sarxt Tech, we believe in challenging the status quo, embracing change, and partnering with visionary clients to turn ambitious ideas into reality. We’re not just a tech company—we’re a startup on a mission to make a lasting impact.
              </p>
              <ButtonLink href="/services">Explore Our Services</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:30px_30px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-blue-400 text-sm font-medium">
              Our Guiding Principles
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission, Vision & Values</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The principles that guide our work and define our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/20 mb-6">
                <Target className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To empower businesses through innovative technology solutions that drive growth, efficiency, and
                competitive advantage.
              </p>
            </GlassCard>

            <GlassCard className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-600/20 mb-6">
                <Lightbulb className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be the most trusted technology partner for businesses seeking to thrive in the digital age, known for
                our expertise, integrity, and client-focused approach.
              </p>
            </GlassCard>

            <GlassCard className="p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-600/20 mb-6">
                <Award className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Our Values</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Excellence in everything we do</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Integrity and transparency</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Innovation and continuous improvement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Client-centered approach</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Collaboration and teamwork</span>
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-blue-400 text-sm font-medium">
              Our Journey
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Company Timeline</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From our humble beginnings to becoming a leading technology solutions provider.
            </p>
          </div>

          <CompanyTimeline
            milestones={[
              {
                year: "2019",
                title: "Startup Launched",
                description:
                  "Sarxt Tech was founded as a dynamic startup with a mission to disrupt the technology landscape and empower businesses with innovative digital solutions.",
                icon: <Clock className="h-6 w-6" />,
              },
              {
                year: "2020",
                title: "First Seed Funding",
                description: "Secured initial seed funding to accelerate product development and expand our core team.",
                icon: <Users className="h-6 w-6" />,
              },
              {
                year: "2021",
                title: "Product Launch",
                description: "Launched our flagship SaaS platform, gaining early traction with startups and SMEs.",
                icon: <Award className="h-6 w-6" />,
              },
              {
                year: "2022",
                title: "Growth & Partnerships",
                description: "Formed strategic partnerships and expanded our client base, focusing on rapid growth and innovation.",
                icon: <Lightbulb className="h-6 w-6" />,
              },
              {
                year: "2023",
                title: "Series A Funding",
                description: "Closed Series A funding round to scale operations, enhance our product, and enter new markets.",
                icon: <Award className="h-6 w-6" />,
              },
              {
                year: "2024",
                title: "Team Expansion",
                description: "Grew to a diverse team of 20+ innovators, engineers, and entrepreneurs, united by a startup mindset.",
                icon: <Award className="h-6 w-6" />,
              },
              {
                year: "2025",
                title: "Startup to Scaleup",
                description:
                  "Transitioned from a startup to a scaleup, recognized for our agile culture, rapid innovation, and impact in the tech ecosystem.",
                icon: <Lightbulb className="h-6 w-6" />,
              },
            ]}
          />
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-blue-400 text-sm font-medium">
              Meet Our Team
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Leadership Team</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Meet the experienced professionals who lead Sarxt Tech and drive our success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Seyram Yao Alifo",
                position: "Chief Executive Officer",
                bio: "With over 10 years of experience in the technology sector, Robert leads Sarxt Tech with a focus on innovation and strategic growth.",
                image: "/robert-chen-ceo.png",
                linkedin: "#",
                twitter: "#",
              },
              {
                name: "Jennifer Williams",
                position: "Chief Technology Officer",
                bio: "Jennifer brings 15+ years of software engineering expertise, ensuring our technical solutions meet the highest standards of quality and innovation.",
                image: "/jennifer-williams-cto.png",
                linkedin: "#",
                twitter: "#",
              },
              {
                name: "David Rodriguez",
                position: "Chief Operations Officer",
                bio: "David oversees our day-to-day operations, ensuring efficient delivery of services and maintaining our high standards of client satisfaction.",
                image: "/david-rodriguez-coo.png",
                linkedin: "#",
                twitter: "#",
              },
              {
                name: "Sarah Johnson",
                position: "VP of Client Services",
                bio: "Sarah leads our client services team, focusing on building strong relationships and ensuring our solutions align with client objectives.",
                image: "/sarah-johnson-vp.png",
                linkedin: "#",
                twitter: "#",
              },
              {
                name: "Michael Thompson",
                position: "VP of Engineering",
                bio: "Michael directs our engineering teams, bringing extensive experience in software architecture and development methodologies.",
                image: "/michael-thompson-vp.png",
                linkedin: "#",
                twitter: "#",
              },
              {
                name: "Lisa Chen",
                position: "VP of Marketing",
                bio: "Lisa drives our marketing strategy, leveraging her background in technology marketing to enhance our brand presence and client engagement.",
                image: "/lisa-chen-vp.png",
                linkedin: "#",
                twitter: "#",
              },
            ].map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium">
                How We Work
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Approach</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                At Sarxt Tech, we follow a structured yet flexible approach to delivering technology solutions. Our
                methodology is designed to ensure that we understand your business needs, develop solutions that address
                those needs, and implement them efficiently.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Thorough discovery and requirements gathering",
                  "Collaborative solution design and planning",
                  "Agile development with regular client feedback",
                  "Comprehensive testing and quality assurance",
                  "Smooth deployment and knowledge transfer",
                  "Ongoing support and continuous improvement",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">{item}</p>
                  </div>
                ))}
              </div>

              <ButtonLink href="/services#service-process">Learn About Our Process</ButtonLink>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-xl opacity-20"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/team-collaboration.png"
                  alt="Our Approach to Technology Solutions"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Contact us today to discuss how our team can help you achieve your technology goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonLink href="/contact" variant="white" size="lg">
              Get in Touch
            </ButtonLink>
            <ButtonLink href="/services" variant="outline" size="lg" className="border-white text-white">
              Explore Our Services
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  )
}
