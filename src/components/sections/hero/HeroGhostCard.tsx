import type { CSSProperties } from "react";
import { u } from "@/lib/design";

/**
 * Cards desfocados "PASSO 2 - CONVERSÃO EM RECEITA" que ficam atrás da equipe
 * (Figma: Frame 8 / Frame 9 dentro do grupo "bg"). Puramente decorativos.
 */
export function HeroGhostCard({ blur, style }: { blur: number; style?: CSSProperties }) {
  return (
    <div
      aria-hidden
      className="absolute flex flex-col border-[0.5px] border-solid border-laranja bg-grafite-800 shadow-[0_4px_4.65px_rgb(0_0_0/0.44)]"
      style={{
        width: u(621.373),
        gap: u(12.337),
        padding: `${u(25.399)} ${u(39.187)}`,
        borderRadius: u(16),
        filter: `blur(${u(blur)})`,
        ...style,
      }}
    >
      <p
        className="text-gradient-ciano font-display leading-normal font-semibold whitespace-nowrap"
        style={{ fontSize: u(20) }}
      >
        PASSO 2 - CONVERSÃO EM RECEITA
      </p>
      <p className="leading-normal text-white" style={{ fontSize: u(18), width: u(525) }}>
        Acompanhamos cada lead até a venda, garantindo que todas as oportunidades sejam aproveitadas
        e transformadas em receita real.
      </p>
    </div>
  );
}
