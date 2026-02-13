export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid md:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm sm:text-lg">L</span>
              </div>
              <span className="text-lg sm:text-xl font-bold">Local Leader</span>
            </div>
            <p className="text-sm sm:text-base text-gray-400 max-w-sm mb-6">
              Helping trades and home service businesses dominate local search.
              First page rankings, Google Maps visibility, and reputation
              management — all for $500/month.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              hello@localleader.com.au
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Services", href: "#services" },
                { label: "Results", href: "#results" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">We Help</h4>
            <ul className="space-y-2">
              {[
                "Plumbers",
                "Electricians",
                "Painters",
                "Tilers",
                "Roofers",
                "Landscapers",
                "Builders",
                "HVAC Technicians",
              ].map((trade) => (
                <li key={trade}>
                  <span className="text-sm text-gray-400">{trade}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Local Leader. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs sm:text-sm text-gray-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs sm:text-sm text-gray-500 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
