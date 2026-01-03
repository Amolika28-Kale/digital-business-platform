import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, Loader2, ArrowRight, ShieldCheck } from "lucide-react";
import React from "react";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      localStorage.setItem("token", res.data.token);

      if (res.data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/user");
      }
    } catch (err) {
      setError(err.response?.data?.msg || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-white overflow-hidden">
      {/* LEFT SIDE: Visual/Brand (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#0f172a] relative items-center justify-center p-12">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-600 rounded-full blur-[120px] opacity-30"></div>
        
        <div className="relative z-10 max-w-md">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-8"
          >
            <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/50">
              <ShieldCheck className="text-white" size={24} />
            </div>
            <span className="text-2xl font-black text-white tracking-tight">PLATFORM</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-white mb-6 leading-tight"
          >
            Welcome Back to Your <br />
            <span className="text-indigo-400">Digital Empire.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-400 text-lg leading-relaxed"
          >
            Log in to manage your store, track your earnings, and continue your 7-day training program.
          </motion.p>
        </div>
      </div>

      {/* RIGHT SIDE: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-12 bg-slate-50">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100">
            <div className="mb-10">
              <h2 className="text-3xl font-black text-slate-900 mb-2">Login</h2>
              <p className="text-slate-500">Enter your credentials to access your account</p>
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-2xl mb-6 text-sm flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                {error}
              </motion.div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                    <Mail size={20} />
                  </div>
                  <input
                    className="block w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all outline-none text-slate-900 placeholder:text-slate-400"
                    placeholder="name@example.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                   <label className="text-sm font-bold text-slate-700">Password</label>
                   <Link to="/forgot-password" size="sm" className="text-xs font-bold text-indigo-600 hover:text-indigo-500 transition-colors">
                     Forgot Password?
                   </Link>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                    <Lock size={20} />
                  </div>
                  <input
                    className="block w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all outline-none text-slate-900 placeholder:text-slate-400"
                    placeholder="••••••••"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Login Button */}
              <button
                disabled={loading}
                className="group relative w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white py-4 rounded-2xl font-black text-lg shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-2 overflow-hidden"
              >
                {loading ? (
                  <Loader2 className="animate-spin" size={24} />
                ) : (
                  <>
                    Sign In <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-slate-100 text-center">
              <p className="text-slate-500 text-sm">
                Don't have an account?{" "}
                <Link to="/register" className="text-indigo-600 font-bold hover:underline">
                  Create an account
                </Link>
              </p>
            </div>
          </div>
          
          <p className="text-center text-xs mt-8 text-slate-400 font-medium">
            Protected by reCAPTCHA and subject to our <span className="underline">Privacy Policy</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}