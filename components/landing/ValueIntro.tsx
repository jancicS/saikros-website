"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/components/landing/motion-variants";

const principles = [
  "Operator-first workflows",
  "Clear scope and shipping cadence",
  "Models wrapped in usable product surfaces",
];

export function ValueIntro() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="border-b border-black/10 bg-white"
      aria-labelledby="value-intro-heading"
    >
      <div className="mx-auto max-w-[1280px] px-4 pb-28 pt-44 sm:px-6 sm:pb-32 sm:pt-48 lg:pb-36 lg:pt-52">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-12 lg:grid-cols-12 lg:gap-16"
        >
          <div className="lg:col-span-5">
            <motion.p
              variants={fadeUp}
              className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-muted"
            >
              How we work
            </motion.p>
            <motion.h2
              variants={fadeUp}
              id="value-intro-heading"
              className="mt-10 max-w-[12ch] font-display text-[clamp(2.35rem,5vw,4.75rem)] font-medium leading-[0.98] tracking-[-0.055em] text-ink lg:mt-8"
            >
              One team. One brief. Real operational leverage.
            </motion.h2>
          </div>

          <div className="lg:col-span-7 lg:border-l lg:border-black/10 lg:pl-10">
            <motion.p
              variants={fadeUp}
              className="max-w-xl text-lg leading-8 text-ink-muted"
            >
              Saikros helps US teams turn AI ambition into systems people can
              actually use - integration, computer vision, automation, and the
              interface layer that makes adoption stick.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-12 grid gap-4 lg:mt-8">
              {principles.map((item, index) => (
                <motion.div
                  key={item}
                  className="flex min-h-[3.75rem] cursor-default items-center justify-between rounded-2xl border border-black/10 bg-white px-5 py-5 text-base text-ink shadow-[0_0_0_0_rgba(15,23,42,0)]"
                  initial={false}
                  {...(!reduceMotion
                    ? {
                        whileHover: {
                          y: -3,
                          borderColor: "rgba(15, 23, 42, 0.14)",
                          boxShadow:
                            "0 18px 44px -20px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(39, 93, 255, 0.08)",
                          backgroundColor: "rgb(255, 255, 255)",
                        },
                      }
                    : {})}
                  transition={{
                    type: "spring",
                    stiffness: 420,
                    damping: 28,
                  }}
                >
                  <span>{item}</span>
                  <span className="text-ink-muted">0{index + 1}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
