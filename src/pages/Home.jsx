import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { CheckCircle2, Rocket, Globe, BarChart3, Clock, Zap, ShieldCheck, PackageX, Headset, GraduationCap, Layout, ShoppingBag, Truck, Banknote, LifeBuoy, Calendar, ArrowRight, MessageCircle, Instagram, Facebook, Share2, Download, Eye, Wallet, BookOpen, UserPlus, Check, Star, X, Menu, Mail, 
  Phone, 
  Twitter, 
  Youtube,
  ArrowUpCircle,
  } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Features", id: "features" },
    { name: "Course", id: "course" },
    { name: "How it Works", id: "how" },
    { name: "Pricing", id: "pricing" },
  ];
const features = [
    { text: "No Inventory Required", icon: <Rocket size={18} /> },
    { text: "Ready-Made Website", icon: <Globe size={18} /> },
    { text: "Learn & Earn Model", icon: <BarChart3 size={18} /> },
    { text: "12 Months Support", icon: <Clock size={18} /> },
  ];

  const feature = [
    { 
      title: "Beginner Friendly", 
      desc: "No technical experience required to start.", 
      icon: <Zap className="text-orange-500" /> 
    },
    { 
      title: "Low Investment", 
      desc: "Start with a one-time affordable fee.", 
      icon: <ShieldCheck className="text-green-500" /> 
    },
    { 
      title: "No Inventory", 
      desc: "We handle the stock and shipping for you.", 
      icon: <PackageX className="text-red-500" /> 
    },
    { 
      title: "Full Support", 
      desc: "12 months of expert guidance and mentorship.", 
      icon: <Headset className="text-indigo-500" /> 
    },
  ];
  const features2 = [
    {
      title: "7-Day Digital Marketing Training",
      desc: "Master Facebook, Instagram, and TikTok ads with our step-by-step blueprint.",
      icon: <GraduationCap size={28} />,
      color: "bg-blue-500"
    },
    {
      title: "Personal E-Commerce Website",
      desc: "A professional, high-converting store hosted and ready to take orders.",
      icon: <Layout size={28} />,
      color: "bg-purple-500"
    },
    {
      title: "50,000+ Trending Products",
      desc: "Instant access to a massive catalog of high-demand items to sell.",
      icon: <ShoppingBag size={28} />,
      color: "bg-pink-500"
    },
    {
      title: "Auto-Order Fulfillment",
      desc: "We handle the packaging, shipping, and delivery tracking for you.",
      icon: <Truck size={28} />,
      color: "bg-orange-500"
    },
    {
      title: "Profit Margin Model",
      desc: "Keep the lions share of the profit. Scale your earnings as you grow.",
      icon: <Banknote size={28} />,
      color: "bg-green-500"
    },
    {
      title: "12 Months Priority Support",
      desc: "Direct access to mentors who help you troubleshoot and optimize.",
      icon: <LifeBuoy size={28} />,
      color: "bg-indigo-500"
    },
  ];
  const schedule = [
    {
      day: "Day 1",
      title: "Business Basics & Mindset",
      img: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=400",
      desc: "Lay the foundation and prepare your entrepreneur mindset for success."
    },
    {
      day: "Day 2",
      title: "Facebook & Instagram Setup",
      img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=400",
      desc: "Technical setup of your business assets and social media integration."
    },
    {
      day: "Day 3",
      title: "Organic Marketing & Content",
      img: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?auto=format&fit=crop&q=80&w=400",
      desc: "Learn to attract customers without spending a penny on ads."
    },
    {
      day: "Day 4",
      title: "Paid Ads Basics",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
      desc: "Introduction to precision targeting and reaching your ideal buyers."
    },
    {
      day: "Day 5",
      title: "Product Selection",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400",
      desc: "How to pick high-margin, trending products from our 50k+ catalog."
    },
    {
      day: "Day 6",
      title: "Getting Orders",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400",
      desc: "Mastering the sales process and managing your first customer orders."
    },
    {
      day: "Day 7",
      title: "Scaling & Long-Term Income",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
      desc: "Automating your workflow and turning your store into a passive brand."
    }
  ];
  const creatives = [
    {
      url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600",
      platform: "Instagram Stories",
      icon: <Instagram size={18} />,
      label: "Story Creative"
    },
    {
      url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600",
      platform: "WhatsApp Status",
      icon: <MessageCircle size={18} />,
      label: "Viral Ad Graphic"
    },
    {
      url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=600",
      platform: "Facebook Feed",
      icon: <Facebook size={18} />,
      label: "Conversion Ad"
    }
  ];
  const steps = [
    {
      title: "Register",
      desc: "Sign up and get instant access to your business dashboard.",
      icon: <UserPlus size={32} />,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "Training",
      desc: "Complete the 7-day practical bootcamp to master digital sales.",
      icon: <BookOpen size={32} />,
      color: "text-purple-500",
      bg: "bg-purple-50"
    },
    {
      title: "Promote",
      desc: "Use our ready-made ads to drive traffic to your store.",
      icon: <Share2 size={32} />,
      color: "text-pink-500",
      bg: "bg-pink-50"
    },
    {
      title: "Earn",
      desc: "Collect your profits as we handle shipping and delivery.",
      icon: <Wallet size={32} />,
      color: "text-green-500",
      bg: "bg-green-50"
    }
  ];
  const benefits = [
    "Full 7-Day Digital Marketing Bootcamp",
    "Pre-Built E-Commerce Store (Ready-to-Go)",
    "Access to 50,000+ Trending Products",
    "Automated Order Fulfillment System",
    "12 Months Personal Mentorship",
    "Daily Ad Creatives & Marketing Assets"
  ];
  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      {/* ================= NAVBAR ================= */}
   <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled 
        ? "py-3 bg-white/80 backdrop-blur-lg shadow-[0_2px_20px_rgba(0,0,0,0.05)]" 
        : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Globe className="text-black" size={18} />
              </div>
              <span className="text-xl font-black text-white tracking-tight">PLATFORM</span>
            </div>
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                className={`text-sm font-bold uppercase tracking-wider transition-all hover:text-indigo-600 relative group ${
                  scrolled ? "text-slate-600" : "text-slate-200"
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="h-6 w-px bg-slate-300/30 mx-2"></div>

          <Link
            to="/register"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all active:scale-95 flex items-center gap-2"
          >
            Enroll Now <ShieldCheck size={16} />
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-slate-900 bg-slate-100" : "text-white bg-white/10"
          }`}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE NAV DROPDOWN */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="block text-lg font-bold text-slate-900 hover:text-indigo-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="block w-full bg-indigo-600 text-white text-center py-4 rounded-2xl font-black shadow-lg"
              >
                Get Started Today
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
      {/* ================= HERO ================= */}
     <section id="hero" className="relative bg-[#0f172a] text-white pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden">
      {/* Background Aesthetic Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 bg-indigo-500/10 border border-indigo-400/20 rounded-full text-sm font-medium text-indigo-300 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          🚀 Beginner-Friendly Online Business Model
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1]"
        >
          Start Your Online Business in Just 7 Days  <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
          Without Inventory or Technical Skills
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-lg md:text-xl max-w-2xl mx-auto text-slate-400 leading-relaxed"
        >
         Learn Digital Marketing, Get Your Own E-Commerce Website, Sell 50,000+ Products & Earn 
Online — All for Just ₹5,500.
        </motion.p>

        {/* Feature Grid */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          {features.map((item, i) => (
            <div
              key={i}
              className="group flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="text-indigo-400 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="text-sm font-semibold text-slate-200">{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-5"
        >
          <Link
            to="/register"
            className="group relative px-8 py-4 bg-indigo-600 rounded-xl font-bold text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] transition-all overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started Now <CheckCircle2 size={18} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
          
          <Link
            to="/login"
            className="px-8 py-4 rounded-xl font-bold border border-slate-700 hover:bg-slate-800 transition-colors"
          >
             Login
          </Link>
        </motion.div>

    
      </div>
    </section>

      {/* ================= ABOUT ================= */}
    <section id="about" className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
          >
            What Is This Platform?
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full mb-8"
          ></motion.div>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            A complete digital business system designed to bridge the gap between 
            wanting to start and actually succeeding online.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content/Story */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-indigo-100/50 border border-slate-100">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">The Problem We Solve</h3>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Most beginners get stuck at the first hurdle: <span className="font-semibold text-slate-900 italic">"What do I sell?"</span> or <span className="font-semibold text-slate-900 italic">"How do I build a website?"</span>
                </p>
                <p>
                  We remove the guesswork. We provide **structured marketing training**, 
                  your own **pre-built e-commerce website**, and handle 100% of the 
                  order fulfillment.
                </p>
                <div className="p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-xl">
                  <p className="font-medium text-indigo-900">
                    "You focus on marketing — we handle products, delivery, and support."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {feature.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 bg-white border border-slate-200 rounded-2xl hover:border-indigo-500 hover:shadow-2xl hover:shadow-indigo-200/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
      {/* ================= FEATURES ================= */}
   <section id="features" className="py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-indigo-50/50 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-indigo-600 font-bold tracking-widest uppercase text-sm"
          >
            The Ecosystem
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mt-3"
          >
            What You Get After Joining
          </motion.h2>
          <p className="text-slate-500 mt-4 text-lg">Everything you need to go from zero to profitable.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features2.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:rotate-6 transition-transform`}>
                {item.icon}
              </div>
              
              <h3 className="font-bold text-slate-900 text-xl mb-3 group-hover:text-indigo-600 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {item.desc}
              </p>
              
              <div className="mt-6 flex items-center text-indigo-600 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More 
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
      {/* ================= COURSE ================= */}
   <section id="course" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold mb-4"
          >
            <Calendar size={16} /> 7-DAY INTENSIVE
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            7-Day Practical Training Program
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            From complete beginner to launching your first ad campaign in exactly one week. 
            No fluff, just actionable steps.
          </p>
        </div>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schedule.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative group overflow-hidden rounded-3xl bg-slate-100 ${
                i === 6 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Image Layer */}
              <div className="h-64 w-full overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              </div>

              {/* Content Layer */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-indigo-600 text-white text-xs font-bold rounded uppercase tracking-wider">
                    {item.day}
                  </span>
                  <div className="h-px flex-1 bg-white/20"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto transition-all duration-300 overflow-hidden">
                  {item.desc}
                </p>
              </div>

              {/* Number Overlay */}
              <div className="absolute top-4 right-6 text-white/10 text-6xl font-black select-none pointer-events-none group-hover:text-indigo-500/20 transition-colors">
                {i + 1}
              </div>
            </motion.div>
          ))}

          {/* Bonus Call to Action Card */}
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="flex flex-col justify-center items-center p-8 border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50 text-center"
          >
            <h3 className="text-xl font-bold text-slate-800">Ready to start Day 1?</h3>
            <p className="text-slate-500 text-sm mt-2 mb-6">Join the next cohort of entrepreneurs.</p>
            <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors">
              Enroll Now <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>

      {/* ================= NEW AD CREATIVES SECTION ================= */}
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-indigo-400 font-bold tracking-widest uppercase text-sm"
            >
              Marketing Assets
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black mt-3"
            >
              Ready-To-Use Ad Creatives
            </motion.h2>
            <p className="text-slate-400 mt-6 text-lg">
              Don't waste time designing. Use our tested, high-performance templates 
              to start driving traffic to your store immediately.
            </p>
          </div>
        
        </div>

        {/* Ad Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {creatives.map((ad, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              {/* Creative Label (Floating) */}
              <div className="absolute -top-3 left-6 z-20 px-3 py-1 bg-indigo-600 rounded-lg text-xs font-bold shadow-xl">
                {ad.label}
              </div>

              {/* Image Container */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-slate-800 border border-white/10 shadow-2xl">
                <img
                  src={ad.url}
                  alt="Ad Creative"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-[2px]"
                />
                
                {/* Platform Badge Overlay */}
                <div className="absolute top-4 right-4 p-2 bg-black/40 backdrop-blur-md rounded-full text-white border border-white/10">
                  {ad.icon}
                </div>

                {/* Hover Overlay Actions */}
                <div className="absolute inset-0 bg-indigo-900/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-4">
                  <button className="flex items-center gap-2 px-6 py-2 bg-white text-indigo-900 rounded-full font-bold text-sm hover:bg-indigo-50 transition-colors shadow-lg">
                    <Download size={16} /> Download
                  </button>
                  <button className="flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-bold text-sm hover:bg-white/20 transition-colors">
                    <Eye size={16} /> Preview
                  </button>
                </div>

                {/* Footer Info (Inside Image) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <p className="text-white font-bold text-lg">{ad.platform}</p>
                  <p className="text-slate-300 text-xs mt-1">Ready for 1080x1920 export</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom Trust Tag */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-16 text-slate-500 text-sm font-medium italic"
        >
          * New creatives are added every Monday based on current market trends.
        </motion.p>
      </div>
    </section>

      {/* ================= HOW IT WORKS ================= */}
   <section id="how" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
          >
            How You Earn Money
          </motion.h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Our streamlined 4-step process is designed to take you from 
            complete beginner to earning your first online commission.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          
          {/* Desktop Connecting Line (Visible on LG screens) */}
          <div className="hidden lg:block absolute top-1/4 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-100 -z-0"></div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              {/* Icon Circle */}
              <div className={`w-20 h-20 ${step.bg} ${step.color} rounded-3xl flex items-center justify-center mb-6 shadow-xl shadow-slate-100 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative`}>
                {step.icon}
                {/* Step Number Badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white text-xs font-bold rounded-full flex items-center justify-center border-4 border-white">
                  {i + 1}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed px-4">
                {step.desc}
              </p>

              {/* Mobile/Tablet Arrow (Visible on smaller screens) */}
              {i !== steps.length - 1 && (
                <div className="lg:hidden mt-8 text-slate-200">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-90">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* ================= PRICING ================= */}
   <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-500 text-lg">No monthly subscriptions. No hidden fees. Just one step to your business.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2.5rem] shadow-2xl shadow-indigo-200/50 border border-slate-100 overflow-hidden"
        >
          <div className="grid md:grid-cols-5">
            {/* Left Side: Benefits (60%) */}
            <div className="md:col-span-3 p-8 md:p-12">
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm uppercase tracking-wider mb-6">
                <Star size={16} fill="currentColor" /> Premium Founders Access
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">What's included in your license:</h3>
              <ul className="space-y-4">
                {benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-green-600" strokeWidth={3} />
                    </div>
                    <span className="text-base md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side: Price & CTA (40%) */}
            <div className="md:col-span-2 bg-slate-900 p-8 md:p-12 text-center flex flex-col justify-center items-center">
              <span className="text-slate-400 text-sm font-medium line-through mb-1">
                Regular Price: ₹15,000
              </span>
              <div className="relative">
                <div className="text-6xl font-black text-white mb-2">
                  ₹5,500
                </div>
                <div className="absolute -top-4 -right-8 bg-pink-500 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-bounce">
                  SAVE 63%
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-8">One-time payment. Lifetime access to updates.</p>
              
              <Link
                to="/register"
                className="w-full bg-indigo-500 hover:bg-indigo-400 text-white py-4 rounded-2xl font-black text-lg shadow-[0_10px_20px_rgba(99,102,241,0.3)] transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
              >
                Enroll Now <Zap size={20} fill="currentColor" />
              </Link>

              <div className="mt-8 flex flex-col items-center gap-3">
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <ShieldCheck size={16} className="text-green-400" />
                  Secure 256-bit SSL Payment
                </div>
                <div className="flex gap-2 opacity-50 grayscale">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-4" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-4" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Post-Pricing Trust Tag */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            Not sure yet? <Link to="/contact" className="text-indigo-600 font-bold hover:underline">Speak with an advisor</Link> about our 7-day refund policy.
          </p>
        </div>
      </div>
    </section>

      {/* ================= FOOTER ================= */}{" "}
    <footer className="relative bg-[#0f172a] text-slate-400 pt-20 pb-10 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Globe className="text-white" size={18} />
              </div>
              <span className="text-xl font-black text-white tracking-tight">PLATFORM</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Empowering the next generation of digital entrepreneurs. We provide the tools, 
              the training, and the fulfillment so you can focus on building your empire.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              Explore
            </h3>
            <ul className="space-y-4 text-sm">
              {['Features', 'Course', 'How it Works', 'Pricing'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s/g, '')}`} className="hover:text-indigo-400 hover:translate-x-1 transition-all inline-block">
                    {item}
                  </a>
                </li>
              ))}
              <li><a href="/login" className="text-indigo-400 font-semibold">Member Login</a></li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                  <Mail size={14} className="group-hover:text-white" />
                </div>
                <span>support@digitalbusiness.com</span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                  <Phone size={14} className="group-hover:text-white" />
                </div>
                <span>+91 9XXXXXXXXX</span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <MessageCircle size={14} className="group-hover:text-white" />
                </div>
                <span className="text-green-500 font-medium">WhatsApp Support</span>
              </li>
            </ul>
          </div>

          {/* Legal & Trust */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Legal</h3>
            <ul className="space-y-4 text-sm mb-6">
              {['Terms & Conditions', 'Privacy Policy', 'Refund Policy'].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase().replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700 flex items-center gap-3">
              <ShieldCheck className="text-indigo-400" size={24} />
              <div className="text-[10px] leading-tight text-slate-400">
                <span className="text-white font-bold block mb-1 uppercase tracking-tighter">Verified Secure</span>
                256-Bit SSL Encryption Active
              </div>
            </div>
          </div>
        </div>

        {/* Final Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
            © {new Date().getFullYear()} PLATFORM. Crafted for Entrepreneurs.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-bold text-white hover:text-indigo-400 transition-colors"
          >
            Back to Top 
            <ArrowUpCircle className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
    </div>
  );
}
