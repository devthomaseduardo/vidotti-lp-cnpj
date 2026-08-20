import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Clock3, ShieldCheck } from "lucide-react";
import { BrandArcSoft } from "./BrandCurves";
import { WhatsAppLink } from "./WhatsAppLink";
import heroImg from "@/assets/hero-empresario.png";
import { buildWhatsAppUrl, trackConversionEvent, type LeadData } from "@/lib/conversion";

type LeadForm = Required<LeadData>;

const initialLead: LeadForm = {
  name: "",
  business: "",
  email: "",
  phone: "",
  need: "Abertura de CNPJ",
};

const trustPoints = [
  { icon: Clock3, title: "Desde 2002", text: "contábil, fiscal e trabalhista" },
  { icon: ShieldCheck, title: "Escolha tributária", text: "CNAE e regime antes das notas" },
  { icon: CheckCircle2, title: "Atendimento direto", text: "Campinas/SP e canais digitais" },
];

export function Hero() {
  const [lead, setLead] = useState<LeadForm>(initialLead);
  const [started, setStarted] = useState(false);

  const updateLead =
    (field: keyof LeadForm) => (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setLead((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleFormStart = () => {
    if (started) return;
    setStarted(true);
    trackConversionEvent("form_started", { source: "hero_form" });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    trackConversionEvent("form_submitted", {
      source: "hero_form",
      need: lead.need,
      has_email: Boolean(lead.email),
    });

    if (typeof window !== "undefined") {
      window.location.href = buildWhatsAppUrl({
        source: "hero_form",
        intent: "Quero receber uma orientação inicial para abrir, migrar ou organizar meu CNPJ.",
        lead,
      });
    }
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-[#0A0D1E] pb-20 pt-28 md:pt-32"
    >
      <div className="absolute inset-x-0 -top-24 pointer-events-none opacity-10">
        <BrandArcSoft className="w-full h-[720px]" />
      </div>

      <div className="photo-fade pointer-events-none absolute right-0 top-0 h-full w-[68%] opacity-30">
        <img src={heroImg} alt="" className="h-full w-full object-cover object-right" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span
            data-reveal
            className="mb-8 inline-block rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm"
          >
            Abertura de CNPJ, desenquadramento MEI e contabilidade
          </span>

          <h1
            data-reveal
            data-reveal-delay="80"
            className="max-w-3xl text-4xl font-bold leading-[1.06] text-white md:text-5xl lg:text-[3.75rem]"
          >
            Abra seu CNPJ com orientação tributária desde o primeiro passo.
          </h1>

          <p
            data-reveal
            data-reveal-delay="160"
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70"
          >
            Você entende qual tipo de empresa abrir, quais documentos separar, como escolher CNAE e
            regime tributário e quais cuidados tomar antes de começar a emitir notas como PJ.
          </p>

          <div
            data-reveal
            data-reveal-delay="240"
            className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-4"
          >
            <a
              href="#lead-form"
              onClick={() =>
                trackConversionEvent("cta_clicked", {
                  source: "hero_primary",
                  destination: "lead_form",
                })
              }
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-red px-3 py-3 text-center text-xs font-semibold leading-tight text-white shadow-[0_4px_20px_-4px_rgba(215,25,32,0.5)] transition-transform hover:-translate-y-0.5 sm:px-8 sm:py-3.5 sm:text-sm whitespace-nowrap"
            >
              <span className="hidden sm:inline">Receber orientação inicial</span>
              <span className="sm:hidden">Orientação inicial</span>
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </a>
            <WhatsAppLink
              source="hero_whatsapp"
              intent="Quero falar com um consultor sobre abertura de CNPJ, desenquadramento MEI ou troca de contador."
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-3 py-3 text-center text-xs font-semibold leading-tight text-white transition-colors hover:border-white/40 hover:bg-white/5 sm:px-8 sm:py-3.5 sm:text-sm whitespace-nowrap"
            >
              Falar no WhatsApp
            </WhatsAppLink>
          </div>

          <p data-reveal data-reveal-delay="300" className="mt-5 text-xs text-white/55 md:hidden">
            Desde 2002 · Campinas/SP · Fiscal, contábil e trabalhista
          </p>

          <div
            data-reveal
            data-reveal-delay="320"
            className="mt-12 hidden max-w-3xl gap-3 md:grid md:grid-cols-3"
          >
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
              >
                <point.icon className="mb-3 h-5 w-5 text-brand-red" strokeWidth={1.75} />
                <p className="text-sm font-semibold text-white">{point.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-white/60">{point.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          data-reveal="mask"
          data-reveal-delay="120"
          className="relative mt-8 lg:col-span-5 lg:mt-0"
        >
          <div className="relative z-10 mx-auto max-w-[430px] rounded-2xl border border-white/10 bg-[#151933] p-6 shadow-2xl md:p-8 lg:ml-auto lg:mr-0">
            <p className="mb-2 text-xs font-semibold text-brand-red">Diagnóstico inicial</p>
            <h2 className="mb-3 text-2xl font-bold text-white">Receba os próximos passos</h2>
            <p className="mb-6 text-sm leading-relaxed text-white/60">
              Preencha os dados e continue pelo WhatsApp com o contexto do seu caso.
            </p>

            <form
              id="lead-form"
              className="space-y-4"
              onFocusCapture={handleFormStart}
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="lead-name"
                  className="mb-1.5 block text-xs font-medium text-white/60"
                >
                  Nome completo *
                </label>
                <input
                  id="lead-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={lead.name}
                  onChange={updateLead("name")}
                  className="w-full rounded-md border border-white/10 bg-[#0D1126] px-4 py-3 text-sm text-white placeholder-white/30 transition-all focus:border-brand-red/60 focus:outline-none focus:ring-1 focus:ring-brand-red/60"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="lead-business"
                  className="mb-1.5 block text-xs font-medium text-white/60"
                >
                  Empresa ou atividade *
                </label>
                <input
                  id="lead-business"
                  name="business"
                  type="text"
                  required
                  value={lead.business}
                  onChange={updateLead("business")}
                  className="w-full rounded-md border border-white/10 bg-[#0D1126] px-4 py-3 text-sm text-white placeholder-white/30 transition-all focus:border-brand-red/60 focus:outline-none focus:ring-1 focus:ring-brand-red/60"
                  placeholder="Ex.: comércio, serviços, tecnologia"
                />
              </div>

              <div>
                <label
                  htmlFor="lead-phone"
                  className="mb-1.5 block text-xs font-medium text-white/60"
                >
                  Celular com WhatsApp *
                </label>
                <input
                  id="lead-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={lead.phone}
                  onChange={updateLead("phone")}
                  className="w-full rounded-md border border-white/10 bg-[#0D1126] px-4 py-3 text-sm text-white placeholder-white/30 transition-all focus:border-brand-red/60 focus:outline-none focus:ring-1 focus:ring-brand-red/60"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="lead-email"
                    className="mb-1.5 block text-xs font-medium text-white/60"
                  >
                    E-mail
                  </label>
                  <input
                    id="lead-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={lead.email}
                    onChange={updateLead("email")}
                    className="w-full rounded-md border border-white/10 bg-[#0D1126] px-4 py-3 text-sm text-white placeholder-white/30 transition-all focus:border-brand-red/60 focus:outline-none focus:ring-1 focus:ring-brand-red/60"
                    placeholder="voce@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lead-need"
                    className="mb-1.5 block text-xs font-medium text-white/60"
                  >
                    O que você precisa? *
                  </label>
                  <select
                    id="lead-need"
                    name="need"
                    required
                    value={lead.need}
                    onChange={updateLead("need")}
                    className="w-full rounded-md border border-white/10 bg-[#0D1126] px-4 py-3 text-sm text-white transition-all focus:border-brand-red/60 focus:outline-none focus:ring-1 focus:ring-brand-red/60"
                  >
                    <option>Abertura de CNPJ</option>
                    <option>Desenquadramento MEI</option>
                    <option>Troca de contador</option>
                    <option>Planejamento tributário</option>
                  </select>
                </div>
              </div>

              <div className="mb-6 mt-6 flex items-start gap-3">
                <input
                  type="checkbox"
                  id="lgpd"
                  required
                  className="mt-1 h-4 w-4 cursor-pointer rounded border-white/20 bg-[#0D1126] accent-brand-red"
                />
                <label
                  htmlFor="lgpd"
                  className="cursor-pointer text-xs leading-relaxed text-white/50"
                >
                  Autorizo a Vidotti a entrar em contato pelos canais informados para dar
                  continuidade ao atendimento.
                </label>
              </div>

              <button className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-red py-3.5 text-sm font-semibold text-white transition-colors hover:bg-red-700">
                Continuar pelo WhatsApp
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </button>
            </form>

            <p className="mt-4 text-center text-xs text-white/45">
              Não é uma proposta automática. A orientação depende da atividade e dos documentos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
