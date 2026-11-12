"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useSmoothScroll } from "@/providers/SmoothScrollProvider";
import { contactHref } from "@/config/site";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { CtaButton } from "@/components/ui/CtaButton";
import { asset } from "@/lib/asset";

const FlyingButton = dynamic(() => import("@/components/reactbits/FlyingButton"), { ssr: false });

/**
 * "Fazer parte" do CTA final. React Bits: FlyingButton — o botão liga os
 * propulsores no hover e decola numa nuvem de fumaça WebGL. Com movimento
 * reduzido, cai no botão padrão do site.
 */
export function FazerParteButton() {
  const { scrollTo } = useSmoothScroll();
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <CtaButton href={contactHref} size="lg">
        Fazer parte
      </CtaButton>
    );
  }

  return (
    <div className="pointer-events-none relative -mt-36 h-[240px] w-[260px] lg:pointer-events-auto lg:mt-0 lg:-translate-y-[64px] [&_button]:pointer-events-auto">
      <FlyingButton
        size="extra-large"
        radius={45.6}
        buttonColor="linear-gradient(152deg, #ff820d 11.49%, #e24f00 114.91%)"
        textColor="#ffffff"
        thrustColor="#ffb25a"
        smokeColor="#abdbf8"
        altitude={0.35}
        smoke={0.7}
        wobble={0.4}
        onClick={() => scrollTo(contactHref)}
        className="min-h-[240px]! overflow-visible!"
      >
        <span className="flex items-center gap-2.5 font-semibold">
          Fazer parte
          <Image
            src={asset("/svg/seta-grande.svg")}
            alt=""
            width={34.8757}
            height={34.8757}
            unoptimized
          />
        </span>
      </FlyingButton>
    </div>
  );
}
