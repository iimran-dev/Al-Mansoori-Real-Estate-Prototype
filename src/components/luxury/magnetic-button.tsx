"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

export function MagneticButton({
  children,
  href,
  variant = "gold",
  className,
  strength = 0.35,
  onClick,
}: {
  children: ReactNode;
  href?: string;
  variant?: "gold" | "outline" | "ghost";
  className?: string;
  strength?: number;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };
  const handleLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0, 0)";
  };

  const base =
    "magnetic btn-shimmer group relative inline-flex items-center justify-center gap-2.5 font-sans text-[0.72rem] uppercase tracking-[0.22em] font-medium px-7 py-4 transition-all duration-300 ease-out will-change-transform select-none";
  const variants = {
    gold:
      "bg-[#C8A86B] text-[#0B0D10] hover:bg-[#D9BE8A] shadow-[0_8px_30px_-12px_rgba(200,168,107,0.6)]",
    outline:
      "bg-transparent text-[#F7F5F2] border border-[#F7F5F2]/25 hover:border-[#C8A86B] hover:text-[#C8A86B]",
    ghost:
      "bg-transparent text-[#F7F5F2] hover:text-[#C8A86B] border border-transparent",
  };

  const content = (
    <span className="relative z-10 inline-flex items-center gap-2.5">
      {children}
    </span>
  );

  return (
    <a
      ref={ref}
      href={href || "#"}
      onClick={(e) => {
        if (!href || href === "#") e.preventDefault();
        onClick?.();
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(base, variants[variant], className)}
    >
      {content}
    </a>
  );
}
