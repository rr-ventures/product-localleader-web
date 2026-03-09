// Renders 5 star characters. Accepts className for colour.
interface StarRatingProps {
  className?: string
  count?: number
}

export function StarRating({ className = "text-amber-500", count = 5 }: StarRatingProps) {
  return (
    <div className={`flex gap-0.5 ${className}`}>
      {Array.from({ length: count }, (_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  )
}
