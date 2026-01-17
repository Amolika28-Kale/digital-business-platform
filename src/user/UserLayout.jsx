import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  CreditCard, 
  User, 
  LogOut, 
  Menu, 
  X 
} from "lucide-react";

export default function UserLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navItems = [
    { to: "/user", label: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { to: "/user/payments", label: "Payments", icon: <CreditCard size={20} /> },
    { to: "/user/profile", label: "Profile", icon: <User size={20} /> },
  ];

  const activeClass = "flex items-center gap-3 bg-indigo-700 text-white px-4 py-3 rounded-lg transition-all";
  const inactiveClass = "flex items-center gap-3 text-indigo-100 hover:bg-indigo-500 hover:text-white px-4 py-3 rounded-lg transition-all";

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Mobile Header (Visible only on small screens) */}
      <header className="lg:hidden fixed top-0 left-0 right-0 bg-indigo-600 text-white p-4 flex justify-between items-center z-50 shadow-md">
        <h2 className="font-bold text-lg">User Panel</h2>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Sidebar Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-indigo-600 text-white p-6 transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:inset-0
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className="flex flex-col h-full">
          <div className="hidden lg:block mb-10">
            <h2 className="text-2xl font-black tracking-wider uppercase text-indigo-200">
              My<span className="text-white">App</span>
            </h2>
          </div>

          <nav className="flex-1 space-y-2 mt-10 lg:mt-0">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </NavLink>
            ))}
          </nav>

          <button
            onClick={logout}
            className="mt-auto flex items-center gap-3 bg-indigo-700/50 hover:bg-red-500 text-white px-4 py-3 rounded-lg transition-colors border border-indigo-400/30"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Overlay for mobile when sidebar is open */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 mt-16 lg:mt-0">
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}