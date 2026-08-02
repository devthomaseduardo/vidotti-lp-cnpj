const brackets = [
  { faixa: "1ª", receita: "até 180.000,00", aliquota: "4,00%", deducao: "—" },
  { faixa: "2ª", receita: "180.000,01 a 360.000,00", aliquota: "7,30%", deducao: "5.940,00" },
  { faixa: "3ª", receita: "360.000,01 a 720.000,00", aliquota: "9,50%", deducao: "13.860,00" },
  { faixa: "4ª", receita: "720.000,01 a 1.800.000,00", aliquota: "10,70%", deducao: "22.500,00" },
  { faixa: "5ª", receita: "1.800.000,01 a 3.600.000,00", aliquota: "14,30%", deducao: "87.300,00" },
  {
    faixa: "6ª",
    receita: "3.600.000,01 a 4.800.000,00",
    aliquota: "19,00%",
    deducao: "378.000,00",
  },
];

export function TaxBracketTable() {
  return (
    <section id="tributacao" className="relative py-20 sm:py-28 lg:py-36 bg-white">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-7" data-reveal>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy/60">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Metodologia de cálculo
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[3.25rem] font-bold leading-[1.1] lg:leading-[1.08] text-navy">
              Enquadramento tributário
              <br className="hidden sm:block" /> por tabela oficial, não por achismo.
            </h2>
          </div>
          <p
            className="lg:col-span-4 lg:col-start-9 text-muted-foreground leading-relaxed"
            data-reveal
            data-reveal-delay="120"
          >
            Aplicamos a fórmula prevista na Lei Complementar 123/2006 (redação da LC 155/2016) — a
            mesma usada pela Receita Federal no cálculo do DAS.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* table */}
          <div
            className="lg:col-span-8 overflow-hidden rounded-2xl border border-border-subtle bg-grid-lines"
            data-reveal
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[560px]">
                <thead>
                  <tr className="border-b border-border-subtle bg-navy/[0.03] text-left">
                    <th className="px-4 sm:px-6 py-3.5 font-semibold text-navy/70 text-xs uppercase tracking-wide">
                      Faixa
                    </th>
                    <th className="px-4 sm:px-6 py-3.5 font-semibold text-navy/70 text-xs uppercase tracking-wide">
                      Receita bruta acumulada (12m)
                    </th>
                    <th className="px-4 sm:px-6 py-3.5 font-semibold text-navy/70 text-xs uppercase tracking-wide text-right">
                      Alíquota nominal
                    </th>
                    <th className="px-4 sm:px-6 py-3.5 font-semibold text-navy/70 text-xs uppercase tracking-wide text-right">
                      Valor a deduzir
                    </th>
                  </tr>
                </thead>
                <tbody className="font-mono-tech">
                  {brackets.map((b, i) => (
                    <tr
                      key={b.faixa}
                      className={`border-b border-border-subtle last:border-0 ${
                        i === 2 ? "bg-brand-red/[0.04]" : "bg-white/70"
                      }`}
                    >
                      <td className="px-4 sm:px-6 py-3.5 text-navy/50">{b.faixa}</td>
                      <td className="px-4 sm:px-6 py-3.5 text-navy whitespace-nowrap">
                        R$ {b.receita}
                      </td>
                      <td className="px-4 sm:px-6 py-3.5 text-right font-semibold text-navy">
                        {b.aliquota}
                      </td>
                      <td className="px-4 sm:px-6 py-3.5 text-right text-navy/60 whitespace-nowrap">
                        {b.deducao === "—" ? "—" : `R$ ${b.deducao}`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 sm:px-6 py-3 text-[11px] text-navy/40 bg-navy/[0.02] border-t border-border-subtle">
              Anexo I · Simples Nacional (Comércio) — vigente desde 01/01/2018. Anexos II a V seguem
              lógica progressiva equivalente, com faixas específicas por atividade.
            </div>
          </div>

          {/* formula + example */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div
              className="rounded-2xl bg-navy-deep text-white p-6"
              data-reveal
              data-reveal-delay="80"
            >
              <p className="text-[10px] uppercase tracking-[0.14em] text-white/40 font-semibold">
                Fórmula oficial
              </p>
              <p className="mt-3 font-mono-tech text-[13px] leading-relaxed text-white/90 break-words">
                ((RBT12 × Aliq) − PD) ÷ RBT12
              </p>
              <p className="mt-3 text-xs text-white/50 leading-relaxed">
                RBT12 = receita bruta dos últimos 12 meses · Aliq = alíquota nominal da faixa · PD =
                parcela a deduzir.
              </p>
            </div>

            <div
              className="rounded-2xl border border-border-subtle p-6"
              data-reveal
              data-reveal-delay="140"
            >
              <p className="text-[10px] uppercase tracking-[0.14em] text-navy/40 font-semibold">
                Exemplo aplicado · 3ª faixa
              </p>
              <div className="mt-3 space-y-1.5 font-mono-tech text-[13px] text-navy/70">
                <p>RBT12 = R$ 400.000,00</p>
                <p>(400.000 × 9,5%) − 13.860</p>
                <p>= 24.140 ÷ 400.000</p>
              </div>
              <p className="mt-3 text-2xl font-bold text-brand-red font-mono-tech">6,04%</p>
              <p className="text-xs text-navy/45">alíquota efetiva do DAS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
