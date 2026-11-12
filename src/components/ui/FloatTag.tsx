import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

type FloatTagProps = {
  children: ReactNode;
  tone?: "ciano" | "laranja";
  className?: string;
  style?: CSSProperties;
};

/** Etiquetas flutuantes do hero ("MAIS VENDAS", "FUNIL COMPLETO"...). */
export function FloatTag({ children, tone = "ciano", className, style }: FloatTagProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-[14px] border-[0.436px] border-laranja bg-gradient-navy px-[34px] py-[22px] whitespace-nowrap shadow-[0_3.5px_4px_rgb(0_0_0/0.44)]",
        className,
      )}
      style={style}
    >
      <span
        className={cn(
          "font-display text-[17.4px] leading-normal font-semibold",
          tone === "ciano" ? "text-gradient-ciano" : "text-gradient-laranja",
        )}
      >
        {children}
      </span>
    </span>
  );
}
