import { trackConversionEvent } from "@/lib/conversion";
import { WhatsAppLink } from "./WhatsAppLink";

const services = [
  { number: "01", title: "Abertura de empresa", text: "Análise de natureza jurídica, CNAE e regime tributário antes da abertura do CNPJ." },
  { number: "02", title: "Desenquadramento do MEI", text: "Planejamento da saída do MEI e organização das novas obrigações fiscais da empresa." },
  { number: "03", title: "Troca de contador", text: "Conferência de documentos, pendências e rotinas para uma transição contábil com mais visibilidade." },
  { number: "04", title: "Assessoria contábil", text: "Rotina contábil, fiscal e trabalhista acompanhada durante todo o mês." },
  { number: "05", title: "Planejamento tributário", text: "Análise da operação para identificar o regime tributário mais adequado ao negócio." },
  { number: "06", title: "Gestão financeira", text: "Organização de fluxo de caixa, conciliações e informações financeiras da empresa." },
  { number: "07", title: "Departamento pessoal", text: "Folha de pagamento, admissões, desligamentos, pró-labore e encargos da equipe." },
];

const logos = [
  "/clientes/clientes1.jpg", "/clientes/clientes2.jpg", "/clientes/clientes3.jpg", "/clientes/clientes4.jpg", "/clientes/clientes5.jpg",
  "/clientes/clientes6.jpg", "/clientes/clientes7.jpg", "/clientes/clientes8.jpg", "/clientes/clientes9.jpg", "/clientes/clientes10.jpg",
  "/clientes/clientes11.jpg", "/clientes/clientes12.jpg", "/clientes/clientes13.jpg", "/clientes/clientes14.jpg", "/clientes/novoImg5.jpg",
];

export function CompanyTypes() {
  return (
    <section id="empresas" className="relative overflow-hidden bg-[#0B0F1F] py-20 md:py-28 lg:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-red-700/10 blur-[150px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-48 bottom-32 h-[450px] w-[450px] rounded-full bg-blue-900/10 blur-[160px]" />
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div data-reveal className="lg:sticky lg:top-28 lg:h-fit lg:self-start">
            <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Contabilidade para empresas</span>
            <h2 className="max-w-[520px] text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-4xl md:text-5xl">Estrutura contábil para sua empresa crescer com segurança.</h2>
            <p className="mt-6 max-w-[500px] text-base leading-7 text-white/55 md:text-[17px]">Da abertura do CNPJ à rotina fiscal, financeira e trabalhista, a Vidotti acompanha sua empresa em cada etapa da operação.</p>
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a href="#lead-form" onClick={() => trackConversionEvent("cta_clicked", { source: "services_primary", destination: "lead_form" })} className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-red px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110">Fazer diagnóstico</a>
              <WhatsAppLink source="services_whatsapp" intent="Quero falar com a Vidotti sobre abertura, MEI, troca de contador ou rotina fiscal da minha empresa." className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold text-white/75 transition-all duration-300 hover:border-white/35 hover:text-white">Falar pelo WhatsApp</WhatsAppLink>
            </div>
          </div>
          <div className="border-t border-white/10">
            {services.map((service, index) => (
              <article key={service.title} data-reveal data-reveal-delay={index * 70} className="group grid gap-4 border-b border-white/10 py-7 md:grid-cols-[64px_1fr] md:py-9">
                <div><span className="text-xs font-medium tracking-[0.15em] text-white/25 transition-colors duration-300 group-hover:text-brand-red">{service.number}</span></div>
                <div className="grid gap-3 md:grid-cols-[0.8fr_1.2fr] md:gap-10"><h3 className="text-xl font-semibold tracking-[-0.02em] text-white md:text-2xl">{service.title}</h3><p className="max-w-[500px] text-sm leading-6 text-white/50 md:text-[15px] md:leading-7">{service.text}</p></div>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-24 border-t border-white/10 pt-14 md:mt-32 md:pt-20" data-reveal>
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><span className="mb-4 block text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">Empresas atendidas</span><h3 className="max-w-xl text-2xl font-semibold tracking-[-0.025em] text-white md:text-3xl">Negócios que confiam no trabalho da Vidotti.</h3></div>
            <p className="max-w-[420px] text-sm leading-6 text-white/45 md:text-right">Atendimento próximo para empresas de diferentes segmentos e momentos de crescimento.</p>
          </div>
          <div className="relative w-full overflow-hidden" data-reveal data-reveal-delay="100">
            <div className="client-logo-track flex min-w-max items-center gap-4 py-3 md:gap-5">
              {[...logos, ...logos].map((logo, index) => {
                const isDuplicate = index >= logos.length;
                return (
                  <div key={`${logo}-${index}`} aria-hidden={isDuplicate || undefined} className="flex h-[84px] w-[145px] flex-shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white md:h-[92px] md:w-[170px]">
                    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-white"><img src={logo} alt="" loading="lazy" decoding="async" draggable={false} className="h-full w-full scale-[1.12] select-none object-contain [clip-path:inset(12px_14px_round_8px)]" /></div>
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
