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
      "Most of our clients see measurable improvements within 4-8 weeks. Google Business Profile optimisation and Maps ranking can happen fast, while organic search rankings build over 2-4 months. The good news? Unlike ads, results compound over time — your 6th month will be better than your 1st.",
  },
  {
    question: "I don't have a website. Can you still help?",
    answer:
      "Many trades businesses we work with didn't have a website when they started. We can get you ranking on Google Maps and in local search using your Google Business Profile alone. If you need a website, we can discuss that separately — but it's not required to start getting results.",
  },
  {
    question: "What if I'm already ranking okay on Google?",
    answer:
      "Great — that means there's a strong foundation to build on. We'll audit your current rankings, identify gaps (like Google Maps, long-tail keywords, or neighbouring suburbs), and find opportunities your competitors are missing. There's always room to grow.",
  },
  {
    question: "Is there a lock-in contract?",
    answer:
      "No. We work on a month-to-month basis. We believe in earning your business every month, not locking you in. That said, SEO is a long-term play — the clients who see the best results stick around because the ROI speaks for itself.",
  },
  {
    question: "How do I know it's actually working?",
    answer:
      "We track everything — Google Business Profile calls, direction requests, website clicks, keyword rankings, and more. You'll get a clear monthly report showing exactly what's happening. No vanity metrics, just the numbers that matter to your business.",
  },
  {
    question: "What kind of businesses do you work with?",
    answer:
      "We specialise in home services and trades — plumbers, electricians, painters, tilers, roofers, landscapers, builders, HVAC technicians, and similar businesses. If you serve local customers in a specific area, our service is built for you.",
  },
  {
    question: "Why only $500/month? Other agencies charge much more.",
    answer:
      "We've built our service to be lean and efficient. We use proven systems, not bloated agency overhead. Many agencies charge $2,000-$5,000/month for SEO and deliver the same work. We believe trades businesses deserve agency-quality SEO at a price that makes commercial sense — one job covers your entire year.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
            Common Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Straight answers — no jargon, no runaround.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-gray-50 transition-colors"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="font-semibold text-sm sm:text-base pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
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
