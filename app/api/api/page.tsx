'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  // Get booking details from URL parameters
  const date = searchParams.get('date');
  const duration = searchParams.get('duration');
  const guests = searchParams.get('guests');
  const startTime = searchParams.get('startTime');
  const occasion = searchParams.get('occasion');
  const pickup = searchParams.get('pickup');
  const dropoff = searchParams.get('dropoff');
  const travelFee = searchParams.get('travelFee');
  const price = searchParams.get('price');

  // Additional customer information
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          phone,
          date,
          duration,
          guests,
          startTime,
          occasion,
          pickup,
          dropoff,
          travelFee,
          price: Number(price),
        }),
      });

      const data = await response.json();
      
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe
      }
    } catch (error) {
      console.error('Checkout error:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      
      {/* Booking Summary */}
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
        <div className="space-y-2">
          <p><strong>Date:</strong> {new Date(date!).toLocaleDateString()}</p>
          <p><strong>Time:</strong> {startTime}</p>
          <p><strong>Duration:</strong> {duration} hours</p>
          <p><strong>Guests:</strong> {guests}</p>
          <p><strong>Occasion:</strong> {occasion}</p>
          <p><strong>Pickup:</strong> {pickup}</p>
          <p><strong>Dropoff:</strong> {dropoff}</p>
          <p><strong>Travel Fee:</strong> ${travelFee}</p>
          <p className="text-xl font-bold mt-4">Total: ${price}</p>
        </div>
      </div>

      {/* Customer Information Form */}
      <div className="space-y-4 bg-white p-6 rounded-lg border">
        <h2 className="text-xl font-semibold">Customer Information</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <button
          onClick={handleCheckout}
          disabled={loading || !email || !name || !phone}
          className={`w-full mt-6 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-colors ${
            loading || !email || !name || !phone ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      </div>
    </div>
  );
}
