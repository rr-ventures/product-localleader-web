import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Local Leader — Homepage Versions",
  description: "Compare homepage design versions for Local Leader",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
