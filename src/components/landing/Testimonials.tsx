import { BadgeCheck, Building2, CalendarCheck, FileCheck2, ShieldCheck } from "lucide-react";
import { BrandCurves } from "./BrandCurves";
import { WhatsAppLink } from "./WhatsAppLink";

const proofPoints = [
  { icon: CalendarCheck, title: "Atuação desde 2002", text: "Histórico de atendimento contábil, fiscal e trabalhista para empresas em diferentes fases." },
  { icon: Building2, title: "Presença em Campinas", text: "Endereço físico, WhatsApp, e-mail e Instagram institucional para você saber com quem está falando." },
  { icon: FileCheck2, title: "Escopo para a jornada da empresa", text: "Abertura, desenquadramento MEI, troca de contador, planejamento tributário e rotina contábil em um mesmo escritório." },
  { icon: ShieldCheck, title: "Atendimento humano", text: "A conversa começa pelo contexto da empresa antes de discutir preço, prazo ou regime tributário." },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[#0A0D1E] py-14 md:py-28" id="prova">
      <div className="pointer-events-none absolute -left-52 top-0 w-[820px] opacity-5"><BrandCurves className="w-full" /></div>
      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6"><div className="grid gap-9 md:gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div data-reveal><span className="mb-4 inline-flex items-center justify-center gap-2 text-xs font-semibold text-white/60 md:mb-6"><span className="h-1.5 w-1.5 rounded-full bg-brand-red" />Confiança</span><h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-5xl">Histórico, presença e orientação antes de qualquer decisão.</h2><p className="mt-4 text-sm leading-6 text-white/60 md:mt-6 md:text-base md:leading-relaxed">Experiência, presença local e atendimento direto para entender o cenário da empresa.</p><div className="mt-6 grid grid-cols-3 divide-x divide-white/10 border-y border-white/10 py-4 md:mt-8 md:py-5">{[{ value: "2002", label: "início" }, { value: "Campinas", label: "local" }, { value: "Digital", label: "atendimento" }].map((stat) => (<div key={stat.value} className="px-2 first:pl-0 last:pr-0 sm:px-3"><p className="text-base font-bold text-white sm:text-2xl">{stat.value}</p><p className="mt-1 text-[11px] text-white/55 sm:text-xs">{stat.label}</p></div>))}</div><WhatsAppLink source="proof_whatsapp" intent="Quero falar com a Vidotti e entender se vocês atendem o perfil da minha empresa." className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-7 py-3 text-sm font-semibold text-white shadow-[0_4px_20px_-4px_rgba(215,25,32,0.5)] transition-transform hover:-translate-y-0.5 md:mt-8 md:px-8 md:py-3.5">Falar pelo WhatsApp</WhatsAppLink></div>
        <div className="border-y border-white/10">{proofPoints.map((point, index) => (<article key={point.title} data-reveal data-reveal-delay={index * 70} className="grid gap-3 border-b border-white/10 py-4 last:border-b-0 sm:grid-cols-[52px_1fr] md:gap-4 md:py-6"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-red/10 text-brand-red md:h-11 md:w-11"><point.icon className="h-5 w-5" strokeWidth={1.75} /></div><div><h3 className="mb-2 text-base font-bold text-white md:mb-3 md:text-lg">{point.title}</h3><p className="text-sm leading-6 text-white/60 md:leading-relaxed">{point.text}</p></div></article>))}<article className="py-4 md:py-6"><div className="flex gap-3 md:gap-4"><BadgeCheck className="mt-1 h-6 w-6 shrink-0 text-brand-red" strokeWidth={1.75} /><div><h3 className="text-base font-bold text-white md:text-lg">Próximo passo sem resposta genérica</h3><p className="mt-2 text-sm leading-6 text-white/70 md:leading-relaxed">O diagnóstico inicial entende atividade, cidade e momento da empresa antes da proposta.</p></div></div></article></div>
      </div></div>
    </section>
  );
}
