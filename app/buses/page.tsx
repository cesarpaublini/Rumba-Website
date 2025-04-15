'use client'

import Image from 'next/image'
import Link from 'next/link'

const buses = [
  {
    id: 'open-air-party-bus',
    name: 'Open-Air Party Bus',
    location: 'Miami, FL',
    price: 950,
    image: '/images/miami-open-air-party-bus-bride-squad-rumbatours.jpg',
    capacity: 30,
    features: ['Open air', 'BYOB', 'Bluetooth Sound', 'Attendant'],
    slug: 'open-air-party-bus',
    note: 'Flat rate for 2-hour tour'
  },
  {
    id: '55-passenger-bus',
    name: '55 Passenger Coach',
    location: 'Miami, FL',
    price: 600,
    image: '/images/miami-party-bus-downtown-tour-rumbatours.jpg',
    capacity: 55,
    features: ['A/C', 'BYOB', 'Big Sound', 'Professional Driver'],
    slug: '55-passenger-bus'
  },
  {
    id: '30-party-bus',
    name: '30 Passenger Party Bus',
    location: 'Miami, FL',
    image: '/images/30-passenger-party-bus-miami.jpg',
    price: 285,
    capacity: 30,
    features: ['BYOB', 'A/C', 'LED lights', 'Premium Sound', 'Open-Air Option'],
    slug: '30-party-bus'
  }
]

export default function BusesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">Available Buses</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {buses.map((bus) => (
          <Link
            key={bus.id}
            href={`/buses/${bus.slug}`}
            className="rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white"
          >
            <Image
              src={bus.image}
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
                {bus.note && (
                  <span className="text-sm text-gray-600 ml-1">({bus.note})</span>
                )}
                {!bus.note && (
                  <span className="text-sm text-gray-600 ml-1">/hour</span>
                )}
              </div>
              <p className="text-xs text-gray-600 mt-1">
                Capacity: {bus.capacity} guests
              </p>
              <ul className="flex flex-wrap gap-2 mt-2 text-xs text-gray-600">
                {bus.features.map((feature, index) => (
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