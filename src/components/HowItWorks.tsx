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
        "As your rankings climb, you start getting more calls from local customers actively searching for your services.",
    },
    {
      number: "04",
      title: "Track Every Result",
      description:
        "See exactly how many calls, visits, and clicks you're getting. Full transparency with monthly reporting you can actually understand.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-32 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4">
            Process
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
            Simple process, measurable results.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 rounded-2xl overflow-hidden">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white p-8 sm:p-10 group hover:bg-gray-50 transition-colors duration-300"
            >
              <span className="text-5xl sm:text-6xl font-bold text-gray-100 block mb-6">
                {step.number}
              </span>
              <h3 className="text-lg sm:text-xl font-bold mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
