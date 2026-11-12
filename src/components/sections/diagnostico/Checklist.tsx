"use client";

import Image from "next/image";
import { useState } from "react";
import FadeContent from "@/components/reactbits/FadeContent";
import Magnet from "@/components/reactbits/Magnet";
import ShinyText from "@/components/reactbits/ShinyText";
import SpringCheck from "@/components/reactbits/SpringCheck";
import { CtaButton } from "@/components/ui/CtaButton";
import { contactHref } from "@/config/site";
import { cn } from "@/lib/cn";
import { LIMITE_ALERTA, situacoes } from "./data";

/**
 * Checklist interativo "Marque as situações que estão travando seu negócio".
 * React Bits: SpringCheck (caixas com mola), ShinyText (alerta que acende
 * com 3+ marcações), FadeContent e Magnet.
 */
export function Checklist() {
  const [marcadas, setMarcadas] = useState<boolean[]>(() => situacoes.map(() => false));
  const total = marcadas.filter(Boolean).length;
  const alerta = total >= LIMITE_ALERTA;

  return (
    <>
      <ul
        className="mt-[25px] flex flex-col gap-6 sm:gap-[39px]"
        aria-label="Situações do seu negócio"
      >
        {situacoes.map((texto, i) => (
          <li key={texto}>
            <SpringCheck
              label={texto}
              checked={marcadas[i]}
              onChange={(value) =>
                setMarcadas((prev) => prev.map((item, idx) => (idx === i ? value : item)))
              }
              color="#ff820d"
              fillColor="#ff820d"
              checkColor="#ffffff"
              boxSize={22}
              boxRadius={11}
              fontSize={16}
              strike="none"
              doneOpacity={1}
              className="text-left font-normal! text-white [&>span:first-child]:outline [&>span:first-child]:outline-1 [&>span:first-child]:-outline-offset-1 [&>span:first-child]:outline-laranja"
            />
          </li>
        ))}
      </ul>

      <p
        className={cn(
          "mt-[25px] font-display text-[22px] leading-normal font-semibold uppercase transition-transform duration-500",
          alerta && "scale-[1.04]",
        )}
        aria-live="polite"
      >
        <ShinyText
          text="Marcou 3 ou mais?"
          color="#90caed"
          shineColor={alerta ? "#ff820d" : "#ffffff"}
          speed={alerta ? 1.4 : 3.2}
          glow={alerta ? 0.6 : 0}
        />
        <span className="sr-only">{`${total} de ${situacoes.length} situações marcadas.`}</span>
      </p>

      <FadeContent effect="focus" blur duration={1.1} className="mt-[25px]">
        <p className="text-lg leading-normal font-semibold text-white sm:text-xl">
          Você não precisa de “ajuda”. Você precisa de uma reconstrução completa da sua presença
          digital e a E² Company é a <em>única</em> empresa que entrega tudo isso em um só lugar.
        </p>
      </FadeContent>

      <div className="mt-[25px] flex items-center gap-[9px]">
        <CtaButton href={contactHref} size="sm">
          Sim estou precisando de ajuda urgente!
        </CtaButton>
        <Magnet padding={60} magnetStrength={3}>
          <a href={contactHref} aria-label="Falar com a E² Company">
            <Image src="/svg/icone-e2-circulo.svg" alt="" width={44} height={44} unoptimized />
          </a>
        </Magnet>
      </div>
    </>
  );
}
