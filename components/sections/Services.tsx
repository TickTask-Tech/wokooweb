'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    image: '/images/services/standard_home_cleaning.png',
    title: 'Standard Home Cleaning',
    description:
      'Regular cleaning for bedrooms, bathrooms, and living areas. Perfect for weekly or bi-weekly maintenance.',
    duration: '2-4 hours',
    price: 'From KES 500/hour',
    slug: 'standard_home_cleaning',
  },
  {
    image: '/images/services/deep_cleaning.png',
    title: 'Deep Cleaning',
    description:
      'Thorough deep cleaning including kitchen, bathroom, and hard-to-reach areas. Perfect for spring cleaning or special occasions.',
    duration: '4-8 hours',
    price: 'From KES 800/hour',
    slug: 'deep_cleaning',
  },
  {
    image: '/images/services/office_cleaning.png',
    title: 'Office Cleaning',
    description:
      'Professional cleaning services for small offices and workspaces. Keep your workplace clean and productive.',
    duration: '2-6 hours',
    price: 'From KES 700/hour',
    slug: 'office_cleaning',
  },
  {
    image: '/images/services/post_construction.png',
    title: 'Post Construction',
    description:
      'Specialized cleanup to remove construction residues, dust, and debris. Leave your space completely clean and ready to use.',
    duration: '5-10 hours',
    price: 'From KES 15,000',
    slug: 'post_construction',
  },
  {
    image: '/images/services/fumigation.png',
    title: 'Fumigation',
    description:
      'Effective pest control to eliminate general household pests and protect your entire living space.',
    duration: '2-4 hours',
    price: 'From KES 6,000',
    slug: 'fumigation',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
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
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Professional cleaning services tailored to your needs. From regular
            maintenance to specialized deep cleaning.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
          {services.map((service, index) => {
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-100 hover:border-primary-300 transition-all duration-300 hover:shadow-xl"
              >
                {/* Service Image - Square Icon */}
                <div className="relative w-20 h-20 mx-auto mb-6 bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={80}
                    height={80}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-medium mr-2">Duration:</span>
                      {service.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-medium mr-2">Price:</span>
                      <span className="text-primary-600 font-semibold">
                        {service.price}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-primary-500/0 transition-all duration-300 pointer-events-none" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

