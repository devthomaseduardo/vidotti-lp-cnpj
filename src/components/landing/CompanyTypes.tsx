import { Building2, BriefcaseBusiness, Landmark, ChevronRight } from "lucide-react";

const types = [
  {
    icon: BriefcaseBusiness,
    tag: "Microempreendedor",
    title: "MEI",
    limit: "Até R$ 81 mil/ano",
    regime: "DAS mensal fixo",
    text: "Ideal para autônomos e pequenos prestadores que buscam formalização rápida com custo reduzido.",
  },
  {
    icon: Building2,
    tag: "Microempresa",
    title: "ME",
    limit: "Até R$ 360 mil/ano",
    regime: "Simples Nacional",
    text: "Estrutura enxuta para negócios em crescimento com múltiplas atividades e contratação de equipe.",
  },
  {
    icon: Building2,
    tag: "Pequeno Porte",
    title: "EPP",
    limit: "Até R$ 4,8 milhões/ano",
    regime: "Simples ou Presumido",
    text: "Para empresas consolidadas que precisam de flexibilidade societária e planejamento tributário.",
  },
  {
    icon: Building2,
    tag: "Sociedade",
    title: "LTDA",
    limit: "Sem limite de faturamento",
    regime: "Presumido / Real",
    text: "Modelo societário mais utilizado no Brasil, com responsabilidade limitada dos sócios.",
  },
  {
    icon: BriefcaseBusiness,
    tag: "Unipessoal",
    title: "SLU",
    limit: "Sem limite de faturamento",
    regime: "Presumido / Real",
    text: "Sociedade limitada com sócio único — proteção patrimonial sem necessidade de segundo sócio.",
  },
  {
    icon: Landmark,
    tag: "Anônima",
    title: "S/A",
    limit: "Estrutura por ações",
    regime: "Lucro Real",
    text: "Recomendada para operações de maior porte, captação de investimento e governança corporativa.",
  },
];

export function CompanyTypes() {
  return (
    <section id="empresas" className="relative py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14" data-reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-brand-red uppercase tracking-widest">
              Tipos de empresa
            </span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-navy">
              Qual modelo se encaixa no seu negócio?
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Nossa equipe analisa faturamento, atividade e composição societária para indicar a natureza jurídica correta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((t, i) => (
            <article
              key={t.title}
              data-reveal
              data-reveal-delay={i * 60}
              className="group relative rounded-[18px] border border-border bg-card p-7 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="h-11 w-11 rounded-xl bg-navy/5 flex items-center justify-center text-navy">
                  <t.icon strokeWidth={1.5} className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
                  {t.tag}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-navy">{t.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.text}</p>

              <dl className="mt-6 pt-6 border-t border-border space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Faturamento</dt>
                  <dd className="font-medium text-navy">{t.limit}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Regime</dt>
                  <dd className="font-medium text-navy">{t.regime}</dd>
                </div>
              </dl>

              <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-red group-hover:gap-2 transition-all">
                Falar com consultor
                <ChevronRight className="h-4 w-4" strokeWidth={1.75} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
