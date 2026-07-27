import { Search, ClipboardList, FileText, BadgeCheck } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Diagnóstico",
    text: "Entendemos seu modelo de negócio, sócios e projeções para desenhar a estrutura ideal.",
  },
  {
    icon: ClipboardList,
    title: "Planejamento",
    text: "Definição de CNAE, natureza jurídica, capital social e regime tributário mais eficiente.",
  },
  {
    icon: FileText,
    title: "Protocolo",
    text: "Elaboração e envio do contrato social, inscrições federais, estaduais e municipais.",
  },
  {
    icon: BadgeCheck,
    title: "Operação",
    text: "CNPJ ativo, certificado digital, notas fiscais e contabilidade mensal em pleno funcionamento.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-2xl mb-16" data-reveal>
          <span className="text-xs font-semibold text-brand-red uppercase tracking-widest">
            Como funciona
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-navy">
            Quatro etapas, um processo transparente.
          </h2>
        </div>

        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-navy/15 to-transparent" />
          {steps.map((s, i) => (
            <div
              key={s.title}
              data-reveal
              data-reveal-delay={i * 100}
              className="relative flex flex-col items-start"
            >
              <div className="relative z-10 h-16 w-16 rounded-2xl bg-white border border-border shadow-soft flex items-center justify-center text-navy">
                <s.icon strokeWidth={1.5} className="h-7 w-7" />
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                Etapa {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-2 text-xl font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
