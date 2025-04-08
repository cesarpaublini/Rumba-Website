import { NextRequest } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature');
  const body = await req.text(); // Raw body needed for Stripe

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig!, endpointSecret);
  } catch (err: any) {
    console.error('⚠️  Webhook error:', err.message);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // ✅ Handle events
  switch (event.type) {
    case 'payment_intent.succeeded':
      const intent = event.data.object as Stripe.PaymentIntent;
      console.log(`✅ Payment for ${intent.amount} succeeded.`);
      break;
    case 'payment_intent.payment_failed':
      const failedIntent = event.data.object as Stripe.PaymentIntent;
      console.log(`❌ Payment failed:`, failedIntent);
      break;
    default:
      console.log(`ℹ️  Unhandled event type: ${event.type}`);
  }

  return new Response(JSON.stringify({ received: true }), { status: 200 });
}

// Required in App Router to prevent static optimization
export const dynamic = 'force-dynamic';
