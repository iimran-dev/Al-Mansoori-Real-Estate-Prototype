"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight, Play } from "lucide-react";
import { SectionHeading } from "@/components/luxury/section-heading";
import { Reveal } from "@/components/luxury/reveal";

const TESTIMONIALS = [
  {
    name: "Ahmed Al Rashid",
    profile: "Private Investor · Abu Dhabi",
    location: "Dubai · Downtown",
    context: "Portfolio · AED 18M",
    quote:
      "Hamdan's approach felt less like advice and more like partnership. Every acquisition was reasoned, every risk named. My portfolio has compounded beyond what I expected.",
    image: "/images/testimonial-1.png",
  },
  {
    name: "Rajiv Menon",
    profile: "Family Office Principal · Mumbai",
    location: "Palm Jumeirah",
    context: "Waterfront · Off-Plan",
    quote:
      "What sets Hamdan apart is local fluency. He understands the city beneath the skyline — which towers will hold value, and which will not.",
    image: "/images/testimonial-2.png",
  },
  {
    name: "Elena Volkova",
    profile: "International Investor · London",
    location: "Business Bay",
    context: "Yield Strategy",
    quote:
      "From first consultation to asset management, the discipline is unmistakable. I invest with confidence because I understand exactly what I own.",
    image: "/images/testimonial-3.png",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <section className="relative overflow-hidden bg-[#0B0D10] py-24 lg:py-32">
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-[#C8A86B]/4 blur-[140px]" />
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Investor Voices"
          title="Trusted by those who"
          highlight="invest with intention."
          description="A private circle of investors who chose to build with us — their words, shared with permission. Names and figures presented for context only."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* portrait */}
          <Reveal className="lg:col-span-5" direction="right">
            <div className="relative">
              <div className="relative aspect-[4/5] w-full max-w-[380px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      sizes="(min-width:1024px) 40vw, 90vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10]/70 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>
              </div>
              {/* play badge */}
              <span className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full glass-gold text-[#C8A86B]">
                <Play className="h-4 w-4 fill-current" />
              </span>
              <span className="pointer-events-none absolute -left-3 -bottom-3 h-14 w-14 border-b border-l border-[#C8A86B]/50" />
            </div>
          </Reveal>

          {/* quote */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <Quote className="h-8 w-8 text-[#C8A86B]/40" />
              <div className="mt-5 min-h-[180px]">
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={active}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="font-serif text-2xl leading-relaxed text-[#F7F5F2]/90 sm:text-3xl lg:text-[2.1rem] lg:leading-[1.3] text-balance"
                  >
                    “{t.quote}”
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-8 flex items-center gap-4 border-t border-[#F7F5F2]/8 pt-6"
                >
                  <div className="flex flex-col">
                    <span className="font-serif text-xl text-[#F7F5F2]">{t.name}</span>
                    <span className="mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-[#C8A86B]">
                      {t.profile}
                    </span>
                  </div>
                  <span className="hidden h-8 w-px bg-[#F7F5F2]/15 sm:block" />
                  <div className="hidden flex-col text-xs text-[#9A968E] sm:flex">
                    <span>{t.location}</span>
                    <span>{t.context}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* controls */}
            <div className="mt-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Testimonial ${i + 1}`}
                    className={`h-1 transition-all duration-500 ${
                      active === i ? "w-10 bg-[#C8A86B]" : "w-4 bg-[#F7F5F2]/15"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActive((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F7F5F2]/15 text-[#F7F5F2]/70 transition-all hover:border-[#C8A86B] hover:text-[#C8A86B]"
                  aria-label="Previous"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setActive((p) => (p + 1) % TESTIMONIALS.length)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F7F5F2]/15 text-[#F7F5F2]/70 transition-all hover:border-[#C8A86B] hover:text-[#C8A86B]"
                  aria-label="Next"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
