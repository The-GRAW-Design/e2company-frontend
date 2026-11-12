import type { DescricaoIcon } from "@/components/ui/DescricaoCard";

export type Entrega = {
  step: string;
  title: string;
  /** Texto com trechos em negrito marcados por **...**. */
  body: string;
  icon: DescricaoIcon;
};

// Ícones posicionados como no Figma (relativos ao card de 526×613).
export const entregas: Entrega[] = [
  {
    step: "Passo 1",
    title: "Análise da sua presença digital",
    body: "Estudamos o seu posicionamento atual, **identificando pontos fortes, falhas e oportunidades no seu nicho de mercado**, além dos obstáculos que impedem seu crescimento.",
    icon: { src: "/svg/icone-alvo-clique.svg", width: 338, height: 337.991, x: 146, y: 56 },
  },
  {
    step: "Passo 2",
    title: "Resposta de posicionamento",
    body: "Apresentamos um posicionamento estratégico e exclusivo, **mostrando exatamente o que precisa ser ajustado para aumentar seu faturamento** e eliminar os bloqueios digitais.",
    icon: { src: "/svg/icone-ranking-podio.svg", width: 323, height: 323, x: 154, y: 56 },
  },
  {
    step: "Passo 3",
    title: "Plano de ação personalizado",
    body: "Com base na análise, **entregamos uma estratégia sob medida** para transformar sua presença digital e gerar resultados reais.",
    icon: { src: "/svg/icone-plano-estrategia.svg", width: 332, height: 332, x: 158, y: 72 },
  },
];
