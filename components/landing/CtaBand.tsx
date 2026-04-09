"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/components/landing/motion-variants";
import { MotionLink } from "@/components/ui/MotionLink";

export function CtaBand() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-[#090b10] text-white"
      aria-labelledby="cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-[-12%] bottom-[-34%] h-[26rem] bg-[radial-gradient(circle_at_center,rgba(39,93,255,0.35),rgba(39,93,255,0.12)_34%,transparent_65%)] blur-3xl"
        aria-hidden
      />
      <div className="mx-auto max-w-[1280px] px-4 pb-28 pt-44 sm:px-6 sm:pb-32 sm:pt-48 lg:pb-36 lg:pt-52">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-14 border-y border-white/10 py-20 sm:py-24 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end"
        >
          <motion.div variants={fadeUp} className="max-w-[48rem]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
              Start the conversation
            </p>
            <h2
              id="cta-heading"
              className="mt-8 font-display text-[clamp(2.2rem,5vw,4.75rem)] font-medium leading-[0.96] tracking-[-0.055em] text-white"
            >
              Bring us the messy brief. We will turn it into a shippable AI plan.
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-7 text-white/62 sm:text-lg">
              Tell us the workflow, constraint, or bottleneck you are trying to
              solve. We will respond with a practical next step and a delivery
              path your team can actually act on.
            </p>
          </motion.div>
          <MotionLink
            variants={fadeUp}
            href="mailto:hello@saikros.com"
            className="focus-ring inline-flex h-fit shrink-0 items-center justify-center rounded-full bg-signal px-8 py-3.5 text-center text-base font-semibold text-white shadow-[0_18px_42px_-16px_rgba(39,93,255,0.75)] transition-colors hover:bg-[#1f52ef]"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            hello@saikros.com
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
}
