"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Initialize theme synchronously on client to avoid flicker.
  // Default to light when window is not available (SSR).
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark" || stored === "light") return stored;
    } catch (e) {
      /* ignore localStorage errors */
    }
    // fallback to system preference
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // mark mounted (used to avoid hydration mismatch for icon buttons)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  // Apply theme class and persist changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      /* ignore localStorage errors */
    }
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },

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
        {/* Logo - Use transparent PNG for best results */}
        <Image
          src="/logoo.png"
          alt="Dr. Malot Logo"
          width={100}
          height={100}
          className="mr-4"
          style={{ background: "transparent" }}
        />

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
        <div className="hidden lg:flex items-center gap-3">
          <Link
            className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-black/80 transition-colors"
            href={"/contact#ContactForm"}
          >
            Book Now
          </Link>
          {isMounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2.5 text-sm font-semibold text-tx-1 border-2 border-tx-1 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-tx-1 hover:text-bg-1"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          )}
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

          <div className="flex items-center gap-3 mt-2">
            <Link
              className="flex-1 bg-black text-white px-5 py-3 rounded-xl text-sm font-medium text-center"
              href={"/contact#ContactForm"}
            >
              Book Appointment
            </Link>

            {/* Mobile Menu Toggle + Theme Toggle */}
            <div className="flex items-center gap-3 md:hidden">
              {isMounted && (
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="p-2.5 text-black border-2 border-black/20 rounded-lg"
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </button>
              )}

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1 text-black"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
