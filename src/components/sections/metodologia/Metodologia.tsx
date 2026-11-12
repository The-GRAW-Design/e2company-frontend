"use client";

import Image from "next/image";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import BorderGlow from "@/components/reactbits/BorderGlow";
import FadeContent from "@/components/reactbits/FadeContent";
import GlareHover from "@/components/reactbits/GlareHover";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import { Container } from "@/components/layout/Container";
import { Chip } from "@/components/ui/Chip";
import { StepCard } from "@/components/ui/StepCard";
import { place } from "@/lib/design";
import { passos } from "./data";

function ChipBrilho({ blur }: { blur?: number }) {
  return (
    <GlareHover
      mode="loop"
      interval={4}
      background="transparent"
      borderRadius="3px"
      glareColor="#ffffff"
      glareOpacity={0.6}
      glareSize={160}
      className="border-0!"
    >
      <Chip variant="ciano" blur={blur} className="rounded-none whitespace-nowrap">
        Nosso modo de agir
      </Chip>
    </GlareHover>
  );
}

/**
 * Seção 4 — "Conheça a metodologia E² Company".
 * React Bits: ScrollFloat (título), GlareHover em loop (selos), BorderGlow e
 * AnimatedContent (passos) e FadeContent (texto desfocado de fundo).
 */
export function Metodologia() {
  return (
    <section
      id="metodologia"
      aria-label="Metodologia"
      className="relative z-10 scroll-mt-24 pt-20 lg:pt-[112px]"
    >
      {/* "A hora de crescer é agora" em contorno, a 22% e desfocado (Figma: 2788:2045) */}
      <FadeContent
        aria-hidden
        duration={2}
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden [--u:calc(100cqw/1920)] lg:block"
      >
        <div className="absolute" style={place(-780.86, -259.8, 2653.67, 1786.15)}>
          <Image src="/svg/texto-hora-de-crescer.svg" alt="" fill unoptimized />
        </div>
      </FadeContent>

      <Container className="grid gap-12 lg:grid-cols-[minmax(0,939px)_minmax(0,621px)] lg:justify-between lg:gap-10">
        {/* Fonte proporcional à coluna: 124.8px em 939px (13.29cqw) */}
        <div className="@container lg:pl-2">
          <div className="relative text-[length:clamp(40px,13.29cqw,124.8px)]">
            <ScrollFloat
              splitBy="words"
              effect="float"
              distance={110}
              stagger={0.05}
              scrollStart="top bottom-=10%"
              scrollEnd="bottom center"
              containerClassName="my-0!"
              textClassName="text-[length:inherit]! font-display font-bold! uppercase leading-[1.16]! tracking-[-0.06em] text-left! [&_[data-word]]:text-gradient-prata"
            >
              Conheça a metodologia E² Company
            </ScrollFloat>

            {/* Selos posicionados em em (relativos ao tamanho do título), como no Figma */}
            <div
              aria-hidden
              className="absolute hidden lg:block"
              style={{ left: "-0.17em", top: "1.19em" }}
            >
              <ChipBrilho blur={6.45} />
            </div>
            <div className="mt-6 lg:absolute lg:mt-0" style={{ left: "5.63em", top: "3.08em" }}>
              <ChipBrilho />
            </div>
          </div>
        </div>

        <AnimatedContent
          direction="horizontal"
          distance={90}
          stagger={0.14}
          blur={8}
          duration={1}
          threshold={0.1}
          className="flex flex-col gap-[31px]"
        >
          {passos.map((passo) => (
            <BorderGlow
              key={passo.title}
              backgroundColor="rgb(41 41 41 / 0.2)"
              borderRadius={16}
              glowColor="29 100 60"
              colors={["#ff820d", "#2588c3", "#abdbf8"]}
              glowRadius={32}
              glowIntensity={0.9}
              edgeSensitivity={25}
              fillOpacity={0.35}
              className="border-transparent!"
            >
              <StepCard title={passo.title} className="bg-transparent shadow-none">
                <p>{passo.text}</p>
              </StepCard>
            </BorderGlow>
          ))}
        </AnimatedContent>
      </Container>
    </section>
  );
}
