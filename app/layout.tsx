import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#10B981' },
    { media: '(prefers-color-scheme: dark)', color: '#059669' },
  ],
}

export const metadata: Metadata = {
  title: {
    default: 'TickTask - Professional Cleaning Services in Kenya',
    template: '%s | TickTask',
  },
  description: 'Book professional cleaning services in Kenya. Standard cleaning, deep cleaning, office cleaning, post-construction cleanup, and fumigation services. Download our app today!',
  keywords: [
    'cleaning services Kenya',
    'home cleaning',
    'office cleaning',
    'deep cleaning',
    'fumigation Kenya',
    'post construction cleaning',
    'cleaning app Kenya',
    'professional cleaners',
  ],
  authors: [{ name: 'TickTask' }],
  creator: 'TickTask',
  publisher: 'TickTask',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ticktask.co.ke'), // 替换为实际域名
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://ticktask.co.ke',
    siteName: 'TickTask',
    title: 'TickTask - Professional Cleaning Services in Kenya',
    description: 'Book professional cleaning services in Kenya. Download our app and get your space cleaned today!',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TickTask - Professional Cleaning Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TickTask - Professional Cleaning Services in Kenya',
    description: 'Book professional cleaning services in Kenya. Download our app today!',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'TickTask',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-192.png" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
