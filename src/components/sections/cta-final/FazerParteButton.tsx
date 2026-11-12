"use client";

import Image from "next/image";
import Magnet from "@/components/reactbits/Magnet";
import SpecularButton from "@/components/reactbits/SpecularButton";
import { contactHref } from "@/config/site";
import { asset } from "@/lib/asset";
import { useSmoothScroll } from "@/providers/SmoothScrollProvider";

/**
 * "Fazer parte" do CTA final. React Bits: SpecularButton — a borda do botão
 * pega a luz e o reflexo desliza em direção ao cursor — dentro de um Magnet,
 * que puxa o botão para o ponteiro. Leva ao formulário de contato.
 */
export function FazerParteButton() {
  const { scrollTo } = useSmoothScroll();

  return (
    <Magnet padding={80} magnetStrength={3} maxOffset={16}>
      <SpecularButton
        size="lg"
        radius={45.6}
        tint="#ff820d"
        tintOpacity={1}
        textColor="#ffffff"
        lineColor="#ffffff"
        baseColor="#ffb25a"
        intensity={1.2}
        idleIntensity={0.5}
        glow={1.1}
        followMouse
        autoAnimate
        onClick={() => scrollTo(contactHref)}
        className="gap-2.5! px-[15px]! py-4! text-[16.4px]! font-semibold! whitespace-nowrap"
        style={{ background: "linear-gradient(152deg, #ff820d 11.49%, #e24f00 114.91%)" }}
      >
        Fazer parte
        <Image
          src={asset("/svg/seta-grande.svg")}
          alt=""
          width={34.8757}
          height={34.8757}
          unoptimized
        />
      </SpecularButton>
    </Magnet>
  );
}
