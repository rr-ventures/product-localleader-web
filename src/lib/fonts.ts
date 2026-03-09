import {
  DM_Sans,
  Outfit,
  Plus_Jakarta_Sans,
} from "next/font/google";

// Shared font registry — each version picks the font it needs.
// To add a new font:
//   1. Import it from "next/font/google"
//   2. Initialise it below with `subsets: ["latin"]` and `variable` set
//   3. Export it

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});
