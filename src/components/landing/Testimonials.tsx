import { BadgeCheck, Building2, CalendarCheck, FileCheck2, ShieldCheck } from "lucide-react";
import { BrandCurves } from "./BrandCurves";
import { WhatsAppLink } from "./WhatsAppLink";

const proofPoints = [
  {
    icon: CalendarCheck,
    title: "Atuação desde 2002",
    text: "Histórico de atendimento contábil, fiscal e trabalhista para empresas em diferentes fases.",
  },
  {
    icon: Building2,
    title: "Endereço e canais oficiais",
    text: "Você encontra endereço em Campinas/SP, WhatsApp, e-mail e Instagram institucional da Vidotti.",
  },
  {
    icon: FileCheck2,
    title: "Escopo completo",
    text: "Atendimento para abertura, fiscal, contábil, trabalhista, desenquadramento MEI e planejamento tributário.",
  },
  {
    icon: ShieldCheck,
    title: "Orientação responsável",
    text: "A orientação considera atividade, documentos, prefeitura e regime. Sem resposta automática ou genérica.",
  },
];

export function Testimonials() {
  return (
    <section
      className="relative overflow-hidden border-t border-white/5 bg-[#0A0D1E] py-20 md:py-28"
      id="prova"
    >
      <div className="pointer-events-none absolute -left-52 top-0 w-[820px] opacity-5">
        <BrandCurves className="w-full" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div data-reveal>
            <span className="mb-6 inline-flex items-center justify-center gap-2 text-xs font-semibold text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Prova de confiança
            </span>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
              Confiança vem de histórico, presença e orientação responsável.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/60">
              Você consegue verificar tempo de atuação, canais oficiais, escopo de atendimento e
              como a conversa inicial evita resposta genérica para o seu caso.
            </p>

            <div className="mt-8 grid grid-cols-3 divide-x divide-white/10 border-y border-white/10 py-5">
              {[
                { value: "2002", label: "início da atuação" },
                { value: "4", label: "áreas de atendimento" },
                { value: "SP", label: "Campinas e digital" },
              ].map((stat) => (
                <div key={stat.value} className="px-3 first:pl-0 last:pr-0">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs text-white/55">{stat.label}</p>
                </div>
              ))}
            </div>

            <WhatsAppLink
              source="proof_whatsapp"
              intent="Quero validar se a Vidotti atende o perfil da minha empresa."
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_-4px_rgba(215,25,32,0.5)] transition-transform hover:-translate-y-0.5"
            >
              Validar meu caso
            </WhatsAppLink>
          </div>

          <div className="border-y border-white/10">
            {proofPoints.map((point, index) => (
              <article
                key={point.title}
                data-reveal
                data-reveal-delay={index * 70}
                className="grid gap-4 border-b border-white/10 py-6 last:border-b-0 sm:grid-cols-[52px_1fr]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                  <point.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-bold text-white">{point.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{point.text}</p>
                </div>
              </article>
            ))}

            <article className="py-6">
              <div className="flex gap-4">
                <BadgeCheck className="mt-1 h-6 w-6 shrink-0 text-brand-red" strokeWidth={1.75} />
                <div>
                  <h3 className="text-lg font-bold text-white">Próximo passo seguro</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    A conversa inicial serve para entender o contexto antes de falar em preço, prazo
                    ou regime tributário.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
