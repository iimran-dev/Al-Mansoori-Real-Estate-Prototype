"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/luxury/section-heading";
import { Reveal } from "@/components/luxury/reveal";

type Service = {
  title: string;
  desc: string;
  image: string;
  span: string;
  number: string;
};

const SERVICES: Service[] = [
  {
    title: "Real Estate Investments",
    desc: "Curated acquisition of income-generating assets across Dubai's prime communities, structured for resilient, long-term wealth.",
    image: "/images/property-penthouse.png",
    span: "lg:col-span-7 lg:row-span-2",
    number: "01",
  },
  {
    title: "Off-Plan Projects",
    desc: "Early access to Dubai's most anticipated developments, secured at launch pricing with transparent payment plans.",
    image: "/images/property-offplan.png",
    span: "lg:col-span-5",
    number: "02",
  },
  {
    title: "Labour Accommodation",
    desc: "Workforce housing assets engineered for steady yield and institutional-grade portfolio diversification.",
    image: "/images/property-commercial.png",
    span: "lg:col-span-5",
    number: "03",
  },
  {
    title: "Property Management",
    desc: "End-to-end stewardship of your portfolio — tenancy, maintenance, compliance, and performance optimisation.",
    image: "/images/property-villa.png",
    span: "lg:col-span-7",
    number: "04",
  },
];

function ServiceCard({ s, index }: { s: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-4, 4]), { stiffness: 120, damping: 18 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <Reveal
      direction="up"
      delay={index * 0.08}
      className={s.span}
    >
      <motion.article
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
        className="group relative h-full min-h-[320px] overflow-hidden border border-[#F7F5F2]/8 bg-[#141519] transition-colors duration-500 hover:border-[#C8A86B]/40"
      >
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={s.image}
            alt={s.title}
            fill
            sizes="(min-width:1024px) 50vw, 100vw"
            className="object-cover opacity-45 transition-all duration-[1.2s] ease-out group-hover:scale-110 group-hover:opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-[#0B0D10]/70 to-[#0B0D10]/20" />
        </div>

        <div className="relative flex h-full flex-col justify-between p-7 lg:p-9">
          <div className="flex items-start justify-between">
            <span className="font-serif text-sm text-[#C8A86B]/80">{s.number}</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F7F5F2]/15 text-[#F7F5F2]/60 transition-all duration-500 group-hover:border-[#C8A86B] group-hover:bg-[#C8A86B] group-hover:text-[#0B0D10]">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>

          <div className="max-w-md">
            <h3 className="font-serif text-2xl text-[#F7F5F2] sm:text-[1.75rem]">
              {s.title}
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#F7F5F2]/55">
              {s.desc}
            </p>
            <span className="mt-5 block h-px w-0 bg-[#C8A86B] transition-all duration-500 group-hover:w-16" />
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="services" className="relative bg-[#0B0D10] py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="What We Do"
            title="A complete investment"
            highlight="discipline."
            description="Four integrated capabilities, one disciplined advisory — engineered to build, protect, and grow your Dubai real estate portfolio."
          />
          <Reveal direction="left" delay={0.15}>
            <div className="flex items-center gap-4">
              <span className="font-serif text-5xl text-[#C8A86B]/30 tabular">04</span>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.2em] text-[#F7F5F2]/50">Core Capabilities</span>
                <span className="text-xs text-[#9A968E]">Each working in concert</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:grid-rows-2 lg:gap-5">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
