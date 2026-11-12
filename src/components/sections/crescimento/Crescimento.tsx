"use client";

import Image from "next/image";
import EchoText from "@/components/reactbits/EchoText";
import LogoLoop, { type LogoItem } from "@/components/reactbits/LogoLoop";
import ScrollReveal from "@/components/reactbits/ScrollReveal";
import StarBorder from "@/components/reactbits/StarBorder";
import { Container } from "@/components/layout/Container";
import { Chip } from "@/components/ui/Chip";
import { asset } from "@/lib/asset";

const LINHAS_TITULO = ["A hora de", "crescer é", "agora"] as const;

const PARAGRAFOS = [
  "Pare de adiar o crescimento que o seu negócio merece. Enquanto você espera, seus concorrentes estão implementando estratégias que geram resultado.",
  "A diferença entre estar estagnado e crescer de forma previsível está em uma única decisão: buscar quem realmente sabe fazer acontecer.",
  "A E² Company já ajudou diversas empresas a saírem do improviso e a construírem sistemas sólidos de crescimento digital.",
] as const;

// Logo vertical branco (Figma: Logo E2 Company, 354×326 na faixa).
const LOGOS: LogoItem[] = Array.from({ length: 5 }, (_, i) => ({
  node: (
    <Image
      src={asset("/svg/logo-e2-vertical-branco.svg")}
      alt=""
      width={607.58}
      height={557.52}
      unoptimized
      className="h-[clamp(150px,16.98cqw,326px)] w-auto max-w-none"
    />
  ),
  ariaLabel: `E² Company — Nosso negócio é escalar o seu! (${i + 1})`,
}));

const chipStar = {
  as: "span" as const,
  radius: 3,
  thickness: 1,
  duration: 4.5,
  color: "#ffffff",
  trailColor: "#abdbf8",
  glow: 0.7,
  hover: "none" as const,
  clickPulse: false,
  className: "p-0! bg-transparent! cursor-default",
  backgroundColor: "transparent",
};

/**
 * Seção 6 — "A hora de crescer é agora" + faixa de logos.
 * React Bits: EchoText (título com ecos), ScrollReveal (parágrafos revelados
 * pela rolagem), StarBorder (selos) e LogoLoop (faixa infinita de logos).
 */
export function Crescimento() {
  return (
    <section aria-label="A hora de crescer é agora" className="relative z-10 pt-24 lg:pt-[6.5cqw]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,528px)_minmax(0,613px)] lg:justify-between lg:pr-[11.3%] lg:pl-[11.16%]">
          <div className="relative font-display text-[length:clamp(44px,5.1cqw,97.84px)]">
            <h2 className="flex flex-col leading-[1.16] font-bold uppercase">
              {LINHAS_TITULO.map((linha, i) => (
                <EchoText
                  key={linha}
                  text={linha}
                  echoes={7}
                  lag={0.18}
                  offset={28}
                  direction="right"
                  fade={0.6}
                  blur={4}
                  tint="#2588c3"
                  mode="both"
                  trail="pointer"
                  duration={900 + i * 180}
                  fontSize="inherit"
                  fontWeight={700}
                  className="leading-[1.16]! tracking-[-0.06em]! [&_[data-echo-index='0']]:text-gradient-ciano"
                />
              ))}
            </h2>
            {/* Selo desfocado sobre o título (Figma: 2788:2107, blur 3.6) */}
            <div
              aria-hidden
              className="absolute hidden lg:block"
              style={{ left: "3.5em", top: "3.15em" }}
            >
              <Chip variant="ciano" blur={3.6}>
                Agora é a sua vez
              </Chip>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-[26px]">
              {PARAGRAFOS.map((texto) => (
                <ScrollReveal
                  key={texto}
                  as="p"
                  baseOpacity={0.12}
                  enableBlur
                  blurStrength={6}
                  baseRotation={0}
                  containerClassName="my-0!"
                  textClassName="text-lg! sm:text-2xl! leading-normal! font-normal! text-white"
                >
                  {texto}
                </ScrollReveal>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-[9px]">
              <StarBorder {...chipStar}>
                <Chip variant="ciano">Agora é a sua vez</Chip>
              </StarBorder>
              <StarBorder {...chipStar} trailColor="#ffb25a" duration={5.5}>
                <Chip variant="laranja" className="border-transparent">
                  Vamos juntos elevar a sua empresa ao próximo nível.
                </Chip>
              </StarBorder>
            </div>
          </div>
        </div>
      </Container>

      <div className="mt-8 lg:mt-0">
        <LogoLoop
          logos={LOGOS}
          speed={55}
          direction="left"
          gap={53}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#050505"
          ariaLabel="Marca E² Company"
        />
      </div>
    </section>
  );
}
