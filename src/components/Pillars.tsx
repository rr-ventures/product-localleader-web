export default function Pillars() {
  const pillars = [
    {
      number: "01",
      title: "First Page Google Rankings",
      description:
        "When someone in your area searches for your service, you need to be on page one. We optimise your website, build authority, and get you ranking for the keywords that bring real jobs.",
      features: [
        "On-page SEO optimisation",
        "Keyword research & targeting",
        "Technical site improvements",
        "Content that ranks",
      ],
    },
    {
      number: "02",
      title: "Google Maps Domination",
      description:
        "The Google Maps 3-pack is where most local customers click first. We get your Google Business Profile optimised, verified, and ranking in the top spots for your area.",
      features: [
        "Google Business Profile optimisation",
        "Local citation building",
        "Map pack ranking strategy",
        "Call & visit tracking",
      ],
    },
    {
      number: "03",
      title: "Reputation Management",
      description:
        "Reviews are the new word-of-mouth. We help you generate more 5-star reviews, manage your online reputation, and build the trust that turns searchers into customers.",
      features: [
        "Automated review generation",
        "Review response management",
        "Reputation monitoring",
        "Trust signal optimisation",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
            Everything you need to dominate your local market.
          </h2>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-white p-8 sm:p-10 group hover:bg-gray-50 transition-colors duration-300"
            >
              <span className="text-sm font-medium text-gray-300 mb-6 block">
                {pillar.number}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">
                {pillar.description}
              </p>
              <ul className="space-y-3">
                {pillar.features.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <span className="w-1 h-1 bg-black rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
