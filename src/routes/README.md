# Rotas

O projeto utiliza roteamento baseado em arquivos do TanStack Start. Cada arquivo `.tsx` neste diretório define uma rota pública:

| Arquivo                       | Rota                       | Função                                                                 |
| ----------------------------- | -------------------------- | ---------------------------------------------------------------------- |
| `__root.tsx`                  | Layout raiz                | Cabeçalho HTML, fontes, aviso de cookies e botão flutuante do WhatsApp |
| `index.tsx`                   | `/`                        | Landing page principal e JSON-LD de SEO                                |
| `politica-de-privacidade.tsx` | `/politica-de-privacidade` | Política de Privacidade e LGPD                                         |

O arquivo `src/routeTree.gen.ts` é gerado automaticamente pelo plugin do TanStack Router e não deve ser editado manualmente.
