import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import React from "react";
import { 
  LayoutDashboard, 
  Users, 
  CreditCard, 
  UserCircle, 
  LogOut,
  ChevronRight 
} from "lucide-react"; // Highly recommended for a professional look

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Users", path: "/admin/users", icon: <Users size={20} /> },
    { name: "Payments", path: "/admin/payments", icon: <CreditCard size={20} /> },
    { name: "Profile", path: "/admin/profile", icon: <UserCircle size={20} /> },
  ];

  return (
    <div className="min-h-screen flex bg-[#f8fafc]">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-200 flex flex-col hidden md:flex">
        <div className="p-8">
          <div className="flex items-center gap-3 px-2">
            <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
              D
            </div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-800">
              Platform<span className="text-indigo-600">Admin</span>
            </h2>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive 
                    ? "bg-indigo-50 text-indigo-700" 
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`${isActive ? "text-indigo-600" : "text-slate-400 group-hover:text-slate-600"}`}>
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.name}</span>
                </div>
                {isActive && <ChevronRight size={16} className="text-indigo-400" />}
              </Link>
            );
          })}
        </nav>

        {/* User Section / Logout */}
        <div className="p-4 border-t border-slate-100">
          <button
            onClick={logout}
            className="flex items-center gap-3 w-full px-4 py-3 text-slate-500 hover:text-red-600 hover:bg-red-50 transition-colors rounded-xl font-medium"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header for Mobile & Profile info */}
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-end px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-slate-700">Alex Johnson</p>
              <p className="text-xs text-slate-400">Super Admin</p>
            </div>
            <img 
              src="https://ui-avatars.com/api/?name=Alex+Johnson&background=6366f1&color=fff" 
              className="h-10 w-10 rounded-full border-2 border-slate-100 shadow-sm"
              alt="Avatar"
            />
          </div>
        </header>

        <main className="p-8 max-w-7xl mx-auto w-full">
          {/* Transition wrapper for Outlet */}
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}