import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import PageHeader from "@/components/page-header"
import ButtonLink from "@/components/button-link"
import ScheduleButton from "@/components/schedule-button"

export default function FAQPage() {
  const faqs = [
    {
      question: "What services does Sarxt Tech offer?",
      answer:
        "Sarxt Tech offers a comprehensive range of technology solutions including web development, mobile applications, internet solutions, software engineering, network engineering, and hardware solutions. Our services are designed to help businesses of all sizes leverage technology to achieve their goals.",
    },
    {
      question: "How long does it take to complete a typical project?",
      answer:
        "Project timelines vary depending on the scope and complexity. A simple website might take 4-6 weeks, while a complex enterprise application could take several months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements. We're committed to delivering high-quality solutions within agreed timeframes.",
    },
    {
      question: "What is your development process?",
      answer:
        "Our development process follows industry best practices and typically includes: 1) Discovery and requirements gathering, 2) Planning and design, 3) Development, 4) Testing and quality assurance, 5) Deployment, and 6) Ongoing support and maintenance. We maintain transparent communication throughout the process and provide regular updates on progress.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer various support and maintenance packages to ensure your solution continues to perform optimally. Our support services include regular updates, security patches, performance monitoring, and technical assistance. We can tailor a support plan to meet your specific needs and budget.",
    },
    {
      question: "How do you handle project pricing?",
      answer:
        "We provide transparent pricing based on the scope of work, complexity, and timeline of each project. After an initial consultation, we'll provide a detailed proposal with a breakdown of costs. We offer both fixed-price and time-and-materials pricing models depending on the nature of the project.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "Our team has expertise in a wide range of technologies including React, Angular, Vue.js, Node.js, .NET, Java, Python, AWS, Azure, Google Cloud, and many others. We stay up-to-date with the latest technologies and best practices to ensure we deliver modern, efficient, and scalable solutions.",
    },
    {
      question: "Can you work with our existing systems and technologies?",
      answer:
        "Yes, we have extensive experience integrating with existing systems and technologies. Whether you need to enhance your current solution or build something that works alongside it, we can develop a strategy that leverages your existing investments while incorporating new technologies where beneficial.",
    },
    {
      question: "How do you ensure the security of the solutions you develop?",
      answer:
        "Security is a top priority in all our projects. We follow security best practices throughout the development process, including secure coding standards, regular security testing, and implementation of appropriate authentication and authorization mechanisms. We also stay informed about the latest security threats and vulnerabilities to ensure our solutions remain secure.",
    },
    {
      question: "Do you offer consulting services?",
      answer:
        "Yes, we provide technology consulting services to help businesses make informed decisions about their technology strategy. Our consultants can assess your current systems, identify areas for improvement, and recommend solutions that align with your business goals and budget.",
    },
    {
      question: "How do we get started with Sarxt Tech?",
      answer:
        "Getting started is easy! Simply contact us through our website, by phone, or by email to schedule an initial consultation. During this consultation, we'll discuss your needs, answer your questions, and determine how we can best help you achieve your goals. There's no obligation, and we're happy to provide information to help you make an informed decision.",
    },
  ]

  return (
    <main>
      <PageHeader
        title="Frequently Asked Questions"
        description="Find answers to common questions about our services and processes."
      />

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg p-1">
                  <AccordionTrigger className="px-4 py-3 text-left font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-1 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Didn't find the answer you're looking for?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our team is here to help. Contact us with your questions and we'll get back to you as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <ButtonLink href="/contact" variant="default" animationType="shine">
                  Contact Us
                </ButtonLink>
                <ScheduleButton variant="outline">Schedule a Consultation</ScheduleButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Browse Questions by Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Services & Solutions",
                description: "Learn about our range of technology services and solutions.",
                link: "#",
              },
              {
                title: "Project Process",
                description: "Understand how we approach and manage projects.",
                link: "#",
              },
              {
                title: "Technology & Tools",
                description: "Explore the technologies and tools we use.",
                link: "#",
              },
              {
                title: "Support & Maintenance",
                description: "Find out about our ongoing support and maintenance services.",
                link: "#",
              },
              {
                title: "Pricing & Billing",
                description: "Get information about our pricing models and billing processes.",
                link: "#",
              },
              {
                title: "Getting Started",
                description: "Learn how to start working with Sarxt Tech.",
                link: "#",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{category.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
                <a
                  href={category.link}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium inline-flex items-center"
                >
                  View Questions
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Contact us today to discuss how our technology solutions can help your business grow and succeed.
          </p>
          <ScheduleButton variant="white" size="lg" animationType="shine">
            Schedule a Free Consultation
          </ScheduleButton>
        </div>
      </section>
    </main>
  )
}
