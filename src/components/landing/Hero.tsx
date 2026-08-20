import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Clock3, ShieldCheck } from "lucide-react";
import { BrandArcSoft } from "./BrandCurves";
import { WhatsAppLink } from "./WhatsAppLink";
import heroImg from "@/assets/hero-empresario.png";
import { buildWhatsAppUrl, trackConversionEvent } from "@/lib/conversion";

type LeadForm = {
  business: string;
  need: string;
};

const needOptions = [
  { label: "Abrir CNPJ", value: "Abertura de CNPJ", helper: "Começar como PJ" },
  { label: "Sair do MEI", value: "Desenquadramento MEI", helper: "Migrar para ME" },
  { label: "Trocar contador", value: "Troca de contador", helper: "Revisar rotina atual" },
  { label: "Revisar impostos", value: "Planejamento tributário", helper: "Entender carga tributária" },
  { label: "Não sei ainda", value: "Preciso entender meu caso", helper: "Receber orientação", fullWidth: true },
] as const;

const initialLead: LeadForm = { business: "", need: "Abertura de CNPJ" };

const trustPoints = [
  { icon: Clock3, title: "Desde 2002", text: "experiência contábil para empresas" },
  { icon: ShieldCheck, title: "Decisão tributária", text: "CNAE e regime analisados antes da operação" },
  { icon: CheckCircle2, title: "Atendimento humano", text: "Campinas/SP e canais digitais" },
];

export function Hero() {
  const [lead, setLead] = useState<LeadForm>(initialLead);
  const [started, setStarted] = useState(false);

  const updateLead = (field: keyof LeadForm) => (event: ChangeEvent<HTMLInputElement>) => {
    setLead((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleFormStart = () => {
    if (started) return;
    setStarted(true);
    trackConversionEvent("form_started", { source: "hero_form" });
  };

  const selectNeed = (need: string) => {
    handleFormStart();
    setLead((current) => ({ ...current, need }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    trackConversionEvent("form_completed", {
      source: "hero_form",
      need: lead.need,
      has_context: Boolean(lead.business),
      fields_count: 2,
    });

    if (typeof window !== "undefined") {
      const whatsappUrl = buildWhatsAppUrl({
        source: "hero_form",
        intent: "Quero entender o melhor caminho para meu CNPJ pelo diagnóstico inicial da Vidotti.",
        lead: { business: lead.business, need: lead.need },
      });

      trackConversionEvent("whatsapp_opened", {
        source: "hero_form",
        need: lead.need,
        method: "form_redirect",
      });
      window.location.href = whatsappUrl;
    }
  };

  return (
    <section id="top" className="relative flex min-h-[92vh] items-center overflow-hidden bg-[#0A0D1E] pb-20 pt-28 md:pt-32">
      <div className="pointer-events-none absolute inset-x-0 -top-24 opacity-10">
        <BrandArcSoft className="h-[720px] w-full" />
      </div>
      <div className="photo-fade pointer-events-none absolute right-0 top-0 h-full w-[68%] opacity-30">
        <img src={heroImg} alt="" decoding="async" fetchPriority="high" className="h-full w-full object-cover object-right" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span data-reveal className="mb-8 inline-block rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
            Abertura de CNPJ, desenquadramento MEI e contabilidade
          </span>
          <h1 data-reveal data-reveal-delay="80" className="max-w-3xl text-4xl font-bold leading-[1.06] text-white md:text-5xl lg:text-[3.75rem]">
            Abra sua empresa com orientação tributária e acompanhamento contábil desde o primeiro passo.
          </h1>
          <p data-reveal data-reveal-delay="160" className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            A Vidotti analisa sua atividade, orienta natureza jurídica, CNAE e regime tributário e acompanha as etapas necessárias para colocar o CNPJ em operação com mais segurança.
          </p>

          <div data-reveal data-reveal-delay="240" className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
            <a href="#lead-form" onClick={() => trackConversionEvent("cta_clicked", { source: "hero_primary", destination: "lead_form" })} className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand-red px-3 py-3 text-center text-xs font-semibold leading-tight text-white shadow-[0_4px_20px_-4px_rgba(215,25,32,0.5)] transition-transform hover:-translate-y-0.5 sm:px-8 sm:py-3.5 sm:text-sm">
              Fazer diagnóstico <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </a>
            <WhatsAppLink source="hero_whatsapp" intent="Quero falar com a Vidotti sobre abertura de CNPJ, desenquadramento MEI ou troca de contador." className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-transparent px-3 py-3 text-center text-xs font-semibold leading-tight text-white transition-colors hover:border-white/40 hover:bg-white/5 sm:px-8 sm:py-3.5 sm:text-sm">
              Falar pelo WhatsApp
            </WhatsAppLink>
          </div>

          <p data-reveal data-reveal-delay="300" className="mt-5 text-xs text-white/55 md:hidden">Desde 2002 · Campinas/SP · Fiscal, contábil e trabalhista</p>
          <div data-reveal data-reveal-delay="320" className="mt-12 hidden max-w-3xl gap-3 md:grid md:grid-cols-3">
            {trustPoints.map((point) => (
              <div key={point.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <point.icon className="mb-3 h-5 w-5 text-brand-red" strokeWidth={1.75} />
                <p className="text-sm font-semibold text-white">{point.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-white/60">{point.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal="mask" data-reveal-delay="120" className="relative mt-8 lg:col-span-5 lg:mt-0">
          <div className="relative z-10 mx-auto max-w-[460px] rounded-2xl border border-white/10 bg-[#151933]/95 p-5 shadow-[0_28px_80px_-42px_rgba(0,0,0,0.95)] md:p-6 lg:ml-auto lg:mr-0">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div><p className="mb-2 text-xs font-semibold text-brand-red">Diagnóstico inicial</p><h2 className="text-2xl font-bold leading-tight text-white">Entenda seu próximo passo</h2></div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-semibold text-white/50">2 min</span>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-white/60">Marque seu momento, informe sua atividade ou cidade e continue para o WhatsApp com o contexto do seu caso.</p>

            <form id="lead-form" className="space-y-5" onFocusCapture={handleFormStart} onSubmit={handleSubmit}>
              <fieldset>
                <legend className="mb-2 block text-xs font-medium text-white/60">O que você precisa agora? *</legend>
                <input type="hidden" name="need" value={lead.need} />
                <div className="grid grid-cols-2 gap-2">
                  {needOptions.map((option) => {
                    const selected = lead.need === option.value;
                    const fullWidth = "fullWidth" in option && option.fullWidth;
                    return (
                      <button key={option.value} type="button" aria-pressed={selected} onClick={() => selectNeed(option.value)} className={`relative min-h-[72px] rounded-lg border px-3 py-3 text-left transition-all ${fullWidth ? "col-span-2" : ""} ${selected ? "border-brand-red/70 bg-brand-red/10 text-white shadow-[0_14px_35px_-28px_rgba(215,25,32,0.9)]" : "border-white/10 bg-[#0D1126] text-white/70 hover:border-white/25 hover:bg-white/[0.04]"}`}>
                        <span className="block pr-6 text-sm font-semibold leading-tight">{option.label}</span>
                        <span className="mt-1 block text-[11px] leading-snug text-white/45">{option.helper}</span>
                        {selected && <CheckCircle2 className="absolute right-3 top-3 h-4 w-4 text-brand-red" strokeWidth={2} />}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <div>
                <label htmlFor="lead-business" className="mb-1.5 block text-xs font-medium text-white/60">Atividade, cidade ou dúvida principal *</label>
                <input id="lead-business" name="business" type="text" required value={lead.business} onChange={updateLead("business")} className="w-full rounded-md border border-white/10 bg-[#0D1126] px-4 py-3 text-sm text-white placeholder-white/30 transition-all focus:border-brand-red/60 focus:outline-none focus:ring-1 focus:ring-brand-red/60" placeholder="Ex.: serviços em Campinas, loja online, TI" />
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" id="lgpd" required className="mt-1 h-4 w-4 cursor-pointer rounded border-white/20 bg-[#0D1126] accent-brand-red" />
                <div>
                  <label htmlFor="lgpd" className="cursor-pointer text-xs leading-relaxed text-white/50">Autorizo a Vidotti a usar essas informações para continuar o atendimento pelo WhatsApp.</label>
                  <p className="mt-1 text-[11px] leading-relaxed text-white/40">Consulte a <a href="/politica-de-privacidade" className="underline underline-offset-2 transition-colors hover:text-white/70">Política de Privacidade</a>.</p>
                </div>
              </div>

              <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-red px-5 py-4 text-sm font-semibold text-white shadow-[0_16px_35px_-22px_rgba(215,25,32,0.95)] transition-transform hover:-translate-y-0.5">Fazer diagnóstico <ArrowRight className="h-4 w-4" strokeWidth={1.75} /></button>
            </form>
            <p className="mt-4 text-center text-xs leading-relaxed text-white/45">Você revisa a mensagem antes de enviar. Não é proposta automática.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
