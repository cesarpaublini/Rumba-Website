import { NextApiRequest, NextApiResponse } from 'next';
import { buffer } from 'micro';
import Stripe from 'stripe';

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2020-08-27',
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export const config = {
  api: {
    bodyParser: false, // Stripe requires the body to be raw
  },
};

const webhookHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    // Construct the event from the request body and signature
    event = stripe.webhooks.constructEvent(await buffer(req), sig!, endpointSecret);
  } catch (err) {
    console.error('Error while verifying webhook signature:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log(`PaymentIntent for ${paymentIntent.amount_received} was successful!`);
      // Handle successful payment, update your database, etc.
      break;
    case 'payment_intent.failed':
      const paymentFailed = event.data.object;
      console.log('Payment failed:', paymentFailed);
      // Handle failed payment, notify the user, etc.
      break;
    // Add more cases for other events as needed
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  // Respond with a 200 status code to acknowledge receipt of the event
  res.status(200).json({ received: true });
};

export default webhookHandler;
