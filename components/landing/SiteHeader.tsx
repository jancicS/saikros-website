"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { SaikrosLogo } from "@/components/brand/SaikrosLogo";
import { MotionLink } from "@/components/ui/MotionLink";

const nav = [
  { href: "#landing-top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our work" },
  { href: "#about", label: "About" },
];

/** Pixels of hero that must overlap the top strip before we treat the bar as sitting on the dark hero. */
const HERO_OVERLAP_THRESHOLD_PX = 10;

/**
 * When the hero pill row is this close to the bottom of the nav bar (or has scrolled under it),
 * use a frosted dark shell so badges / headline do not read as one layer with the links.
 */
const HERO_FIRST_LINE_SCRIM_PX = 72;

/**
 * `solidNav`: light bar + ink text once the header is over non-hero (light) content.
 * `heroScrim`: still on dark hero, but frosted bar + light text when hero’s first row is tight to the bar.
 */
function useHeaderSurface(menuOpen: boolean) {
  const [solidNav, setSolidNav] = useState(false);
  const [heroScrim, setHeroScrim] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("landing-top");
    if (!hero) return;

    const update = () => {
      const header = document.querySelector("[data-site-header]");
      const bar = document.querySelector("[data-site-header-bar]");
      let barH = 72;
      if (bar instanceof HTMLElement) {
        barH = bar.offsetHeight;
      } else if (header instanceof HTMLElement) {
        barH = menuOpen ? header.offsetHeight : Math.min(header.offsetHeight, 96);
      }

      const r = hero.getBoundingClientRect();
      const overlap =
        Math.min(r.bottom, barH) - Math.max(r.top, 0);
      const overDarkHero = overlap > HERO_OVERLAP_THRESHOLD_PX;
      setSolidNav(!overDarkHero);

      const firstLine = document.getElementById("hero-first-line");
      let scrim = false;
      if (overDarkHero && firstLine) {
        const fl = firstLine.getBoundingClientRect();
        scrim = fl.top < barH + HERO_FIRST_LINE_SCRIM_PX;
      }
      setHeroScrim(scrim);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [menuOpen]);

  return { solidNav, heroScrim };
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { solidNav, heroScrim } = useHeaderSurface(open);

  /** Higher-opacity light shell so dark imagery behind the blur does not wash out links. */
  const shellClass = solidNav
    ? "border-b border-black/10 bg-white/[0.94] shadow-[0_10px_40px_-24px_rgba(15,23,42,0.18)] backdrop-blur-md backdrop-saturate-150"
    : heroScrim
      ? "border-b border-white/[0.09] bg-[#090b10]/88 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.65)] backdrop-blur-md backdrop-saturate-150"
      : "border-b border-transparent bg-transparent shadow-none backdrop-blur-none";

  const textShadowOnDark =
    "[text-shadow:0_1px_2px_rgba(0,0,0,0.9),0_0_20px_rgba(0,0,0,0.35)]";

  const textClass = solidNav
    ? "text-ink"
    : `!text-white ${textShadowOnDark}`;
  /** Full ink on light bar — ink-muted + translucent bar failed on mixed (light/dark) scroll regions. */
  const navLinkClass = solidNav
    ? "font-medium text-ink hover:text-signal"
    : `!font-medium !text-white hover:!text-white ${textShadowOnDark}`;
  const logoTileClass = solidNav
    ? "border-black/10 bg-ink"
    : heroScrim
      ? "border-white/12 bg-black/35 backdrop-blur-sm"
      : "border-white/14 bg-white/[0.05] backdrop-blur-sm";
  const desktopCtaClass = solidNav
    ? "border-signal bg-signal text-white hover:bg-[#1f52ef]"
    : "border-signal bg-signal text-white shadow-[0_10px_28px_-12px_rgba(39,93,255,0.55)] hover:bg-[#1f52ef]";
  const mobileTriggerClass = solidNav
    ? "border-black/10 bg-white text-ink"
    : `border-white/20 bg-white/10 !text-white backdrop-blur-sm ${textShadowOnDark}`;

  return (
    <header
      data-site-header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-out ${shellClass}`}
    >
      <div
        data-site-header-bar
        className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-4 sm:px-6"
      >
        <MotionLink
          href="#landing-top"
          className={`focus-ring group flex items-center gap-3 rounded-md ${textClass}`}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <span
            className={`flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border shadow-sm transition-colors group-hover:border-signal ${logoTileClass}`}
          >
            <SaikrosLogo
              size={80}
              className="size-7 object-contain"
              priority
            />
          </span>
          <span className="font-display text-lg font-medium tracking-[-0.03em] sm:text-xl">
            Saikros
          </span>
        </MotionLink>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <MotionLink
              key={item.href}
              href={item.href}
              className={`focus-ring text-sm font-medium transition-colors ${navLinkClass}`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {item.label}
            </MotionLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <MotionLink
            href="#contact"
            className={`focus-ring hidden rounded-full border px-4 py-2 text-sm font-semibold transition-colors md:inline-flex ${desktopCtaClass}`}
            whileHover={{ y: -3, boxShadow: "0 12px 28px -10px rgba(15,23,42,0.15)" }}
            whileTap={{ scale: 0.98 }}
          >
            Contact us
          </MotionLink>
          <motion.button
            type="button"
            className={`focus-ring inline-flex size-11 items-center justify-center rounded-xl border transition-colors md:hidden ${mobileTriggerClass}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 420, damping: 26 }}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            <span className="sr-only">Menu</span>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-black/10 bg-white md:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile primary">
              {nav.map((item) => (
                <MotionLink
                  key={item.href}
                  href={item.href}
                  className="focus-ring rounded-xl px-3 py-3 text-base font-medium text-ink-muted hover:bg-slate-50 hover:text-ink"
                  onClick={() => setOpen(false)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {item.label}
                </MotionLink>
              ))}
              <MotionLink
                href="#contact"
                className="focus-ring mt-2 rounded-full bg-signal px-3 py-3 text-center text-base font-semibold text-white shadow-md"
                onClick={() => setOpen(false)}
                whileHover={{ y: -2, boxShadow: "0 14px 32px -8px rgba(39,93,255,0.45)" }}
                whileTap={{ scale: 0.98 }}
              >
                Contact us
              </MotionLink>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
