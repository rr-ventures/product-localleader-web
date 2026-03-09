import { Search, MapPin, Star } from "lucide-react"
import { StarRating } from "@/components/shared/StarRating"
import { StickyMobileCTA } from "@/components/shared/StickyMobileCTA"
import { GoogleMapsMockup } from "@/components/shared/GoogleMapsMockup"
import {
  siteConfig,
  hero,
  ctas,
  trustMetrics,
  pillars,
  comparison,
  proofWall,
  finalCta,
  footer,
} from "@/lib/content"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  MapPin,
  Star,
}

export default function BasePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="/base" className="font-bold text-xl text-gray-900">
            {siteConfig.name}
          </a>
          <a
            href={ctas.primary.href}
            className="hidden sm:inline-block bg-orange-600 text-white text-sm font-semibold rounded-lg py-2.5 px-5 hover:bg-orange-700"
          >
            {ctas.primary.text}
          </a>
        </div>
      </nav>

      {/* SECTION 1: HERO */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold tracking-widest text-orange-600 uppercase">
                {hero.label}
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                {hero.headline}
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                {hero.subtitle}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={ctas.primary.href}
                  className="bg-orange-600 text-white text-center font-semibold rounded-lg py-4 px-8 hover:bg-orange-700"
                >
                  {ctas.primary.text}
                </a>
                <a
                  href={ctas.secondary.href}
                  className="border border-gray-300 text-gray-900 text-center font-semibold rounded-lg py-4 px-8 hover:bg-gray-50"
                >
                  {ctas.secondary.text}
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
                {hero.trustItems.map((item) => (
                  <span key={item}>✓ {item}</span>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <GoogleMapsMockup className="w-full max-w-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST BAR */}
      <section className="bg-gray-50 py-8 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {trustMetrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {metric.number}
                </p>
                <p className="text-sm text-gray-500 mt-1">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: THREE PILLARS */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold tracking-widest text-orange-600 uppercase">
              What We Do
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              {pillars.headline}
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {pillars.items.map((pillar) => {
              const Icon = iconMap[pillar.icon]
              return (
                <div
                  key={pillar.title}
                  className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center"
                >
                  {Icon && (
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100 text-orange-600 mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-gray-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: COMPARISON TABLE */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold tracking-widest text-orange-600 uppercase">
              Why Us
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              {comparison.headline}
            </h2>
          </div>

          {/* Desktop table */}
          <div className="mt-14 hidden md:block rounded-xl border border-gray-200 bg-white overflow-hidden">
            <div className="grid grid-cols-3">
              <div className="p-4 bg-gray-50 font-semibold text-sm text-gray-500 border-b border-gray-200">
                Feature
              </div>
              <div className="p-4 bg-gray-50 font-semibold text-sm text-gray-500 border-b border-gray-200">
                Typical Agency
              </div>
              <div className="p-4 bg-orange-50 font-semibold text-sm text-orange-600 border-b border-orange-200">
                {siteConfig.name}
              </div>
            </div>
            {comparison.rows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 ${
                  i < comparison.rows.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div className="p-4 text-sm font-medium text-gray-900">
                  {row.feature}
                </div>
                <div className="p-4 text-sm text-gray-500">
                  <span className="text-red-400 mr-1.5">✗</span>
                  {row.agency}
                </div>
                <div className="p-4 text-sm text-gray-900 bg-orange-50/50">
                  <span className="text-orange-600 mr-1.5">✓</span>
                  {row.localLeader}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile cards */}
          <div className="mt-14 md:hidden space-y-4">
            {comparison.rows.map((row) => (
              <div
                key={row.feature}
                className="rounded-xl border border-gray-200 bg-white p-5"
              >
                <p className="text-sm font-bold text-gray-900 mb-3">
                  {row.feature}
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-500">
                    <span className="text-red-400 mr-1.5">✗</span>
                    <span className="font-medium text-gray-400">Agency: </span>
                    {row.agency}
                  </p>
                  <p className="text-gray-900">
                    <span className="text-orange-600 mr-1.5">✓</span>
                    <span className="font-medium text-orange-600">Us: </span>
                    {row.localLeader}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: PROOF WALL */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold tracking-widest text-orange-600 uppercase">
              Real Results from Real Tradies
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              {proofWall.headline}
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {proofWall.testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <StarRating />
                <p className="mt-4 text-gray-700 italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 text-sm">
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-gray-500">
                    {t.trade} — {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {proofWall.metrics.map((m) => (
              <div
                key={m.label}
                className="text-center rounded-xl border border-gray-200 bg-gray-50 p-6"
              >
                <p className="text-3xl font-bold text-orange-600">
                  {m.number}
                </p>
                <p className="text-sm text-gray-500 mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FINAL CTA */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            {finalCta.headline}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            {finalCta.subtext}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={ctas.primary.href}
              className="bg-orange-600 text-white text-center font-semibold rounded-lg py-4 px-8 hover:bg-orange-700"
            >
              {ctas.primary.text}
            </a>
            <a
              href={ctas.secondary.href}
              className="border border-gray-300 text-gray-900 text-center font-semibold rounded-lg py-4 px-8 hover:bg-gray-50"
            >
              {ctas.secondary.text}
            </a>
          </div>
          <a
            href={ctas.tertiary.href}
            className="inline-block mt-4 text-sm text-orange-600 font-medium hover:text-orange-700"
          >
            {ctas.tertiary.text}
          </a>
          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="w-14 h-14 rounded-full bg-gray-200 flex-shrink-0" />
            <p className="text-sm text-gray-500 text-left">
              {finalCta.personalNote}
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 pb-20 lg:pb-0">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-bold text-white">{siteConfig.name}</p>
              <p className="text-sm text-white/50 mt-1">{footer.location}</p>
            </div>
            <div className="flex gap-4">
              {footer.links.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="text-sm text-white/50 hover:text-white/70"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
          <p className="text-xs text-white/30 mt-8">{footer.copyright}</p>
        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      <StickyMobileCTA />
    </div>
  )
}
