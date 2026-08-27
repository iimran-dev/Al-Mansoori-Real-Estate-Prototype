"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/luxury/reveal";

type Article = {
  category: string;
  date: string;
  title: string;
  image: string;
};

const ARTICLES: Article[] = [
  {
    category: "MARKET UPDATE",
    date: "May 15, 2024",
    title: "Dubai Real Estate Market Outlook 2024",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
  },
  {
    category: "INVESTMENT GUIDE",
    date: "May 10, 2024",
    title: "Why Off-Plan Properties Offer Higher ROI",
    image: "https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=800&auto=format&fit=crop",
  },
  {
    category: "GOLDEN VISA",
    date: "May 5, 2024",
    title: "How to Get UAE Golden Visa Through Property",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=800&auto=format&fit=crop",
  },
  {
    category: "AREA GUIDE",
    date: "Apr 28, 2024",
    title: "Top Areas for Investment in Dubai 2024",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=800&auto=format&fit=crop",
  },
];

export function MarketInsights() {
  return (
    <section id="insights" className="relative bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 text-[#1A1A1A] overflow-hidden border-t border-black/5">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
          
          {/* Left Column: Heading, Description & CTA */}
          <div className="flex flex-col items-start lg:col-span-4 lg:pr-4">
            <Reveal direction="up" delay={0.05}>
              <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#C5A265]">
                MARKET INSIGHTS
              </span>
            </Reveal>

            <Reveal direction="up" delay={0.15}>
              <h2 className="mt-3 font-serif text-3xl font-medium leading-[1.18] text-[#1A1A1A] sm:text-4xl lg:text-[2.65rem]">
                Stay Ahead with <br />
                Market Insights
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.25}>
              <p className="mt-4 max-w-sm font-sans text-xs sm:text-sm leading-relaxed text-[#555555]">
                Expert analysis, market trends, and investment guides to help you make informed decisions.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.35}>
              <a
                href="#insights"
                className="mt-8 inline-flex items-center gap-3 border border-[#C5A265] bg-transparent px-6 py-3.5 font-sans text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] transition-all duration-300 hover:bg-[#C5A265] hover:text-white group"
              >
                <span>VIEW ALL INSIGHTS</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>

          {/* Right Column: 4 White Article Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
              {ARTICLES.map((article, idx) => (
                <Reveal key={article.title} direction="up" delay={0.08 * (idx + 1)} className="h-full">
                  <a
                    href="#insights"
                    className="group flex flex-col justify-between h-full overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-black/5 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                  >
                    {/* Top Image Preview */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Card Body */}
                    <div className="flex flex-col justify-between p-5 flex-1 bg-white">
                      <div>
                        {/* Metadata Header Row */}
                        <div className="flex items-center justify-between font-sans text-[10px] font-bold uppercase tracking-wider text-[#C5A265]">
                          <span>{article.category}</span>
                          <span className="text-[#888888] font-normal tracking-normal text-[10px]">{article.date}</span>
                        </div>

                        {/* Title */}
                        <h3 className="mt-3 font-serif text-sm sm:text-[0.95rem] font-bold leading-snug text-[#1A1A1A] group-hover:text-[#C5A265] transition-colors duration-300">
                          {article.title}
                        </h3>
                      </div>

                      {/* Read More Link */}
                      <div className="mt-5 pt-3 border-t border-black/5 flex items-center gap-1.5 font-sans text-xs font-semibold text-[#C5A265]">
                        <span>Read More</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>

                  </a>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

