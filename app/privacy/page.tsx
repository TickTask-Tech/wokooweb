import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'TickTask Privacy Policy. How we collect, use, and protect your information when you use our app and services.',
}

const lastUpdated = '2026-03-14'

const sections: { title: string; content: string }[] = [
  {
    title: '1. Scope and Apps Covered',
    content: `This policy applies to three TickTask apps and this website:

• Client app (TickTask) — customers who book and manage home services
• Tasker app (TickTask Tasker) — workers who perform services (cleaning, etc.)
• Partner app (TickTask Partner) — referral partners and agents who promote our services`,
  },
  {
    title: '2. Permissions and Data by App',
    content: `We only collect data needed for each app. Below is what each app may access and why.

Client app (TickTask):
• Location — to set or confirm your service address and show it on a map
• Camera and photo library — to upload profile or proof photos (e.g. before/after)
• Phone — to call workers or support from the app
• Notifications — to send order updates and messages
• Data: account (name, email, phone), profile photo, payment info (via secure processors), addresses, booking and order history

Tasker app (TickTask Tasker):
• Location — to receive job locations, navigate to jobs, and share status with the platform
• Notifications — to receive assignments and order updates
• Data: account (name, email, phone), profile, assignments and job status, location when performing or updating jobs

Partner app (TickTask Partner):
• Location — only if the app uses it (e.g. for features we add later); not used for job dispatch
• Data: account (name, email, phone), referral and commission records, list of agents you manage

All apps and website:
• Internet — required to use the service
• Device information (device type, OS, app version) and usage data — to run and improve the apps
• Cookies and similar technologies (website only) — as described in the Cookies section below`,
  },
  {
    title: '3. How We Use Your Information',
    content: `We use the information we collect to:
• Provide, maintain, and improve our services
• Process transactions and send related information
• For Client app: manage bookings, show orders, and connect you with workers
• For Tasker app: assign and manage jobs, show job locations, and update order status
• For Partner app: track referrals and commissions, and support your role as a referral partner
• Send you technical notices, updates, and support messages
• Respond to your comments, questions, and requests
• Communicate with you about services, promotions, and events
• Monitor and analyze trends, usage, and activities (aggregated where possible)
• Detect, prevent, and address technical issues and fraud
• Comply with legal obligations and enforce our Terms of Service`,
  },
  {
    title: '4. Information Sharing and Disclosure',
    content: `We may share your information in the following circumstances:

Service Providers:
• With cleaners and workers to facilitate service bookings (name, contact information, service location)
• With clients to enable service delivery (worker name, contact information, ratings)
• With third-party service providers who perform services on our behalf (payment processing, data analytics, customer support)

Legal Requirements:
• When required by law or legal process
• To respond to government requests
• To protect our rights, privacy, safety, or property
• To enforce our Terms of Service

Business Transfers:
• In connection with any merger, sale of assets, or acquisition

With Your Consent:
• We may share information with your explicit consent for other purposes not described in this policy`,
  },
  {
    title: '5. Location Information',
    content: `Location is used only in the apps that need it:
• Client app — to set or confirm your service address and display it on a map
• Tasker app — to receive job addresses, navigate to jobs, and share your position when working on an order
• Partner app — only if we enable location-based features in the future (not for job dispatch)

You can turn off location in your device settings; some features may then be limited.`,
  },
  {
    title: '6. Data Security',
    content: `We implement appropriate technical and organizational security measures to protect your information, including:
• Encryption of data in transit and at rest
• Secure authentication and access controls
• Regular security assessments and updates
• Limited access to personal information on a need-to-know basis

However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.`,
  },
  {
    title: '7. Data Retention',
    content: `We retain your information for as long as necessary to:
• Provide our services to you
• Comply with legal obligations
• Resolve disputes
• Enforce our agreements

When you delete your account, we will delete or anonymize your personal information, except where we are required to retain it for legal purposes.`,
  },
  {
    title: '8. Your Rights and Choices',
    content: `You have the right to:
• Access your personal information
• Correct inaccurate or incomplete information
• Request deletion of your personal information
• Object to processing of your information
• Request restriction of processing
• Data portability (receive your data in a structured format)
• Withdraw consent where processing is based on consent

To exercise these rights, please contact us using the information provided in the "Contact Us" section below.`,
  },
  {
    title: '9. Children\'s Privacy',
    content: `Our app and services are not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us immediately. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information.`,
  },
  {
    title: '10. International Data Transfers',
    content: `Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country.

By using our app or website, you consent to the transfer of your information to these countries. We will take appropriate measures to ensure your information receives adequate protection.`,
  },
  {
    title: '11. Third-Party Links and Services',
    content: `Our app and website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party services you access through us.`,
  },
  {
    title: '12. Cookies and Tracking Technologies',
    content: `We use cookies and similar tracking technologies to:
• Remember your preferences and settings
• Analyze how you use our website
• Provide personalized content
• Improve our services

You can control cookies through your device or browser settings. However, disabling cookies may affect the functionality of our website.`,
  },
  {
    title: '13. Changes to This Privacy Policy',
    content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by:
• Posting the updated Privacy Policy on this website and in the app
• Sending notifications via email or in-app messages
• Updating the "Last Updated" date

Your continued use of our services after changes become effective constitutes acceptance of the updated Privacy Policy.`,
  },
  {
    title: '14. Contact Us',
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

Ticktask Technologies Limited
Email: support@ticktask.co.ke
Phone: +254(0) 118 433 651
Address: Nairobi, Kenya

We will respond to your inquiry within a reasonable timeframe.`,
  },
]

function LegalSection({ title, content }: { title: string; content: string }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 mb-3">{title}</h2>
      <div className="text-gray-600 whitespace-pre-line leading-relaxed">{content}</div>
    </section>
  )
}

export default function PrivacyPage() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container-custom section-padding">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-primary-600 hover:text-primary-700 text-sm font-medium mb-6 inline-block">
            ← Back to home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-500 mb-10">Last Updated: {lastUpdated}</p>
          <p className="text-gray-600 leading-relaxed mb-10">
            Ticktask Technologies Limited (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the TickTask client app (customers), the TickTask Tasker app (workers who perform services), the TickTask Partner app (referral partners who promote our services), and this website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our apps and website.
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            {sections.map((section) => (
              <LegalSection key={section.title} title={section.title} content={section.content} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
