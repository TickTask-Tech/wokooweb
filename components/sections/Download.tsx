'use client'

import { motion } from 'framer-motion'
import { Apple, Smartphone, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Download() {
  return (
    <section id="download" className="section-padding bg-gradient-to-br from-primary-500 to-primary-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4 sm:px-0">
              Download TickTask App Today
            </h2>
            <p className="text-lg sm:text-xl text-primary-100 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
              Get instant access to professional cleaning services. Book,
              track, and manage everything from your phone.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8 px-4 sm:px-0">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-900 transition-colors font-semibold"
              >
                <Apple className="h-6 w-6 mr-3" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg">App Store</div>
                </div>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-900 transition-colors font-semibold"
              >
                <Smartphone className="h-6 w-6 mr-3" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg">Google Play</div>
                </div>
              </a>
            </div>

            {/* Features List */}
            <ul className="space-y-3">
              {[
                'Book services in under 2 minutes',
                'Track your worker in real-time',
                'Chat directly with professionals',
                'Secure in-app payments',
                'Rate and review services',
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <span className="text-primary-100">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto max-w-sm">
              {/* Phone Frame */}
              <div className="relative bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-4 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm font-semibold">TickTask</div>
                      <div className="text-xs">9:41 AM</div>
                    </div>
                    <div className="text-2xl font-bold">Book a Service</div>
                  </div>

                  {/* App Content */}
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-primary-50 rounded-xl p-4 text-center">
                        <div className="text-3xl mb-2">🏠</div>
                        <div className="text-sm font-semibold text-gray-700">
                          Home
                        </div>
                      </div>
                      <div className="bg-primary-50 rounded-xl p-4 text-center">
                        <div className="text-3xl mb-2">🏢</div>
                        <div className="text-sm font-semibold text-gray-700">
                          Office
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                        TickTask
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded w-full" />
                      <div className="h-3 bg-gray-200 rounded w-3/4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 bg-white text-primary-600 px-6 py-3 rounded-full shadow-xl font-semibold"
              >
                Available Now
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

