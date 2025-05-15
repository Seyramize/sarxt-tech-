"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import ButtonLink from "@/components/button-link"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md dark:bg-gray-900" : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png" // Change to "/placeholder-logo.svg" if you prefer SVG
              alt="Sarxt Tech Logo"
              width={140}
              height={40}
              className="h-10 w-auto"
              priority
            />
            {/* Optionally, keep the text for branding */}
            {/* <span className="text-2xl font-bold text-gray-900 dark:text-white">Sarxt</span>
            <span className="text-2xl font-bold text-blue-600">Tech</span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors ${
                isActive("/")
                  ? "text-blue-600 font-medium"
                  : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`transition-colors ${
                isActive("/about")
                  ? "text-blue-600 font-medium"
                  : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
              }`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`transition-colors ${
                isActive("/services") || pathname.startsWith("/services/")
                  ? "text-blue-600 font-medium"
                  : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
              }`}
            >
              Services
            </Link>
            <Link
              href="/projects"
              className={`transition-colors ${
                isActive("/projects") || pathname.startsWith("/projects/")
                  ? "text-blue-600 font-medium"
                  : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
              }`}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className={`transition-colors ${
                isActive("/contact")
                  ? "text-blue-600 font-medium"
                  : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ButtonLink href="/get-a-quote" size="sm" variant="glow" animationType="glow">
              Get a Quote
            </ButtonLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="text-gray-900 dark:text-white" />
            ) : (
              <Menu className="text-gray-900 dark:text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-md">
            <div className="flex flex-col p-4 space-y-4">
              <Link
                href="/"
                className={`transition-colors ${
                  isActive("/")
                    ? "text-blue-600 font-medium"
                    : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`transition-colors ${
                  isActive("/about")
                    ? "text-blue-600 font-medium"
                    : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`transition-colors ${
                  isActive("/services") || pathname.startsWith("/services/")
                    ? "text-blue-600 font-medium"
                    : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/projects"
                className={`transition-colors ${
                  isActive("/projects") || pathname.startsWith("/projects/")
                    ? "text-blue-600 font-medium"
                    : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className={`transition-colors ${
                  isActive("/contact")
                    ? "text-blue-600 font-medium"
                    : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                <ButtonLink href="/get-a-quote" fullWidth={true} animationType="shine">
                  Get a Quote
                </ButtonLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
