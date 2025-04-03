import Stripe from 'stripe';
import { NextResponse } from 'next/server';

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount, name, email, phone } = body;

    // Create a PaymentIntent with automatic payment methods
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(Number(amount) * 100),
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true, // This enables dynamic payment methods
      },
      metadata: {
        name,
        email,
        phone,
      },
      description: 'Rumba Tours Booking',
      receipt_email: email,
    });

    // Return the client secret
    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Error creating payment intent' },
      { status: 500 }
    );
  }
}
