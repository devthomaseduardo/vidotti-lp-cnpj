# Vidotti Contabilidade — landing de abertura de CNPJ

[![CI](https://github.com/devthomaseduardo/vidotti-lp-cnpj/actions/workflows/ci.yml/badge.svg)](https://github.com/devthomaseduardo/vidotti-lp-cnpj/actions/workflows/ci.yml)

Landing page da **Vidotti Contabilidade** (Campinas/SP, desde 2002) para abertura de CNPJ, desenquadramento do MEI, troca de contador e orientação tributária. O objetivo é transformar tráfego de campanha e busca em conversas qualificadas no WhatsApp, sabendo de qual campanha e de qual botão cada contato veio.

**No ar:** https://vidotti-lp-cnpj.vercel.app

| Desktop                                     | Celular                                                              |
| ------------------------------------------- | -------------------------------------------------------------------- |
| ![Página no desktop](docs/img/desktop.webp) | <img src="docs/img/mobile.webp" alt="Página no celular" width="260"> |

## Meu papel

Desenvolvedor do projeto: interface, conteúdo das seções, rastreamento de campanha, SEO técnico (dados estruturados, sitemap, `llms.txt`), pipeline de build, testes e CI.

## Decisões técnicas

- **Configuração única em `config.mjs`.** Nome, contato, WhatsApp, páginas e UTMs ficam em um só arquivo. `npm run generate` deriva dele o `src/generated/site-config.ts`, o manifest e o `llms.txt`, e a CI falha se os arquivos gerados estiverem desatualizados.
- **WhatsApp travado por validação.** O build recusa número diferente do oficial ou link quebrado, e o teste confirma o formato internacional (`55` + DDD).
- **Atribuição de campanha sem backend.** `src/lib/conversion.ts` lê os UTMs da URL, guarda na sessão e usa a origem do clique (`utm_content`) quando não há campanha, para que todo contato no WhatsApp chegue com contexto. Eventos vão para Google Tag Manager/gtag e PostHog quando presentes.
- **SSR com TanStack Start.** A página chega pronta para buscadores. `src/server.ts` trata o erro de SSR que o h3 engole e devolve uma página de erro em HTML em vez de um JSON genérico.
- **Dados estruturados seguros.** `AccountingService` e `FAQPage` são serializados por `toJsonLd`, que escapa `<` para nenhum texto fechar a tag `<script>`.

## Stack

React 19, TypeScript, TanStack Start e Router (SSR), Vite, Tailwind CSS 4, Radix (accordion e dialog), Lucide, Vitest e Vercel.

## Como rodar

Requisitos: Node 20+ e npm.

```bash
git clone https://github.com/devthomaseduardo/vidotti-lp-cnpj.git
cd vidotti-lp-cnpj
npm install
npm run dev
```

| Comando             | O que faz                                                          |
| ------------------- | ------------------------------------------------------------------ |
| `npm run dev`       | ambiente local                                                     |
| `npm run build`     | valida a configuração, regenera os arquivos públicos e faz o build |
| `npm run generate`  | regenera os arquivos derivados de `config.mjs`                     |
| `npm run lint`      | ESLint + Prettier                                                  |
| `npm run typecheck` | checagem de tipos                                                  |
| `npm test`          | testes (Vitest)                                                    |
| `npm run verify`    | lint + build                                                       |

## Testes

`src/test/` cobre o que quebraria a conversão sem ninguém perceber:

- link do WhatsApp com o número oficial e mensagem montada só com os campos preenchidos;
- prioridade dos UTMs (URL, depois sessão, depois padrão) e persistência entre cliques;
- validação da configuração central;
- `FAQPage` com todas as perguntas e escape do JSON-LD.

A CI roda `generate` (e confere que nada mudou), lint, tipos, testes e build em cada PR.

## Configuração central

Os dados institucionais e técnicos principais ficam em:

```text
config.mjs
```

Esse arquivo concentra, entre outros dados:

- nome da empresa;
- URL pública da landing page;
- site institucional;
- telefone e link oficial do WhatsApp;
- e-mail;
- Instagram;
- endereço;
- páginas indexáveis;
- serviços;
- parâmetros de campanha.

O WhatsApp oficial está travado por validação para evitar publicação com número incorreto.

## URL pública

A URL pode ser definida pelas variáveis:

```env
SITE_URL=https://seu-dominio.com.br
```

ou:

```env
VITE_SITE_URL=https://seu-dominio.com.br
```

Na Vercel, quando essas variáveis não estão presentes, o projeto também considera `VERCEL_PROJECT_PRODUCTION_URL` e `VERCEL_URL`.

Sem configuração externa, o fallback atual é:

```text
https://vidotti-lp-cnpj.vercel.app
```

## Pipeline de build

O build de produção segue esta ordem:

```text
config.mjs
   ↓
clean.mjs
   ↓
generate.mjs
   ↓
Vite build
```

O arquivo `build.mjs` coordena esse processo e impede que uma configuração inválida siga para produção.

## Arquivos públicos gerados e mantidos

O projeto utiliza arquivos técnicos para SEO, descoberta, PWA e infraestrutura:

```text
public/
├── robots.txt
├── sitemap.xml
├── manifest.webmanifest
├── sw.js
├── llms.txt
├── humans.txt
└── gtag-verify.html
```

### `robots.txt`

Controla acesso de crawlers e aponta para o sitemap.

### `sitemap.xml`

Lista as páginas públicas indexáveis do projeto.

### `manifest.webmanifest`

Define os metadados da aplicação instalável/PWA.

### `sw.js`

Service Worker responsável pelo cache de recursos e comportamento básico offline.

### `llms.txt`

Fornece contexto público resumido sobre a Vidotti e seus serviços para agentes e sistemas automatizados.

### `humans.txt`

Registra informações institucionais e técnicas do projeto.

### `gtag-verify.html`

Arquivo técnico reservado para fluxo de verificação relacionado ao Google. Ele não deve ser usado como conteúdo indexável.

## Estrutura principal

```text
src/
├── components/
│   └── landing/
│       ├── Benefits.tsx
│       ├── CompanyTypes.tsx
│       ├── FAQ.tsx
│       ├── FinalCTA.tsx
│       ├── FloatingWhatsApp.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── HowItWorks.tsx
│       ├── Navbar.tsx
│       └── WhatsAppLink.tsx
├── lib/
└── routes/
```

A landing page é dividida em componentes independentes para facilitar manutenção e ajustes comerciais sem concentrar toda a interface em um único arquivo.

## WhatsApp e conversão

Todos os CTAs de WhatsApp devem usar o componente centralizado do projeto em vez de URLs escritas manualmente.

Número oficial:

```text
5519993726183
```

Link base:

```text
https://api.whatsapp.com/send/?phone=5519993726183&text&type=phone_number&app_absent=0&utm_source=ig
```

As mensagens podem variar conforme a origem do CTA, mas o destino deve permanecer o mesmo.

## SEO

A landing inclui:

- title e description específicos;
- canonical;
- Open Graph;
- Twitter Card;
- JSON-LD de `AccountingService`;
- JSON-LD de `FAQPage`;
- sitemap;
- robots;
- conteúdo local voltado para Campinas/SP;
- política de privacidade indexável.

Antes de trocar o domínio definitivo, atualize a URL pública pelas variáveis de ambiente para que canonical, sitemap e demais arquivos gerados apontem para o domínio correto.

## Privacidade

A política está disponível em:

```text
/politica-de-privacidade
```

O formulário de diagnóstico solicita consentimento antes de continuar o atendimento pelo WhatsApp.

## Deploy

O projeto está preparado para deploy na Vercel.

Para produção, o comando de build deve permanecer:

```bash
npm run build
```

Não é recomendado substituir esse comando por `vite build` diretamente, pois o pipeline também valida a configuração e atualiza os arquivos públicos antes da compilação.

## Checklist antes da entrega

- confirmar telefone do WhatsApp;
- confirmar domínio definitivo;
- executar `npm run verify`;
- validar `/robots.txt`;
- validar `/sitemap.xml`;
- validar `/manifest.webmanifest`;
- validar `/politica-de-privacidade`;
- testar CTAs no desktop e no mobile;
- testar formulário de diagnóstico;
- revisar links institucionais e contato.

## Contato institucional

**Vidotti Contabilidade**  
Campinas — SP  
WhatsApp: (19) 99372-6183  
E-mail: contato@vidotticontabilidade.com.br  
Site institucional: https://vidotticonsultoria.com.br
