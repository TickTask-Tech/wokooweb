import { Metadata } from 'next'
import { Handshake, TrendingUp, Users, Shield, BarChart, Headphones } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Partners - Partner with TickTask',
  description: 'Partner with TickTask to offer cleaning services to your customers. Grow your business with our platform.',
}

const benefits = [
  {
    icon: TrendingUp,
    title: 'Grow Your Business',
    description: 'Access a larger customer base and increase your service bookings.',
  },
  {
    icon: Users,
    title: 'Manage Your Team',
    description: 'Use our platform to manage workers, assignments, and operations efficiently.',
  },
  {
    icon: Shield,
    title: 'Trusted Platform',
    description: 'Leverage our verified system to build trust with your customers.',
  },
  {
    icon: BarChart,
    title: 'Analytics & Insights',
    description: 'Get detailed analytics to understand your business performance.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Receive dedicated support from our partnership team.',
  },
  {
    icon: Handshake,
    title: 'Flexible Partnership',
    description: 'Choose a partnership model that works best for your business.',
  },
]

export default function PartnersPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-500 to-secondary-700 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Handshake className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Partner with TickTask
            </h1>
            <p className="text-xl text-secondary-100 mb-8">
              Join us in revolutionizing cleaning services in Kenya. Grow your
              business with our platform and reach more customers.
            </p>
            <Link href="#contact" className="btn-primary bg-white text-secondary-600 hover:bg-gray-100">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Partner with <span className="gradient-text">TickTask</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide the tools, platform, and support you need to grow your
              cleaning business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-secondary-100 text-secondary-600 flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Partnership <span className="gradient-text">Models</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the partnership model that fits your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Model 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Service Provider Partnership
              </h3>
              <p className="text-gray-600 mb-6">
                Perfect for established cleaning companies looking to expand
                their reach.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <span className="text-primary-500 mt-1">✓</span>
                  <span className="text-gray-700">
                    Access to our customer base
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-500 mt-1">✓</span>
                  <span className="text-gray-700">
                    Use our platform for bookings
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-500 mt-1">✓</span>
                  <span className="text-gray-700">
                    Manage your team through our system
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-500 mt-1">✓</span>
                  <span className="text-gray-700">
                    Marketing and promotional support
                  </span>
                </li>
              </ul>
            </div>

            {/* Model 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Corporate Partnership
              </h3>
              <p className="text-gray-600 mb-6">
                Ideal for businesses that need regular cleaning services for
                their facilities.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <span className="text-primary-500 mt-1">✓</span>
                  <span className="text-gray-700">
                    Dedicated account management
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-500 mt-1">✓</span>
                  <span className="text-gray-700">
                    Customized service packages
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-500 mt-1">✓</span>
                  <span className="text-gray-700">
                    Volume discounts and special rates
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-500 mt-1">✓</span>
                  <span className="text-gray-700">
                    Priority scheduling and support
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ready to <span className="gradient-text">Partner?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can work together to grow your business.
            </p>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-6">
                Contact our partnerships team to learn more about our
                partnership opportunities.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:support@ticktask.co.ke"
                  className="block text-primary-600 hover:text-primary-700 font-semibold text-lg"
                >
                  support@ticktask.co.ke
                </a>
                <a
                  href="tel:+254118433651"
                  className="block text-primary-600 hover:text-primary-700 font-semibold text-lg"
                >
                  011 843 3651
                </a>
                <a
                  href="https://wa.me/254118433651"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary-600 hover:text-primary-700 font-semibold text-lg"
                >
                  WhatsApp
                </a>
              </div>

              <Link
                href="/#contact"
                className="btn-primary mt-8 inline-block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

