export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-base">L</span>
              </div>
              <span className="text-lg font-semibold">Local Leader</span>
            </div>
            <p className="text-sm text-gray-500 max-w-sm mb-6 leading-relaxed">
              Helping trades and home service businesses become the #1 service
              provider in their area through local SEO.
            </p>
            <a
              href="mailto:hello@localleader.com.au"
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              hello@localleader.com.au
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-sm mb-5 text-gray-400 uppercase tracking-widest">
              Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Services", href: "#services" },
                { label: "Results", href: "#results" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-medium text-sm mb-5 text-gray-400 uppercase tracking-widest">
              Industries
            </h4>
            <ul className="space-y-3">
              {[
                "Plumbers",
                "Electricians",
                "Painters",
                "Tilers",
                "Roofers",
                "Landscapers",
                "Builders",
                "HVAC",
              ].map((trade) => (
                <li key={trade}>
                  <span className="text-sm text-gray-500">{trade}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Local Leader. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-gray-600 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-gray-600 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
