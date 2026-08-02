import { Check, Loader2, Lock } from "lucide-react";

/**
 * A coded product-panel mockup (not a stock photo) representing the actual
 * Vidotti client dashboard: CNPJ status, tax-regime classification and the
 * document checklist. Built with real DOM/CSS so it stays crisp at any
 * resolution and reads as an authentic operational tool rather than a
 * generic AI-generated portrait.
 */
export function DashboardMock({ className = "" }: { className?: string }) {
  const checklist = [
    { label: "Contrato social", meta: "protocolado na Jucesp", done: true },
    { label: "CNAE 6201-5/01", meta: "consultoria em TI", done: true },
    { label: "Inscrição estadual", meta: "Sefaz-SP", done: true },
    { label: "Certificado digital e-CNPJ A1", meta: "emissão em andamento", done: false },
  ];

  return (
    <div className={`relative ${className}`}>
      {/* window chrome */}
      <div className="rounded-2xl border border-navy/10 bg-white shadow-[0_30px_80px_-30px_rgba(15,18,40,0.35)] overflow-hidden">
        <div className="flex items-center gap-2 border-b border-border-subtle bg-[#F4F5F9] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          <div className="ml-3 flex items-center gap-1.5 rounded-md bg-white px-3 py-1 text-[11px] text-navy/45 font-mono-tech border border-border-subtle">
            <Lock className="h-2.5 w-2.5" strokeWidth={2} />
            painel.vidotticonsultoria.com.br
          </div>
        </div>

        <div className="p-5 sm:p-6">
          {/* status row */}
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.14em] text-navy/40 font-medium">
                Situação cadastral
              </p>
              <p className="mt-1 text-sm font-semibold text-navy">Empresa · CNPJ</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-[11px] font-semibold text-emerald-700 border border-emerald-100">
              <span className="status-dot h-1.5 w-1.5 rounded-full bg-emerald-500" />
              ATIVA
            </span>
          </div>

          <div className="mt-3 rounded-xl bg-navy/[0.035] border border-navy/5 px-4 py-3 font-mono-tech text-[13px] text-navy/70 tracking-tight">
            XX.XXX.XXX/0001-XX
          </div>

          {/* regime tributário */}
          <div className="mt-5 flex items-center justify-between rounded-xl border border-border-subtle px-4 py-3.5">
            <div>
              <p className="text-[10px] uppercase tracking-[0.14em] text-navy/40 font-medium">
                Regime recomendado
              </p>
              <p className="mt-1 text-sm font-semibold text-navy">Simples Nacional · Anexo III</p>
            </div>
            <div className="text-right shrink-0">
              <p className="font-mono-tech text-lg font-bold text-brand-red leading-none">6,00%</p>
              <p className="text-[10px] text-navy/40 mt-0.5">alíquota efetiva</p>
            </div>
          </div>

          {/* checklist */}
          <div className="mt-5 space-y-2.5">
            {checklist.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                    item.done ? "bg-navy text-white" : "bg-navy/5 text-navy/30"
                  }`}
                >
                  {item.done ? (
                    <Check className="h-3 w-3" strokeWidth={3} />
                  ) : (
                    <Loader2 className="h-3 w-3 animate-spin" strokeWidth={3} />
                  )}
                </span>
                <span className={`text-sm ${item.done ? "text-navy/80" : "text-navy/50"}`}>
                  {item.label}
                </span>
                <span className="ml-auto text-[11px] font-mono-tech text-navy/35 hidden sm:inline">
                  {item.meta}
                </span>
              </div>
            ))}
          </div>

          {/* footer */}
          <div className="mt-5 flex items-center justify-between border-t border-border-subtle pt-4">
            <span className="font-mono-tech text-[11px] text-navy/35">
              protocolo REC-04821/2026
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-16 h-1.5 rounded-full bg-navy/8 overflow-hidden">
                <span className="block h-full w-[82%] rounded-full bg-brand-red" />
              </span>
              <span className="text-[11px] font-mono-tech text-navy/45">82%</span>
            </span>
          </div>
        </div>
      </div>

      {/* floating consultant card */}
      <div className="absolute -bottom-6 -left-4 sm:-left-8 flex items-center gap-3 rounded-2xl bg-navy text-white px-5 py-4 shadow-[0_20px_50px_-20px_rgba(31,35,68,0.55)] max-w-[240px]">
        <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-bold font-mono-tech">
          VC
          <span className="status-dot absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-navy" />
        </span>
        <p className="text-xs leading-snug text-white/85">
          Consultor dedicado acompanhando seu processo em tempo real
        </p>
      </div>
    </div>
  );
}
