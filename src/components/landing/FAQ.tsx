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
      className="relative overflow-hidden border-t border-white/5 bg-[#0D1126] py-8 md:py-16"
    >
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div
          className="mb-6 grid gap-3 md:mb-9 md:gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
          data-reveal
        >
          <div>
            <span className="mb-2.5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red md:mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Dúvidas frequentes
            </span>
            <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-[2.75rem]">
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
          className="border-t border-white/10 md:grid md:grid-cols-2 md:gap-x-10"
        >
          {faqItems.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index}`} className="border-white/10">
              <AccordionTrigger className="py-3.5 text-left text-[13px] font-bold leading-snug text-white hover:no-underline sm:text-sm md:py-4 md:text-base">
                <span className="flex items-start gap-2.5 pr-2 md:gap-3">
                  <HelpCircle
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-red md:h-5 md:w-5"
                    strokeWidth={1.75}
                  />
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pl-6 text-xs leading-relaxed text-white/65 sm:text-sm md:pl-8 md:leading-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 hidden md:flex" data-reveal>
          <WhatsAppLink
            source="faq_whatsapp"
            intent="Li as dúvidas do site e quero entender o melhor caminho para meu CNPJ."
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_-4px_rgba(215,25,32,0.5)] transition-transform hover:-translate-y-0.5"
          >
            Chamar no WhatsApp
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
