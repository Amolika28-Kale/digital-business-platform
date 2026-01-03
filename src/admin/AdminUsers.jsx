import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/admin/users", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then(res => setUsers(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Users</h2>

      <table className="w-full bg-white rounded shadow">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Name</th>
            <th>Email</th>
            <th>Paid</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u._id} className="border-t">
              <td className="p-2">{u.name}</td>
              <td>{u.email}</td>
              <td>{u.isPaid ? "✅" : "❌"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
