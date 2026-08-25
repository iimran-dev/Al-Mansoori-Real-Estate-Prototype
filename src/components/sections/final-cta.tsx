"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { RevealWords } from "@/components/luxury/reveal";
import { MagneticButton } from "@/components/luxury/magnetic-button";

export function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      ref={ref}
      id="contact"
      className="relative flex min-h-[88svh] items-center justify-center overflow-hidden bg-[#0B0D10]"
    >
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image
          src="/images/dubai-skyline-night.png"
          alt="Dubai skyline at night"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D10]/80 via-[#0B0D10]/55 to-[#0B0D10]" />
      <div className="absolute inset-0 bg-[#0B0D10]/40" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-[#C8A86B]/60" />
          <span className="eyebrow">Your Legacy Begins Here</span>
          <span className="h-px w-8 bg-[#C8A86B]/60" />
        </motion.div>

        <h2 className="mt-7 font-serif text-[2.6rem] leading-[1.04] text-[#F7F5F2] sm:text-5xl lg:text-[3.6rem]">
          <span className="block overflow-hidden">
            <RevealWords text="Ready To Build Your" delay={0.1} />
          </span>
          <span className="block overflow-hidden">
            <span className="block">
              <RevealWords
                text="Real Estate Legacy?"
                delay={0.35}
                className="italic font-light text-gradient-gold"
              />
            </span>
          </span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#F7F5F2]/65"
        >
          A private consultation is the first step. Share your objectives, and
          we'll map a disciplined path toward resilient, long-term Dubai wealth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href="#contact" variant="gold">
            Book Consultation
            <ArrowUpRight className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton href="#opportunities" variant="outline">
            Explore Opportunities
          </MagneticButton>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-8 text-[0.62rem] uppercase tracking-[0.24em] text-[#F7F5F2]/40"
        >
          Discreet · By appointment · Dubai, UAE
        </motion.p>
      </div>
    </section>
  );
}
