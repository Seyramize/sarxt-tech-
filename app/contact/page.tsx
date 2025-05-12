import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import PageHeader from "@/components/page-header"
import ScheduleButton from "@/components/schedule-button"

export default function ContactPage() {
  return (
    <main>
      <PageHeader title="Contact Us" description="Get in touch with our team to discuss your technology needs." />

      {/* Contact Information */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Have a question or need assistance? Our team is here to help. Contact us using the information below or
                fill out the form and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Our Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">123 Tech Avenue, Innovation District, CA 94103</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">info@sarxttech.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Business Hours</h3>
                    <p className="text-gray-600 dark:text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 dark:text-gray-300">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-blue-400 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-blue-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-blue-400 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h2>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Location</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Visit our office to meet our team and discuss your project in person.
            </p>
          </div>

          <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968173775!2d-122.41941492392031!3d37.77492997128885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1652887628265!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sarxt Tech Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about our services and processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What types of businesses do you work with?",
                answer:
                  "We work with businesses of all sizes across various industries, including healthcare, finance, retail, manufacturing, education, and professional services. Our solutions are tailored to meet the specific needs of each client.",
              },
              {
                question: "How long does a typical project take to complete?",
                answer:
                  "Project timelines vary depending on the scope and complexity of the project. A simple website might take 4-6 weeks, while a complex enterprise application could take several months. We provide detailed timelines during the planning phase of each project.",
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer:
                  "Yes, we offer various support and maintenance packages to ensure your solution continues to perform optimally. Our support services include regular updates, security patches, performance monitoring, and technical assistance.",
              },
              {
                question: "How do you handle project pricing?",
                answer:
                  "We provide transparent pricing based on the scope of work, complexity, and timeline of each project. After an initial consultation, we'll provide a detailed proposal with a breakdown of costs. We offer both fixed-price and time-and-materials pricing models.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
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
            Contact us today to schedule a free consultation and discuss how our technology solutions can help your
            business succeed.
          </p>
          <ScheduleButton variant="white" size="lg">
            Schedule a Consultation
          </ScheduleButton>
        </div>
      </section>
    </main>
  )
}
