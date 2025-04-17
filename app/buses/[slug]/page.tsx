'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { buses } from '../busData'; // Import bus data
import { notFound } from 'next/navigation'; // Import notFound

// Placeholder reviews - kept separate as they are not in busData.ts yet
const reviews = [
  {
    name: 'Karen Sacasa',
    text: "I celebrated my 27th birthday with Rumba Tours last December, and I can't even describe how much fun we had that day! I chose their enclosed bus, which was clean, punctual, and very spacious..."
  },
  {
    name: 'Betty G',
    text: 'The tour was great - thanks to our host and our driver. Fun time driving around parts of the beach and Wynwood...'
  },
  {
    name: 'Veronica P',
    text: 'Fun time celebrating a birthday! It was an open-air bus with plenty of room for ~20 people to hang and dance...'
  }
];

function ReviewCard({ review }: { review: { name: string; text: string } }) {
  return (
    <div className="md:max-w-sm bg-gray-100 rounded-xl shadow p-4 min-w-0">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
          {review.name[0]}
        </div>
        <h3 className="text-md font-semibold">{review.name}</h3>
      </div>
      <div className="flex text-yellow-400 text-sm mb-2">
        {[...Array(5)].map((_, i) => <FaStar key={i} />)}
      </div>
      <p className="text-sm text-gray-800 break-words">{review.text}</p>
    </div>
  );
}

// Updated component signature to accept params
export default function BusDetailPage({ params }: { params: { slug: string } }) {
  
  // Find the bus based on the slug
  const bus = buses.find(b => b.slug === params.slug);

  // If bus not found, show 404 page
  if (!bus) {
    notFound();
  }

  // State for the image carousel, using the dynamic images
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = bus.imageGallery; // Use images from the found bus

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <Link href="/buses" className="text-sm text-pink-600 hover:underline mb-4 inline-block">
         ← Go back to all buses
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <div className="h-full w-full">
          <div className="w-full aspect-[16/9] relative rounded-lg overflow-hidden shadow-md mb-4">
            <Image
              // Use dynamic image source
              src={images[currentIndex]}
              alt={bus.name} // Use dynamic alt text
              fill
              className="object-cover"
            />
            {/* Navigation Buttons (only if more than 1 image) */}
            {images.length > 1 && (
              <>
                <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black px-2 py-1 rounded-full shadow hover:bg-gray-100 transition">◀</button>
                <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black px-2 py-1 rounded-full shadow hover:bg-gray-100 transition">▶</button>
              </>
            )}
          </div>
        </div>

        <div className="h-full border border-gray-200 rounded-lg p-6 flex flex-col justify-between">
          <div>
            {/* Use dynamic bus name */}
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">{bus.name}</h1>
            {/* Use dynamic location */}
            <p className="text-gray-500 mb-2">{bus.location}</p>
            {/* Use dynamic price and unit */}
            <p className="text-pink-600 text-xl font-semibold mb-4">
              ${bus.price} <span className="text-sm font-normal text-gray-500">{bus.unit}</span>
            </p>

            <h3 className="text-lg font-semibold mb-2">Description</h3>
            {/* Use dynamic description */}
            <p className="text-gray-700 mb-6">
              {bus.description}
            </p>

            <h3 className="text-lg font-semibold mb-2">Amenities</h3>
            {/* Use dynamic amenities */}
            <ul className="flex flex-wrap gap-2 text-sm mb-8">
              {bus.amenities.map((item, i) => (
                <li key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            {/* Use dynamic booking link */}
            <a
              href={bus.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pink-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-pink-700 transition"
            >
              🚐 Book Now
            </a>
          </div>
        </div>
      </div>

      {/* Reviews Section (using placeholder reviews for now) */}
      <section className="mt-16 px-2">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Ratings & Reviews</h2>
        {/* Desktop scroll container */}
        <div
          className="hidden md:flex md:flex-row gap-6 md:overflow-x-auto md:pb-4 md:pr-2 scroll-smooth min-w-0"
          onWheel={(e) => {
            const container = e.currentTarget;
            if (e.deltaY !== 0) {
              container.scrollLeft += e.deltaY;
              e.preventDefault();
            }
          }}
        >
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
        {/* Mobile vertical stack */}
        <div className="md:hidden flex flex-col gap-6">
           {reviews.map((review, index) => (
             <ReviewCard key={index} review={review} />
           ))}
         </div>
      </section>
    </main>
  );
}