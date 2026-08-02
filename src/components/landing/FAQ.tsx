import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Quanto tempo leva para abrir um CNPJ?",
    a: "O prazo médio é de 48 horas úteis após o envio da documentação completa. Processos com exigência de alvará específico podem levar até 10 dias, dependendo da prefeitura.",
  },
  {
    q: "Preciso ter um endereço comercial?",
    a: "Sim, mas ele pode ser residencial (para determinadas atividades) ou virtual, por meio de coworkings e escritórios parceiros que indicamos.",
  },
  {
    q: "Qual a diferença entre MEI, ME e LTDA?",
    a: "MEI é indicado para faturamento até R$ 81 mil/ano. ME abrange até R$ 360 mil e pode ter sócios. LTDA é uma sociedade sem limite de faturamento, com responsabilidade limitada dos sócios.",
  },
  {
    q: "Já tenho contador — a Vidotti faz a migração?",
    a: "Sim. Cuidamos de todo o processo de transferência: balanços, obrigações acessórias e comunicação com o contador anterior. Sem burocracia para você.",
  },
  {
    q: "Como funciona a contabilidade mensal?",
    a: "Após a abertura, você tem acesso a um painel próprio, envia documentos pelo app e recebe guias, folha e relatórios gerenciais mensalmente, com consultor dedicado.",
  },
  {
    q: "Vocês atendem em todo o Brasil?",
    a: "Sim. Nossa operação é 100% digital, com atendimento presencial sob demanda em São Paulo, Rio de Janeiro e Belo Horizonte.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28 lg:py-36 bg-white">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 grid lg:grid-cols-12 gap-x-8 gap-y-10 lg:gap-y-14">
        <div className="lg:col-span-4" data-reveal>
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy/60">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            Perguntas frequentes
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[3rem] font-bold leading-[1.15] lg:leading-[1.08] text-navy">
            Tudo o que você precisa saber.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-sm">
            Não encontrou sua dúvida? Fale com um consultor Vidotti — atendimento de segunda a
            sábado, das 8h às 20h.
          </p>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                data-reveal
                data-reveal-delay={i * 50}
                className="border-b border-border-subtle first:border-t"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 sm:gap-6 py-5 sm:py-6 text-left group"
                >
                  <span
                    className={`text-base sm:text-lg font-medium transition-colors duration-300 ${
                      isOpen ? "text-navy" : "text-navy/80 group-hover:text-navy"
                    }`}
                  >
                    {f.q}
                  </span>
                  <Plus
                    strokeWidth={1.75}
                    className={`h-5 w-5 shrink-0 transition-all duration-300 ${
                      isOpen ? "rotate-45 text-brand-red" : "text-navy/40"
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-400 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 sm:pb-7 pr-4 sm:pr-10 text-sm text-muted-foreground leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
