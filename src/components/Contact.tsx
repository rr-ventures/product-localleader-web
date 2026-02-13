export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black text-white rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

            <div className="relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
                Ready to Be the Local Leader
                <br />
                in Your Area?
              </h2>
              <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-8 text-balance">
                Book a free strategy call. We&apos;ll audit your current online
                presence, show you exactly where you&apos;re losing customers to
                competitors, and map out a plan to get you ranking.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:hello@localleader.com.au"
                  className="w-full sm:w-auto bg-white text-black font-semibold px-8 py-4 rounded-xl text-base sm:text-lg hover:bg-gray-100 transition-colors"
                >
                  Book a Free Strategy Call
                </a>
                <a
                  href="mailto:hello@localleader.com.au"
                  className="w-full sm:w-auto border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base sm:text-lg hover:border-white/40 transition-colors"
                >
                  Send Us a Message
                </a>
              </div>

              <p className="text-sm text-gray-500 mt-6">
                No obligation. No hard sell. Just a genuine conversation about
                growing your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
