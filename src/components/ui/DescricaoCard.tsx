import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { u, uMin } from "@/lib/design";
import { Chip } from "./Chip";

export type DescricaoIcon = {
  src: string;
  width: number;
  height: number;
  /** Posição do ícone dentro do card, em px do design (card de 526×613). */
  x: number;
  y: number;
};

type DescricaoCardProps = {
  step: string;
  title: string;
  children: ReactNode;
  icon?: DescricaoIcon;
  className?: string;
  style?: CSSProperties;
};

/**
 * Card "Descrição" do Figma (526×613). Escala proporcionalmente à própria
 * largura com container query: todas as medidas vêm de `u()`.
 */
export function DescricaoCard({
  step,
  title,
  children,
  icon,
  className,
  style,
}: DescricaoCardProps) {
  return (
    <article
      className={cn(
        "@container relative isolate overflow-hidden rounded-2xl border border-laranja shadow-card-profundo",
        className,
      )}
      style={style}
    >
      <div
        className="relative flex h-full flex-col bg-card-profundo [--u:calc(100cqw/526)]"
        style={{
          minHeight: u(613),
          gap: u(19),
          padding: `${u(44)} ${u(36)} ${u(48)}`,
        }}
      >
        {icon && (
          <Image
            src={icon.src}
            alt=""
            width={icon.width}
            height={icon.height}
            unoptimized
            aria-hidden
            className="pointer-events-none absolute -z-0 max-w-none"
            style={{
              left: u(icon.x),
              top: u(icon.y),
              width: u(icon.width),
              height: u(icon.height),
            }}
          />
        )}
        <Chip className="relative self-start">{step}</Chip>
        <div aria-hidden style={{ height: u(145) }} />
        <h3
          className="relative text-gradient-ciano leading-[1.21] font-semibold"
          style={{ fontSize: uMin(40, 24), maxWidth: u(431) }}
        >
          {title}
        </h3>
        <div
          className="relative leading-[1.21] text-white [&_strong]:font-semibold"
          style={{ fontSize: uMin(22, 15), maxWidth: u(454) }}
        >
          {children}
        </div>
      </div>
    </article>
  );
}
