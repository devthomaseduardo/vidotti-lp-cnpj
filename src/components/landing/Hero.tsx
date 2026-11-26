import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Clock3, ShieldCheck } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
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
  {
    label: "Revisar impostos",
    value: "Planejamento tributário",
    helper: "Entender carga tributária",
  },
  {
    label: "Não sei ainda",
    value: "Preciso entender meu caso",
    helper: "Receber orientação",
    fullWidth: true,
  },
] as const;

const initialLead: LeadForm = { business: "", need: "Abertura de CNPJ" };

const trustPoints = [
  { icon: Clock3, title: "Desde 2002", text: "contabilidade para empresas em Campinas" },
  {
    icon: ShieldCheck,
    title: "Regime certo",
    text: "CNAE e tributação analisados antes de abrir",
  },
  { icon: CheckCircle2, title: "Atendimento humano", text: "conversa direta pelo WhatsApp" },
];

export function Hero() {
  const [lead, setLead] = useState<LeadForm>(initialLead);
  const [started, setStarted] = useState(false);
  const [diagnosticOpen, setDiagnosticOpen] = useState(false);

  const updateLead = (field: keyof LeadForm) => (event: ChangeEvent<HTMLInputElement>) => {
    setLead((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleFormStart = () => {
    if (started) return;
    setStarted(true);
    trackConversionEvent("form_started", { source: "hero_modal_form" });
  };

  const selectNeed = (need: string) => {
    handleFormStart();
    setLead((current) => ({ ...current, need }));
  };

  const openDiagnostic = (source: string) => {
    trackConversionEvent("cta_clicked", { source, destination: "diagnostic_modal" });
    setDiagnosticOpen(true);
  };

  useEffect(() => {
    const syncLeadHash = () => {
      if (window.location.hash === "#lead-form") {
        setDiagnosticOpen(true);
      }
    };

    const handleLeadAnchorClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const link = target?.closest('a[href="#lead-form"], a[href="/#lead-form"]');
      if (!link) return;

      event.preventDefault();
      trackConversionEvent("cta_clicked", {
        source: link.getAttribute("data-cta-source") ?? "lead_form_anchor",
        destination: "diagnostic_modal",
      });
      setDiagnosticOpen(true);
    };

    syncLeadHash();
    window.addEventListener("hashchange", syncLeadHash);
    document.addEventListener("click", handleLeadAnchorClick);
    return () => {
      window.removeEventListener("hashchange", syncLeadHash);
      document.removeEventListener("click", handleLeadAnchorClick);
    };
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedBusiness = lead.business.trim();
    if (!trimmedBusiness) return;

    trackConversionEvent("form_completed", {
      source: "hero_modal_form",
      need: lead.need,
      has_context: true,
      fields_count: 2,
    });

    if (typeof window !== "undefined") {
      const whatsappUrl = buildWhatsAppUrl({
        source: "hero_modal_form",
        intent:
          "Quero entender o melhor caminho para meu CNPJ pelo diagnóstico inicial da Vidotti.",
        lead: { business: trimmedBusiness, need: lead.need },
      });

      trackConversionEvent("whatsapp_opened", {
        source: "hero_modal_form",
        need: lead.need,
        method: "form_redirect",
      });
      window.location.href = whatsappUrl;
    }
  };

  return (
    <section id="top" className="relative overflow-hidden bg-[#0A0D1E] pt-20 pb-8 md:pt-28 md:pb-0">
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="grid items-end gap-5 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7 md:pb-14">
            <span
              data-reveal
              className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red sm:text-xs md:mb-5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Campinas desde 2002
            </span>
            <h1
              data-reveal
              data-reveal-delay="80"
              className="max-w-3xl text-[1.85rem] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]"
            >
              Abra seu CNPJ em Campinas{" "}
              <span className="text-white/55">com a orientação certa desde o início.</span>
            </h1>
            <p
              data-reveal
              data-reveal-delay="160"
              className="mt-3 max-w-xl text-sm leading-6 text-white/75 md:mt-5 md:text-lg md:leading-relaxed"
            >
              Analisamos <mark className="hl">CNAE, natureza jurídica e regime tributário</mark>{" "}
              antes de abrir, para evitar imposto a mais e retrabalho.
            </p>

            <div
              data-reveal
              data-reveal-delay="240"
              className="mt-7 hidden flex-wrap items-center gap-4 md:flex"
            >
              <button
                id="lead-form"
                type="button"
                onClick={() => openDiagnostic("hero_primary")}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-3.5 text-center text-sm font-semibold leading-tight text-white shadow-[0_4px_20px_-4px_rgba(215,25,32,0.5)] transition-transform hover:-translate-y-0.5"
              >
                Fazer diagnóstico <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.75} />
              </button>
              <WhatsAppLink
                source="hero_whatsapp"
                intent="Quero falar com a Vidotti sobre abertura de CNPJ, desenquadramento MEI ou troca de contador."
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-white/20 bg-transparent px-8 py-3.5 text-center text-sm font-semibold leading-tight text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                Falar pelo WhatsApp
              </WhatsAppLink>
            </div>

            <div
              data-reveal
              data-reveal-delay="300"
              className="mt-6 hidden max-w-3xl grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-5 md:mt-8 md:grid md:pt-6"
            >
              {trustPoints.map((point) => (
                <div key={point.title} className="px-4 first:pl-0 last:pr-0 md:px-5">
                  <div className="flex items-center gap-2">
                    <point.icon className="h-4 w-4 shrink-0 text-brand-red" strokeWidth={1.75} />
                    <p className="text-sm font-semibold text-white">{point.title}</p>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-white/55">{point.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div data-reveal data-reveal-delay="280" className="relative md:col-span-5">
            <div className="grid grid-cols-[1fr_205px] items-end gap-2 sm:grid-cols-[1fr_250px] md:block">
              <ul className="space-y-3 pb-5 md:hidden">
                {trustPoints.map((point) => (
                  <li key={point.title} className="flex items-start gap-2">
                    <point.icon
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-red"
                      strokeWidth={1.85}
                    />
                    <div>
                      <p className="text-xs font-bold leading-tight text-white">{point.title}</p>
                      <p className="mt-0.5 text-[11px] leading-snug text-white/55">{point.text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="photo-fade relative flex items-end justify-end md:h-[520px] lg:h-[580px]">
                <img
                  src={heroImg}
                  alt="Especialista da Vidotti Contabilidade"
                  width={707}
                  height={700}
                  decoding="async"
                  fetchPriority="high"
                  className="block h-[245px] w-auto object-contain object-right-bottom sm:h-[290px] md:h-full md:w-full"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0A0D1E] via-[#0A0D1E]/45 to-transparent md:h-16"
                />
              </div>
            </div>

            <div className="mt-5 flex justify-center md:hidden">
              <button
                type="button"
                onClick={() => openDiagnostic("hero_mobile_primary")}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-3.5 text-center text-sm font-semibold leading-tight text-white shadow-[0_4px_20px_-4px_rgba(215,25,32,0.5)] transition-transform hover:-translate-y-0.5"
              >
                Fazer diagnóstico <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.75} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={diagnosticOpen} onOpenChange={setDiagnosticOpen}>
        <DialogContent className="max-h-[88vh] w-[calc(100vw-1.5rem)] max-w-[460px] overflow-y-auto rounded-2xl border-white/10 bg-[#151933] p-4 text-white shadow-[0_28px_80px_-42px_rgba(0,0,0,0.95)] sm:p-5 md:p-6">
          <div className="mb-1 flex items-start justify-between gap-4 pr-8">
            <div>
              <p className="mb-2 text-xs font-semibold text-brand-red">Diagnóstico inicial</p>
              <DialogTitle className="text-xl font-bold leading-tight text-white md:text-2xl">
                Entenda seu próximo passo
              </DialogTitle>
            </div>
            <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-semibold text-white/50">
              2 min
            </span>
          </div>
          <DialogDescription className="text-sm leading-6 text-white/60 md:leading-relaxed">
            Marque seu momento, informe sua atividade ou cidade e continue para o WhatsApp com o
            contexto do seu caso.
          </DialogDescription>

          <form className="mt-5 space-y-5" onFocusCapture={handleFormStart} onSubmit={handleSubmit}>
            <fieldset>
              <legend className="mb-2 block text-xs font-medium text-white/60">
                O que você precisa agora? *
              </legend>
              <input type="hidden" name="need" value={lead.need} />
              <div className="grid grid-cols-2 gap-2">
                {needOptions.map((option) => {
                  const selected = lead.need === option.value;
                  const fullWidth = "fullWidth" in option && option.fullWidth;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => selectNeed(option.value)}
                      className={`relative min-h-[64px] rounded-lg border px-3 py-2.5 text-left transition-all md:min-h-[72px] md:py-3 ${fullWidth ? "col-span-2" : ""} ${selected ? "border-brand-red/70 bg-brand-red/10 text-white shadow-[0_14px_35px_-28px_rgba(215,25,32,0.9)]" : "border-white/10 bg-[#0D1126] text-white/70 hover:border-white/25 hover:bg-white/[0.04]"}`}
                    >
                      <span className="block pr-6 text-sm font-semibold leading-tight">
                        {option.label}
                      </span>
                      <span className="mt-1 block text-[11px] leading-snug text-white/45">
                        {option.helper}
                      </span>
                      {selected && (
                        <CheckCircle2
                          className="absolute right-3 top-3 h-4 w-4 text-brand-red"
                          strokeWidth={2}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div>
              <label
                htmlFor="lead-business"
                className="mb-1.5 block text-xs font-medium text-white/60"
              >
                Atividade, cidade ou dúvida principal *
              </label>
              <input
                id="lead-business"
                name="business"
                type="text"
                required
                pattern=".*\S.*"
                title="Informe a atividade, cidade ou dúvida principal."
                value={lead.business}
                onChange={updateLead("business")}
                className="w-full rounded-md border border-white/10 bg-[#0D1126] px-4 py-3 text-base text-white placeholder-white/30 transition-all focus:border-brand-red/60 focus:outline-none focus:ring-1 focus:ring-brand-red/60 sm:text-sm"
                placeholder="Ex.: serviços em Campinas, loja online, TI"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="lgpd"
                required
                className="mt-1 h-4 w-4 cursor-pointer rounded border-white/20 bg-[#0D1126] accent-brand-red"
              />
              <div>
                <label
                  htmlFor="lgpd"
                  className="cursor-pointer text-xs leading-relaxed text-white/50"
                >
                  Autorizo a Vidotti a usar essas informações para continuar o atendimento pelo
                  WhatsApp.
                </label>
                <p className="mt-1 text-[11px] leading-relaxed text-white/40">
                  Consulte a{" "}
                  <Link
                    to="/politica-de-privacidade"
                    className="underline underline-offset-2 transition-colors hover:text-white/70"
                  >
                    Política de Privacidade
                  </Link>
                  .
                </p>
              </div>
            </div>

            <button className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-brand-red px-5 py-4 text-sm font-semibold text-white shadow-[0_16px_35px_-22px_rgba(215,25,32,0.95)] transition-transform hover:-translate-y-0.5">
              Fazer diagnóstico <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </button>
          </form>
          <p className="text-center text-xs leading-relaxed text-white/45">
            Você revisa a mensagem antes de enviar. Não é proposta automática.
          </p>
        </DialogContent>
      </Dialog>
    </section>
  );
}
