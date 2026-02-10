'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Sparkles, Shield, Clock } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  const features = [
    { icon: Clock, text: 'Quick Booking' },
    { icon: Shield, text: 'Verified Workers' },
    { icon: Sparkles, text: 'Quality Guaranteed' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20 pb-12 sm:pb-20">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary-200 opacity-20 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary-200 opacity-20 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4 sm:px-0">
                Professional{' '}
                <span className="gradient-text">Cleaning Services</span> in
                Kenya
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0"
            >
              Book trusted, verified cleaning professionals for your home or
              office. Fast, reliable, and affordable cleaning services at your
              fingertips.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Link href="/#download" className="btn-primary group">
                Download App
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/#services" className="btn-secondary">
                View Services
              </Link>
            </motion.div>

            {/* Quick Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <Icon className="h-5 w-5 text-primary-500" />
                    <span className="text-sm font-medium">{feature.text}</span>
                  </div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - App Preview (real app screenshot) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto max-w-[272px]">
              <div className="relative bg-gray-900 rounded-[2.75rem] p-2.5 shadow-2xl ring-2 ring-gray-800/40">
                <div className="rounded-[2.25rem] overflow-hidden bg-white shadow-inner">
                  <Image
                    src="/images/app-home-screenshot.png"
                    alt="TickTask app - Home screen with services in Nairobi"
                    width={390}
                    height={844}
                    className="w-full h-auto object-cover object-top"
                    priority
                    sizes="(max-width: 1024px) 0px, 272px"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

