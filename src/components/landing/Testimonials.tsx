import { CalendarCheck, FileCheck2, ShieldCheck } from "lucide-react";
import { WhatsAppLink } from "./WhatsAppLink";

const proofPoints = [
  {
    icon: CalendarCheck,
    title: "Sede em Campinas desde 2002",
    text: "Mais de duas décadas cuidando da abertura, impostos e folha de empresas de diferentes portes.",
  },
  {
    icon: FileCheck2,
    title: "Da abertura à rotina mensal",
    text: "CNPJ, desenquadramento MEI, troca de contador e assessoria fiscal contínua no mesmo escritório.",
  },
  {
    icon: ShieldCheck,
    title: "Diagnóstico antes da proposta",
    text: "Analisamos atividade, cidade e faturamento pelo WhatsApp antes de indicar prazo ou regime.",
  },
];

export function Testimonials() {
  return (
    <section
      className="relative overflow-hidden border-t border-white/5 bg-[#0A0D1E] py-8 md:py-16"
      id="prova"
    >
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-6 md:gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-14">
          <div data-reveal>
            <span className="mb-2.5 inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red md:mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Confiança
            </span>
            <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-[2.75rem]">
              Desde 2002 <span className="text-white/55">cuidando de empresas em Campinas.</span>
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/60 md:mt-4 md:text-base md:leading-relaxed">
              Escritório físico, experiência com empresas de vários portes e atendimento direto pelo
              WhatsApp.
            </p>
            <div className="mt-5 grid grid-cols-3 divide-x divide-white/10 border-y border-white/10 py-3.5 md:mt-6 md:py-4">
              {[
                { value: "2002", label: "início" },
                { value: "Campinas", label: "local" },
                { value: "Digital", label: "atendimento" },
              ].map((stat) => (
                <div key={stat.value} className="px-2 first:pl-0 last:pr-0 sm:px-3">
                  <p className="text-sm font-bold text-white sm:text-2xl">{stat.value}</p>
                  <p className="mt-0.5 text-[11px] text-white/55 sm:text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 hidden md:flex">
              <WhatsAppLink
                source="proof_whatsapp"
                intent="Quero falar com a Vidotti e entender se vocês atendem o perfil da minha empresa."
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-red px-7 py-3 text-sm font-semibold text-white shadow-[0_4px_20px_-4px_rgba(215,25,32,0.5)] transition-transform hover:-translate-y-0.5"
              >
                Falar com a equipe
              </WhatsAppLink>
            </div>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {proofPoints.map((point, index) => (
              <article
                key={point.title}
                data-reveal
                data-reveal-delay={index * 60}
                className="grid grid-cols-[28px_1fr] items-start gap-3.5 py-3.5 md:grid-cols-[36px_1fr] md:gap-4 md:py-5"
              >
                <point.icon
                  className="mt-0.5 h-5 w-5 text-brand-red md:h-6 md:w-6"
                  strokeWidth={1.75}
                />
                <div>
                  <h3 className="text-[15px] font-bold leading-snug text-white md:text-lg">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/60 md:text-sm md:leading-relaxed">
                    {point.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
