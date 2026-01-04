import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { 
  CreditCard, 
  DownloadCloud, 
  ArrowUpRight, 
  Search, 
  FileText,
  Calendar
} from "lucide-react";

export default function AdminPayments() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://digital-business-backend.onrender.com/api/admin/payments", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then(res => {
      setPayments(res.data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  // Helper to style status badges
  const getStatusStyle = (status) => {
    const s = status?.toLowerCase();
    if (s === "completed" || s === "success") return "bg-emerald-50 text-emerald-700 border-emerald-100";
    if (s === "pending") return "bg-amber-50 text-amber-700 border-amber-100";
    return "bg-rose-50 text-rose-700 border-rose-100";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Financial Ledger</h1>
          <p className="text-slate-500 text-sm mt-1">Track all incoming revenue and transaction histories.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-all shadow-sm">
          <DownloadCloud size={18} />
          Export CSV
        </button>
      </div>

      {/* Main Table Card */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        {/* Table Header / Search */}
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
           <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Filter by transaction ID..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50/50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
            />
          </div>
          <div className="flex gap-2">
            <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-lg border border-slate-200"><Calendar size={18}/></button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Transaction User</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Invoice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                [1, 2, 3].map(i => (
                  <tr key={i} className="animate-pulse">
                    <td colSpan="4" className="px-6 py-6"><div className="h-4 bg-slate-100 rounded w-full"></div></td>
                  </tr>
                ))
              ) : payments.map((p) => (
                <tr key={p._id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                        <CreditCard size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800">{p.userId?.name || "Unknown User"}</p>
                        <p className="text-xs text-slate-400">{p.userId?.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-mono font-bold text-slate-700">
                        ₹{p.amount?.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium uppercase">INR</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${getStatusStyle(p.status)}`}>
                      {p.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="flex items-center gap-2 text-xs font-bold text-indigo-600 hover:text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors">
                      <FileText size={14} />
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {!loading && payments.length === 0 && (
          <div className="py-20 text-center">
            <div className="bg-slate-50 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
              <ArrowUpRight size={32} />
            </div>
            <h3 className="text-slate-800 font-semibold">No transactions found</h3>
            <p className="text-slate-500 text-sm">When you receive payments, they will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
}