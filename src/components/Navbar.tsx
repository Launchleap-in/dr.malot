"use client";

import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-bg-2/80 backdrop-blur-xl border-b border-border/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo with hover effect */}

          <span className="group flex items-center gap-2 text-2xl sm:text-3xl font-bold text-tx-1 hover:text-tx-2 transition-all duration-300">
            MyBrand
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tx-1 group-hover:w-full transition-all duration-300"></span>
          </span>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-tx-1 hover:text-tx-2 transition-all duration-300 group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-tx-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="relative px-6 py-2.5 text-sm font-semibold text-tx-1 border-2 border-tx-1 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg hover:scale-105">
              <span className="relative z-10 group-hover:text-bg-1 transition-colors duration-300">
                Request Appointment
              </span>
              <span className="absolute inset-0 bg-tx-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-ic hover:text-tx-1 transition-colors duration-300 rounded-lg hover:bg-bg-1/50"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 sm:h-7 sm:w-7" />
            ) : (
              <Menu className="h-6 w-6 sm:h-7 sm:w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 sm:px-6 pt-4 pb-6 space-y-3 bg-bg-1/95 backdrop-blur-lg border-t border-border/30">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center justify-between px-4 py-3 text-base sm:text-lg font-medium text-tx-1 hover:text-tx-2 hover:bg-bg-2/50 rounded-lg transition-all duration-300 group"
              style={{
                animation: isOpen
                  ? `slideIn 0.3s ease-out ${index * 50}ms both`
                  : "none",
              }}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
              <ChevronRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          ))}

          {/* Mobile Action Buttons */}
          <div
            className="pt-4 space-y-3"
            style={{
              animation: isOpen ? `slideIn 0.3s ease-out 200ms both` : "none",
            }}
          >
            <button className="w-full px-6 py-3 text-base font-semibold text-tx-1 border-2 border-tx-1 rounded-lg hover:bg-bg-2 hover:text-tx-2 transition-all duration-300 hover:shadow-md">
              Request Appointment
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
