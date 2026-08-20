import { Check } from "lucide-react";
import { WhatsAppLink } from "./WhatsAppLink";

const points = [
  "Abrir com CNAE ou natureza jurídica sem entender o impacto nos impostos.",
  "Continuar no MEI quando faturamento, atividade ou emissão de notas já exigem outra estrutura.",
  "Misturar finanças pessoais, caixa da empresa, emissão de notas e obrigações fiscais.",
  "Pagar impostos, pró-labore e encargos sem entender como essas decisões afetam o caixa.",
];

export function Benefits() {
  return (
    <section id="beneficios" className="relative overflow-hidden bg-[#0D1126] py-20 md:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute right-[-220px] top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-brand-red/[0.06] blur-[150px]" />
      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <span className="mb-6 inline-block rounded-full border border-white/10 px-4 py-1.5 text-xs font-semibold text-white/60">Por que isso importa</span>
            <h2 className="mb-6 max-w-[610px] text-3xl font-bold leading-tight tracking-[-0.03em] text-white md:text-5xl">CNPJ sem orientação pode custar tempo, caixa e tranquilidade.</h2>
            <p className="mb-8 max-w-lg text-base leading-7 text-white/65 md:text-lg md:leading-relaxed">O problema não é só abrir o CNPJ. É começar com enquadramento errado, obrigação esquecida e decisões fiscais tomadas sem entender os efeitos no caixa.</p>
            <ul className="mb-10 max-w-[620px] space-y-4">{points.map((point) => (<li key={point} className="flex items-start gap-3 text-white"><div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red text-white"><Check className="h-3.5 w-3.5" strokeWidth={3} /></div><span className="text-sm font-medium leading-relaxed text-white/85">{point}</span></li>))}</ul>
            <p className="mb-8 max-w-lg text-sm leading-6 text-white/55">A abertura é só o início. O objetivo é começar com uma estrutura que continue funcionando depois que o CNPJ estiver ativo.</p>
            <WhatsAppLink source="benefits_whatsapp" intent="Quero evitar erro de enquadramento e entender o melhor caminho para meu CNPJ." className="inline-flex items-center justify-center rounded-full bg-brand-red px-8 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(215,25,32,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110">Falar pelo WhatsApp</WhatsAppLink>
          </div>
          <div data-reveal className="relative mx-auto w-full max-w-[620px] lg:mr-0">
            <div aria-hidden="true" className="absolute inset-x-[10%] bottom-[-16px] h-[72%] rounded-[48px] bg-black/35 blur-[42px]" />
            <div className="relative h-[400px] overflow-hidden md:h-[470px] lg:h-[520px]">
              <img src="/contadores/Gustavo%20Vidotti%20e%20Pedro%20Vidotti2.jpg" alt="Equipe da Vidotti Contabilidade" loading="lazy" decoding="async" width={1315} height={1197} style={{ WebkitMaskImage: "radial-gradient(ellipse 76% 88% at 50% 48%, #000 58%, rgba(0,0,0,0.96) 72%, transparent 100%)", maskImage: "radial-gradient(ellipse 76% 88% at 50% 48%, #000 58%, rgba(0,0,0,0.96) 72%, transparent 100%)" }} className="absolute inset-0 h-full w-full object-cover object-[50%_18%] brightness-[1.06] contrast-[1.02] saturate-[1.08]" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 shadow-[inset_0_0_54px_20px_rgba(13,17,38,0.68)] md:shadow-[inset_0_0_72px_26px_rgba(13,17,38,0.72)]" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[18%] bg-gradient-to-t from-[#0D1126] via-[#0D1126]/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
