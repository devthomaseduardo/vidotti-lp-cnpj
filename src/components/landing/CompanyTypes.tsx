import { Building2, BriefcaseBusiness, Landmark, ArrowUpRight } from "lucide-react";

const types = [
  {
    icon: BriefcaseBusiness,
    title: "MEI",
    limit: "Até R$ 81 mil/ano",
    regime: "DAS mensal fixo",
    text: "Ideal para autônomos e pequenos prestadores que buscam formalização rápida com custo reduzido.",
  },
  {
    icon: Building2,
    title: "ME",
    limit: "Até R$ 360 mil/ano",
    regime: "Simples Nacional",
    text: "Estrutura enxuta para negócios em crescimento com múltiplas atividades e contratação de equipe.",
  },
  {
    icon: Building2,
    title: "EPP",
    limit: "Até R$ 4,8 milhões/ano",
    regime: "Simples ou Presumido",
    text: "Para empresas consolidadas que precisam de flexibilidade societária e planejamento tributário.",
  },
  {
    icon: Building2,
    title: "LTDA",
    limit: "Sem limite de faturamento",
    regime: "Presumido / Real",
    text: "Modelo societário mais utilizado no Brasil, com responsabilidade limitada dos sócios.",
  },
  {
    icon: BriefcaseBusiness,
    title: "SLU",
    limit: "Sem limite de faturamento",
    regime: "Presumido / Real",
    text: "Sociedade limitada com sócio único — proteção patrimonial sem necessidade de segundo sócio.",
  },
  {
    icon: Landmark,
    title: "S/A",
    limit: "Estrutura por ações",
    regime: "Lucro Real",
    text: "Recomendada para operações de maior porte, captação de investimento e governança corporativa.",
  },
];

export function CompanyTypes() {
  return (
    <section id="empresas" className="relative py-36 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-6" data-reveal>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy/60">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Tipos de empresa
            </span>
            <h2 className="mt-6 text-4xl lg:text-[3.25rem] font-bold leading-[1.08] text-navy">
              Qual modelo se encaixa
              <br className="hidden lg:block" /> no seu negócio?
            </h2>
          </div>
          <p
            className="lg:col-span-4 lg:col-start-9 text-muted-foreground leading-relaxed"
            data-reveal
            data-reveal-delay="120"
          >
            Analisamos faturamento, atividade e composição societária para indicar a natureza
            jurídica correta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((t, i) => (
            <article
              key={t.title}
              data-reveal
              data-reveal-delay={i * 60}
              className="group rounded-[18px] border border-border-subtle bg-card p-8 transition-all duration-300 hover:shadow-soft hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between">
                <t.icon strokeWidth={1.75} className="h-6 w-6 text-navy/70" />
                <ArrowUpRight
                  strokeWidth={1.75}
                  className="h-5 w-5 text-navy/20 transition-all duration-300 group-hover:text-brand-red group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>
              <h3 className="mt-8 text-2xl font-bold text-navy">{t.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.text}</p>
              <p className="mt-6 text-xs text-navy/50 tracking-wide">
                {t.limit} · {t.regime}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
