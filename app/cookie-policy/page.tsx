import Link from "next/link"
import PageHeader from "@/components/page-header"

export default function CookiePolicyPage() {
  return (
    <main>
      <PageHeader
        title="Cookie Policy"
        description="Learn about how we use cookies and similar technologies on our website."
      />

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose dark:prose-invert">
            <p className="text-gray-600 dark:text-gray-300">Last updated: May 8, 2023</p>

            <h2>What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website.
              They are widely used to make websites work more efficiently and provide information to the owners of the
              site. Cookies enhance user experience by allowing websites to remember your preferences and understand how
              you use different parts of a website.
            </p>

            <h2>How We Use Cookies</h2>
            <p>
              Sarxt Tech uses cookies for a variety of purposes. We use them to understand how visitors interact with
              our website, to personalize your experience, to remember your preferences, and to analyze and improve our
              website's performance.
            </p>

            <h3>Types of Cookies We Use</h3>
            <p>We use the following types of cookies on our website:</p>

            <h4>Essential Cookies</h4>
            <p>
              These cookies are necessary for the website to function properly. They enable core functionality such as
              security, network management, and account access. You may disable these by changing your browser settings,
              but this may affect how the website functions.
            </p>

            <h4>Analytics Cookies</h4>
            <p>
              These cookies help us understand how visitors interact with our website by collecting and reporting
              information anonymously. This helps us improve our website and your experience.
            </p>

            <h4>Functionality Cookies</h4>
            <p>
              These cookies enable the website to provide enhanced functionality and personalization. They may be set by
              us or by third-party providers whose services we have added to our pages.
            </p>

            <h4>Marketing Cookies</h4>
            <p>
              These cookies are used to track visitors across websites. The intention is to display ads that are
              relevant and engaging for the individual user and thereby more valuable for publishers and third-party
              advertisers.
            </p>

            <h2>Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of
              the website and deliver advertisements on and through the website. These may include:
            </p>
            <ul>
              <li>
                <strong>Google Analytics:</strong> We use Google Analytics to help us understand how our website is
                being used so that we can improve user experience. Google Analytics may set cookies in your browser to
                track your behavior on our website.
              </li>
              <li>
                <strong>Social Media:</strong> We may use social media buttons and/or plugins on this site that allow
                you to connect with your social network in various ways. For these to work, social media sites including
                Facebook, Twitter, and LinkedIn, will set cookies through our site which may be used to enhance your
                profile on their site or contribute to the data they hold for various purposes outlined in their
                respective privacy policies.
              </li>
              <li>
                <strong>Marketing Services:</strong> We may use marketing services such as Google AdWords, Facebook
                Pixel, and others to deliver targeted advertisements to you on other websites.
              </li>
            </ul>

            <h2>Managing Cookies</h2>
            <p>
              Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies,
              or to alert you when cookies are being sent. The methods for doing so vary from browser to browser, and
              from version to version. However, you can usually find information about how to manage your cookie
              settings in the browser's help section.
            </p>

            <p>Here are links to instructions for managing cookies in some popular browsers:</p>
            <ul>
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>

            <p>
              Please note that restricting cookies may impact the functionality of our website. If you choose to disable
              cookies, some features of the site may not work as intended.
            </p>

            <h2>Do Not Track Signals</h2>
            <p>
              Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have your
              online activities tracked. At this time, we do not respond to browser "Do Not Track" signals, but we do
              provide you the option to opt out of interest-based advertising through the methods described above.
            </p>

            <h2>Changes to Our Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new
              Cookie Policy on this page and updating the "Last updated" date at the top of this page.
            </p>
            <p>
              You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy
              are effective when they are posted on this page.
            </p>

            <h2>Contact Us</h2>
            <p>If you have any questions about our Cookie Policy, please contact us at:</p>
            <p>
              Sarxt Tech
              <br />
              123 Tech Avenue, Innovation District, CA 94103
              <br />
              info@sarxttech.com
              <br />
              +1 (555) 123-4567
            </p>

            <div className="mt-12">
              <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
