'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import StripeWrapper from '@/components/StripeWrapper';
import CheckoutForm from '@/components/CheckoutForm';

export default function CheckoutPage() {
  const params = useSearchParams();
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const date = params.get('date');
  const time = params.get('time');
  const duration = params.get('duration');
  const guests = params.get('guests');
  const occasion = params.get('occasion');
  const pickup = params.get('pickup');
  const dropoff = params.get('dropoff');
  const travelFee = params.get('travelFee');
  const price = params.get('price');

  // Format the date and time
  const formattedDate = date ? format(parseISO(date), 'MMMM d, yyyy') : '';
  const formattedTime = time
    ? new Date(`2025-01-01T${time}:00`).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      })
    : '';

  // Create PaymentIntent as soon as the page loads
  useEffect(() => {
    fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: price,
      }),
    })
      .then(async (res) => {
        if (!res.ok) {
          const error = await res.json();
          throw new Error(error.message);
        }
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [price]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!clientSecret) {
    return <div>Unable to initialize payment</div>;
  }

  return (
    <StripeWrapper clientSecret={clientSecret}>
  <main className="min-h-screen bg-[#f1f2f4] py-10 px-4">
    <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* ✅ MOBILE PRICING BOX - top and hidden on desktop */}
      <div className="block lg:hidden border rounded-lg bg-gray-50 p-6 h-fit">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Pricing Information</h2>
        <div className="space-y-2 text-sm text-gray-800">
          <div className="flex justify-between">
            <span>Base Price</span>
            <span>${Number(price) - Number(travelFee)}</span>
          </div>
          <div className="flex justify-between">
            <span>Travel Fee</span>
            <span>${travelFee}</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-bold text-gray-900">
            <span>Total</span>
            <span>${price}</span>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          Free cancellation up to 48 hours before your booking.
        </p>
      </div>

      {/* LEFT SIDE */}
      <div className="lg:col-span-2 space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>

        <div className="border rounded-lg p-4 bg-gray-100 space-y-2 text-gray-700 text-sm">
          <p><span className="text-base">📅</span> <strong>Date:</strong> {formattedDate}</p>
          <p><span className="text-base">⏰</span> <strong>Time:</strong> {formattedTime}</p>
          <p><span className="text-base">🕓</span> <strong>Duration:</strong> {duration} hours</p>
          <p><span className="text-base">👥</span> <strong>Guests:</strong> {guests}</p>
          <p><span className="text-base">🎉</span> <strong>Occasion:</strong> {occasion}</p>
          <p><span className="text-base">📍</span> <strong>Pickup:</strong> {pickup}</p>
          <p><span className="text-base">📍</span> <strong>Dropoff:</strong> {dropoff}</p>
        </div>

        <CheckoutForm />
      </div>

      {/* ✅ DESKTOP PRICING BOX - bottom and hidden on mobile */}
      <div className="hidden lg:block border rounded-lg bg-gray-50 p-6 h-fit">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Pricing Information</h2>
        <div className="space-y-2 text-sm text-gray-800">
          <div className="flex justify-between">
            <span>Base Price</span>
            <span>${Number(price) - Number(travelFee)}</span>
          </div>
          <div className="flex justify-between">
            <span>Travel Fee</span>
            <span>${travelFee}</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-bold text-gray-900">
            <span>Total</span>
            <span>${price}</span>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          Free cancellation up to 48 hours before your booking.
        </p>
      </div>
    </div>
  </main>
</StripeWrapper>

  );
}
