import { ArrowRight, ShieldCheck, Clock3, BadgeCheck } from "lucide-react";
import hero from "@/assets/hero-businessman.webp.asset.json";
import { BrandCurves } from "./BrandCurves";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <BrandCurves className="absolute -top-40 -left-60 w-[900px] opacity-70 pointer-events-none" />
      <BrandCurves className="absolute bottom-0 right-0 w-[700px] opacity-40 rotate-180 pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center w-full">
        <div className="lg:col-span-6 space-y-7" data-reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 backdrop-blur px-4 py-1.5 text-xs font-semibold text-navy uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            Consultoria empresarial premium
          </span>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.05] text-navy">
            Abra seu CNPJ com{" "}
            <span className="text-brand-gradient">segurança, agilidade</span> e assessoria de alto padrão.
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Da escolha do regime tributário à emissão do primeiro documento fiscal — a Vidotti Consultoria conduz cada etapa da abertura da sua empresa com precisão contábil e visão de negócio.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-red text-white px-7 py-4 text-base font-semibold shadow-card hover:brightness-110 hover:-translate-y-0.5 transition-all duration-200"
            >
              Abrir minha empresa
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
            </a>
            <a
              href="#simulador"
              className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white/70 backdrop-blur text-navy px-7 py-4 text-base font-semibold hover:bg-white transition-all duration-200"
            >
              Simular tributação
            </a>
          </div>

          <dl className="grid grid-cols-3 gap-6 pt-6 border-t border-border max-w-lg">
            {[
              { k: "+2.400", v: "empresas abertas" },
              { k: "48h", v: "prazo médio" },
              { k: "4,9/5", v: "avaliação de clientes" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-2xl font-bold text-navy">{s.k}</dt>
                <dd className="text-xs text-muted-foreground mt-1">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-6 relative" data-reveal data-reveal-delay="150">
          <div className="relative aspect-[5/4] w-full">
            <div className="absolute inset-0 rounded-[32px] brand-gradient shadow-elevated" />
            <BrandCurves className="absolute inset-0 w-full h-full opacity-30" />
            <img
              src={hero.url}
              alt="Empresário conectado, atendido pela Vidotti Consultoria"
              className="absolute inset-0 w-full h-full object-cover object-center rounded-[32px] mix-blend-luminosity opacity-95"
            />
            <img
              src={hero.url}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-center rounded-[32px] opacity-90"
            />

            {/* Floating info cards */}
            <div className="absolute -left-4 top-10 lg:-left-10 bg-white rounded-2xl border border-border shadow-card p-4 flex items-center gap-3 w-56">
              <div className="h-10 w-10 rounded-xl bg-navy/5 flex items-center justify-center text-navy">
                <ShieldCheck strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Certificado digital</p>
                <p className="text-sm font-semibold text-navy">Emitido em 24h</p>
              </div>
            </div>

            <div className="absolute -right-4 bottom-16 lg:-right-8 bg-white rounded-2xl border border-border shadow-card p-4 flex items-center gap-3 w-60">
              <div className="h-10 w-10 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red">
                <BadgeCheck strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">CNPJ aprovado</p>
                <p className="text-sm font-semibold text-navy">Consultor dedicado</p>
              </div>
            </div>

            <div className="absolute left-8 -bottom-6 bg-white rounded-2xl border border-border shadow-card p-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-navy/5 flex items-center justify-center text-navy">
                <Clock3 strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Tempo médio</p>
                <p className="text-sm font-semibold text-navy">48 horas úteis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
