"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Building2, ArrowLeft, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/luxury/section-heading";
import { Reveal } from "@/components/luxury/reveal";

type Property = {
  name: string;
  location: string;
  developer: string;
  price: string;
  roi: string;
  category: string;
  potential: string;
  image: string;
};

const PROPERTIES: Property[] = [
  {
    name: "Aurora Penthouse Collection",
    location: "Downtown Dubai",
    developer: "Emaar Properties",
    price: "AED 4.2M",
    roi: "7.4%",
    category: "High Yield",
    potential: "Strong rental demand near Burj Khalifa district; limited ultra-luxury inventory.",
    image: "/images/property-penthouse.png",
  },
  {
    name: "Palm Crescent Villas",
    location: "Palm Jumeirah",
    developer: "Nakheel",
    price: "AED 9.8M",
    roi: "6.9%",
    category: "Luxury",
    potential: "Waterfront scarcity with enduring capital appreciation on the Palm frond.",
    image: "/images/property-villa.png",
  },
  {
    name: "Skyline Residences",
    location: "Business Bay",
    developer: "Damac",
    price: "AED 1.6M",
    roi: "8.2%",
    category: "Off Plan",
    potential: "Launch-stage pricing with flexible 60/40 payment plan and canal frontage.",
    image: "/images/property-offplan.png",
  },
  {
    name: "Marina Gate Towers",
    location: "Dubai Marina",
    developer: "Select Group",
    price: "AED 2.1M",
    roi: "7.8%",
    category: "High Yield",
    potential: "Mature marina location with strong short-let yield and proven resale liquidity.",
    image: "/images/property-penthouse.png",
  },
  {
    name: "Horizon Labour Accommodation",
    location: "Dubai Investment Park",
    developer: "Strategic Asset",
    price: "AED 1.1M",
    roi: "9.1%",
    category: "Commercial",
    potential: "Institutional-grade workforce housing with long corporate leases and steady yield.",
    image: "/images/property-commercial.png",
  },
];

function PropertyCard({ p }: { p: Property }) {
  return (
    <article className="group relative h-[480px] w-[78vw] shrink-0 overflow-hidden border border-[#F7F5F2]/8 bg-[#141519] sm:w-[380px] lg:w-[420px]">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={p.image}
          alt={p.name}
          fill
          sizes="(min-width:640px) 420px, 78vw"
          className="object-cover opacity-70 transition-all duration-[1.2s] ease-out group-hover:scale-110 group-hover:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-[#0B0D10]/40 to-transparent" />
      </div>

      {/* top row */}
      <div className="relative flex items-start justify-between p-5">
        <span className="glass-gold px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.22em] text-[#C8A86B]">
          {p.category}
        </span>
        <span className="glass flex items-center gap-1.5 px-3 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C8A86B] animate-pulse-node" />
          <span className="text-[0.6rem] uppercase tracking-[0.2em] text-[#F7F5F2]/70">
            ROI {p.roi}
          </span>
        </span>
      </div>

      {/* bottom content */}
      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className="flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.2em] text-[#C8A86B]">
          <MapPin className="h-3 w-3" />
          {p.location}
        </div>
        <h3 className="mt-2 font-serif text-2xl text-[#F7F5F2]">{p.name}</h3>
        <div className="mt-1 flex items-center gap-2 text-xs text-[#F7F5F2]/50">
          <Building2 className="h-3 w-3" />
          {p.developer}
        </div>

        {/* hover reveal */}
        <div className="grid grid-rows-[0fr] transition-all duration-500 ease-out group-hover:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <p className="pt-3 text-xs leading-relaxed text-[#F7F5F2]/65">{p.potential}</p>
          </div>
        </div>

        <div className="mt-4 flex items-end justify-between border-t border-[#F7F5F2]/8 pt-4">
          <div>
            <div className="text-[0.6rem] uppercase tracking-[0.2em] text-[#F7F5F2]/40">
              Starting
            </div>
            <div className="font-serif text-xl text-[#F7F5F2] tabular">{p.price}</div>
          </div>
          <a
            href="#contact"
            className="group/btn flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-[#F7F5F2] transition-colors hover:text-[#C8A86B]"
          >
            Enquire
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F7F5F2]/20 transition-all group-hover/btn:border-[#C8A86B] group-hover/btn:bg-[#C8A86B] group-hover/btn:text-[#0B0D10]">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>

      {/* location map pulse (decorative) */}
      <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <span className="relative flex h-10 w-10 items-center justify-center">
          <span className="absolute h-10 w-10 rounded-full border border-[#C8A86B]/40 animate-pulse-node" />
          <span className="h-2 w-2 rounded-full bg-[#C8A86B]" />
        </span>
      </span>
    </article>
  );
}

export function FeaturedOpportunities() {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (dir: "l" | "r") => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir === "l" ? -440 : 440, behavior: "smooth" });
  };

  return (
    <section id="opportunities" className="relative overflow-hidden bg-[#0B0D10] py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Featured Opportunities"
            title="Investment-grade assets,"
            highlight="curated with intent."
            description="A selection of Dubai's most compelling current opportunities — each evaluated for yield, growth, and resilience before it reaches you."
          />
          <Reveal direction="left" delay={0.12}>
            <div className="hidden items-center gap-2 lg:flex">
              <button
                onClick={() => scroll("l")}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F7F5F2]/15 text-[#F7F5F2]/70 transition-all hover:border-[#C8A86B] hover:text-[#C8A86B]"
                aria-label="Previous"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scroll("r")}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F7F5F2]/15 text-[#F7F5F2]/70 transition-all hover:border-[#C8A86B] hover:text-[#C8A86B]"
                aria-label="Next"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal className="relative" delay={0.1}>
        <div
          ref={scroller}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:px-8 lg:px-12 lg:gap-5"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="hidden lg:block" />
          {PROPERTIES.map((p) => (
            <div key={p.name} className="snap-start">
              <PropertyCard p={p} />
            </div>
          ))}
          <div className="shrink-0 pr-5 lg:pr-12" />
        </div>
      </Reveal>

      {/* drag hint */}
      <div className="mx-auto mt-6 max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <p className="flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.24em] text-[#9A968E]">
          <ArrowRight className="h-3 w-3 text-[#C8A86B]" />
          Drag or swipe to explore the collection
        </p>
      </div>
    </section>
  );
}
