import { HelpCircle } from "lucide-react";
import { WhatsAppLink } from "./WhatsAppLink";

const faqs = [
  {
    question: "Quais documentos preciso para abrir meu CNPJ?",
    answer:
      "A lista depende da atividade, endereço, tipo de empresa e exigências locais. No primeiro atendimento, você entende quais dados e documentos separar para o seu caso.",
  },
  {
    question: "A Vidotti ajuda a escolher CNAE e regime tributário?",
    answer:
      "Sim. Você recebe orientação inicial sobre CNAE, natureza jurídica e regime tributário, porque essas escolhas impactam impostos, notas e obrigações desde o começo.",
  },
  {
    question: "Sou MEI e preciso desenquadrar. Vocês fazem essa migração?",
    answer:
      "Sim. A Vidotti avalia se sua empresa já precisa sair do MEI, quais impactos fiscais existem e quais etapas entram na migração para uma estrutura adequada.",
  },
  {
    question: "Já tenho contador. Posso trocar para a Vidotti?",
    answer:
      "Pode. Você entende quais documentos, pendências e rotinas precisam ser conferidos antes da troca, para não levar problemas antigos sem visibilidade.",
  },
  {
    question: "O atendimento é apenas para Campinas?",
    answer:
      "A Vidotti tem presença em Campinas/SP e também atende por canais digitais. A viabilidade depende do tipo de serviço, município e necessidade da empresa.",
  },
  {
    question: "Quanto tempo leva para abrir a empresa?",
    answer:
      "O prazo varia conforme documentação, atividade, município e órgãos responsáveis. Por isso, a Vidotti primeiro confirma o cenário antes de assumir prazo.",
  },
  {
    question: "Quanto custa a abertura ou a assessoria?",
    answer:
      "O valor depende do tipo de empresa, regime, atividade e escopo de atendimento. A conversa inicial serve para entender seu caso antes de passar uma proposta.",
  },
  {
    question: "Depois do CNPJ aberto, a Vidotti acompanha a rotina fiscal?",
    answer:
      "Sim. Além da abertura, a Vidotti atua com rotina contábil, fiscal, trabalhista, planejamento tributário e apoio financeiro conforme o perfil da empresa.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden border-t border-white/5 bg-[#0D1126] py-20 md:py-28"
    >
      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-end" data-reveal>
          <div>
            <span className="mb-6 inline-block rounded-full border border-white/10 px-4 py-1.5 text-xs font-semibold text-white/60">
              Dúvidas frequentes
            </span>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
              Dúvidas antes de abrir ou migrar seu CNPJ.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-white/60">
            Respostas diretas para entender documentos, prazo, regime tributário, MEI, troca de
            contador e atendimento antes do primeiro contato.
          </p>
        </div>

        <div className="grid gap-x-12 md:grid-cols-2">
          {faqs.map((item, index) => (
            <article
              key={item.question}
              data-reveal
              data-reveal-delay={index * 40}
              className="border-t border-white/10 py-6"
            >
              <div className="flex gap-4">
                <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" strokeWidth={1.75} />
                <div>
                  <h3 className="mb-3 text-base font-bold text-white">{item.question}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{item.answer}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center" data-reveal>
          <WhatsAppLink
            source="faq_whatsapp"
            intent="Li as dúvidas do site e quero entender o melhor caminho para meu CNPJ."
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_-4px_rgba(215,25,32,0.5)] transition-transform hover:-translate-y-0.5"
          >
            Tirar minha dúvida no WhatsApp
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
