"use client";

import Image from "next/image";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import CountUp from "@/components/reactbits/CountUp";
import FadeContent from "@/components/reactbits/FadeContent";
import GradientText from "@/components/reactbits/GradientText";
import ShinyText from "@/components/reactbits/ShinyText";
import { Chip } from "@/components/ui/Chip";
import { beneficios, etapas } from "./data";

/**
 * Coluna esquerda do formulário (Figma: Frame 63).
 * React Bits: ShinyText, GradientText, CountUp, AnimatedContent e FadeContent.
 */
export function Beneficios() {
  return (
    <div className="flex max-w-[491px] flex-col gap-8 lg:mt-2 lg:gap-[33px]">
      <Chip className="self-start text-left">
        <ShinyText
          text="Dê seu primeiro passo para transformar seu negócio"
          color="#ffffff"
          shineColor="#abdbf8"
          speed={3}
          delay={1.5}
        />
      </Chip>

      <h2 className="font-display text-[length:clamp(28px,2.08cqw,40px)] leading-[1.21] font-bold uppercase">
        <GradientText
          colors={["#2588c3", "#abdbf8", "#2588c3"]}
          animationSpeed={6}
          angle={97}
          className="justify-start!"
        >
          Elevar sua marca no mercado nunca foi tão simples!
        </GradientText>
      </h2>

      <p className="max-w-[369px] text-gradient-laranja text-xl leading-[1.21] uppercase sm:text-2xl">
        Preencha o formulário e receba em{" "}
        <strong className="font-bold">
          <CountUp from={2} to={60} direction="down" duration={2.2} className="tabular-nums" />{" "}
          minutos
        </strong>
      </p>

      <AnimatedContent
        direction="horizontal"
        reverse
        distance={60}
        stagger={0.15}
        blur={6}
        duration={0.9}
        className="flex flex-col gap-6 lg:gap-0"
      >
        {beneficios.map((item) => (
          <div key={item.title} className="flex items-start gap-3.5 lg:min-h-[86px] lg:pb-4">
            <Image src={item.icon} alt="" width={53} height={53} unoptimized className="shrink-0" />
            <div className="text-white">
              <h3 className="font-display text-lg leading-[1.25] font-semibold sm:text-[22px]">
                {item.title}
              </h3>
              <p className="mt-1 text-xs leading-[1.3] sm:text-[11px]">{item.text}</p>
            </div>
          </div>
        ))}
      </AnimatedContent>

      <FadeContent
        effect="mist"
        duration={1.2}
        className="flex flex-col gap-5 sm:flex-row sm:gap-[25px]"
      >
        {etapas.map((etapa) => (
          <div key={etapa.title} className="flex max-w-[223px] items-start gap-[6.4px]">
            <span className="grid size-6 shrink-0 place-items-center rounded-full bg-gradient-ciano">
              <Image
                src={etapa.icon.src}
                alt=""
                width={etapa.icon.size}
                height={etapa.icon.size}
                unoptimized
              />
            </span>
            <div className="text-white">
              <h3 className="font-display text-xs leading-normal font-semibold sm:text-[10px]">
                {etapa.title}
              </h3>
              <p className="text-[11px] leading-normal sm:text-[9px]">{etapa.text}</p>
            </div>
          </div>
        ))}
      </FadeContent>
    </div>
  );
}
