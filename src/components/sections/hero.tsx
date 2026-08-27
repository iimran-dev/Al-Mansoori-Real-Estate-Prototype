"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Building2,
  Handshake,
  Key,
  TrendingUp,
  Users,
  Play,
  User,
} from "lucide-react";
import { RevealWords } from "@/components/luxury/reveal";

const METRICS = [
  {
    icon: Building2,
    value: "5+",
    label: "Years of Excellence",
  },
  {
    icon: Handshake,
    value: "500+",
    label: "Happy Investors",
  },
  {
    icon: Key,
    value: "950+",
    label: "Properties Sold",
  },
  {
    icon: TrendingUp,
    value: "AED 950M+",
    label: "Total Sales Value",
  },
  {
    icon: Users,
    value: "100+",
    label: "Team Members",
  },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#090B0E] text-[#F7F5F2] pt-24 lg:pt-28"
    >
      {/* Parallax Background Image */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1920&auto=format&fit=crop"
          alt="Dubai skyline at dusk with Burj Khalifa"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-90 contrast-105"
        />
        {/* Dark Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090B0E]/90 via-[#090B0E]/60 to-[#090B0E]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090B0E] via-transparent to-[#090B0E]/70" />
      </motion.div>

      {/* Hero Content Container */}
      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="relative z-10 mx-auto flex min-h-[calc(100vh-160px)] max-w-[1440px] flex-col justify-between px-6 pb-12 pt-8 sm:px-10 lg:px-16"
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left Column: Copy & CTAs */}
          <div className="flex flex-col items-start gap-6 lg:gap-7">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2"
            >
              <span className="font-sans text-[0.72rem] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#EAD5B3]">
                EMIRATI EXPERTISE. DUBAI OPPORTUNITIES.
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="font-serif text-[2.8rem] leading-[1.04] sm:text-6xl lg:text-[4.5rem] tracking-tight font-medium text-[#F7F5F2]">
              <span className="block overflow-hidden">
                <RevealWords text="Building Wealth." delay={0.1} />
              </span>
              <span className="block overflow-hidden">
                <RevealWords
                  text="Creating Legacies."
                  delay={0.35}
                  className="text-[#C5A265]"
                />
              </span>
            </h1>

            {/* Subtitle / Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl font-sans text-sm sm:text-base leading-relaxed text-[#F7F5F2]/80"
            >
              Premium real estate investments, labour accommodation solutions, and
              property management services delivered with integrity and results.
            </motion.p>

            {/* Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 flex flex-wrap items-center gap-4"
            >
              <a
                href="#opportunities"
                className="group relative inline-flex items-center justify-center bg-[#C5A265] px-7 py-3.5 font-sans text-[0.75rem] font-bold uppercase tracking-[0.16em] text-[#090B0E] transition-all duration-300 hover:bg-[#B38F52] hover:shadow-lg hover:shadow-[#C5A265]/20"
              >
                EXPLORE INVESTMENTS
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center border border-[#F7F5F2]/60 bg-black/20 px-7 py-3.5 font-sans text-[0.75rem] font-bold uppercase tracking-[0.16em] text-[#F7F5F2] backdrop-blur-sm transition-all duration-300 hover:border-[#F7F5F2] hover:bg-[#F7F5F2]/10"
              >
                BOOK CONSULTATION
              </a>
            </motion.div>

            {/* RERA Broker Stamp Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.9 }}
              className="mt-4 flex items-center gap-4 text-[#F7F5F2]"
            >
              {/* Circular Emblem Icon */}
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#C5A265]/50 bg-[#C5A265]/10 p-2 text-[#C5A265]">
                <svg viewBox="0 0 40 40" fill="none" className="h-full w-full">
                  <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
                  <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="0.8" />
                  <path d="M20 9 L24 17 L33 17 L25 22 L28 31 L20 25 L12 31 L15 22 L7 17 L16 17 Z" fill="none" stroke="currentColor" strokeWidth="0.9" />
                </svg>
              </div>

              <div className="flex flex-col justify-center">
                <span className="font-sans text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#F7F5F2]">
                  RERA REGISTERED BROKER
                </span>
                <span className="font-sans text-[0.62rem] font-medium tracking-[0.14em] text-[#F7F5F2]/60">
                  DED: 1344691
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Founder Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[340px] lg:max-w-[355px]"
          >
            {/* Card Main Container */}
            <div className="relative overflow-hidden rounded-[24px] border border-white/15 bg-[#14171C]/90 shadow-2xl backdrop-blur-xl transition-transform duration-500 hover:border-[#C5A265]/40">
              
              {/* Default Profile Avatar Area */}
              <div className="relative aspect-[4/4.2] w-full overflow-hidden bg-[#1A1D24] flex items-center justify-center">
                {/* Default User Avatar Circle */}
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#FAF8F5]/10 border border-[#C5A265]/40 text-[#C5A265] shadow-inner">
                  <User className="h-14 w-14 stroke-[1.5]" />
                </div>
                
                {/* Dark Gradient Overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#14171C] via-[#14171C]/30 to-transparent pointer-events-none" />
              </div>

              {/* Card Information & Controls */}
              <div className="relative -mt-10 px-5 pb-6 pt-1 sm:px-6 sm:pb-7">
                {/* Founder Name & Subtitle */}
                <h3 className="font-sans text-2xl sm:text-[1.65rem] font-bold tracking-tight text-white leading-snug">
                  Hamdan Al Mansoori
                </h3>
                <p className="mt-1 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#C5A265]">
                  FOUNDER & CEO
                </p>

                {/* Watch Story Button */}
                <div className="mt-4 flex items-center">
                  <button className="group flex items-center gap-3 text-left transition-all">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C5A265]/70 bg-black/30 text-[#C5A265] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#C5A265] group-hover:text-[#090B0E]">
                      <Play className="h-4 w-4 fill-current translate-x-0.5" />
                    </span>
                    <div className="flex flex-col leading-tight">
                      <span className="font-sans text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white group-hover:text-[#C5A265] transition-colors">
                        WATCH
                      </span>
                      <span className="font-sans text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white group-hover:text-[#C5A265] transition-colors">
                        MY STORY
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Metrics Bar (Full width across bottom of hero) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full border-t border-white/10 bg-[#090B0E]/85 backdrop-blur-md"
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
          <div className="grid grid-cols-2 gap-y-6 py-6 sm:grid-cols-3 lg:grid-cols-5 lg:py-7">
            {METRICS.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.label}
                  className={`flex items-center gap-3.5 px-4 ${
                    idx !== 0 ? "lg:border-l lg:border-white/10" : ""
                  } ${
                    idx % 2 !== 0 && idx < 4 ? "border-l border-white/10 lg:border-l" : ""
                  }`}
                >
                  {/* Icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center text-[#C5A265]">
                    <Icon className="h-6 w-6 stroke-[1.6]" />
                  </div>

                  {/* Value & Label */}
                  <div className="flex flex-col justify-center">
                    <span className="font-serif text-xl sm:text-2xl font-bold leading-none text-[#F7F5F2]">
                      {m.value}
                    </span>
                    <span className="mt-1 font-sans text-[0.68rem] font-medium text-[#F7F5F2]/70 leading-snug">
                      {m.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
