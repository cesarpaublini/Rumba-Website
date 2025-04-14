'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const occasions = [
  {
    title: 'Bachelorettes',
    image: '/images/occasion-bachelorette.jpg',
  },
  {
    title: 'Birthdays',
    image: '/images/occasion-birthday.jpg',
  },
  {
    title: 'Corporate Events',
    image: '/images/occasion-corporate.jpg',
  },
  {
    title: 'Weddings',
    image: '/images/occasion-wedding.jpg',
  },
  {
    title: 'Proms',
    image: '/images/occasion-prom.jpg',
  },
  {
    title: 'Night Outs',
    image: '/images/occasion-nightout.jpg',
  },
]

export default function OccasionSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return
    const scrollAmount = direction === 'left' ? -300 : 300
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  return (
    <section className="relative px-6 py-10">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">Explore by Occasion</h2>
          <p className="text-gray-600 text-sm sm:text-base">Choose the perfect experience for your celebration.</p>
        </div>

        {/* Scroll buttons - hidden on mobile */}
        <div className="hidden md:flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="bg-white border rounded-full p-2 shadow hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="bg-white border rounded-full p-2 shadow hover:bg-gray-100 transition"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-2"
      >
        {occasions.map((item, i) => (
          <div key={i} className="min-w-[250px] sm:min-w-[280px] flex-shrink-0">
            <div className="overflow-hidden rounded-lg shadow-md w-full h-[180px] relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-base font-semibold text-gray-800">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}