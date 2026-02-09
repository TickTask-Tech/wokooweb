'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Mwangi',
    location: 'Nairobi',
    rating: 5,
    text: 'TickTask has made my life so much easier! The workers are professional, punctual, and do an amazing job. Highly recommend!',
    service: 'Standard Home Cleaning',
  },
  {
    name: 'James Ochieng',
    location: 'Mombasa',
    rating: 5,
    text: 'Used TickTask for office cleaning. The service was excellent and the app makes booking so convenient. Will definitely use again.',
    service: 'Office Cleaning',
  },
  {
    name: 'Amina Hassan',
    location: 'Kisumu',
    rating: 5,
    text: 'The deep cleaning service exceeded my expectations. My house has never been this clean! The workers were thorough and respectful.',
    service: 'Deep Cleaning',
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-gray-50">
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
            What Our <span className="gradient-text">Customers</span> Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Don't just take our word for it. See what our satisfied customers
            have to say about TickTask.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary-200" />

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-primary-500 text-primary-500"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-100 pt-4">
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">{testimonial.location}</div>
                <div className="text-xs text-primary-600 mt-1">
                  {testimonial.service}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

