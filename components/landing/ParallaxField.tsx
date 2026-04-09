"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMotionSafe, useMobileSimplifiedMotion } from "./motion-utils";

function ParallaxFieldLite() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-5%,var(--aurora-2),transparent_44%),radial-gradient(ellipse_70%_40%_at_100%_32%,var(--aurora-1),transparent_42%),var(--void)]" />

      <div
        className="absolute -left-[14%] top-[5%] h-[38vmin] w-[38vmin] rounded-full bg-blue-300/18 blur-3xl"
        style={{ transform: "translateZ(0)" }}
      />
      <div
        className="absolute right-[-8%] top-[24%] h-[45vmin] w-[45vmin] rounded-[42%] bg-indigo-200/22 blur-3xl"
        style={{ transform: "translateZ(0)" }}
      />
      <div
        className="absolute bottom-[-10%] left-[25%] h-[32vmin] w-[32vmin] rounded-full bg-blue-200/18 blur-3xl"
        style={{ transform: "translateZ(0)" }}
      />

      <div
        className="absolute inset-0 opacity-[0.42]"
        style={{
          backgroundImage: `
            linear-gradient(var(--grid) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 15%, black, transparent 72%)",
        }}
      />
    </div>
  );
}

function ParallaxFieldParallax({ parallax }: { parallax: number }) {
  const { scrollYProgress } = useScroll();

  const ySlow = useTransform(scrollYProgress, [0, 1], [0, 90 * parallax]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, 140 * parallax]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5 * parallax]);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-5%,var(--aurora-2),transparent_44%),radial-gradient(ellipse_70%_40%_at_100%_32%,var(--aurora-1),transparent_42%),var(--void)]" />
      <div className="bg-noise-fine absolute inset-0 opacity-60 mix-blend-multiply" />

      <motion.div
        style={{ y: ySlow, rotate }}
        className="absolute -left-[14%] top-[5%] h-[38vmin] w-[38vmin] rounded-full bg-blue-300/18 blur-[100px]"
      />
      <motion.div
        style={{ y: yMid }}
        className="absolute right-[-8%] top-[24%] h-[45vmin] w-[45vmin] rounded-[42%] bg-indigo-200/22 blur-[115px]"
      />
      <motion.div
        style={{ y: ySlow }}
        className="absolute bottom-[-10%] left-[25%] h-[32vmin] w-[32vmin] rounded-full bg-blue-200/18 blur-[95px]"
      />

      <div
        className="absolute inset-0 opacity-[0.42]"
        style={{
          backgroundImage: `
            linear-gradient(var(--grid) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 15%, black, transparent 72%)",
        }}
      />
    </div>
  );
}

export function ParallaxField() {
  const simplified = useMobileSimplifiedMotion();
  const { reduced, parallax } = useMotionSafe();

  if (simplified || reduced) {
    return <ParallaxFieldLite />;
  }

  return <ParallaxFieldParallax parallax={parallax} />;
}
