## Refino de design — Vidotti Consultoria (sem recriar a página)

Mantidos: logo, paleta (#1F2344 / #171A35 / #D71920 / #C7C7C7 / #F8F9FC), tipografia Manrope, textos, CTAs e ordem das seções (exceto o Simulador, removido a pedido).

### Princípios aplicados a toda a página
- Redução de ~70% dos containers: informação em texto livre com hierarquia tipográfica, réguas finas (1px #E8EAF2) e espaçamento no lugar de caixas.
- Cards apenas onde ajudam leitura (Tipos de Empresa, FAQ): radius 18px, fundo branco, borda `#E8EAF2`, sombra quase imperceptível. Nunca card dentro de card nem card sobre card.
- Espaçamento vertical ampliado (seções ~`py-36/40`), container 1280px, grid de 12 colunas consistente.
- Ícones Lucide outline, `strokeWidth={1.75}`, navy; vermelho só em micro-destaques.
- Azul predominante; vermelho apenas em CTA e detalhes; cinza de apoio. Gradientes só em faixas navy escuras.

### Hero
- Remove todos os cards flutuantes, o bloco/gradiente atrás da foto, a imagem duplicada com `mix-blend` e o `aspect` fixo.
- Foto do empresário integrada ao layout: recorte sem moldura, ~20% maior, sangrando para a borda direita, com máscara suave (fade) para o fundo — sem retângulo perceptível.
- Um único selo discreto sobreposto ao fundo (não à foto): "+2.400 empresas abertas" com contador animado, em linha fina.
- Eyebrow "100% online", H1 grande com destaque vermelho em "segurança, agilidade", subtítulo, dois CTAs (vermelho + WhatsApp outline). Muito espaço em branco.

### Benefícios
- Vira faixa horizontal limpa: 3 colunas (2 linhas) separadas por linhas verticais finas, sem caixas — ícone, título, descrição curta. Opcionalmente sobre faixa navy escura para dar identidade própria à seção.

### Como Funciona
- Fim da timeline artificial: passos numerados em tipografia grande, alinhados em grid de 12 colunas, com uma única linha horizontal fina passando pelo conjunto e bastante respiro. Sem círculos/ícones em caixas.

### Tipos de Empresa
- Mantém cards, mas leves: borda sutil única, sem sombra pesada, sem chips duplicados dentro de card.

### Simulador
- Seção e componente `Simulator.tsx` totalmente removidos (arquivo excluído, import e âncora do menu retirados).

### Depoimentos
- Carrossel elegante (um depoimento por vez, setas discretas + bullets), citação em tipografia grande sem caixa, foto pequena circular, muito espaço em branco.

### FAQ / CTA Final / Footer
- FAQ: accordion sem card externo, apenas divisórias finas.
- CTA Final: faixa navy com curva de marca e leve gradiente vermelho no canto — mantido, simplificado.
- Footer: mantido, com espaçamento maior e divisórias mais leves.

### Fundo e elementos gráficos
- `BrandCurves` reescrito em arcos minimalistas inspirados na curva da logo: linhas finas translúcidas e um arco largo de baixa opacidade, posicionados em pontos específicos (hero, transição de seções, CTA). Sem formas geométricas aleatórias.

### Microinterações
- Navbar encolhe ao scroll (altura/padding + blur).
- Hover elegante em botões (leve elevação + brilho), hover suave em imagens (scale 1.02 / 500ms).
- Contadores animados nas métricas.
- Fade-up, fade-in e reveal por máscara (clip-path) via `useScrollReveal` estendido.
- Parallax muito sutil (translate por scroll) apenas nas curvas de fundo, respeitando `prefers-reduced-motion`.

### Detalhes técnicos
- Arquivos alterados: `Hero.tsx`, `Benefits.tsx`, `HowItWorks.tsx`, `CompanyTypes.tsx`, `Testimonials.tsx`, `FAQ.tsx`, `FinalCTA.tsx`, `Footer.tsx`, `Navbar.tsx`, `BrandCurves.tsx`, `src/hooks/use-scroll-reveal.ts`, `src/routes/index.tsx`, `src/styles.css` (token `--border-subtle: #E8EAF2`, sombras mais leves, utilitários de máscara/parallax).
- Removido: `src/components/landing/Simulator.tsx`.
- Sem backend, sem novas dependências; carrossel implementado com estado local (ou embla, já disponível no shadcn, se presente).
