"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MotionLink } from "@/components/ui/MotionLink";
import {
  fadeUp,
  staggerContainer,
} from "@/components/landing/motion-variants";

const proofPoints = [
  "US-based delivery",
  "Integration + vision + automation",
  "Built for operators, not decks",
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="landing-top"
      className="relative overflow-hidden border-b border-white/10 bg-[#090b10] text-white"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_75%_at_50%_0%,rgba(255,255,255,0.04),transparent_55%),linear-gradient(180deg,#0a0b10_0%,#090b10_55%,#0d1120_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-[-10%] bottom-[-28%] h-[42rem] bg-[radial-gradient(circle_at_center,rgba(39,93,255,0.34),rgba(39,93,255,0.12)_28%,transparent_62%)] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.95), rgba(0,0,0,0.4) 65%, transparent)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1280px] px-4 pb-28 pt-44 sm:px-6 sm:pb-32 sm:pt-48 lg:pb-36 lg:pt-52">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid gap-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] lg:items-end lg:gap-20"
        >
          <div>
            <motion.div
              id="hero-first-line"
              variants={fadeUp}
              className="flex flex-wrap gap-2"
            >
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-tight text-white/78 backdrop-blur-sm">
                US AI studio
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-tight text-white/78 backdrop-blur-sm">
                Product + systems delivery
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              id="hero-heading"
              className="mt-8 max-w-[12ch] font-display text-[clamp(3rem,7.25vw,6rem)] font-medium leading-[0.95] tracking-[-0.06em] text-white"
            >
              AI systems that move from prototype to production.
            </motion.h1>
          </div>

          <motion.div variants={staggerContainer} className="lg:pb-3">
            <motion.p
              variants={fadeUp}
              className="max-w-md text-base leading-7 text-white/68 sm:text-lg"
            >
              Saikros ships integration, computer vision, and automation with
              product-grade UX - so teams get deployable systems, not another AI
              concept deck.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <MotionLink
                href="#contact"
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-signal px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_-12px_rgba(39,93,255,0.7)] transition-colors hover:bg-[#1f52ef]"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                Start a project
                <ArrowUpRight className="size-4" aria-hidden />
              </MotionLink>
              <MotionLink
                href="#services"
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/6 px-7 py-3.5 text-sm font-semibold text-white/88 backdrop-blur-sm transition-colors hover:bg-white/10"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore capabilities
              </MotionLink>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="mt-10 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3"
            >
              {proofPoints.map((item) => (
                <motion.div
                  key={item}
                  className="cursor-default min-h-[4.5rem] rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 text-[15px] leading-snug text-white/70 shadow-[0_0_0_0_rgba(39,93,255,0)] sm:min-h-0"
                  initial={false}
                  {...(!reduceMotion
                    ? {
                        whileHover: {
                          y: -3,
                          borderColor: "rgba(255, 255, 255, 0.22)",
                          backgroundColor: "rgba(255, 255, 255, 0.07)",
                          boxShadow:
                            "0 18px 50px -22px rgba(39, 93, 255, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.06)",
                        },
                      }
                    : {})}
                  transition={{
                    type: "spring",
                    stiffness: 420,
                    damping: 26,
                  }}
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
