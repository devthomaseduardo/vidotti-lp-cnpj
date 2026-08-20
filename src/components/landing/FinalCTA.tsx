import { ArrowRight, CheckCircle2 } from "lucide-react";
import { trackConversionEvent } from "@/lib/conversion";
import { WhatsAppLink } from "./WhatsAppLink";

const closingPoints = [
  "Explicar sua atividade, cidade, faturamento esperado e momento da empresa.",
  "Entender se seu caso é abertura de CNPJ, desenquadramento MEI, troca de contador ou revisão tributária.",
  "Saber quais documentos separar, quais próximos passos vêm depois e qual escopo faz sentido.",
];

export function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden border-t border-white/5 bg-[#0A0D1E] py-20 md:py-28"
    >
      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_0.85fr]">
          <div data-reveal>
            <span className="mb-6 inline-block rounded-full border border-white/10 px-4 py-1.5 text-xs font-semibold text-white/60">
              Próximo passo
            </span>
            <h2 className="mb-6 max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl">
              Abra ou organize seu CNPJ com uma orientação inicial responsável.
            </h2>

            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-white/70">
              A conversa inicial serve para entender seu caso, evitar enquadramento errado e mostrar
              documentos, riscos e próximos passos antes de qualquer proposta.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
              <a
                href="#lead-form"
                onClick={() =>
                  trackConversionEvent("cta_clicked", {
                    source: "final_primary",
                    destination: "lead_form",
                  })
                }
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-red px-3 py-3 text-center text-xs font-semibold leading-tight text-white shadow-[0_4px_20px_-4px_rgba(215,25,32,0.5)] transition-transform hover:-translate-y-0.5 sm:px-8 sm:py-3.5 sm:text-sm whitespace-nowrap"
              >
                <span className="hidden sm:inline">Preencher diagnóstico</span>
                <span className="sm:hidden">Diagnóstico</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </a>
              <WhatsAppLink
                source="final_whatsapp"
                intent="Quero falar com a Vidotti e entender os próximos passos para meu CNPJ."
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-3 py-3 text-center text-xs font-semibold leading-tight text-white transition-colors hover:bg-white/5 sm:px-8 sm:py-3.5 sm:text-sm whitespace-nowrap"
              >
                Falar no WhatsApp
              </WhatsAppLink>
            </div>
          </div>

          <div
            className="border-y border-white/10 py-6 md:py-8"
            data-reveal="mask"
            data-reveal-delay="200"
          >
            <h3 className="text-2xl font-bold text-white">Na conversa inicial</h3>
            <ul className="mt-6 space-y-4">
              {closingPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-red"
                    strokeWidth={1.75}
                  />
                  <span className="text-sm leading-relaxed text-white/70">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-white/10 pt-5">
              <p className="text-sm font-semibold text-white">Canal principal</p>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                WhatsApp da Vidotti: resposta humana, com o contexto que você enviar no formulário
                ou na mensagem inicial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
