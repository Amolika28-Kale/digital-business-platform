// src/user/UserDashboard.jsx
import jwtDecode from "jwt-decode";
import React from "react";
export default function UserDashboard() {
  const token = localStorage.getItem("token");
  const user = jwtDecode(token);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
        Welcome, {user.name || "User"} 🎉
      </h1>

      <div className="bg-white p-6 rounded shadow">
        <p className="text-lg">Your account is active</p>
        <p className="text-green-600 font-semibold mt-2">
          Payment Status: Active
        </p>
      </div>
    </div>
  );
}
