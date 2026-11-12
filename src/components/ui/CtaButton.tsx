"use client";

import Image from "next/image";
import type { MouseEventHandler, ReactNode } from "react";
import GlareHover from "@/components/reactbits/GlareHover";
import Magnet from "@/components/reactbits/Magnet";
import { cn } from "@/lib/cn";
import { asset } from "@/lib/asset";

type Size = "lg" | "md" | "sm";

const SIZES: Record<
  Size,
  { box: string; text: string; radius: string; arrow: { src: string; size: number } }
> = {
  // Botão grande do hero / CTA final (Figma: 16.41px, seta 34.88px)
  lg: {
    box: "gap-2.5 px-[15px] py-4",
    text: "text-[16.4px]",
    radius: "45.6px",
    arrow: { src: asset("/svg/seta-grande.svg"), size: 34.8757 },
  },
  // Botão padrão do header / formulário (Figma: 16px, seta 22.67px)
  md: {
    box: "gap-[6.7px] px-2.5 py-[10.7px]",
    text: "text-base",
    radius: "29.7px",
    arrow: { src: asset("/svg/seta-pequena.svg"), size: 22.6667 },
  },
  // Botão compacto da seção de diagnóstico (Figma: 10.67px)
  sm: {
    box: "gap-[6.7px] px-2.5 py-[10.7px]",
    text: "text-[10.7px] sm:text-xs",
    radius: "29.7px",
    arrow: { src: asset("/svg/seta-pequena.svg"), size: 22.6667 },
  },
};

type CtaButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  onClick?: MouseEventHandler<HTMLElement>;
  size?: Size;
  /** Ocupa toda a largura do container (botão do formulário). */
  block?: boolean;
  /** Desliga o efeito magnético (ex.: dentro de formulários). */
  magnetic?: boolean;
  disabled?: boolean;
  className?: string;
};

/**
 * Botão laranja com seta do design, animado com os componentes
 * React Bits `Magnet` (atração pelo cursor) e `GlareHover` (brilho ao passar).
 */
export function CtaButton({
  children,
  href,
  type = "button",
  onClick,
  size = "md",
  block = false,
  magnetic = true,
  disabled = false,
  className,
}: CtaButtonProps) {
  const s = SIZES[size];

  const content = (
    <GlareHover
      background="linear-gradient(162deg, #ff820d 11.49%, #e24f00 114.91%)"
      borderRadius={s.radius}
      borderColor="transparent"
      glareColor="#ffffff"
      glareOpacity={0.55}
      glareAngle={-35}
      glareSize={220}
      rimGlint
      className={cn("border-0!", block ? "flex! w-full" : "")}
    >
      <span
        className={cn(
          "flex items-center justify-center font-semibold whitespace-nowrap text-white",
          s.box,
          s.text,
          block && "h-[58px] w-full",
        )}
      >
        {children}
        <Image
          src={s.arrow.src}
          alt=""
          width={s.arrow.size}
          height={s.arrow.size}
          unoptimized
          aria-hidden
        />
      </span>
    </GlareHover>
  );

  const sharedClass = cn(
    "inline-block rounded-full disabled:cursor-not-allowed disabled:opacity-60",
    block && "block w-full",
    className,
  );

  const element = href ? (
    <a href={href} onClick={onClick} className={sharedClass}>
      {content}
    </a>
  ) : (
    <button type={type} onClick={onClick} disabled={disabled} className={sharedClass}>
      {content}
    </button>
  );

  if (!magnetic) return element;

  return (
    <Magnet
      padding={70}
      magnetStrength={4}
      maxOffset={14}
      wrapperClassName={block ? "block! w-full" : undefined}
    >
      {element}
    </Magnet>
  );
}
