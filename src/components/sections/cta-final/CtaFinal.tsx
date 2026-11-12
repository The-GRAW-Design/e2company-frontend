"use client";

import Image from "next/image";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import BlurText from "@/components/reactbits/BlurText";
import FadeContent from "@/components/reactbits/FadeContent";
import Noise from "@/components/reactbits/Noise";
import Shuffle from "@/components/reactbits/Shuffle";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/config/site";
import { place, u } from "@/lib/design";
import { FinalGridDistortion } from "@/webgl/backgrounds/FinalGridDistortion";
import { FazerParteButton } from "./FazerParteButton";

const FOTO_FUNDO = "/images/equipe-cta-final.png";

/**
 * Seção 7 — "Agora é a sua vez" + rodapé (Figma: "BG Hover final" + "SEÇÃO 7",
 * y 7639 até 8772). React Bits: GridDistortion (foto que se parte sob o
 * cursor), Noise, Shuffle, BlurText, FlyingButton, AnimatedContent e FadeContent.
 */
export function CtaFinal() {
  return (
    <section
      aria-label="Agora é a sua vez"
      className="relative isolate z-10 overflow-clip [--u:calc(100cqw/1920)]"
      style={{ minHeight: `max(760px, ${u(1133)})` }}
    >
      {/* Fundo: foto da equipe (2036×1278 em x -58) + véu escuro de 84% */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute" style={place(-58, 0, 2036, 1278)}>
          <Image src={FOTO_FUNDO} alt="" fill sizes="106vw" className="object-cover object-top" />
          <FinalGridDistortion src={FOTO_FUNDO} />
        </div>
        <div className="absolute inset-0 bg-[rgb(25_25_25/0.84)]" />
        <Noise opacity={0.07} fps={14} blendMode="overlay" />
      </div>

      <Container className="flex h-full flex-col pt-28 lg:pt-[30.99cqw]">
        <div className="flex flex-col gap-10 lg:ml-[10.98%] lg:flex-row lg:items-center lg:gap-[5.73cqw]">
          <Shuffle
            tag="h2"
            text="Agora é a sua vez"
            textAlign="left"
            shuffleDirection="up"
            duration={0.5}
            shuffleTimes={2}
            animationMode="evenodd"
            stagger={0.04}
            triggerOnce
            triggerOnHover
            effect="slide"
            className="max-w-[5.2em] shrink-0 font-display text-[length:clamp(52px,6.5cqw,124.8px)] leading-[1.16] font-bold tracking-[-0.06em] uppercase [&_.shuffle-char]:text-gradient-prata"
          />
          <BlurText
            text="Vamos juntos elevar a sua empresa ao próximo nível."
            animateBy="words"
            direction="bottom"
            delay={80}
            className="max-w-[250px] text-xl leading-normal text-white sm:text-2xl"
          />
          <FazerParteButton />
        </div>

        <AnimatedContent
          wipe="left"
          duration={1.4}
          animateOpacity={false}
          distance={0}
          className="mt-12 h-[2px] w-full bg-[#fefefe] lg:mt-[1.98cqw]"
        />

        <FadeContent
          effect="fade"
          duration={1}
          className="mt-auto py-10 lg:mt-[7.81cqw] lg:pb-[1.56cqw]"
        >
          <p className="flex items-center justify-center gap-1 text-[10px] text-white">
            <Image src="/svg/icone-link.svg" alt="" width={10.9876} height={10.9876} unoptimized />
            <span>
              DESENVOLVIDO POR <strong className="font-semibold">{siteConfig.credit.label}</strong>
            </span>
          </p>
        </FadeContent>
      </Container>
    </section>
  );
}
