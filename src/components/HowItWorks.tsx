export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Free Strategy Call",
      description:
        "We audit your current online presence, identify quick wins, and map out exactly how to get your business ranking on page one.",
    },
    {
      number: "02",
      title: "We Get to Work",
      description:
        "Our team optimises your Google Business Profile, improves your website SEO, builds local citations, and starts generating reviews.",
    },
    {
      number: "03",
      title: "Your Phone Rings",
      description:
        "As your rankings climb, you start getting more calls from local customers actively searching for your services. Real jobs, not tyre kickers.",
    },
    {
      number: "04",
      title: "Track Every Result",
      description:
        "See exactly how many calls, profile visits, and website clicks you're getting. Full transparency with monthly reporting you can actually understand.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
            Simple Process,
            <br />
            Measurable Results
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            No long lock-in contracts. No confusing jargon. Just a
            straightforward service that gets you more local customers.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gray-200 -translate-x-1/2 z-0" />
              )}
              <div className="relative z-10 bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 h-full">
                <div className="text-4xl sm:text-5xl font-bold text-gray-100 mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
