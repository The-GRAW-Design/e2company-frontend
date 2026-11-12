"use client";

import Image from "next/image";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import GradientText from "@/components/reactbits/GradientText";
import ScrollExpand from "@/components/reactbits/ScrollExpand";
import { Container } from "@/components/layout/Container";
import { DescricaoCard } from "@/components/ui/DescricaoCard";
import { place, u } from "@/lib/design";
import { asset } from "@/lib/asset";

const FOTO = {
  src: asset("/images/proposito-equipe.png"),
  alt: "Sócios da E² Company conversando sobre o propósito da empresa",
};

const CARD_LATERAL = (
  <p>
    Estudamos o seu posicionamento atual, identificando pontos fortes, falhas e oportunidades no seu
    nicho de mercado, além dos obstáculos que impedem seu crescimento.
  </p>
);

/**
 * "Nosso propósito" (Figma: grupo "Propósito", y 4772).
 * React Bits: GradientText (título), AnimatedContent (entrada) e ScrollExpand
 * (o quadro arredondado se expande conforme a rolagem; a borda laranja do
 * design aparece no fim da expansão).
 */
export function Proposito() {
  return (
    <section
      id="proposito"
      aria-label="Nosso propósito"
      className="relative z-10 scroll-mt-24 pt-20 lg:pt-0"
    >
      {/* Cards desfocados nas laterais (Figma: 2788:2039 e 2788:2043) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 hidden [--u:calc(100cqw/1920)] lg:block"
      >
        <DescricaoCard
          step="Passo 1"
          title="Análise da sua presença digital"
          className="absolute! blur-[10px]"
          style={{ ...place(-12, 206), width: u(526) }}
        >
          {CARD_LATERAL}
        </DescricaoCard>
        <DescricaoCard
          step="Passo 1"
          title="Análise da sua presença digital"
          className="absolute! blur-[10px]"
          style={{ ...place(1394, 364), width: u(526) }}
        >
          {CARD_LATERAL}
        </DescricaoCard>
      </div>

      <Container>
        <AnimatedContent distance={50} scale={0.9} blur={10} duration={1.2}>
          <h2 className="text-center font-display text-[length:clamp(40px,4.17cqw,80px)] leading-[1.16] font-bold tracking-[-0.06em] uppercase">
            <GradientText
              colors={["#2588c3", "#abdbf8", "#3697d0", "#2588c3"]}
              variant="flow"
              animationSpeed={7}
              angle={114}
              glow={0.25}
            >
              Nosso propósito
            </GradientText>
          </h2>
        </AnimatedContent>
      </Container>

      {/* Desktop: quadro que expande com a rolagem */}
      <div className="relative mx-auto mt-[31px] hidden max-w-[1590px] lg:block">
        <ScrollExpand
          src={FOTO.src}
          alt={FOTO.alt}
          useWindowScroll
          startWidth={58}
          startHeight={62}
          startRadius={48}
          endRadius={95.4}
          mediaZoom={1.25}
          scrollDistance={0.7}
          holdDistance={0.15}
          smoothing={0.08}
          overlayScrim={0}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[95.4px] border-[5px] border-laranja"
          />
        </ScrollExpand>
      </div>

      {/* Mobile/tablet: quadro estático com a borda do design */}
      <Container className="lg:hidden">
        <AnimatedContent distance={60} blur={8} duration={1} className="mt-8">
          <div className="relative aspect-[1590/895] overflow-hidden rounded-[32px] border-[3px] border-laranja sm:rounded-[56px] sm:border-[5px]">
            <Image src={FOTO.src} alt={FOTO.alt} fill sizes="100vw" className="object-cover" />
          </div>
        </AnimatedContent>
      </Container>
    </section>
  );
}
