"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/luxury/section-heading";
import { Reveal } from "@/components/luxury/reveal";

const HOTSPOTS = [
  { x: 30, y: 38, name: "Downtown Expansion", tag: "Mixed-Use", growth: "+22%", note: "Continued density around the Burj district and new cultural anchors." },
  { x: 55, y: 28, name: "Creek Harbour", tag: "Waterfront", growth: "+31%", note: "Master-planned waterfront extension with limited inventory at launch." },
  { x: 72, y: 55, name: "Marsa Al Arab", tag: "Coastal", growth: "+27%", note: "Emerging coastal corridor linking existing prime zones to new islands." },
  { x: 42, y: 64, name: "MBR City", tag: "Growth Zone", growth: "+19%", note: "Central connectivity and lagoon-front living driving absorption." },
  { x: 78, y: 42, name: "Expo & South Corridor", tag: "Infrastructure", growth: "+24%", note: "Infrastructure expansion anchoring the southern growth corridor." },
];

const CORRIDORS = [
  "M10 50 Q 35 30, 55 32 T 95 38",
  "M20 70 Q 50 60, 72 55 T 96 50",
];

export function DubaiFuture() {
  const [active, setActive] = useState<number | null>(0);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section className="relative overflow-hidden bg-[#0B0D10] py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 section-grain opacity-40" />
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Dubai Future · 2035"
              title="Where the next chapter of"
              highlight="Dubai will be written."
              description="A forward-looking view of Dubai's development corridors and emerging investment zones — illustrative signals for where tomorrow's opportunity is forming."
            />
          </div>
          <Reveal className="lg:col-span-5" direction="left" delay={0.12}>
            <p className="text-sm leading-relaxed text-[#9A968E]">
              Hotspots are illustrative of widely discussed development themes, not verified forecasts. Always confirm current master plans with our advisory team.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* map */}
          <Reveal className="lg:col-span-8" direction="up">
            <div className="relative aspect-[16/10] overflow-hidden border border-[#F7F5F2]/8 bg-[#0F1115]">
              <Image
                src="/images/dubai-future.png"
                alt="Dubai future development map 2035"
                fill
                sizes="(min-width:1024px) 66vw, 100vw"
                className="object-cover opacity-45"
              />
              <div className="absolute inset-0 bg-[#0B0D10]/30" />

              {/* animated corridors */}
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 80" preserveAspectRatio="none">
                {CORRIDORS.map((d, i) => (
                  <motion.path
                    key={i}
                    d={d}
                    fill="none"
                    stroke="#C8A86B"
                    strokeWidth="0.4"
                    strokeOpacity="0.7"
                    strokeDasharray="2 2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.3 + i * 0.4 }}
                  />
                ))}
              </svg>

              {/* hotspots */}
              {HOTSPOTS.map((h, i) => (
                <button
                  key={h.name}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  style={{ left: `${h.x}%`, top: `${h.y}%` }}
                  className="group absolute -translate-x-1/2 -translate-y-1/2"
                  aria-label={h.name}
                >
                  <span className="relative flex h-4 w-4 items-center justify-center">
                    <span
                      className={`absolute h-4 w-4 rounded-full border transition-all duration-300 ${
                        active === i ? "border-[#C8A86B] animate-pulse-node" : "border-[#C8A86B]/40"
                      }`}
                    />
                    <span
                      className={`h-2 w-2 rounded-full transition-all duration-300 ${
                        active === i ? "bg-[#C8A86B] scale-125" : "bg-[#C8A86B]/60"
                      }`}
                    />
                  </span>
                </button>
              ))}

              {/* legend */}
              <div className="absolute bottom-4 left-4 flex items-center gap-4 glass px-4 py-2.5">
                <span className="flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.2em] text-[#F7F5F2]/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C8A86B]" /> Growth Hotspot
                </span>
                <span className="hidden items-center gap-2 text-[0.6rem] uppercase tracking-[0.2em] text-[#F7F5F2]/60 sm:flex">
                  <span className="h-px w-5 bg-[#C8A86B]" /> Development Corridor
                </span>
              </div>

              <div className="absolute right-4 top-4 glass-gold px-3 py-1.5">
                <span className="text-[0.6rem] uppercase tracking-[0.22em] text-[#C8A86B]">
                  Horizon 2035 · Illustrative
                </span>
              </div>
            </div>
          </Reveal>

          {/* detail panel */}
          <div className="lg:col-span-4">
            <Reveal direction="up" delay={0.1}>
              <div className="glass-gold flex h-full flex-col p-6 lg:p-7">
                <div className="flex items-center gap-2 text-[#C8A86B]">
                  <MapPin className="h-4 w-4" />
                  <span className="text-[0.62rem] uppercase tracking-[0.24em]">Selected Zone</span>
                </div>
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4"
                >
                  <h3 className="font-serif text-2xl text-[#F7F5F2]">
                    {HOTSPOTS[active ?? 0].name}
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.2em] text-[#C8A86B]">
                    {HOTSPOTS[active ?? 0].tag}
                  </span>
                </motion.div>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-serif text-5xl text-[#F7F5F2] tabular">
                    {HOTSPOTS[active ?? 0].growth}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[#C8A86B]">
                    <TrendingUp className="h-3 w-3" /> proj. growth
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#F7F5F2]/65">
                  {HOTSPOTS[active ?? 0].note}
                </p>

                <div className="mt-auto pt-6">
                  <div className="space-y-2">
                    {HOTSPOTS.map((h, i) => (
                      <button
                        key={h.name}
                        onClick={() => setActive(i)}
                        className={`flex w-full items-center justify-between border-b border-[#F7F5F2]/8 py-2 text-left transition-colors ${
                          active === i ? "text-[#C8A86B]" : "text-[#F7F5F2]/55 hover:text-[#F7F5F2]"
                        }`}
                      >
                        <span className="text-xs">{h.name}</span>
                        <span className="text-[0.7rem] tabular">{h.growth}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
