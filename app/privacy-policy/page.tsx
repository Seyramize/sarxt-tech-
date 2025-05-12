import Link from "next/link"
import PageHeader from "@/components/page-header"

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageHeader
        title="Privacy Policy"
        description="Learn about how we collect, use, and protect your personal information."
      />

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose dark:prose-invert">
            <p className="text-gray-600 dark:text-gray-300">Last updated: May 1, 2023</p>

            <h2>Introduction</h2>
            <p>
              Sarxt Tech ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when you visit our website or use our
              services.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
              please do not access the site or use our services.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>

            <h3>Personal Data</h3>
            <p>
              Personally identifiable information, such as your name, email address, telephone number, and company name,
              that you voluntarily give to us when you register with our website or when you choose to participate in
              various activities related to our website and services.
            </p>

            <h3>Derivative Data</h3>
            <p>
              Information our servers automatically collect when you access our website, such as your IP address,
              browser type, operating system, access times, and the pages you have viewed directly before and after
              accessing the website.
            </p>

            <h3>Financial Data</h3>
            <p>
              Financial information, such as data related to your payment method (e.g., valid credit card number, card
              brand, expiration date) that we may collect when you purchase, order, return, exchange, or request
              information about our services.
            </p>

            <h2>Use of Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized
              experience. Specifically, we may use information collected about you via the website to:
            </p>
            <ul>
              <li>Create and manage your account.</li>
              <li>Process your transactions.</li>
              <li>Send you administrative information, such as updates, security alerts, and support messages.</li>
              <li>Respond to your comments, questions, and requests.</li>
              <li>
                Deliver targeted advertising, newsletters, and other information regarding promotions and our website to
                you.
              </li>
              <li>Monitor and analyze usage and trends to improve your experience with our website and services.</li>
              <li>Notify you of updates to our website and services.</li>
              <li>Resolve disputes and troubleshoot problems.</li>
              <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
            </ul>

            <h2>Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain situations. Your information may be
              disclosed as follows:
            </p>

            <h3>By Law or to Protect Rights</h3>
            <p>
              If we believe the release of information about you is necessary to respond to legal process, to
              investigate or remedy potential violations of our policies, or to protect the rights, property, and safety
              of others, we may share your information as permitted or required by any applicable law, rule, or
              regulation.
            </p>

            <h3>Third-Party Service Providers</h3>
            <p>
              We may share your information with third parties that perform services for us or on our behalf, including
              payment processing, data analysis, email delivery, hosting services, customer service, and marketing
              assistance.
            </p>

            <h3>Marketing Communications</h3>
            <p>
              With your consent, or with an opportunity for you to withdraw consent, we may share your information with
              third parties for marketing purposes.
            </p>

            <h3>Business Transfers</h3>
            <p>
              If we or our subsidiaries are involved in a merger, acquisition, or asset sale, your information may be
              transferred as part of that transaction.
            </p>

            <h2>Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal
              information. While we have taken reasonable steps to secure the personal information you provide to us,
              please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method
              of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <h2>Contact Us</h2>
            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
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
