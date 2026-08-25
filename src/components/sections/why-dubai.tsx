"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "@/components/luxury/section-heading";
import { Reveal } from "@/components/luxury/reveal";
import { AnimatedCounter } from "@/components/luxury/animated-counter";

const STATS = [
  { value: 0, suffix: "%", label: "Property Tax", desc: "No annual property tax on Dubai real estate holdings." },
  { value: 9, suffix: "%", label: "Rental Yield", desc: "Up to 9% gross yield across high-demand communities.", prefix: "Up to " },
  { value: 100, suffix: "%", label: "Foreign Ownership", desc: "Full freehold ownership available to international investors." },
  { value: 10, suffix: "-Year", label: "Golden Visa", desc: "Residency pathways for qualifying property investors." },
];

function SkylineSVG({ inView }: { inView: boolean }) {
  // Stylized Dubai skyline as elegant gold line art
  const towers = [
    { x: 20, w: 6, h: 40 },
    { x: 30, w: 4, h: 55 },
    { x: 38, w: 8, h: 70 },
    { x: 50, w: 5, h: 48 },
    { x: 58, w: 10, h: 96 },
    { x: 72, w: 6, h: 62 },
    { x: 82, w: 7, h: 80 },
    { x: 92, w: 5, h: 50 },
    { x: 102, w: 4, h: 38 },
    { x: 110, w: 6, h: 58 },
    { x: 120, w: 4, h: 44 },
    { x: 128, w: 7, h: 72 },
    { x: 140, w: 5, h: 52 },
    { x: 150, w: 6, h: 64 },
    { x: 160, w: 4, h: 42 },
    { x: 168, w: 8, h: 88 },
    { x: 180, w: 5, h: 56 },
    { x: 190, w: 6, h: 68 },
    { x: 200, w: 4, h: 46 },
    { x: 208, w: 6, h: 60 },
    { x: 220, w: 5, h: 50 },
    { x: 230, w: 7, h: 78 },
    { x: 242, w: 4, h: 44 },
    { x: 250, w: 6, h: 58 },
  ];
  return (
    <svg
      viewBox="0 0 280 110"
      className="h-full w-full"
      preserveAspectRatio="xMidYMax meet"
    >
      <line x1="0" y1="100" x2="280" y2="100" stroke="#C8A86B" strokeWidth="0.5" strokeOpacity="0.4" />
      {towers.map((t, i) => (
        <motion.line
          key={i}
          x1={t.x}
          y1={100}
          x2={t.x}
          y2={100 - t.h}
          stroke="#C8A86B"
          strokeWidth={t.w * 0.18}
          strokeLinecap="square"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1, delay: i * 0.06, ease: "easeOut" }}
        />
      ))}
      {/* Burj Khalifa centerpiece */}
      <motion.path
        d="M58 100 L58 30 L60 14 L62 30 L62 100 Z M60 14 L60 6"
        stroke="#C8A86B"
        strokeWidth="0.6"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 1.6, delay: 0.4, ease: "easeInOut" }}
      />
    </svg>
  );
}

export function WhyDubai() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative overflow-hidden bg-[#0B0D10] py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Why Dubai"
              title="A market engineered for"
              highlight="the long-term investor."
              description="Dubai combines a tax-friendly regime, world-class infrastructure, and residency pathways — a rare alignment for those building generational wealth."
            />
          </div>
          <Reveal className="lg:col-span-5" direction="left" delay={0.12}>
            <div ref={ref} className="relative h-32 w-full opacity-90">
              <SkylineSVG inView={inView} />
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-[#F7F5F2]/8 bg-[#F7F5F2]/8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="bg-[#0B0D10]">
              <div className="group relative h-full p-8 lg:p-10">
                <span className="font-serif text-xs text-[#C8A86B]/60">0{i + 1}</span>
                <div className="mt-6 flex items-baseline gap-1">
                  {s.prefix && <span className="font-sans text-lg text-[#F7F5F2]/60">{s.prefix}</span>}
                  <span className="font-serif text-6xl leading-none text-[#F7F5F2] tabular lg:text-7xl">
                    <AnimatedCounter value={s.value} suffix={s.suffix} duration={1.8} />
                  </span>
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <span className="h-px w-6 bg-[#C8A86B]/70" />
                  <span className="text-[0.72rem] uppercase tracking-[0.2em] text-[#C8A86B]">
                    {s.label}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#9A968E]">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10">
          <p className="text-[0.65rem] uppercase tracking-[0.24em] text-[#9A968E]">
            Note · Figures reflect commonly cited Dubai market conditions and are provided as brand claims for guidance. Verify current regulations and yields with our advisory team.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
