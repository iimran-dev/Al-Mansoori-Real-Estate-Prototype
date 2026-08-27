"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/luxury/reveal";

type StatCard = {
  image: string;
  stat: string;
  label: string;
};

const CARDS: StatCard[] = [
  {
    image: "https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=800&auto=format&fit=crop",
    stat: "950+",
    label: "Properties Sold",
  },
  {
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
    stat: "AED 950M+",
    label: "Total Sales Value",
  },
  {
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=800&auto=format&fit=crop",
    stat: "500+",
    label: "Happy Investors",
  },
  {
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=800&auto=format&fit=crop",
    stat: "5+",
    label: "Years of Excellence",
  },
];

export function TrackRecord() {
  return (
    <section id="track-record" className="relative bg-[#090B0E] py-16 sm:py-20 lg:py-24 text-[#F7F5F2] overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
          
          {/* Left Column: Heading, Description & CTA */}
          <div className="flex flex-col items-start lg:col-span-4 lg:pr-4">
            <Reveal direction="up" delay={0.05}>
              <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#C5A265]">
                OUR TRACK RECORD
              </span>
            </Reveal>

            <Reveal direction="up" delay={0.15}>
              <h2 className="mt-3 font-serif text-3xl font-medium leading-[1.18] text-[#F7F5F2] sm:text-4xl lg:text-[2.65rem]">
                Delivering Results. <br />
                Building Trust.
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.25}>
              <p className="mt-4 max-w-sm font-sans text-xs sm:text-sm leading-relaxed text-[#9A968E]">
                A proven track record of successful transactions and long-term relationships.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.35}>
              <a
                href="#opportunities"
                className="mt-8 inline-flex items-center gap-3 border border-[#C5A265] bg-transparent px-6 py-3.5 font-sans text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#F7F5F2] transition-all duration-300 hover:bg-[#C5A265] hover:text-[#090B0E] group"
              >
                <span>VIEW OUR PORTFOLIO</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>

          {/* Right Column: 4 Stat Cards with Images */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
              {CARDS.map((card, idx) => (
                <Reveal key={card.label} direction="up" delay={0.08 * (idx + 1)}>
                  <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#12151B]/90 transition-all duration-300 hover:border-[#C5A265]/50 hover:shadow-2xl">
                    
                    {/* Top Image Preview */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.label}
                        fill
                        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#12151B] via-transparent to-transparent opacity-80" />
                    </div>

                    {/* Bottom Stat & Label */}
                    <div className="flex flex-col items-center p-5 text-center bg-[#12151B]">
                      <span className="font-serif text-xl sm:text-2xl font-bold leading-tight text-[#C5A265]">
                        {card.stat}
                      </span>
                      <span className="mt-1 font-sans text-xs font-medium text-[#9A968E]">
                        {card.label}
                      </span>
                    </div>

                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

