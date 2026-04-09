"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/components/landing/motion-variants";

const projects = [
  {
    title: "Operator console",
    tag: "AI integration",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
    alt: "Developer working on code on a laptop",
    body: "Unified decision surface for ops teams coordinating automations and human review.",
  },
  {
    title: "Vision QA line",
    tag: "Computer vision",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    alt: "Circuit board macro photography",
    body: "Detection, alerts, and review loops designed for physical operations environments.",
  },
  {
    title: "Automation fabric",
    tag: "Workflows",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    alt: "Server room with data center equipment",
    body: "Cross-tool pipelines that reduce swivel-chair work and preserve clear accountability.",
  },
];

export function Portfolio() {
  const [first, second, third] = projects;

  return (
    <section
      id="work"
      className="relative border-t border-black/10 bg-[#f6f7f9] pb-28 pt-44 sm:pb-36 sm:pt-48 lg:pb-40 lg:pt-52"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="border-b border-black/10 pb-20 sm:pb-24"
        >
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-medium text-ink-muted">
              Case studies
            </span>
            <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-medium text-ink-muted">
              Product surfaces
            </span>
            <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-medium text-ink-muted">
              Systems + UX
            </span>
          </motion.div>
          <div className="mt-14 grid gap-14 sm:mt-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.55fr)] lg:items-end lg:gap-20">
            <motion.h2
              variants={fadeUp}
              id="work-heading"
              className="max-w-[12ch] font-display text-[clamp(2.25rem,5vw,4.85rem)] font-medium leading-[0.96] tracking-[-0.055em] text-ink"
            >
              Selected systems shaped for adoption, not just demos.
            </motion.h2>
            <motion.p variants={fadeUp} id="about" className="max-w-md text-base leading-7 text-ink-muted sm:text-lg">
              Representative engagements across integration, vision, and operational automation. We design the workflow around the system - and the system around the people who have to use it.
            </motion.p>
          </div>
        </motion.div>

        <div className="mt-20 grid gap-8 sm:mt-24 lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:gap-8">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, transition: { type: "spring", stiffness: 380, damping: 28 } }}
            className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white lg:col-span-7"
          >
            <div className="grid h-full gap-0 lg:grid-cols-[minmax(0,0.82fr)_minmax(16rem,0.9fr)]">
              <div className="flex flex-col justify-between p-8 sm:p-10">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                    {first.tag}
                  </p>
                  <h3 className="mt-6 max-w-[11ch] font-display text-[clamp(1.85rem,3vw,3.5rem)] font-medium leading-[0.98] tracking-[-0.05em] text-ink">
                    {first.title}
                  </h3>
                </div>
                <p className="mt-10 max-w-md text-base leading-7 text-ink-muted">
                  {first.body}
                </p>
              </div>
              <div className="relative aspect-[5/4] min-h-[22rem] overflow-hidden sm:min-h-[24rem]">
                <Image
                  src={first.image}
                  alt={first.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent" />
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, transition: { type: "spring", stiffness: 380, damping: 28 } }}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#090b10] text-white lg:col-span-5"
          >
            <div className="relative aspect-[5/4] min-h-[24rem] overflow-hidden sm:min-h-[26rem]">
              <Image
                src={second.image}
                alt={second.alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 32vw, 100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,9,12,0.1),rgba(8,9,12,0.78))]" />
              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
                  {second.tag}
                </p>
                <h3 className="mt-5 max-w-[10ch] font-display text-[clamp(1.7rem,2.6vw,3rem)] font-medium leading-[0.98] tracking-[-0.05em] text-white">
                  {second.title}
                </h3>
                <p className="mt-5 max-w-md text-sm leading-7 text-white/68 sm:text-base">
                  {second.body}
                </p>
              </div>
            </div>
          </motion.article>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[2rem] border border-black/10 bg-white p-8 sm:p-10 lg:col-span-4"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
              Why it works
            </p>
            <h3 className="mt-6 max-w-[12ch] font-display text-[clamp(1.5rem,2.2vw,2.4rem)] font-medium leading-[1.02] tracking-[-0.04em] text-ink">
              Systems land faster when UX and ops logic are designed together.
            </h3>
            <p className="mt-6 max-w-md text-base leading-7 text-ink-muted">
              The best AI product work is not just a model choice. It is the review flow, the exception state, the data handoff, and the trust surface around it.
            </p>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { type: "spring", stiffness: 380, damping: 28 } }}
            className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white lg:col-span-8"
          >
            <div className="grid grid-cols-1 gap-0 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)]">
              <div className="relative aspect-[4/3] min-h-[14rem] w-full min-w-0 shrink-0 overflow-hidden sm:min-h-[18rem] lg:min-h-[22rem]">
                <Image
                  src={third.image}
                  alt={third.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 38vw, 100vw"
                />
              </div>
              <div className="flex min-w-0 flex-col justify-between p-8 sm:p-10">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                    {third.tag}
                  </p>
                  <h3 className="mt-5 font-display text-[clamp(1.6rem,2.3vw,2.7rem)] font-medium leading-[1.02] tracking-[-0.045em] text-ink">
                    {third.title}
                  </h3>
                </div>
                <p className="mt-6 max-w-xl text-base leading-7 text-ink-muted">
                  {third.body}
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
