export default function Pillars() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Our Three Pillars
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
            Everything You Need to
            <br />
            Dominate Your Local Market
          </h2>
          <p className="text-base sm:text-lg text-gray-600 text-balance">
            No paid ads. No complicated funnels. Just proven SEO strategies that
            get your business in front of customers already searching for your
            services.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {/* Pillar 1: Google Rankings */}
          <div className="group relative bg-gray-50 rounded-2xl p-6 sm:p-8 hover:bg-black hover:text-white transition-all duration-300 border border-gray-100 hover:border-black">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-100 group-hover:bg-primary-600 rounded-xl flex items-center justify-center mb-5 sm:mb-6 transition-colors">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-primary-600 group-hover:text-white transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              First Page Google Rankings
            </h3>
            <p className="text-gray-600 group-hover:text-gray-300 mb-6 transition-colors text-sm sm:text-base">
              When someone in your area searches for your service, you need to be
              on page one. We optimise your website, build authority, and get you
              ranking for the keywords that bring real jobs.
            </p>
            <ul className="space-y-3">
              {[
                "On-page SEO optimisation",
                "Keyword research & targeting",
                "Technical site improvements",
                "Content that ranks",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-gray-600 group-hover:text-gray-300 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-green-500 flex-shrink-0"
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

          {/* Pillar 2: Google Maps */}
          <div className="group relative bg-gray-50 rounded-2xl p-6 sm:p-8 hover:bg-black hover:text-white transition-all duration-300 border border-gray-100 hover:border-black">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-100 group-hover:bg-primary-600 rounded-xl flex items-center justify-center mb-5 sm:mb-6 transition-colors">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-primary-600 group-hover:text-white transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              Google Maps Domination
            </h3>
            <p className="text-gray-600 group-hover:text-gray-300 mb-6 transition-colors text-sm sm:text-base">
              The Google Maps 3-pack is where most local customers click first.
              We get your Google Business Profile optimised, verified, and
              ranking in the top spots for your area.
            </p>
            <ul className="space-y-3">
              {[
                "Google Business Profile setup & optimisation",
                "Local citation building",
                "Map pack ranking strategy",
                "Call & visit tracking",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-gray-600 group-hover:text-gray-300 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-green-500 flex-shrink-0"
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

          {/* Pillar 3: Reputation Management */}
          <div className="group relative bg-gray-50 rounded-2xl p-6 sm:p-8 hover:bg-black hover:text-white transition-all duration-300 border border-gray-100 hover:border-black">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-100 group-hover:bg-primary-600 rounded-xl flex items-center justify-center mb-5 sm:mb-6 transition-colors">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-primary-600 group-hover:text-white transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              Reputation Management
            </h3>
            <p className="text-gray-600 group-hover:text-gray-300 mb-6 transition-colors text-sm sm:text-base">
              Reviews are the new word-of-mouth. We help you generate more
              5-star reviews, manage your online reputation, and build the trust
              that turns searchers into paying customers.
            </p>
            <ul className="space-y-3">
              {[
                "Automated review generation",
                "Review response management",
                "Reputation monitoring",
                "Trust signal optimisation",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-gray-600 group-hover:text-gray-300 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-green-500 flex-shrink-0"
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
    </section>
  );
}
