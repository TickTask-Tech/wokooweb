'use client'

import { motion } from 'framer-motion'
import {
  Shield,
  Clock,
  MapPin,
  MessageCircle,
  Star,
  CreditCard,
} from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Verified Professionals',
    description:
      'All workers are background-checked and verified. Your safety and security are our top priority.',
  },
  {
    icon: Clock,
    title: 'On-Time Service',
    description:
      'Our professionals arrive on time, every time. Track their location in real-time through the app.',
  },
  {
    icon: MessageCircle,
    title: 'Direct Communication',
    description:
      'Chat directly with your assigned worker. Coordinate details, ask questions, and stay informed.',
  },
  {
    icon: Star,
    title: 'Quality Guaranteed',
    description:
      'Not satisfied? We guarantee quality work. Rate and review to help us maintain high standards.',
  },
  {
    icon: CreditCard,
    title: 'Secure Payments',
    description:
      'Pay securely through the app. Multiple payment options available. Your financial data is protected.',
  },
  {
    icon: MapPin,
    title: 'Real-Time Tracking',
    description:
      'Track your worker\'s location in real-time. Know exactly when they\'ll arrive at your location.',
  },
]

export default function Features() {
  return (
    <section className="section-padding bg-white">
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
            Why Choose <span className="gradient-text">TickTask</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            We make cleaning services simple, reliable, and convenient. Here's
            what sets us apart.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-100 text-primary-600 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                    <Icon className="h-7 w-7" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

