"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/luxury/reveal";

type Benefit = {
  value: string;
  label: string;
  iconSvg: React.ReactNode;
};

const BENEFITS: Benefit[] = [
  {
    value: "0%",
    label: "Property Tax",
    iconSvg: (
      <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12 text-[#1A1A1A]">
        <rect x="18" y="12" width="28" height="40" rx="3" stroke="currentColor" strokeWidth="2" />
        <line x1="24" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="1.8" />
        <line x1="24" y1="28" x2="40" y2="28" stroke="currentColor" strokeWidth="1.8" />
        <line x1="24" y1="36" x2="34" y2="36" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="44" cy="42" r="8" fill="#F8F7F4" stroke="#C5A265" strokeWidth="1.8" />
        <path d="M40 42 L48 42" stroke="#C5A265" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    value: "Up to 9%",
    label: "Rental Yield",
    iconSvg: (
      <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12 text-[#1A1A1A]">
        <rect x="14" y="14" width="36" height="36" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M22 38 L30 30 L36 34 L42 24" stroke="#C5A265" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M38 24 H42 V28" stroke="#C5A265" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: "100%",
    label: "Foreign Ownership",
    iconSvg: (
      <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12 text-[#1A1A1A]">
        <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="2" />
        <ellipse cx="32" cy="32" rx="8" ry="18" stroke="currentColor" strokeWidth="1.5" />
        <line x1="14" y1="32" x2="50" y2="32" stroke="currentColor" strokeWidth="1.5" />
        <path d="M38 22 L46 16 L50 20 L44 26" stroke="#C5A265" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: "Golden Visa",
    label: "Eligibility",
    iconSvg: (
      <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12 text-[#1A1A1A]">
        <path d="M32 12 C22 12 16 20 16 30 C16 42 32 54 32 54 C32 54 48 42 48 30 C48 20 42 12 32 12 Z" stroke="currentColor" strokeWidth="2" />
        <circle cx="32" cy="28" r="5" stroke="#C5A265" strokeWidth="2" />
      </svg>
    ),
  },
  {
    value: "World-Class",
    label: "Infrastructure",
    iconSvg: (
      <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12 text-[#1A1A1A]">
        <path d="M32 10 L38 24 L52 28 L40 38 L44 54 L32 44 L20 54 L24 38 L12 28 L26 24 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <line x1="32" y1="10" x2="32" y2="44" stroke="#C5A265" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export function WhyDubai() {
  return (
    <section id="why-dubai" className="relative bg-[#F8F7F4] pt-20 pb-40 lg:pt-24 lg:pb-48 text-[#1A1A1A] overflow-hidden">
      
      {/* Main Content Container */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          
          {/* Left Column: Heading, Description & CTA */}
          <div className="flex flex-col items-start lg:col-span-4 lg:pr-4">
            <Reveal direction="up" delay={0.05}>
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[#C5A265]">
                WHY INVEST IN DUBAI
              </span>
            </Reveal>

            <Reveal direction="up" delay={0.15}>
              <h2 className="mt-3 font-serif text-3xl font-bold leading-[1.15] text-[#1A1A1A] sm:text-4xl lg:text-[2.5rem]">
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
                className="mt-8 inline-flex items-center gap-3 border border-[#C5A265] bg-transparent px-6 py-3.5 font-sans text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#1A1A1A] transition-all duration-300 hover:bg-[#C5A265] hover:text-[#090B0E]"
              >
                <span>DOWNLOAD INVESTOR GUIDE</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>

          {/* Right Column: 5 Benefit Columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
              {BENEFITS.map((b, idx) => (
                <Reveal key={b.label} direction="up" delay={0.08 * (idx + 1)}>
                  <div
                    className={`relative flex flex-col items-center px-3 text-center ${
                      idx !== 0 ? "lg:border-l lg:border-black/10" : ""
                    } ${
                      idx % 2 !== 0 && idx < 4 ? "border-l border-black/10 lg:border-l" : ""
                    }`}
                  >
                    {/* Divider Gold Dot Accent */}
                    {idx !== 0 && (
                      <span className="absolute -left-1 top-1/2 hidden h-2 w-2 -translate-y-1/2 rounded-full bg-[#C5A265] lg:block" />
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
      <div className="absolute inset-x-0 bottom-0 z-0 h-44 sm:h-56 lg:h-64 pointer-events-none opacity-40 mix-blend-multiply">
        <Image
          src="/images/dubai-panorama.jpg"
          alt="Dubai skyline panorama"
          fill
          sizes="100vw"
          className="object-cover object-bottom brightness-110 contrast-125"
        />
        {/* Top Fade Overlay to blend smoothly with section background */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#F8F7F4]/60 to-[#F8F7F4]" />
      </div>
    </section>
  );
}
