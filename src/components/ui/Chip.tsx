import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ChipVariant = "escuro" | "ciano" | "laranja";

const VARIANTS: Record<ChipVariant, string> = {
  escuro: "bg-grafite-700",
  ciano: "bg-gradient-ciano",
  laranja: "bg-gradient-laranja-claro",
};

type ChipProps = {
  children: ReactNode;
  variant?: ChipVariant;
  /** Desfoque de profundidade usado nos elementos decorativos do design. */
  blur?: number;
  className?: string;
};

/** "Botão de descrição" do Figma: selo retangular com borda ciano. */
export function Chip({ children, variant = "escuro", blur, className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-[37px] items-center justify-center rounded-[3px] border-[0.5px] border-ciano px-3 py-2 text-center text-sm font-semibold text-white shadow-chip [text-shadow:0_0_19.7px_#000] sm:text-base",
        VARIANTS[variant],
        className,
      )}
      style={blur ? { filter: `blur(${blur}px)` } : undefined}
      aria-hidden={blur ? true : undefined}
    >
      {children}
    </span>
  );
}
