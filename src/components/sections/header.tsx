"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoMobile from "../../../public/brand/logo-mobile.svg";

// Streamlined linear navigation items for desktop header bar
const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Opportunities", href: "#opportunities" },
  { label: "Why Dubai", href: "#why-dubai" },
  { label: "Process", href: "#journey" },
  { label: "Track Record", href: "#track-record" },
  { label: "Insights", href: "#insights" },
];

// Full navigation list for mobile drawer menu
const MOBILE_NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Opportunities", href: "#opportunities" },
  { label: "Why Dubai", href: "#why-dubai" },
  { label: "Process", href: "#journey" },
  { label: "Track Record", href: "#track-record" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Linear active section scroll tracking
      const sections = MOBILE_NAV.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[100] transition-all duration-500",
        scrolled
          ? "bg-[#0B0D10]/90 backdrop-blur-xl border-b border-[#F7F5F2]/8 shadow-xl"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-[80px] max-w-[1536px] items-center justify-between px-4 sm:px-8 lg:px-10 2xl:px-14">
        
        {/* Logo with right safety margin to prevent collision with nav links */}
        <a href="#home" className="group flex items-center gap-3 shrink-0 pr-3 lg:pr-6" aria-label="Hamdan Al Mansoori — Home">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex h-10 w-10 shrink-0 items-center justify-center p-0.5"
          >
            <Image
              src={logoMobile}
              alt="Hamdan Al Mansoori emblem"
              fill
              className="object-contain"
            />
          </motion.span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-serif text-[1.02rem] lg:text-[1.05rem] tracking-wide text-[#F7F5F2]">
              Hamdan Al Mansoori
            </span>
            <span className="mt-1 text-[0.55rem] lg:text-[0.58rem] uppercase tracking-[0.32em] text-[#C8A86B]">
              Real Estate LLC
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links — Perfectly spaced & sized to eliminate overlap */}
        <nav className="hidden items-center gap-3.5 xl:gap-5 2xl:gap-7 lg:flex">
          {NAV.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative font-sans text-[0.66rem] xl:text-[0.72rem] 2xl:text-[0.76rem] uppercase tracking-[0.14em] xl:tracking-[0.16em] transition-colors duration-300 py-1 whitespace-nowrap",
                  isActive
                    ? "text-[#C5A265] font-semibold"
                    : "text-[#F7F5F2]/75 hover:text-[#F7F5F2]"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-[1.5px] bg-[#C5A265] transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </a>
            );
          })}
        </nav>

        {/* CTA Button + Mobile Toggle with left safety margin */}
        <div className="flex items-center gap-3 shrink-0 pl-3 lg:pl-5">
          <a
            href="#contact"
            className="btn-shimmer hidden sm:inline-flex items-center justify-center bg-[#C8A86B] px-5 py-2.5 font-sans text-[0.68rem] xl:text-[0.7rem] uppercase tracking-[0.18em] xl:tracking-[0.2em] font-bold text-[#0B0D10] transition-all duration-300 hover:bg-[#D9BE8A] whitespace-nowrap"
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[110] bg-[#0B0D10] lg:hidden overflow-y-auto"
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
              className="flex flex-col px-5 pb-10 sm:px-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
              }}
            >
              {NAV.map((item, i) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
                    }}
                    className="group flex items-center justify-between border-b border-[#F7F5F2]/8 py-4"
                  >
                    <span
                      className={cn(
                        "font-serif text-xl sm:text-2xl transition-colors",
                        isActive ? "text-[#C5A265] font-medium" : "text-[#F7F5F2] group-hover:text-[#C8A86B]"
                      )}
                    >
                      {item.label}
                    </span>
                    <span className="font-sans text-xs text-[#9A968E]">
                      0{i + 1}
                    </span>
                  </motion.a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-8 inline-flex items-center justify-center bg-[#C8A86B] px-6 py-4 font-sans text-[0.72rem] uppercase tracking-[0.22em] font-bold text-[#0B0D10]"
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

