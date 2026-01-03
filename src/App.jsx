import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PaymentSuccess from "./pages/PaymentSuccess";

// Admin
import AdminRoute from "./routes/AdminRoute";
import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./admin/AdminDashboard";
import AdminUsers from "./admin/AdminUsers";
import AdminPayments from "./admin/AdminPayments";
import AdminProfile from "./admin/AdminProfile";
import UserRoute from "./routes/UserRoute";
import UserLayout from "./user/UserLayout";
import UserDashboard from "./user/UserDashboard";
import UserPayments from "./user/UserPayments";
import UserProfile from "./user/UserProfile";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ---------- PUBLIC ---------- */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />

        {/* ---------- USER PANEL ---------- */}
        <Route
          path="/user"
          element={
            <UserRoute>
              <UserLayout />
            </UserRoute>
          }
        >
          <Route index element={<UserDashboard />} />
          <Route path="payments" element={<UserPayments />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>

        {/* ---------- ADMIN PANEL ---------- */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="payments" element={<AdminPayments />} />
          <Route path="profile" element={<AdminProfile />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
