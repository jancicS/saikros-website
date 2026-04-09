"use client";

import { SaikrosLogo } from "@/components/brand/SaikrosLogo";
import { MotionLink } from "@/components/ui/MotionLink";

const legalLinks = [
  { href: "#", label: "Support" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms and Conditions" },
];

const exploreLinks = [
  { href: "#landing-top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our work" },
  { href: "#about", label: "About" },
];

const companyLinks = [{ href: "#contact", label: "Contact" }];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0b] text-white">
      <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <MotionLink
              href="#landing-top"
              className="focus-ring group inline-flex items-center gap-4 rounded-md text-white"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/40 sm:h-[5.5rem] sm:w-[5.5rem]">
                <SaikrosLogo
                  size={256}
                  className="h-[85%] w-[85%] object-contain"
                />
              </span>
              <span className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Saikros
              </span>
            </MotionLink>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/55">
              US-based AI studio integrating models, computer vision, and
              automation into product-grade experiences.
            </p>
            <p className="mt-8 text-sm text-white/45">
              <span className="font-medium text-white/70">Saikros</span>
              <br />
              <MotionLink
                href="mailto:hello@saikros.com"
                className="mt-1 inline-block focus-ring text-white/55 underline-offset-4 hover:text-white"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.99 }}
              >
                hello@saikros.com
              </MotionLink>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:max-w-md sm:grid-cols-2 lg:col-span-7 lg:ml-auto lg:mr-0 lg:max-w-lg">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
                Explore
              </p>
              <ul className="mt-4 space-y-3 text-sm font-medium text-white/70">
                {exploreLinks.map((l) => (
                  <li key={l.href}>
                    <MotionLink
                      href={l.href}
                      className="focus-ring hover:text-white"
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      {l.label}
                    </MotionLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
                Company
              </p>
              <ul className="mt-4 space-y-3 text-sm font-medium text-white/70">
                {companyLinks.map((l) => (
                  <li key={l.href}>
                    <MotionLink
                      href={l.href}
                      className="focus-ring hover:text-white"
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      {l.label}
                    </MotionLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-10 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between sm:mt-20 sm:pt-12">
          <p>
            © {new Date().getFullYear()} Saikros. All rights reserved.
          </p>
          <nav
            aria-label="Footer legal shortcuts"
            className="flex flex-wrap justify-start gap-x-6 gap-y-2 sm:justify-end"
          >
            {legalLinks.map((l) => (
              <MotionLink
                key={`bar-${l.label}`}
                href={l.href}
                className="focus-ring hover:text-white/80"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                {l.label}
              </MotionLink>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
