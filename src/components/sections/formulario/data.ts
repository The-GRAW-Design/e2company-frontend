import { asset } from "@/lib/asset";
export const beneficios = [
  {
    icon: asset("/svg/icone-analise.svg"),
    title: "Análise completa da presença digital",
    text: "Mapeamos sua presença online identificando oportunidades, pontos fracos e fortes da sua página.",
  },
  {
    icon: asset("/svg/icone-diagnostico.svg"),
    title: "Diagnóstico personalizado com oportunidades de crescimento",
    text: "Você recebe um diagnóstico estratégico completo: análise de mercado, tendências do seu nicho e um plano de ação customizado para posicionar sua marca de forma assertiva.",
  },
  {
    icon: asset("/svg/icone-estrategia.svg"),
    title: "Estratégias práticas para aumentar suas vendas",
    text: "Desenvolvemos um plano de execução detalhado incluindo calendário editorial, conteúdos estratégicos e táticas de tráfego pago/orgânico baseados nos dados reais do seu negócio.",
  },
] as const;

export const etapas = [
  {
    icon: { src: asset("/svg/icone-formulario.svg"), size: 14.5336 },
    title: "Preencha o formulário",
    text: "envie suas informações para contato, seus dados são 100% seguros e privados.",
  },
  {
    icon: { src: asset("/svg/icone-atendimento.svg"), size: 15.8961 },
    title: "Primeiro contato",
    text: "Nossa equipe entrará em contato em até 12 horas, guiando você no primeiro passo para construir uma presença digital forte e estruturada.",
  },
] as const;

export const faixasFaturamento = [
  { value: "ate-100k", label: "Até R$ 100 mil" },
  { value: "100k-500k", label: "R$ 100 mil a R$ 500 mil" },
  { value: "500k-1m", label: "R$ 500 mil a R$ 1 milhão" },
  { value: "1m-5m", label: "R$ 1 milhão a R$ 5 milhões" },
  { value: "acima-5m", label: "Acima de R$ 5 milhões" },
];

export const opcoesConsultoria = [
  { value: "sim", label: "Sim" },
  { value: "nao", label: "Não" },
];
