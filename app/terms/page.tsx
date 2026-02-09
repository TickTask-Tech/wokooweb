import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'TickTask Terms of Service. Rules and guidelines for using our cleaning services platform and app.',
}

const lastUpdated = '2026-02-09'

const sections: { title: string; content: string }[] = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing and using the TickTask mobile application ("App"), this website, and services provided by Ticktask Technologies Limited ("Company", "we", "us", or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.

These Terms apply to all users of the App and website, including but not limited to clients who request cleaning services ("Clients") and service providers who offer services ("Workers" or "Cleaners").`,
  },
  {
    title: '2. Description of Service',
    content: `TickTask is a platform that connects Clients with professional cleaners and workers to facilitate on-demand cleaning and home maintenance services. We provide a marketplace where Clients can book services and Workers can offer their services.

The Company acts as an intermediary platform and does not directly provide the cleaning services. The actual services are provided by independent Workers who are not employees of the Company.`,
  },
  {
    title: '3. User Accounts',
    content: `To use certain features of the App, you must register for an account. You agree to:
• Provide accurate, current, and complete information during registration
• Maintain and update your account information to keep it accurate
• Maintain the security of your account credentials
• Accept responsibility for all activities that occur under your account
• Notify us immediately of any unauthorized use of your account

You must be at least 18 years old to create an account and use our services.`,
  },
  {
    title: '4. Service Bookings and Payments',
    content: `When booking a service:
• Clients agree to pay the fees displayed at the time of booking
• Payment is processed securely through our payment partners
• All fees are in Kenyan Shillings (KES) unless otherwise stated
• Refunds are subject to our cancellation policy

Workers set their own service rates, and the Company may charge a platform fee. The total amount displayed to Clients includes all applicable fees.`,
  },
  {
    title: '5. Cancellation Policy',
    content: `Cancellation policies may vary by service type:
• Clients may cancel bookings subject to the cancellation policy displayed at booking
• Cancellation fees may apply if cancellation occurs within a specified time before the scheduled service
• Workers may cancel bookings but may be subject to penalties for repeated cancellations
• Refunds, if applicable, will be processed according to our refund policy`,
  },
  {
    title: '6. User Conduct',
    content: `You agree not to:
• Use the App or website for any illegal or unauthorized purpose
• Violate any laws in your jurisdiction
• Infringe upon the rights of others
• Transmit any harmful code, viruses, or malicious software
• Harass, abuse, or harm other users
• Impersonate any person or entity
• Interfere with or disrupt the App, website, or servers
• Collect or store personal data about other users without permission
• Use automated systems to access the App or website without authorization`,
  },
  {
    title: '7. Worker Responsibilities',
    content: `Workers agree to:
• Provide services in a professional and timely manner
• Maintain appropriate qualifications where required
• Comply with all applicable laws and regulations
• Treat Clients with respect and professionalism
• Complete services as agreed upon with Clients
• Respond promptly to service requests and communications`,
  },
  {
    title: '8. Client Responsibilities',
    content: `Clients agree to:
• Provide accurate information about service requirements
• Ensure a safe working environment for Workers
• Pay for services as agreed
• Treat Workers with respect and professionalism
• Provide accurate address and contact information
• Be available or provide access for scheduled services`,
  },
  {
    title: '9. Ratings and Reviews',
    content: `Users may rate and review services and Workers. Reviews must be:
• Honest and based on actual experience
• Free from offensive, defamatory, or inappropriate content
• Compliant with our community guidelines

We reserve the right to remove reviews that violate these guidelines.`,
  },
  {
    title: '10. Intellectual Property',
    content: `All content, features, and functionality of the App and website, including but not limited to text, graphics, logos, icons, images, and software, are the property of Ticktask Technologies Limited or its licensors and are protected by copyright, trademark, and other intellectual property laws.

You may not reproduce, distribute, modify, or create derivative works of any content from the App or website without our express written permission.`,
  },
  {
    title: '11. Limitation of Liability',
    content: `To the maximum extent permitted by law:
• The Company provides the App and website "as is" without warranties of any kind
• We are not liable for any indirect, incidental, special, or consequential damages
• Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim
• We are not responsible for the quality, safety, or legality of services provided by Workers
• We are not liable for disputes between Clients and Workers`,
  },
  {
    title: '12. Indemnification',
    content: `You agree to indemnify and hold harmless Ticktask Technologies Limited, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
• Your use of the App or website
• Your violation of these Terms
• Your violation of any rights of another party
• Services you provide or receive through the App`,
  },
  {
    title: '13. Termination',
    content: `We may terminate or suspend your account and access to the App at any time, with or without cause or notice, for any reason including:
• Violation of these Terms
• Fraudulent, abusive, or illegal activity
• Extended periods of inactivity
• At our sole discretion

You may terminate your account at any time by contacting us or using account deletion features in the App.`,
  },
  {
    title: '14. Changes to Terms',
    content: `We reserve the right to modify these Terms at any time. We will notify users of material changes by:
• Posting the updated Terms on this website and in the App
• Sending notifications via email or in-app messages
• Updating the "Last Updated" date

Your continued use of our services after changes become effective constitutes acceptance of the modified Terms.`,
  },
  {
    title: '15. Governing Law',
    content: `These Terms shall be governed by and construed in accordance with the laws of the Republic of Kenya, without regard to its conflict of law provisions.

Any disputes arising from these Terms or your use of the App or website shall be subject to the exclusive jurisdiction of the courts of Kenya.`,
  },
  {
    title: '16. Contact Information',
    content: `If you have any questions about these Terms, please contact us:

Ticktask Technologies Limited
Email: support@ticktask.co.ke
Phone: 011 843 3651
Address: Nairobi, Kenya`,
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

export default function TermsPage() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container-custom section-padding">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-primary-600 hover:text-primary-700 text-sm font-medium mb-6 inline-block">
            ← Back to home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-gray-500 mb-10">Last Updated: {lastUpdated}</p>
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
