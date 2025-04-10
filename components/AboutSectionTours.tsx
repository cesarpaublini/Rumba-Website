'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <>
      {/* Who We Are Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <span className="text-sm font-medium text-pink-600 bg-pink-100 px-3 py-1 rounded-full mb-4 inline-block">
            Who We Are
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
            We’re more than just a tour company
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            At RumbaTours, we create unforgettable experiences through music, vibes, and celebration.
            Whether you're here for a birthday, bachelorette party, or just a night out — we’re your
            partners in fun, offering the best open-air party bus experiences in Miami.
          </p>
          <Link
            href="/#how-it-works"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-3 rounded-md transition"
          >
            Learn More
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-full">
          <div className="relative rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/people-party.jpg" // Replace with your image path
              alt="People on a party bus"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-8 border-t border-gray-200">
        <div>
          <h3 className="text-3xl font-bold text-pink-600">500+</h3>
          <p className="text-sm text-gray-600 mt-2">Successful Tours</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-pink-600">12+</h3>
          <p className="text-sm text-gray-600 mt-2">Years in Business</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-pink-600">30 Max</h3>
          <p className="text-sm text-gray-600 mt-2">Guests per Bus</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-pink-600">5-Star</h3>
          <p className="text-sm text-gray-600 mt-2">Reviews on Google</p>
        </div>
      </section>
    </>
  )
}
