import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-parchment-gray border-t border-ash-mist">

      <div className="max-w-[1200px] mx-auto px-0 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">

        {/* Brand */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <div>
            <p
              style={{ fontFamily: "var(--font-exposure30), 'Playfair Display', serif", fontWeight: 400, letterSpacing: "-0.01px" }}
              className="text-[26px] text-midnight-charcoal leading-none mb-2"
            >
              Dr. Ashish Singhal
            </p>
            <p style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif", fontSize: "13px" }} className="text-stone-accent">
              Orthopedic & Robotic Joint Surgery · Udaipur
            </p>
          </div>
          <p style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif", fontSize: "13px", lineHeight: 1.5 }} className="text-stone-accent max-w-[280px]">
            Advanced orthopedic care using high-tech robotic joint surgeries and minimally invasive arthroscopy across Rajasthan.
          </p>
          <a href="#booking" className="btn-parloa-primary self-start text-[13px] px-5 py-3">
            Book Consultation
          </a>
        </div>

        {/* Links */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
          {[
            { heading: "Treatments", links: [{ label: "Knee Replacement", href: "#services" }, { label: "Hip Replacement", href: "#services" }, { label: "Sports Medicine", href: "#services" }, { label: "Arthroscopy", href: "#services" }] },
            { heading: "Clinics", links: [{ label: "Mahe Clinic", href: "#robotic" }, { label: "Paras Hospital", href: "#robotic" }, { label: "Book Consultation", href: "#booking" }, { label: "Diagnostic Intake", href: "#calculator" }] },
            { heading: "Contact", links: [{ label: "+91 94143 93320", href: "tel:+919414393320" }, { label: "Udaipur, Rajasthan", href: "#" }] },
          ].map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <p style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif" }} className="text-[10px] text-stone-accent tracking-[0.07em] uppercase mb-1">
                {col.heading}
              </p>
              {col.links.map((item) => (
                <a key={item.label} href={item.href} style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif", fontSize: "13px" }} className="text-midnight-charcoal hover:text-sunset-orange transition-colors">
                  {item.label}
                </a>
              ))}
            </div>
          ))}
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-ash-mist">
        <div className="max-w-[1200px] mx-auto px-0 py-7">
          <p style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif", fontSize: "11px", lineHeight: 1.5 }} className="text-stone-accent max-w-2xl mb-4">
            Medical Disclaimer: Information on this platform is for educational purposes only and does not replace professional diagnostic audits. Recovery periods vary by patient.
          </p>
          <div style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif", fontSize: "11px" }} className="flex flex-col sm:flex-row justify-between gap-2 text-stone-accent">
            <span>© {new Date().getFullYear()} Dr. Ashish Singhal. All rights reserved.</span>
            <span>Udaipur · Rajasthan · India</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
