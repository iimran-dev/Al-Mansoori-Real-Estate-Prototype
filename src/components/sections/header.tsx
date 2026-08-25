"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About Hamdan", href: "#about" },
  { label: "Investment Opportunities", href: "#opportunities" },
  { label: "Off-Plan Projects", href: "#offplan" },
  { label: "Services", href: "#services" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[100] transition-all duration-500",
        scrolled
          ? "bg-[#0B0D10]/80 backdrop-blur-xl border-b border-[#F7F5F2]/8"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-3" aria-label="Hamdan Al Mansoori — Home">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-[#C8A86B]/40"
          >
            <Image
              src="/brand/logo.jpeg"
              alt="Hamdan Al Mansoori emblem"
              fill
              sizes="44px"
              className="object-cover"
            />
            <span className="absolute inset-0 ring-1 ring-inset ring-[#C8A86B]/20" />
          </motion.span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-serif text-[1.05rem] tracking-wide text-[#F7F5F2]">
              Hamdan Al Mansoori
            </span>
            <span className="mt-1 text-[0.58rem] uppercase tracking-[0.34em] text-[#C8A86B]">
              Real Estate LLC
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative font-sans text-[0.78rem] uppercase tracking-[0.18em] text-[#F7F5F2]/75 transition-colors hover:text-[#F7F5F2]"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-[#C8A86B] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="btn-shimmer hidden sm:inline-flex items-center gap-2 bg-[#C8A86B] px-6 py-3 font-sans text-[0.7rem] uppercase tracking-[0.22em] font-medium text-[#0B0D10] transition-all duration-300 hover:bg-[#D9BE8A]"
          >
            Book Consultation
          </a>
          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center text-[#F7F5F2] lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[110] bg-[#0B0D10] lg:hidden"
          >
            <div className="flex h-[72px] items-center justify-between px-5 sm:px-8">
              <span className="font-serif text-lg text-[#F7F5F2]">Menu</span>
              <button
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center text-[#F7F5F2]"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <motion.nav
              className="flex flex-col px-5 sm:px-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
            >
              {NAV.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  className="group flex items-baseline justify-between border-b border-[#F7F5F2]/8 py-5"
                >
                  <span className="font-serif text-2xl text-[#F7F5F2] transition-colors group-hover:text-[#C8A86B]">
                    {item.label}
                  </span>
                  <span className="font-sans text-xs text-[#9A968E]">
                    0{i + 1}
                  </span>
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-8 inline-flex items-center justify-center bg-[#C8A86B] px-6 py-4 font-sans text-[0.72rem] uppercase tracking-[0.22em] font-medium text-[#0B0D10]"
              >
                Book Investment Consultation
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
