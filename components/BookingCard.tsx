'use client';

import { useState } from 'react';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';

interface BookingCardProps {
  isMobile?: boolean;
  date: Date;
  setDate: (date: Date) => void;
  duration: number;
  setDuration: (duration: number) => void;
  startTime: string;
  setStartTime: (time: string) => void;
  price: number;
  setPrice: (price: number) => void;
  step: number;
  setStep: (step: number) => void;
  guests: number;
  setGuests: (guests: number) => void;
  occasion: string;
  setOccasion: (occasion: string) => void;
  pickup: string;
  setPickup: (pickup: string) => void;
  dropoff: string;
  setDropoff: (dropoff: string) => void;
  travelFee: number;
  setTravelFee: (fee: number) => void;
  showCalendar: boolean;
  setShowCalendar: (show: boolean) => void;
  showDurationOptions: boolean;
  setShowDurationOptions: (show: boolean) => void;
  showTimeOptions: boolean;
  setShowTimeOptions: (show: boolean) => void;
  pickupRef: React.RefObject<HTMLInputElement>;
  dropoffRef: React.RefObject<HTMLInputElement>;
}

const BookingCard: React.FC<BookingCardProps> = ({
  isMobile = false,
  date,
  setDate,
  duration,
  setDuration,
  startTime,
  setStartTime,
  price,
  setPrice,
  step,
  setStep,
  guests,
  setGuests,
  occasion,
  setOccasion,
  pickup,
  setPickup,
  dropoff,
  setDropoff,
  pickupRef,
  dropoffRef,
  travelFee,
  setTravelFee,
  showCalendar,
  setShowCalendar,
  showDurationOptions,
  setShowDurationOptions,
  showTimeOptions,
  setShowTimeOptions,
}) => {
  const [showWarning, setShowWarning] = useState(false);
  const router = useRouter();

  const isFormValid = step === 1
    ? date && duration && startTime
    : pickup && dropoff && date && startTime && duration && occasion && guests > 0;

  return (
    <div className={`${isMobile ? 'w-full p-4 rounded-t-3xl h-[90vh] overflow-y-auto' : 'absolute top-[60px] left-[5%] w-[450px] p-6 rounded-3xl'} z-20 bg-white shadow-xl`}>

      <h2 className="text-lg font-bold text-gray-900 leading-snug">
        Book Miami's #1 Open-Air Party Bus Experience
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Perfect for bachelorettes, birthdays, tourists, locals & corporate groups.
      </p>

      {step === 1 && (
        <>
          <div className="border-t pt-4 space-y-4 text-sm text-gray-700">
            <div>
              <span className="block font-medium mb-1">📅 Date</span>
              <button
                onClick={() => setShowCalendar(!showCalendar)}
                className="w-full border rounded-md py-2 px-3 text-left hover:bg-gray-100"
              >
                {format(date, 'MMM d, yyyy')}
              </button>
              {showCalendar && (
                <div className="mt-2 absolute z-50">
                  <Calendar
                    date={date}
                    onChange={(newDate) => {
                      setDate(newDate);
                      setShowCalendar(false);
                    }}
                  />
                </div>
              )}
            </div>

            <div>
              <span className="block font-medium mb-1">⏱️ Duration</span>
              <button
                onClick={() => setShowDurationOptions(!showDurationOptions)}
                className="w-full border rounded-md py-2 px-3 text-left hover:bg-gray-100"
              >
                {duration} hours
              </button>
              {showDurationOptions && (
                <div className="mt-2 absolute bg-white rounded-md shadow-lg p-3 z-50 grid grid-cols-3 gap-2">
                  {[2, 3, 4, 5, 6, 7, 8, 9].map((d) => (
                    <button
                      key={d}
                      onClick={() => {
                        setDuration(d);
                        setShowDurationOptions(false);
                      }}
                      className={`border rounded px-3 py-1 text-sm ${duration === d ? 'bg-pink-100 font-semibold' : 'hover:bg-gray-100'}`}
                    >
                      {d} hours
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <span className="block font-medium mb-1">🕒 Start Time</span>
              <button
                onClick={() => setShowTimeOptions(!showTimeOptions)}
                className="w-full border rounded-md py-2 px-3 text-left hover:bg-gray-100"
              >
                {startTime || 'Select'}
              </button>
              {showTimeOptions && (
                <div className="mt-2 absolute bg-white rounded-md shadow-lg p-3 z-50 grid grid-cols-3 gap-2 max-h-[160px] overflow-y-auto">
                  {Array.from({ length: 30 }, (_, i) => {
                    const hour = 8 + Math.floor(i / 2);
                    const minute = i % 2 === 0 ? '00' : '30';
                    const timeStr = `${hour}:${minute}`;
                    const ampm = `${hour > 12 ? hour - 12 : hour}:${minute} ${hour >= 12 ? 'PM' : 'AM'}`;
                    return (
                      <button
                        key={i}
                        onClick={() => {
                          setStartTime(timeStr);
                          setShowTimeOptions(false);
                        }}
                        className={`border rounded px-2 py-1 text-xs ${startTime === timeStr ? 'bg-pink-100 font-semibold' : 'hover:bg-gray-100'}`}
                      >
                        {ampm}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <div className="mt-4 text-xl font-bold text-gray-900">
            ${price.toLocaleString()} <span className="text-sm font-medium text-gray-500">/ {duration} hr{duration > 1 ? 's' : ''} (excl. fees)</span>
          </div>
          <button
            onClick={() => {
              if (isFormValid) {
                setStep(2);
                setShowWarning(false);
              } else {
                setShowWarning(true);
              }
            }}
            className="mt-3 w-full text-white font-bold py-2.5 px-4 rounded-md transition bg-pink-600"
          >
            ⚡ Instant Book
          </button>
          {showWarning && !isFormValid && (
            <p className="text-sm text-red-600 mt-2 opacity-75">Please fill in all required fields to continue.</p>
          )}
          <p className="text-xs text-center text-gray-500 mt-3">You won't be charged yet</p>
        </>
      )}

      {step === 2 && (
        <div className="mt-4 space-y-4 text-sm text-gray-700">
          <div className="flex justify-between items-center">
            <button
              onClick={() => setStep(1)}
              className="text-sm text-gray-600 hover:text-gray-800 underline"
            >
              ← Go Back
            </button>
          </div>
          <div className="mt-4 text-xl font-bold text-gray-900">
            ${price.toLocaleString()} <span className="text-sm font-medium text-gray-500">/ {duration} hr{duration > 1 ? 's' : ''} (excl. fees)</span>
          </div>
          <div>
            <label className="block font-medium mb-1">👥 Guests</label>
            <div className="flex items-center gap-2">
              <button onClick={() => setGuests(Math.max(1, guests - 1))} className="px-3 py-1 border rounded">-</button>
              <span>{guests}</span>
              <button onClick={() => setGuests(Math.min(30, guests + 1))} className="px-3 py-1 border rounded">+</button>
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">🎉 Occasion</label>
            <select
              className="w-full border rounded-md py-2 px-3"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Bachelorette">Bachelorette</option>
              <option value="Birthday">Birthday</option>
              <option value="Corporate">Corporate</option>
              <option value="Wedding">Wedding</option>
              <option value="Night Out">Night Out</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">📍 Pickup Address</label>
            <input
              type="text"
              className="w-full border rounded-md py-2 px-3"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              ref={pickupRef}
              placeholder="Enter pickup location"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">📍 Dropoff Address</label>
            <input
              type="text"
              className="w-full border rounded-md py-2 px-3"
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              ref={dropoffRef}
              placeholder="Enter drop-off location"
            />
          </div>

          <button
            onClick={() => {
              if (isFormValid) {
                const params = new URLSearchParams({
                  date: date.toISOString(),
                  duration: duration.toString(),
                  guests: guests.toString(),
                  startTime,
                  occasion,
                  pickup,
                  dropoff,
                  travelFee: travelFee.toString(),
                  price: price.toString(),
                });

                router.push(`/checkout?${params.toString()}`);
              } else {
                setShowWarning(true);
              }
            }}
            className="w-full mt-4 bg-pink-600 hover:bg-pink-700 text-white font-bold py-2.5 px-4 rounded-md transition"
          >
            Continue to Checkout
          </button>

          {showWarning && !isFormValid && (
            <p className="text-sm text-red-600 mt-2 opacity-75">Please fill in all required fields to continue.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default BookingCard;