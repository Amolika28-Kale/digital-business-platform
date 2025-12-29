import React from "react";
export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-white p-8 shadow rounded w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input className="border p-2 w-full mb-3" placeholder="Email or Mobile" />
        <input className="border p-2 w-full mb-3" placeholder="Password" type="password" />
        <button className="bg-indigo-600 text-white w-full py-2 rounded">Login</button>
      </form>
    </div>
  );
}