import { Metadata } from 'next'
import { Briefcase, MapPin, Clock, DollarSign, Users, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Careers - Join TickTask Team',
  description: 'Join TickTask as a professional cleaner. Flexible hours, competitive pay, and a supportive team. Apply today!',
}

const benefits = [
  'Flexible working hours',
  'Competitive hourly rates',
  'Regular work opportunities',
  'Supportive team environment',
  'Professional development',
  'Safe working conditions',
]

const requirements = [
  'Previous cleaning experience preferred',
  'Reliable and punctual',
  'Good communication skills',
  'Valid ID and references',
  'Ability to work independently',
  'Physical fitness for cleaning tasks',
]

export default function CareersPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join the TickTask Team
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Become a professional cleaner and help us make Kenya cleaner, one
              space at a time.
            </p>
            <Link href="#apply" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Work with <span className="gradient-text">TickTask</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We value our workers and provide the support you need to succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <DollarSign className="h-12 w-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Competitive Pay
              </h3>
              <p className="text-gray-600">
                Earn competitive hourly rates with opportunities for bonuses and
                tips.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <Clock className="h-12 w-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Flexible Hours
              </h3>
              <p className="text-gray-600">
                Choose your own schedule and work when it suits you best.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-2xl">
              <Users className="h-12 w-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Supportive Team
              </h3>
              <p className="text-gray-600">
                Join a community of professionals who support and help each
                other.
              </p>
            </div>
          </div>

          {/* Benefits & Requirements */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Benefits
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Requirements
              </h3>
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works for Workers */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to start earning with TickTask
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Apply',
                description: 'Fill out our application form with your details and experience.',
              },
              {
                step: '2',
                title: 'Get Approved',
                description: 'We review your application and verify your credentials.',
              },
              {
                step: '3',
                title: 'Start Working',
                description: 'Receive job assignments and start earning immediately.',
              },
              {
                step: '4',
                title: 'Get Paid',
                description: 'Receive timely payments for completed work.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Ready to <span className="gradient-text">Apply?</span>
              </h2>
              <p className="text-xl text-gray-600">
                Download the TickTask Worker app and start your application today.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <Briefcase className="h-16 w-16 text-primary-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Download TickTask Worker App
              </h3>
              <p className="text-gray-600 mb-8">
                Apply directly through our worker app. Create your profile,
                upload documents, and start receiving job offers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download for iOS
                </a>
                <a
                  href="#"
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download for Android
                </a>
              </div>

              <p className="text-sm text-gray-500 mt-6">
                Or contact us at{' '}
                <a
                  href="mailto:support@ticktask.co.ke"
                  className="text-primary-600 hover:underline"
                >
                  support@ticktask.co.ke
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

