import { useMemo, useState } from "react";
import { CircleDollarSign, ChartColumn, TrendingUp, WalletCards, ArrowRight } from "lucide-react";

const activities = [
  { id: "comercio", label: "Comércio", anexo: "Anexo I", baseRate: 0.06 },
  { id: "industria", label: "Indústria", anexo: "Anexo II", baseRate: 0.062 },
  { id: "servicos", label: "Serviços", anexo: "Anexo III", baseRate: 0.09 },
  { id: "consultoria", label: "Consultoria / Profissional liberal", anexo: "Anexo V", baseRate: 0.155 },
];

function currency(n: number) {
  return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

export function Simulator() {
  const [revenue, setRevenue] = useState<number>(25000);
  const [activityId, setActivityId] = useState<string>("servicos");

  const result = useMemo(() => {
    const activity = activities.find((a) => a.id === activityId)!;
    const bracketAdjust = revenue > 60000 ? 0.02 : revenue > 30000 ? 0.01 : 0;
    const effectiveRate = activity.baseRate + bracketAdjust;
    const das = revenue * effectiveRate;
    const honorarios = Math.max(249, Math.min(revenue * 0.008, 1200));
    const marketAvg = honorarios * 1.6 + das * 1.08;
    const vidottiTotal = honorarios + das;
    const savings = Math.max(0, marketAvg - vidottiTotal);
    return { activity, effectiveRate, das, honorarios, vidottiTotal, savings };
  }, [revenue, activityId]);

  return (
    <section id="simulador" className="relative py-28 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5" data-reveal>
          <span className="text-xs font-semibold text-brand-red uppercase tracking-widest">
            Simulador
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-navy">
            Estime sua carga tributária em segundos.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Uma prévia do investimento mensal para operar dentro do Simples Nacional. O cálculo definitivo é feito pelo seu consultor Vidotti.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-navy">
            {[
              "Baseado nas tabelas vigentes do Simples Nacional",
              "Compara honorários médios do mercado",
              "Sem cadastro — 100% em seu navegador",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7" data-reveal data-reveal-delay="120">
          <div className="rounded-[18px] border border-border bg-card shadow-card p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                <ChartColumn className="h-4 w-4 text-navy" strokeWidth={1.5} />
                Relatório de simulação
              </div>
              <span className="text-[10px] font-medium text-muted-foreground">v. 2026.01</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <label className="block">
                <span className="text-xs font-semibold text-navy uppercase tracking-wider">
                  Faturamento mensal
                </span>
                <div className="mt-2 flex items-center rounded-xl border border-border bg-background px-4 py-3 focus-within:border-navy transition-colors">
                  <span className="text-navy font-semibold mr-2">R$</span>
                  <input
                    type="number"
                    min={0}
                    step={1000}
                    value={revenue}
                    onChange={(e) => setRevenue(Math.max(0, Number(e.target.value) || 0))}
                    className="w-full bg-transparent outline-none text-navy font-semibold"
                  />
                </div>
                <input
                  type="range"
                  min={5000}
                  max={200000}
                  step={1000}
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="mt-3 w-full accent-[var(--brand-red)]"
                />
              </label>

              <label className="block">
                <span className="text-xs font-semibold text-navy uppercase tracking-wider">
                  Atividade principal
                </span>
                <select
                  value={activityId}
                  onChange={(e) => setActivityId(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-navy font-medium outline-none focus:border-navy transition-colors"
                >
                  {activities.map((a) => (
                    <option key={a.id} value={a.id}>
                      {a.label} — {a.anexo}
                    </option>
                  ))}
                </select>
                <p className="mt-3 text-xs text-muted-foreground">
                  Alíquota estimada: <span className="font-semibold text-navy">{(result.effectiveRate * 100).toFixed(2)}%</span>
                </p>
              </label>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <MetricCard icon={CircleDollarSign} label="DAS estimado" value={currency(result.das)} />
              <MetricCard icon={WalletCards} label="Honorários Vidotti" value={currency(result.honorarios)} />
              <MetricCard
                icon={TrendingUp}
                label="Economia vs. mercado"
                value={currency(result.savings)}
                highlight
              />
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Custo total mensal</p>
                <p className="text-2xl font-bold text-navy">{currency(result.vidottiTotal)}</p>
              </div>
              <a
                href="#cta"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-red text-white px-6 py-3 text-sm font-semibold shadow-soft hover:brightness-110 transition-all"
              >
                Falar com consultor
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({
  icon: Icon,
  label,
  value,
  highlight,
}: {
  icon: typeof CircleDollarSign;
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 transition-all ${
        highlight ? "border-brand-red/30 bg-brand-red/5" : "border-border bg-background"
      }`}
    >
      <div className={`flex items-center gap-2 text-xs uppercase tracking-widest font-semibold ${highlight ? "text-brand-red" : "text-muted-foreground"}`}>
        <Icon className="h-4 w-4" strokeWidth={1.5} />
        {label}
      </div>
      <p className={`mt-2 text-xl font-bold ${highlight ? "text-brand-red" : "text-navy"}`}>{value}</p>
    </div>
  );
}
