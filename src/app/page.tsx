import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/hero/Hero";

export default function Home() {
  return (
    <>
      <Header />
      {/* `@container` habilita as unidades cqw usadas para seguir o grid de 1920px do Figma. */}
      <main id="conteudo" className="@container relative">
        <Hero />
      </main>
    </>
  );
}
