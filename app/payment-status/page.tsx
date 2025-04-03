'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useStripe } from '@stripe/react-stripe-js';

export default function PaymentStatusPage() {
  const [status, setStatus] = useState<string>('loading');
  const [message, setMessage] = useState<string>('');
  const searchParams = useSearchParams();
  const stripe = useStripe();

  useEffect(() => {
    if (!stripe) return;

    const clientSecret = searchParams.get('payment_intent_client_secret');

    if (!clientSecret) {
      setStatus('error');
      setMessage('No payment information found.');
      return;
    }

    stripe
      .retrievePaymentIntent(clientSecret)
      .then(({ paymentIntent }) => {
        switch (paymentIntent?.status) {
          case 'succeeded':
            setStatus('success');
            setMessage('Payment successful!');
            break;
          case 'processing':
            setStatus('processing');
            setMessage('Your payment is processing.');
            break;
          case 'requires_payment_method':
            setStatus('error');
            setMessage('Your payment was not successful, please try again.');
            break;
          default:
            setStatus('error');
            setMessage('Something went wrong.');
            break;
        }
      })
      .catch((error) => {
        setStatus('error');
        setMessage('An error occurred while checking payment status.');
      });
  }, [stripe, searchParams]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          {status === 'loading' && (
            <div className="animate-pulse">
              <h2 className="text-xl font-semibold">Checking payment status...</h2>
            </div>
          )}

          {status === 'success' && (
            <div className="text-green-600">
              <h2 className="text-2xl font-bold mb-4">Payment Successful!</h2>
              <p>{message}</p>
            </div>
          )}

          {status === 'processing' && (
            <div className="text-blue-600">
              <h2 className="text-2xl font-bold mb-4">Payment Processing</h2>
              <p>{message}</p>
            </div>
          )}

          {status === 'error' && (
            <div className="text-red-600">
              <h2 className="text-2xl font-bold mb-4">Payment Failed</h2>
              <p>{message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
