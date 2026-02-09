'use client'

import { motion } from 'framer-motion'
import { Download, Search, Calendar, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: Download,
    title: 'Download the App',
    description:
      'Get the TickTask app from App Store or Google Play. Sign up in seconds with just your phone number.',
  },
  {
    icon: Search,
    title: 'Choose Your Service',
    description:
      'Browse our services and select what you need. Standard cleaning, deep cleaning, office cleaning, and more.',
  },
  {
    icon: Calendar,
    title: 'Schedule & Book',
    description:
      'Pick a date and time that works for you. Add your address and any special instructions.',
  },
  {
    icon: CheckCircle,
    title: 'Get It Done',
    description:
      'Our verified professional arrives on time, completes the job, and you rate the service. Simple!',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4 sm:px-0">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Getting your space cleaned has never been easier. Four simple steps
            to a spotless home or office.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary-100 text-primary-600">
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line (Desktop Only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-transparent -z-10" style={{ width: 'calc(100% - 2rem)' }} />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

