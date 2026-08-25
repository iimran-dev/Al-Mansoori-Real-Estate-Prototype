"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/luxury/section-heading";
import { Reveal } from "@/components/luxury/reveal";
import { AnimatedCounter } from "@/components/luxury/animated-counter";

const CASES = [
  {
    image: "/images/property-penthouse.png",
    location: "Downtown Dubai",
    asset: "Aurora Penthouse",
    initial: 3.2,
    current: 4.6,
    period: "2019 — 2025",
    roi: 43.7,
    decision:
      "Acquired an off-plan penthouse at launch pricing in a high-scarcity tower near Burj Khalifa.",
    metric: "Capital Appreciation",
  },
  {
    image: "/images/property-villa.png",
    location: "Palm Jumeirah",
    asset: "Palm Crescent Villa",
    initial: 7.5,
    current: 9.8,
    period: "2020 — 2025",
    roi: 30.6,
    decision:
      "Secured a frond villa pre-completion, leveraging waterfront scarcity for resilient appreciation.",
    metric: "Scarcity Premium",
  },
  {
    image: "/images/property-commercial.png",
    location: "Dubai Investment Park",
    asset: "Horizon Labour Accommodation",
    initial: 1.1,
    current: 1.4,
    period: "2021 — 2025",
    roi: 27.2,
    decision:
      "Acquired a workforce-housing asset on a long corporate lease for steady, defensive yield.",
    metric: "Income Stability",
  },
];

const HIGHLIGHTS = [
  { value: 950, suffix: "M+", prefix: "AED ", label: "Advised transaction volume" },
  { value: 460, suffix: "+", label: "Assets placed under advisory" },
  { value: 38, suffix: "%", label: "Avg. portfolio appreciation" },
  { value: 92, suffix: "%", label: "Client retention" },
];

export function TrackRecord() {
  const [active, setActive] = useState(0);
  const c = CASES[active];

  return (
    <section className="relative overflow-hidden bg-[#0B0D10] py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Track Record"
          title="Decisions, measured by"
          highlight="outcomes."
          description="A selection of representative advisory cases — each illustrating how disciplined analysis translates into durable returns. Illustrative figures shown for guidance."
          className="mb-16"
        />

        {/* highlights row */}
        <div className="mb-16 grid grid-cols-2 gap-px overflow-hidden border border-[#F7F5F2]/8 bg-[#F7F5F2]/8 lg:grid-cols-4">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal key={h.label} delay={i * 0.08} className="bg-[#0B0D10]">
              <div className="p-6 lg:p-8">
                <span className="font-serif text-3xl text-[#F7F5F2] tabular lg:text-4xl">
                  <AnimatedCounter value={h.value} prefix={h.prefix} suffix={h.suffix} />
                </span>
                <div className="mt-3 text-[0.7rem] uppercase tracking-[0.18em] text-[#C8A86B]">
                  {h.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* case selector */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-[0.62rem] uppercase tracking-[0.28em] text-[#C8A86B]">
                Case Studies
              </span>
            </Reveal>
            <div className="mt-5 flex flex-col gap-3">
              {CASES.map((cs, i) => (
                <Reveal key={cs.asset} delay={i * 0.06}>
                  <button
                    onClick={() => setActive(i)}
                    className={`group w-full border p-5 text-left transition-all duration-500 ${
                      active === i
                        ? "border-[#C8A86B]/50 bg-[#141519]"
                        : "border-[#F7F5F2]/8 bg-transparent hover:border-[#F7F5F2]/15"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-serif text-lg transition-colors ${active === i ? "text-[#F7F5F2]" : "text-[#F7F5F2]/55"}`}>
                        {cs.asset}
                      </span>
                      <span className="text-[0.6rem] uppercase tracking-[0.2em] text-[#C8A86B]">
                        +{cs.roi}%
                      </span>
                    </div>
                    <div className="mt-1 text-xs text-[#9A968E]">{cs.location}</div>
                    <span className={`mt-3 block h-px bg-[#C8A86B] transition-all duration-500 ${active === i ? "w-12" : "w-0 group-hover:w-6"}`} />
                  </button>
                </Reveal>
              ))}
            </div>
          </div>

          {/* active case detail */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden border border-[#F7F5F2]/8 bg-[#141519]"
              >
                <div className="relative h-56 overflow-hidden sm:h-72">
                  <Image
                    src={c.image}
                    alt={c.asset}
                    fill
                    sizes="(min-width:1024px) 60vw, 100vw"
                    className="object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141519] via-[#141519]/40 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <div>
                      <div className="text-[0.6rem] uppercase tracking-[0.24em] text-[#C8A86B]">
                        {c.location}
                      </div>
                      <h3 className="mt-1 font-serif text-2xl text-[#F7F5F2]">{c.asset}</h3>
                    </div>
                    <span className="glass-gold flex items-center gap-2 px-3 py-2">
                      <TrendingUp className="h-3.5 w-3.5 text-[#C8A86B]" />
                      <span className="text-[0.7rem] uppercase tracking-[0.18em] text-[#C8A86B]">
                        {c.metric}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-px bg-[#F7F5F2]/8 lg:grid-cols-4">
                  {[
                    { k: "Initial Investment", v: `AED ${c.initial}M` },
                    { k: "Current Value", v: `AED ${c.current}M` },
                    { k: "Period", v: c.period },
                    { k: "Total ROI", v: `+${c.roi}%` },
                  ].map((m) => (
                    <div key={m.k} className="bg-[#141519] p-5">
                      <div className="text-[0.58rem] uppercase tracking-[0.22em] text-[#F7F5F2]/40">
                        {m.k}
                      </div>
                      <div className="mt-2 font-serif text-lg text-[#F7F5F2] tabular">{m.v}</div>
                    </div>
                  ))}
                </div>

                <div className="p-6 lg:p-8">
                  <div className="text-[0.6rem] uppercase tracking-[0.22em] text-[#C8A86B]">
                    Key Decision
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#F7F5F2]/65">
                    {c.decision}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <Reveal delay={0.1}>
              <p className="mt-4 text-[0.62rem] leading-relaxed text-[#9A968E]">
                Illustrative case studies. Figures shown as brand claims for portfolio guidance and do not guarantee future performance.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
