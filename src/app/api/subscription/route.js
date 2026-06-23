// import { NextResponse } from 'next/server';
// export async function GET() {
//     return NextResponse.json({ message: 'Subscription API is working!' });          

// }

import { NextResponse } from "next/server";
import {stripe} from '@/lib/stripe';

export async function POST(req) {
  try {
    const body = await req.json();

    const { plan } = body;

   
    let amount = 0;

    if (plan === "basic") amount = 5;
    if (plan === "pro") amount = 10;
    if (plan === "premium") amount = 20;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // cents
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}