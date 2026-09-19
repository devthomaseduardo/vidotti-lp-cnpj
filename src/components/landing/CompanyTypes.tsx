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
    <section id="empresas" className="relative scroll-mt-24 overflow-hidden bg-[#0B0F1F] py-14 md:scroll-mt-28 md:py-28 lg:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-red-700/10 blur-[150px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-48 bottom-32 h-[450px] w-[450px] rounded-full bg-blue-900/10 blur-[160px]" />
      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="grid gap-9 md:gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div data-reveal className="lg:sticky lg:top-28 lg:h-fit lg:self-start">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.18em] text-brand-red md:mb-5 md:tracking-[0.22em]">Contabilidade para empresas</span>
            <h2 className="max-w-[520px] text-2xl font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-4xl md:text-5xl">Estrutura contábil para sua empresa crescer com segurança.</h2>
            <p className="mt-4 max-w-[500px] text-sm leading-6 text-white/55 md:mt-6 md:text-[17px] md:leading-7">Da abertura do CNPJ à rotina fiscal, a Vidotti acompanha cada etapa da operação.</p>
            <div className="mt-9 hidden w-auto max-w-none items-center gap-4 md:flex">
              <a href="#lead-form" onClick={() => trackConversionEvent("cta_clicked", { source: "services_primary", destination: "lead_form" })} className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-red px-7 text-center text-sm font-semibold leading-tight text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110">Fazer diagnóstico</a>
              <WhatsAppLink source="services_whatsapp" intent="Quero falar com a Vidotti sobre abertura, MEI, troca de contador ou rotina fiscal da minha empresa." className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-white/15 px-6 text-center text-sm font-semibold leading-tight text-white/75 transition-all duration-300 hover:border-white/35 hover:text-white">Fale com especialista</WhatsAppLink>
            </div>
          </div>
          <div className="md:hidden">
            <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.035]">
              {services.map((service, index) => (
                <article key={service.title} className="grid grid-cols-[42px_1fr] gap-3 border-b border-white/10 p-4 last:border-b-0">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-red/10 text-[11px] font-semibold text-brand-red">{service.number}</div>
                  <div>
                    <h3 className="text-[15px] font-semibold leading-snug text-white">{service.title}</h3>
                    <p className="mt-1.5 text-xs leading-5 text-white/52">{index === 0 ? service.text : service.text.split(".")[0] + "."}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="hidden border-t border-white/10 md:block">
            {services.map((service, index) => (
              <article key={service.title} data-reveal data-reveal-delay={index * 70} className="group grid gap-3 border-b border-white/10 py-4 md:grid-cols-[64px_1fr] md:gap-4 md:py-9">
                <div><span className="text-xs font-medium tracking-[0.15em] text-white/25 transition-colors duration-300 group-hover:text-brand-red">{service.number}</span></div>
                <div className="grid gap-2 md:grid-cols-[0.8fr_1.2fr] md:gap-10"><h3 className="text-lg font-semibold tracking-[-0.02em] text-white md:text-2xl">{service.title}</h3><p className="max-w-[500px] text-sm leading-6 text-white/50 md:text-[15px] md:leading-7">{service.text}</p></div>
              </article>
            ))}
          </div>
          <div className="mt-8 grid w-full grid-cols-1 gap-3 md:hidden">
            <a href="#lead-form" onClick={() => trackConversionEvent("cta_clicked", { source: "services_primary", destination: "lead_form" })} className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-red px-3 text-center text-[13px] font-semibold leading-tight text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110">Fazer diagnóstico</a>
            <WhatsAppLink source="services_whatsapp" intent="Quero falar com a Vidotti sobre abertura, MEI, troca de contador ou rotina fiscal da minha empresa." className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-white/15 px-3 text-center text-[13px] font-semibold leading-tight text-white/75 transition-all duration-300 hover:border-white/35 hover:text-white">Fale com especialista</WhatsAppLink>
          </div>
        </div>
        <div className="mt-14 border-t border-white/10 pt-10 md:mt-32 md:pt-20" data-reveal>
          <div className="mb-6 flex flex-col justify-between gap-4 md:mb-10 md:flex-row md:items-end md:gap-6">
            <div><span className="mb-3 block text-xs font-semibold uppercase tracking-[0.18em] text-brand-red md:mb-4 md:tracking-[0.22em]">Empresas atendidas</span><h3 className="max-w-xl text-xl font-semibold tracking-[-0.025em] text-white md:text-3xl">Negócios que confiam no trabalho da Vidotti.</h3></div>
            <p className="max-w-[420px] text-sm leading-6 text-white/45 md:text-right">Atendimento próximo para empresas de diferentes segmentos.</p>
          </div>
          <div className="relative w-full overflow-hidden" data-reveal data-reveal-delay="100">
            <div className="client-logo-track flex min-w-max items-center gap-4 py-3 md:gap-5">
              {[...logos, ...logos].map((logo, index) => {
                const isDuplicate = index >= logos.length;
                return (
                  <div key={`${logo}-${index}`} aria-hidden={isDuplicate || undefined} className="flex h-[72px] w-[128px] flex-shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white md:h-[92px] md:w-[170px]">
                    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-white p-2 md:p-3"><img src={logo} alt="" loading="lazy" decoding="async" draggable={false} className="h-full w-full select-none object-contain" /></div>
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
