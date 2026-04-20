import Image from "next/image";

type Variant = "mark" | "wordmarkWhite" | "wordmarkDark";

type AiNotreLogoProps = {
  className?: string;
  /** Intrinsic width/height hint for Next/Image (mark is ~square). */
  size?: number;
  priority?: boolean;
  variant?: Variant;
};

const srcByVariant: Record<Variant, string> = {
  mark: "/ai-notre-mark.png",
  wordmarkWhite: "/ai-notre-wordmark-white.png",
  wordmarkDark: "/ai-notre-wordmark-dark.png",
};

/** Wordmark source aspect ~5434×1362 ≈ 4:1 */
const WORDMARK_RATIO = 5434 / 1362;

export function AiNotreLogo({
  className,
  size = 40,
  priority = false,
  variant = "mark",
}: AiNotreLogoProps) {
  if (variant === "mark") {
    return (
      <Image
        src={srcByVariant.mark}
        alt=""
        width={size}
        height={size}
        className={className}
        priority={priority}
      />
    );
  }

  const w = Math.round(size * WORDMARK_RATIO);
  return (
    <Image
      src={srcByVariant[variant]}
      alt=""
      width={w}
      height={size}
      className={className}
      priority={priority}
    />
  );
}

/** Full wordmark for footer / wide headers; constrains width, keeps aspect. */
export function AiNotreWordmark({
  tone,
  className = "",
  priority = false,
}: {
  tone: "light" | "dark";
  className?: string;
  priority?: boolean;
}) {
  const src =
    tone === "light"
      ? srcByVariant.wordmarkWhite
      : srcByVariant.wordmarkDark;
  return (
    <Image
      src={src}
      alt="AI Notre"
      width={5434}
      height={1362}
      sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 400px"
      className={`block h-auto w-full max-w-[17rem] object-contain object-left sm:max-w-[21rem] lg:max-w-[24rem] ${className}`}
      priority={priority}
    />
  );
}
