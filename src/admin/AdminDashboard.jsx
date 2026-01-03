import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    paidUsers: 0,
    totalRevenue: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/admin/dashboard",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setStats(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Dashboard error", error);
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return <p className="text-gray-600">Loading dashboard...</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* TOTAL USERS */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold text-gray-600">Total Users</h3>
          <p className="text-3xl font-bold mt-2">
            {stats.totalUsers}
          </p>
        </div>

        {/* PAID USERS */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold text-gray-600">Paid Users</h3>
          <p className="text-3xl font-bold mt-2">
            {stats.paidUsers}
          </p>
        </div>

        {/* TOTAL REVENUE */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold text-gray-600">Total Revenue</h3>
          <p className="text-3xl font-bold mt-2 text-green-600">
            ₹ {stats.totalRevenue}
          </p>
        </div>
      </div>
    </div>
  );
}
