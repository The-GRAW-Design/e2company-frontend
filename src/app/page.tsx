import { Header } from "@/components/layout/Header";
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
    <>
      <Header />
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
    </>
  );
}
