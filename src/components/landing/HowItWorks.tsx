import { ClipboardCheck, FileText, MessagesSquare, Rocket, ShieldCheck } from "lucide-react";
import { trackConversionEvent } from "@/lib/conversion";

const steps = [
  {
    icon: MessagesSquare,
    title: "Diagnóstico inicial",
    text: "Você informa atividade, momento da empresa, faturamento esperado e principal dúvida.",
  },
  {
    icon: ShieldCheck,
    title: "Enquadramento tributário",
    text: "A Vidotti avalia natureza jurídica, CNAE e regime para reduzir risco antes da abertura.",
  },
  {
    icon: FileText,
    title: "Documentos e abertura",
    text: "A equipe orienta documentação, registro e etapas com órgãos públicos conforme sua atividade.",
  },
  {
    icon: Rocket,
    title: "Operação contábil",
    text: "Depois do CNPJ, você recebe próximos passos para notas, impostos, pró-labore e rotina fiscal.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden border-t border-white/5 bg-[#0A0D1E] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div data-reveal>
            <span className="mb-6 inline-block rounded-full border border-white/10 px-4 py-1.5 text-xs font-semibold text-white/60">
              Como funciona
            </span>
            <h2 className="max-w-xl text-3xl font-bold leading-tight text-white md:text-5xl">
              Processo claro antes, durante e depois da abertura.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/60">
              Cada etapa existe para reduzir dúvida sobre documentos, enquadramento, impostos e
              rotina depois que o CNPJ estiver ativo.
            </p>
            <a
              href="#lead-form"
              onClick={() =>
                trackConversionEvent("cta_clicked", {
                  source: "process_primary",
                  destination: "lead_form",
                })
              }
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_-4px_rgba(215,25,32,0.5)] transition-transform hover:-translate-y-0.5"
            >
              Começar diagnóstico
              <ClipboardCheck className="h-4 w-4" strokeWidth={1.75} />
            </a>
          </div>

          <div className="border-y border-white/10">
            {steps.map((step, index) => (
              <article
                key={step.title}
                data-reveal
                data-reveal-delay={index * 80}
                className="grid gap-4 border-b border-white/10 py-6 last:border-b-0 sm:grid-cols-[80px_1fr]"
              >
                <div className="flex items-center gap-4 sm:block">
                  <p className="text-sm font-semibold text-white/45">0{index + 1}</p>
                  <div className="mt-0 flex h-10 w-10 items-center justify-center rounded-full bg-brand-red/10 text-brand-red sm:mt-4">
                    <step.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-bold text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
