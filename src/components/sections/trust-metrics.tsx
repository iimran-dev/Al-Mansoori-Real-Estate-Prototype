"use client";

import { AnimatedCounter } from "@/components/luxury/animated-counter";
import { Reveal } from "@/components/luxury/reveal";

const METRICS = [
  { prefix: "AED ", value: 950, suffix: "M+", label: "Transactions", note: "Cumulative advisory volume" },
  { value: 950, suffix: "+", label: "Properties Sold", note: "Across Dubai's prime zones" },
  { value: 500, suffix: "+", label: "Investors", note: "Privately advised clients" },
  { value: 5, suffix: "+", label: "Years of Excellence", note: "Market-tested investment craft" },
];

export function TrustMetrics() {
  return (
    <section className="relative border-y border-[#F7F5F2]/8 bg-[#0B0D10]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m, i) => (
            <Reveal
              key={m.label}
              delay={i * 0.1}
              className={`relative px-5 py-10 sm:px-8 lg:py-14 ${
                i !== 0 ? "lg:border-l border-[#F7F5F2]/8" : ""
              } ${i % 2 !== 0 ? "border-l border-[#F7F5F2]/8 lg:border-l" : ""} ${
                i >= 2 ? "border-t border-[#F7F5F2]/8 lg:border-t-0" : ""
              }`}
            >
              <div className="flex flex-col gap-3">
                <span className="font-serif text-4xl leading-none text-[#F7F5F2] sm:text-5xl lg:text-[3.4rem] tabular">
                  <AnimatedCounter
                    value={m.value}
                    prefix={m.prefix}
                    suffix={m.suffix}
                  />
                </span>
                <div className="flex items-center gap-2">
                  <span className="h-px w-5 bg-[#C8A86B]/70" />
                  <span className="text-[0.72rem] uppercase tracking-[0.2em] text-[#C8A86B]">
                    {m.label}
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-[#9A968E]">{m.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
