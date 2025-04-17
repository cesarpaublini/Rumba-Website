'use client'

import Image from 'next/image'
import Link from 'next/link'
import { buses } from './busData'; // Import bus data

export default function BusesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">Available Buses</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {buses.map((bus) => (
          <Link
            key={bus.slug}
            href={`/buses/${bus.slug}`}
            className="rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white"
          >
            <Image
              src={bus.imageGallery[0]}
              alt={bus.name}
              width={500}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-1">{bus.name}</h2>
              <p className="text-sm text-gray-500">{bus.location}</p>
              <div className="mt-2">
                <span className="text-pink-600 font-bold">${bus.price}</span>
                <span className="text-sm text-gray-600 ml-1">{bus.unit}</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">
                Capacity: {bus.capacity} guests
              </p>
              <ul className="flex flex-wrap gap-2 mt-2 text-xs text-gray-600">
                {bus.amenities.slice(0, 3).map((feature, index) => (
                  <li
                    key={index}
                    className="bg-gray-100 px-2 py-1 rounded-full"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}