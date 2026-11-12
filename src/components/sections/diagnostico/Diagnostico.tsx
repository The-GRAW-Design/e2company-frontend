import Image from "next/image";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import BlurText from "@/components/reactbits/BlurText";
import FoldText from "@/components/reactbits/FoldText";
import { Container } from "@/components/layout/Container";
import { place } from "@/lib/design";
import { DiagnosticoSideRays } from "@/webgl/backgrounds/DiagnosticoSideRays";
import { Checklist } from "./Checklist";
import { asset } from "@/lib/asset";

const FOTO = {
  src: asset("/images/foto-edu.webp"),
  alt: "Consultor da E² Company trabalhando no notebook",
};

/**
 * Seção 5 — "Ainda acha que consegue crescer sozinho".
 * No desktop o topo da seção equivale a y 3651 do Figma: texto em y 3812,
 * foto em (818, 3607) e luz em (485, 3312).
 * React Bits: FoldText, BlurText, AnimatedContent, SideRays + Checklist.
 */
export function Diagnostico() {
  return (
    <section
      aria-label="Diagnóstico"
      className="relative z-10 pt-20 lg:pt-[8.39cqw] lg:pb-[14.84cqw]"
    >
      {/* Desktop: luz, raios e foto nas coordenadas do Figma (Group 13) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 hidden [--u:calc(100cqw/1920)] lg:block"
      >
        <div className="absolute mix-blend-screen" style={place(485, -339, 2890, 2890)}>
          <Image src={asset("/svg/luz-edu.svg")} alt="" fill unoptimized />
        </div>
        <AnimatedContent
          direction="horizontal"
          distance={160}
          blur={14}
          duration={1.6}
          threshold={0.05}
          className="absolute"
          style={place(818, -44, 1160, 1712)}
        >
          <Image src={FOTO.src} alt="" fill sizes="61vw" className="object-cover" />
        </AnimatedContent>
      </div>
      <DiagnosticoSideRays className="hidden mix-blend-screen lg:block" />

      <Container className="relative">
        <div className="max-w-[654px] lg:ml-[10.2%]">
          <h2 className="font-display text-[length:clamp(34px,2.6cqw,50px)] font-bold">
            <FoldText
              text="Ainda acha que consegue crescer sozinho"
              splitBy="word"
              hinge="top"
              foldStyle="paper"
              trigger="scroll"
              duration={0.8}
              stagger={0.07}
              fontSize="inherit"
              fontWeight={700}
              color="#ffffff"
              className="max-w-[603px] leading-[1.16]! tracking-[-0.06em]!"
            />
          </h2>
          <BlurText
            text="Marque as situações que estão travando seu negócio:"
            animateBy="words"
            direction="top"
            delay={60}
            className="mt-[25px] text-lg text-white sm:text-xl"
          />
          <Checklist />
        </div>
      </Container>

      {/* Mobile/tablet: foto em bloco abaixo do texto */}
      <AnimatedContent
        distance={80}
        blur={10}
        duration={1.2}
        className="relative mt-12 h-[520px] overflow-hidden sm:h-[680px] lg:hidden"
      >
        <Image
          src={FOTO.src}
          alt={FOTO.alt}
          fill
          sizes="100vw"
          className="object-cover object-[70%_top]"
        />
      </AnimatedContent>
    </section>
  );
}
