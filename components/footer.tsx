import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, HelpCircle, FileText } from "lucide-react"
import ButtonLink from "@/components/button-link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="Sarxt Tech Logo"
                width={40}
                height={40}
                className="h-10 w-auto mr-2 bg-transparent"
                priority
              />
             
            </div>
            <p className="text-gray-300 mb-6">
              Providing cutting-edge technology solutions for businesses since 2010. We help organizations transform
              through technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Support & Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/get-a-quote" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <span className="flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    Get a Quote
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/schedule-consultation" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <span className="flex items-center">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Schedule Consultation
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web-development" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile-applications"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Mobile Applications
                </Link>
              </li>
              <li>
                <Link
                  href="/services/internet-solutions"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Internet Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/software-engineering"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Software Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/services/network-engineering"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Network Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/services/hardware-solutions"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Hardware Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <span className="text-gray-300">Accra, Ghana</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <a href="tel:+233546506220" className="text-gray-300 hover:text-blue-400 transition-colors">(+233) 54-650-6220</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <a href="mailto:info@sarxttech.com" className="text-gray-300 hover:text-blue-400 transition-colors">info@sarxttech.com</a>
              </li>
            </ul>
            <div className="mt-6">
              <ButtonLink
                href="/contact"
                variant="outline"
                className="border-gray-600 text-white hover:border-blue-400"
              >
                Get in Touch
              </ButtonLink>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p className="mb-4">© {new Date().getFullYear()} Sarxt Tech. All rights reserved.</p>
          <div className="flex justify-center space-x-4 text-sm">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/faq" className="text-gray-400 hover:text-blue-400 transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
