'use client';

import Image from 'next/image';
import Link from 'next/link';

// TODO: Fetch bus data based on slug
const bus = {
  name: '30 Passenger Party Bus', // Placeholder
  location: 'Miami, FL', // Placeholder
  price: 285, // Placeholder
  pricingNote: '/ hour', // Placeholder
  capacity: 30, // Placeholder
  length: '25 ft', // Placeholder
  amenities: ['Premium Sound', 'LED Lights', 'Open-Air Option', 'BYOB', 'Bluetooth Audio'], // Placeholder
  description: 'Our 30 Passenger Party Bus is the perfect ride for birthdays, corporate events, and nights out. It features premium lighting, sound system, and BYOB-friendly setup.', // Placeholder
  images: [
    '/images/30-passenger-party-bus-miami.jpg', // Placeholder
    '/images/30-passenger-party-bus-miami.jpg', // Placeholder
    '/images/30-passenger-party-bus-miami.jpg', // Placeholder
  ],
  bookingLink: 'https://book.tourcheckout.com/s/2cdc-68f6-621b/041a25', // Placeholder
};

export default function BusDetailPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Gallery */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <Image
              src={bus.images[0]}
              alt={`${bus.name} - Main View`}
              width={1200}
              height={700}
              className="rounded-lg object-cover w-full aspect-[16/10]"
              priority // Prioritize loading the main image
            />
          </div>
          <Image
            src={bus.images[1]}
            alt={`${bus.name} - Secondary View`}
            width={600}
            height={400}
            className="rounded-lg object-cover w-full aspect-[16/10]"
          />
          <Image
            src={bus.images[2]}
            alt={`${bus.name} - Tertiary View`}
            width={600}
            height={400}
            className="rounded-lg object-cover w-full aspect-[16/10]"
          />
        </div>

        {/* Info + Booking */}
        <div className="flex flex-col space-y-6">
          {/* Bus Details */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
              {bus.name}
            </h1>
            <p className="text-gray-600 mb-4">{bus.location}</p>
            
            <div className="flex items-center space-x-6 mb-6 text-sm">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <span>Up to {bus.capacity} Guests</span>
              </div>
              {/* Optional: Add length or other key spec here */}
              {/* <div className="flex items-center">
                <svg ... /> 
                <span>{bus.length}</span>
              </div> */}              
            </div>

            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-700 mb-6">
              {bus.description}
            </p>

            <h3 className="text-lg font-semibold mb-2">Key Features</h3>
            <ul className="flex flex-wrap gap-2 text-sm mb-8">
              {bus.amenities.slice(0, 4).map((amenity, idx) => ( // Show first 4 amenities
                <li
                  key={idx}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                >
                  {amenity}
                </li>
              ))}
            </ul>
          </div>

          {/* Booking Box */}
          <div className="sticky top-24 bg-white rounded-xl shadow-lg p-6 w-full lg:max-w-sm self-start">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              ${bus.price} <span className="text-sm font-medium text-gray-500">{bus.pricingNote}</span>
            </h3>
            
            <Link
              href={bus.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-pink-600 hover:bg-pink-700 text-white font-semibold px-4 py-3 rounded-lg transition w-full"
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