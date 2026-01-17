import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Search,
  MoreVertical,
  Mail,
  CircleCheck,
  CircleX,
  Ban,
  RotateCcw,
  Unlock,
  Globe,
} from "lucide-react";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionUser, setActionUser] = useState(null);

  const token = localStorage.getItem("token");

  /* ================= FETCH USERS ================= */

  const fetchUsers = async () => {
    try {
      const res = await axios.get(
        "https://digital-business-backend.onrender.com/api/admin/users",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUsers(res.data);
    } catch (err) {
      console.error("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  /* ================= ACTION HANDLERS ================= */

  const disableUser = async (id) => {
    if (!window.confirm("Disable this user?")) return;
    await axios.patch(
      `/api/admin/users/${id}/disable`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchUsers();
  };

  const enableUser = async (id) => {
    await axios.patch(
      `/api/admin/users/${id}/enable`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchUsers();
  };

  const resetPassword = async (id) => {
    if (!window.confirm("Reset password and email user?")) return;
    await axios.post(
      `/api/admin/users/${id}/reset-password`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    alert("New password sent to user email");
  };

  const generateWebsite = async (id) => {
    if (!window.confirm("Generate website for this user?")) return;

    try {
      await axios.post(
        `https://digital-business-backend.onrender.com/api/admin/websites/generate/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Website generated successfully");
      setActionUser(null);
      fetchUsers();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to generate website");
    }
  };

  /* ================= UI ================= */

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">User Management</h1>
        <p className="text-sm text-slate-500">
          Activate, disable, reset accounts & generate websites
        </p>
      </div>

      {/* Search */}
      <div className="relative w-full md:w-96">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          size={18}
        />
        <input
          placeholder="Search users..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg"
        />
      </div>

      {/* Table */}
      <div className="bg-white border rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold">USER</th>
              <th className="px-6 py-4 text-left text-xs font-bold">PAYMENT</th>
              <th className="px-6 py-4 text-left text-xs font-bold">STATUS</th>
              <th className="px-6 py-4 text-right text-xs font-bold">ACTIONS</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {loading ? (
              <tr>
                <td colSpan="4" className="p-6 text-center text-slate-400">
                  Loading users...
                </td>
              </tr>
            ) : (
              users.map((u) => (
                <tr key={u._id} className="hover:bg-slate-50">
                  {/* USER */}
                  <td className="px-6 py-4">
                    <p className="font-semibold">{u.name}</p>
                    <p className="text-xs text-slate-400 flex items-center gap-1">
                      <Mail size={12} />
                      {u.email}
                    </p>
                  </td>

                  {/* PAYMENT */}
                  <td className="px-6 py-4">
                    {u.isPaid ? (
                      <span className="badge badge-success flex items-center gap-1">
                        <CircleCheck size={14} /> Paid
                      </span>
                    ) : (
                      <span className="badge badge-muted flex items-center gap-1">
                        <CircleX size={14} /> Pending
                      </span>
                    )}
                  </td>

                  {/* ACTIVE */}
                  <td className="px-6 py-4">
                    {u.isActive ? (
                      <span className="badge badge-success">Active</span>
                    ) : (
                      <span className="badge badge-danger">Disabled</span>
                    )}
                  </td>

                  {/* ACTIONS */}
                  <td className="px-6 py-4 text-right relative">
                    <button
                      onClick={() =>
                        setActionUser(actionUser === u._id ? null : u._id)
                      }
                      className="p-2 hover:bg-slate-100 rounded-lg"
                    >
                      <MoreVertical size={18} />
                    </button>

                    {actionUser === u._id && (
                      <div className="absolute right-6 top-12 bg-white border rounded-xl shadow-md w-52 z-50">
                        {/* 🔥 GENERATE WEBSITE */}
                        {u.isPaid && !u.websiteGenerated && (
                          <button
                            onClick={() => generateWebsite(u._id)}
                            className="action-btn text-indigo-600"
                          >
                            <Globe size={16} /> Generate Website
                          </button>
                        )}

                        {/* ENABLE / DISABLE */}
                        {u.isActive ? (
                          <button
                            onClick={() => disableUser(u._id)}
                            className="action-btn text-red-600"
                          >
                            <Ban size={16} /> Disable User
                          </button>
                        ) : (
                          <button
                            onClick={() => enableUser(u._id)}
                            className="action-btn text-emerald-600"
                          >
                            <Unlock size={16} /> Enable User
                          </button>
                        )}

                        {/* RESET PASSWORD */}
                        <button
                          onClick={() => resetPassword(u._id)}
                          className="action-btn"
                        >
                          <RotateCcw size={16} /> Reset Password
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
