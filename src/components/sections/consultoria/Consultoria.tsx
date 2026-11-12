"use client";

import AnimatedContent from "@/components/reactbits/AnimatedContent";
import SplitText from "@/components/reactbits/SplitText";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import { Container } from "@/components/layout/Container";
import { DescricaoCard } from "@/components/ui/DescricaoCard";
import { RichText } from "@/components/ui/RichText";
import { place, u } from "@/lib/design";
import { entregas } from "./data";

/**
 * Seção 2 — "O que entregamos na primeira consultoria gratuita".
 * React Bits: SplitText (título), AnimatedContent (entrada 3D dos cards) e
 * SpotlightCard (luz que segue o cursor e alcança os cards vizinhos).
 */
export function Consultoria() {
  return (
    <section
      id="consultoria"
      aria-label="Consultoria gratuita"
      className="relative z-10 pt-16 lg:pt-0"
    >
      {/* Card desfocado na lateral direita (Figma: Card com desfoque 2788:2041) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 hidden [--u:calc(100cqw/1920)] lg:block"
      >
        <DescricaoCard
          step="Passo 1"
          title="Análise da sua presença digital"
          className="absolute! blur-[10px]"
          style={{ ...place(1657, 407), width: u(526) }}
        >
          <p>
            Estudamos o seu posicionamento atual, identificando pontos fortes, falhas e
            oportunidades no seu nicho de mercado, além dos obstáculos que impedem seu crescimento.
          </p>
        </DescricaoCard>
      </div>

      <Container>
        <SplitText
          tag="h2"
          text="O que entregamos na primeira consultoria gratuita"
          splitType="words"
          effect="blur"
          duration={0.9}
          delay={60}
          textAlign="center"
          className="mx-auto block! max-w-[603px] text-[length:clamp(28px,2.08cqw,40px)] leading-[1.21] font-semibold [&_.split-word]:text-gradient-prata"
        />

        <AnimatedContent
          stagger={0.15}
          distance={80}
          tilt={18}
          blur={6}
          duration={1.1}
          threshold={0.15}
          className="mt-8 grid gap-6 [perspective:1200px] md:mx-auto md:max-w-[560px] lg:mt-[26px] lg:max-w-none lg:grid-cols-3 lg:gap-[1.51cqw]"
        >
          {entregas.map((item) => (
            <SpotlightCard
              key={item.step}
              spotlightColor="rgba(255, 130, 13, 0.55)"
              intensity={0.22}
              spotlightSize={320}
              borderGlow={0.8}
              proximity={140}
              className="rounded-2xl! border border-laranja bg-card-profundo p-0! shadow-card-profundo"
              style={{
                ["--spotlight-card-surface" as string]: "transparent",
                ["--spotlight-card-shadow" as string]: "0 7px 23.65px #000",
              }}
            >
              <DescricaoCard step={item.step} title={item.title} icon={item.icon} surface={false}>
                <p>
                  <RichText text={item.body} />
                </p>
              </DescricaoCard>
            </SpotlightCard>
          ))}
        </AnimatedContent>
      </Container>
    </section>
  );
}
