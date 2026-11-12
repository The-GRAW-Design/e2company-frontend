"use client";

import { useRef, type ReactNode } from "react";
import { useNearViewport } from "@/hooks/useNearViewport";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";

type LazyEffectProps = {
  children: ReactNode;
  className?: string;
  /** Distância da viewport em que o efeito começa a montar. */
  rootMargin?: string;
};

/**
 * Camada decorativa que só monta o efeito WebGL quando a seção se aproxima
 * da tela e quando o usuário não pediu movimento reduzido. Assim o site não
 * abre vários contextos WebGL de uma vez no carregamento.
 */
export function LazyEffect({ children, className, rootMargin = "60% 0px" }: LazyEffectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const near = useNearViewport(ref, rootMargin);
  const reducedMotion = useReducedMotion();

  return (
    <div ref={ref} aria-hidden className={cn("pointer-events-none absolute inset-0", className)}>
      {near && !reducedMotion ? children : null}
    </div>
  );
}
