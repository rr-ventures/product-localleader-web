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
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-36 sm:pt-44 pb-20 sm:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-8">
            Become the #1
            <br />
            Service Provider
            <br />
            <span className="text-gray-300">in Your </span>
            <span
              className={`inline-block transition-all duration-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
              }`}
            >
              Area.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed">
            We help {" "}
            <span
              className={`inline-block font-medium text-black transition-all duration-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2"
              }`}
            >
              {rotatingWords[currentWord]}
            </span>
            {" "} dominate local search with first page Google rankings,
            Maps visibility, and reputation management.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-black text-white font-medium px-10 py-4 rounded-full text-base hover:bg-gray-800 transition-all duration-300"
            >
              Book a Call
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto border border-gray-200 text-gray-600 font-medium px-10 py-4 rounded-full text-base hover:border-gray-400 hover:text-black transition-all duration-300"
            >
              See Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
