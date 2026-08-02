import { ArrowRight, CheckCircle2 } from "lucide-react";
import { WhatsappIcon } from "@/components/WhatsappIcon";
import { DashboardMock } from "./DashboardMock";
import { BrandArcSoft, BrandCurves } from "./BrandCurves";
import { useCountUp, useParallax } from "@/hooks/use-scroll-reveal";

export function Hero() {
  const arcRef = useParallax<HTMLDivElement>(0.05);
  const curvesRef = useParallax<HTMLDivElement>(0.09);
  const countRef = useCountUp(2400);

  return (
    <section
      id="top"
      className="relative flex items-center pt-28 pb-20 sm:pt-32 sm:pb-24 lg:min-h-[92vh] overflow-hidden"
    >
      <div ref={arcRef} className="absolute inset-x-0 -top-24 pointer-events-none">
        <BrandArcSoft className="w-full h-[720px]" />
      </div>
      <div
        ref={curvesRef}
        className="absolute -right-40 top-10 w-[900px] pointer-events-none hidden sm:block"
      >
        <BrandCurves className="w-full opacity-60" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-6 grid lg:grid-cols-12 gap-x-6 gap-y-14 lg:gap-y-12 items-center w-full">
        <div className="lg:col-span-6">
          <span
            data-reveal
            className="inline-flex items-center gap-2 text-[11px] font-semibold text-navy/70 uppercase tracking-[0.18em]"
          >
            <CheckCircle2 className="h-3.5 w-3.5 text-brand-red" strokeWidth={2} />
            100% online, sem burocracia
          </span>

          <h1
            data-reveal
            data-reveal-delay="80"
            className="mt-6 sm:mt-7 text-[2.5rem] leading-[1.1] sm:text-5xl sm:leading-[1.08] xl:text-6xl xl:leading-[1.05] font-extrabold text-navy max-w-xl"
          >
            Abra seu CNPJ com o <span className="text-brand-red">regime tributário certo</span>{" "}
            desde o primeiro dia.
          </h1>

          <p
            data-reveal
            data-reveal-delay="160"
            className="mt-5 sm:mt-7 text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed"
          >
            A Vidotti Consultoria conduz cada etapa da abertura, do enquadramento fiscal à emissão
            da primeira nota, com precisão contábil, pra você focar no que importa: o seu negócio.
          </p>

          <div
            data-reveal
            data-reveal-delay="240"
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <a
              href="#cta"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-red text-white px-6 sm:px-7 py-3.5 sm:py-4 text-[15px] sm:text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-16px_rgb(215_25_32_/_0.75)]"
            >
              Abrir meu CNPJ
              <ArrowRight
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.75}
              />
            </a>
            <a
              href="https://wa.me/5519996355181"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/15 text-navy px-6 sm:px-7 py-3.5 sm:py-4 text-[15px] sm:text-base font-semibold transition-all duration-300 hover:border-navy/40 hover:-translate-y-0.5"
            >
              <WhatsappIcon className="h-5 w-5" />
              Falar no WhatsApp
            </a>
          </div>

          <p data-reveal data-reveal-delay="280" className="mt-4 text-xs text-muted-foreground">
            Sem compromisso · Resposta em poucas horas
          </p>

          <div
            data-reveal
            data-reveal-delay="320"
            className="mt-12 sm:mt-14 flex flex-wrap items-baseline gap-x-8 gap-y-3 sm:gap-x-10 border-t border-border-subtle pt-6 max-w-md"
          >
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-bold text-navy font-mono-tech">
                +<span ref={countRef}>2.400</span>
              </span>
              <span className="text-sm text-muted-foreground">empresas abertas</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-bold text-navy font-mono-tech">+15</span>
              <span className="text-sm text-muted-foreground">anos de mercado</span>
            </div>
          </div>
        </div>

        <div
          data-reveal="mask"
          data-reveal-delay="120"
          className="lg:col-span-6 relative flex justify-center lg:justify-end mt-2 lg:mt-0"
        >
          <DashboardMock className="w-full max-w-[440px] sm:max-w-[480px]" />
        </div>
      </div>
    </section>
  );
}
