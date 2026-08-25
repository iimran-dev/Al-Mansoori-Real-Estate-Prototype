"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/luxury/section-heading";
import { Reveal } from "@/components/luxury/reveal";

const STEPS = [
  {
    no: "01",
    title: "Consultation",
    desc: "Understand the investor's objectives, risk profile, and investment goals — the foundation of every decision that follows.",
  },
  {
    no: "02",
    title: "Opportunity Selection",
    desc: "Identify suitable Dubai real estate opportunities aligned to the strategy — by location, asset class, and yield profile.",
  },
  {
    no: "03",
    title: "Due Diligence",
    desc: "Evaluate the project, developer, location, financials, and investment potential with institutional rigour.",
  },
  {
    no: "04",
    title: "Investment Execution",
    desc: "Guide the investor through acquisition and transaction — structuring, documentation, and payment with clarity.",
  },
  {
    no: "05",
    title: "Asset Management",
    desc: "Support long-term portfolio performance and stewardship — tenancy, maintenance, and strategic review.",
  },
];

export function InvestmentJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section id="journey" className="relative overflow-hidden bg-[#090B0E] py-16 lg:py-24 text-[#F7F5F2]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <SectionHeading
          eyebrow="The Investment Journey"
          title="A disciplined path from"
          highlight="intent to legacy."
          description="Five deliberate stages, each designed to protect capital and compound returns — the process behind every portfolio we advise."
          align="center"
          className="mx-auto mb-12 max-w-2xl text-center"
        />

        <div ref={ref} className="relative">
          {/* Center line - desktop */}
          <span className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 lg:block" />
          <motion.span
            style={{ scaleY: lineScale, originY: 0 }}
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#C5A265] via-[#C5A265]/60 to-transparent lg:block"
          />

          <div className="flex flex-col gap-5 lg:gap-6">
            {STEPS.map((s, i) => {
              const isRight = i % 2 === 1;
              return (
                <div
                  key={s.no}
                  className="relative lg:grid lg:grid-cols-2 lg:items-center"
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                >
                  {/* Center Node Indicator - desktop */}
                  <span className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center lg:flex">
                    <span
                      className={`h-3 w-3 rounded-full border transition-all duration-300 ${
                        hover === i
                          ? "border-[#C5A265] bg-[#C5A265] scale-125"
                          : "border-white/30 bg-[#090B0E]"
                      }`}
                    />
                  </span>

                  {/* Content Card (Alternating Left & Right) */}
                  <Reveal
                    direction={isRight ? "left" : "right"}
                    delay={i * 0.04}
                    className={isRight ? "lg:col-start-2 lg:pl-10" : "lg:col-start-1 lg:pr-10"}
                  >
                    <div className="group relative rounded-[16px] border border-white/10 bg-[#12151B]/90 p-5 sm:p-6 transition-all duration-300 hover:border-[#C5A265]/50 hover:shadow-xl">
                      <div className="flex items-start gap-4">
                        {/* Step Number */}
                        <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C5A265]/80 transition-colors duration-300 group-hover:text-[#C5A265]">
                          {s.no}
                        </span>

                        {/* Title & Description */}
                        <div className="flex-1 text-left">
                          <h3 className="font-serif text-lg sm:text-xl font-bold text-white transition-colors group-hover:text-[#C5A265]">
                            {s.title}
                          </h3>
                          <p className="mt-1.5 font-sans text-xs sm:text-sm leading-relaxed text-white/70">
                            {s.desc}
                          </p>
                          <span className="mt-3 block h-0.5 w-0 bg-[#C5A265] transition-all duration-300 group-hover:w-12" />
                        </div>
                      </div>
                    </div>
                  </Reveal>

                  {/* Mobile Dot Node */}
                  <span className="absolute -left-[2px] top-4 flex h-3 w-3 items-center justify-center lg:hidden">
                    <span className="h-2 w-2 rounded-full bg-[#C5A265]" />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
