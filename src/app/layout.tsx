import type { Metadata } from "next";
import { Inter, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dr. Ashish Singhal — Orthopedic Surgeon in Udaipur | Knee, Hip & Sports Injury Specialist",
  description: "Dr. Ashish Singhal is a premier orthopedic surgeon in Udaipur specializing in robotic knee/hip replacements, sports injuries, and advanced arthroscopic surgeries with 20+ years of experience.",
  keywords: ["Orthopedic Surgeon Udaipur", "Knee Replacement Surgeon", "Robotic Knee Replacement", "Hip Replacement Specialist", "Sports Injury Doctor", "Arthroscopy Surgeon", "Udaipur Orthopedics", "Dr. Ashish Singhal"],
  authors: [{ name: "Dr. Ashish Singhal" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${hankenGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#fcf9f7] text-[#575757]">{children}</body>
    </html>
  );
}


