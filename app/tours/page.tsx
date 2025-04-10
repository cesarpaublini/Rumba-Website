'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import HeroTours from '@/components/HeroTours'
import AnimatedHeadline from '@/components/AnimatedHeadline'
import AboutSection from '@/components/AboutSectionTours'

export default function ToursPage() {
  const words = ['Birthdays', 'Bachelorettes', 'Corporate Events', 'Night Outs', 'Just for Fun']
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Hero Image Section */}
      <div
        className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/tour-hero.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-4 text-center">
          <AnimatedHeadline />
        </div>
      </div>

      {/* About Section (New) */}
      <AboutSection />

      <div className="px-6 py-10 max-w-5xl mx-auto text-gray-800">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">RumbaTours Miami</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Experience Miami's vibrant nightlife like never before with RumbaTours Miami's private open-air party bus tours. Perfect for{' '}
            <span className="text-pink-600 font-semibold">{words[currentIndex]}</span>{' '}
            and more! Bachelorette parties, birthdays, corporate events, or simply a night out with friends – our tours offer an unforgettable journey through the city's most iconic neighborhoods.
          </p>
        </div>

        {/* Highlights Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Tour Highlights</h2>
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>2-Hour Private Tour:</strong> Explore Downtown Miami, Brickell, Wynwood, Little Havana, Coral Gables, Coconut Grove, and South Beach.</li>
              <li><strong>Spacious Seating:</strong> Open-air party buses fit up to 30 passengers — plenty of room for dancing and socializing.</li>
              <li><strong>Premium Sound System:</strong> High-fidelity music onboard sets the perfect vibe.</li>
              <li><strong>BYOB:</strong> Bring your own beverages (no glass). Coolers and ice provided.</li>
              <li><strong>Onboard Attendant/DJ:</strong> Serves drinks, manages music, captures memories.</li>
            </ul>
          </div>
          <div className="bg-gray-100 rounded-md p-4 shadow-sm">
            <Image src="/images/bus-tour.jpg" width={600} height={400} alt="Party Bus Tour" className="rounded-md w-full object-cover" />
          </div>
        </div>

        {/* Occasion Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Perfect for Any Occasion</h2>
          <p>
            Whether you're planning a bachelorette party, birthday celebration, corporate event, or just a fun night out, RumbaTours Miami offers a unique and exciting way to experience the city's nightlife. Our customizable tours cater to your specific needs, making each event special and tailored to your preferences.
          </p>
        </div>

        {/* Booking Options */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Booking Information</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li><strong>Private Tours:</strong> Book the entire bus for a personalized group experience.</li>
            <li><strong>Single Ticket Tours:</strong> Join others for a fun, shared party bus ride.</li>
            <li><strong>Custom Rentals:</strong> Great for parades, marketing activations, and special events.</li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Why Choose RumbaTours Miami?</h2>
          <p>
            With years of experience in the Miami tourism and transport industry, RumbaTours is dedicated to providing top-notch service and unforgettable experiences. Our fleet of open-air party buses, combined with our professional and friendly staff, ensures that your event will be one to remember.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Book Your Tour?</h3>
          <Button asChild size="lg">
            <Link href="/">Book Now</Link>
          </Button>
        </div>
      </div>
    </>
  )
}