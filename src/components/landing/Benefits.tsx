import { Check } from "lucide-react";
import { WhatsAppLink } from "./WhatsAppLink";

export function Benefits() {
  const points = [
    "Abrir com CNAE ou natureza jurídica sem avaliar impacto tributário.",
    "Ficar no MEI depois que a operação já exige outra estrutura.",
    "Misturar finanças pessoais, caixa da empresa, notas e obrigações fiscais.",
    "Pagar impostos sem entender de onde veio cada guia.",
    "Deixar folha, pró-labore e encargos para resolver só quando vira urgência.",
  ];

  return (
    <section id="beneficios" className="relative overflow-hidden bg-[#0D1126] py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div data-reveal>
            <span className="mb-6 inline-block rounded-full border border-white/10 px-4 py-1.5 text-xs font-semibold text-white/60">
              Por que isso importa
            </span>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-5xl">
              Contabilidade ruim custa tempo, caixa e tranquilidade.
            </h2>

            <p className="mb-8 max-w-lg text-lg leading-relaxed text-white/70">
              O problema não é só abrir o CNPJ. É começar a empresa com enquadramento errado,
              obrigação esquecida e decisões fiscais tomadas sem clareza.
            </p>

            <ul className="mb-10 space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-white">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-medium leading-relaxed text-white/90">{point}</span>
                </li>
              ))}
            </ul>

            <WhatsAppLink
              source="benefits_whatsapp"
              intent="Quero evitar erro de enquadramento e entender o melhor caminho para meu CNPJ."
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_-4px_rgba(215,25,32,0.5)] transition-transform hover:-translate-y-0.5"
            >
              Conversar com um consultor
            </WhatsAppLink>
          </div>

          <div className="relative" data-reveal="mask" data-reveal-delay="200">
            <div className="overflow-hidden rounded-2xl bg-[#151933] md:rounded-[28px]">
              <img
                src="/contadores/Gustavo%20Vidotti%20e%20Pedro%20Vidotti2.jpg"
                alt="Equipe da Vidotti Contabilidade"
                className="aspect-[4/3] w-full object-cover object-[50%_18%] md:aspect-[5/4] lg:aspect-[4/3]"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
