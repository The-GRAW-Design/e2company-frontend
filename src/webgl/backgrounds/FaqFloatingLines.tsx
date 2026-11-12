"use client";

import dynamic from "next/dynamic";
import { LazyEffect } from "@/webgl/LazyEffect";

const FloatingLines = dynamic(() => import("@/components/reactbits/FloatingLines"), {
  ssr: false,
});

/** Linhas curvas que flutuam atrás do FAQ (React Bits: FloatingLines). */
export function FaqFloatingLines({ className }: { className?: string }) {
  return (
    <LazyEffect className={className}>
      <FloatingLines
        linesGradient={["#2172a2", "#2588c3", "#abdbf8"]}
        enabledWaves={["top", "middle", "bottom"]}
        lineCount={[4, 6, 4]}
        lineDistance={[8, 6, 8]}
        animationSpeed={0.6}
        amplitude={0.9}
        lineWidth={0.8}
        glow={0.8}
        brightness={0.7}
        edgeFade={0.25}
        bendRadius={4}
        bendStrength={-0.4}
        clickSwirl={false}
        opacity={0.45}
      />
    </LazyEffect>
  );
}
