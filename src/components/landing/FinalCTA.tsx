import { ArrowRight } from "lucide-react";
import { WhatsappIcon } from "@/components/WhatsappIcon";
import { BrandCurvesLight } from "./BrandCurves";

export function FinalCTA() {
  return (
    <section id="cta" className="relative py-20 sm:py-28 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6">
        <div
          data-reveal
          className="relative overflow-hidden rounded-[20px] brand-gradient px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20 text-white"
        >
          <BrandCurvesLight className="absolute inset-0 w-full h-full pointer-events-none" />

          <div className="relative grid lg:grid-cols-12 gap-y-8 lg:gap-y-10 gap-x-8 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-bold leading-[1.2] lg:leading-[1.12]">
                Pronto para abrir seu CNPJ com
                <br className="hidden lg:block" /> quem realmente entende do assunto?
              </h2>
              <p className="mt-4 sm:mt-5 text-white/60 max-w-xl text-sm sm:text-base">
                Atendimento rápido, transparente e sem complicação. Um consultor sênior analisa seu
                caso e conduz o processo do início ao fim.
              </p>
            </div>

            <div className="lg:col-span-4 lg:col-start-9 flex flex-col items-start lg:items-end gap-4 sm:gap-5">
              <a
                href="https://wa.me/5519996355181"
                className="group inline-flex w-full lg:w-auto items-center justify-center gap-2 rounded-full bg-white text-navy px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
              >
                Abrir meu CNPJ
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.75}
                />
              </a>
              <a
                href="https://wa.me/5519996355181"
                className="inline-flex items-center gap-2 text-sm text-white/65 hover:text-white transition-colors duration-300"
              >
                Ou fale com a gente no WhatsApp
                <WhatsappIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
