'use client'

import ContactForm from '@/components/ContactForm'
import { FaInstagram, FaTiktok, FaPhone, FaEnvelope } from 'react-icons/fa'

export default function ContactPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Contact Form Box */}
      <div className="bg-pink-600 text-white p-8 rounded-3xl flex flex-col justify-between min-h-[500px]">
        <div>
          <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
          <p className="text-white/90 mb-6">We’ll get back to you shortly</p>
          <ContactForm />
        </div>
      </div>

      {/* Contact Info Box */}
      <div className="bg-white p-8 rounded-3xl shadow-md flex flex-col justify-between min-h-[500px]">
        <div>
          <h3 className="text-2xl font-bold text-pink-600 mb-6">Contact Us</h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <FaPhone className="text-pink-600" />
              <span><strong>Call us:</strong> <a href="tel:7867651099" className="text-pink-600">786 765-1099</a></span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-pink-600" />
              <span><strong>Email:</strong> <a href="mailto:reservations@rumbatoursmiami.com" className="text-pink-600">reservations@rumbatoursmiami.com</a></span>
            </li>
          </ul>

          <h4 className="text-lg font-semibold mt-8 text-gray-900">Connect with us</h4>
          <div className="flex gap-4 mt-3">
            <a
              href="https://www.instagram.com/rumbatoursmiami/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-pink-100 text-pink-600 hover:bg-pink-200 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.tiktok.com/@rumbatours"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-pink-100 text-pink-600 hover:bg-pink-200 transition"
            >
              <FaTiktok size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}