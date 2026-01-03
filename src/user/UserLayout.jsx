// src/user/UserLayout.jsx
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import React from "react";

export default function UserLayout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-indigo-600 text-white p-6">
        <h2 className="text-xl font-bold mb-6">User Panel</h2>

        <nav className="space-y-4">
          <NavLink to="/user">Dashboard</NavLink>
          <NavLink to="/user/payments">Payments</NavLink>
          <NavLink to="/user/profile">Profile</NavLink>
        </nav>

        <button
          onClick={logout}
          className="mt-10 bg-red-500 px-4 py-2 rounded"
        >
          Logout
        </button>
      </aside>

      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
