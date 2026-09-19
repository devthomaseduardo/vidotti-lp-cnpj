import { Check } from "lucide-react";
import businesswomanImg from "@/assets/hero-empresaria.png";
import { WhatsAppLink } from "./WhatsAppLink";

const points = [
  "Abrir com CNAE ou natureza jurídica sem entender o impacto nos impostos.",
  "Continuar no MEI quando faturamento, atividade ou emissão de notas já exigem outra estrutura.",
  "Misturar finanças pessoais, caixa da empresa, emissão de notas e obrigações fiscais.",
  "Pagar impostos, pró-labore e encargos sem entender como essas decisões afetam o caixa.",
];

export function Benefits() {
  return (
    <section id="beneficios" className="relative overflow-hidden bg-[#0D1126] py-14 md:py-28 lg:min-h-[900px]">
      <div aria-hidden="true" className="pointer-events-none absolute right-[-220px] top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-brand-red/[0.06] blur-[150px]" />
      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-6">
        <div className="grid items-center gap-8 md:gap-14 lg:grid-cols-2 lg:gap-16">
          <div data-reveal className="relative z-20">
            <span className="mb-4 inline-block rounded-full border border-white/10 px-4 py-1.5 text-xs font-semibold text-white/60 md:mb-6">Por que isso importa</span>
            <h2 className="mb-4 max-w-[610px] text-2xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-3xl md:mb-6 md:text-5xl">CNPJ sem orientação pode custar tempo, caixa e tranquilidade.</h2>
            <p className="mb-6 max-w-lg text-sm leading-6 text-white/65 md:mb-8 md:text-lg md:leading-relaxed">O problema não é só abrir o CNPJ. É evitar enquadramento errado, obrigação esquecida e decisões fiscais que afetam o caixa.</p>
            <ul className="mb-7 max-w-[620px] space-y-3 md:mb-10 md:space-y-4">{points.map((point, index) => (<li key={point} className={`items-start gap-3 text-white ${index > 2 ? "hidden md:flex" : "flex"}`}><div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red text-white"><Check className="h-3.5 w-3.5" strokeWidth={3} /></div><span className="text-sm font-medium leading-relaxed text-white/85">{point}</span></li>))}</ul>
            <p className="mb-6 max-w-lg text-sm leading-6 text-white/55 md:mb-8">A abertura é só o início. Comece com uma estrutura que continue funcionando depois do CNPJ ativo.</p>
            <WhatsAppLink source="benefits_whatsapp" intent="Quero evitar erro de enquadramento e entender o melhor caminho para meu CNPJ." className="hidden items-center justify-center gap-2.5 rounded-full bg-brand-red px-8 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(215,25,32,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 md:inline-flex">Falar pelo WhatsApp</WhatsAppLink>
          </div>
          <div data-reveal className="photo-fade relative -mx-5 w-[calc(100%+2.5rem)] max-w-none lg:pointer-events-none lg:absolute lg:-right-[8vw] lg:bottom-0 lg:mx-0 lg:h-full lg:w-[46vw] lg:max-w-none xl:w-[48vw]">
            <div className="relative h-[390px] overflow-hidden sm:h-[450px] md:h-[590px] lg:h-full">
              <img src={businesswomanImg} alt="Empresária organizando a abertura do CNPJ com orientação contábil" loading="lazy" decoding="async" width={1315} height={1196} className="absolute inset-x-0 bottom-0 h-full w-full translate-y-8 scale-125 object-contain object-[58%_100%] brightness-[1.06] contrast-[1.02] saturate-[1.08] sm:scale-[1.18] md:translate-y-4 md:scale-110 md:object-[60%_100%] lg:translate-y-24 lg:scale-[1.2] lg:object-[52%_100%]" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-[42%] bg-gradient-to-r from-[#0D1126] via-[#0D1126]/55 to-transparent" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[22%] bg-gradient-to-t from-[#0D1126] via-[#0D1126]/20 to-transparent" />
            </div>
          </div>
          <WhatsAppLink source="benefits_whatsapp_mobile" intent="Quero evitar erro de enquadramento e entender o melhor caminho para meu CNPJ." className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-brand-red px-8 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(215,25,32,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 md:hidden">Falar pelo WhatsApp</WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
