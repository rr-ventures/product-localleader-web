export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Simple Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
            One Plan. Everything Included.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 text-balance">
            No hidden fees, no upsells, no lock-in contracts. Just results-driven SEO
            for your trades business at a price that makes sense.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative bg-black text-white rounded-3xl p-8 sm:p-10 overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative">
              {/* Popular badge */}
              <div className="inline-flex items-center gap-1.5 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-6">
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                Most Popular
              </div>

              {/* Plan name */}
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Local Leader SEO
              </h3>
              <p className="text-gray-400 mb-6 text-sm sm:text-base">
                Complete local SEO service for trades &amp; home services
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl sm:text-6xl font-bold">$500</span>
                <span className="text-lg sm:text-xl text-gray-400">/month</span>
              </div>
              <p className="text-sm text-gray-400 mb-8">
                That&apos;s just $125/week — less than a single Google Ad click
                in most trades
              </p>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {[
                  "First page Google ranking strategy",
                  "Google Business Profile optimisation",
                  "Google Maps ranking",
                  "Local citation building",
                  "Reputation management & review generation",
                  "On-page SEO for your website",
                  "Keyword research & targeting",
                  "Monthly performance reporting",
                  "Google Business call & visit tracking",
                  "Dedicated account manager",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm sm:text-base"
                  >
                    <svg
                      className="w-5 h-5 text-green-400 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="block w-full bg-white text-black font-semibold text-center py-4 rounded-xl text-base sm:text-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </a>

              {/* Guarantee */}
              <p className="text-center text-xs sm:text-sm text-gray-400 mt-4">
                No lock-in contracts. Cancel anytime. Results you can see.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom trust elements */}
        <div className="max-w-2xl mx-auto mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <div className="text-sm font-semibold">No Lock-in Contract</div>
            <div className="text-xs text-gray-500 mt-1">Cancel anytime</div>
          </div>
          <div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="text-sm font-semibold">Transparent Reporting</div>
            <div className="text-xs text-gray-500 mt-1">See every result</div>
          </div>
          <div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div className="text-sm font-semibold">Fast Results</div>
            <div className="text-xs text-gray-500 mt-1">
              Improvements within weeks
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
