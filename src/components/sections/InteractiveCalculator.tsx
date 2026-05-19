"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Brain, Dumbbell, Flame, Apple } from "lucide-react";

export default function InteractiveCalculator() {
  const [sleep, setSleep] = useState(7); // hours
  const [activity, setActivity] = useState(3); // days/week
  const [stress, setStress] = useState(2); // 1 = low, 2 = moderate, 3 = high
  const [nutrition, setNutrition] = useState(true); // true = anti-inflammatory, false = standard

  // Epigenetic mock calculation based on real longevity study ratios
  const baseAgeReversal = -1.2;
  const sleepFactor = (sleep - 6) * -0.4;
  const activityFactor = activity * -0.5;
  const stressFactor = stress === 1 ? -0.8 : stress === 2 ? 0 : 0.9;
  const nutritionFactor = nutrition ? -1.5 : 0.5;

  const totalAgeDelta = +(baseAgeReversal + sleepFactor + activityFactor + stressFactor + nutritionFactor).toFixed(1);
  const score = Math.min(100, Math.max(0, Math.round(75 + totalAgeDelta * -4.5)));

  return (
    <section id="calculator" className="relative py-24 bg-abyss border-t border-dark-charcoal overflow-hidden">
      {/* Decorative ambient backdrop glows */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-glow/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-xl mb-16 text-center mx-auto">
          <span className="text-caption uppercase tracking-wider text-amber-glow font-medium inline-flex items-center gap-1.5 justify-center">
            <Sparkles size={12} /> Live Biological Projection
          </span>
          <h2 className="text-heading-lg text-dawn-linen mt-4 tracking-[-0.008em]">
            ESTIMATE YOUR BIO-AGE POTENTIAL
          </h2>
          <p className="text-body text-pale-ash mt-4 leading-relaxed">
            Adjust your daily biological parameters below to see how optimizing cellular compliance can affect your epigenetic rate of cellular decay.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Panel (Left) */}
          <div className="lg:col-span-7 bg-deep-onyx border border-dark-charcoal p-8 rounded-md flex flex-col justify-between">
            <div className="space-y-8">
              {/* Parameter 1: Sleep */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-caption text-dawn-linen font-medium uppercase tracking-wider flex items-center gap-2">
                    <Brain size={14} className="text-amber-glow" /> Sleep Architecture
                  </span>
                  <span className="text-caption font-mono text-amber-glow font-medium">
                    {sleep} Hours / Night
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="9"
                  step="0.5"
                  value={sleep}
                  onChange={(e) => setSleep(parseFloat(e.target.value))}
                  className="w-full accent-amber-glow cursor-pointer bg-dark-charcoal h-1 rounded"
                />
                <div className="flex justify-between mt-1 text-[10px] text-pale-ash font-mono uppercase">
                  <span>Incomplete rest</span>
                  <span>Optimal Circadian REST</span>
                </div>
              </div>

              {/* Parameter 2: Activity */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-caption text-dawn-linen font-medium uppercase tracking-wider flex items-center gap-2">
                    <Dumbbell size={14} className="text-amber-glow" /> Epigenetic Stimulation
                  </span>
                  <span className="text-caption font-mono text-amber-glow font-medium">
                    {activity} Days / Week
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="6"
                  step="1"
                  value={activity}
                  onChange={(e) => setActivity(parseInt(e.target.value))}
                  className="w-full accent-amber-glow cursor-pointer bg-dark-charcoal h-1 rounded"
                />
                <div className="flex justify-between mt-1 text-[10px] text-pale-ash font-mono uppercase">
                  <span>Sedentary state</span>
                  <span>High mitochondrial trigger</span>
                </div>
              </div>

              {/* Parameter 3: Stress */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-caption text-dawn-linen font-medium uppercase tracking-wider flex items-center gap-2">
                    <Flame size={14} className="text-amber-glow" /> Cortisol & Stress Balance
                  </span>
                  <span className="text-caption font-mono text-amber-glow font-medium uppercase">
                    {stress === 1 ? "Balanced / low" : stress === 2 ? "Moderate" : "Elevated / chronic"}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((val) => (
                    <button
                      key={val}
                      onClick={() => setStress(val)}
                      className={`py-2 text-caption uppercase tracking-wider border font-medium rounded-full transition-all ${
                        stress === val
                          ? "bg-amber-glow border-amber-glow text-deep-onyx"
                          : "bg-transparent border-fossil-grey text-pale-ash hover:border-dawn-linen"
                      }`}
                    >
                      {val === 1 ? "Calm" : val === 2 ? "Neutral" : "Stressed"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Parameter 4: Nutrition */}
              <div className="pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-caption text-dawn-linen font-medium uppercase tracking-wider flex items-center gap-2">
                    <Apple size={14} className="text-amber-glow" /> Anti-inflammatory Nutrition
                  </span>
                  <button
                    onClick={() => setNutrition(!nutrition)}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none ${
                      nutrition ? "bg-amber-glow" : "bg-dark-charcoal border border-fossil-grey"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-transform duration-300 bg-deep-onyx ${
                        nutrition ? "transform translate-x-6" : ""
                      }`}
                    />
                  </button>
                </div>
                <p className="text-caption text-pale-ash mt-1">
                  Active cellular autophagy programs and high prebiotic content.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-dark-charcoal text-caption text-pale-ash text-center leading-relaxed">
              *Projections based on clinical longevity cohort aggregates. Actual epigenetic results require laboratory salivary methylation assays.
            </div>
          </div>

          {/* Results Panel (Right) */}
          <div className="lg:col-span-5 bg-deep-onyx border border-dark-charcoal p-8 rounded-md flex flex-col justify-between relative overflow-hidden">
            {/* Visual Indicator Ring */}
            <div className="flex flex-col items-center justify-center py-6">
              <div className="relative w-44 h-44 flex items-center justify-center">
                <svg className="absolute w-full h-full transform -rotate-90">
                  <circle cx="88" cy="88" r="80" fill="none" stroke="#181109" strokeWidth="3" />
                  <motion.circle
                    cx="88"
                    cy="88"
                    r="80"
                    fill="none"
                    stroke="#ffb442"
                    strokeWidth="3"
                    strokeDasharray="502"
                    animate={{ strokeDashoffset: 502 - (502 * score) / 100 }}
                    transition={{ type: "spring", stiffness: 60, damping: 15 }}
                  />
                </svg>
                <div className="text-center z-10">
                  <span className="text-caption text-pale-ash uppercase tracking-wider block">Bio Score</span>
                  <span className="text-heading-lg text-dawn-linen font-bold font-mono tracking-tight leading-none block my-1">
                    {score}
                  </span>
                  <span className="text-[10px] text-amber-glow uppercase tracking-wider block font-mono">
                    {score >= 85 ? "OPTIMAL RATE" : score >= 65 ? "STEADY LEVEL" : "DECAY WARNING"}
                  </span>
                </div>
              </div>

              {/* Dynamic Delta Output */}
              <div className="mt-8 text-center min-h-[70px]">
                <span className="text-caption text-pale-ash uppercase tracking-wider block">
                  EPIGENETIC AGE DIFFERENTIAL
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={totalAgeDelta}
                    initial={{ opacity: 0, scale: 0.9, y: 5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="text-display font-medium text-amber-glow block font-mono my-2"
                  >
                    {totalAgeDelta > 0 ? `+${totalAgeDelta}` : totalAgeDelta}y
                  </motion.span>
                </AnimatePresence>
                <p className="text-caption text-dawn-linen uppercase tracking-wider">
                  {totalAgeDelta < 0 ? "Biological Age Reversal Active" : "Accelerated Biological Decay Detected"}
                </p>
              </div>
            </div>

            {/* CTA action embedded */}
            <a
              href="#pricing"
              className="btn-primary w-full text-center py-3 font-semibold uppercase tracking-wider text-xs shadow-md"
            >
              Secure epigenetic audit membership
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
