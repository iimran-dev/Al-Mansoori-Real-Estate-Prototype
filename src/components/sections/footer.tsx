"use client";

import Image from "next/image";
import { Instagram, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import logoFull from "../../../public/brand/logo-full.svg";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Investment Opportunities", href: "#opportunities" },
  { label: "Off-Plan Projects", href: "#offplan" },
  { label: "Services", href: "#services" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  "Real Estate Investments",
  "Off-Plan Projects",
  "Labour Accommodation",
  "Property Management",
];

const INSIGHTS = [
  "Market Insights",
  "Investment Guides",
  "Dubai Property Trends",
];

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-[#F7F5F2]/8 bg-[#0B0D10]">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        {/* top */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* brand */}
          <div className="lg:col-span-4">
            <a href="#home" className="inline-block" aria-label="Hamdan Al Mansoori Real Estate LLC — Home">
              <div className="relative h-28 w-60">
                <Image
                  src={logoFull}
                  alt="Hamdan Al Mansoori Real Estate LLC Full Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </a>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-[#9A968E]">
              Dubai real estate investment advisory — building wealth and
              creating legacies through disciplined, locally-rooted counsel.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social profile"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F7F5F2]/12 text-[#F7F5F2]/60 transition-all hover:border-[#C8A86B] hover:text-[#C8A86B]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* link columns */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-8 lg:grid-cols-4">
            <div>
              <h4 className="text-[0.6rem] uppercase tracking-[0.26em] text-[#C8A86B]">
                Quick Links
              </h4>
              <ul className="mt-4 space-y-3">
                {QUICK_LINKS.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-[#F7F5F2]/60 transition-colors hover:text-[#F7F5F2]"
                    >
                      <span className="h-px w-0 bg-[#C8A86B] transition-all duration-300 group-hover:w-3" />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[0.6rem] uppercase tracking-[0.26em] text-[#C8A86B]">
                Services
              </h4>
              <ul className="mt-4 space-y-3">
                {SERVICES.map((s) => (
                  <li key={s}>
                    <a
                      href="#services"
                      className="group inline-flex items-center gap-1.5 text-sm text-[#F7F5F2]/60 transition-colors hover:text-[#F7F5F2]"
                    >
                      <span className="h-px w-0 bg-[#C8A86B] transition-all duration-300 group-hover:w-3" />
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[0.6rem] uppercase tracking-[0.26em] text-[#C8A86B]">
                Insights
              </h4>
              <ul className="mt-4 space-y-3">
                {INSIGHTS.map((s) => (
                  <li key={s}>
                    <a
                      href="#insights"
                      className="group inline-flex items-center gap-1.5 text-sm text-[#F7F5F2]/60 transition-colors hover:text-[#F7F5F2]"
                    >
                      <span className="h-px w-0 bg-[#C8A86B] transition-all duration-300 group-hover:w-3" />
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[0.6rem] uppercase tracking-[0.26em] text-[#C8A86B]">
                Contact
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-[#F7F5F2]/60">
                <li>
                  <a href="tel:+97140000000" className="transition-colors hover:text-[#C8A86B]">
                    +971 4 000 0000
                  </a>
                </li>
                <li>
                  <a href="mailto:advisory@hamdanalmansoori.ae" className="transition-colors hover:text-[#C8A86B]">
                    advisory@hamdanalmansoori.ae
                  </a>
                </li>
                <li className="leading-relaxed">
                  Boulevard Plaza, Downtown Dubai
                  <br />
                  United Arab Emirates
                </li>
                <li>
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-1.5 text-[#C8A86B] transition-colors hover:text-[#D9BE8A]"
                  >
                    Book consultation
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* compliance + legal */}
        <div className="mt-14 flex flex-col gap-6 border-t border-[#F7F5F2]/8 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-2 text-[0.62rem] uppercase tracking-[0.18em] text-[#9A968E]">
            <span>Compliance · RERA accreditation details to be confirmed prior to launch</span>
            <span className="text-[#9A968E]/70">
              © {new Date().getFullYear()} Hamdan Al Mansoori Real Estate LLC. All rights reserved.
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-5 text-[0.62rem] uppercase tracking-[0.18em] text-[#9A968E]">
            <a href="#" className="transition-colors hover:text-[#C8A86B]">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-[#C8A86B]">Terms &amp; Conditions</a>
            <a href="#" className="transition-colors hover:text-[#C8A86B]">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
