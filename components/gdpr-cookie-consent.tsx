"use client"

import { useState, useEffect } from "react"
import { X, Cookie } from "lucide-react"
import { CustomButton } from "@/components/custom-button"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"

interface CookieCategory {
  id: string
  name: string
  description: string
  required: boolean
  checked: boolean
}

export default function GDPRCookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [activeTab, setActiveTab] = useState("privacy")
  const [cookieCategories, setCookieCategories] = useState<CookieCategory[]>([
    {
      id: "essential",
      name: "Essential Cookies",
      description:
        "These cookies are necessary for the website to function properly and cannot be switched off. They are usually set in response to actions made by you such as setting your privacy preferences, logging in, or filling in forms.",
      required: true,
      checked: true,
    },
    {
      id: "analytics",
      name: "Analytics Cookies",
      description:
        "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site.",
      required: false,
      checked: false,
    },
    {
      id: "functional",
      name: "Functional Cookies",
      description:
        "These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.",
      required: false,
      checked: false,
    },
    {
      id: "marketing",
      name: "Marketing Cookies",
      description:
        "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant ads on other sites.",
      required: false,
      checked: false,
    },
  ])

  useEffect(() => {
    // Check if user has already consented
    const consentData = localStorage.getItem("gdpr-cookie-consent")

    if (!consentData) {
      // Show the consent popup after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true)
      }, 1000)
      return () => clearTimeout(timer)
    } else {
      // Parse stored preferences
      try {
        const parsedData = JSON.parse(consentData)
        setCookieCategories((prevCategories) =>
          prevCategories.map((category) => ({
            ...category,
            checked: category.required || parsedData[category.id] || false,
          })),
        )
      } catch (error) {
        console.error("Error parsing stored cookie preferences:", error)
        setShowConsent(true)
      }
    }
  }, [])

  const toggleCategory = (categoryId: string) => {
    setCookieCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === categoryId && !category.required ? { ...category, checked: !category.checked } : category,
      ),
    )
  }

  const acceptAllCookies = () => {
    const updatedCategories = cookieCategories.map((category) => ({
      ...category,
      checked: true,
    }))
    setCookieCategories(updatedCategories)
    savePreferences(updatedCategories)
  }

  const rejectNonEssentialCookies = () => {
    const updatedCategories = cookieCategories.map((category) => ({
      ...category,
      checked: category.required,
    }))
    setCookieCategories(updatedCategories)
    savePreferences(updatedCategories)
  }

  const savePreferences = (categories = cookieCategories) => {
    // Create an object with category IDs as keys and checked status as values
    const preferences = categories.reduce(
      (acc, category) => {
        acc[category.id] = category.checked
        return acc
      },
      {} as Record<string, boolean>,
    )

    // Save to localStorage
    localStorage.setItem("gdpr-cookie-consent", JSON.stringify(preferences))

    // Here you would implement the actual cookie setting/blocking logic
    // based on the user's preferences
    applyConsentPreferences(preferences)

    setShowConsent(false)
    setShowPreferences(false)
  }

  const applyConsentPreferences = (preferences: Record<string, boolean>) => {
    // This function would implement the actual cookie blocking logic
    // For example, you might set a flag that your analytics code checks before loading

    // Example: If analytics is disabled, you could set a flag to prevent analytics from loading
    if (!preferences.analytics) {
      window._disableAnalytics = true
    } else {
      delete window._disableAnalytics
    }

    // Similar logic for other cookie categories
    console.log("Applied cookie preferences:", preferences)
  }

  const openPreferences = () => {
    setShowPreferences(true)
    setShowConsent(false)
  }

  const openConsentManager = () => {
    setShowPreferences(true)
  }

  // Add a button to the page to reopen the consent manager
  useEffect(() => {
    const createConsentButton = () => {
      // Check if the button already exists
      if (document.getElementById("cookie-settings-button")) return

      const button = document.createElement("button")
      button.id = "cookie-settings-button"
      button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M14.5 9a2.5 2.5 0 0 0-5 0v.5a2.5 2.5 0 0 0 5 0V9z"/><path d="M16 9.5a4.5 4.5 0 0 0-8-2.9"/><path d="M16 14.5a4.5 4.5 0 0 1-8 2.9"/><path d="M9.5 15a2.5 2.5 0 0 0 5 0v-.5a2.5 2.5 0 0 0-5 0V15z"/></svg>`
      button.className =
        "fixed bottom-4 left-4 z-40 p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
      button.title = "Cookie Settings"
      button.setAttribute("aria-label", "Open Cookie Settings")

      button.addEventListener("click", openConsentManager)
      document.body.appendChild(button)
    }

    // Only create the button if the user has already made a choice
    if (localStorage.getItem("gdpr-cookie-consent")) {
      createConsentButton()
    }

    return () => {
      const button = document.getElementById("cookie-settings-button")
      if (button) {
        button.removeEventListener("click", openConsentManager)
        button.remove()
      }
    }
  }, [])

  return (
    <>
      <AnimatePresence>
        {showConsent && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-6 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700"
          >
            <div className="container mx-auto max-w-4xl">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <Cookie className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Cookie Consent</h3>
                  </div>
                  <button
                    onClick={() => setShowConsent(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <p className="text-gray-600 dark:text-gray-300">
                  We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By
                  clicking "Accept All", you consent to our use of all cookies. Click "Customize" to set your
                  preferences.
                </p>

                <div className="flex flex-wrap gap-3 justify-end mt-2">
                  <CustomButton
                    variant="outline"
                    size="sm"
                    onClick={rejectNonEssentialCookies}
                    className="whitespace-nowrap"
                  >
                    Reject Non-Essential
                  </CustomButton>
                  <CustomButton variant="outline" size="sm" onClick={openPreferences} className="whitespace-nowrap">
                    Customize
                  </CustomButton>
                  <CustomButton
                    variant="default"
                    size="sm"
                    onClick={acceptAllCookies}
                    animationType="shine"
                    className="whitespace-nowrap"
                  >
                    Accept All
                  </CustomButton>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {showPreferences && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-auto bg-white dark:bg-gray-900 rounded-xl shadow-2xl"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <Cookie className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Cookie Settings</h2>
                </div>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                  aria-label="Close"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="p-6">
                <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="privacy">Privacy Settings</TabsTrigger>
                    <TabsTrigger value="about">About Cookies</TabsTrigger>
                  </TabsList>

                  <TabsContent value="privacy" className="space-y-8">
                    <p className="text-gray-600 dark:text-gray-300">
                      Manage your cookie preferences below. Essential cookies cannot be disabled as they are necessary
                      for the website to function properly.
                    </p>

                    {cookieCategories.map((category) => (
                      <div
                        key={category.id}
                        className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h4 className="text-lg font-medium text-gray-900 dark:text-white">{category.name}</h4>
                              {category.required && (
                                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded-full">
                                  Required
                                </span>
                              )}
                            </div>
                          </div>
                          <Switch
                            checked={category.checked}
                            onCheckedChange={() => toggleCategory(category.id)}
                            disabled={category.required}
                            aria-label={`Toggle ${category.name}`}
                          />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{category.description}</p>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="about" className="space-y-6">
                    <div className="prose dark:prose-invert max-w-none">
                      <h3>What Are Cookies</h3>
                      <p>
                        Cookies are small text files that are placed on your computer or mobile device when you visit a
                        website. They are widely used to make websites work more efficiently and provide information to
                        the owners of the site.
                      </p>

                      <h3>How We Use Cookies</h3>
                      <p>We use cookies for various purposes including:</p>
                      <ul>
                        <li>Ensuring the website functions properly</li>
                        <li>Understanding how visitors interact with our website</li>
                        <li>Remembering your preferences and settings</li>
                        <li>Improving the speed and security of the site</li>
                        <li>Personalizing your experience</li>
                        <li>Measuring the effectiveness of our marketing campaigns</li>
                      </ul>

                      <h3>Your Rights Under GDPR</h3>
                      <p>
                        Under the General Data Protection Regulation (GDPR), you have the right to control what personal
                        data is collected. This includes the right to:
                      </p>
                      <ul>
                        <li>Access your personal data</li>
                        <li>Correct inaccurate personal data</li>
                        <li>Request deletion of your personal data</li>
                        <li>Restrict processing of your personal data</li>
                        <li>Object to processing of your personal data</li>
                        <li>Request transfer of your personal data</li>
                      </ul>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <CustomButton variant="outline" onClick={rejectNonEssentialCookies} className="order-2 sm:order-1">
                    Reject Non-Essential
                  </CustomButton>
                  <div className="flex gap-3 order-1 sm:order-2">
                    <CustomButton variant="outline" onClick={() => setShowPreferences(false)}>
                      Cancel
                    </CustomButton>
                    <CustomButton variant="default" onClick={() => savePreferences()} animationType="shine">
                      Save Preferences
                    </CustomButton>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Add TypeScript declaration for window object
declare global {
  interface Window {
    _disableAnalytics?: boolean
  }
}
