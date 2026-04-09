"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/components/landing/motion-variants";

const thumb =
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80";

export function VideoIntro() {
  return (
    <section
      id="film"
      className="relative border-y border-black/10 bg-white pb-28 pt-44 sm:pb-32 sm:pt-48 lg:pb-36 lg:pt-52"
      aria-labelledby="film-heading"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.p
              variants={fadeUp}
              className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-muted"
            >
              Why Saikros
            </motion.p>
            <motion.h2
              variants={fadeUp}
              id="film-heading"
              className="mt-8 max-w-[11ch] font-display text-[clamp(2rem,4vw,4rem)] font-medium leading-[0.98] tracking-[-0.05em] text-ink"
            >
              Designed for deployment, not just AI theater.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-md text-base leading-7 text-ink-muted sm:text-lg"
            >
              Watch the short reel to see how we turn rough workflows into
              productized AI systems with clear review paths, useful interfaces,
              and a delivery model teams can trust.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="group relative aspect-[5/3] overflow-hidden rounded-[2rem] border border-black/10 bg-slate-100 shadow-[0_28px_90px_-34px_rgba(15,23,42,0.2)]">
              <Image
                src={thumb}
                alt=""
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 720px, 100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,11,16,0.04),rgba(9,11,16,0.58))]" />
              <motion.button
                type="button"
                className="focus-ring absolute left-8 top-8 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-2 text-sm font-medium text-white backdrop-blur-md"
                aria-label="Play introduction video (placeholder)"
                whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.18)" }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
              >
                <Play className="size-4 fill-current" aria-hidden />
                Play reel
              </motion.button>
            </div>
            <p className="mt-3 text-sm text-ink-muted">
              Video embed can replace this frame when your final asset is ready.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
