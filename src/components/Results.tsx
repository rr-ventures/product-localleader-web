export default function Results() {
  return (
    <section id="results" className="py-16 sm:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-primary-400 uppercase tracking-wider mb-3">
            Real Results
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
            One Job Pays for a Full Year
          </h2>
          <p className="text-base sm:text-lg text-gray-400 text-balance">
            Most tradies spend thousands on ads that stop working the moment you
            stop paying. Our SEO service builds lasting visibility — and one new
            job typically covers your entire annual investment.
          </p>
        </div>

        {/* ROI Breakdown */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {[
            {
              metric: "$500/mo",
              label: "Your investment",
              description: "Less than most tradies spend on a weekend",
            },
            {
              metric: "$6,000",
              label: "Annual cost",
              description: "One decent job covers the whole year",
            },
            {
              metric: "24/7",
              label: "Always working",
              description: "Unlike ads, SEO works while you sleep",
            },
            {
              metric: "$0",
              label: "Per click cost",
              description: "No pay-per-click charges, ever",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10"
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary-400 mb-2">
                {item.metric}
              </div>
              <div className="text-base sm:text-lg font-semibold mb-1">{item.label}</div>
              <div className="text-sm text-gray-400">{item.description}</div>
            </div>
          ))}
        </div>

        {/* Comparison */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Paid Ads */}
            <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Paid Ads</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Stop paying, stop getting leads",
                  "Costs increase over time",
                  "$20-80+ per click in trades",
                  "Competitors can outbid you",
                  "Many clicks never convert",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-gray-400"
                  >
                    <svg
                      className="w-4 h-4 text-red-400 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* SEO with Local Leader */}
            <div className="bg-primary-600/10 rounded-2xl p-6 sm:p-8 border border-primary-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-400"
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
                </div>
                <h3 className="text-lg sm:text-xl font-bold">SEO with Local Leader</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Rankings compound over time",
                  "Fixed monthly cost, no surprises",
                  "$0 per click — organic traffic",
                  "Competitors can't buy your spot",
                  "Higher trust from organic results",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <svg
                      className="w-4 h-4 text-green-400 flex-shrink-0"
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
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
