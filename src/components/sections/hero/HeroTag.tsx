import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { u, uMin } from "@/lib/design";

type TagSize = "sm" | "md" | "lg";

// Medidas dos componentes "Frame 44/45/46/47/8" do Figma.
const SIZES: Record<
  TagSize,
  { font: number; px: number; py: number; radius: number; border: number }
> = {
  sm: { font: 14.328, px: 28.072, py: 18.195, radius: 11.462, border: 0.358 },
  md: { font: 17.435, px: 34.16, py: 22.141, radius: 13.948, border: 0.436 },
  lg: { font: 22.613, px: 44.307, py: 28.718, radius: 18.091, border: 0.565 },
};

type HeroTagProps = {
  children: ReactNode;
  size?: TagSize;
  tone?: "ciano" | "laranja";
  /** Desfoque de profundidade em px do design. */
  blur?: number;
  className?: string;
  style?: CSSProperties;
};

/** Etiqueta flutuante do hero, dimensionada pela unidade proporcional `--u`. */
export function HeroTag({
  children,
  size = "md",
  tone = "ciano",
  blur,
  className,
  style,
}: HeroTagProps) {
  const s = SIZES[size];
  return (
    <span
      className={cn(
        "inline-flex border-solid border-laranja bg-gradient-navy whitespace-nowrap shadow-[0_3.5px_4px_rgb(0_0_0/0.44)]",
        className,
      )}
      style={{
        fontSize: uMin(s.font, 9),
        padding: `${uMin(s.py, 7)} ${uMin(s.px, 12)}`,
        borderRadius: u(s.radius),
        borderWidth: `${s.border}px`,
        filter: blur ? `blur(${u(blur)})` : undefined,
        ...style,
      }}
    >
      <span
        className={cn(
          "font-display leading-normal font-semibold",
          tone === "ciano" ? "text-gradient-ciano" : "text-gradient-laranja",
        )}
      >
        {children}
      </span>
    </span>
  );
}
