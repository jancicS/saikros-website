"use client";

/**
 * Sticky card stack pattern inspired by Skiper UI “StickyCard_001” (Skiper 16).
 * Free to use with attribution to Skiper UI for the free tier.
 * Original concept: @gurvinder-singh02 - https://gxuri.in
 */

import type { MotionValue } from "framer-motion";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Camera,
  Code2,
  Layers,
  LayoutDashboard,
  Video,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import { useRef, type RefObject } from "react";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/components/landing/motion-variants";

const services = [
  {
    title: "Web development",
    body: "Ship fast, resilient surfaces that your models and automations can plug into.",
    icon: Code2,
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "UI / UX design",
    body: "Product-grade flows for technical products - clarity over decoration.",
    icon: Layers,
    src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Automations",
    body: "No-code and low-code pipelines that connect the tools you already run.",
    icon: Workflow,
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Project management",
    body: "Operator-friendly cadence: milestones you can audit, not mystery weeks.",
    icon: LayoutDashboard,
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Computer vision",
    body: "Custom perception stacks and integration paths for physical operations.",
    icon: Camera,
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "AI integration",
    body: "Models inside your CRM, support, ops, and data - owned by your team.",
    icon: Video,
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  },
];

const HEADER_STICKY_TOP = "5.5rem";

function ServicesNeonBackdrop({
  progress,
}: {
  progress: MotionValue<number>;
}) {
  const o1 = useTransform(progress, [0, 0.45, 1], [0.15, 0.95, 0.4], {
    clamp: true,
  });
  const o2 = useTransform(progress, [0, 0.55, 1], [0.12, 0.75, 0.55], {
    clamp: true,
  });
  const s1 = useTransform(progress, [0, 1], [0.88, 1.22], { clamp: true });
  const s2 = useTransform(progress, [0, 1], [1.05, 0.92], { clamp: true });
  const r1 = useTransform(progress, [0, 1], [0, 95], { clamp: true });
  const r2 = useTransform(progress, [0, 1], [12, -72], { clamp: true });

  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-[8%] bottom-[5%] z-0 overflow-visible"
      aria-hidden
    >
      <motion.div
        style={{ opacity: o1, scale: s1, rotate: r1 }}
        className="absolute left-1/2 top-[38%] h-[min(100%,680px)] w-[min(100%,680px)] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-400/70 via-violet-500/55 to-teal-400/60 blur-[100px]"
      />
      <motion.div
        style={{ opacity: o2, scale: s2, rotate: r2 }}
        className="absolute left-[18%] top-[52%] h-[min(85%,520px)] w-[min(85%,520px)] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-[40%] bg-gradient-to-tr from-emerald-400/50 via-sky-400/45 to-fuchsia-500/50 blur-[88px]"
      />
    </div>
  );
}

function ServiceCardFace({
  title,
  body,
  src,
  icon: Icon,
}: {
  title: string;
  body: string;
  src: string;
  icon: LucideIcon;
}) {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        aria-hidden
      >
        <svg
          className="h-full w-full text-signal"
          viewBox="0 0 400 240"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 180 Q100 120 200 150 T400 100"
            stroke="currentColor"
            strokeWidth="0.5"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M0 200 Q120 160 240 175 T400 130"
            stroke="currentColor"
            strokeWidth="0.35"
            opacity="0.6"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
      <div className="relative h-full w-full min-h-0 flex-shrink-0">
        <Image
          src={src}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 960px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/15" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8 lg:p-10">
          <span className="mb-4 inline-flex size-12 items-center justify-center rounded-xl border border-white/25 bg-black/45 text-white sm:size-14 md:bg-black/35 md:backdrop-blur-md">
            <Icon className="size-6 sm:size-7" aria-hidden />
          </span>
          <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h3>
          <p className="mt-3 max-w-prose text-base leading-relaxed text-white/85 sm:text-[17px]">
            {body}
          </p>
        </div>
      </div>
    </>
  );
}

const cardShellClass =
  "relative flex h-[min(72vh,520px)] w-full max-w-[min(100%,960px)] origin-top flex-col overflow-hidden rounded-[2rem] border border-slate-200/90 bg-void-elevated shadow-[0_28px_80px_-20px_rgba(15,23,42,0.18)] transition-shadow duration-300 ease-out hover:shadow-[0_36px_100px_-24px_rgba(15,23,42,0.24)] sm:h-[min(64vh,560px)] sm:max-w-[820px] lg:h-[580px] lg:max-w-[960px]";

function LightServiceCard({
  title,
  body,
  src,
  icon: Icon,
}: {
  title: string;
  body: string;
  src: string;
  icon: LucideIcon;
}) {
  return (
    <div className="relative flex w-full justify-center px-4 py-8 sm:py-10">
      <div className={cardShellClass}>
        <ServiceCardFace title={title} body={body} src={src} icon={Icon} />
      </div>
    </div>
  );
}

function StickyServiceCard({
  i,
  title,
  body,
  src,
  icon: Icon,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  body: string;
  src: string;
  icon: LucideIcon;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) {
  const scale = useTransform(progress, range, [1, targetScale], {
    clamp: true,
  });

  return (
    <div
      className="sticky flex w-full items-center justify-center px-4 py-7 min-h-[calc(min(76vh,560px)+8rem)] md:min-h-[100svh] md:py-10"
      style={{
        top: HEADER_STICKY_TOP,
        zIndex: 10 + i,
      }}
    >
      <motion.div
        style={{
          scale,
          y: i * 8,
        }}
        className={cardShellClass}
      >
        <ServiceCardFace
          title={title}
          body={body}
          src={src}
          icon={Icon}
        />
      </motion.div>
    </div>
  );
}

function ServicesScrollStack({
  containerRef,
}: {
  containerRef: RefObject<HTMLElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const n = services.length;

  return (
    <>
      <ServicesNeonBackdrop progress={scrollYProgress} />
      {services.map((s, i) => {
        const targetScale = Math.max(
          0.5,
          1 - (services.length - i - 1) * 0.1,
        );
        const range: [number, number] = [i / n, 1];

        return (
          <StickyServiceCard
            key={s.title}
            i={i}
            title={s.title}
            body={s.body}
            src={s.src}
            icon={s.icon}
            progress={scrollYProgress}
            range={range}
            targetScale={targetScale}
          />
        );
      })}
    </>
  );
}

export function Services() {
  const containerRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const scrollDriven = !reduceMotion;

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative bg-void-subtle/80"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[1280px] px-4 pb-16 pt-44 sm:px-6 sm:pb-20 sm:pt-48 lg:pb-24 lg:pt-52">
        <motion.div
          className="max-w-2xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-[0.25em] text-signal"
          >
            Capabilities
          </motion.p>
          <motion.h2
            variants={fadeUp}
            id="services-heading"
            className="mt-5 font-display text-[clamp(1.75rem,3vw,3rem)] font-semibold text-ink"
          >
            The services we provide
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-lg text-ink-muted">
            End-to-end support from interface to inference - structured so you
            can phase investment as proof appears.
          </motion.p>
        </motion.div>
      </div>

      <div className="relative w-full pb-[min(32vh,18rem)] pt-[min(12vh,7rem)]">
        {scrollDriven ? (
          <ServicesScrollStack containerRef={containerRef} />
        ) : (
          services.map((s) => (
            <LightServiceCard
              key={s.title}
              title={s.title}
              body={s.body}
              src={s.src}
              icon={s.icon}
            />
          ))
        )}
      </div>
    </section>
  );
}
