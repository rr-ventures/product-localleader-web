"use client";

import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-base sm:text-lg">L</span>
            </div>
            <span className="text-lg sm:text-xl font-semibold tracking-tight">
              Local Leader
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm text-gray-500 hover:text-black transition-colors"
            >
              Services
            </a>
            <a
              href="#results"
              className="text-sm text-gray-500 hover:text-black transition-colors"
            >
              Results
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-gray-500 hover:text-black transition-colors"
            >
              How It Works
            </a>
            <a
              href="#faq"
              className="text-sm text-gray-500 hover:text-black transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="bg-black text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-6 border-t border-gray-100">
            <nav className="flex flex-col gap-1 pt-4">
              {[
                { label: "Services", href: "#services" },
                { label: "Results", href: "#results" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-black transition-colors py-2.5"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-black text-white text-sm font-medium px-5 py-3 rounded-full hover:bg-gray-800 transition-colors text-center mt-3"
                onClick={() => setMobileOpen(false)}
              >
                Book a Call
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
