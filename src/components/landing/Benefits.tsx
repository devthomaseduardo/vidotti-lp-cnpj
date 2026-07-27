import {
  ShieldCheck,
  Clock3,
  BadgeCheck,
  FileCheck,
  Handshake,
  Calculator,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Segurança jurídica",
    text: "Análise minuciosa do CNAE, contrato social e regime tributário para blindar sua operação desde o dia zero.",
  },
  {
    icon: Clock3,
    title: "Abertura em 48 horas",
    text: "Processo digital ponta a ponta com acompanhamento em tempo real do protocolo até a emissão do CNPJ.",
  },
  {
    icon: BadgeCheck,
    title: "Consultor dedicado",
    text: "Um especialista sênior à sua disposição em cada etapa — sem call center, sem transferências.",
  },
  {
    icon: FileCheck,
    title: "Documentação completa",
    text: "Contrato social, inscrições, alvarás e certificado digital emitidos e organizados em painel próprio.",
  },
  {
    icon: Calculator,
    title: "Planejamento tributário",
    text: "Simples, Lucro Presumido ou Real: escolhemos o regime que reduz sua carga com base em projeções reais.",
  },
  {
    icon: Handshake,
    title: "Suporte contínuo",
    text: "Contabilidade mensal, obrigações acessórias e assessoria estratégica para o crescimento do seu negócio.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-2xl mb-16" data-reveal>
          <span className="text-xs font-semibold text-brand-red uppercase tracking-widest">
            Por que Vidotti
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-navy">
            Uma consultoria que combina rigor contábil e visão de negócio.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Estruturamos empresas para operar com previsibilidade fiscal, eficiência tributária e credibilidade no mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <article
              key={it.title}
              data-reveal
              data-reveal-delay={i * 60}
              className="group relative rounded-[18px] border border-border bg-card p-8 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-navy/5 flex items-center justify-center text-navy mb-6 group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                <it.icon strokeWidth={1.5} className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.text}</p>
              <div className="absolute top-0 right-0 h-1 w-0 bg-brand-red rounded-tr-[18px] group-hover:w-16 transition-all duration-300" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
