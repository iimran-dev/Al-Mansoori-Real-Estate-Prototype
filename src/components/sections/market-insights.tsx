"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/luxury/section-heading";
import { Reveal } from "@/components/luxury/reveal";

const FEATURED = {
  title: "Dubai's 2025 yield map: where capital is finding its edge",
  category: "Market Analysis",
  date: "March 2025",
  read: "8 min read",
  author: "Hamdan Al Mansoori",
  image: "/images/article-featured.png",
  excerpt:
    "A community-by-community look at where Dubai's rental yield is holding — and where appreciation is quietly compounding beneath the headline numbers.",
};

const ARTICLES = [
  {
    title: "Off-plan strategy: reading the launch cycle with discipline",
    category: "Investment Guides",
    date: "Feb 2025",
    read: "6 min",
    image: "/images/property-offplan.png",
  },
  {
    title: "The Golden Visa and the investor's long horizon",
    category: "Golden Visa",
    date: "Jan 2025",
    read: "5 min",
    image: "/images/property-penthouse.png",
  },
  {
    title: "Emerging communities: the quiet outperformers of 2025",
    category: "Market Trends",
    date: "Jan 2025",
    read: "7 min",
    image: "/images/dubai-skyline-night.png",
  },
  {
    title: "Building a resilient Dubai portfolio across cycles",
    category: "Investment Strategy",
    date: "Dec 2024",
    read: "9 min",
    image: "/images/property-villa.png",
  },
];

export function MarketInsights() {
  return (
    <section id="insights" className="relative bg-[#0B0D10] py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Market Insights"
            title="Intelligence for the"
            highlight="considered investor."
            description="Editorial perspectives on Dubai's market — written for those who treat property as a discipline, not a bet."
          />
          <Reveal direction="left" delay={0.12}>
            <a
              href="#insights"
              className="group flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-[#F7F5F2]/70 transition-colors hover:text-[#C8A86B]"
            >
              View all insights
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Featured */}
          <Reveal className="lg:col-span-7" direction="up">
            <a href="#insights" className="group relative block h-full overflow-hidden border border-[#F7F5F2]/8 bg-[#141519] transition-colors duration-500 hover:border-[#C8A86B]/40">
              <div className="relative h-64 overflow-hidden sm:h-80">
                <Image
                  src={FEATURED.image}
                  alt={FEATURED.title}
                  fill
                  sizes="(min-width:1024px) 60vw, 100vw"
                  className="object-cover opacity-80 transition-all duration-[1.2s] ease-out group-hover:scale-105 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141519] via-[#141519]/40 to-transparent" />
                <span className="absolute left-5 top-5 glass-gold px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.22em] text-[#C8A86B]">
                  Featured
                </span>
              </div>
              <div className="p-7 lg:p-9">
                <div className="flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.2em] text-[#C8A86B]">
                  <span>{FEATURED.category}</span>
                  <span className="h-1 w-1 rounded-full bg-[#C8A86B]/60" />
                  <span className="text-[#9A968E]">{FEATURED.date}</span>
                  <span className="text-[#9A968E]">· {FEATURED.read}</span>
                </div>
                <h3 className="mt-4 font-serif text-2xl leading-snug text-[#F7F5F2] sm:text-3xl">
                  {FEATURED.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#F7F5F2]/60">
                  {FEATURED.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-[#F7F5F2]/8 pt-5">
                  <span className="text-xs text-[#9A968E]">By {FEATURED.author}</span>
                  <span className="group/btn flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-[#F7F5F2] transition-colors group-hover/btn:text-[#C8A86B]">
                    Read
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </a>
          </Reveal>

          {/* Supporting articles */}
          <div className="grid grid-cols-1 gap-6 lg:col-span-5">
            {ARTICLES.map((a, i) => (
              <Reveal key={a.title} direction="up" delay={i * 0.08}>
                <a href="#insights" className="group grid grid-cols-12 gap-4 border border-[#F7F5F2]/8 bg-[#141519] p-3 transition-colors duration-500 hover:border-[#C8A86B]/40">
                  <div className="relative col-span-4 aspect-square overflow-hidden sm:col-span-4">
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      sizes="120px"
                      className="object-cover opacity-75 transition-all duration-700 group-hover:scale-110 group-hover:opacity-95"
                    />
                  </div>
                  <div className="col-span-8 flex flex-col justify-center pr-2">
                    <div className="flex items-center gap-2 text-[0.58rem] uppercase tracking-[0.2em] text-[#C8A86B]">
                      <span>{a.category}</span>
                      <span className="h-1 w-1 rounded-full bg-[#C8A86B]/60" />
                      <span className="text-[#9A968E]">{a.read}</span>
                    </div>
                    <h4 className="mt-2 font-serif text-lg leading-snug text-[#F7F5F2] transition-colors group-hover:text-[#C8A86B]">
                      <span className="bg-gradient-to-r from-[#C8A86B] to-[#C8A86B] bg-[length_0%_1px] bg-left-bottom bg-no-repeat transition-all duration-500 group-hover:bg-[length_100%_1px]">
                        {a.title}
                      </span>
                    </h4>
                    <div className="mt-2 text-[0.62rem] text-[#9A968E]">{a.date}</div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
