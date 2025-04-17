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
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
              30 Passenger Party Bus
            </h1>
            <p className="text-gray-500 mb-2">Miami, FL</p>
            <p className="text-pink-600 text-xl font-semibold mb-4">
              $285 <span className="text-sm font-normal text-gray-500">/ hour</span>
            </p>

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

          {/* CTA */}
          <div className="sticky bottom-0 bg-white p-4 border-t flex justify-center lg:static lg:p-8 mt-6">
            <a
              href="https://book.tourcheckout.com/s/2cdc-68f6-621b/041a25"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-pink-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-pink-700 transition lg:w-auto"
            >
              🚐 Book Now
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}