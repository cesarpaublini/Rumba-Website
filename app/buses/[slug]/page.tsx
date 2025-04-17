'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const images = [
  '/images/30-passenger-party-bus-miami.jpg',
  '/images/30-passenger-party-bus-miami.jpg',
  '/images/30-passenger-party-bus-miami.jpg'
];

export default function BusDetailPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Left Image Carousel */}
        <div className="h-full w-full">
          <div className="w-full aspect-[16/9] relative rounded-lg overflow-hidden shadow-md mb-4">
            <Image
              src={images[currentIndex]}
              alt="Party Bus"
              fill
              className="object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black px-2 py-1 rounded-full shadow hover:bg-gray-100 transition"
              aria-label="Previous Image"
            >
              ◀
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black px-2 py-1 rounded-full shadow hover:bg-gray-100 transition"
              aria-label="Next Image"
            >
              ▶
            </button>
          </div>

          {/* Thumbnail Images */}
          <div className="flex gap-4 mt-4">
            {/* Using a consistent placeholder for thumbnails */}
            {Array.from({ length: 3 }).map((_, i) => (
              <Image
                key={i}
                src={'/images/30-passenger-party-bus-miami.jpg'} // Consistent placeholder
                alt={`Thumbnail ${i + 1}`}
                width={100}
                height={70}
                className="rounded-lg cursor-pointer hover:opacity-75 transition object-cover"
              />
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="h-full border border-gray-200 rounded-lg p-6 flex flex-col justify-between">
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

          <div className="mt-4">
            <a
              href="https://book.tourcheckout.com/s/2cdc-68f6-621b/041a25"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pink-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-pink-700 transition"
            >
              🚐 Book Now
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}