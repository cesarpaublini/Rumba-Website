'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const response = await fetch('https://formspree.io/f/mkgjenwk', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })

    if (response.ok) {
      setStatus('🎉 Thanks for reaching out! We’ll get back to you soon.')
      form.reset()
    } else {
      setStatus('⚠️ Something went wrong. Please try again later.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-lg">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          name="name"
          required
          placeholder="Your full name"
          className="w-full bg-gray-100 text-gray-800 placeholder-gray-500 border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-pink-500 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          name="email"
          required
          placeholder="you@email.com"
          className="w-full bg-gray-100 text-gray-800 placeholder-gray-500 border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-pink-500 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Write your message..."
          className="w-full bg-gray-100 text-gray-800 placeholder-gray-500 border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-pink-500 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="bg-pink-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-pink-700 transition w-full sm:w-auto"
      >
        📩 Send Message
      </button>

      {status && <p className="text-sm text-pink-600 font-medium mt-4">{status}</p>}
    </form>
  )
}