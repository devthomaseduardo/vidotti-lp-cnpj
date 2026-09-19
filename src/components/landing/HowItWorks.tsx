import { useState } from "react";
import { ClipboardCheck, FileText, MessagesSquare, Rocket, ShieldCheck } from "lucide-react";
import { trackConversionEvent } from "@/lib/conversion";

const steps = [
  { icon: MessagesSquare, title: "Diagnóstico inicial", text: "Você informa atividade, momento da empresa, faturamento esperado, cidade e principal dúvida." },
  { icon: ShieldCheck, title: "Enquadramento tributário", text: "Analisamos atividade, faturamento e cenário para orientar natureza jurídica, CNAE e regime antes de abrir ou migrar." },
  { icon: FileText, title: "Documentos e abertura", text: "Organizamos os documentos e orientamos as etapas que dependem da atividade, endereço, município e órgãos envolvidos." },
  { icon: Rocket, title: "Operação contábil", text: "Com o CNPJ ativo, alinhamos notas, guias, pró-labore e a rotina fiscal necessária para a empresa continuar em ordem." },
];

export function HowItWorks() {
  const [flippedStep, setFlippedStep] = useState<number | null>(null);

  return (
    <section id="como-funciona" className="relative overflow-hidden border-t border-white/5 bg-[#0A0D1E] py-14 md:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6"><div className="grid gap-9 md:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div data-reveal><span className="mb-4 inline-block rounded-full border border-white/10 px-4 py-1.5 text-xs font-semibold text-white/60 md:mb-6">Como funciona</span><h2 className="max-w-xl text-2xl font-bold leading-tight text-white sm:text-3xl md:text-5xl">Processo claro antes, durante e depois da abertura.</h2><p className="mt-4 max-w-lg text-sm leading-6 text-white/60 md:mt-6 md:text-base md:leading-relaxed">Você entende decisões, documentos e próximos passos antes do CNPJ entrar em operação.</p><a href="#lead-form" onClick={() => trackConversionEvent("cta_clicked", { source: "process_primary", destination: "lead_form" })} className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-red px-7 py-3 text-sm font-semibold text-white shadow-[0_4px_20px_-4px_rgba(215,25,32,0.5)] transition-transform hover:-translate-y-0.5 md:mt-8 md:px-8 md:py-3.5">Fazer diagnóstico <ClipboardCheck className="h-4 w-4" strokeWidth={1.75} /></a></div>
        <div className="grid grid-cols-1 gap-3 min-[380px]:grid-cols-2 md:gap-4">
          {steps.map((step, index) => {
            const flipped = flippedStep === index;

            return (
              <button
                key={step.title}
                type="button"
                aria-pressed={flipped}
                onClick={() => setFlippedStep((current) => (current === index ? null : index))}
                className="block min-h-[174px] w-full text-left outline-none [perspective:1000px] focus-visible:rounded-2xl focus-visible:ring-2 focus-visible:ring-brand-red/70 min-[380px]:min-h-[188px] md:min-h-[228px]"
              >
                <span className={`relative block h-full w-full rounded-2xl transition-transform duration-500 [transform-style:preserve-3d] ${flipped ? "[transform:rotateY(180deg)]" : ""}`}>
                  <span className={`absolute inset-0 flex flex-col justify-between rounded-2xl border bg-white/[0.04] p-4 transition-colors [backface-visibility:hidden] md:p-5 ${flipped ? "border-brand-red/35" : "border-white/10 hover:border-white/20 hover:bg-white/[0.06]"}`}>
                    <span className="flex items-start justify-between gap-3">
                      <span className="text-xs font-semibold tracking-[0.16em] text-white/35">0{index + 1}</span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-red/10 text-brand-red md:h-10 md:w-10">
                        <step.icon className="h-[18px] w-[18px] md:h-5 md:w-5" strokeWidth={1.75} />
                      </span>
                    </span>
                    <span>
                      <span className="block text-lg font-bold leading-tight text-white min-[380px]:text-base md:text-xl">{step.title}</span>
                      <span className="mt-2 block text-xs font-medium text-white/45">Toque para ver detalhes</span>
                    </span>
                  </span>
                  <span className="absolute inset-0 flex rounded-2xl border border-brand-red/35 bg-[#151933] p-4 shadow-[0_18px_50px_-32px_rgba(215,25,32,0.75)] [backface-visibility:hidden] [transform:rotateY(180deg)] md:p-5">
                    <span className="flex flex-col justify-between">
                      <span className="flex items-center justify-between gap-3">
                        <span className="text-xs font-semibold tracking-[0.16em] text-brand-red">0{index + 1}</span>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/35">Detalhe</span>
                      </span>
                      <span className="mt-3 text-[13px] leading-5 text-white/75 min-[380px]:text-xs md:text-base md:leading-7">{step.text}</span>
                      <span className="mt-3 text-xs font-medium text-white/40">Toque para voltar</span>
                    </span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div></div>
    </section>
  );
}
