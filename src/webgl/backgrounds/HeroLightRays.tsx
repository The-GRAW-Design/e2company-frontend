"use client";

import dynamic from "next/dynamic";
import { LazyEffect } from "@/webgl/LazyEffect";

const LightRays = dynamic(() => import("@/components/reactbits/LightRays"), { ssr: false });

/** Raios de luz azuis atrás da equipe no hero (React Bits: LightRays). */
export function HeroLightRays({ className }: { className?: string }) {
  return (
    <LazyEffect className={className}>
      <LightRays
        raysOrigin="top-center"
        raysColor="#479bcd"
        raysSpeed={0.6}
        lightSpread={0.9}
        rayLength={2.4}
        glow={0.5}
        haze={0.3}
        intensity={0.85}
        fadeDistance={0.9}
        followMouse
        mouseInfluence={0.08}
        cursorShadow={false}
        clickPulse={false}
        opacity={0.6}
      />
    </LazyEffect>
  );
}
