import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Local Leader | SEO for Home Services & Trades",
  description:
    "Get found by local customers. First page Google rankings, Google Maps visibility, and reputation management for trades and home service businesses. From $125/week.",
  keywords: [
    "SEO for tradies",
    "local SEO",
    "Google Maps ranking",
    "home services SEO",
    "plumber SEO",
    "electrician SEO",
    "painter SEO",
    "trades marketing",
    "local business marketing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
