'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'

const rotatingWords = [
  'Bachelorettes',
  'Birthdays',
  'Corp Events',
  'Night Outs',
  'Just for Fun',
]

export default function HeroTours() {
  const [index, setIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingWords.length)
        setIsVisible(true)
      }, 300)
    }, 5000)

    return () => clearInterval(interval)
  }, [index])

  return (
    <section
      className="relative w-full h-[50vh] md:h-[45vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/rumba-miami-party-bus-background-pattern.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/20 z-0" />

      <div className="relative z-10 px-6 max-w-4xl">
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-4">
          Our open-air party bus tours
          <br />
          are perfect for{' '}
          <span
            className={clsx(
              'inline-block text-pink-600 transition-opacity duration-500',
              isVisible ? 'opacity-100' : 'opacity-0'
            )}
          >
            {rotatingWords[index]}
          </span>
        </h1>
        <p className="text-white/80 text-lg md:text-xl mt-4">
          Book your unforgettable Miami experience — music, drinks & good vibes on wheels.
        </p>
      </div>
    </section>
  )
}