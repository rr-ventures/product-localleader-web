export default function Results() {
  return (
    <section id="results" className="py-20 sm:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4">
            Results
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            One job pays for a full year.
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Most tradies spend thousands on ads that stop working the moment you
            stop paying. Our SEO service builds lasting visibility — and one new
            job typically covers your entire annual investment.
          </p>
        </div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-px bg-gray-800 rounded-2xl overflow-hidden max-w-5xl">
          {/* Paid Ads */}
          <div className="bg-black p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 bg-gray-600 rounded-full" />
              <h3 className="text-lg font-semibold text-gray-400">Paid Ads</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Stop paying, stop getting leads",
                "Costs increase over time",
                "$20-80+ per click in trades",
                "Competitors can outbid you",
                "Many clicks never convert",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-gray-500"
                >
                  <svg
                    className="w-4 h-4 text-gray-600 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SEO */}
          <div className="bg-gray-950 p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 bg-white rounded-full" />
              <h3 className="text-lg font-semibold">SEO with Local Leader</h3>
            </div>
            <ul className="space-y-4">
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
                    className="w-4 h-4 text-white flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
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
    </section>
  );
}
