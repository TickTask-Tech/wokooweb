import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Mail, Phone, MessageCircle, Sparkles, Users, Shield, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about TickTask — professional cleaning services in Kenya. We connect you with trusted cleaners for home, office, and more. Based in Nairobi.',
}

export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About TickTask</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              We’re on a mission to make professional cleaning simple, reliable, and accessible across Kenya — one space at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Ticktask Technologies Limited</strong> operates <strong>TickTask</strong>. We provide professional cleaning services to households and businesses across Kenya and are based in <strong>Nairobi</strong>.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We offer standard home cleaning, deep cleaning, office cleaning, post-construction cleanup, and fumigation — with transparent pricing and support when you need it.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">What We Offer</h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            From quick tidy-ups to full deep cleans and specialist services.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Home cleaning', desc: 'Regular and one-off home cleaning to keep your space fresh.' },
              { title: 'Deep cleaning', desc: 'Thorough cleans for move-in, move-out, or seasonal refresh.' },
              { title: 'Office cleaning', desc: 'Commercial cleaning for offices and workspaces.' },
              { title: 'Post-construction', desc: 'Clean-up after building or renovation work.' },
              { title: 'Fumigation', desc: 'Pest control and fumigation services when you need them.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">What We Believe</h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            These values guide how we run TickTask and work with clients and cleaners.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Trust & safety</h3>
              <p className="text-gray-600 text-sm">We vet cleaners and support both clients and workers so everyone can rely on a fair, safe experience.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">People first</h3>
              <p className="text-gray-600 text-sm">We build for real people — busy families and businesses — and for the professionals who do the work.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 text-primary-600 mb-4">
                <Sparkles className="h-7 w-7" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Simple & clear</h3>
              <p className="text-gray-600 text-sm">Booking, pricing, and communication are straightforward so you can focus on your space, not on admin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <Heart className="h-12 w-12 text-primary-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in touch</h2>
            <p className="text-gray-600 mb-8">
              Questions about our services or want to work with us? We’d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <a
                href="mailto:support@ticktask.co.ke"
                className="inline-flex items-center justify-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
              >
                <Mail className="h-5 w-5" />
                <span>support@ticktask.co.ke</span>
              </a>
              <a
                href="tel:+254118433651"
                className="inline-flex items-center justify-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
              >
                <Phone className="h-5 w-5" />
                <span>+254(0) 118 433 651</span>
              </a>
              <a
                href="https://wa.me/254118433651"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
            </div>
            <p className="mt-4 text-gray-500 text-sm flex items-center justify-center gap-1">
              <MapPin className="h-4 w-4" />
              China Center, Ngong Road, Nairobi
            </p>
            <Link href="/#contact" className="btn-primary mt-8 inline-block">
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* Back to home */}
      <section className="pb-16">
        <div className="container-custom text-center">
          <Link href="/" className="text-primary-600 hover:text-primary-700 font-medium">
            ← Back to home
          </Link>
        </div>
      </section>
    </div>
  )
}
