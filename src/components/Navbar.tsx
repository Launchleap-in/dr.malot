"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-6 pointer-events-none">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pointer-events-auto bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/5 rounded-full px-6 py-3 flex items-center justify-between sm:justify-start gap-8 mx-2 sm:mx-4 text-black w-[96%] sm:w-auto"
      >
        {/* Logo */}
        <a href="/" className="text-lg font-bold tracking-tight text-black mr-4">
          Dr. Malot
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-black/70 hover:text-black transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex">
            <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-black/80 transition-colors">
                Book Now
            </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1 text-black"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="pointer-events-auto absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-xl p-4 flex flex-col gap-2 md:hidden origin-top animate-in slide-in-from-top-5 fade-in duration-200 border border-black/5">
            {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-xl hover:bg-gray-50 text-sm font-medium transition-colors text-black"
            >
              {item.label}
            </a>
          ))}
           <button className="mt-2 w-full bg-black text-white px-5 py-3 rounded-xl text-sm font-medium">
                Book Appointment
            </button>
        </div>
      )}
    </nav>
  );
}
