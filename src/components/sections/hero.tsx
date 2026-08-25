"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { RevealWords } from "@/components/luxury/reveal";
import { MagneticButton } from "@/components/luxury/magnetic-button";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#0B0D10]"
    >
      {/* Background */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0"
      >
        <Image
          src="/images/dubai-skyline-night.png"
          alt="Dubai skyline at dusk with Burj Khalifa"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 hero-vignette" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10] via-[#0B0D10]/40 to-transparent" />

      {/* Floating gold particles */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        {[...Array(6)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[#C8A86B]/70"
            style={{ left: `${15 + i * 14}%`, top: `${30 + (i % 3) * 18}%` }}
            animate={{ y: [0, -24, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-center px-5 pb-20 pt-28 sm:px-8 lg:px-12"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          {/* Left: headline */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#C8A86B]" />
              <span className="eyebrow">Emirati Investment Expertise · Dubai</span>
            </motion.div>

            <h1 className="font-serif text-[3.2rem] leading-[0.98] sm:text-6xl lg:text-[4.6rem] text-[#F7F5F2]">
              <span className="block overflow-hidden">
                <RevealWords text="Building Wealth." delay={0.15} />
              </span>
              <span className="block overflow-hidden">
                <span className="block">
                  <RevealWords
                    text="Creating Legacies."
                    delay={0.45}
                    className="italic font-light text-gradient-gold"
                  />
                </span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-md text-[0.98rem] leading-relaxed text-[#F7F5F2]/70"
            >
              Hamdan Al Mansoori is a Dubai real estate investment advisor
              guiding discerning investors toward resilient wealth and
              enduring legacy through premium property opportunities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-4"
            >
              <MagneticButton href="#opportunities" variant="gold">
                Explore Opportunities
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton href="#contact" variant="outline">
                Schedule Consultation
              </MagneticButton>
            </motion.div>

            {/* inline trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-2 flex items-center gap-6 text-[#F7F5F2]/45"
            >
              <span className="flex items-center gap-2 text-xs uppercase tracking-[0.18em]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C8A86B]" /> AED 950M+ Transacted
              </span>
              <span className="hidden h-4 w-px bg-[#F7F5F2]/15 sm:block" />
              <span className="hidden text-xs uppercase tracking-[0.18em] sm:block">
                RERA-Accredited Advisory
              </span>
            </motion.div>
          </div>

          {/* Right: CEO profile card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[360px] lg:max-w-none"
          >
            <div className="animate-float-slow">
              <div className="glass-gold relative overflow-hidden rounded-sm p-2">
                {/* gold corner accents */}
                <span className="pointer-events-none absolute left-2 top-2 h-6 w-6 border-l border-t border-[#C8A86B]/60" />
                <span className="pointer-events-none absolute right-2 top-2 h-6 w-6 border-r border-t border-[#C8A86B]/60" />
                <span className="pointer-events-none absolute left-2 bottom-2 h-6 w-6 border-b border-l border-[#C8A86B]/60" />
                <span className="pointer-events-none absolute right-2 bottom-2 h-6 w-6 border-b border-r border-[#C8A86B]/60" />

                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/founder-portrait.png"
                    alt="Hamdan Al Mansoori, Founder & Investment Advisor"
                    fill
                    sizes="(min-width:1024px) 360px, 90vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-transparent" />
                </div>

                <div className="relative -mt-16 px-5 pb-5 pt-2">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="flex items-center gap-2"
                  >
                    <span className="h-px w-6 bg-[#C8A86B]" />
                    <span className="text-[0.6rem] uppercase tracking-[0.3em] text-[#C8A86B]">
                      Founder & Advisor
                    </span>
                  </motion.div>
                  <h3 className="mt-3 font-serif text-2xl text-[#F7F5F2]">
                    Hamdan Al Mansoori
                  </h3>
                  <p className="mt-1 text-[0.72rem] uppercase tracking-[0.18em] text-[#F7F5F2]/55">
                    Dubai Real Estate Investment
                  </p>

                  {/* signature */}
                  <motion.div
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1.4, ease: "easeInOut" }}
                    className="mt-4"
                  >
                    <svg viewBox="0 0 220 50" className="h-10 w-full text-[#C8A86B]">
                      <motion.path
                        d="M6 38 C 22 10, 36 8, 44 30 S 64 44, 74 22 S 92 8, 100 30 C 110 44, 124 30, 130 22 S 148 6, 158 28 S 176 42, 190 24 L 212 22"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 1.5, duration: 1.6, ease: "easeInOut" }}
                      />
                    </svg>
                  </motion.div>

                  <div className="mt-2 flex items-center gap-3">
                    <button className="group flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.16em] text-[#F7F5F2]/70 transition-colors hover:text-[#C8A86B]">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C8A86B]/40 transition-colors group-hover:bg-[#C8A86B] group-hover:text-[#0B0D10]">
                        <Play className="h-3 w-3 fill-current" />
                      </span>
                      Watch My Story
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-[#F7F5F2]/40">
          <span className="text-[0.6rem] uppercase tracking-[0.3em]">Scroll</span>
          <span className="relative h-12 w-px overflow-hidden bg-[#F7F5F2]/15">
            <motion.span
              className="absolute inset-0 bg-[#C8A86B]"
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </div>
      </motion.div>
    </section>
  );
}
