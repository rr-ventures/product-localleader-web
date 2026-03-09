// Reusable Google Maps Local Pack mockup. Accepts accent colour.
interface GoogleMapsMockupProps {
  accentColor?: string
  accentBg?: string
  borderColor?: string
  bgAlt?: string
  className?: string
}

export function GoogleMapsMockup({
  accentColor = "bg-orange-600",
  accentBg = "bg-orange-50",
  borderColor = "border-orange-200",
  bgAlt = "bg-gray-50",
  className = "",
}: GoogleMapsMockupProps) {
  const listings = [
    { rank: 1, name: "Your Business Name", stars: 5, reviews: 127, highlighted: true },
    { rank: 2, name: "Competitor A", stars: 4, reviews: 43, highlighted: false },
    { rank: 3, name: "Competitor B", stars: 3, reviews: 18, highlighted: false },
  ]

  return (
    <div className={`rounded-2xl border border-gray-200 bg-white shadow-lg p-5 ${className}`}>
      <div className={`rounded-lg ${bgAlt} h-28 w-full mb-4 flex items-center justify-center`}>
        <span className="text-sm text-gray-400">Google Maps</span>
      </div>
      {listings.map((listing) => (
        <div
          key={listing.rank}
          className={`p-3 mb-2 rounded-lg ${
            listing.highlighted ? `${accentBg} border ${borderColor}` : ""
          }`}
        >
          <div className="flex items-start gap-3">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                listing.highlighted
                  ? `${accentColor} text-white`
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {listing.rank}
            </div>
            <div>
              <p className={`font-semibold text-sm ${listing.highlighted ? "text-gray-900" : "text-gray-500"}`}>
                {listing.name}
              </p>
              <p className="text-xs mt-0.5">
                <span className="text-amber-500">
                  {"★".repeat(listing.stars)}
                  {"★".repeat(5 - listing.stars).split("").map(() => "").join("")}
                </span>
                <span className="text-gray-400 ml-1">({listing.reviews})</span>
              </p>
            </div>
          </div>
        </div>
      ))}
      <p className="text-xs text-gray-400 italic text-center mt-4">
        This could be your business.
      </p>
    </div>
  )
}
