import { useState } from "react";
import { CircleHelp, ChevronRight } from "lucide-react";

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
    <section id="faq" className="relative py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4" data-reveal>
          <span className="text-xs font-semibold text-brand-red uppercase tracking-widest">
            Perguntas frequentes
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-navy">
            Tudo o que você precisa saber.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Não encontrou sua dúvida? Fale com um consultor Vidotti — respondemos em minutos.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-xl bg-navy/5 px-4 py-3 text-sm text-navy">
            <CircleHelp className="h-4 w-4" strokeWidth={1.5} />
            Suporte de segunda a sábado, 8h às 20h.
          </div>
        </div>

        <div className="lg:col-span-8 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                data-reveal
                data-reveal-delay={i * 40}
                className={`rounded-[18px] border transition-all duration-300 ${
                  isOpen ? "border-navy/20 bg-background shadow-soft" : "border-border bg-card"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-navy">{f.q}</span>
                  <ChevronRight
                    strokeWidth={1.75}
                    className={`h-5 w-5 text-navy transition-transform duration-300 ${
                      isOpen ? "rotate-90 text-brand-red" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">
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
