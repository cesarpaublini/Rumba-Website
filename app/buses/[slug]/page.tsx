'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function BusDetailPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Gallery */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <Image
              src="/images/30-passenger-party-bus-miami.jpg"
              alt="Main image"
              width={1200}
              height={700}
              className="rounded-lg object-cover w-full"
            />
          </div>
          <Image
            src="/images/30-passenger-party-bus-miami.jpg"
            alt="Secondary image"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full"
          />
          <Image
            src="/images/30-passenger-party-bus-miami.jpg"
            alt="Tertiary image"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full"
          />
        </div>

        {/* Info + Booking */}
        <div className="flex flex-col">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
              30 Passenger Party Bus
            </h1>
            <p className="text-gray-500 mb-2">Miami, FL</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-500">Length</p>
                <p className="font-semibold">25 ft</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Capacity</p>
                <p className="font-semibold">30 Guests</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">A/C</p>
                <p className="font-semibold">Yes</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-700 mb-6">
              Our 30 Passenger Party Bus is the perfect ride for birthdays, corporate events,
              and nights out. It features premium lighting, sound system, and BYOB-friendly setup.
            </p>

            <h3 className="text-lg font-semibold mb-2">Amenities</h3>
            <ul className="flex flex-wrap gap-2 text-sm mb-8">
              {['Premium Sound', 'LED Lights', 'Open-Air Option', 'BYOB', 'Bluetooth Audio'].map((amenity, idx) => (
                <li
                  key={idx}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                >
                  {amenity}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side Booking Box */}
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm mx-auto lg:mx-0 mt-10 lg:mt-0">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              $285 <span className="text-sm font-medium text-gray-500">/ hour</span>
            </h3>
            
            <div className="mb-4">
              <p className="text-sm text-gray-700">
                <strong>Location:</strong> Miami, FL
              </p>
              <p className="text-sm text-gray-700 mt-1">
                <strong>Capacity:</strong> 30 guests
              </p>
            </div>

            <Link
              href="https://book.tourcheckout.com/s/2cdc-68f6-621b/041a25"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-pink-600 hover:bg-pink-700 text-white font-semibold px-4 py-3 rounded-lg transition w-full mt-4"
            >
              ⚡ Book Now
            </Link>

            <p className="text-xs text-gray-400 text-center mt-3">You won't be charged yet</p>
          </div>
        </div>
      </div>
    </main>
  );
}