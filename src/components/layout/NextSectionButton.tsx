"use client";

import Image from "next/image";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import Magnet from "@/components/reactbits/Magnet";
import { useSmoothScroll } from "@/providers/SmoothScrollProvider";

/**
 * "Botão de navegação" do Figma (x 1827, 19×51.78): fica fixo na lateral
 * direita e leva à próxima seção. React Bits: Magnet e AnimatedContent.
 */
export function NextSectionButton() {
  const { scrollTo } = useSmoothScroll();

  function irParaProxima() {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section"));
    const atual = window.scrollY + 120;
    const proxima = sections.find((s) => s.getBoundingClientRect().top + window.scrollY > atual);
    scrollTo(proxima ?? 0);
  }

  return (
    <div className="fixed top-[56%] right-[3.85%] z-40 hidden -translate-y-1/2 2xl:block">
      <AnimatedContent trigger="mount" delay={2} distance={30} blur={6} duration={0.9}>
        <Magnet padding={50} magnetStrength={2.5} maxOffset={10}>
          <button
            type="button"
            onClick={irParaProxima}
            aria-label="Ir para a próxima seção"
            className="block cursor-pointer rounded-full"
          >
            <Image src="/svg/botao-navegacao.svg" alt="" width={19} height={51.775} unoptimized />
          </button>
        </Magnet>
      </AnimatedContent>
    </div>
  );
}
