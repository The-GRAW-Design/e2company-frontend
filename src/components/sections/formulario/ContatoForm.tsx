"use client";

import Image from "next/image";
import { useId, useState, type FormEvent, type ReactNode } from "react";
import BlurText from "@/components/reactbits/BlurText";
import ElectricBorder from "@/components/reactbits/ElectricBorder";
import GlideSelect from "@/components/reactbits/GlideSelect";
import JellyRadio from "@/components/reactbits/JellyRadio";
import { CtaButton } from "@/components/ui/CtaButton";
import { cn } from "@/lib/cn";
import { faixasFaturamento, opcoesConsultoria } from "./data";
import { asset } from "@/lib/asset";

const pill =
  "flex h-[52px] w-full items-center rounded-[41px] border border-cinza-500 px-[26px] sm:px-[35px] transition-colors focus-within:border-ciano-200";
const inputClass =
  "h-full w-full bg-transparent text-base text-white uppercase outline-none placeholder:text-cinza-500";

function Label({ htmlFor, id, children }: { htmlFor?: string; id?: string; children: ReactNode }) {
  return (
    <label htmlFor={htmlFor} id={id} className="text-sm text-white uppercase sm:text-base">
      {children}
      <Image
        src={asset("/svg/ponto-obrigatorio.svg")}
        alt=""
        width={4}
        height={4}
        unoptimized
        className="ml-[5px] inline-block align-middle"
      />
      <span className="sr-only">(obrigatório)</span>
    </label>
  );
}

type Status = "idle" | "sent";

/**
 * Formulário de contato (Figma: Frame 64 / Frame 26).
 * React Bits: ElectricBorder (painel), GlideSelect (faturamento),
 * JellyRadio (consultoria anterior) e BlurText (mensagem de sucesso).
 *
 * Não há backend definido no design: o envio valida no cliente e mostra a
 * confirmação. Para enviar de fato, conecte `onSubmit` a uma Server Action
 * ou rota de API.
 */
export function ContatoForm() {
  const ids = useId();
  const [faturamento, setFaturamento] = useState("");
  // O JellyRadio sempre mantém uma opção ativa; "Não" é o padrão explícito.
  const [consultoria, setConsultoria] = useState("nao");
  const [erro, setErro] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    if (!faturamento) {
      setErro("Selecione o faturamento anual da sua empresa.");
      return;
    }
    setErro(null);
    setStatus("sent");
  }

  return (
    <ElectricBorder
      color="#ff820d"
      glowColor="#ffb25a"
      borderRadius={50}
      speed={0.6}
      chaos={0.35}
      thickness={1.2}
      strands={2}
      glow={0.5}
      intensity={0.55}
      arcs={0}
      flicker={0.2}
      cursorRadius={120}
      className="w-full self-start"
    >
      <div className="rounded-[50px] bg-grafite-900 px-5 py-12 sm:px-[62px] sm:py-[84px]">
        {status === "sent" ? (
          <div
            className="flex min-h-[470px] flex-col items-center justify-center gap-4 text-center"
            role="status"
          >
            <BlurText
              text="Recebemos seus dados!"
              animateBy="words"
              direction="bottom"
              delay={120}
              className="font-display text-3xl font-bold text-white"
            />
            <p className="max-w-[360px] text-base text-cinza-400">
              Nossa equipe vai entrar em contato em até 12 horas para dar o primeiro passo com você.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-end gap-[19px]"
            aria-label="Formulário de contato"
          >
            <div className={pill}>
              <label htmlFor={`${ids}-nome`} className="sr-only">
                Nome completo
              </label>
              <input
                id={`${ids}-nome`}
                name="nome"
                required
                autoComplete="name"
                placeholder="Nome completo"
                className={inputClass}
              />
            </div>
            <div className={pill}>
              <label htmlFor={`${ids}-email`} className="sr-only">
                E-mail
              </label>
              <input
                id={`${ids}-email`}
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Email completo"
                className={inputClass}
              />
            </div>
            <div className={pill}>
              <label htmlFor={`${ids}-telefone`} className="sr-only">
                Telefone com DDD
              </label>
              <input
                id={`${ids}-telefone`}
                name="telefone"
                type="tel"
                inputMode="tel"
                required
                autoComplete="tel"
                placeholder="55 (00) 0000-0000"
                pattern="[0-9()+\s-]{10,20}"
                className={inputClass}
              />
            </div>
            <div className={pill}>
              <label htmlFor={`${ids}-empresa`} className="sr-only">
                Nome da empresa
              </label>
              <input
                id={`${ids}-empresa`}
                name="empresa"
                required
                autoComplete="organization"
                placeholder="Nome da empresa"
                className={inputClass}
              />
            </div>

            <div className="flex w-full flex-col gap-[7px]">
              <Label id={`${ids}-faturamento`}>Faturamento anual da sua empresa</Label>
              <div className={cn(pill, "px-2 sm:px-[22px]")}>
                <GlideSelect
                  options={faixasFaturamento}
                  value={faturamento}
                  onChange={(value) => setFaturamento(value)}
                  placeholder="SELECIONE A FAIXA"
                  ariaLabel="Faturamento anual da sua empresa"
                  surfaceColor="#1c1c1c"
                  highlightColor="#323232"
                  accentColor="#ff820d"
                  textColor="#ffffff"
                  size="md"
                  radius={18}
                  menuWidth={300}
                  className="w-full [&_button[role=combobox]]:w-full [&_button[role=combobox]]:justify-between [&_button[role=combobox]]:bg-transparent!"
                />
              </div>
              <input type="hidden" name="faturamento" value={faturamento} />
            </div>

            <div className="flex w-full flex-col gap-[7px]">
              <Label id={`${ids}-consultoria`}>Já participou de outra consultoria</Label>
              <div className={cn(pill, "px-2 sm:px-[22px]")}>
                <JellyRadio
                  items={opcoesConsultoria}
                  value={consultoria}
                  onChange={(value) => setConsultoria(value)}
                  ariaLabel="Já participou de outra consultoria"
                  chipColor="#323232"
                  activeColor="#ff820d"
                  textColor="#a9a9a9"
                  activeTextColor="#ffffff"
                  size="sm"
                  radius={20}
                />
              </div>
              <input type="hidden" name="consultoria" value={consultoria} />
            </div>

            {erro && (
              <p role="alert" className="w-full text-sm text-laranja-300">
                {erro}
              </p>
            )}

            <CtaButton type="submit" block magnetic={false}>
              Entre em contato
            </CtaButton>
          </form>
        )}
      </div>
    </ElectricBorder>
  );
}
