'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const slides = [
  {
    image: '/images/miami-nightlife-party-bus-tour-rumbatours.jpg-optimized-small.jpg',
    review: '"We had an amazing time! Music, dancing, drinks — everything was perfect!"',
    name: 'Jessica M., Bachelorette Group'
  },
  {
    image: '/images/miami-open-air-party-bus-bride-squad-rumbatours.jpg-optimized-small.jpg',
    review: "\"Perfect for my sister's bachelorette. Everyone had a blast!\"",
    name: 'Amanda R., Maid of Honor'
  },
  {
    image: '/images/miami-party-bus-downtown-tour-rumbatours.jpg-optimized-small.jpg',
    review: '"We booked last minute and it was seamless. Highly recommend!"',
    name: 'Carlos D., Birthday Group'
  },
  {
    image: '/images/miami-party-bus-summer-celebration-rumbatours.jpg-optimized-small.jpg',
    review: '"I can\'t believe how much fun we had. The energy was unmatched!"',
    name: 'Rachel P., Tourist'
  },
  {
    image: '/images/Open Air Party Bus-optimized-small.jpg',
    review: '"This is the best way to party in Miami. Will do it again!"',
    name: 'Leo V., Group Organizer'
  }
];

export default function PartyExperienceSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Box - Slideshow */}
        <div className="relative aspect-[4/3] md:h-full rounded-3xl overflow-hidden shadow-lg">
          <div 
            className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-full flex-none relative"
                style={{ minWidth: '100%' }}
              >
                <img
                  src={slide.image}
                  alt={`Review ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="max-w-md px-6 text-center">
                    <p className="text-lg md:text-xl text-white font-medium mb-2">
                      {slide.review}
                    </p>
                    <p className="text-sm text-white/90">
                      – {slide.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`h-1.5 w-6 rounded-full ${
                  current === index ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Box */}
<div
  className="text-white rounded-3xl shadow-lg p-8 flex flex-col justify-between bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/rumba-miami-party-bus-background-pattern.png')"
  }}
>
  <div>
    <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
      Your Ultimate Open Air Party Bus Experience <span className="inline-block">🎉</span>
    </h2>
    <p className="text-base md:text-lg leading-relaxed">
      Experience a fun party tour around Miami! Perfect for bachelorettes, birthdays, or a night out. Enjoy 360-degree views on our open-air bus, bring your own drinks, and vibe to music on our premium sound system.
    </p>
  </div>
  <Link
    href="#booking"
    className="mt-6 inline-block bg-black text-white font-semibold px-6 py-3 rounded-md shadow hover:opacity-80 transition w-fit"
  >
    Book Now
  </Link>
</div>
      </div>
    </div>
  );
}
