export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black text-white rounded-2xl p-10 sm:p-16 md:p-20 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
              Ready to be the #1
              <br />
              in your area?
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
              Book a free strategy call. We&apos;ll audit your online presence,
              show you where you&apos;re losing customers, and map out a plan to
              get you ranking.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:hello@localleader.com.au"
                className="w-full sm:w-auto bg-white text-black font-medium px-10 py-4 rounded-full text-base hover:bg-gray-100 transition-colors"
              >
                Book a Call
              </a>
              <a
                href="mailto:hello@localleader.com.au"
                className="w-full sm:w-auto border border-gray-700 text-white font-medium px-10 py-4 rounded-full text-base hover:border-gray-500 transition-colors"
              >
                Send a Message
              </a>
            </div>

            <p className="text-sm text-gray-600 mt-8">
              No obligation. No hard sell. Just a genuine conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
