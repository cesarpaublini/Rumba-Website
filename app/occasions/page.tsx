'use client'

import OccasionSlider from '@/components/OccasionSlider'
import OccasionSections from '@/components/OccasionSections'

export default function OccasionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[5
        0vh] flex flex-col items-center justify-center text-center bg-cover bg-center px-4 py-12 sm:py-20"
        style={{
          backgroundImage: "url('/images/rumba-miami-party-bus-background-pattern.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/1 0 z-0" />

        {/* Content */}
        <div className="relative z-10 max-w-2xl text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Celebrate Any Occasion With Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6">
            Whether it's your bachelorette party or your company’s big night out,
            we’ve got the perfect party bus experience for you.
          </p>
        </div>
      </section>

      {/* Occasion Cards Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <OccasionSlider />
      
      </section>

      <OccasionSections />
    </>
  )
}