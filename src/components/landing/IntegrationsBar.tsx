const systems = [
  { code: "e-CAC", label: "Receita Federal" },
  { code: "PGDAS-D", label: "Simples Nacional" },
  { code: "REDESIM", label: "Junta Comercial" },
  { code: "SEFAZ", label: "Inscrição Estadual" },
  { code: "NFS-e", label: "Prefeitura / ISS" },
  { code: "gov.br", label: "Certificação digital" },
];

/**
 * Honest, factual trust bar: the real government systems the firm operates
 * inside — not a row of fabricated client logos.
 */
export function IntegrationsBar() {
  return (
    <div className="relative border-y border-border-subtle bg-white/70 backdrop-blur-sm">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 py-5 sm:py-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-navy/40 shrink-0">
            Processo integrado aos sistemas oficiais
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-8">
            {systems.map((s) => (
              <div key={s.code} className="flex items-baseline gap-1.5">
                <span className="font-mono-tech text-sm font-bold text-navy">{s.code}</span>
                <span className="text-xs text-navy/45">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
