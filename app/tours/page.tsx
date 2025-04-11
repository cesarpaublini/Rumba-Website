'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import HeroTours from '@/components/HeroTours'
import AboutSection from '@/components/AboutSectionTours'

export default function ToursPage() {
  return (
    <>
      <HeroTours />
      <AboutSection />

      <section 
      id="spacious"
      className="max-w-7xl mx-auto px-6 py-5 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center scroll-mt-24">
  {/* Video Section */}
  <div className="order-1 w-full">
    <div className="rounded-xl overflow-hidden shadow-lg border-4 border-pink-500">
      <video
        src="/videos/spacious-social.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto object-cover"
      />
    </div>
  </div>

  {/* Text Section */}
  <div className="order-2 text-center md:text-left">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      🚐 Spacious & Social
    </h2>
    <p className="text-gray-600 text-lg">
      With capacity for up to 30 passengers, our party buses are perfect for big groups.
      Invite your entire crew — there's plenty of room to dance, socialize, and celebrate together in style.
    </p>
  </div>
</section>

      <section className="max-w-7xl mx-auto px-6 py-5 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center scroll-mt-24">
  {/* Video Section (1st on mobile, 2nd on desktop) */}
  <div className="order-1 md:order-2 w-full">
    <div className="rounded-xl overflow-hidden shadow-lg border-4 border-pink-500">
      <video
        src="/videos/byob-cooler.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto object-cover"
      />
    </div>
  </div>

  {/* Text Section (2nd on mobile, 1st on desktop) */}
  <div className="order-2 md:order-1 text-center md:text-left">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      🧊 Cooler with Ice for BYOB
    </h2>
    <p className="text-gray-600 text-lg">
      Bring your own drinks and we'll take care of the rest. Every tour comes with a cooler stocked with ice to keep your beverages cold the whole ride. Please, no glass containers.
    </p>
  </div>
</section>

<section className="max-w-7xl mx-auto px-6 py-5 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center scroll-mt-24">
  {/* Video Section */}
  <div className="order-1 w-full">
    <div className="rounded-xl overflow-hidden shadow-lg border-4 border-pink-500">
      <video
        src="/videos/open-air-views.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto object-cover"
      />
    </div>
  </div>

  {/* Text Section */}
  <div className="order-2 text-center md:text-left">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      🌆 Open-Air Views of Miami
    </h2>
    <p className="text-gray-600 text-lg">
      Experience the city like never before with our unique open-air design. Enjoy 360° unobstructed views as you cruise through Miami's most iconic neighborhoods — from Brickell to Wynwood and beyond.
    </p>
  </div>
</section>
<section className="max-w-7xl mx-auto px-6 py-5 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center scroll-mt-24">
  {/* Video Section (1st on mobile, 2nd on desktop) */}
  <div className="order-1 md:order-2 w-full">
    <div className="rounded-xl overflow-hidden shadow-lg border-4 border-pink-500">
      <video
        src="/videos/bluetooth-sound.mp4" // Replace with your actual video path
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto object-cover"
      />
    </div>
  </div>

  {/* Text Section (2nd on mobile, 1st on desktop) */}
  <div className="order-2 md:order-1 text-center md:text-left">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      🔊 Premium Sound System with Bluetooth
    </h2>
    <p className="text-gray-600 text-lg">
      Your soundtrack sets the vibe — and we've got the setup to match. Connect your playlist to our high-fidelity Bluetooth sound system and keep the party going the whole ride.
    </p>
  </div>
</section>

<section className="max-w-7xl mx-auto px-6 py-5 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center scroll-mt-24">
  {/* Video Section */}
  <div className="order-1 w-full">
    <div className="rounded-xl overflow-hidden shadow-lg border-4 border-pink-500">
      <video
        src="/videos/friendly-attendant.mp4" 
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto object-cover"
      />
    </div>
  </div>

  {/* Text Section */}
  <div className="order-2 text-center md:text-left">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      🙌 Friendly Attendant & Professional Driver
    </h2>
    <p className="text-gray-600 text-lg">
      From pouring drinks to helping with the music and capturing your best moments, your onboard attendant is there to assist. Plus, your professional driver ensures a safe and smooth ride from start to finish.
    </p>
  </div>
</section>
<section className="max-w-7xl mx-auto px-6 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center scroll-mt-24">
  {/* Video Section (1st on mobile, 2nd on desktop) */}
  <div className="order-1 md:order-2 w-full">
    <div className="rounded-xl overflow-hidden shadow-lg border-4 border-pink-500">
      <video
        src="/videos/flexible-pickup.mp4" // Replace with your actual video path
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto object-cover"
      />
    </div>
  </div>

  {/* Text Section (2nd on mobile, 1st on desktop) */}
  <div className="order-2 md:order-1 text-center md:text-left">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      📍 Flexible Pickup Options
    </h2>
    <p className="text-gray-600 text-lg">
      We offer pickup and drop-off anywhere in:
    </p>
    <p className="text-gray-600 text-lg font-semibold mt-2">
      Downtown Miami, Brickell, Wynwood, Little Havana, Coral Gables
    </p>
    <p className="text-gray-600 text-lg mt-2">
      Whether it's a bar, club, restaurant, hotel, Airbnb, or your house — if it's within these areas, we'll come to you.
    </p>
  </div>
</section>
    </>
  )
}