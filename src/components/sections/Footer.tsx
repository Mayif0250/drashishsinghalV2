import Link from "next/link";
import { Stethoscope } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-deep-graphite text-canvas-warmth py-16 relative overflow-hidden border-t border-line-gray/20">
      {/* Bottom ambient highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-canvas-warmth/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Brand Info Column */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-[12px] bg-canvas-warmth flex items-center justify-center text-deep-graphite shadow-sm">
                <Stethoscope size={20} strokeWidth={2.5} />
              </div>
              <div>
                <span className="font-display font-bold text-lg tracking-tight text-canvas-warmth block leading-none">
                  Dr. Ashish Singhal
                </span>
                <span className="text-[10px] font-bold tracking-wider text-canvas-warmth/60 block mt-1.5 uppercase">
                  Orthopedic & Robotic Joint Surgery
                </span>
              </div>
            </Link>
            <p className="text-sm text-canvas-warmth/80 max-w-sm leading-relaxed mt-2">
              Dr. Ashish Singhal provides advanced orthopedic care using high-tech robotic joint surgeries and minimally invasive arthroscopy, supporting patients across Udaipur and Rajasthan.
            </p>
            {/* Social handles */}
            <div className="flex items-center gap-3 mt-2">
              <a href="#" className="w-8 h-8 rounded-full border border-canvas-warmth/20 flex items-center justify-center text-canvas-warmth/70 hover:text-canvas-warmth hover:border-canvas-warmth hover:scale-105 transition-all" aria-label="Facebook">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-canvas-warmth/20 flex items-center justify-center text-canvas-warmth/70 hover:text-canvas-warmth hover:border-canvas-warmth hover:scale-105 transition-all" aria-label="Twitter">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-canvas-warmth/20 flex items-center justify-center text-canvas-warmth/70 hover:text-canvas-warmth hover:border-canvas-warmth hover:scale-105 transition-all" aria-label="LinkedIn">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-canvas-warmth/60">
                Treatments
              </span>
              <a href="#services" className="text-xs font-bold uppercase tracking-wide text-canvas-warmth/80 hover:text-canvas-warmth transition-colors">
                Knee Replacement
              </a>
              <a href="#services" className="text-xs font-bold uppercase tracking-wide text-canvas-warmth/80 hover:text-canvas-warmth transition-colors">
                Hip Replacement
              </a>
              <a href="#services" className="text-xs font-bold uppercase tracking-wide text-canvas-warmth/80 hover:text-canvas-warmth transition-colors">
                Sports Medicine
              </a>
              <a href="#services" className="text-xs font-bold uppercase tracking-wide text-canvas-warmth/80 hover:text-canvas-warmth transition-colors">
                Arthroscopy
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-canvas-warmth/60">
                Clinics
              </span>
              <a href="#robotic" className="text-xs font-bold uppercase tracking-wide text-canvas-warmth/80 hover:text-canvas-warmth transition-colors">
                Mahe Clinic
              </a>
              <a href="#robotic" className="text-xs font-bold uppercase tracking-wide text-canvas-warmth/80 hover:text-canvas-warmth transition-colors">
                Paras Hospital
              </a>
              <a href="#booking" className="text-xs font-bold uppercase tracking-wide text-canvas-warmth/80 hover:text-canvas-warmth transition-colors">
                Book Consultation
              </a>
              <a href="#calculator" className="text-xs font-bold uppercase tracking-wide text-canvas-warmth/80 hover:text-canvas-warmth transition-colors">
                Diagnostic Intake
              </a>
            </div>

            <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
              <span className="text-xs font-bold uppercase tracking-wider text-canvas-warmth/60">
                Contact Udaipur
              </span>
              <span className="text-xs font-semibold text-canvas-warmth/80 leading-normal">
                Mahe Clinic: Bedla Road, Udaipur
              </span>
              <span className="text-xs font-semibold text-canvas-warmth/80 leading-normal">
                Paras Hospital: NH-8, Udaipur
              </span>
              <span className="text-xs font-bold text-canvas-warmth mt-1 uppercase tracking-wide">
                Call: +91 94143 93320
              </span>
            </div>
          </div>

        </div>

        {/* Medical disclaimer copyright */}
        <div className="pt-8 border-t border-canvas-warmth/10 text-xs text-canvas-warmth/60 leading-relaxed space-y-4 font-sans font-medium">
          <p>
            Medical Disclaimer: The clinical information presented on this website (including details regarding robotic knee/hip replacement and sports injuries) is meant solely for patient educational purposes. It is not a substitute for direct MS (Ortho) diagnostic audits. Epigenetic recovery periods represent average clinical trends and vary depending on patient age and pre-existing ligament compliance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-center sm:text-left text-canvas-warmth/40 uppercase tracking-widest font-bold">
            <span>
              &copy; {new Date().getFullYear()} Dr. Ashish Singhal. All medical rights reserved.
            </span>
            <span>
              Designed for Udaipur & Rajasthan Healthcare.
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
