"use client";

import dynamic from "next/dynamic";
import { LazyEffect } from "@/webgl/LazyEffect";

const GridDistortion = dynamic(() => import("@/components/reactbits/GridDistortion"), {
  ssr: false,
});

/**
 * Foto da equipe no CTA final, que se parte em blocos sob o cursor
 * (React Bits: GridDistortion). No Figma a camada se chama "BG Hover final".
 */
export function FinalGridDistortion({ src, className }: { src: string; className?: string }) {
  return (
    <LazyEffect className={className} rootMargin="80% 0px">
      <GridDistortion
        imageSrc={src}
        grid={14}
        radius={0.16}
        strength={0.14}
        relaxation={0.95}
        mode="drag"
        chroma={0.15}
        idle={0.2}
        clickRipple
      />
    </LazyEffect>
  );
}
