import { Header } from "@/components/layout/Header";
import { Consultoria } from "@/components/sections/consultoria/Consultoria";
import { Formulario } from "@/components/sections/formulario/Formulario";
import { Hero } from "@/components/sections/hero/Hero";

export default function Home() {
  return (
    <>
      <Header />
      {/* `@container` habilita as unidades cqw usadas para seguir o grid de 1920px do Figma. */}
      <main id="conteudo" className="@container relative overflow-x-clip">
        <Hero />
        <Consultoria />
        <Formulario />
      </main>
    </>
  );
}
