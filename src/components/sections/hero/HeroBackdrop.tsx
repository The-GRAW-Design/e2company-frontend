import Image from "next/image";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import { DescricaoCard } from "@/components/ui/DescricaoCard";
import { place, u } from "@/lib/design";
import { HeroLightRays } from "@/webgl/backgrounds/HeroLightRays";
import { HeroGhostCard } from "./HeroGhostCard";
import { HeroTag } from "./HeroTag";
import { asset } from "@/lib/asset";

/**
 * Camada de fundo do hero (Figma: grupo "bg", parte superior). Coordenadas em
 * px do frame de 1920, convertidas com `--u = 100cqw / 1920`.
 */
export function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 [--u:calc(100cqw/1920)]">
      {/* Arcos azuis desfocados (Vector 2788:2023) */}
      <div className="absolute" style={place(-270, -346, 2385, 2845)}>
        <Image
          src={asset("/svg/bg-arcos-topo.svg")}
          alt=""
          fill
          unoptimized
          className="max-w-none"
        />
      </div>

      {/* Brilho central (Ellipse 10) */}
      <div className="absolute mix-blend-screen" style={place(582, 6, 1554, 1554)}>
        <Image src={asset("/svg/bg-glow-hero.svg")} alt="" fill unoptimized />
      </div>

      {/* Raios de luz WebGL (React Bits: LightRays) */}
      <HeroLightRays className="mix-blend-screen" />

      <div className="hidden lg:block">
        <HeroGhostCard blur={4.8} style={place(621, 487)} />
        <HeroGhostCard blur={5.2} style={place(1242, 606)} />

        <AnimatedContent
          trigger="mount"
          delay={1.1}
          stagger={0.2}
          distance={40}
          blur={10}
          duration={1.2}
          className="absolute inset-0"
        >
          {/* Wrapper próprio: o AnimatedContent limpa filter/transform do alvo ao terminar. */}
          <div className="absolute" style={place(689, 710)}>
            <HeroTag tone="laranja">VENHA FAZER PARTE</HeroTag>
          </div>
          <div className="absolute" style={place(953, 228)}>
            <HeroTag size="lg" tone="laranja" blur={8.523}>
              FUNIL COMPLETO
            </HeroTag>
          </div>
        </AnimatedContent>
      </div>

      {/* Degradês que apagam o fundo em direção ao preto (Rectangle 6/7/8) */}
      <div
        className="absolute"
        style={{
          ...place(0, 347, 1920, 1081),
          backgroundImage: "linear-gradient(179.33deg, rgb(5 5 5 / 0) 4.27%, #050505 70.24%)",
        }}
      />
      <div
        className="absolute bg-linear-to-b from-ink/0 to-ink to-[70.66%]"
        style={place(0, 799, 1920, 1081)}
      />
      <div
        className="absolute bg-linear-to-t from-ink/0 to-ink to-[70.66%]"
        style={place(0, 1409, 1920, 1081)}
      />

      {/* Card desfocado na lateral esquerda (Card com desfoque 2788:2037) */}
      <DescricaoCard
        step="Passo 1"
        title="Análise da sua presença digital"
        className="absolute! hidden blur-[10px] lg:block"
        style={{ ...place(-308, 649), width: u(526) }}
      >
        <p>
          Estudamos o seu posicionamento atual, identificando pontos fortes, falhas e oportunidades
          no seu nicho de mercado, além dos obstáculos que impedem seu crescimento.
        </p>
      </DescricaoCard>
    </div>
  );
}
