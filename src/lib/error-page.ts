export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Esta página não carregou | Vidotti Contabilidade</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, nofollow" />
    <style>
      body { font: 15px/1.6 "Montserrat", system-ui, -apple-system, sans-serif; background: #0a0d1e; color: #ffffff; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; border-radius: 1.125rem; border: 1px solid rgba(255, 255, 255, 0.1); background: #151933; box-shadow: 0 24px 70px -34px rgba(0, 0, 0, 0.7); }
      h1 { font-size: 1.35rem; font-weight: 700; margin: 0 0 0.5rem; }
      p { color: rgba(255, 255, 255, 0.65); margin: 0 0 1.5rem; font-size: 0.925rem; }
      .actions { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.65rem 1.25rem; border-radius: 9999px; font: inherit; font-size: 0.875rem; font-weight: 600; cursor: pointer; text-decoration: none; border: 1px solid transparent; transition: opacity 150ms ease; }
      .primary { background: #d71920; color: #ffffff; }
      .secondary { background: transparent; color: #ffffff; border-color: rgba(255, 255, 255, 0.2); }
      a:hover, button:hover { opacity: 0.9; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>Esta página não carregou</h1>
      <p>Algo deu errado ao carregar a página. Você pode tentar atualizar ou voltar para o início.</p>
      <div class="actions">
        <button type="button" class="primary" onclick="location.reload()">Tentar novamente</button>
        <a class="secondary" href="/">Voltar ao início</a>
      </div>
    </div>
  </body>
</html>`;
}
