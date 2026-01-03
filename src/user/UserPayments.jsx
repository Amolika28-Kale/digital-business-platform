// src/user/UserPayments.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

export default function UserPayments() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/payment/my",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPayments(res.data);
    };

    fetchPayments();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Payments</h2>

      <table className="bg-white w-full rounded shadow">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Amount</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(p => (
            <tr key={p._id} className="text-center border-t">
              <td>₹{p.amount}</td>
              <td className="text-green-600">{p.status}</td>
              <td>{new Date(p.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
