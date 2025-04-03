'use client';

import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '@/lib/stripe';
import { Appearance } from '@stripe/stripe-js';

interface StripeWrapperProps {
  clientSecret: string;
  children: React.ReactNode;
}

export default function StripeWrapper({ clientSecret, children }: StripeWrapperProps) {
  // Define appearance options for the Payment Element
  const appearance: Appearance = {
    theme: 'stripe',
    variables: {
      colorPrimary: '#db2777', // pink-600
      colorBackground: '#ffffff',
      colorText: '#1f2937', // gray-900
      colorDanger: '#dc2626', // red-600
      fontFamily: 'system-ui, sans-serif',
      spacingUnit: '4px',
      borderRadius: '8px',
    },
  };

  // Configure options for Elements
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      {children}
    </Elements>
  );
}
