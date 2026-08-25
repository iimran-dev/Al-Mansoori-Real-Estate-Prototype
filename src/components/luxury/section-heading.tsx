"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal direction="up">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#C8A86B]/60" />
            <span className="eyebrow">{eyebrow}</span>
            {align === "center" && <span className="h-px w-8 bg-[#C8A86B]/60" />}
          </div>
        </Reveal>
      )}
      <Reveal direction="up" delay={0.06}>
        <h2 className="font-serif text-[2.6rem] leading-[1.05] sm:text-5xl lg:text-[3.4rem] text-[#F7F5F2] text-balance">
          {title}{" "}
          {highlight && (
            <span className="italic text-gradient-gold font-light">
              {highlight}
            </span>
          )}
        </h2>
      </Reveal>
      {description && (
        <Reveal direction="up" delay={0.12}>
          <p
            className={cn(
              "max-w-xl text-[#9A968E] text-base leading-relaxed font-sans",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
