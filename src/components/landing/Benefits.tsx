import { ShieldCheck, Clock3, BadgeCheck, FileCheck, Handshake, Calculator } from "lucide-react";
import { BrandCurvesLight } from "./BrandCurves";

const items = [
  {
    icon: Clock3,
    title: "Abertura em 48 horas",
    tag: "SLA 48h",
    text: "Processo digital ponta a ponta, com acompanhamento em tempo real até a emissão do CNPJ.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança jurídica",
    tag: "CNAE + contrato",
    text: "Análise minuciosa de CNAE, contrato social e regime tributário desde o dia zero.",
  },
  {
    icon: BadgeCheck,
    title: "Consultor dedicado",
    tag: "1:1",
    text: "Um especialista sênior em cada etapa — sem call center, sem transferências.",
  },
  {
    icon: Calculator,
    title: "Planejamento tributário",
    tag: "Simples · Presumido · Real",
    text: "Simples, Presumido ou Real: escolhemos o regime que reduz sua carga com base em projeções.",
  },
  {
    icon: FileCheck,
    title: "Documentação completa",
    tag: "e-CNPJ A1",
    text: "Contrato social, inscrições, alvarás e certificado digital emitidos e organizados.",
  },
  {
    icon: Handshake,
    title: "Suporte contínuo",
    tag: "mensal",
    text: "Contabilidade mensal, obrigações acessórias e assessoria estratégica de crescimento.",
  },
];

export function Benefits() {
  return (
    <section
      id="beneficios"
      className="relative py-20 sm:py-28 lg:py-36 bg-navy-deep text-white overflow-hidden"
    >
      <BrandCurvesLight className="absolute inset-x-0 -top-20 w-full h-[560px] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 mb-14 sm:mb-16 lg:mb-20">
          <div className="lg:col-span-7" data-reveal>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Por que Vidotti
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[3.25rem] font-bold leading-[1.15] lg:leading-[1.08]">
              Mais que contabilidade,
              <br />
              uma <span className="text-brand-red-light">parceria estratégica.</span>
            </h2>
          </div>
          <p
            className="lg:col-span-4 lg:col-start-9 self-end text-white/60 leading-relaxed"
            data-reveal
            data-reveal-delay="120"
          >
            Estruturamos empresas para operar com previsibilidade fiscal, eficiência tributária e
            credibilidade no mercado.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-12 gap-y-10 sm:gap-y-14">
          {items.map((it, i) => (
            <div
              key={it.title}
              data-reveal
              data-reveal-delay={i * 70}
              className="group relative sm:pl-8 sm:first:pl-0 lg:pl-10 lg:[&:nth-child(3n+1)]:pl-0"
            >
              <span className="hidden sm:block absolute left-0 top-1 bottom-1 w-px bg-white/10 group-first:hidden lg:[&:nth-child(3n+1)]:hidden" />
              <div className="flex items-start justify-between gap-3">
                <it.icon
                  strokeWidth={1.75}
                  className="h-7 w-7 text-white/85 transition-transform duration-300 group-hover:-translate-y-0.5"
                />
                <span className="font-mono-tech text-[10px] text-white/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold">{it.title}</h3>
              <p className="mt-3 text-sm text-white/55 leading-relaxed max-w-xs">{it.text}</p>
              <span className="mt-4 inline-block font-mono-tech text-[10px] text-brand-red-light border border-brand-red-light/30 rounded px-2 py-1">
                {it.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
