import { Link, Outlet, useNavigate } from "react-router-dom";
import React from "react";

export default function AdminLayout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-700 text-white p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

        <nav className="space-y-4">
          <Link to="/admin/dashboard" className="block hover:text-indigo-200">
            Dashboard
          </Link>
          <Link to="/admin/users" className="block hover:text-indigo-200">
            Users
          </Link>
          <Link to="/admin/payments" className="block hover:text-indigo-200">
            Payments
          </Link>
          <Link to="/admin/profile" className="block hover:text-indigo-200">
            Profile
          </Link>

          <button
            onClick={logout}
            className="mt-6 bg-red-500 w-full py-2 rounded"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
