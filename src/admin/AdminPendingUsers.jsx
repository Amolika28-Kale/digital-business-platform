import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  CheckCircle,
  Clock,
  RefreshCcw,
  Trash2,
} from "lucide-react";

export default function AdminPendingUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  const fetchPendingUsers = async () => {
    try {
      const res = await axios.get(
        "https://digital-business-backend.onrender.com/api/admin/pending-users",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUsers(res.data);
    } catch (err) {
      console.error("Failed to load pending users", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPendingUsers();
  }, []);

  const verifyPayment = async (id) => {
    if (!window.confirm("Verify payment and activate user?")) return;
    await axios.post(
      `https://digital-business-backend.onrender.com/api/admin/pending-users/${id}/verify`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchPendingUsers();
  };

  const resendLink = async (id) => {
    await axios.post(
      `https://digital-business-backend.onrender.com/api/admin/pending-users/${id}/resend-link`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    alert("Payment link resent");
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Delete pending user?")) return;
    await axios.delete(
      `https://digital-business-backend.onrender.com/api/admin/pending-users/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchPendingUsers();
  };

  if (loading) {
    return <div className="animate-pulse h-40 bg-slate-100 rounded-2xl" />;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Pending Users</h1>
        <p className="text-slate-500 text-sm">
          Users who registered but haven’t completed payment.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">
                User
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">
                Mobile
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {users.map((u) => (
              <tr key={u._id} className="hover:bg-slate-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center">
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="font-semibold">{u.name}</p>
                      <p className="text-xs text-slate-400">{u.email}</p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 text-sm text-slate-600">
                  {u.mobile}
                </td>

                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => verifyPayment(u._id)}
                      className="flex items-center gap-1 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg text-xs font-bold"
                    >
                      <CheckCircle size={14} /> Verify
                    </button>

                    <button
                      onClick={() => resendLink(u._id)}
                      className="flex items-center gap-1 bg-amber-50 text-amber-700 px-3 py-1.5 rounded-lg text-xs font-bold"
                    >
                      <RefreshCcw size={14} /> Resend
                    </button>

                    <button
                      onClick={() => deleteUser(u._id)}
                      className="flex items-center gap-1 bg-rose-50 text-rose-700 px-3 py-1.5 rounded-lg text-xs font-bold"
                    >
                      <Trash2 size={14} /> Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {users.length === 0 && (
          <div className="py-16 text-center text-slate-400">
            No pending users 🎉
          </div>
        )}
      </div>
    </div>
  );
}
