import { Briefcase, Building, Calculator, FileSignature, LineChart, Users } from "lucide-react";
import { trackConversionEvent } from "@/lib/conversion";
import { WhatsAppLink } from "./WhatsAppLink";

const services = [
  {
    icon: Building,
    title: "Abertura de Empresa",
    text: "Orientação sobre natureza jurídica, CNAE, regime tributário, CNPJ e primeiros passos para operar sem improviso.",
  },
  {
    icon: FileSignature,
    title: "Desenquadramento MEI",
    text: "Análise da migração para ME, impactos fiscais e organização da nova rotina contábil depois que a empresa cresce.",
  },
  {
    icon: Calculator,
    title: "Assessoria Contábil",
    text: "Rotina contábil, fiscal e trabalhista com acompanhamento para manter obrigações, impostos e documentos em ordem.",
  },
  {
    icon: LineChart,
    title: "Planejamento Tributário",
    text: "Comparação entre regimes, atividade, faturamento e emissão de notas para reduzir risco e evitar impostos mal planejados.",
  },
  {
    icon: Briefcase,
    title: "Gestão Financeira",
    text: "Apoio no financeiro, conciliação, fluxo de caixa e relatórios para decisões menos baseadas em planilha solta.",
  },
  {
    icon: Users,
    title: "Departamento Pessoal",
    text: "Admissões, demissões, folha de pagamento e encargos com rotina organizada para empresas com equipe.",
  },
];

const logos = [
  "/clientes/clientes1.jpg",
  "/clientes/clientes2.jpg",
  "/clientes/clientes3.jpg",
  "/clientes/clientes4.jpg",
  "/clientes/clientes5.jpg",
  "/clientes/clientes6.jpg",
  "/clientes/clientes7.jpg",
  "/clientes/clientes8.jpg",
  "/clientes/clientes9.jpg",
  "/clientes/clientes10.jpg",
  "/clientes/clientes11.jpg",
  "/clientes/clientes12.jpg",
  "/clientes/clientes13.jpg",
  "/clientes/clientes14.jpg",
  "/clientes/novoImg5.jpg",
];

export function CompanyTypes() {
  return (
    <section id="empresas" className="relative overflow-hidden bg-[#0D1126] py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        {/* Cabeçalho da seção */}
        <div className="mb-12 max-w-3xl md:mb-16" data-reveal>
          <span className="mb-5 inline-block rounded-full border border-white/10 px-4 py-1.5 text-xs font-semibold text-white/60">
            Serviços
          </span>
          <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
            Soluções para abrir, migrar e manter sua empresa em ordem
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60">
            A página é focada em CNPJ, mas a conversa inicial já separa se o melhor caminho é abrir
            empresa, sair do MEI, trocar de contador ou revisar a carga tributária.
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="divide-y divide-white/[0.06] border-y border-white/[0.06] md:grid md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              data-reveal
              data-reveal-delay={i * 60}
              className="group flex min-h-[200px] flex-col px-0 py-5 transition-colors md:border-b md:border-white/[0.06] md:px-8 lg:[&:nth-last-child(-n+3)]:border-b-0"
            >
              <div className="mb-4 flex items-center gap-4">
                <s.icon strokeWidth={1.5} className="h-7 w-7 text-brand-red" />
                <h3 className="text-xl font-bold text-white">{s.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-white/60">{s.text}</p>
            </article>
          ))}
        </div>

        {/* CTAs — logo após a seção Serviços */}
        <div
          className="mt-12 flex w-full flex-col items-center justify-center gap-4 sm:flex-row"
          data-reveal
        >
          <WhatsAppLink
            source="services_specialist"
            intent="Quero falar com um especialista da Vidotti sobre os serviços para minha empresa."
            className="inline-flex items-center gap-3 rounded-full bg-brand-red px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_-4px_rgba(215,25,32,0.5)] transition-transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            Fale com um especialista
          </WhatsAppLink>
          <a
            href="#lead-form"
            onClick={() =>
              trackConversionEvent("cta_clicked", {
                source: "services_secondary",
                destination: "lead_form",
              })
            }
            className="text-sm font-medium text-white/50 underline-offset-4 transition-colors hover:text-white/80 hover:underline"
          >
            Ou preencha o diagnóstico
          </a>
        </div>

        {/* Seção Clientes */}
        <div
          className="mt-14 overflow-hidden py-8 md:mt-20 md:py-10"
          data-reveal
        >
          <div className="mb-6">
            <span className="mb-4 inline-block rounded-full border border-white/10 px-4 py-1.5 text-xs font-semibold text-white/60">
              Clientes
            </span>
            <h3 className="max-w-xl text-2xl font-bold text-white md:text-3xl">
              Empresas que já conhecem a Vidotti
            </h3>
          </div>

          <div
            className="-mx-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_9%,#000_91%,transparent)]"
            data-reveal
            data-reveal-delay="100"
          >
            <div className="client-logo-track flex min-w-max gap-3 px-6 py-2 md:gap-6">
              {[...logos, ...logos].map((logo, i) => {
                const isDuplicate = i >= logos.length;

                return (
                  <div
                    key={`${logo}-${i}`}
                    aria-hidden={isDuplicate || undefined}
                    className="flex h-20 w-32 flex-shrink-0 items-center justify-center rounded-xl bg-white p-3 md:h-32 md:w-52 md:p-5"
                  >
                    <img
                      src={logo}
                      alt={isDuplicate ? "" : `Cliente Vidotti ${i + 1}`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
