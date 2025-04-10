import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

export async function POST(req: Request) {
  const { amount, currency = 'usd', customerId, paymentMethodId } = await req.json()

  try {
    // Attach the payment method to the customer (optional if already done)
    await stripe.paymentMethods.attach(paymentMethodId, {
      customer: customerId,
    })

    // Set the default payment method for the customer
    await stripe.customers.update(customerId, {
      invoice_settings: {
        default_payment_method: paymentMethodId,
      },
    })

    // Create and confirm a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      customer: customerId,
      amount,
      currency,
      payment_method: paymentMethodId,
      confirm: true,
    })

    return NextResponse.json({ success: true, paymentIntent })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 })
  }
}