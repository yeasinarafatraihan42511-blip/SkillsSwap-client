import { loadStripe } from "@stripe/stripe-js";

// Stripe publishable key (frontend safe)
export const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);