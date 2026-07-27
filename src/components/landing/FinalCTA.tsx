import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { BrandCurves } from "./BrandCurves";

export function FinalCTA() {
  return (
    <section id="cta" className="relative py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div
          data-reveal
          className="relative overflow-hidden rounded-[28px] brand-gradient p-12 lg:p-20 text-white shadow-elevated"
        >
          <BrandCurves className="absolute -top-40 -right-40 w-[720px] opacity-40" />
          <BrandCurves className="absolute -bottom-60 -left-40 w-[720px] opacity-25 rotate-180" />

          <div className="relative max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Pronto para começar
            </span>
            <h2 className="mt-6 text-4xl lg:text-6xl font-extrabold leading-tight">
              Sua empresa aberta em <span className="text-brand-red">48 horas</span> — com quem entende do assunto.
            </h2>
            <p className="mt-5 text-lg text-white/75 max-w-2xl">
              Agende uma conversa gratuita com um consultor sênior. Analisamos seu caso, sugerimos a estrutura ideal e conduzimos o processo do início ao fim.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/551130000000"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-red text-white px-7 py-4 text-base font-semibold shadow-card hover:brightness-110 hover:-translate-y-0.5 transition-all"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
                Falar no WhatsApp
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
              </a>
              <a
                href="tel:+551130000000"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur text-white px-7 py-4 text-base font-semibold hover:bg-white/10 transition-all"
              >
                <Phone className="h-5 w-5" strokeWidth={1.75} />
                (11) 3000-0000
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
