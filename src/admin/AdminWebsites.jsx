import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminWebsites() {
  const [websites, setWebsites] = useState([]);

  const fetchWebsites = async () => {
    const res = await axios.get(
      "https://digital-business-backend.onrender.com/api/admin/websites",
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );
    setWebsites(res.data);
  };

  useEffect(() => {
    fetchWebsites();
  }, []);

  const updateStatus = async (id, status) => {
    await axios.patch(
      `https://digital-business-backend.onrender.com/api/admin/websites/status/${id}`,
      { status },
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );
    fetchWebsites();
  };

  return (
    <div className="bg-white rounded-2xl p-6 border">
      <h1 className="text-2xl font-bold mb-6">Website Management</h1>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-slate-500 border-b">
            <th>User</th>
            <th>Subdomain</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {websites.map(w => (
            <tr key={w._id} className="border-b">
              <td>
                <div className="font-semibold">{w.userId.name}</div>
                <div className="text-xs text-slate-400">{w.userId.email}</div>
              </td>
              <td>
                {w.subdomain}.digitalbusiness.com
              </td>
              <td>
                <span className={`px-2 py-1 rounded text-xs ${
                  w.status === "active"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}>
                  {w.status}
                </span>
              </td>
              <td>
                {w.status !== "active" && (
                  <button
                    onClick={() => updateStatus(w._id, "active")}
                    className="bg-indigo-600 text-white px-3 py-1 rounded"
                  >
                    Activate
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
