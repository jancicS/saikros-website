"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import Link from "next/link";

type MotionLinkProps = HTMLMotionProps<"a"> &
  React.ComponentProps<typeof Link>;

const MotionLinkBase = motion.create(Link);

export function MotionLink({
  className,
  whileHover,
  whileTap,
  transition,
  ...props
}: MotionLinkProps) {
  return (
    <MotionLinkBase
      className={className}
      whileHover={whileHover ?? { y: -2 }}
      whileTap={whileTap ?? { scale: 0.98 }}
      transition={
        transition ?? { type: "spring", stiffness: 420, damping: 28 }
      }
      {...props}
    />
  );
}
