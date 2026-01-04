import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { Users, CreditCard, TrendingUp, DollarSign, ArrowUpRight } from "lucide-react";

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
          "https://digital-business-backend.onrender.com/api/admin/dashboard",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setStats(res.data);
      } catch (error) {
        console.error("Dashboard error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboard();
  }, []);

  // Classy Loading State (Skeleton Effect)
  if (loading) {
    return (
      <div className="animate-pulse space-y-8">
        <div className="h-8 bg-slate-200 rounded w-48"></div>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-32 bg-slate-100 rounded-2xl"></div>
          ))}
        </div>
      </div>
    );
  }

  const cardData = [
    {
      title: "Total Users",
      value: stats.totalUsers,
      icon: <Users className="text-blue-600" size={24} />,
      bgColor: "bg-blue-50",
      trend: "+12%", // Static example, can be dynamic
    },
    {
      title: "Paid Users",
      value: stats.paidUsers,
      icon: <TrendingUp className="text-purple-600" size={24} />,
      bgColor: "bg-purple-50",
      trend: "+5%",
    },
    {
      title: "Total Revenue",
      value: `₹ ${stats.totalRevenue.toLocaleString()}`,
      icon: <DollarSign className="text-emerald-600" size={24} />,
      bgColor: "bg-emerald-50",
      trend: "+18%",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Dashboard Overview</h1>
        <p className="text-slate-500 text-sm mt-1">Monitor your platform's key performance indicators.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {cardData.map((item, index) => (
          <div 
            key={index} 
            className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300"
          >
            <div className="flex justify-between items-start">
              <div className={`${item.bgColor} p-3 rounded-xl`}>
                {item.icon}
              </div>
              <span className="flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                <ArrowUpRight size={14} />
                {item.trend}
              </span>
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                {item.title}
              </h3>
              <p className="text-3xl font-bold text-slate-900 mt-1">
                {item.value}
              </p>
            </div>
            
            {/* Subtle Progress Bar Decoration */}
            <div className="mt-4 w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
               <div className={`h-full bg-indigo-500 rounded-full w-[70%] group-hover:w-[75%] transition-all duration-700`}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder for future sections (Recent Activity, Charts, etc.) */}
      <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center border-dashed">
        <p className="text-slate-400 font-medium">Coming Soon: Interactive Revenue Analytics Chart</p>
      </div>
    </div>
  );
}