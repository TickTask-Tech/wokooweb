'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Download, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { socialLinks } from './SocialIcons'

// 把你的 logo 放到 wokooweb/public/logo.png（或 logo.svg），顶栏和页脚会自动使用
const LOGO_PATH = '/logo.png'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/#services', label: 'Services' },
    { href: '/#how-it-works', label: 'How It Works' },
    { href: '/about', label: 'About Us' },
    { href: '/#contact', label: 'Contact' },
  ]
  const whatsappUrl = 'https://wa.me/254118433651'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm border-b border-gray-100' : 'bg-white/90 backdrop-blur-md'
      }`}
    >
      <nav className="container-custom">
        <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-0">
          {/* Logo + 标题 */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0"
            aria-label="TickTask Home"
          >
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg">
              <Image
                src={LOGO_PATH}
                alt="TickTask"
                fill
                className="object-cover object-center"
                sizes="40px"
                priority
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">TickTask</span>
          </Link>

          {/* Desktop: Nav + Actions */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2 sm:gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 flex items-center justify-center rounded-lg text-gray-500 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp</span>
            </a>
            <Link
              href="/#download"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-primary-500 hover:bg-primary-600 shadow-sm hover:shadow transition-all"
            >
              <Download className="h-4 w-4" />
              <span>Download App</span>
              <span className="text-primary-100 text-xs font-normal">iOS & Android</span>
            </Link>
          </div>

          {/* Mobile: Menu toggle */}
          <button
            className="md:hidden p-2.5 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-gray-100 bg-gray-50/80"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-white rounded-xl font-medium transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-3 flex flex-col gap-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-[#25D366] bg-[#25D366]/10 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </a>
                  <Link
                    href="/#download"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary-500 text-white font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Download className="h-4 w-4" />
                    Download App
                    <span className="text-primary-100 text-xs font-normal">(iOS & Android)</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
