"use client";

import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-lg">L</span>
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight">
              Local Leader
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              Services
            </a>
            <a
              href="#results"
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              Results
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              Contact Us
            </a>
            <a
              href="#pricing"
              className="bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Get Started
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
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <nav className="flex flex-col gap-3 pt-4">
              <a
                href="#services"
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Services
              </a>
              <a
                href="#results"
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Results
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
              </a>
              <a
                href="#pricing"
                className="bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors text-center mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
