import Link from "next/link"
import PageHeader from "@/components/page-header"

export default function TermsOfServicePage() {
  return (
    <main>
      <PageHeader title="Terms of Service" description="Please read these terms carefully before using our services." />

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose dark:prose-invert">
            <p className="text-gray-600 dark:text-gray-300">Last updated: May 1, 2023</p>

            <h2>1. Introduction</h2>
            <p>
              Welcome to Sarxt Tech ("Company", "we", "our", "us"). These Terms of Service ("Terms", "Terms of Service")
              govern your use of our website and services operated by Sarxt Tech.
            </p>
            <p>
              By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of
              the terms, then you may not access our services.
            </p>

            <h2>2. Use of Our Services</h2>
            <p>
              Our services are designed to provide technology solutions including web development, mobile applications,
              software engineering, network engineering, and related services. You agree to use our services only for
              lawful purposes and in accordance with these Terms.
            </p>

            <h3>2.1 Account Registration</h3>
            <p>
              Some of our services may require you to create an account. You are responsible for maintaining the
              confidentiality of your account credentials and for all activities that occur under your account. You
              agree to notify us immediately of any unauthorized use of your account.
            </p>

            <h3>2.2 Accurate Information</h3>
            <p>
              You agree to provide accurate, current, and complete information during the registration process and to
              update such information to keep it accurate, current, and complete.
            </p>

            <h2>3. Intellectual Property</h2>
            <p>
              The content, features, and functionality of our services, including but not limited to text, graphics,
              logos, icons, images, audio clips, digital downloads, data compilations, and software, are the property of
              Sarxt Tech or its licensors and are protected by copyright, trademark, and other intellectual property
              laws.
            </p>

            <h3>3.1 Limited License</h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use our
              services for your personal or internal business purposes.
            </p>

            <h3>3.2 Restrictions</h3>
            <p>You agree not to:</p>
            <ul>
              <li>Modify, copy, or create derivative works based on our services</li>
              <li>Reverse engineer, decompile, or disassemble any portion of our services</li>
              <li>Remove any copyright, trademark, or other proprietary notices</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              <li>Use our services for any unlawful purpose or in violation of any applicable regulations</li>
            </ul>

            <h2>4. User Content</h2>
            <p>
              Our services may allow you to post, link, store, share, and otherwise make available certain information,
              text, graphics, videos, or other material ("User Content"). You are responsible for the User Content that
              you post, including its legality, reliability, and appropriateness.
            </p>

            <h3>4.1 License to User Content</h3>
            <p>
              By posting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce,
              modify, adapt, publish, translate, distribute, and display such content in connection with providing our
              services.
            </p>

            <h2>5. Payment Terms</h2>
            <p>
              Certain services may require payment. By using such services, you agree to pay all fees and charges
              associated with your account on a timely basis and according to the fees schedule and terms displayed to
              you at the time of purchase.
            </p>

            <h3>5.1 Billing</h3>
            <p>
              We use third-party payment processors to bill you through a payment account linked to your account. The
              processing of payments will be subject to the terms, conditions, and privacy policies of the payment
              processor in addition to these Terms.
            </p>

            <h2>6. Termination</h2>
            <p>
              We may terminate or suspend your access to our services immediately, without prior notice or liability,
              for any reason whatsoever, including without limitation if you breach the Terms.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              In no event shall Sarxt Tech, nor its directors, employees, partners, agents, suppliers, or affiliates, be
              liable for any indirect, incidental, special, consequential, or punitive damages, including without
              limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul>
              <li>Your access to or use of or inability to access or use our services</li>
              <li>Any conduct or content of any third party on our services</li>
              <li>Any content obtained from our services</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>

            <h2>8. Disclaimer</h2>
            <p>
              Our services are provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or
              implied, regarding the operation or availability of our services.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the United States, without
              regard to its conflict of law provisions.
            </p>

            <h2>10. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
              is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
            </p>

            <h2>11. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
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
