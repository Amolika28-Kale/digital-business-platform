import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, Lock, CreditCard, CheckCircle2, ShieldCheck } from "lucide-react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleEnroll = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "http://localhost:5000/api/payment/create-checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url; 
      } else {
        alert("Something went wrong. Try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Payment initiation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-indigo-100/50 to-transparent -z-0"></div>

      <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-12 items-start relative z-10">
        
        {/* LEFT SIDE: Order Summary & Trust */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:block space-y-8"
        >
          <div>
            <h1 className="text-4xl font-black text-slate-900 leading-tight mb-4">
              Join the <span className="text-indigo-600">7-Day Bootcamp</span> & Start Your Business
            </h1>
            <p className="text-slate-600 text-lg">
              Complete your details to access the dashboard, training modules, and your ready-made store.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle2 className="text-green-500" size={20} /> Order Summary
            </h3>
            <div className="space-y-3 border-b border-slate-100 pb-4">
              <div className="flex justify-between text-slate-600">
                <span>7-Day Practical Training</span>
                <span className="font-semibold text-slate-900">Included</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>E-Commerce Website License</span>
                <span className="font-semibold text-slate-900">Included</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>50,000+ Products Access</span>
                <span className="font-semibold text-slate-900">Included</span>
              </div>
            </div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-lg font-bold text-slate-900">Total Due Today</span>
              <span className="text-3xl font-black text-indigo-600">₹5,500</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-slate-500 text-sm">
            <div className="flex items-center gap-1"><ShieldCheck size={16}/> SSL Encrypted</div>
            <div className="flex items-center gap-1"><Lock size={16}/> Secure Data</div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Enrollment Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full"
        >
          <form
            onSubmit={handleEnroll}
            className="bg-white p-8 md:p-10 shadow-2xl shadow-indigo-100 rounded-[2.5rem] border border-white relative overflow-hidden"
          >
            {/* Form Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl mb-4">
                <CreditCard size={32} />
              </div>
              <h2 className="text-2xl font-black text-slate-900">Enrollment Form</h2>
              <p className="text-slate-500 text-sm mt-1">Get instant access after payment</p>
            </div>

            <div className="space-y-4">
              {/* Name Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                  <User size={20} />
                </div>
                <input
                  name="name"
                  className="block w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all outline-none text-slate-900"
                  placeholder="Full Name"
                  required
                  onChange={handleChange}
                />
              </div>

              {/* Email Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                  <Mail size={20} />
                </div>
                <input
                  name="email"
                  type="email"
                  className="block w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all outline-none text-slate-900"
                  placeholder="Email Address"
                  required
                  onChange={handleChange}
                />
              </div>

              {/* Mobile Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                  <Phone size={20} />
                </div>
                <input
                  name="mobile"
                  className="block w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all outline-none text-slate-900"
                  placeholder="Mobile Number"
                  required
                  onChange={handleChange}
                />
              </div>

              {/* Payment Button */}
              <button
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-indigo-200 transition-all flex items-center justify-center gap-3 mt-6"
              >
                {loading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Securing Payment...
                  </>
                ) : (
                  <>
                    Proceed to Payment <CheckCircle2 size={22} />
                  </>
                )}
              </button>
            </div>

            <div className="mt-6 flex flex-col items-center gap-4">
              <div className="flex gap-3 opacity-60 grayscale hover:grayscale-0 transition-all">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-4" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-4" />
              </div>
              <p className="text-[11px] text-slate-400 text-center uppercase tracking-widest font-bold">
                🔒 256-Bit Secure Encryption
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}