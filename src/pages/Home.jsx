import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" className="text-xl font-bold text-indigo-600">
            Digital Business Platform
          </a>

          {/* Desktop Menu */}
          <div className="space-x-6 hidden md:flex items-center">
            <a href="#hero" className="hover:text-indigo-600">
              Home
            </a>
            <a href="#features" className="hover:text-indigo-600">
              Features
            </a>
            <a href="#course" className="hover:text-indigo-600">
              Course
            </a>
            <a href="#how" className="hover:text-indigo-600">
              How It Works
            </a>
            <a href="#pricing" className="hover:text-indigo-600">
              Pricing
            </a>

            <Link
              to="/register"
              className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
            {["hero", "features", "course", "how", "pricing"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="block font-medium hover:text-indigo-600"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
            <Link
              to="/register"
              className="block bg-indigo-600 text-white text-center py-2 rounded-lg font-semibold"
            >
              Enroll Now
            </Link>
          </div>
        )}
      </nav>
      {/* ================= HERO ================= */}
      <section
        id="hero"
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white pt-40 pb-28"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-4 py-1 bg-white/20 rounded-full text-sm">
            🚀 Beginner-Friendly Online Business Model
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Start Your Own Online Business in Just 7 Days
          </h1>

          <p className="mt-6 text-base md:text-xl max-w-3xl mx-auto text-white/90">
            Learn digital marketing, get your own ready-made e-commerce website,
            promote trending products, and earn online — even with zero
            experience.
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-sm md:text-base">
            {[
              "No Inventory Required",
              "Ready-Made Website",
              "Learn & Earn Model",
              "12 Months Support",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 px-4 py-3 rounded-lg font-semibold"
              >
                ✔ {item}
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/register"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold shadow-lg"
            >
              Get Started Now
            </Link>
            <Link
              to="/login"
              className="border border-white px-8 py-3 rounded-lg font-semibold"
            >
              Login
            </Link>
          </div>
        </div>
      </section>
      {/* ================= ABOUT ================= */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Is This Platform?
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-base md:text-lg">
              A complete digital business system designed to help beginners
              start earning online with proper training, tools, and support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6 text-gray-700 text-base md:text-lg">
              <p>
                Many people want to earn online but don’t know what to sell, how
                to market, or how to manage orders.
              </p>
              <p>
                We provide structured digital marketing training, a personal
                e-commerce website, and complete order fulfillment.
              </p>
              <p>
                You focus on marketing — we handle products, delivery & support.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                ["Beginner Friendly", "No experience required"],
                ["Low Investment", "One-time affordable fee"],
                ["No Inventory", "No stock needed"],
                ["Full Support", "12 months guidance"],
              ].map(([title, desc], i) => (
                <div key={i} className="p-6 border rounded-xl">
                  <h3 className="font-semibold text-indigo-600">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ================= FEATURES ================= */}
      <section id="features" className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What You Get After Joining
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              "7-Day Digital Marketing Training",
              "Personal E-Commerce Website",
              "50,000+ Products",
              "Order Fulfillment",
              "Profit Margin Model",
              "12 Months Support",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow text-center"
              >
                <h3 className="font-semibold text-indigo-600">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= COURSE ================= */}{" "}
      <section id="course" className="py-24 bg-gray-50">
        {" "}
        <div className="max-w-6xl mx-auto px-6">
          {" "}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {" "}
            7-Day Practical Training Program{" "}
          </h2>{" "}
          <div className="grid md:grid-cols-2 gap-8">
            {" "}
            {[
              "Business Basics & Mindset",
              "Facebook & Instagram Setup",
              "Organic Marketing & Content",
              "Paid Ads Basics",
              "Product Selection",
              "Getting Orders",
              "Scaling & Long-Term Income",
            ].map((topic, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                {" "}
                <h3 className="font-semibold text-indigo-600">
                  Day {i + 1}
                </h3>{" "}
                <p className="mt-2 text-gray-600">{topic}</p>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>
      {/* ================= HOW IT WORKS ================= */}{" "}
      <section id="how" className="py-24 bg-white">
        {" "}
        <div className="max-w-6xl mx-auto px-6 text-center">
          {" "}
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            {" "}
            How You Earn Money{" "}
          </h2>{" "}
          <div className="grid md:grid-cols-4 gap-8">
            {" "}
            {[
              "Register & Join",
              "Complete Training",
              "Promote Products",
              "Earn Profit",
            ].map((step, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl shadow">
                {" "}
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  {" "}
                  {i + 1}{" "}
                </div>{" "}
                <p className="font-semibold">{step}</p>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>
      {/* ================= PRICING ================= */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="max-w-xl mx-auto text-center bg-white p-10 rounded-2xl shadow">
          <h2 className="text-3xl font-bold mb-4">One-Time Investment</h2>
          <div className="text-5xl font-bold text-indigo-600 mb-6">₹5,500</div>

          <ul className="text-left space-y-3 text-gray-700">
            <li>✔ 7-Day Training</li>
            <li>✔ Website + Products</li>
            <li>✔ Order Fulfillment</li>
            <li>✔ 12 Months Support</li>
          </ul>

          <Link
            to="/register"
            className="mt-8 inline-block bg-indigo-600 text-white px-10 py-4 rounded-lg font-semibold"
          >
            Enroll Now
          </Link>
        </div>
      </section>
      {/* ================= FOOTER ================= */}{" "}
      <footer className="bg-gray-900 text-gray-400 pt-16 pb-6">
        {" "}
        <div className="max-w-7xl mx-auto px-6">
          {" "}
          {/* Top Footer */}{" "}
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            {" "}
            {/* About */}{" "}
            <div>
              {" "}
              <h3 className="text-white font-semibold text-lg mb-4">
                {" "}
                Digital Business Platform{" "}
              </h3>{" "}
              <p className="text-sm leading-relaxed">
                {" "}
                We help beginners start their online business with digital
                marketing training, a ready-made e-commerce website, and
                complete order fulfillment. No inventory, no technical skills,
                no risk.{" "}
              </p>{" "}
            </div>{" "}
            {/* Quick Links */}{" "}
            <div>
              {" "}
              <h3 className="text-white font-semibold text-lg mb-4">
                {" "}
                Quick Links{" "}
              </h3>{" "}
              <ul className="space-y-2 text-sm">
                {" "}
                <li>
                  <a href="#features" className="hover:text-white">
                    Features
                  </a>
                </li>{" "}
                <li>
                  <a href="#course" className="hover:text-white">
                    Course
                  </a>
                </li>{" "}
                <li>
                  <a href="#how" className="hover:text-white">
                    How It Works
                  </a>
                </li>{" "}
                <li>
                  <a href="#pricing" className="hover:text-white">
                    Pricing
                  </a>
                </li>{" "}
                <li>
                  <a href="/login" className="hover:text-white">
                    Login
                  </a>
                </li>{" "}
              </ul>{" "}
            </div>{" "}
            {/* Support */}{" "}
            <div>
              {" "}
              <h3 className="text-white font-semibold text-lg mb-4">
                {" "}
                Support{" "}
              </h3>{" "}
              <ul className="space-y-2 text-sm">
                {" "}
                <li>📧 support@digitalbusiness.com</li>{" "}
                <li>📞 +91 9XXXXXXXXX</li>
                <li>💬 WhatsApp Support Available</li>{" "}
              </ul>{" "}
            </div>{" "}
            {/* Legal */}{" "}
            <div>
              {" "}
              <h3 className="text-white font-semibold text-lg mb-4">
                {" "}
                Legal{" "}
              </h3>{" "}
              <ul className="space-y-2 text-sm">
                {" "}
                <li>
                  <a href="/terms" className="hover:text-white">
                    Terms & Conditions
                  </a>
                </li>{" "}
                <li>
                  <a href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>{" "}
                <li>
                  <a href="/refund" className="hover:text-white">
                    Refund Policy
                  </a>
                </li>{" "}
                <li>
                  <a href="/disclaimer" className="hover:text-white">
                    Disclaimer
                  </a>
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
          {/* Bottom Footer */}{" "}
          <div className="border-t border-gray-700 pt-6 text-center text-sm">
            {" "}
            © {new Date().getFullYear()} Digital Business Platform. All rights
            reserved.{" "}
          </div>{" "}
        </div>{" "}
      </footer>
    </div>
  );
}
