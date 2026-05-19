import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abetterlou — Longevity & Biological Wellness Oasis",
  description: "A Better Lou establishes a confident, sophisticated biological wellness aesthetic with deep earth tones, dark-mode cellular optimization, and longevity tracking.",
  keywords: ["longevity", "biological age", "wellness oasis", "cellular health", "Abetterlou", "premium health"],
  authors: [{ name: "Abetterlou Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-abyss text-dawn-linen">{children}</body>
    </html>
  );
}

