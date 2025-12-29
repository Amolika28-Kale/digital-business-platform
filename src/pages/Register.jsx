import React from "react";
export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-white p-8 shadow rounded w-96">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <input className="border p-2 w-full mb-3" placeholder="Name" />
        <input className="border p-2 w-full mb-3" placeholder="Email" />
        <input className="border p-2 w-full mb-3" placeholder="Mobile" />
        <input className="border p-2 w-full mb-3" placeholder="Password" type="password" />
        <button className="bg-indigo-600 text-white w-full py-2 rounded">Continue</button>
      </form>
    </div>
  );
}