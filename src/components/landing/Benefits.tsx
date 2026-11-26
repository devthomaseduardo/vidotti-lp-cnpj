import { Check } from "lucide-react";
import businesswomanImg from "@/assets/empresaria-telefone.webp";
import { WhatsAppLink } from "./WhatsAppLink";

const points = [
  {
    title: "CNAE ou regime errado",
    text: "Eleva os impostos desde o 1º mês de operação.",
  },
  {
    title: "Estourar o limite do MEI",
    text: "Gera multa e cobrança retroativa sem migração planejada.",
  },
  {
    title: "Caixa e notas sem controle",
    text: "Misturar conta pessoal com obrigações fiscais trava o negócio.",
  },
  {
    title: "Pró-labore mal calculado",
    text: "Pesa nos encargos e reduz a margem da empresa.",
  },
];

export function Benefits() {
  return (
    <section
      id="beneficios"
      className="relative overflow-hidden bg-[#0D1126] pt-8 pb-0 md:py-16 lg:pb-0"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-220px] top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-brand-red/[0.06] blur-[150px]"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="grid items-end gap-6 md:grid-cols-12 md:gap-10 lg:gap-12">
          <div data-reveal className="relative z-20 md:col-span-7 md:pb-16">
            <span className="mb-2 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red sm:text-xs md:mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Por que isso importa
            </span>
            <h2 className="mb-2.5 max-w-2xl text-2xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-3xl md:mb-4 md:text-[2.75rem]">
              Abrir do jeito errado <span className="text-white/55">custa caro depois.</span>
            </h2>
            <p className="mb-5 max-w-xl text-sm leading-6 text-white/70 md:mb-6 md:text-base md:leading-relaxed">
              O problema não é só abrir o CNPJ. É evitar{" "}
              <mark className="hl">enquadramento errado, obrigação esquecida</mark> e decisões
              fiscais que pesam no caixa.
            </p>

            <ul className="hidden max-w-xl space-y-3 md:block">
              {points.map((point) => (
                <li key={point.title} className="flex items-start gap-3 text-white">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </div>
                  <span className="text-sm leading-relaxed text-white/85">
                    <strong className="font-semibold text-white">{point.title}:</strong>{" "}
                    <span className="text-white/65">{point.text}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-7 hidden md:block">
              <WhatsAppLink
                source="benefits_whatsapp"
                intent="Quero evitar erro de enquadramento e entender o melhor caminho para meu CNPJ."
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(215,25,32,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
              >
                Falar com consultor
              </WhatsAppLink>
            </div>
          </div>

          <div data-reveal data-reveal-delay="160" className="relative md:col-span-5">
            <div className="grid grid-cols-[1fr_205px] items-end gap-2 sm:grid-cols-[1fr_255px] md:block">
              <ul className="space-y-3 pb-7 md:hidden">
                {points.map((point) => (
                  <li key={point.title} className="flex items-start gap-2">
                    <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
                      <Check className="h-2.5 w-2.5" strokeWidth={3} />
                    </div>
                    <div>
                      <p className="text-xs font-bold leading-tight text-white">{point.title}</p>
                      <p className="mt-0.5 text-[11px] leading-snug text-white/55">{point.text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="photo-fade relative flex items-end justify-end md:h-[520px] lg:h-[580px]">
                <img
                  src={businesswomanImg}
                  alt="Empresária sorridente falando ao telefone com um café na mão"
                  loading="lazy"
                  decoding="async"
                  width={1111}
                  height={1416}
                  className="block h-auto w-full max-w-[205px] object-contain object-bottom brightness-[1.06] contrast-[1.02] saturate-[1.08] sm:max-w-[255px] md:h-full md:max-w-none"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0D1126] via-[#0D1126]/45 to-transparent md:h-16"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
