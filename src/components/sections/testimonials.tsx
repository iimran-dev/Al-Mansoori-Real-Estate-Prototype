"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import { Reveal } from "@/components/luxury/reveal";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Hamdan and his team provided us with excellent investment opportunities in Dubai. Their market knowledge and professionalism are unmatched.",
    name: "Ahmed Al Ali",
    role: "Investor, Kuwait",
  },
  {
    quote:
      "The entire process was smooth, transparent, and hassle-free. Highly recommend Hamdan Al Mansoori Real Estate.",
    name: "Mohammad Y.",
    role: "Investor, UK",
  },
  {
    quote:
      "Excellent service and great attention to detail. Our property is managed professionally and we see strong returns.",
    name: "Sara Khan",
    role: "Investor, Pakistan",
  },
];

export function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);

  const prev = () => {
    setStartIndex((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const next = () => {
    setStartIndex((p) => (p + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="relative bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 text-[#1A1A1A] overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12 relative">
        
        {/* Navigation Arrows (Positioned on Far Left and Far Right borders on Desktop) */}
        <button
          onClick={prev}
          aria-label="Previous Testimonials"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[#C5A265]/40 text-[#C5A265] bg-[#FAF8F5] transition-all duration-300 hover:bg-[#C5A265] hover:text-white shadow-sm"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={next}
          aria-label="Next Testimonials"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[#C5A265]/40 text-[#C5A265] bg-[#FAF8F5] transition-all duration-300 hover:bg-[#C5A265] hover:text-white shadow-sm"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-8 px-6 sm:px-8">
          
          {/* Left Column: Heading Block */}
          <div className="flex flex-col items-start lg:col-span-4 lg:pr-4">
            <Reveal direction="up" delay={0.05}>
              <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#C5A265]">
                WHAT OUR INVESTORS SAY
              </span>
            </Reveal>

            <Reveal direction="up" delay={0.15}>
              <h2 className="mt-3 font-serif text-3xl font-medium leading-[1.18] text-[#1A1A1A] sm:text-4xl lg:text-[2.65rem]">
                Trusted by Investors, <br />
                Proven by Results
              </h2>
            </Reveal>
          </div>

          {/* Right Column: 3 White Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIALS.map((t, idx) => {
                // Determine item display order for cycling through
                const displayIndex = (idx + startIndex) % TESTIMONIALS.length;
                const item = TESTIMONIALS[displayIndex];

                return (
                  <Reveal key={item.name} direction="up" delay={0.08 * (idx + 1)} className="h-full">
                    <div className="flex flex-col justify-between h-full rounded-2xl bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-black/5 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                      
                      {/* Quote Content */}
                      <div>
                        {/* Gold Double Quotation Icon */}
                        <span className="font-serif text-3xl sm:text-4xl leading-none text-[#C5A265] block font-bold">
                          “
                        </span>

                        <p className="mt-2 font-sans text-xs sm:text-[0.82rem] leading-relaxed text-[#444444]">
                          {item.quote}
                        </p>
                      </div>

                      {/* Investor Profile Footer */}
                      <div className="mt-6 flex items-center gap-3 pt-4 border-t border-black/5">
                        {/* Default Profile Avatar Icon */}
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FAF8F5] border border-[#C5A265]/30 text-[#C5A265]">
                          <User className="h-5 w-5" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-sans text-xs sm:text-sm font-bold text-[#1A1A1A]">
                            {item.name}
                          </span>
                          <span className="font-sans text-[11px] text-[#777777]">
                            {item.role}
                          </span>
                        </div>
                      </div>

                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

