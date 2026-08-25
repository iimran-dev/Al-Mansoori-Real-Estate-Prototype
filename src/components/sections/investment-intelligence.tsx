"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  AreaChart,
  Area,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from "recharts";
import { TrendingUp, TrendingDown, Activity, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/luxury/section-heading";
import { Reveal } from "@/components/luxury/reveal";

const yieldData = [
  { m: "Q1", y: 6.8 },
  { m: "Q2", y: 7.1 },
  { m: "Q3", y: 7.4 },
  { m: "Q4", y: 7.6 },
  { m: "Q5", y: 7.9 },
  { m: "Q6", y: 8.2 },
  { m: "Q7", y: 8.4 },
  { m: "Q8", y: 8.6 },
];

const apprecData = [
  { m: "2019", v: 100 },
  { m: "2020", v: 104 },
  { m: "2021", v: 119 },
  { m: "2022", v: 138 },
  { m: "2023", v: 151 },
  { m: "2024", v: 168 },
  { m: "2025", v: 184 },
];

const confidence = 87;

const locations = [
  { name: "Dubai Marina", score: 92, yield: 7.4, trend: "up" },
  { name: "Business Bay", score: 88, yield: 7.8, trend: "up" },
  { name: "Palm Jumeirah", score: 95, yield: 6.9, trend: "up" },
  { name: "Downtown", score: 90, yield: 7.1, trend: "up" },
  { name: "JVC", score: 79, yield: 8.6, trend: "down" },
];

function MiniTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass border border-[#C8A86B]/30 px-3 py-2 text-xs">
      <div className="mb-1 text-[0.6rem] uppercase tracking-[0.2em] text-[#C8A86B]">
        {label}
      </div>
      <div className="font-serif text-lg text-[#F7F5F2] tabular">
        {payload[0].value}
        {payload[0].dataKey === "y" ? "%" : ""}
      </div>
    </div>
  );
}

function MetricCard({
  label,
  value,
  unit,
  delta,
  up,
  children,
}: {
  label: string;
  value: string;
  unit?: string;
  delta: string;
  up: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className="glass relative overflow-hidden p-5 lg:p-6">
      <span className="pointer-events-none absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-[#C8A86B] animate-pulse-node" />
      <div className="flex items-center justify-between">
        <span className="text-[0.62rem] uppercase tracking-[0.24em] text-[#F7F5F2]/50">
          {label}
        </span>
        <span
          className={`flex items-center gap-1 text-[0.7rem] ${up ? "text-[#C8A86B]" : "text-[#9A968E]"}`}
        >
          {up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
          {delta}
        </span>
      </div>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="font-serif text-3xl text-[#F7F5F2] tabular lg:text-4xl">{value}</span>
        {unit && <span className="text-sm text-[#9A968E]">{unit}</span>}
      </div>
      <div className="mt-3 h-14">{children}</div>
    </div>
  );
}

export function InvestmentIntelligence() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setTick((t) => t + 1), 3000);
    return () => clearInterval(id);
  }, [inView]);

  const visaScore = 78;

  return (
    <section className="relative overflow-hidden bg-[#0B0D10] py-24 lg:py-32">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-[#C8A86B]/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-[#C8A86B]/4 blur-[140px]" />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Investment Intelligence"
            title="Dubai real estate,"
            highlight="decoded in real time."
            description="A private-wealth view of the market — yields, appreciation, confidence, and visa eligibility, synthesised into one investment-grade dashboard."
          />
          <Reveal direction="left" delay={0.12}>
            <div className="flex items-center gap-2 rounded-full border border-[#C8A86B]/25 px-4 py-2">
              <Activity className="h-3.5 w-3.5 text-[#C8A86B]" />
              <span className="text-[0.65rem] uppercase tracking-[0.22em] text-[#F7F5F2]/70">
                Live Market Signal
              </span>
              <span className="ml-1 h-1.5 w-1.5 rounded-full bg-[#C8A86B] animate-pulse-node" />
            </div>
          </Reveal>
        </div>

        <div ref={ref} className="grid grid-cols-12 gap-4 lg:gap-5">
          {/* Rental yield */}
          <Reveal className="col-span-12 lg:col-span-4" direction="up">
            <MetricCard label="Rental Yield" value="8.6" unit="%" delta="+0.8 QoQ" up>
              {inView && (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={yieldData} margin={{ top: 4, right: 0, bottom: 0, left: 0 }}>
                    <defs>
                      <linearGradient id="gyield" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#C8A86B" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="#C8A86B" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="y"
                      stroke="#C8A86B"
                      strokeWidth={1.5}
                      fill="url(#gyield)"
                      isAnimationActive
                      animationDuration={1400}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              )}
            </MetricCard>
          </Reveal>

          {/* Capital appreciation */}
          <Reveal className="col-span-12 lg:col-span-5" direction="up" delay={0.08}>
            <div className="glass relative h-full p-5 lg:p-6">
              <span className="pointer-events-none absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-[#C8A86B] animate-pulse-node" />
              <div className="flex items-center justify-between">
                <span className="text-[0.62rem] uppercase tracking-[0.24em] text-[#F7F5F2]/50">
                  Capital Appreciation Index
                </span>
                <span className="flex items-center gap-1 text-[0.7rem] text-[#C8A86B]">
                  <TrendingUp className="h-3 w-3" /> +84% / 6y
                </span>
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-serif text-3xl text-[#F7F5F2] tabular lg:text-4xl">184</span>
                <span className="text-sm text-[#9A968E]">base 100 · 2019</span>
              </div>
              <div className="mt-3 h-16">
                {inView && (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={apprecData} margin={{ top: 4, right: 6, bottom: 0, left: 6 }}>
                      <CartesianGrid stroke="#F7F5F2" strokeOpacity={0.05} vertical={false} />
                      <XAxis dataKey="m" tick={{ fill: "#9A968E", fontSize: 10 }} axisLine={false} tickLine={false} />
                      <YAxis hide domain={[80, 200]} />
                      <Tooltip content={<MiniTooltip />} />
                      <Line type="monotone" dataKey="v" stroke="#C8A86B" strokeWidth={1.75} dot={false} isAnimationActive animationDuration={1600} />
                    </LineChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>
          </Reveal>

          {/* Investor confidence radial */}
          <Reveal className="col-span-6 lg:col-span-3" direction="up" delay={0.16}>
            <div className="glass relative h-full p-5 lg:p-6">
              <div className="flex items-center justify-between">
                <span className="text-[0.62rem] uppercase tracking-[0.24em] text-[#F7F5F2]/50">
                  Investor Confidence
                </span>
                <Activity className="h-3.5 w-3.5 text-[#C8A86B]" />
              </div>
              <div className="relative mx-auto mt-2 h-[120px]">
                {inView && (
                  <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                      innerRadius="72%"
                      outerRadius="100%"
                      data={[{ value: confidence }]}
                      startAngle={90}
                      endAngle={-270}
                    >
                      <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                      <RadialBar dataKey="value" cornerRadius={0} fill="#C8A86B" isAnimationActive animationDuration={1400} background={{ fill: "#F7F5F2", fillOpacity: 0.06 }} />
                    </RadialBarChart>
                  </ResponsiveContainer>
                )}
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-serif text-3xl text-[#F7F5F2] tabular">{confidence}</span>
                  <span className="text-[0.55rem] uppercase tracking-[0.2em] text-[#C8A86B]">Bullish</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Golden Visa Eligibility */}
          <Reveal className="col-span-6 lg:col-span-3" direction="up" delay={0.2}>
            <div className="glass relative h-full p-5 lg:p-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#C8A86B]" />
                <span className="text-[0.62rem] uppercase tracking-[0.24em] text-[#F7F5F2]/50">
                  Golden Visa Eligibility
                </span>
              </div>
              <div className="mt-4">
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-3xl text-[#F7F5F2] tabular lg:text-4xl">{visaScore}%</span>
                </div>
                <p className="mt-1 text-[0.7rem] text-[#9A968E]">
                  Qualifying investment threshold
                </p>
              </div>
              <div className="mt-4 space-y-2">
                {[
                  { t: "AED 2M+ Property", v: 100 },
                  { t: "Off-Plan ≥ AED 2M", v: 95 },
                  { t: "Portfolio Mix", v: 78 },
                ].map((r) => (
                  <div key={r.t}>
                    <div className="flex justify-between text-[0.6rem] text-[#F7F5F2]/55">
                      <span>{r.t}</span>
                      <span className="text-[#C8A86B]">{r.v}%</span>
                    </div>
                    <div className="mt-1 h-1 w-full bg-[#F7F5F2]/8">
                      <motion.div
                        className="h-full bg-[#C8A86B]"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${r.v}%` } : {}}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Location intelligence */}
          <Reveal className="col-span-12 lg:col-span-9" direction="up" delay={0.12}>
            <div className="glass h-full p-5 lg:p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <span className="text-[0.62rem] uppercase tracking-[0.24em] text-[#F7F5F2]/50">
                    Location Intelligence
                  </span>
                  <p className="mt-1 text-xs text-[#9A968E]">
                    Comparative investment score by community
                  </p>
                </div>
                <span className="hidden text-[0.6rem] uppercase tracking-[0.2em] text-[#C8A86B] sm:block">
                  Illustrative · For guidance
                </span>
              </div>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
                {locations.map((l, i) => (
                  <motion.div
                    key={l.name}
                    initial={{ opacity: 0, y: 14 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.15 + i * 0.08, duration: 0.6 }}
                    className="group relative border border-[#F7F5F2]/8 bg-[#0B0D10]/40 p-3.5 transition-colors hover:border-[#C8A86B]/40"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-[#F7F5F2]">{l.name}</span>
                      {l.trend === "up" ? (
                        <TrendingUp className="h-3 w-3 text-[#C8A86B]" />
                      ) : (
                        <TrendingDown className="h-3 w-3 text-[#9A968E]" />
                      )}
                    </div>
                    <div className="mt-2 flex items-baseline gap-1">
                      <span className="font-serif text-2xl text-[#F7F5F2] tabular">{l.score}</span>
                      <span className="text-[0.6rem] text-[#9A968E]">/100</span>
                    </div>
                    <div className="mt-1 text-[0.65rem] text-[#C8A86B]">{l.yield}% yield</div>
                    <div className="mt-2 h-0.5 w-full bg-[#F7F5F2]/8">
                      <motion.div
                        className="h-full bg-[#C8A86B]"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${l.score}%` } : {}}
                        transition={{ duration: 1.1, delay: 0.25 + i * 0.08 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Investment score */}
          <Reveal className="col-span-12 lg:col-span-3" direction="up" delay={0.2}>
            <div className="glass-gold flex h-full flex-col justify-between p-5 lg:p-6">
              <div>
                <span className="text-[0.62rem] uppercase tracking-[0.24em] text-[#C8A86B]">
                  Composite Investment Score
                </span>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-serif text-5xl text-[#F7F5F2] tabular lg:text-6xl">9.2</span>
                  <span className="text-sm text-[#9A968E]">/ 10</span>
                </div>
              </div>
              <div className="mt-4 space-y-1.5 text-[0.7rem]">
                <div className="flex justify-between text-[#F7F5F2]/60">
                  <span>Yield Strength</span><span className="text-[#C8A86B]">9.4</span>
                </div>
                <div className="flex justify-between text-[#F7F5F2]/60">
                  <span>Growth Outlook</span><span className="text-[#C8A86B]">9.5</span>
                </div>
                <div className="flex justify-between text-[#F7F5F2]/60">
                  <span>Risk Profile</span><span className="text-[#C8A86B]">8.7</span>
                </div>
                <div className="flex justify-between text-[#F7F5F2]/60">
                  <span>Liquidity</span><span className="text-[#C8A86B]">9.0</span>
                </div>
              </div>
              <p className="mt-4 text-[0.6rem] leading-relaxed text-[#9A968E]">
                Blended illustrative index. Not investment advice.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
