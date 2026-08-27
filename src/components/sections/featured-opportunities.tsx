"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import { Reveal } from "@/components/luxury/reveal";

type Property = {
  name: string;
  location: string;
  specs: string;
  price: string;
  roi: string;
  tag: string;
  image: string;
};

const PROPERTIES: Property[] = [
  {
    name: "Sobha One Tower",
    location: "Sobha Hartland, Dubai",
    specs: "1 - 4 BR Apartments",
    price: "AED 1.6M",
    roi: "ROI up to 8.5%",
    tag: "HIGH YIELD",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Emaar Marina Shores",
    location: "Dubai Marina",
    specs: "1 - 3 BR Apartments",
    price: "AED 2.2M",
    roi: "ROI up to 7.8%",
    tag: "OFF PLAN",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Palm Beach Towers",
    location: "Palm Jumeirah",
    specs: "2 - 4 BR Apartments",
    price: "AED 5.8M",
    roi: "ROI up to 6.5%",
    tag: "LUXURY",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "JLT Business Tower",
    location: "Jumeirah Lake Towers",
    specs: "Office Spaces",
    price: "AED 1.3M",
    roi: "ROI up to 9.2%",
    tag: "COMMERCIAL",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
  },
];

function PropertyCard({ p }: { p: Property }) {
  return (
    <article className="group relative h-[440px] w-[265px] sm:w-[290px] shrink-0 overflow-hidden rounded-[20px] border border-white/10 bg-[#12151B] transition-all duration-500 hover:border-[#C5A265]/50 hover:shadow-2xl">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={p.image}
          alt={p.name}
          fill
          sizes="290px"
          className="object-cover opacity-85 transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Dark Vignette & Bottom Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090B0E] via-[#090B0E]/60 to-transparent" />
      </div>

      {/* Top Tag Pill */}
      <div className="relative z-10 p-5">
        <span className="inline-block rounded-full border border-white/10 bg-black/80 px-3 py-1 font-sans text-[0.6rem] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
          {p.tag}
        </span>
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 p-5">
        <h3 className="font-sans text-xl font-bold text-white transition-colors group-hover:text-[#C5A265]">
          {p.name}
        </h3>

        <div className="mt-1.5 flex items-center gap-1.5 font-sans text-[0.72rem] font-medium text-[#C5A265]">
          <MapPin className="h-3.5 w-3.5 text-[#C5A265]" />
          <span>{p.location}</span>
        </div>

        <p className="mt-1 font-sans text-xs text-white/60">
          {p.specs}
        </p>

        {/* Card Footer Divider */}
        <div className="mt-4 flex items-end justify-between border-t border-white/15 pt-3">
          <div>
            <span className="block font-sans text-[0.62rem] font-medium text-white/50">
              Starting from
            </span>
            <span className="font-sans text-lg font-bold text-white">
              {p.price}
            </span>
          </div>

          <div className="font-sans text-xs font-semibold text-[#C5A265]">
            {p.roi}
          </div>
        </div>
      </div>
    </article>
  );
}

export function FeaturedOpportunities() {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (dir: "l" | "r") => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir === "l" ? -310 : 310, behavior: "smooth" });
  };

  return (
    <section id="opportunities" className="relative overflow-hidden bg-[#090B0E] py-20 lg:py-28 text-[#F7F5F2]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          
          {/* Left Column: Heading, Description & CTA */}
          <div className="flex flex-col items-start lg:col-span-4 lg:pr-4">
            <Reveal direction="up" delay={0.05}>
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[#C5A265]">
                FEATURED OPPORTUNITIES
              </span>
            </Reveal>

            <Reveal direction="up" delay={0.15}>
              <h2 className="mt-4 font-serif text-3xl font-bold leading-[1.12] text-white sm:text-4xl lg:text-[2.6rem]">
                Invest in Dubai&apos;s <br />
                Most Promising <br />
                <span className="text-[#C5A265]">Properties</span>
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.25}>
              <p className="mt-5 max-w-xs font-sans text-xs sm:text-sm leading-relaxed text-[#9A968E]">
                Curated selection of high-potential investment opportunities with
                strong ROI and capital appreciation.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.35}>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 border border-[#C5A265] bg-transparent px-6 py-3.5 font-sans text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#C5A265] hover:text-[#090B0E]"
              >
                <span>EXPLORE ALL PROPERTIES</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>

          {/* Right Column: Carousel & Arrow Controls */}
          <div className="relative flex items-center lg:col-span-8">
            <div
              ref={scroller}
              className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pr-12 pt-2 scroll-smooth"
              style={{ scrollbarWidth: "none" }}
            >
              {PROPERTIES.map((p) => (
                <div key={p.name} className="snap-start">
                  <PropertyCard p={p} />
                </div>
              ))}
            </div>

            {/* Right Carousel Controls */}
            <div className="hidden flex-col gap-3 pl-4 lg:flex">
              <button
                onClick={() => scroll("l")}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-[#C5A265] hover:text-[#C5A265] hover:bg-white/5"
                aria-label="Previous property"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scroll("r")}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-[#C5A265] hover:text-[#C5A265] hover:bg-white/5"
                aria-label="Next property"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
