// Sticky bottom CTA bar, hidden on desktop. Accepts accent colour and text.
import { ctas } from "@/lib/content"

interface StickyMobileCTAProps {
  bgColor?: string
  hoverColor?: string
  borderColor?: string
}

export function StickyMobileCTA({
  bgColor = "bg-orange-600",
  hoverColor = "hover:bg-orange-700",
  borderColor = "border-gray-200",
}: StickyMobileCTAProps) {
  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-white border-t ${borderColor} p-4 lg:hidden z-50`}>
      <a
        href={ctas.primary.href}
        className={`block w-full ${bgColor} text-white text-center py-3 rounded-lg font-semibold text-sm ${hoverColor}`}
      >
        {ctas.primary.text}
      </a>
    </div>
  )
}
