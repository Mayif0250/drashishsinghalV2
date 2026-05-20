"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

export default function InteractiveCalculator() {
  const [mounted, setMounted] = useState(false);
  const [symptom, setSymptom] = useState("knee_pain");
  const [duration, setDuration] = useState(2);
  const [severity, setSeverity] = useState(5);
  const [selectedClinic, setSelectedClinic] = useState("mahe");

  useEffect(() => { setMounted(true); }, []);

  const getRecommendation = () => {
    if (symptom === "sports_injury" || symptom === "ligament_tear")
      return { title: "Arthroscopy & Sports Medicine Audit", protocol: "Minimally invasive keyhole diagnosis to inspect ligament fiber tear integrity and schedule muscle balance rehabilitation.", timeframe: "Within 3–5 days" };
    if (symptom === "knee_pain" || symptom === "hip_stiffness") {
      if (severity >= 7 || duration === 3)
        return { title: "Robotic Joint Replacement Assessment", protocol: "Custom 3D robotic-assisted pre-op mapping, sparing up to 40% more healthy bone and ligament tissue with optimal implant alignment.", timeframe: "Within 24–48 hours" };
      return { title: "Joint Preservation Audit", protocol: "Non-surgical joint lubrication, custom bio-mechanical physical therapy, and targeted anti-inflammatory assessments.", timeframe: "Within 5–7 days" };
    }
    return { title: "Comprehensive Joint Consultation", protocol: "Physical diagnostic analysis, posture evaluation, and digital joint alignment check under specialist guidance.", timeframe: "Within 7 days" };
  };

  const advice = getRecommendation();
  if (!mounted) return null;

  const symptoms = [
    { id: "knee_pain", label: "Chronic Knee Pain" },
    { id: "hip_stiffness", label: "Hip Joint Stiffness" },
    { id: "sports_injury", label: "Sports Injury" },
    { id: "ligament_tear", label: "Ligament / ACL Tear" },
  ];

  const durations = [
    { val: 1, label: "< 1 Month" },
    { val: 2, label: "1–6 Months" },
    { val: 3, label: "> 6 Months" },
  ];

  const selBtn = (active: boolean) =>
    `text-left px-5 py-4 border transition-all text-[14px] ${active
      ? "border-midnight-charcoal bg-midnight-charcoal text-canvas-white"
      : "border-ash-mist bg-canvas-white text-stone-accent hover:border-midnight-charcoal hover:text-midnight-charcoal"}`;

  return (
    <section id="calculator" className="bg-parchment-gray py-20 md:py-28 border-t border-ash-mist">
      <div className="max-w-[1200px] mx-auto px-0">

        <div className="mb-16">
          <h2
            style={{ fontFamily: "var(--font-exposure30), 'Playfair Display', serif", fontWeight: 400, letterSpacing: "-0.01px", lineHeight: 1.1 }}
            className="text-[clamp(32px,5vw,56px)] text-midnight-charcoal mb-4"
          >
            Diagnostic Intake
          </h2>
          <p style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif", fontSize: "14px", lineHeight: 1.5 }} className="text-stone-accent max-w-md">
            Select your joint indicators to receive a clinical action plan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Controls */}
          <div className="flex flex-col gap-12" style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif" }}>

            <div>
              <p className="text-[10px] text-stone-accent tracking-[0.07em] uppercase mb-4">01 — Primary Indicator</p>
              <div className="flex flex-col gap-2">
                {symptoms.map((s) => (
                  <button key={s.id} onClick={() => setSymptom(s.id)} className={selBtn(symptom === s.id)}>{s.label}</button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] text-stone-accent tracking-[0.07em] uppercase mb-4">02 — Duration</p>
              <div className="grid grid-cols-3 gap-2">
                {durations.map((d) => (
                  <button key={d.val} onClick={() => setDuration(d.val)} className={`py-4 text-center border transition-all text-[13px] ${duration === d.val ? "border-midnight-charcoal bg-midnight-charcoal text-canvas-white" : "border-ash-mist bg-canvas-white text-stone-accent hover:border-midnight-charcoal hover:text-midnight-charcoal"}`}>
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <p className="text-[10px] text-stone-accent tracking-[0.07em] uppercase">03 — Pain Severity</p>
                <span style={{ fontFamily: "var(--font-exposure30), 'Playfair Display', serif", fontWeight: 400 }} className="text-[22px] text-midnight-charcoal leading-none">
                  {severity}<span className="text-stone-accent text-[13px] ml-1">/ 10</span>
                </span>
              </div>
              <input type="range" min="1" max="10" value={severity} onChange={(e) => setSeverity(parseInt(e.target.value))}
                className="w-full cursor-pointer" style={{ accentColor: "#ff7714", height: "2px" }}
              />
              <div className="flex justify-between mt-2 text-[11px] text-stone-accent">
                <span>Mild</span><span>Severe</span>
              </div>
            </div>

            <div>
              <p className="text-[10px] text-stone-accent tracking-[0.07em] uppercase mb-4">04 — Preferred Clinic</p>
              <div className="grid grid-cols-2 gap-2">
                {[{ id: "mahe", name: "Mahe Clinic", sub: "Bedla Road" }, { id: "paras", name: "Paras Hospital", sub: "NH-8, Udaipur" }].map((c) => (
                  <button key={c.id} onClick={() => setSelectedClinic(c.id)} className={`p-4 border text-left transition-all ${selectedClinic === c.id ? "border-midnight-charcoal bg-midnight-charcoal" : "border-ash-mist bg-canvas-white hover:border-midnight-charcoal"}`}>
                    <p className={`text-[13px] ${selectedClinic === c.id ? "text-canvas-white" : "text-midnight-charcoal"}`}>{c.name}</p>
                    <p className="text-[11px] text-stone-accent mt-1">{c.sub}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:sticky lg:top-28 h-fit bg-midnight-charcoal p-8 md:p-10" style={{ fontFamily: "var(--font-geist), 'Inter', sans-serif" }}>
            <p className="text-[10px] text-stone-accent tracking-[0.07em] uppercase mb-8">Suitability Report</p>
            <AnimatePresence mode="wait">
              <motion.div key={symptom + duration + severity} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="flex flex-col gap-6">
                <h3 style={{ fontFamily: "var(--font-exposure30), 'Playfair Display', serif", fontWeight: 400, letterSpacing: "-0.01px", lineHeight: 1.2 }} className="text-[clamp(22px,3vw,32px)] text-canvas-white">
                  {advice.title}
                </h3>
                <p className="text-[13px] text-stone-accent leading-relaxed">{advice.protocol}</p>
                <div className="border-t border-deep-plum pt-6 grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-[10px] text-stone-accent tracking-[0.07em] uppercase mb-2">Clinic</p>
                    <p className="text-[13px] text-canvas-white flex items-center gap-2"><MapPin size={12} className="text-sunset-orange" />{selectedClinic === "mahe" ? "Mahe Clinic" : "Paras Hospital"}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-stone-accent tracking-[0.07em] uppercase mb-2">Urgency</p>
                    <p className="text-[13px] text-canvas-white flex items-center gap-2"><Clock size={12} className="text-sunset-orange" />{advice.timeframe}</p>
                  </div>
                </div>
                <a href="#booking" className="btn-parloa-light w-full text-center mt-2">Book Priority Slot</a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
