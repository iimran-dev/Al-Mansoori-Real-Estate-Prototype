"use client";

import { Reveal } from "@/components/luxury/reveal";

type Step = {
  no: string;
  title: string;
  desc: string;
  iconSvg: React.ReactNode;
};

const STEPS: Step[] = [
  {
    no: "01",
    title: "Understand Your Goals",
    desc: "We listen to your investment objectives and financial goals.",
    iconSvg: (
      <svg viewBox="0 0 48 48" fill="none" className="h-6 w-6 text-[#C5A265]">
        <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="3" fill="#C5A265" />
        <path d="M34 14L27 21" stroke="#C5A265" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    no: "02",
    title: "Select The Best Opportunities",
    desc: "We present carefully curated properties that match your goals.",
    iconSvg: (
      <svg viewBox="0 0 48 48" fill="none" className="h-6 w-6 text-[#C5A265]">
        <path d="M16 34V20L24 14L32 20V34H16Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <rect x="21" y="26" width="6" height="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="31" cy="31" r="5" stroke="#C5A265" strokeWidth="1.8" />
        <line x1="35" y1="35" x2="39" y2="39" stroke="#C5A265" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    no: "03",
    title: "Due Diligence & Documentation",
    desc: "Our team ensures all legal checks and documentation are handled smoothly.",
    iconSvg: (
      <svg viewBox="0 0 48 48" fill="none" className="h-6 w-6 text-[#C5A265]">
        <path d="M16 12H28L34 18V36C34 37.1 33.1 38 32 38H16C14.9 38 14 37.1 14 36V14C14 12.9 14.9 12 16 12Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M28 12V18H34" stroke="currentColor" strokeWidth="1.8" />
        <path d="M20 28L24 32L30 24" stroke="#C5A265" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    no: "04",
    title: "Investment & Handover",
    desc: "We manage the entire process from booking to handover.",
    iconSvg: (
      <svg viewBox="0 0 48 48" fill="none" className="h-6 w-6 text-[#C5A265]">
        <circle cx="20" cy="24" r="6" stroke="currentColor" strokeWidth="1.8" />
        <path d="M26 24H36M32 24V28M36 24V28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M18 24H22" stroke="#C5A265" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    no: "05",
    title: "Management & Aftercare",
    desc: "We continue to manage your property and maximize your returns.",
    iconSvg: (
      <svg viewBox="0 0 48 48" fill="none" className="h-6 w-6 text-[#C5A265]">
        <path d="M24 14L14 22V36H34V22L24 14Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M20 36V28C20 26.9 20.9 26 22 26H26C27.1 26 28 26.9 28 28V36" stroke="#C5A265" strokeWidth="1.8" />
        <path d="M12 20L24 10L36 20" stroke="#C5A265" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function InvestmentJourney() {
  return (
    <section id="journey" className="relative bg-[#FAF8F5] pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 text-[#1A1A1A]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <Reveal direction="up" delay={0.05}>
            <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#C5A265]">
              OUR PROCESS
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <h2 className="mt-2 font-serif text-3xl font-medium text-[#1A1A1A] sm:text-4xl lg:text-[2.65rem] leading-tight">
              A Seamless Investment Journey
            </h2>
          </Reveal>
        </div>

        {/* Steps Grid: 1 col on mobile, 2 cols on tablet, 5 cols on desktop */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0 relative">
          {STEPS.map((s, idx) => (
            <Reveal key={s.no} direction="up" delay={0.08 * (idx + 1)}>
              <div
                className={`relative flex flex-col items-start lg:px-5 ${
                  idx !== 0 ? "lg:border-l lg:border-black/10" : ""
                }`}
              >
                {/* Header Row: Circle Icon + Number + Underline + Dashed Arrow Connector */}
                <div className="flex items-center gap-3 w-full relative">
                  {/* Gold Circle Icon */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C5A265] bg-[#FAF8F5]">
                    {s.iconSvg}
                  </div>

                  {/* Step Number with Gold Underline */}
                  <div className="flex flex-col items-start">
                    <span className="font-serif text-2xl font-bold leading-none text-[#1A1A1A]">
                      {s.no}
                    </span>
                    <span className="mt-1 h-[2px] w-5 bg-[#C5A265]" />
                  </div>

                  {/* Horizontal Dashed Arrow Connector (Desktop view between steps) */}
                  {idx < STEPS.length - 1 && (
                    <div className="hidden lg:flex items-center flex-1 pl-3 pr-1 min-w-0">
                      <div className="w-full border-t-2 border-dashed border-[#C5A265]/40" />
                      <span className="text-[#C5A265] text-xs font-bold -ml-1">›</span>
                    </div>
                  )}
                </div>

                {/* Step Title & Description */}
                <div className="mt-6 flex-1">
                  <h3 className="font-sans text-sm sm:text-[0.95rem] font-bold leading-snug text-[#1A1A1A]">
                    {s.title}
                  </h3>
                  <p className="mt-2 font-sans text-xs text-[#555555] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

