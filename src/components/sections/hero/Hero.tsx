import { Container } from "@/components/layout/Container";
import { HeroBackdrop } from "./HeroBackdrop";
import { HeroHeadline } from "./HeroHeadline";
import { HeroVisual } from "./HeroVisual";

/**
 * Seção 1 — hero. No desktop segue as coordenadas do frame de 1920px
 * (texto em x 266 / y 412, altura útil até y 980).
 */
export function Hero() {
  return (
    <section
      id="topo"
      aria-label="Apresentação"
      className="relative isolate flex flex-col pt-[120px] pb-10 lg:block lg:min-h-[51.04cqw] lg:pt-[21.46cqw] lg:pb-12"
    >
      <HeroBackdrop />
      <HeroVisual />
      <Container className="relative z-10 -order-1 lg:order-none">
        <div className="lg:ml-[6.56cqw]">
          <HeroHeadline />
        </div>
      </Container>
    </section>
  );
}
