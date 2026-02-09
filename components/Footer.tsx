import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, Music } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/ticktaskapp', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/TickTask_Kenya', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/ticktask_kenya/', label: 'Instagram' },
    { icon: Music, href: 'https://www.tiktok.com/@tick_task', label: 'TikTok' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  const footerLinks = {
    company: [
      { href: '/#services', label: 'Services' },
      { href: '/#how-it-works', label: 'How It Works' },
      { href: '/careers', label: 'Careers' },
      { href: '/partners', label: 'Partners' },
    ],
    legal: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
      { href: '/about', label: 'About Us' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500 text-white font-bold text-xl">
                T
              </div>
              <span className="text-2xl font-bold text-white">TickTask</span>
            </div>
            <p className="text-sm mb-4">
              Professional cleaning services in Kenya. Book, track, and manage your cleaning needs with ease.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-primary-500 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary-400" />
                <a
                  href="mailto:support@ticktask.co.ke"
                  className="hover:text-primary-400 transition-colors"
                >
                  support@ticktask.co.ke
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary-400" />
                <a
                  href="tel:+254700000000"
                  className="hover:text-primary-400 transition-colors"
                >
                  +254 700 000 000
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} TickTask. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-4 md:mt-0">
            Made with ❤️ in Kenya
          </p>
        </div>
      </div>
    </footer>
  )
}

