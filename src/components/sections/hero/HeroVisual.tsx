import Image from "next/image";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import Magnet from "@/components/reactbits/Magnet";
import { place } from "@/lib/design";
import { HeroTag } from "./HeroTag";
import { asset } from "@/lib/asset";

const tagMagnet = { padding: 90, magnetStrength: 3, maxOffset: 18 } as const;

/**
 * Foto da equipe com brilhos e etiquetas (Figma: "BG MOBILE" + "ELEMENTOS TELA").
 * O bloco tem 1221.53×1220.41 no design; dentro dele `--u = 100cqw / 1221.53`.
 * React Bits: AnimatedContent (entrada) e Magnet (etiquetas atraídas pelo cursor).
 */
export function HeroVisual() {
  return (
    // Desktop: x 700, y 25, largura 1221.53 no frame de 1920 (36.458cqw / 1.302cqw / 63.621cqw).
    <div className="@container relative mx-auto mt-12 aspect-[1221.53/1220.41] w-[76%] max-w-[640px] sm:w-[88%] lg:absolute lg:top-[1.302cqw] lg:left-[36.458cqw] lg:mt-0 lg:w-[63.621cqw] lg:max-w-none">
      <AnimatedContent
        trigger="mount"
        distance={90}
        scale={0.94}
        blur={14}
        duration={1.5}
        delay={0.2}
        className="absolute inset-0 [--u:calc(100cqw/1221.53)]"
      >
        <div className="absolute mix-blend-screen" style={place(228.9, 195.4, 782.72, 782.72)}>
          <Image src={asset("/svg/hero-glow-menor.svg")} alt="" fill unoptimized aria-hidden />
        </div>
        <div className="absolute mix-blend-screen" style={place(107.19, 107.19, 1007.15, 1007.15)}>
          <Image src={asset("/svg/hero-glow-maior.svg")} alt="" fill unoptimized aria-hidden />
        </div>
        <div
          className="absolute overflow-hidden rounded-full"
          style={place(228.9, 246.76, 961.37, 936.8)}
        >
          <Image
            src={asset("/images/hero-camada-brilho.png")}
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 80vw"
            className="object-cover"
            aria-hidden
          />
        </div>
        <Image
          src={asset("/images/hero-equipe.png")}
          alt="Equipe da E² Company"
          fill
          priority
          sizes="(min-width: 1024px) 64vw, 100vw"
          className="object-cover"
        />
      </AnimatedContent>

      <AnimatedContent
        trigger="mount"
        delay={1.2}
        stagger={0.18}
        distance={50}
        scale={0.7}
        blur={8}
        duration={1}
        ease="back.out(1.6)"
        className="absolute inset-0 [--u:calc(100cqw/1221.53)]"
      >
        <Magnet {...tagMagnet} style={{ position: "absolute", ...place(-34, 213) }}>
          <HeroTag>MAIS VENDAS</HeroTag>
        </Magnet>
        <Magnet {...tagMagnet} style={{ position: "absolute", ...place(806, 491) }}>
          <HeroTag size="sm" tone="laranja">
            DA CAPTAÇÃO À VENDA
          </HeroTag>
        </Magnet>
        <Magnet {...tagMagnet} style={{ position: "absolute", ...place(550, 651) }}>
          <HeroTag blur={1.25}>RESULTADOS EM 30 DIAS</HeroTag>
        </Magnet>
      </AnimatedContent>
    </div>
  );
}
