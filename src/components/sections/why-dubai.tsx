"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/luxury/reveal";

type Benefit = {
  value: string;
  label: string;
  hasDot?: boolean;
  iconSvg: React.ReactNode;
};

const BENEFITS: Benefit[] = [
  {
    value: "0%",
    label: "Property Tax",
    hasDot: false,
    iconSvg: (
      <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12 text-[#1A1A1A]">
        {/* Document Form Icon */}
        <path
          d="M20 12H38L46 20V50C46 51.1 45.1 52 44 52H20C18.9 52 18 51.1 18 50V14C18 12.9 18.9 12 20 12Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M38 12V20H46" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="24" y1="26" x2="38" y2="26" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="24" y1="32" x2="38" y2="32" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="24" y1="38" x2="32" y2="38" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="38" cy="42" r="5" stroke="#C5A265" strokeWidth="1.6" />
        <path d="M36 42L40 42" stroke="#C5A265" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: "Up to 9%",
    label: "Rental Yield",
    hasDot: true, // Gold dot on left divider
    iconSvg: (
      <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12 text-[#1A1A1A]">
        {/* Document with ascending yield graph and up-arrow */}
        <rect x="16" y="14" width="32" height="38" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M22 42V36M28 42V30M34 42V33M40 42V24"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M22 34L28 28L34 31L42 21"
          stroke="#C5A265"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M37 21H42V26"
          stroke="#C5A265"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    value: "100%",
    label: "Foreign Ownership",
    hasDot: false,
    iconSvg: (
      <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12 text-[#1A1A1A]">
        {/* Ownership Circular Shield & Refresh / Lock Icon */}
        <circle cx="32" cy="30" r="14" stroke="currentColor" strokeWidth="1.8" strokeDasharray="3 3 10 3" />
        <path d="M26 30C26 26.7 28.7 24 32 24C35.3 24 38 26.7 38 30C38 33 36 35.5 33 35.9V40" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M24 24L26 30L32 28" stroke="#C5A265" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="33" cy="44" r="1.5" fill="#C5A265" />
      </svg>
    ),
  },
  {
    value: "Golden Visa",
    label: "Eligibility",
    hasDot: true, // Gold dot on left divider
    iconSvg: (
      <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12 text-[#1A1A1A]">
        {/* Pin Location Badge */}
        <path
          d="M32 12C23.2 12 16 19.2 16 28C16 39 32 52 32 52C32 52 48 39 48 28C48 19.2 40.8 12 32 12Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="27" r="7" stroke="#C5A265" strokeWidth="1.8" />
        <path d="M32 23V31M28 27H36" stroke="#C5A265" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: "World-Class",
    label: "Infrastructure",
    hasDot: false,
    iconSvg: (
      <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12 text-[#1A1A1A]">
        {/* Rocket / Infrastructure Launch */}
        <path
          d="M32 12C32 12 42 22 42 36C42 42 38 48 38 48H26C26 48 22 42 22 36C22 22 32 12 32 12Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="26" r="3.5" stroke="#C5A265" strokeWidth="1.6" />
        <path d="M22 38L16 44V48H26" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M42 38L48 44V48H38" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 48L32 54L34 48" stroke="#C5A265" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function WhyDubai() {
  return (
    <section id="why-dubai" className="relative bg-[#FAF8F5] pt-16 pb-36 sm:pt-20 sm:pb-44 lg:pt-24 lg:pb-52 text-[#1A1A1A] overflow-hidden border-b border-black/5">
      
      {/* Main Content Container */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Heading, Description & CTA */}
          <div className="flex flex-col items-start lg:col-span-4 lg:pr-6">
            <Reveal direction="up" delay={0.05}>
              <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#C5A265]">
                WHY INVEST IN DUBAI
              </span>
            </Reveal>

            <Reveal direction="up" delay={0.15}>
              <h2 className="mt-3 font-serif text-3xl font-medium leading-[1.18] text-[#1A1A1A] sm:text-4xl lg:text-[2.65rem]">
                A City Designed <br />
                for Your Future
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.25}>
              <p className="mt-4 max-w-sm font-sans text-xs sm:text-sm leading-relaxed text-[#555555]">
                Dubai continues to be one of the world&apos;s most attractive real estate
                markets, offering unmatched benefits for investors worldwide.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.35}>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 border border-[#C5A265] bg-transparent px-6 py-3.5 font-sans text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] transition-all duration-300 hover:bg-[#C5A265] hover:text-white group"
              >
                <span>DOWNLOAD INVESTOR GUIDE</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>

          {/* Right Column: 5 Benefit Columns with Divider Lines & Gold Dots */}
          <div className="lg:col-span-8 lg:pt-2">
            <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 relative">
              {BENEFITS.map((b, idx) => (
                <Reveal key={b.label} direction="up" delay={0.08 * (idx + 1)}>
                  <div
                    className={`relative flex flex-col items-center px-2 sm:px-4 text-center ${
                      idx !== 0 ? "lg:border-l lg:border-black/15" : ""
                    } ${
                      idx % 2 !== 0 && idx < 4 ? "border-l border-black/15 lg:border-l" : ""
                    }`}
                  >
                    {/* Divider Gold Dot Accent (On Dividers 1 and 3 in desktop view) */}
                    {b.hasDot && (
                      <span className="absolute -left-[5px] top-1/2 hidden h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#C5A265] ring-2 ring-[#FAF8F5] lg:block z-10" />
                    )}

                    {/* Icon */}
                    <div className="mb-4 flex h-14 w-14 items-center justify-center">
                      {b.iconSvg}
                    </div>

                    {/* Value */}
                    <span className="font-serif text-xl sm:text-2xl font-bold leading-tight text-[#1A1A1A]">
                      {b.value}
                    </span>

                    {/* Label */}
                    <span className="mt-1 font-sans text-xs font-medium text-[#555555]">
                      {b.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Panoramic Dubai Skyline Image */}
      <div className="absolute inset-x-0 bottom-0 z-0 h-48 sm:h-64 lg:h-80 pointer-events-none opacity-80 mix-blend-multiply">
        <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop"
          alt="Dubai skyline horizon panorama"
          fill
          sizes="100vw"
          className="object-cover object-bottom brightness-105 contrast-110"
        />
        {/* Top Fade Overlay to blend smoothly with section background */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#FAF8F5]/50 to-[#FAF8F5]" />
      </div>

      {/* Red/Accent Bottom Border Line spanning 100% width */}
      <div className="absolute inset-x-0 bottom-0 z-20 h-[2px] bg-[#C53030]/80" />
    </section>
  );
}

