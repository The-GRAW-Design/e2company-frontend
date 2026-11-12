"use client";

import { useEffect, useRef, useState } from "react";
import FuzzyText from "@/components/reactbits/FuzzyText";
import LogoLoop, { type LogoItem } from "@/components/reactbits/LogoLoop";
import { StepCard } from "@/components/ui/StepCard";
import { u } from "@/lib/design";
import { FaqFloatingLines } from "@/webgl/backgrounds/FaqFloatingLines";
import { FaqBackdrop } from "./FaqBackdrop";
import { perguntas } from "./data";

/** Tamanho do "FAQ" no design: 511.73px em 1920px de largura. */
const FAQ_RATIO = 511.728 / 1920;

/** Mede a largura disponível para dimensionar o FAQ em px (o canvas precisa de número). */
function useFaqFontSize() {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let alive = true;
    const measure = () => {
      const width = el.closest("main")?.clientWidth ?? window.innerWidth;
      setSize(Math.round(Math.min(511.728, Math.max(140, width * FAQ_RATIO))));
    };
    // O canvas do FuzzyText usa a fonte já carregada; espera a Sora antes de medir.
    (document.fonts?.ready ?? Promise.resolve()).then(() => alive && measure());
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => {
      alive = false;
      ro.disconnect();
    };
  }, []);

  return { ref, size };
}

const CARDS: LogoItem[] = perguntas.map((item) => ({
  node: (
    <StepCard
      title={item.pergunta}
      className="w-[min(86vw,603px)] whitespace-normal backdrop-blur-[2px] sm:min-h-[218px]"
    >
      <p className="text-sm leading-normal sm:text-lg">{item.resposta}</p>
    </StepCard>
  ),
  ariaLabel: item.pergunta,
}));

/**
 * FAQ (Figma: grupo "FAQ", y 6681, sobre o painel em degradê de y 6498).
 * React Bits: FuzzyText (título com gradiente que vibra no hover),
 * LogoLoop (faixa arrastável de perguntas) e FloatingLines (WebGL).
 */
export function Faq() {
  const { ref, size } = useFaqFontSize();

  return (
    <section
      id="faq"
      aria-labelledby="faq-titulo"
      className="relative isolate z-10 overflow-x-clip pt-16 pb-20 lg:pt-[9.53cqw] lg:pb-[5.16cqw]"
      style={{ ["--u" as string]: "calc(100cqw / 1920)" }}
    >
      <FaqBackdrop />
      <FaqFloatingLines className="-z-10" />

      <h2 id="faq-titulo" className="sr-only">
        Perguntas frequentes
      </h2>
      <div
        ref={ref}
        aria-hidden
        className="relative flex justify-center lg:justify-start"
        style={{ minHeight: `max(150px, ${u(594)})` }}
      >
        <div className="lg:ml-[15.31cqw]">
          {size && (
            <FuzzyText
              fontSize={size}
              fontWeight={700}
              fontFamily="inherit"
              gradient={["#2588c3", "#abdbf8"]}
              letterSpacing={-0.06 * size}
              baseIntensity={0.06}
              hoverIntensity={0.45}
              enableHover
              clickEffect
              intro
              className="font-display"
            >
              FAQ
            </FuzzyText>
          )}
        </div>
      </div>

      <div className="mt-8 lg:mt-[2.4cqw]">
        <LogoLoop
          logos={CARDS}
          speed={28}
          direction="left"
          gap={37}
          pauseOnHover
          draggable
          fadeOut={false}
          ariaLabel="Perguntas frequentes"
        />
      </div>
    </section>
  );
}
