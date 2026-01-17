import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  UserCircle,
  LogOut,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Users", path: "/admin/users", icon: <Users size={20} /> },
    { name: "Payments", path: "/admin/payments", icon: <CreditCard size={20} /> },
    { name: "Pending Users", path: "/admin/pending-users", icon: <UserCircle size={20} /> },
    { name: "Websites", path: "/admin/websites", icon: <CreditCard size={20} /> },
    { name: "Profile", path: "/admin/profile", icon: <UserCircle size={20} /> },
  ];

  const Sidebar = ({ mobile = false }) => (
    <aside
      className={`bg-white w-72 border-r border-slate-200 flex flex-col
      ${mobile ? "h-full" : "hidden md:flex"}`}
    >
      {/* Logo */}
      <div className="p-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
            D
          </div>
          <h2 className="text-xl font-semibold text-slate-800">
            Platform<span className="text-indigo-600">Admin</span>
          </h2>
        </div>

        {mobile && (
          <button onClick={() => setSidebarOpen(false)}>
            <X className="text-slate-600" />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all
                ${
                  isActive
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                }`}
            >
              <div className="flex items-center gap-3">
                <span className={isActive ? "text-indigo-600" : "text-slate-400"}>
                  {item.icon}
                </span>
                <span className="font-medium">{item.name}</span>
              </div>
              {isActive && <ChevronRight size={16} />}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t">
        <button
          onClick={logout}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-xl
            text-slate-500 hover:text-red-600 hover:bg-red-50 transition"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="relative z-50 h-full w-72">
            <Sidebar mobile />
          </div>
        </div>
      )}

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-4 md:px-8 sticky top-0 z-30">
          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            >
              <Menu />
            </button>

            <h1 className="text-lg font-semibold text-slate-700 hidden sm:block">
              Admin Panel
            </h1>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-xs text-slate-400">Super Admin</p>
            </div>
          
          </div>
        </header>

        {/* Content */}
        <main className="p-4 md:p-8 max-w-7xl mx-auto w-full">
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
