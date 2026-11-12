"use client";

import { useEffect, useState, type RefObject } from "react";

/**
 * Fica `true` (e permanece) quando o elemento chega perto da viewport.
 * Usado para montar efeitos WebGL só quando a seção está prestes a aparecer.
 */
export function useNearViewport<T extends Element>(
  ref: RefObject<T | null>,
  rootMargin = "50% 0px",
) {
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || near) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, rootMargin, near]);

  return near;
}
