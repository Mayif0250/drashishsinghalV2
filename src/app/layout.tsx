import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr. Ashish Singhal — Orthopedic Surgeon in Udaipur | Knee, Hip & Sports Injury Specialist",
  description: "Dr. Ashish Singhal is a premier orthopedic surgeon in Udaipur specializing in robotic knee/hip replacements, sports injuries, and advanced arthroscopic surgeries with 20+ years of experience.",
  keywords: ["Orthopedic Surgeon Udaipur", "Knee Replacement Surgeon", "Robotic Knee Replacement", "Hip Replacement Specialist", "Sports Injury Doctor", "Arthroscopy Surgeon", "Udaipur Orthopedics", "Dr. Ashish Singhal"],
  authors: [{ name: "Dr. Ashish Singhal" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-cream-canvas text-midnight-charcoal" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
