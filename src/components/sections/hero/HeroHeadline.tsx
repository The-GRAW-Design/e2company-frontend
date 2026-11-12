"use client";

import DecryptedText from "@/components/reactbits/DecryptedText";
import FadeContent from "@/components/reactbits/FadeContent";
import MaskedHeading from "@/components/reactbits/MaskedHeading";
import TextType from "@/components/reactbits/TextType";
import { CtaButton } from "@/components/ui/CtaButton";
import { contactHref } from "@/config/site";

/** Gradiente "Gradiente com claro" do Figma, usado como mídia do MaskedHeading. */
const GRADIENT_SRC = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" preserveAspectRatio="none"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="0.55"><stop offset="0.058" stop-color="#3697d0"/><stop offset="1" stop-color="#abdbf8"/></linearGradient></defs><rect width="400" height="100" fill="url(#g)"/></svg>`,
)}`;

/**
 * Bloco de texto do hero (Figma: "TEXTO HEAD").
 * React Bits: MaskedHeading, TextType, DecryptedText e FadeContent.
 */
export function HeroHeadline() {
  return (
    <div className="@container/head relative z-10 w-full max-w-[655px]">
      <h1 className="font-display font-bold">
        {/* 50px em 655px de largura → textScale ≈ 0.0763 */}
        <MaskedHeading
          tag="span"
          text="Crescimento não é sorte."
          src={GRADIENT_SRC}
          align="left"
          weight={700}
          tracking={-0.01}
          lineHeight={1.2}
          textScale={0.0763}
          fillScale={1.15}
          parallax={10}
          drift={8}
          reveal="rise"
          stagger={0.08}
          duration={1}
          trigger="mount"
          className="block"
        />
        <TextType
          as="span"
          text="É estratégia!"
          loop={false}
          initialDelay={700}
          typingSpeed={70}
          cursorCharacter="|"
          cursorColor="#ff820d"
          cursorBlinkDuration={0.6}
          className="mt-[0.12em] block text-gradient-ciano-claro text-[14.04cqw] leading-[1.15] tracking-[-0.01em]"
        />
      </h1>

      <DecryptedText
        text="O time E2 Company, transforma negócios comuns em marcas fortes e lucrativas."
        animateOn="view"
        sequential
        revealDirection="start"
        speed={18}
        characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        encryptedClassName="text-ciano-300"
        parentClassName="mt-2.5 block max-w-[523px] text-[length:clamp(14px,3.05cqw,20px)] leading-[1.3] tracking-[0.07em] text-white uppercase"
      />

      <FadeContent
        effect="focus"
        blur
        duration={1.2}
        delay={0.9}
        trigger="mount"
        className="mt-8 max-w-[535px] text-[length:clamp(16px,3.05cqw,20px)] leading-[1.3] text-white lg:mt-[43px]"
      >
        <p>
          Com <strong className="font-semibold">posicionamento sólido</strong> e estratégias
          inteligentes, criamos crescimento real, previsível e escalável!
        </p>
      </FadeContent>

      <FadeContent
        effect="develop"
        duration={1}
        delay={1.3}
        trigger="mount"
        className="mt-8 lg:mt-[43px]"
      >
        <CtaButton href={contactHref} size="lg">
          Dê seu primeiro passo
        </CtaButton>
      </FadeContent>
    </div>
  );
}
