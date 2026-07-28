import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { BrandCurves } from "./BrandCurves";
import { useParallax } from "@/hooks/use-scroll-reveal";

const testimonials = [
  {
    name: "Marina Prado",
    role: "CEO, Prado Arquitetura",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&w=200&h=200&facepad=2.5&q=80",
    quote:
      "A Vidotti reestruturou nossa operação em menos de duas semanas. Saímos do Simples para o Presumido com uma economia real de 22% em impostos.",
  },
  {
    name: "Rafael Andrade",
    role: "Sócio-fundador, Tecnix Labs",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=facearea&w=200&h=200&facepad=2.5&q=80",
    quote:
      "Consultoria à altura de uma empresa de tecnologia. Painel próprio, consultor dedicado e respostas em horas — não em dias.",
  },
  {
    name: "Camila Rezende",
    role: "Diretora, Rezende Advocacia",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=facearea&w=200&h=200&facepad=2.5&q=80",
    quote:
      "Migrar de contador nunca foi tão simples. A equipe cuidou de tudo com discrição e precisão. Recomendo sem hesitar.",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const curves = useParallax<HTMLDivElement>(0.05);

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + testimonials.length) % testimonials.length),
    []
  );

  useEffect(() => {
    const id = window.setInterval(() => go(1), 8000);
    return () => window.clearInterval(id);
  }, [go]);

  const t = testimonials[index];

  return (
    <section className="relative py-40 overflow-hidden">
      <div ref={curves} className="absolute -left-52 top-0 w-[820px] pointer-events-none">
        <BrandCurves className="w-full opacity-70" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-y-12 gap-x-8 items-center">
          <div className="lg:col-span-3" data-reveal>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy/60">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Depoimentos
            </span>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-[14rem]">
              Empresas de diferentes setores que confiam na Vidotti.
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <Quote strokeWidth={1.75} className="h-8 w-8 text-brand-red/60" />
            <blockquote
              key={t.name}
              className="mt-8 text-2xl lg:text-[2rem] font-medium leading-[1.35] text-navy animate-fade-in"
            >
              {t.quote}
            </blockquote>

            <div className="mt-12 flex items-center justify-between gap-6 border-t border-border-subtle pt-6">
              <div className="flex items-center gap-4">
                <img
                  src={t.photo}
                  alt={t.name}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div>
                  <p className="text-sm font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2 mr-3">
                  {testimonials.map((item, i) => (
                    <button
                      key={item.name}
                      aria-label={`Depoimento ${i + 1}`}
                      onClick={() => setIndex(i)}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        i === index ? "w-7 bg-brand-red" : "w-3 bg-navy/15 hover:bg-navy/30"
                      }`}
                    />
                  ))}
                </div>
                <button
                  aria-label="Anterior"
                  onClick={() => go(-1)}
                  className="h-10 w-10 rounded-full border border-border-subtle flex items-center justify-center text-navy transition-all duration-300 hover:border-navy/40 hover:-translate-x-0.5"
                >
                  <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
                </button>
                <button
                  aria-label="Próximo"
                  onClick={() => go(1)}
                  className="h-10 w-10 rounded-full border border-border-subtle flex items-center justify-center text-navy transition-all duration-300 hover:border-navy/40 hover:translate-x-0.5"
                >
                  <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
