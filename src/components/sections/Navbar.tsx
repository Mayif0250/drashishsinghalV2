"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Stethoscope } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-[#fcf9f7]/95 backdrop-blur-md border-b border-line-gray py-3 shadow-sm"
        : "bg-transparent border-none py-5"
        }`}
    >
      <div className="max-w-[94%] mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-[12px] bg-deep-graphite flex items-center justify-center text-canvas-warmth shadow-sm">
            <Stethoscope size={20} strokeWidth={2.5} />
          </div>
          <div>
            <span className="font-display font-bold text-lg tracking-tight text-headline-dark block leading-none">
              Dr. Ashish Singhal
            </span>
            <span className="text-[11px] font-semibold tracking-wide text-body-gray block mt-1.5 uppercase">
              Orthopedic & Robotic Joint Specialist
            </span>
          </div>
        </Link>

        {/* Navigation links */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="#about" className="text-xs font-semibold text-headline-dark/90 tracking-[0.1em] uppercase hover:text-deep-graphite transition-colors">
            About Dr. Singhal
          </Link>
          <Link href="#services" className="text-xs font-semibold text-headline-dark/90 tracking-[0.1em] uppercase hover:text-deep-graphite transition-colors">
            Treatments
          </Link>
          <Link href="#robotic" className="text-xs font-semibold text-headline-dark/90 tracking-[0.1em] uppercase hover:text-deep-graphite transition-colors">
            Robotic Surgery
          </Link>
          <Link href="#clinics" className="text-xs font-semibold text-headline-dark/90 tracking-[0.1em] uppercase hover:text-deep-graphite transition-colors">
            Clinic Locations
          </Link>
          <Link href="#faq" className="text-xs font-semibold text-headline-dark/90 tracking-[0.1em] uppercase hover:text-deep-graphite transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Direct Booking Elements */}
        <div className="flex items-center gap-2">
          <a
            href="tel:+919414393320"
            className="hidden sm:flex items-center justify-center border border-line-gray px-4 py-2 rounded-[12px] text-xs font-semibold text-headline-dark hover:border-deep-graphite hover:bg-surface-white transition-all shadow-sm"
          >
            <span>+91 94143 93320</span>
          </a>
          <div className="flex items-center gap-1.5">
            <Link href="#booking" className="btn-primary py-2 px-4 text-xs rounded-[12px]">
              Book Appointment
            </Link>
            <Link
              href="#booking"
              className="w-10 h-10 rounded-[12px] bg-deep-graphite text-canvas-warmth flex items-center justify-center hover:bg-headline-dark transition-colors"
            >
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
