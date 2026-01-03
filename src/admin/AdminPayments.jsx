import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

export default function AdminPayments() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/admin/payments", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then(res => setPayments(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Payments</h2>

      <table className="w-full bg-white rounded shadow">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">User</th>
            <th>Email</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(p => (
            <tr key={p._id} className="border-t">
              <td className="p-2">{p.userId?.name}</td>
              <td>{p.userId?.email}</td>
              <td>₹{p.amount}</td>
              <td>{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
