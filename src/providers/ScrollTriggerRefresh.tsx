"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "@/animations/registerGsap";

/**
 * Recalcula as posições do ScrollTrigger quando o layout muda depois da
 * montagem (fontes, imagens, componentes animados que alteram altura).
 * Sem isso, gatilhos ficam com início/fim desatualizados.
 */
export function ScrollTriggerRefresh() {
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    let lastHeight = document.body.scrollHeight;

    const schedule = () => {
      clearTimeout(timer);
      timer = setTimeout(() => ScrollTrigger.refresh(), 200);
    };

    const ro = new ResizeObserver(() => {
      const height = document.body.scrollHeight;
      if (Math.abs(height - lastHeight) < 2) return;
      lastHeight = height;
      schedule();
    });
    ro.observe(document.body);

    document.fonts?.ready.then(schedule).catch(() => {});
    window.addEventListener("load", schedule);

    return () => {
      clearTimeout(timer);
      ro.disconnect();
      window.removeEventListener("load", schedule);
    };
  }, []);

  return null;
}
