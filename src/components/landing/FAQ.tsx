import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "./faq-data";
import { WhatsAppLink } from "./WhatsAppLink";

export function FAQ() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden border-t border-white/5 bg-[#0D1126] py-10 md:py-28"
    >
      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-6">
        <div
          className="mb-8 grid gap-4 md:mb-14 md:gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-end"
          data-reveal
        >
          <div>
            <span className="mb-4 inline-block rounded-full border border-white/10 px-4 py-1.5 text-xs font-semibold text-white/60 md:mb-6">
              Dúvidas frequentes
            </span>
            <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-5xl">
              Perguntas frequentes{" "}
              <span className="text-white/55">sobre abrir ou migrar o CNPJ.</span>
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-white/60 md:text-base md:leading-relaxed">
            Respostas diretas sobre documentos, prazo, regime tributário, MEI e troca de contador.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue="faq-0"
          className="border-y border-white/10 md:hidden"
        >
          {faqItems.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index}`} className="border-white/10">
              <AccordionTrigger className="py-4 text-left text-sm font-bold leading-snug text-white hover:no-underline">
                <span className="flex items-start gap-3 pr-2">
                  <HelpCircle
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-red"
                    strokeWidth={1.75}
                  />
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pl-8 text-sm leading-6 text-white/60">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="hidden gap-x-12 md:grid md:grid-cols-2">
          {faqItems.map((item, index) => (
            <article
              key={item.question}
              data-reveal
              data-reveal-delay={index * 40}
              className="border-t border-white/10 py-4 md:py-6"
            >
              <div className="flex gap-3 md:gap-4">
                <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" strokeWidth={1.75} />
                <div>
                  <h3 className="mb-2 text-sm font-bold text-white md:mb-3 md:text-base">
                    {item.question}
                  </h3>
                  <p className="text-sm leading-6 text-white/60 md:leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex md:mt-12" data-reveal>
          <WhatsAppLink
            source="faq_whatsapp"
            intent="Li as dúvidas do site e quero entender o melhor caminho para meu CNPJ."
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_-4px_rgba(215,25,32,0.5)] transition-transform hover:-translate-y-0.5"
          >
            Chamar no WhatsApp
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
