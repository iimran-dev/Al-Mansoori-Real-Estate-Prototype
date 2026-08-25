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
    <section id="journey" className="relative overflow-hidden bg-[#0B0D10] py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="The Investment Journey"
          title="A disciplined path from"
          highlight="intent to legacy."
          description="Five deliberate stages, each designed to protect capital and compound returns — the process behind every portfolio we advise."
          align="center"
          className="mx-auto mb-20 max-w-2xl"
        />

        <div ref={ref} className="relative">
          {/* center line - desktop */}
          <span className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#F7F5F2]/8 lg:block" />
          <motion.span
            style={{ scaleY: lineScale, originY: 0 }}
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#C8A86B] via-[#C8A86B]/60 to-transparent lg:block"
          />

          <div className="flex flex-col gap-12 lg:gap-0">
            {STEPS.map((s, i) => {
              const isRight = i % 2 === 1;
              return (
                <div
                  key={s.no}
                  className="relative lg:grid lg:grid-cols-2 lg:items-center"
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                >
                  {/* node - desktop */}
                  <span className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center lg:flex">
                    <span
                      className={`h-3 w-3 rounded-full border transition-all duration-500 ${
                        hover === i
                          ? "border-[#C8A86B] bg-[#C8A86B] scale-125"
                          : "border-[#F7F5F2]/25 bg-[#0B0D10]"
                      }`}
                    />
                  </span>

                  {/* content alternating */}
                  <Reveal
                    direction={isRight ? "left" : "right"}
                    delay={i * 0.04}
                    className={isRight ? "lg:col-start-2 lg:pl-16" : "lg:col-start-1 lg:pr-16 lg:text-right"}
                  >
                    <div className="group relative border border-[#F7F5F2]/8 bg-[#141519] p-6 transition-colors duration-500 hover:border-[#C8A86B]/40 lg:p-8">
                      <div className={isRight ? "" : "lg:flex lg:flex-row-reverse lg:items-start lg:gap-5"}>
                        <span className="font-serif text-5xl text-[#C8A86B]/30 transition-colors duration-500 group-hover:text-[#C8A86B]/60">
                          {s.no}
                        </span>
                        <div className={isRight ? "" : "lg:text-left"}>
                          <h3 className="mt-2 font-serif text-2xl text-[#F7F5F2]">
                            {s.title}
                          </h3>
                          <p className="mt-3 text-sm leading-relaxed text-[#F7F5F2]/60">
                            {s.desc}
                          </p>
                          <span className="mt-4 block h-px w-0 bg-[#C8A86B] transition-all duration-500 group-hover:w-12" />
                        </div>
                      </div>
                    </div>
                  </Reveal>

                  {/* mobile node */}
                  <span className="absolute -left-[2px] top-2 flex h-4 w-4 items-center justify-center lg:hidden">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#C8A86B]" />
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
