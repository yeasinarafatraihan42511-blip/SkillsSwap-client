"use client";

import { useState } from "react";

export default function PricingPage() {
const [loadingPlan, setLoadingPlan] = useState(null);

const handlePayment = async (plan) => {
try {
setLoadingPlan(plan);

  const res = await fetch("/api/subscription", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ plan }),
  });

  const data = await res.json();

  if (!data.clientSecret) {
    alert("Payment init failed");
    return;
  }

  console.log("Client Secret:", data.clientSecret);

  // এখানে পরে Stripe payment UI connect করবে
  alert(`${plan.toUpperCase()} plan selected. Ready for payment.`);

} catch (error) {
  console.error(error);
  alert("Something went wrong");
} finally {
  setLoadingPlan(null);
}

};

return (
<div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">

  <h1 className="text-3xl font-bold mb-10">Choose Your Plan</h1>

  <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">

    {/* Basic */}
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-bold">Basic</h2>
      <p className="text-gray-500">$5 / month</p>

      <button
        onClick={() => handlePayment("basic")}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-xl"
      >
        {loadingPlan === "basic" ? "Processing..." : "Buy Basic"}
      </button>
    </div>

    {/* Pro */}
    <div className="bg-white p-6 rounded-2xl shadow border-2 border-blue-500">
      <h2 className="text-xl font-bold">Pro</h2>
      <p className="text-gray-500">$10 / month</p>

      <button
        onClick={() => handlePayment("pro")}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl"
      >
        {loadingPlan === "pro" ? "Processing..." : "Buy Pro"}
      </button>
    </div>

    {/* Premium */}
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-bold">Premium</h2>
      <p className="text-gray-500">$20 / month</p>

      <button
        onClick={() => handlePayment("premium")}
        className="mt-4 w-full bg-purple-600 text-white py-2 rounded-xl"
      >
        {loadingPlan === "premium" ? "Processing..." : "Buy Premium"}
      </button>
    </div>

  </div>
</div>
);
}