import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { MapPin, Phone, Clock, Star, Navigation } from 'lucide-react'

const Location = () => {
  return (
    <>
      <Head>
        <title>Find Us | Best Restaurant Near MMU & Mutiara Ville Cyberjaya</title>
        <meta
          name="description"
          content="Visit Habebee Lounge in Cyberjaya, conveniently located near MMU, Mutiara Ville, and the hospital. Enjoy the best food in the area today!"
        />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#18C67E] to-emerald-400 bg-clip-text text-transparent animate-fade-in">
              Visit Habebee Lounge
            </h1>
            <p className="text-2xl font-light text-zinc-300 max-w-[600px] mx-auto">
              Habebee Lounge is conveniently located near MMU, Mutiara Ville, and the hospital in
              Cyberjaya. Whether you&apos;re a student, local resident, or visitor we&apos;re easy
              to find and ready to serve you.
            </p>

            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-zinc-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-zinc-700/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#18C67E]/10 rounded-lg">
                    <MapPin className="w-8 h-8 text-[#18C67E]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3 text-[#18C67E]">Find Us Here</h2>
                    <p className="text-lg text-zinc-300">
                      Strategically located near:
                      <ul className="mt-2 space-y-2">
                        <li className="flex items-center gap-2">
                          <Navigation className="w-4 h-4" />
                          MMU Campus
                        </li>
                        <li className="flex items-center gap-2">
                          <Navigation className="w-4 h-4" />
                          Mutiara Ville
                        </li>
                        <li className="flex items-center gap-2">
                          <Navigation className="w-4 h-4" />
                          Cyberjaya Hospital
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-zinc-700/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#18C67E]/10 rounded-lg">
                    <Phone className="w-8 h-8 text-[#18C67E]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3 text-[#18C67E]">Contact Us</h2>
                    <p className="text-lg text-zinc-300">
                      Have questions or want to make a reservation?
                      <br />
                      <a
                        href="tel:+1234567890"
                        className="text-[#18C67E] hover:text-emerald-400 transition-colors mt-2 inline-block text-xl font-semibold"
                      >
                        +123 456 7890
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-zinc-700/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#18C67E]/10 rounded-lg">
                    <Clock className="w-8 h-8 text-[#18C67E]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3 text-[#18C67E]">Opening Hours</h2>
                    <div className="text-lg text-zinc-300 space-y-2">
                      <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                      <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#18C67E] to-emerald-400 rounded-2xl transform rotate-1 opacity-20 blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-700">
                <iframe
                  className="w-full h-[600px]"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.786524733683!2d101.6385!3d2.9252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdcdd4e4a5c711%3A0x5b5b68e6d25a3eaa!2sMutiara%20Ville%20Cyberjaya!5e0!3m2!1sen!2smy!4v1707901234567!5m2!1sen!2smy"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center space-y-8">
            <p className="text-2xl font-light text-zinc-300">
              Experience exceptional dining in the heart of Cyberjaya
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/menu"
                className="px-8 py-4 bg-gradient-to-r from-[#18C67E] to-emerald-400 text-white rounded-xl hover:shadow-lg hover:shadow-[#18C67E]/20 transition-all duration-300 text-lg font-semibold"
              >
                View Our Menu
              </Link>
              <Link
                href="/"
                className="px-8 py-4 bg-zinc-800 text-white rounded-xl hover:bg-zinc-700 transition-all duration-300 text-lg font-semibold border border-zinc-700"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Location
