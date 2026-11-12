import ClickSpark from "@/components/reactbits/ClickSpark";
import TargetCursor from "@/components/reactbits/TargetCursor";
import { Header } from "@/components/layout/Header";
import { NextSectionButton } from "@/components/layout/NextSectionButton";
import { Consultoria } from "@/components/sections/consultoria/Consultoria";
import { CtaFinal } from "@/components/sections/cta-final/CtaFinal";
import { Crescimento } from "@/components/sections/crescimento/Crescimento";
import { Diagnostico } from "@/components/sections/diagnostico/Diagnostico";
import { Faq } from "@/components/sections/faq/Faq";
import { Formulario } from "@/components/sections/formulario/Formulario";
import { Hero } from "@/components/sections/hero/Hero";
import { Proposito } from "@/components/sections/proposito/Proposito";
import { Metodologia } from "@/components/sections/metodologia/Metodologia";

export default function Home() {
  return (
    // React Bits: ClickSpark — faíscas nas cores da marca a cada clique.
    <ClickSpark
      sparkColor={["#ff820d", "#abdbf8", "#2588c3"]}
      sparkSize={10}
      sparkRadius={26}
      sparkCount={10}
      duration={480}
      glow={0.6}
    >
      {/* React Bits: TargetCursor — mira que segue o cursor e trava em links e botões (só mouse). */}
      <TargetCursor
        targetSelector="a, button, [role='checkbox'], [role='radio'], [role='combobox']"
        cursorColor="#ffffff"
        cursorColorOnTarget="#ff820d"
        blendMode="normal"
        size={32}
        cornerSize={10}
        thickness={2}
        padding={6}
        dotSize={4}
        spinDuration={3}
      />
      <Header />
      <NextSectionButton />
      {/* `@container` habilita as unidades cqw usadas para seguir o grid de 1920px do Figma. */}
      <main id="conteudo" className="@container relative overflow-x-clip">
        <Hero />
        <Consultoria />
        <Formulario />
        <Metodologia />
        <Diagnostico />
        <Proposito />
        <Crescimento />
        <Faq />
        <CtaFinal />
      </main>
    </ClickSpark>
  );
}
