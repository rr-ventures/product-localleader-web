"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How is this different from paying for Google Ads?",
    answer:
      "Google Ads stop generating leads the moment you stop paying. SEO builds lasting organic visibility — once you rank on page one, you stay there. Plus, 70-80% of searchers skip paid ads entirely and click organic results. You're building an asset, not renting attention.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most of our clients see measurable improvements within 4-8 weeks. Google Business Profile optimisation and Maps ranking can happen fast, while organic search rankings build over 2-4 months. The good news? Unlike ads, results compound over time.",
  },
  {
    question: "I don't have a website. Can you still help?",
    answer:
      "Absolutely. Many trades businesses we work with didn't have a website when they started. We can get you ranking on Google Maps and in local search using your Google Business Profile alone. If you need a website, we can discuss that separately.",
  },
  {
    question: "What if I'm already ranking okay on Google?",
    answer:
      "Great — that means there's a strong foundation to build on. We'll audit your current rankings, identify gaps like Google Maps, long-tail keywords, or neighbouring suburbs, and find opportunities your competitors are missing.",
  },
  {
    question: "Is there a lock-in contract?",
    answer:
      "No. We work on a month-to-month basis. We believe in earning your business every month, not locking you in. The clients who see the best results stick around because the ROI speaks for itself.",
  },
  {
    question: "How do I know it's actually working?",
    answer:
      "We track everything — Google Business Profile calls, direction requests, website clicks, keyword rankings, and more. You get a clear monthly report showing exactly what's happening. No vanity metrics, just the numbers that matter.",
  },
  {
    question: "What kind of businesses do you work with?",
    answer:
      "We specialise in home services and trades — plumbers, electricians, painters, tilers, roofers, landscapers, builders, HVAC technicians, and similar businesses. If you serve local customers in a specific area, our service is built for you.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-32 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
            Common questions.
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="divide-y divide-gray-100">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                className="w-full flex items-center justify-between py-6 text-left group"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="font-medium text-sm sm:text-base pr-8 group-hover:text-gray-600 transition-colors">
                  {faq.question}
                </span>
                <svg
                  className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="pb-6">
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
