import { useState } from "react";
import { ClipboardCheck } from "lucide-react";
import { StepIllustration } from "./StepIllustrations";

const steps = [
  {
    title: "Diagnóstico inicial",
    text: "Você informa atividade, momento da empresa, faturamento esperado, cidade e principal dúvida.",
  },
  {
    title: "Enquadramento tributário",
    text: "Analisamos atividade, faturamento e cenário para orientar natureza jurídica, CNAE e regime antes de abrir ou migrar.",
  },
  {
    title: "Documentos e abertura",
    text: "Organizamos os documentos e orientamos as etapas que dependem da atividade, endereço, município e órgãos envolvidos.",
  },
  {
    title: "Operação contábil",
    text: "Com o CNPJ ativo, alinhamos notas, guias, pró-labore e a rotina fiscal necessária para a empresa continuar em ordem.",
  },
];

export function HowItWorks() {
  const [flippedStep, setFlippedStep] = useState<number | null>(null);

  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden border-t border-white/5 bg-[#0A0D1E] py-8 md:py-16"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-6 md:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-14 xl:gap-20">
          <div data-reveal>
            <span className="mb-2.5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red md:mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Como funciona
            </span>
            <h2 className="max-w-xl text-2xl font-bold leading-tight text-white sm:text-3xl md:text-[2.75rem]">
              Do diagnóstico ao CNPJ ativo <span className="text-white/55">em 4 etapas.</span>
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-white/60 md:mt-4 md:text-base md:leading-relaxed">
              Você sabe o que vai acontecer, o que precisa enviar e qual regime faz sentido antes de
              abrir.
            </p>
            <a
              href="#lead-form"
              data-cta-source="process_primary"
              className="mt-6 hidden min-h-12 items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_-4px_rgba(215,25,32,0.5)] transition-transform hover:-translate-y-0.5 md:inline-flex"
            >
              Fazer diagnóstico <ClipboardCheck className="h-4 w-4" strokeWidth={1.75} />
            </a>
          </div>
          <div className="grid grid-cols-1 gap-2.5 min-[360px]:grid-cols-2 md:gap-4 xl:gap-5">
            {steps.map((step, index) => {
              const flipped = flippedStep === index;

              return (
                <button
                  key={step.title}
                  type="button"
                  aria-pressed={flipped}
                  onClick={() => setFlippedStep((current) => (current === index ? null : index))}
                  className="flip-card block min-h-[176px] w-full text-left outline-none focus-visible:rounded-2xl focus-visible:ring-2 focus-visible:ring-brand-red/70 sm:min-h-[192px] md:min-h-[214px] xl:min-h-[236px]"
                >
                  <span
                    className={`flip-card-inner relative block h-full w-full rounded-2xl transition-transform duration-500 ${flipped ? "is-flipped" : ""}`}
                  >
                    <span
                      aria-hidden={flipped || undefined}
                      className={`flip-card-face absolute inset-0 flex flex-col justify-between rounded-2xl border bg-white/[0.03] p-3.5 transition-colors sm:p-4 md:p-5 xl:p-6 ${flipped ? "border-brand-red/35" : "border-white/10 hover:border-white/20 hover:bg-white/[0.05]"}`}
                    >
                      <span className="text-[11px] font-semibold tracking-[0.16em] text-white/40 sm:text-xs">
                        0{index + 1}
                      </span>
                      <StepIllustration
                        index={index}
                        className="mx-auto h-14 w-auto sm:h-20 md:h-24"
                      />
                      <span>
                        <span className="block text-sm font-bold leading-snug text-white sm:text-base md:text-lg">
                          {step.title}
                        </span>
                        <span className="mt-1 block text-[11px] font-medium text-white/55 sm:text-xs">
                          Ver detalhes
                        </span>
                      </span>
                    </span>
                    <span
                      aria-hidden={!flipped || undefined}
                      className="flip-card-face flip-card-back absolute inset-0 flex rounded-2xl border border-brand-red/35 bg-[#151933] p-3.5 transition-colors sm:p-4 md:p-5 xl:p-6"
                    >
                      <span className="flex flex-col justify-between">
                        <span className="flex items-center justify-between gap-2">
                          <span className="text-[11px] font-semibold tracking-[0.16em] text-brand-red sm:text-xs">
                            0{index + 1}
                          </span>
                          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/35">
                            Detalhe
                          </span>
                        </span>
                        <span className="mt-1.5 text-[11px] leading-[1.38] text-white/80 sm:text-xs md:mt-3 md:text-sm md:leading-6">
                          {step.text}
                        </span>
                        <span className="mt-1.5 text-[10px] font-medium text-white/55 sm:text-xs">
                          Voltar
                        </span>
                      </span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
          <div className="flex justify-center md:hidden">
            <a
              href="#lead-form"
              data-cta-source="process_mobile_primary"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_-4px_rgba(215,25,32,0.5)] transition-transform hover:-translate-y-0.5"
            >
              Fazer diagnóstico <ClipboardCheck className="h-4 w-4" strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
