"use client";

import { createContext, useContext, useEffect, useMemo, useRef, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/animations/registerGsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** Altura do header fixo, usada como offset nos links de âncora. */
export const HEADER_OFFSET = -96;

type ScrollTarget = string | number | HTMLElement;

type SmoothScrollApi = {
  /** Rola até um seletor, elemento ou posição (suave quando o Lenis está ativo). */
  scrollTo: (target: ScrollTarget, options?: { offset?: number; immediate?: boolean }) => void;
  /** Instância atual do Lenis (`null` com movimento reduzido). */
  getLenis: () => Lenis | null;
};

const SmoothScrollContext = createContext<SmoothScrollApi | null>(null);

export function useSmoothScroll() {
  const api = useContext(SmoothScrollContext);
  if (!api) throw new Error("useSmoothScroll precisa estar dentro de <SmoothScrollProvider>.");
  return api;
}

function nativeScrollTo(target: ScrollTarget, offset: number) {
  let top: number;
  if (typeof target === "number") {
    top = target;
  } else {
    const el = typeof target === "string" ? document.querySelector<HTMLElement>(target) : target;
    if (!el) return;
    top = el.getBoundingClientRect().top + window.scrollY;
  }
  window.scrollTo({ top: top + offset, behavior: "auto" });
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis({
      autoRaf: false,
      lerp: 0.1,
      anchors: { offset: HEADER_OFFSET },
    });
    lenis.on("scroll", ScrollTrigger.update);

    // Um único relógio: o ticker do GSAP move o Lenis (e o ScrollTrigger junto).
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    lenisRef.current = lenis;

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reducedMotion]);

  const api = useMemo<SmoothScrollApi>(
    () => ({
      getLenis: () => lenisRef.current,
      scrollTo: (target, { offset = HEADER_OFFSET, immediate = false } = {}) => {
        const lenis = lenisRef.current;
        if (lenis) lenis.scrollTo(target, { offset, immediate });
        else nativeScrollTo(target, offset);
      },
    }),
    [],
  );

  return <SmoothScrollContext.Provider value={api}>{children}</SmoothScrollContext.Provider>;
}
