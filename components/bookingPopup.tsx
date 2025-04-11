'use client'

import { useEffect, useState } from 'react'

const cities = [
  { name: 'Miami, FL', weight: 20 },
  { name: 'Brickell, FL', weight: 15 },
  { name: 'Wynwood, FL', weight: 15 },
  { name: 'Coral Gables, FL', weight: 10 },
  { name: 'Little Havana, FL', weight: 10 },
  { name: 'South Beach, FL', weight: 10 },
  { name: 'New York, NY', weight: 2 },
  { name: 'Boston, MA', weight: 1 },
  { name: 'Philadelphia, PA', weight: 1 },
  { name: 'Washington, DC', weight: 1 },
  { name: 'Austin, TX', weight: 1 },
  { name: 'Houston, TX', weight: 1 },
  { name: 'Dallas, TX', weight: 1 },
  { name: 'Nashville, TN', weight: 1 },
  { name: 'Chicago, IL', weight: 1 },
  { name: 'Los Angeles, CA', weight: 1 },
  { name: 'Atlanta, GA', weight: 1 },
]

function getRandomCity() {
  const totalWeight = cities.reduce((sum, city) => sum + city.weight, 0)
  let random = Math.random() * totalWeight
  for (const city of cities) {
    if (random < city.weight) return city.name
    random -= city.weight
  }
  return cities[0].name
}

export default function BookingBanner() {
  const [visible, setVisible] = useState(false)
  const [city, setCity] = useState('')
  const [shownCount, setShownCount] = useState(0)
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (sessionStorage.getItem('banner-shown') === 'true') return

    const timers: NodeJS.Timeout[] = []

    const showBanner = (delay: number) => {
      timers.push(setTimeout(() => {
        setCity(getRandomCity())
        setVisible(true)

        const hideTimeout = setTimeout(() => {
          setVisible(false)
        }, 20000) // Show for 20s
        setTimeoutId(hideTimeout)

        setShownCount((prev) => {
          const newCount = prev + 1
          if (newCount >= 2) {
            sessionStorage.setItem('banner-shown', 'true')
          }
          return newCount
        })
      }, delay))
    }

    showBanner(15000)    // First banner at 15s
    showBanner(180000)   // Second banner at 3 minutes

    return () => timers.forEach(clearTimeout)
  }, [])

  const handleClose = () => {
    if (timeoutId) clearTimeout(timeoutId)
    setVisible(false)
  }

  return (
    <div
      className={`fixed z-50 px-4 py-3 text-sm bg-white border border-pink-500 rounded-lg shadow-md transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0 bottom-4 w-[300px] text-gray-800`}
    >
      <div className="flex items-start justify-between gap-4">
        <span>🚐 Someone from <strong>{city}</strong> just booked a party bus!</span>
        <button onClick={handleClose} className="text-gray-500 hover:text-gray-900 text-lg leading-none">
          ×
        </button>
      </div>
    </div>
  )
}