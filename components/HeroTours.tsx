'use client'

import { useEffect, useState } from 'react'

const rotatingWords = [
  'Birthdays',
  'Bachelorettes',
  'Corporate Events',
  'Night Outs',
  'Just for Fun',
]

export default function HeroTours() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center text-white text-center px-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/tours-hero.jpg"
          alt="Party Bus Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Text */}
      <div className="z-10 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
          Perfect for{' '}
          <span
  className="inline-block w-[240px] text-pink-400 text-center animate-slide-up whitespace-nowrap"
>
  {rotatingWords[index]}
</span>
        </h1>
        <p className="text-lg sm:text-xl">
          Book a private open-air party bus through Miami’s top neighborhoods.
        </p>
      </div>
    </section>
  )
}