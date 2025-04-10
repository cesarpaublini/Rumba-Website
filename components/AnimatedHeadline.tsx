'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'

const words = [
  'Bachelorettes',
  'Birthdays',
  'Corporate Events',
  'Night Outs',
  'Just for Fun',
]

export default function AnimatedHeadline() {
  const [index, setIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false)

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length)
        setIsVisible(true)
      }, 400) // fade out duration
    }, 5000) // 5 seconds visible

    return () => clearTimeout(timeout)
  }, [index])

  return (
    <div className="text-3xl md:text-5xl font-bold text-white text-center whitespace-nowrap">
      <span className="mr-2">Perfect for</span>
      <span
        className={clsx(
          'inline-block transition-opacity duration-400 ease-in-out w-[220px] text-pink-500 text-left',
          isVisible ? 'opacity-100' : 'opacity-0'
        )}
      >
        {words[index]}
      </span>
    </div>
  )
}