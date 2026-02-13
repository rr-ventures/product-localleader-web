"use client";

import { useEffect, useState } from "react";

const rotatingWords = [
  "Plumbers",
  "Electricians",
  "Painters",
  "Roofers",
  "Tilers",
  "Builders",
  "Landscapers",
  "HVAC Techs",
];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
        setIsVisible(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-black text-white text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full mb-6 sm:mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            SEO for Home Services &amp; Trades
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Get More Local Customers
            <br />
            <span className="text-gray-400">for </span>
            <span
              className={`text-primary-600 inline-block min-w-[200px] transition-all duration-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
            >
              {rotatingWords[currentWord]}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-10 text-balance">
            First page Google rankings, Google Maps visibility, and reputation
            management — so your phone rings with real local jobs. Not clicks.
            Not impressions. Jobs.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="w-full sm:w-auto bg-black text-white font-semibold px-8 py-4 rounded-lg text-base sm:text-lg hover:bg-gray-800 transition-colors"
            >
              Get Started — $125/week
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto border-2 border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-lg text-base sm:text-lg hover:border-gray-400 transition-colors"
            >
              Book a Free Call
            </a>
          </div>

          {/* Social Proof */}
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-gray-100">
            <p className="text-sm text-gray-500 mb-6">
              Trusted by trades businesses across Australia
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-black">
                  Page 1
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">
                  Google Rankings
                </div>
              </div>
              <div className="w-px h-10 bg-gray-200 hidden sm:block" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-black">
                  3x
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">
                  More Phone Calls
                </div>
              </div>
              <div className="w-px h-10 bg-gray-200 hidden sm:block" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-black">
                  Top 3
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">
                  Google Maps Pack
                </div>
              </div>
              <div className="w-px h-10 bg-gray-200 hidden sm:block" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-black">
                  $125
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">
                  Per Week
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
