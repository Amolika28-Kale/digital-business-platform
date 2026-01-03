import { Link } from "react-router-dom";
import React from "react";
export default function PaymentSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow text-center max-w-md">
        <h1 className="text-2xl font-bold text-green-600 mb-3">
          🎉 Payment Successful
        </h1>
        <p className="text-gray-600 mb-6">
          Your payment is confirmed.  
          Login credentials will be sent to your email shortly.
        </p>

        <Link
          to="/login"
          className="bg-indigo-600 text-white px-6 py-2 rounded font-semibold"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
}
