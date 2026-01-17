import { useEffect, useState } from "react";
import axios from "axios";
import {
  Users,
  TrendingUp,
  DollarSign,
  CreditCard,
  ArrowUpRight,
  Clock,
} from "lucide-react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    paidUsers: 0,
    pendingUsers: 0,
    totalPayments: 0,
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
      } catch (err) {
        console.error("Dashboard error", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboard();
  }, []);

  /* ================= LOADING STATE ================= */
  if (loading) {
    return (
      <div className="animate-pulse space-y-8">
        <div className="h-8 bg-slate-200 rounded w-56" />
        <div className="grid md:grid-cols-5 gap-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-32 bg-slate-100 rounded-2xl" />
          ))}
        </div>
      </div>
    );
  }

  /* ================= CARD DATA ================= */
  const cards = [
    {
      title: "Total Users",
      value: stats.totalUsers,
      icon: <Users size={24} className="text-blue-600" />,
      bg: "bg-blue-50",
      trend: "+12%",
    },
    {
      title: "Paid Users",
      value: stats.paidUsers,
      icon: <TrendingUp size={24} className="text-emerald-600" />,
      bg: "bg-emerald-50",
      trend: "+8%",
    },
    {
      title: "Pending Users",
      value: stats.pendingUsers,
      icon: <Clock size={24} className="text-amber-600" />,
      bg: "bg-amber-50",
      trend: "Needs Action",
    },
    {
      title: "Successful Payments",
      value: stats.totalPayments,
      icon: <CreditCard size={24} className="text-indigo-600" />,
      bg: "bg-indigo-50",
      trend: "+5%",
    },
    {
      title: "Total Revenue",
      value: `₹ ${stats.totalRevenue.toLocaleString("en-IN")}`,
      icon: <DollarSign size={24} className="text-purple-600" />,
      bg: "bg-purple-50",
      trend: "+18%",
    },
  ];

  return (
    <div className="space-y-10">
      {/* ================= HEADER ================= */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Dashboard Overview
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Real-time snapshot of platform performance
        </p>
      </div>

      {/* ================= STATS GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {cards.map((c, i) => (
          <div
            key={i}
            className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all"
          >
            <div className="flex justify-between items-start">
              <div className={`${c.bg} p-3 rounded-xl`}>
                {c.icon}
              </div>
              <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                <ArrowUpRight size={14} />
                {c.trend}
              </span>
            </div>

            <div className="mt-4">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                {c.title}
              </h3>
              <p className="text-2xl font-bold text-slate-900 mt-1">
                {c.value}
              </p>
            </div>

            {/* Progress Decoration */}
            <div className="mt-4 w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500 w-[65%] group-hover:w-[75%] transition-all duration-700" />
            </div>
          </div>
        ))}
      </div>

      {/* ================= FUTURE SECTION ================= */}
      <div className="bg-white border border-dashed border-slate-300 rounded-2xl p-10 text-center">
        <p className="text-slate-400 font-medium">
          🚀 Coming Soon: Revenue Charts, Daily Growth & Conversion Analytics
        </p>
      </div>
    </div>
  );
}
