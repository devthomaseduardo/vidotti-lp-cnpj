## Landing Page Premium — Vidotti Consultoria (Abertura de CNPJ)

Construir uma landing page única (rota `/`) em português, com identidade visual da marca Vidotti, estética corporativa premium inspirada em fintechs (Contabilizei, XP Empresas, Inter Empresas), sem cara de template.

### Identidade Visual

- **Paleta (tokens semânticos em `src/styles.css`)**:
  - `--navy: #1F2344` (primária)
  - `--navy-deep: #171A35` (fundos escuros)
  - `--red: #D71920` (CTA principal e destaques)
  - `--gray-light: #C7C7C7`
  - `--bg: #F8F9FC` (fundo geral)
  - `--white: #FFFFFF`
  - Gradientes discretos: `linear-gradient(135deg, #1F2344, #171A35)` e sutil accent `linear-gradient(135deg, #1F2344 0%, #D71920 120%)` apenas em detalhes
- **Tipografia**: Manrope (300/400/500/600/700/800) via `<link>` no `__root.tsx`, registrada em `@theme` como `--font-sans`
- **Radius**: 18px padrão (`--radius: 1.125rem`), variantes 16–20px
- **Sombras**: `--shadow-soft: 0 4px 24px -8px rgba(23,26,53,0.08)`, `--shadow-card: 0 8px 32px -12px rgba(31,35,68,0.12)`
- **Ícones**: Lucide outline, `strokeWidth={1.5}`, cor navy/cinza, vermelho só em destaque

### Assets

- **Logo** (`user-uploads://novoImg0.webp`) → salvar via `lovable-assets` e usar na navbar/footer
- **Hero image** (`user-uploads://backgrund.webp`, empresário com café/telefone recorte PNG) → asset CDN, usado no hero à direita
- **Background abstrato**: SVG inline com curvas inspiradas na logo (arco) em navy/cinza/vermelho com baixa opacidade, decorativo em várias seções
- Fotografias adicionais reais (reuniões/consultoria): usar fotos do Unsplash via URL direta (executivos em ambiente corporativo) para depoimentos/seção "Como Funciona"

### Estrutura da Página (componentes em `src/components/landing/`)

1. **Navbar** (`Navbar.tsx`) — fixa, fundo branco com blur sutil ao rolar, logo à esquerda, links âncora (Benefícios, Como Funciona, Empresas, Simulador, FAQ), CTA "Abrir CNPJ" vermelho
2. **Hero** (`Hero.tsx`) — tela cheia (`min-h-screen`), grid 2 colunas: esquerda com eyebrow, H1 grande ("Abra seu CNPJ com segurança, agilidade e assessoria premium"), subtítulo, dois CTAs (vermelho principal + secundário outline navy), trust badges (tempo médio, empresas abertas, avaliação); direita com imagem do empresário sobre fundo com curva abstrata da marca; ondas SVG decorativas ao fundo
3. **Benefícios** (`Benefits.tsx`) — grid 3×2 de cards outline (radius 18px, borda 1px, sombra suave): ShieldCheck, Clock3, BadgeCheck, FileCheck, Handshake, Calculator — hover: leve translate-y e sombra
4. **Como Funciona** (`HowItWorks.tsx`) — 4 passos horizontais com linha conectora sutil, numeração, ícones outline (Search → ClipboardList → FileText → BadgeCheck)
5. **Tipos de Empresa** (`CompanyTypes.tsx`) — cards MEI, ME, EPP, LTDA, SLU, S/A com Building2/BriefcaseBusiness/Landmark, descrição curta, limite de faturamento, chip de tributação
6. **Simulador** (`Simulator.tsx`) — frame estilo "dashboard/relatório": inputs (faturamento mensal, tipo de atividade select, regime tributário) → cálculo client-side estimado (Simples Nacional aproximado por faixa) exibido em card com breakdown (DAS estimado, honorários, economia vs. concorrente). Puramente presentacional, sem backend
7. **Depoimentos** (`Testimonials.tsx`) — 3 cards com foto real (Unsplash), nome, empresa, quote, estrelas outline
8. **FAQ** (`FAQ.tsx`) — shadcn Accordion, 6–8 perguntas sobre CNPJ, prazos, custos, MEI vs LTDA, migração de contador
9. **CTA Final** (`FinalCTA.tsx`) — banner navy com gradiente sutil vermelho no canto, curva SVG da marca, headline + botão vermelho grande + telefone/WhatsApp
10. **Footer** (`Footer.tsx`) — 4 colunas: logo+descrição, serviços, empresa, contato (Phone/Mail/MapPin), linha inferior com CNPJ fictício e redes

### Microinterações & Animação

- Hook `useScrollReveal` (IntersectionObserver) aplicando classes `opacity-0 translate-y-4` → `opacity-100 translate-y-0` com transição 250ms
- Cards: `hover:-translate-y-0.5 hover:shadow-card transition-all duration-200`
- Botões: scale 0.98→1 no mount de seção, hover brightness sutil
- Navbar: mudança de sombra/opacidade após 20px de scroll

### Arquivos a criar/modificar

- **Modificar**: `src/routes/__root.tsx` (Manrope `<link>`, meta tags SEO da Vidotti, título "Vidotti Consultoria — Abertura de CNPJ com assessoria premium"), `src/routes/index.tsx` (montar as seções, head próprio com título/descrição/og), `src/styles.css` (tokens da marca, fonte, sombras, radius, utilitário `.brand-curve-bg`)
- **Criar**: `src/components/landing/{Navbar,Hero,Benefits,HowItWorks,CompanyTypes,Simulator,Testimonials,FAQ,FinalCTA,Footer,BrandCurves}.tsx`, `src/hooks/use-scroll-reveal.ts`, assets pointers em `src/assets/` para logo e hero
- **shadcn já disponíveis** a usar: Button, Card, Accordion, Input, Select, Badge

### Restrições respeitadas

- Sem verde, sem 3D, sem emojis, sem neon, sem glass exagerado, sem ícones preenchidos
- Vermelho reservado a CTAs principais e micro-destaques (não em blocos grandes)
- Container 1280px (`max-w-[1280px] mx-auto px-6`), grid 12 colunas onde aplicável
- Todo texto em português (BR)

### Fora de escopo

- Sem backend, sem Lovable Cloud, sem formulários que enviam dados (simulador é local, CTAs abrem `tel:`/`https://wa.me/`)
- Sem autenticação, sem CMS
