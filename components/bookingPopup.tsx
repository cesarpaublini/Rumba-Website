'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'

const messages = [
  'Jessica from Orlando just booked a party bus!',
  'Carlos from Brickell just booked a party bus!',
  'Emily from Fort Lauderdale just booked a party bus!',
  'Daniela from Tampa just booked a party bus!',
  'Chris from Wynwood just booked a party bus!',
  'Amanda from Houston just booked a party bus!',
  'Ashley from New York just booked a party bus!',
  'Kevin from Coral Gables just booked a party bus!',
  'Samantha from Little Havana just booked a party bus!',
  'Latoyna from Atlanta just booked a party bus!',
]

export default function BookingPopup() {
  const [show, setShow] = useState(false)
  const [message, setMessage] = useState('')
  const [closed, setClosed] = useState(false)

  useEffect(() => {
    if (closed) return

    const timers: NodeJS.Timeout[] = []

    const showPopup = (delay: number) => {
      timers.push(
        setTimeout(() => {
          setMessage(messages[Math.floor(Math.random() * messages.length)])
          setShow(true)
          // Auto close after 20s
          timers.push(setTimeout(() => setShow(false), 20000))
        }, delay)
      )
    }

    showPopup(15000) // First popup after 15s
    showPopup(90000) // Second popup after 90s

    return () => timers.forEach(clearTimeout)
  }, [closed])

  if (!show || closed) return null

  return (
    <div
      className={clsx(
        'fixed bottom-4 z-50 max-w-sm w-[90%] sm:w-[360px] px-4 py-3 bg-white border border-pink-500 shadow-xl text-sm rounded-lg transition-all duration-500',
        'left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0'
      )}
    >
      <div className="flex justify-between items-start gap-3">
        <p className="text-gray-800 font-medium">🎉 {message}</p>
        <button onClick={() => { setShow(false); setClosed(true) }} className="text-gray-400 hover:text-gray-600">
          ✕
        </button>
      </div>
    </div>
  )
}
