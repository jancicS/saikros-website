import Image from "next/image";

type SaikrosLogoProps = {
  className?: string;
  /** Intrinsic dimension hint for Next/Image; constrain with className (e.g. h-10 w-10). */
  size?: number;
  priority?: boolean;
};

export function SaikrosLogo({
  className,
  size = 40,
  priority = false,
}: SaikrosLogoProps) {
  return (
    <Image
      src="/saikros-mark.png"
      alt=""
      width={size}
      height={size}
      className={className}
      priority={priority}
    />
  );
}
