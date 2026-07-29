import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { WhatsappIcon } from "@/components/WhatsappIcon";
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
            <CheckCircle2 className="h-3.5 w-3.5 text-brand-red" strokeWidth={2} />
            100% online, sem burocracia
          </span>

          <h1
            data-reveal
            data-reveal-delay="80"
            className="mt-7 text-5xl xl:text-6xl font-extrabold leading-[1.05] text-navy max-w-xl"
          >
            Abra seu CNPJ com o{" "}
            <span className="text-brand-red">regime tributário certo</span> desde o primeiro dia.
          </h1>

          <p
            data-reveal
            data-reveal-delay="160"
            className="mt-7 text-lg text-muted-foreground max-w-lg leading-relaxed"
          >
            A Vidotti Consultoria conduz cada etapa da abertura, do enquadramento
            fiscal à emissão da primeira nota, com precisão contábil, pra você focar
            no que importa: o seu negócio.
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
              href="https://wa.me/5519996355181"
              className="inline-flex items-center gap-2 rounded-full border border-navy/15 text-navy px-7 py-4 text-base font-semibold transition-all duration-300 hover:border-navy/40 hover:-translate-y-0.5"
            >
              <WhatsappIcon className="h-5 w-5" />
              Falar no WhatsApp
            </a>
          </div>

          <p
            data-reveal
            data-reveal-delay="280"
            className="mt-4 text-xs text-muted-foreground"
          >
            Sem compromisso · Resposta em poucas horas
          </p>

          <div
            data-reveal
            data-reveal-delay="320"
            className="mt-14 flex items-baseline gap-10 border-t border-border-subtle pt-6 max-w-md"
          >
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-navy">
                +<span ref={countRef}>2.400</span>
              </span>
              <span className="text-sm text-muted-foreground">empresas abertas</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-navy">+15</span>
              <span className="text-sm text-muted-foreground">anos de mercado</span>
            </div>
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
            className="w-[86%] max-w-[660px] lg:w-full lg:max-w-[740px] photo-fade select-none transition-transform duration-[900ms] ease-out"
          />

          <div
            data-reveal
            data-reveal-delay="400"
            className="absolute bottom-6 left-0 lg:left-4 flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur px-5 py-4 shadow-[0_20px_50px_-20px_rgba(31,35,68,0.35)] border border-navy/5 max-w-[260px]"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red/10">
              <ShieldCheck className="h-5 w-5 text-brand-red" strokeWidth={1.75} />
            </div>
            <p className="text-sm font-medium text-navy leading-snug">
              Regime tributário correto desde o início
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}