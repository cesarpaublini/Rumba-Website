'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import BookingCard from './BookingCard'; // Import the new component
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';

export default function Hero() {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [duration, setDuration] = useState(2);
  const [showDurationOptions, setShowDurationOptions] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [showTimeOptions, setShowTimeOptions] = useState(false);
  const [price, setPrice] = useState(750);
  const [showMobileCard, setShowMobileCard] = useState(false);
  const [step, setStep] = useState(1);
  const [guests, setGuests] = useState(15);
  const [occasion, setOccasion] = useState('');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [travelFee, setTravelFee] = useState(0);
  const durationRef = useRef<HTMLDivElement | null>(null);
  const timeRef = useRef<HTMLDivElement | null>(null);
  const pickupRef = useRef<HTMLInputElement>(null);
  const dropoffRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (durationRef.current && event.target instanceof Node && !durationRef.current.contains(event.target)) {

        setShowDurationOptions(false);
      }
      if (timeRef.current instanceof HTMLDivElement && !timeRef.current.contains(event.target as Node)) {
        setShowTimeOptions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const [hourStr, minuteStr] = startTime.split(':');
    const hour = parseInt(hourStr || '0', 10);
    const minute = parseInt(minuteStr || '0', 10);
    const isAfter7PM = hour >= 19;

    let basePrice = isAfter7PM ? 950 : 750;
    let finalPrice = basePrice;

    if (duration === 3) {
      finalPrice += 300;
    } else if (duration === 4) {
      finalPrice += 600;
    } else if (duration >= 5) {
      finalPrice = 300 * duration;
    }

    finalPrice += travelFee;

    setPrice(finalPrice);
  }, [duration, startTime, travelFee, pickup, dropoff]);

  return (
    <>
      <section className="relative min-h-[700px] w-full overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="hidden sm:block w-full h-full object-cover"
          >
            <source src="/videos/hero-desktop.mp4" type="video/mp4" />
          </video>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="block sm:hidden w-full h-full object-cover"
          >
            <source src="/videos/hero-mobile.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Overlay for Mobile Text */}
        <div className="absolute inset-0 bg-black/50 lg:hidden z-10 flex items-center justify-center text-center px-4">
          <div className="relative z-10 max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-md leading-tight">
              Book Miami's #1 Open-Air Party Bus Experience
            </h1>
            <p className="mt-3 text-white text-base sm:text-lg md:text-xl">
              Perfect for bachelorettes, birthdays, tourists, locals & corporate groups.
            </p>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setShowMobileCard(true);
              }}
              className="mt-6 inline-block bg-pink-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-700 transition"
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* Booking Card - Desktop */}
        <BookingCard
          date={date}
          setDate={setDate}
          duration={duration}
          setDuration={setDuration}
          startTime={startTime}
          setStartTime={setStartTime}
          price={price}
          setPrice={setPrice}
          step={step}
          setStep={setStep}
          guests={guests}
          setGuests={setGuests}
          occasion={occasion}
          setOccasion={setOccasion}
          pickup={pickup}
          setPickup={setPickup}
          dropoff={dropoff}
          setDropoff={setDropoff}
          travelFee={travelFee}
          setTravelFee={setTravelFee}
          showCalendar={showCalendar}
          setShowCalendar={setShowCalendar}
          showDurationOptions={showDurationOptions}
          setShowDurationOptions={setShowDurationOptions}
          showTimeOptions={showTimeOptions}
          setShowTimeOptions={setShowTimeOptions}
          pickupRef={pickupRef}
          dropoffRef={dropoffRef}
        />
      </section>

      {/* Marquee Banner */}
      <div className="bg-black overflow-hidden py-3">
        <div className="animate-marquee-track whitespace-nowrap text-white text-sm font-semibold tracking-wide flex gap-16">
          <span className="px-8">2-Hour Tour • Up to 30 Guests • Book Instantly • Premium Sound System</span>
          <span className="px-8">2-Hour Tour • Up to 30 Guests • Book Instantly • Premium Sound System</span>
          <span className="px-8">2-Hour Tour • Up to 30 Guests • Book Instantly • Premium Sound System</span>
        </div>
      </div>
    </>
  );
}
