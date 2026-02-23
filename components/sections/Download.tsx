'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Apple, Smartphone, ArrowRight, X } from 'lucide-react'

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.ticktask.client&pcampaignid=web_share'

export default function Download() {
  const [showIosComingSoon, setShowIosComingSoon] = useState(false)

  return (
    <section id="download" className="section-padding bg-gradient-to-br from-primary-500 to-primary-700 text-white relative overflow-hidden">
      {/* iOS Coming Soon Modal */}
      <AnimatePresence>
        {showIosComingSoon && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
              onClick={() => setShowIosComingSoon(false)}
              aria-hidden="true"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
                className="pointer-events-auto w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8 text-center relative">
                  <button
                    type="button"
                    onClick={() => setShowIosComingSoon(false)}
                    className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                  <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-gray-900 flex items-center justify-center">
                    <Apple className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    TickTask for iOS
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We&apos;re working on it—thank you for your patience. The iOS version of TickTask is coming soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowIosComingSoon(false)}
                    className="mt-6 w-full py-3 px-4 rounded-xl bg-primary-500 text-white font-semibold hover:bg-primary-600 transition-colors"
                  >
                    Got it
                  </button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

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
              <button
                type="button"
                onClick={() => setShowIosComingSoon(true)}
                className="inline-flex items-center justify-center bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-900 transition-colors font-semibold cursor-pointer"
              >
                <Apple className="h-6 w-6 mr-3" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg">App Store</div>
                </div>
              </button>

              <a
                href={PLAY_STORE_URL}
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

          {/* Right Content - Real app screenshot in phone frame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto max-w-[300px]">
              <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl ring-4 ring-white/10">
                <div className="rounded-[2.25rem] overflow-hidden bg-white shadow-inner">
                  <Image
                    src="/images/app-home-screenshot.png"
                    alt="TickTask app - Book cleaning services in Nairobi"
                    width={390}
                    height={844}
                    className="w-full h-auto object-cover object-top"
                    sizes="(max-width: 1024px) 0px, 300px"
                  />
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

