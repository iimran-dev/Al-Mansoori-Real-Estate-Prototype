"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/luxury/reveal";

type Service = {
  title: string;
  desc: string;
  iconSvg: React.ReactNode;
};

const SERVICES: Service[] = [
  {
    title: "Real Estate Investments",
    desc: "High-yield residential, commercial & industrial investment opportunities across Dubai.",
    iconSvg: (
      <svg viewBox="0 0 64 64" fill="none" className="h-14 w-14 text-[#C5A265]">
        {/* Building outline line-art */}
        <path d="M22 54 V16 L32 8 L42 16 V54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 54 V28 L22 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M42 20 L52 28 V54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="8" y1="54" x2="56" y2="54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        {/* Windows */}
        <rect x="27" y="22" width="4" height="5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="33" y="22" width="4" height="5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="27" y="32" width="4" height="5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="33" y="32" width="4" height="5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="27" y="42" width="4" height="5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="33" y="42" width="4" height="5" stroke="currentColor" strokeWidth="1.5" />
        {/* Arch Door */}
        <path d="M28 54 V48 C28 46 36 46 36 48 V54" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Off-Plan Projects",
    desc: "Exclusive access to the most promising off-plan developments with attractive payment plans.",
    iconSvg: (
      <svg viewBox="0 0 64 64" fill="none" className="h-14 w-14 text-[#C5A265]">
        {/* Modern Tower Crane / Off-plan Line Art */}
        <rect x="20" y="14" width="24" height="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="54" x2="52" y2="54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="1.5" />
        <line x1="20" y1="34" x2="44" y2="34" stroke="currentColor" strokeWidth="1.5" />
        <line x1="20" y1="44" x2="44" y2="44" stroke="currentColor" strokeWidth="1.5" />
        {/* Top Antenna / Spire */}
        <line x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M26 14 L32 6 L38 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Labour Accommodation",
    desc: "End-to-end solutions for labour accommodation development & management.",
    iconSvg: (
      <svg viewBox="0 0 64 64" fill="none" className="h-14 w-14 text-[#C5A265]">
        {/* Housing / Complex Accommodation Line Art */}
        <path d="M16 28 L32 14 L48 28 V52 H16 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 52 V36 H38 V52" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        {/* Document / Blueprint Detail */}
        <rect x="24" y="24" width="16" height="8" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
        <line x1="10" y1="52" x2="54" y2="52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Property Management",
    desc: "Professional property management services that protect your investment.",
    iconSvg: (
      <svg viewBox="0 0 64 64" fill="none" className="h-14 w-14 text-[#C5A265]">
        {/* Team / Management Line Art */}
        <circle cx="32" cy="20" r="6" stroke="currentColor" strokeWidth="2" />
        <path d="M20 40 C20 32 44 32 44 40 V48 H20 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        {/* Supporting People */}
        <circle cx="16" cy="26" r="4.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 44 C8 38 24 38 24 44" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="48" cy="26" r="4.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M40 44 C40 38 56 38 56 44" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-[#F8F7F4] py-20 lg:py-28 text-[#1A1A1A]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Heading, Description & CTA */}
          <div className="flex flex-col items-start lg:col-span-4 lg:pr-4">
            <Reveal direction="up" delay={0.05}>
              <span className="font-sans text-xs font-bold uppercase tracking-[0.22em] text-[#C5A265]">
                WHAT WE DO
              </span>
            </Reveal>

            <Reveal direction="up" delay={0.15}>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-[1.15] text-[#1A1A1A] sm:text-4xl lg:text-[2.6rem]">
                End-to-End Real Estate <br />
                Solutions in Dubai
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.25}>
              <p className="mt-5 max-w-md font-sans text-sm leading-relaxed text-[#555555]">
                From high-yield investments to off-plan opportunities and property
                management, we offer complete real estate solutions tailored to your
                goals.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.35}>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 border border-[#C5A265] bg-transparent px-6 py-3.5 font-sans text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#1A1A1A] transition-all duration-300 hover:bg-[#C5A265] hover:text-[#090B0E]"
              >
                <span>VIEW ALL SERVICES</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>

          {/* Right Column: 4 Vertical White Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {SERVICES.map((s, i) => (
                <Reveal key={s.title} direction="up" delay={0.1 * (i + 1)}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="group flex h-full flex-col items-center rounded-[16px] border border-black/5 bg-white p-6 sm:p-7 text-center shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#C5A265]/30"
                  >
                    {/* Top Center Icon */}
                    <div className="mb-6 flex h-16 w-16 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      {s.iconSvg}
                    </div>

                    {/* Card Title */}
                    <h3 className="mb-3 font-sans text-lg font-bold leading-tight text-[#1A1A1A]">
                      {s.title}
                    </h3>

                    {/* Card Description */}
                    <p className="font-sans text-xs leading-relaxed text-[#666666]">
                      {s.desc}
                    </p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
