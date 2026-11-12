import Image from "next/image";
import type { CSSProperties } from "react";
import { u } from "@/lib/design";

/**
 * Fundo do FAQ reproduzindo o grupo "bg" do Figma. Os elementos do design
 * são posicionados em relação ao frame inteiro (1920×8772); por isso uma
 * caixa com esse tamanho é ancorada em y 6498 (topo desta seção) e as ondas
 * usam exatamente os insets/rotações do design, com container queries.
 */
const ONDAS: {
  src: string;
  inset: string;
  w: string;
  h: string;
  rotate: string;
  flip?: boolean;
  pad: string;
}[] = [
  {
    src: "/svg/bg-onda-1.svg",
    inset: "69.33% -0.53% -2.63% -30.78%",
    w: "hypot(-86.4922cqw, 9.63111cqh)",
    h: "hypot(-13.5078cqw, -90.3689cqh)",
    rotate: "172.65deg",
    pad: "-3.76% -4.55%",
  },
  {
    src: "/svg/bg-onda-2.svg",
    inset: "70.62% -72.92% -9.32% -6.88%",
    w: "hypot(40.8755cqw, -49.6751cqh)",
    h: "hypot(59.1245cqw, 50.3249cqh)",
    rotate: "-50.07deg",
    pad: "-3.76% -4.55%",
  },
  {
    src: "/svg/bg-onda-3.svg",
    inset: "19.65% -134.48% -1.94% -125.1%",
    w: "hypot(-57.0682cqw, -33.9226cqh)",
    h: "hypot(42.9318cqw, -66.0774cqh)",
    rotate: "-148.14deg",
    pad: "-1.78% -2.16%",
  },
  {
    src: "/svg/bg-onda-4.svg",
    inset: "59.93% 28.69% 1.94% -91.41%",
    w: "hypot(63.6466cqw, -28.0463cqh)",
    h: "hypot(-36.3534cqw, -71.9537cqh)",
    rotate: "154.74deg",
    flip: true,
    pad: "-3.76% -4.55%",
  },
];

export function FaqBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden [--u:calc(100cqw/1920)]"
    >
      {/* Rectangle 12: painel em degradê (x -44, y 6498, 2083×1513, raio 50) */}
      <div
        className="absolute"
        style={{
          left: u(-44),
          top: 0,
          width: u(2083),
          height: u(1513),
          borderRadius: u(50),
          backgroundImage: "linear-gradient(169.3deg, #000 26.38%, #2588c3 114%)",
        }}
      />

      {/* Frame 1920×8772 do Figma, com y 6498 alinhado ao topo da seção */}
      <div className="absolute left-0" style={{ top: u(-6498), width: u(1920), height: u(8772) }}>
        {ONDAS.map((onda) => (
          <div
            key={onda.src}
            className="absolute flex items-center justify-center"
            style={{ inset: onda.inset, containerType: "size" } as CSSProperties}
          >
            <div
              className="flex-none"
              style={{
                width: onda.w,
                height: onda.h,
                transform: `rotate(${onda.rotate})${onda.flip ? " scaleX(-1)" : ""}`,
              }}
            >
              <div className="relative size-full">
                <div className="absolute" style={{ inset: onda.pad }}>
                  <Image src={onda.src} alt="" fill unoptimized className="max-w-none" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
