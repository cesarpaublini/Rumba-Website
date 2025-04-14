'use client'

import Image from 'next/image'
import Link from 'next/link'

const occasions = [
  {
    id: 'bachelorettes',
    emoji: '🎉',
    headline: 'The Ultimate Bachelorette Bash on Wheels',
    subheadline: 'Pop bottles, dance with your crew, and kick off your wedding weekend in style.',
    image: '/images/occasion-bachelorette.jpg',
    testimonial: '“Best night ever! The bride-to-be was obsessed!” – Maria R.',
    cta: 'Book Your Bachelorette Party Now',
    href: '/#bachelorettes',
  },
  {
    id: 'birthdays',
    emoji: '🎂',
    headline: 'Your Birthday, Your Way',
    subheadline: 'From 21st to 60th, celebrate with music, drinks, and your favorite people on board.',
    image: '/images/occasion-birthday.jpg',
    testimonial: '“We had the time of our lives — unforgettable birthday vibes!” – Luis A.',
    cta: 'Check Birthday Packages',
    href: '/#birthdays',
  },
  {
    id: 'corporate',
    emoji: '💼',
    headline: 'Break Out of the Office – Celebrate With Style',
    subheadline: 'Whether it’s a team-building event or a client appreciation night, we’ll get you there in comfort and fun.',
    image: '/images/occasion-corporate.jpg',
    testimonial: '“Our team loved it! Definitely doing it again next quarter.” – Pepsi Miami Team',
    cta: 'Book a Corporate Ride',
    href: '/#corporate',
  },
  {
    id: 'weddings',
    emoji: '💍',
    headline: 'A Stylish Ride for Your Big Day',
    subheadline: 'Shuttle guests in style or celebrate your engagement, rehearsal, or after-party with us.',
    image: '/images/occasion-wedding.jpg',
    testimonial: '“So easy and beautiful. They handled everything flawlessly.” – Vanessa & Erik',
    cta: 'Reserve for Your Wedding',
    href: '/#weddings',
  },
  {
    id: 'proms',
    emoji: '🎓',
    headline: 'Make Prom Night Legendary',
    subheadline: 'Safe, stylish, and unforgettable. Our party bus will be the talk of prom.',
    image: '/images/occasion-prom.jpg',
    testimonial: '“Safe, super fun, and the kids LOVED it.” – Carlos G., Parent',
    cta: 'Prom Bus Availability',
    href: '/#proms',
  },
  {
    id: 'nightouts',
    emoji: '🌃',
    headline: 'No Uber Needed – Ride in Party Mode All Night',
    subheadline: 'Just a fun night with friends? We’ve got the ride. BYOB and dance on board.',
    image: '/images/occasion-nightout.jpg',
    testimonial: '“Best way to bar hop without worrying about parking or Ubers.” – Nicole & Crew',
    cta: 'Plan Your Night Out',
    href: '/#nightouts',
  },
]

export default function OccasionSections() {
  return (
    <section>
      {occasions.map((item, i: number) => {
  const isReversed = i % 2 !== 0;
  return (
    <div
      id={item.id}
      key={item.id}
      className={`max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
        isReversed ? 'md:flex-row-reverse' : ''
      }`}
    >
          {/* Image */}
          <div className={`w-full ${i % 2 !== 0 ? 'md:order-last' : ''}`}>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={item.image}
                alt={item.headline}
                width={700}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {item.emoji} {item.headline}
            </h2>
            <p className="text-gray-600 text-lg mb-4">{item.subheadline}</p>
            {item.testimonial && (
              <blockquote className="italic text-sm text-gray-500 mb-4">{item.testimonial}</blockquote>
            )}
            <Link
              href={item.href}
              className="inline-block bg-pink-600 text-white font-semibold px-5 py-3 rounded-md hover:bg-pink-700 transition"
            >
              → {item.cta}
            </Link>
          </div>
        </div>
      ))}

      {/* Final CTA Section */}
      <section className="bg-pink-600 text-white text-center px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Not sure which package is right for you?
          </h2>
          <p className="text-lg sm:text-xl mb-8">Let’s plan it together.</p>
          <a
            href="/contact"
            className="inline-block bg-white text-pink-600 font-semibold px-6 py-3 rounded-md hover:bg-pink-100 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </section>
  )
}