import { ArrowRight, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-empresario.png";
import { BrandArcSoft, BrandCurves } from "./BrandCurves";
import { useCountUp, useParallax } from "@/hooks/use-scroll-reveal";

export function Hero() {
  const arcRef = useParallax<HTMLDivElement>(0.05);
  const curvesRef = useParallax<HTMLDivElement>(0.09);
  const countRef = useCountUp(2400);

  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-center pt-32 pb-24 overflow-hidden"
    >
      <div ref={arcRef} className="absolute inset-x-0 -top-24 pointer-events-none">
        <BrandArcSoft className="w-full h-[720px]" />
      </div>
      <div ref={curvesRef} className="absolute -right-40 top-10 w-[900px] pointer-events-none">
        <BrandCurves className="w-full opacity-60" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 grid lg:grid-cols-12 gap-x-6 gap-y-12 items-center w-full">
        <div className="lg:col-span-6">

          <span
            data-reveal
            className="inline-flex items-center gap-2 text-[11px] font-semibold text-navy/70 uppercase tracking-[0.18em]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            100% online
          </span>

          <h1
            data-reveal
            data-reveal-delay="80"
            className="mt-7 text-5xl xl:text-6xl font-extrabold leading-[1.05] text-navy max-w-xl"
          >
            Abra seu CNPJ com{" "}
            <span className="text-brand-red">segurança, agilidade</span> e assessoria de alto padrão.
          </h1>

          <p
            data-reveal
            data-reveal-delay="160"
            className="mt-7 text-lg text-muted-foreground max-w-lg leading-relaxed"
          >
            Da escolha do regime tributário à emissão do primeiro documento fiscal — a Vidotti
            Consultoria conduz cada etapa da abertura da sua empresa com precisão contábil e visão
            de negócio.
          </p>

          <div data-reveal data-reveal-delay="240" className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-red text-white px-7 py-4 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-16px_rgb(215_25_32_/_0.75)]"
            >
              Abrir meu CNPJ
              <ArrowRight
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.75}
              />
            </a>
            <a
              href="https://wa.me/551130000000"
              className="inline-flex items-center gap-2 rounded-full border border-navy/15 text-navy px-7 py-4 text-base font-semibold transition-all duration-300 hover:border-navy/40 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
              Falar no WhatsApp
            </a>
          </div>

          <div
            data-reveal
            data-reveal-delay="320"
            className="mt-14 flex items-baseline gap-4 border-t border-border-subtle pt-6 max-w-xs"
          >
            <span className="text-3xl font-bold text-navy">
              +<span ref={countRef}>2.400</span>
            </span>
            <span className="text-sm text-muted-foreground">empresas abertas</span>
          </div>
        </div>

        <div
          data-reveal="mask"
          data-reveal-delay="120"
          className="lg:col-span-6 relative flex justify-center lg:justify-end"
        >
          <img
            src={heroImg}
            alt="Empresário atendido pela Vidotti Consultoria"
            className="w-[86%] max-w-[560px] lg:w-full lg:max-w-[640px] photo-fade select-none transition-transform duration-[900ms] ease-out hover:scale-[1.02]"
          />
        </div>


      </div>
    </section>
  );
}
