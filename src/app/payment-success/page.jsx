"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function PaymentSuccessPage() {
  const searchParams =
    useSearchParams();

  const sessionId =
    searchParams.get(
      "session_id"
    );

  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-lg">

        <h1 className="text-4xl font-bold text-green-600">
          Payment Successful
        </h1>

        <p className="mt-4 text-gray-600">
          Transaction completed
          successfully.
        </p>

        <p className="mt-4 text-sm">
          Session:
          {sessionId}
        </p>

        <Link
          href="/dashboard/client"
          className="btn btn-primary mt-6"
        >
          Go To Dashboard
        </Link>

      </div>

    </div>
  );
}