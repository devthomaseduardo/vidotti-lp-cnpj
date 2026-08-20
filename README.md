# Vidotti Contabilidade — Landing Page CNPJ

Landing page institucional e de conversão da Vidotti Contabilidade, focada em abertura de CNPJ, desenquadramento do MEI, troca de contador e orientação tributária para empresas.

Produção: https://vidotti-lp-cnpj.vercel.app/

## Objetivo

O projeto foi construído para transformar tráfego de campanhas e buscas em contatos qualificados pelo WhatsApp, oferecendo uma jornada simples de diagnóstico inicial, prova de confiança, serviços, dúvidas frequentes e contato direto.

O número oficial usado em todos os CTAs da landing page é:

```text
(19) 99372-6183
```

## Stack

- React 19
- TypeScript
- TanStack Start
- TanStack Router
- Vite 8
- Tailwind CSS 4
- Lucide React
- Vercel

## Requisitos

- Node.js 20 ou superior recomendado
- npm

## Instalação

```bash
git clone https://github.com/devthomaseduardo/vidotti-lp-cnpj.git
cd vidotti-lp-cnpj
npm install
npm run dev
```

O ambiente de desenvolvimento será iniciado pelo Vite.

## Scripts

```bash
npm run dev
```

Inicia o ambiente local de desenvolvimento.

```bash
npm run build
```

Executa o pipeline completo de produção usando `build.mjs`: valida a configuração, limpa arquivos gerados, recria os arquivos públicos e executa o build do Vite.

```bash
npm run build:vite
```

Executa somente o build do Vite.

```bash
npm run build:dev
```

Executa o pipeline de build em modo development.

```bash
npm run generate
```

Regenera os arquivos públicos derivados da configuração central do projeto.

```bash
npm run clean
```

Remove artefatos gerados pelo pipeline antes de um novo build.

```bash
npm run lint
```

Executa o ESLint.

```bash
npm run verify
```

Executa lint e build completo para validar a entrega.

```bash
npm run format
```

Formata o projeto com Prettier.

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
19993726183
```

Link base:

```text
https://api.whatsapp.com/send/?phone=19993726183&text&type=phone_number&app_absent=0&utm_source=ig
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
