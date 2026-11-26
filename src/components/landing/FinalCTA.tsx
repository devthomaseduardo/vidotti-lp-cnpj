import { ArrowRight, CheckCircle2, Clock3, MapPin, ShieldCheck } from "lucide-react";
import { publicSiteConfig } from "@/generated/site-config";
import { WhatsAppLink } from "./WhatsAppLink";

const closingPoints = [
  {
    step: "01",
    title: "Contexto rápido (2 min)",
    text: "Você seleciona seu momento atual e informa atividade, cidade ou dúvida principal.",
  },
  {
    step: "02",
    title: "Enquadramento sob medida",
    text: "Analisamos se o melhor caminho é abertura de CNPJ, saída do MEI, troca de contador ou revisão tributária.",
  },
  {
    step: "03",
    title: "Orientação direta no WhatsApp",
    text: "Você fala com a equipe da Vidotti sabendo quais documentos separar e quais são os próximos passos antes da proposta.",
  },
] as const;

const highlights = [
  { icon: Clock3, label: "Leva menos de 2 minutos" },
  { icon: ShieldCheck, label: "Sem proposta automática" },
  { icon: MapPin, label: "Campinas/SP e digital" },
] as const;

export function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden border-t border-white/5 bg-[#0A0D1E] py-8 md:py-16"
    >
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="grid items-start gap-7 md:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div data-reveal>
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red md:mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Próximo passo
            </span>
            <h2 className="mb-3 max-w-2xl text-2xl font-bold leading-[1.12] tracking-[-0.03em] text-white sm:text-3xl md:mb-4 md:text-[2.75rem]">
              Vai abrir ou migrar o CNPJ?{" "}
              <span className="text-white/55">Comece pelo diagnóstico.</span>
            </h2>
            <p className="mb-5 max-w-xl text-sm leading-6 text-white/70 md:mb-6 md:text-base md:leading-relaxed">
              O <mark className="hl">diagnóstico inicial</mark> organiza o contexto da sua empresa
              antes de definir CNAE, regime tributário, documentos e proposta.
            </p>

            <ul className="mb-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-white/70 md:mb-8">
              {highlights.map((item) => (
                <li key={item.label} className="flex items-center gap-1.5">
                  <item.icon
                    className="h-3.5 w-3.5 text-brand-red md:h-4 md:w-4"
                    strokeWidth={1.85}
                  />
                  {item.label}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href="#lead-form"
                data-cta-source="final_primary"
                className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full bg-brand-red px-3 py-2.5 text-center text-xs font-semibold leading-tight text-white shadow-[0_8px_26px_-6px_rgba(215,25,32,0.6)] transition-transform hover:-translate-y-0.5 sm:min-h-12 sm:gap-2.5 sm:px-7 sm:py-3.5 sm:text-sm"
              >
                Fazer diagnóstico{" "}
                <ArrowRight className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" strokeWidth={1.75} />
              </a>
              <WhatsAppLink
                source="final_whatsapp"
                intent="Quero falar com a Vidotti e entender os próximos passos para meu CNPJ."
                className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full border border-white/20 bg-transparent px-3 py-2.5 text-center text-xs font-semibold leading-tight text-white transition-colors hover:border-white/40 hover:bg-white/5 sm:min-h-12 sm:gap-2.5 sm:px-7 sm:py-3.5 sm:text-sm"
              >
                WhatsApp
              </WhatsAppLink>
            </div>
          </div>

          <div
            data-reveal
            data-reveal-delay="120"
            className="border-y border-white/10 py-5 md:py-6"
          >
            <div className="flex items-center justify-between gap-3 pb-3 md:pb-4">
              <h3 className="text-base font-bold text-white md:text-xl">
                O que acontece no diagnóstico
              </h3>
              <CheckCircle2
                className="h-4 w-4 shrink-0 text-brand-red md:h-5 md:w-5"
                strokeWidth={1.75}
              />
            </div>

            <ol className="divide-y divide-white/10 border-t border-white/10">
              {closingPoints.map((item) => (
                <li
                  key={item.step}
                  className="grid grid-cols-[32px_1fr] items-baseline gap-3 py-3 md:py-3.5"
                >
                  <span className="text-xs font-bold tracking-[0.14em] text-brand-red">
                    {item.step}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-white/60 sm:text-sm">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-3 text-xs text-white/55 md:mt-4 md:pt-4">
              <span>Atendimento humano pelo WhatsApp</span>
              <span className="font-semibold text-white/80">
                {publicSiteConfig.contact.whatsappDisplay}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
