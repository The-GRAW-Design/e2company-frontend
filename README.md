# E² Company — site institucional

Landing page de uma tela da E² Company, implementada a partir do Figma
(`SITE-DEVELPMENT`, frame **Desktop** 1920×8772).

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (configuração CSS-first em `src/app/globals.css`)
- **GSAP** + **ScrollTrigger** e **Lenis** (rolagem suave no mesmo relógio do `gsap.ticker`)
- **React Bits** via registro shadcn (`@react-bits`) — todas as animações do site
- Fontes **Sora** (títulos) e **Inter** (texto) via `next/font`

## Scripts

```bash
npm run dev           # ambiente de desenvolvimento
npm run build         # exportação estática em out/
npm run start         # serve a pasta out/ localmente
npm run lint          # ESLint
npm run format        # Prettier (com ordenação de classes do Tailwind)
```

## Estrutura

```
src/
├── app/                  # layout, página, fontes, tokens e gradientes (globals.css)
├── animations/           # registro do GSAP e presets de movimento
├── components/
│   ├── layout/           # Header, Container, botão de próxima seção
│   ├── reactbits/        # componentes instalados do registro @react-bits
│   ├── sections/         # uma pasta por seção do Figma
│   └── ui/               # CtaButton, Chip, StepCard, DescricaoCard...
├── config/site.ts        # nome, navegação e âncoras
├── hooks/                # useReducedMotion, useMediaQuery, useNearViewport...
├── lib/                  # cn() e unidades proporcionais ao Figma (design.ts)
├── providers/            # Lenis + ScrollTrigger
└── webgl/                # fundos WebGL (React Bits) com montagem preguiçosa
public/
├── images/               # fotos exportadas do Figma
└── svg/                  # ícones, logos e decorações exportados do Figma
```

### Fidelidade ao Figma

Elementos decorativos usam a unidade `--u = 100cqw / 1920` (container query
no `<main>`), então posições e tamanhos seguem o frame de 1920px em qualquer
largura de desktop. Abaixo de `lg`, as seções reorganizam o conteúdo para
mobile.

## Animações (React Bits)

| Seção       | Componentes                                                                                         |
| ----------- | --------------------------------------------------------------------------------------------------- |
| Global      | ClickSpark, Magnet, GlareHover                                                                      |
| Header      | AnimatedContent, DecryptedText, StarBorder                                                          |
| Hero        | MaskedHeading, TextType, DecryptedText, FadeContent, AnimatedContent, Magnet, **LightRays** (WebGL) |
| Consultoria | SplitText, SpotlightCard, AnimatedContent                                                           |
| Formulário  | ShinyText, GradientText, CountUp, ElectricBorder, GlideSelect, JellyRadio, BlurText, FadeContent    |
| Metodologia | ScrollFloat, GlareHover, BorderGlow, AnimatedContent, FadeContent                                   |
| Diagnóstico | FoldText, BlurText, SpringCheck, ShinyText, **SideRays** (WebGL)                                    |
| Propósito   | GradientText, ScrollExpand, AnimatedContent                                                         |
| Crescimento | EchoText, ScrollReveal, StarBorder, LogoLoop                                                        |
| FAQ         | FuzzyText, LogoLoop, **FloatingLines** (WebGL)                                                      |
| CTA final   | **GridDistortion** (WebGL), Noise, Shuffle, BlurText, SpecularButton, Magnet                        |

Para adicionar outro componente:

```bash
npx shadcn@latest add @react-bits/<Nome>-TS-TW
```

O servidor MCP do shadcn já está configurado em `.mcp.json`
(`npx shadcn@latest mcp init --client claude`).

Os componentes em `src/components/reactbits/` são código de terceiros (ficam
fora do ESLint e do Prettier). Três deles têm patches locais comentados:
`ScrollFloat` (limpeza de transform ao reexecutar o efeito), `ScrollReveal`
(tag configurável e texto acessível) e `SpecularButton` (não força a perda do
contexto WebGL na desmontagem).

## Acessibilidade e desempenho

- `prefers-reduced-motion` desliga o Lenis e os fundos WebGL.
- Fundos WebGL montam só quando a seção se aproxima da tela e pausam fora dela.
- `ScrollTrigger.refresh()` roda quando fontes e layout mudam de altura.
- Fotos em WebP no tamanho de exibição (o export estático não otimiza imagens).

## Deploy (GitHub Pages)

O site é exportado como HTML estático (`output: "export"` em `next.config.ts`)
e publicado pelo workflow `.github/workflows/deploy.yml` a cada push na
`main`, em `https://the-graw-design.github.io/e2company-frontend/`.

- No CI, `NEXT_PUBLIC_BASE_PATH=/e2company-frontend` define o `basePath`.
- Caminhos de `public/` usam o helper `asset()` (`src/lib/asset.ts`), porque o
  `next/image` e os componentes React Bits não acrescentam o `basePath`.
- Configuração única no repositório: **Settings → Pages → Source: GitHub
  Actions**.

Para testar a versão do Pages localmente (Git Bash):

```bash
MSYS_NO_PATHCONV=1 NEXT_PUBLIC_BASE_PATH=/e2company-frontend npm run build
```

## Formulário

O design não define backend. Hoje o envio valida no cliente e mostra a
confirmação (`src/components/sections/formulario/ContatoForm.tsx`). Para
receber os contatos, conecte o `onSubmit` a uma Server Action, rota de API ou
serviço de e-mail/CRM.

## Fluxo git

- `main`: produção (recebe `develop` apenas em releases, com tag semântica)
- `develop`: integração
- `features/<nome>`: uma branch por feature, com merge `--no-ff` em `develop`
- Commits no padrão Conventional Commits
