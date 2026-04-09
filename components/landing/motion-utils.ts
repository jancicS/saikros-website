"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const mobileMq = "(max-width: 767px)";

/**
 * True on narrow viewports where large blurs, sticky stacks, and scroll-linked
 * layers tend to tank frame rate on real devices.
 */
export function useMobileSimplifiedMotion() {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(mobileMq);
    const sync = () => setMatches(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return matches;
}

/** Returns whether to skip heavy motion and a 0–1 scale for parallax depth. */
export function useMotionSafe() {
  const reduced = useReducedMotion();
  return useMemo(
    () => ({
      reduced: Boolean(reduced),
      parallax: reduced ? 0 : 1,
    }),
    [reduced],
  );
}
