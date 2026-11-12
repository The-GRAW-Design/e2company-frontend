import Image from "next/image";
import FadeContent from "@/components/reactbits/FadeContent";
import { Container } from "@/components/layout/Container";
import { Beneficios } from "./Beneficios";
import { ContatoForm } from "./ContatoForm";
import { asset } from "@/lib/asset";

/**
 * Seção 3 — formulário de contato (Figma: "SEÇÃO 3", caixa de 1640×853).
 * Âncora `#contato` usada por todos os CTAs.
 */
export function Formulario() {
  return (
    <section
      id="contato"
      aria-label="Formulário de contato"
      className="relative z-10 scroll-mt-24 pt-16 lg:pt-[77px]"
    >
      <Container>
        <FadeContent
          effect="dissolve"
          duration={1.2}
          threshold={0.1}
          className="relative isolate overflow-clip rounded-[25px] border-[0.5px] border-cinza-400 bg-grafite-950"
        >
          {/* Linhas decorativas (Figma: Vector 2788:2155, x 59 / y 8 na caixa) */}
          <Image
            src={asset("/svg/form-decoracao.svg")}
            alt=""
            width={698}
            height={845}
            unoptimized
            aria-hidden
            className="pointer-events-none absolute top-[8px] left-[3.6%] -z-10 h-auto w-[42.56%] max-w-none"
          />
          <div className="grid gap-12 px-5 py-12 sm:px-10 lg:grid-cols-[minmax(0,491px)_minmax(0,659px)] lg:justify-between lg:gap-10 lg:py-[61px] lg:pr-[6.65%] lg:pl-[10.98%]">
            <Beneficios />
            <ContatoForm />
          </div>
        </FadeContent>
      </Container>
    </section>
  );
}
