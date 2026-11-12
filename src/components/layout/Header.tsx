"use client";

import Image from "next/image";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import DecryptedText from "@/components/reactbits/DecryptedText";
import StarBorder from "@/components/reactbits/StarBorder";
import { contactHref, navLinks, siteConfig } from "@/config/site";
import { Container } from "./Container";
import { asset } from "@/lib/asset";

/**
 * Header fixo (Figma: "SEÇÃO 1" > Frame 7 + Hot bar + Botão).
 * React Bits: AnimatedContent (entrada), DecryptedText (links) e StarBorder (CTA).
 */
export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <AnimatedContent
        trigger="mount"
        reverse
        distance={60}
        duration={1}
        blur={6}
        ease="power3.out"
        className="border-b-[0.3px] border-white/80 bg-[rgb(4_4_4/0.29)] shadow-card backdrop-blur-md"
      >
        <Container className="flex h-[72px] items-center justify-between gap-6 lg:h-[100px]">
          <a href="#topo" aria-label={`${siteConfig.name} — voltar ao início`} className="shrink-0">
            <Image
              src={asset("/svg/logo-e2-company.svg")}
              alt={siteConfig.name}
              width={211.892}
              height={47.9944}
              priority
              unoptimized
              className="h-auto w-[148px] lg:w-[211.892px]"
            />
          </a>

          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-16 xl:gap-28 2xl:gap-[175px]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-label={link.label}
                    className="text-[10px] tracking-[1px] text-white uppercase transition-colors hover:text-ciano-200"
                  >
                    <DecryptedText
                      text={link.label}
                      animateOn="hover"
                      speed={35}
                      maxIterations={8}
                      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%"
                      encryptedClassName="text-laranja"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <StarBorder
            as="a"
            href={contactHref}
            radius={30}
            thickness={1.2}
            duration={5}
            color="#ffffff"
            trailColor="#abdbf8"
            glow={0.8}
            hover="brighten"
            backgroundColor="linear-gradient(162deg, #ff820d 11.49%, #e24f00 114.91%)"
            textColor="#ffffff"
            borderColor="rgb(255 255 255 / 0.15)"
            className="gap-[6.7px]! px-2.5! py-[10.7px]! text-sm! font-semibold! whitespace-nowrap sm:text-base!"
          >
            Entre em contato
            <Image
              src={asset("/svg/seta-pequena.svg")}
              alt=""
              width={22.6667}
              height={22.6667}
              unoptimized
              aria-hidden
            />
          </StarBorder>
        </Container>
      </AnimatedContent>
    </header>
  );
}
