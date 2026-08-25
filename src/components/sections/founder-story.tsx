"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { Reveal } from "@/components/luxury/reveal";

const TIMELINE = [
  {
    year: "2019",
    title: "Founding Vision",
    text: "Established Hamdan Al Mansoori Real Estate with a single conviction — that Dubai property, advised with integrity, builds generational wealth.",
  },
  {
    year: "2020",
    title: "Market Conviction",
    text: "Advised clients through uncertainty, acquiring below-trend assets that would later anchor the firm's early track record.",
  },
  {
    year: "2022",
    title: "Portfolio Expansion",
    text: "Expanded into off-plan acquisition strategy and labour accommodation assets — diversifying yield across the Dubai market.",
  },
  {
    year: "2024",
    title: "Institutional Approach",
    text: "Formalised an institutional-grade advisory process combining due diligence, location intelligence, and long-term asset management.",
  },
  {
    year: "Today",
    title: "Building Legacies",
    text: "Advising a private circle of investors toward resilient, legacy-minded portfolios — one disciplined decision at a time.",
  },
];

export function FounderStory() {
  const [active, setActive] = useState(0);

  return (
    <section id="about" className="relative overflow-hidden bg-[#0B0D10] py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-32 top-0 h-[600px] w-[600px] rounded-full bg-[#C8A86B]/4 blur-[140px]" />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Portrait */}
          <Reveal className="lg:col-span-5" direction="right">
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/founder-editorial.png"
                  alt="Hamdan Al Mansoori — Founder & Investment Advisor"
                  fill
                  sizes="(min-width:1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10]/60 via-transparent to-transparent" />
              </div>
              {/* gold frame accents */}
              <span className="pointer-events-none absolute -left-3 -top-3 h-16 w-16 border-l border-t border-[#C8A86B]/50" />
              <span className="pointer-events-none absolute -bottom-3 -right-3 h-16 w-16 border-b border-r border-[#C8A86B]/50" />

              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#C8A86B]" />
                <span className="text-[0.62rem] uppercase tracking-[0.3em] text-[#C8A86B]">
                  Founder · Advisor · Emirati
                </span>
              </div>
              <h2 className="mt-4 font-serif text-3xl text-[#F7F5F2] lg:text-4xl">
                Hamdan Al Mansoori
              </h2>
              <p className="mt-2 text-sm text-[#9A968E]">
                Dubai Real Estate Investment Advisor
              </p>
            </div>
          </Reveal>

          {/* Editorial content */}
          <div className="flex flex-col gap-10 lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#C8A86B]/60" />
                <span className="eyebrow">The Founder Story</span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="font-serif text-[2.4rem] leading-[1.08] text-[#F7F5F2] sm:text-4xl lg:text-[3.2rem] text-balance">
                An Emirati conviction that
                <span className="italic text-gradient-gold font-light"> wealth is built, not found.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <blockquote className="relative border-l-2 border-[#C8A86B] pl-6">
                <Quote className="mb-2 h-5 w-5 text-[#C8A86B]/60" />
                <p className="font-serif text-xl italic leading-relaxed text-[#F7F5F2]/85 lg:text-2xl">
                  Real estate is not about transactions. It is about creating
                  long-term wealth.
                </p>
                <footer className="mt-3 text-[0.65rem] uppercase tracking-[0.24em] text-[#9A968E]">
                  — Hamdan Al Mansoori
                </footer>
              </blockquote>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="max-w-2xl text-sm leading-relaxed text-[#F7F5F2]/65">
                Born and raised in the Emirates, Hamdan built his practice on a
                simple premise: that disciplined, locally-rooted advice gives
                investors an edge no spreadsheet can replicate. His philosophy
                blends institutional rigour with a personal commitment to every
                client's legacy.
              </p>
            </Reveal>

            {/* Interactive timeline */}
            <div className="mt-4">
              <Reveal>
                <span className="text-[0.62rem] uppercase tracking-[0.28em] text-[#C8A86B]">
                  Journey & Milestones
                </span>
              </Reveal>

              <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                {/* timeline nav */}
                <div className="relative">
                  <span className="absolute left-[7px] top-2 bottom-2 w-px bg-[#F7F5F2]/10" />
                  <motion.span
                    className="absolute left-[7px] top-2 w-px bg-[#C8A86B]"
                    initial={{ height: 0 }}
                    animate={{ height: `${((active + 1) / TIMELINE.length) * 100}%` }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transform: "translateY(0)" }}
                  />
                  <ul className="space-y-5">
                    {TIMELINE.map((t, i) => (
                      <li key={t.year}>
                        <button
                          onClick={() => setActive(i)}
                          className="group flex items-center gap-4 text-left"
                        >
                          <span
                            className={`relative z-10 flex h-4 w-4 items-center justify-center rounded-full border transition-all duration-300 ${
                              active === i
                                ? "border-[#C8A86B] bg-[#C8A86B]"
                                : "border-[#F7F5F2]/25 bg-[#0B0D10]"
                            }`}
                          >
                            {active === i && (
                              <motion.span
                                layoutId="nodeGlow"
                                className="absolute inset-0 rounded-full bg-[#C8A86B]/40 blur-[6px]"
                              />
                            )}
                          </span>
                          <span
                            className={`font-serif text-lg transition-colors duration-300 ${
                              active === i ? "text-[#C8A86B]" : "text-[#F7F5F2]/50 group-hover:text-[#F7F5F2]"
                            }`}
                          >
                            {t.year}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* active content */}
                <div className="min-h-[160px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <h3 className="font-serif text-2xl text-[#F7F5F2]">
                        {TIMELINE[active].title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#F7F5F2]/65">
                        {TIMELINE[active].text}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* philosophy strip */}
            <Reveal delay={0.2}>
              <div className="mt-6 grid grid-cols-3 gap-4 border-t border-[#F7F5F2]/8 pt-6">
                {[
                  { k: "Discipline", v: "Decisions over impulse" },
                  { k: "Local Edge", v: "Emirati market fluency" },
                  { k: "Legacy", v: "Wealth across generations" },
                ].map((p) => (
                  <div key={p.k}>
                    <div className="text-[0.6rem] uppercase tracking-[0.22em] text-[#C8A86B]">
                      {p.k}
                    </div>
                    <div className="mt-1.5 text-xs text-[#F7F5F2]/60">{p.v}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
