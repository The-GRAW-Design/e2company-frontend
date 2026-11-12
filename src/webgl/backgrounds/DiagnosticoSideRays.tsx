"use client";

import dynamic from "next/dynamic";
import { LazyEffect } from "@/webgl/LazyEffect";

const SideRays = dynamic(() => import("@/components/reactbits/SideRays"), { ssr: false });

/** Feixe de luz que cai sobre a foto da seção de diagnóstico (React Bits: SideRays). */
export function DiagnosticoSideRays({ className }: { className?: string }) {
  return (
    <LazyEffect className={className}>
      <SideRays
        origin="top-right"
        rayColor1="#2588c3"
        rayColor2="#abdbf8"
        blend={0.5}
        speed={1.2}
        intensity={1.1}
        spread={1.6}
        density={4}
        dust={0.25}
        mouseInfluence={0.3}
        opacity={0.55}
      />
    </LazyEffect>
  );
}
