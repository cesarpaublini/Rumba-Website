'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <>
      {/* Who We Are Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div className="h-full">
          <span className="text-sm font-medium text-pink-600 bg-pink-100 px-3 py-1 rounded-full mb-4 inline-block">
            RumbaTours Miami
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Experience Miami's vibrant nightlife like never before
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            With RumbaTours Miami's private open-air party bus tours.
            Perfect for bachelorette parties, birthdays, corporate events, or simply a night out with friends, our tours offer
            an unforgettable journey through the city's most iconic neighborhoods.
          </p>
          <Link
  href="#spacious"
  className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-3 rounded-md transition"
>
  Learn More
</Link>
        </div>

        {/* Image Section */}
        <div className="w-full h-full flex items-stretch">
          <div className="relative rounded-lg overflow-hidden shadow-md w-full h-full">
            <Image
              src="/images/miami-open-air-party-bus-daytime-celebration.jpg"
              alt="People on a party bus in Miami"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        </section>

{/* Stats Section */}
<section className="bg-pink-600 py-16">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center text-white mb-12">
      Tour Highlights
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
      {/* Highlight 1 */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-6 text-4xl text-pink-600">📍</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">2-Hour Private Tour</h3>
        <p className="text-gray-600">
          Explore Downtown Miami, Brickell, Wynwood, Little Havana, Coral Gables, Coconut Grove, and South Beach.
        </p>
      </div>

      {/* Highlight 2 */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-6 text-4xl text-pink-600">🪩</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Spacious Seating</h3>
        <p className="text-gray-600">
          Open-air party buses fit up to 30 passengers — plenty of room for dancing and socializing.
        </p>
      </div>

      {/* Highlight 3 */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-6 text-4xl text-pink-600">🔊</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Sound System</h3>
        <p className="text-gray-600">
          High-fidelity music onboard sets the perfect vibe.
        </p>
      </div>

      {/* Highlight 4 */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-6 text-4xl text-pink-600">🍹</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">BYOB</h3>
        <p className="text-gray-600">
          Bring your own beverages (no glass). Coolers and ice provided.
        </p>
      </div>
    </div>
  </div>
</section>
</>
)
}