import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { CheckCircle2, Rocket, Globe, BarChart3, Clock, Zap, ShieldCheck, PackageX, Headset, GraduationCap, Layout, ShoppingBag, Truck, Banknote, LifeBuoy, Calendar, ArrowRight, MessageCircle, Instagram, Facebook, Share2, Download, Eye, Wallet, BookOpen, UserPlus, Check, Star, X, Menu, Mail, 
  Phone, 
  Twitter, 
  Youtube,
  ArrowUpCircle,
  CheckCircle,
  Video,
  } from 'lucide-react';
  import {
  AlertTriangle,
  HelpCircle,
  Users,
  Sparkles,
  Target,
} from "lucide-react";

import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from "../i18n/LanguageContext";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { lang, setLang, t } = useLang();

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
  { name: t("nav.about"), id: "about" },
  { name: t("nav.features"), id: "features" },
  { name: t("nav.course"), id: "course" },
  { name: t("nav.how"), id: "how" },
  // { name: t("nav.pricing"), id: "pricing" },
  {name : "webinar", id:"webinar"}
];

const features = [
  {
    key: "hero.features.0",
    icon: <Rocket size={18} />,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    key: "hero.features.1",
    icon: <Globe size={18} />,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    key: "hero.features.2",
    icon: <BarChart3 size={18} />,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    key: "hero.features.3",
    icon: <Clock size={18} />,
    gradient: "from-yellow-400 to-orange-500",
  },
];
const featureUI = [
  { icon: <GraduationCap size={28} />, color: "bg-blue-500" },
  { icon: <Layout size={28} />, color: "bg-purple-500" },
  { icon: <ShoppingBag size={28} />, color: "bg-pink-500" },
  { icon: <Truck size={28} />, color: "bg-orange-500" },
  { icon: <Banknote size={28} />, color: "bg-green-500" },
  { icon: <LifeBuoy size={28} />, color: "bg-indigo-500" },
];

const scheduleImages = [
  "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
];

const creativesMedia = [
  {
    url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600",
    icon: <Instagram size={18} />,
  },
  {
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600",
    icon: <MessageCircle size={18} />,
  },
  {
    url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=600",
    icon: <Facebook size={18} />,
  },
];

const stepsUI = [
  {
    icon: <UserPlus size={32} />,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: <BookOpen size={32} />,
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: <Share2 size={32} />,
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
  {
    icon: <Wallet size={32} />,
    color: "text-green-500",
    bg: "bg-green-50",
  },
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
        <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center">
          <Globe className="text-white" size={18} />
        </div>
        <span
          className={`text-xl font-black tracking-tight ${
            scrolled ? "text-slate-900" : "text-white"
          }`}
        >
          Grow with Daya
        </span>
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
      {/* LANGUAGE SWITCH (DESKTOP) */}
<button
  onClick={() => setLang(lang === "en" ? "mr" : "en")}
  className={`relative w-24 h-10 rounded-full flex items-center transition-all duration-300
    ${
      scrolled
        ? "bg-indigo-100 border border-indigo-300"
        : "bg-white/20 border border-white/30 backdrop-blur"
    }
  `}
>
  {/* Sliding Knob */}
  <span
    className={`absolute top-1 left-1 w-8 h-8 rounded-full bg-white shadow-md
      transition-all duration-300
      ${lang === "mr" ? "translate-x-12" : "translate-x-0"}
    `}
  />

  {/* EN */}
  <span
    className={`flex-1 text-xs font-bold z-10 text-center transition-colors
      ${lang === "en" ? "text-indigo-600" : "text-slate-400"}
    `}
  >
    EN
  </span>

  {/* मराठी */}
  <span
    className={`flex-1 text-xs font-bold z-10 text-center transition-colors
      ${lang === "mr" ? "text-indigo-600" : "text-slate-400"}
    `}
  >
    मराठी
  </span>
</button>

      <div className="h-6 w-px bg-slate-300/30 mx-2"></div>

      <Link
        to="/register"
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all active:scale-95 flex items-center gap-2"
      >
        {t("nav.enroll")} <ShieldCheck size={16} />
      </Link>
    </div>

    {/* MOBILE MENU TOGGLE */}
{/* MOBILE ACTIONS */}
<div className="md:hidden flex items-center gap-2">
  
  {/* MOBILE LANGUAGE SWITCH */}
<button
  onClick={() => setLang(lang === "en" ? "mr" : "en")}
  className={`relative w-20 h-9 rounded-full flex items-center transition-all duration-300
    ${scrolled ? "bg-indigo-100" : "bg-white/20 backdrop-blur"}
  `}
>
  {/* Sliding Knob */}
  <span
    className={`absolute top-1 left-1 w-7 h-7 rounded-full bg-white shadow-md transition-all duration-300
      ${lang === "mr" ? "translate-x-11" : "translate-x-0"}
    `}
  />

  {/* Labels */}
  <span className={`flex-1 text-xs font-bold z-10 text-center
    ${lang === "en" ? "text-indigo-600" : "text-slate-400"}
  `}>
    EN
  </span>

  <span className={`flex-1 text-xs font-bold z-10 text-center
    ${lang === "mr" ? "text-indigo-600" : "text-slate-400"}
  `}>
    मराठी
  </span>
</button>


  {/* MENU TOGGLE */}
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className={`p-2 rounded-lg transition-colors ${
      scrolled ? "text-slate-900 bg-slate-100" : "text-white bg-white/10"
    }`}
  >
    {menuOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
</div>

  </div>

  {/* MOBILE NAV DROPDOWN */}
  <AnimatePresence>
    {menuOpen && (
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        className="md:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
      >
        <div className="px-6 py-8 space-y-6">
          
          {/* NAV LINKS */}
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

          {/* CTA */}
          <Link
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="block w-full bg-indigo-600 text-white text-center py-4 rounded-2xl font-black shadow-lg"
          >
            {t("hero.cta")} 
          </Link>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</nav>

      {/* ================= HERO ================= */}
<section id="hero" className="relative bg-[#0f172a] text-white pt-20 pb-30 md:pt-36 md:pb-24 overflow-hidden">
  {/* ================= BACKGROUND LAYERS ================= */}
  <div className="absolute inset-0 z-0">
    {/* Gradient orbs */}
    <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[140px]" />
    <div className="absolute top-1/2 -right-32 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px]" />
    <div className="absolute bottom-[-20%] left-1/3 w-[300px] h-[300px] bg-pink-600/20 rounded-full blur-[120px]" />

    {/* Noise texture */}
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noisy-net.png')] opacity-[0.08]" />
  </div>

  {/* ================= CONTENT ================= */}
  <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
    {/* Badge */}
<motion.div>{t("hero.badge")}</motion.div>

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight"
    >
{t("hero.title1")}      <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
       {t("hero.title2")}
      </span>
    </motion.h1>

    {/* Subheading */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="mt-8 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto"
    >
      {t("hero.subtitle")}
      <span className="text-slate-200 font-semibold">
      </span>
    </motion.p>


    {/* ================= FEATURES ================= */}
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
    >
      {features.map((item, i) => (
        <div
          key={i}
          className="group relative p-5 rounded-2xl bg-white/5 border border-white/10 
          backdrop-blur-xl hover:bg-white/10 transition-all duration-300"
        >
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center
            bg-gradient-to-r ${item.gradient} text-white mb-3
            group-hover:scale-110 transition-transform`}
          >
            {item.icon}
          </div>
          <p className="text-sm font-semibold text-slate-200 leading-snug">
            {t(item.key)}
          </p>
        </div>
      ))}
    </motion.div>

    {/* ================= CTA ================= */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mt-16 flex flex-col sm:flex-row justify-center gap-6"
    >
<a
  href="#webinar"
  className="relative px-10 py-4 rounded-xl font-bold text-white
    bg-gradient-to-r from-indigo-600 to-purple-600
    shadow-[0_0_30px_rgba(99,102,241,0.45)]
    hover:shadow-[0_0_45px_rgba(99,102,241,0.7)]
    transition-all"
>
  <span className="flex items-center gap-2">
    {t("hero.cta")} <CheckCircle2 size={18} />
  </span>
</a>


      <Link
        to="/login"
        className="px-10 py-4 rounded-xl font-bold text-slate-200
        border border-white/20 hover:bg-white/10 transition"
      >
 {t("hero.login")}      </Link>
    </motion.div>

    {/* ================= TRUST LINE ================= */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="mt-8 text-sm text-slate-500"
    >
      {t("hero.trust")}
    </motion.p>
  </div>
</section>
{/* ================= PACKAGES ================= */}
{/* <section className="mt-24"> */}
  {/* <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center text-3xl md:text-4xl font-black text-blue mb-6"
  >
    {t("packages.heading")}
  </motion.h2> */}

  {/* <p className="text-center text-slate-800 max-w-2xl mx-auto mb-14">
    {t("packages.subheading")}
  </p> */}

  {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
    {t("packages.list").map((pkg, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.2 }}
        className="relative group rounded-3xl bg-indigo/5 border border-white/10 backdrop-blur-xl p-8 hover:bg-indigo/10 transition-all"
      > */}
        {/* Badge */}
        {/* <span className="absolute -top-4 left-6 px-4 py-1 text-xs font-bold rounded-full bg-indigo-600 text-black shadow-lg">
          {pkg.badge}
        </span> */}

        {/* Title */}
        {/* <h3 className="text-2xl font-black text-black mb-2">
          {pkg.name}
        </h3> */}

        {/* Price */}
        {/* <div className="text-4xl font-black text-blue bg-clip-text bg-gradient-to-r mb-6">
          {pkg.price}
        </div> */}

        {/* Features */}
        {/* <ul className="space-y-4 mb-8">
          {pkg.features.map((f, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-800">
              <CheckCircle2 className="text-green-400 mt-0.5" size={18} />
              <span>{f}</span>
            </li>
          ))}
        </ul> */}

        {/* CTA */}
        {/* <Link
          to="/register"
          className={`block text-center w-full py-4 rounded-xl font-bold text-white
          bg-gradient-to-r ${i === 0 ? "from-indigo-500 to-purple-500" : "from-emerald-500 to-teal-500"}
          shadow-lg hover:scale-[1.02] transition-all`}
        >
          {pkg.cta}
        </Link>
      </motion.div>
    ))}
  </div>
</section> */}

{/* ================= ABOUT ================= */}
<section
  id="about"
  className="relative py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
>
  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
    <div className="absolute top-16 left-10 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-50" />
    <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-40" />
  </div>

  <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
    {/* Header */}
    <div className="text-center mb-16 md:mb-20">
      <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6">
        {t("about.heading")}
      </motion.h2>

      <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full mb-6" />

      <p className="text-slate-600 max-w-3xl mx-auto text-base sm:text-lg">
        {t("about.desc")}
      </p>
    </div>

    {/* MAIN GRID */}
    <div className="grid lg:grid-cols-2 gap-14 items-start">
      {/* LEFT CONTENT */}
      <div className="space-y-8">
        {/* Problem */}
        <div className="bg-white p-7 sm:p-8 rounded-3xl shadow-xl border">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="text-red-500" />
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              {t("about.problemTitle")}
            </h3>
          </div>

          <p className="text-slate-600">{t("about.problem1")}</p>
          <p className="mt-4 text-slate-600">{t("about.problem2")}</p>

          <div className="mt-5 p-4 bg-indigo-50 border-l-4 border-indigo-500 text-sm sm:text-base rounded">
            {t("about.problemQuote")}
          </div>
        </div>

        {/* Why */}
        <div className="bg-white p-7 sm:p-8 rounded-3xl border shadow">
          <div className="flex items-center gap-3 mb-5">
            <HelpCircle className="text-indigo-600" />
            <h3 className="text-xl sm:text-2xl font-bold">
              {t("about.whyTitle")}
            </h3>
          </div>

          <ul className="space-y-3">
            {t("about.whyPoints").map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600">
                <CheckCircle2 className="text-green-500 mt-1" size={18} />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* RIGHT FEATURES */}
      <div className="grid gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        {t("about.features").map((f, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-3 mb-3">
              <Rocket className="text-indigo-600" />
              <h3 className="font-bold text-slate-900">{f.title}</h3>
            </div>
            <p className="text-sm text-slate-500">{f.desc}</p>
          </div>
        ))}

      </div>
              {/* Who It's For */}
        <div className="bg-indigo-50 p-7 sm:p-8 rounded-3xl border">
          <div className="flex items-center gap-3 mb-6">
            <Users className="text-indigo-600" />
            <h3 className="text-xl sm:text-2xl font-bold">
              {t("about.forTitle")}
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 text-slate-700">
            {t("about.forPoints").map((p, i) => (
              <div key={i} className="flex gap-2">
                <Sparkles className="text-indigo-500" size={16} />
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* STATS */}
    <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
      {t("about.stats").map((s, i) => (
        <div
          key={i}
          className="bg-white p-5 sm:p-6 rounded-xl text-center border shadow-sm"
        >
          <BarChart3 className="mx-auto mb-2 text-indigo-600" />
          <h4 className="text-xl sm:text-2xl font-black text-slate-900">
            {s.value}
          </h4>
          <p className="text-xs sm:text-sm text-slate-500">{s.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    
{/* ================= FEATURES ================= */}
<section id="features" className="py-24 bg-[#f8fafc] relative overflow-hidden">
  <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-indigo-50/50 to-transparent rounded-full blur-3xl pointer-events-none"></div>

  <div className="max-w-6xl mx-auto px-6 relative z-10">
    <div className="text-center mb-16">
      <motion.span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">
        {t("features.badge")}
      </motion.span>

      <motion.h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3">
        {t("features.heading")}
      </motion.h2>

      <p className="text-slate-500 mt-4 text-lg">
        {t("features.subheading")}
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {t("features.items").map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -10 }}
          className="group bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300"
        >
          <div
            className={`w-14 h-14 rounded-2xl ${featureUI[i].color}
            flex items-center justify-center text-white mb-6 shadow-lg
            group-hover:rotate-6 transition-transform`}
          >
            {featureUI[i].icon}
          </div>

          <h3 className="font-bold text-slate-900 text-xl mb-3 group-hover:text-indigo-600">
            {item.title}
          </h3>

          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            {item.desc}
          </p>

          <div className="mt-6 flex items-center text-indigo-600 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            {lang === "mr" ? "अधिक जाणून घ्या" : "Learn More"}
            <span className="ml-2">→</span>
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
      <motion.div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold mb-4">
        <Calendar size={16} /> {t("course.badge")}
      </motion.div>

      <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
        {t("course.heading")}
      </h2>

      <p className="text-slate-500 text-lg max-w-2xl mx-auto">
        {t("course.desc")}
      </p>
    </div>

    {/* Roadmap Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {t("course.schedule").map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -5 }}
          className={`relative group overflow-hidden rounded-3xl bg-slate-100 ${
            i === 6 ? "md:col-span-2 lg:col-span-1" : ""
          }`}
        >
          {/* Image */}
          <div className="h-64 w-full overflow-hidden">
            <img
              src={scheduleImages[i]}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 bg-indigo-600 text-white text-xs font-bold rounded uppercase">
                {item.day}
              </span>
              <div className="h-px flex-1 bg-white/20"></div>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              {item.title}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto transition-all duration-300 overflow-hidden">
              {item.desc}
            </p>
          </div>

          <div className="absolute top-4 right-6 text-white/10 text-6xl font-black">
            {i + 1}
          </div>
        </motion.div>
      ))}

      {/* CTA Card */}
      <motion.div className="flex flex-col justify-center items-center p-8 border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50 text-center">
        <h3 className="text-xl font-bold text-slate-800">
          {t("course.ctaTitle")}
        </h3>
        <p className="text-slate-500 text-sm mt-2 mb-6">
          {t("course.ctaDesc")}
        </p>
        <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700">
          {t("course.ctaBtn")} <ArrowRight size={18} />
        </button>
      </motion.div>
    </div>
  </div>
</section>


{/* ================= AD CREATIVES ================= */}
<section className="py-24 bg-slate-900 text-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
      <div className="max-w-2xl">
        <motion.span className="text-indigo-400 font-bold tracking-widest uppercase text-sm">
          {t("creatives.tag")}
        </motion.span>

        <motion.h2 className="text-4xl md:text-5xl font-black mt-3">
          {t("creatives.heading")}
        </motion.h2>

        <p className="text-slate-400 mt-6 text-lg">
          {t("creatives.desc")}
        </p>
      </div>
    </div>

    {/* Grid */}
    <div className="grid md:grid-cols-3 gap-10">
      {t("creatives.cards").map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="relative group"
        >
          {/* Floating Label */}
          <div className="absolute -top-3 left-6 z-20 px-3 py-1 bg-indigo-600 rounded-lg text-xs font-bold shadow-xl">
            {item.label}
          </div>

          {/* Image */}
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-slate-800 border border-white/10 shadow-2xl">
            <img
              src={creativesMedia[i].url}
              alt={item.platform}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-[2px]"
            />

            {/* Platform Icon */}
            <div className="absolute top-4 right-4 p-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
              {creativesMedia[i].icon}
            </div>

            {/* Hover Actions */}
            <div className="absolute inset-0 bg-indigo-900/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-4">
              <button className="flex items-center gap-2 px-6 py-2 bg-white text-indigo-900 rounded-full font-bold text-sm">
                <Download size={16} /> {t("creatives.download")}
              </button>
              <button className="flex items-center gap-2 px-6 py-2 bg-white/10 border border-white/30 text-white rounded-full font-bold text-sm">
                <Eye size={16} /> {t("creatives.preview")}
              </button>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
              <p className="text-white font-bold text-lg">
                {item.platform}
              </p>
              <p className="text-slate-300 text-xs mt-1">
                {t("creatives.formatNote")}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Bottom Note */}
    <motion.p className="text-center mt-16 text-slate-500 text-sm italic">
      {t("creatives.footer")}
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
        {t("how.heading")}
      </motion.h2>

      <p className="text-slate-500 text-lg max-w-2xl mx-auto">
        {t("how.desc")}
      </p>
    </div>

    {/* Steps Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">

      {/* Desktop Connecting Line */}
      <div className="hidden lg:block absolute top-1/4 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-100 -z-0"></div>

      {t("how.steps").map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
          className="relative z-10 flex flex-col items-center text-center group"
        >
          {/* Icon */}
          <div
            className={`w-20 h-20 ${stepsUI[i].bg} ${stepsUI[i].color}
            rounded-3xl flex items-center justify-center mb-6
            shadow-xl shadow-slate-100 group-hover:scale-110
            group-hover:rotate-6 transition-all duration-300 relative`}
          >
            {stepsUI[i].icon}

            {/* Step Number */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white text-xs font-bold rounded-full flex items-center justify-center border-4 border-white">
              {i + 1}
            </div>
          </div>

          {/* Text */}
          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
            {step.title}
          </h3>

          <p className="text-slate-500 text-sm leading-relaxed px-4">
            {step.desc}
          </p>

          {/* Mobile Arrow */}
          {i !== t("how.steps").length - 1 && (
            <div className="lg:hidden mt-8 text-slate-200">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="rotate-90"
              >
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
{/* <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden"> */}
  {/* Background */}
  {/* <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
  <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-50"></div>

  <div className="max-w-4xl mx-auto px-6 relative z-10"> */}
    {/* Header */}
    {/* <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
        {t("pricing.heading")}
      </h2>
      <p className="text-slate-500 text-lg">
        {t("pricing.subheading")}
      </p>
    </div> */}

    {/* <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-[2.5rem] shadow-2xl shadow-indigo-200/50 border border-slate-100 overflow-hidden"
    >
      <div className="grid md:grid-cols-5"> */}
        
        {/* LEFT: BENEFITS */}
        {/* <div className="md:col-span-3 p-8 md:p-12">
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm uppercase tracking-wider mb-6">
            <Star size={16} fill="currentColor" />
            {t("pricing.badge")}
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            {t("pricing.includesTitle")}
          </h3> */}

          {/* <ul className="space-y-4">
            {t("pricing.benefits").map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600">
                <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-green-600" strokeWidth={3} />
                </div>
                <span className="text-base md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div> */}

        {/* RIGHT: PRICE */}
        {/* <div className="md:col-span-2 bg-slate-900 p-8 md:p-12 text-center flex flex-col justify-center items-center">
          <span className="text-slate-400 text-sm font-medium line-through mb-1">
            {t("pricing.regularPrice")}
          </span> */}
{/* 
          <div className="relative">
            <div className="text-6xl font-black text-white mb-2">
              {t("pricing.offerPrice")}
            </div>
            <div className="absolute -top-4 -right-8 bg-pink-500 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-bounce">
              {t("pricing.save")}
            </div>
          </div>

          <p className="text-slate-400 text-sm mb-8">
            {t("pricing.paymentNote")}
          </p> */}

          {/* <Link
            to="/register"
            className="w-full bg-indigo-500 hover:bg-indigo-400 text-white py-4 rounded-2xl font-black text-lg shadow-[0_10px_20px_rgba(99,102,241,0.3)] transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
          >
            {t("pricing.cta")} <Zap size={20} fill="currentColor" />
          </Link>

          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <ShieldCheck size={16} className="text-green-400" />
              {t("pricing.secure")}
            </div>
          </div>
        </div>
      </div>
    </motion.div> */}

    {/* Footer */}
    {/* <div className="mt-12 text-center">
      <p className="text-slate-500 text-sm">
        {t("pricing.footer")}
      </p>
    </div>
  </div>
</section> */}

{/* ================= FREE WEBINAR ================= */}
<section
  id="webinar"
  className="relative py-24 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 overflow-hidden"
>
  {/* Decorative Background */}
  <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>

  <div className="relative max-w-6xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* ================= LEFT CONTENT ================= */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-bold mb-6">
          <Video size={16} />
          {t("webinar.badge")}
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
          {t("webinar.heading")}
        </h2>

        {/* Subheading */}
        <p className="text-indigo-100 text-lg mb-8 max-w-xl">
          {t("webinar.subheading")}
        </p>

        {/* Points */}
        <ul className="space-y-4">
          {t("webinar.points").map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-indigo-100 font-medium"
            >
              <CheckCircle className="text-green-400 mt-0.5" size={20} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* ================= RIGHT FORM ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl shadow-2xl p-8 md:p-10"
      >
        {/* Form Header */}
        <h3 className="text-2xl font-black text-slate-900 mb-2">
          {t("webinar.form.title")}
        </h3>
        <p className="text-slate-500 text-sm mb-6">
          {t("webinar.form.note")}
        </p>

        {/* Form */}
        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="text-sm font-bold text-slate-700">
              {t("webinar.form.name")}
            </label>
            <input
              type="text"
              placeholder={t("webinar.form.namePlaceholder")}
              className="mt-1 w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-bold text-slate-700">
              {t("webinar.form.phone")}
            </label>
            <input
              type="tel"
              placeholder={t("webinar.form.phonePlaceholder")}
              className="mt-1 w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-bold text-slate-700">
              {t("webinar.form.email")}
            </label>
            <input
              type="email"
              placeholder={t("webinar.form.emailPlaceholder")}
              className="mt-1 w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* CTA */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-black text-lg shadow-lg transition-all active:scale-95"
          >
            {t("webinar.form.cta")}
            <ArrowRight size={20} />
          </button>

          {/* Privacy */}
          <p className="text-xs text-slate-400 text-center mt-3">
            {t("webinar.form.privacy")}
          </p>
        </form>
      </motion.div>
    </div>
  </div>
</section>



{/* ================= FOOTER ================= */}
<footer className="relative bg-[#0f172a] text-slate-400 pt-20 pb-10 overflow-hidden">
  {/* Decoration */}
  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
  <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

      {/* Brand */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <Globe className="text-white" size={18} />
          </div>
          <span className="text-xl font-black text-white">
            Grow with Daya
          </span>
        </div>

        <p className="text-sm leading-relaxed">
          {t("footer.brandDesc")}
        </p>

        <div className="flex gap-4">
          {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Explore */}
      <div>
        <h3 className="text-white font-bold text-lg mb-6">
          {t("footer.explore")}
        </h3>

        <ul className="space-y-4 text-sm">
          {t("footer.links").map((item, i) => (
            <li key={i}>
              <a
                href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                className="hover:text-indigo-400 hover:translate-x-1 transition-all inline-block"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a href="/login" className="text-indigo-400 font-semibold">
              {t("footer.login")}
            </a>
          </li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h3 className="text-white font-bold text-lg mb-6">
          {t("footer.support")}
        </h3>

        <ul className="space-y-4 text-sm">
          <li className="flex items-center gap-3">
            <Mail size={14} />
            {t("footer.email")}
          </li>
          <li className="flex items-center gap-3">
            <Phone size={14} />
            {t("footer.phone")}
          </li>
          <li className="flex items-center gap-3 text-green-500 font-medium">
            <MessageCircle size={14} />
            {t("footer.whatsapp")}
          </li>
        </ul>
      </div>

      {/* Legal */}
      <div>
        <h3 className="text-white font-bold text-lg mb-6">
          {t("footer.legal")}
        </h3>

        <ul className="space-y-4 text-sm mb-6">
          {t("footer.legalLinks").map((item, i) => (
            <li key={i}>
              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700 flex items-center gap-3">
          <ShieldCheck className="text-indigo-400" size={24} />
          <div className="text-[10px] leading-tight">
            <span className="text-white font-bold block mb-1 uppercase">
              {t("footer.verified")}
            </span>
            {t("footer.ssl")}
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-xs uppercase tracking-widest text-slate-500">
        © {new Date().getFullYear()} Grow with Daya. {t("footer.copyright")}
      </p>

      <button
        onClick={scrollToTop}
        className="flex items-center gap-2 text-sm font-bold text-white hover:text-indigo-400"
      >
        {t("footer.backToTop")}
        <ArrowUpCircle />
      </button>
    </div>
  </div>
</footer>

    </div>
  );
}
