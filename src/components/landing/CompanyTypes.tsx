import { WhatsAppLink } from "./WhatsAppLink";

const services = [
  {
    number: "01",
    title: "Abertura de CNPJ",
    text: "Definição de CNAE, natureza jurídica e regime tributário antes do registro.",
  },
  {
    number: "02",
    title: "Saída do MEI para ME",
    text: "Desenquadramento planejado para não pagar imposto retroativo nem travar notas.",
  },
  {
    number: "03",
    title: "Troca de contador",
    text: "Revisão de pendências e transição segura da rotina contábil e fiscal.",
  },
  {
    number: "04",
    title: "Planejamento tributário",
    text: "Estudo da operação para enquadrar a empresa no regime mais econômico.",
  },
  {
    number: "05",
    title: "Assessoria mensal e DP",
    text: " Impostos, notas, pró-labore, folha de pagamento e obrigações em dia.",
  },
];

const logos = [
  "/clientes/clientes1.webp",
  "/clientes/clientes2.webp",
  "/clientes/clientes3.webp",
  "/clientes/clientes4.webp",
  "/clientes/clientes5.webp",
  "/clientes/clientes6.webp",
  "/clientes/clientes7.webp",
  "/clientes/clientes8.webp",
  "/clientes/clientes9.webp",
  "/clientes/clientes10.webp",
  "/clientes/clientes11.webp",
  "/clientes/clientes12.webp",
  "/clientes/clientes13.webp",
  "/clientes/clientes14.webp",
  "/clientes/novoImg5.webp",
];

export function CompanyTypes() {
  return (
    <section
      id="empresas"
      className="relative scroll-mt-20 overflow-hidden bg-[#0B0F1F] py-8 md:scroll-mt-24 md:py-14 lg:py-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-red-700/10 blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 bottom-32 h-[450px] w-[450px] rounded-full bg-blue-900/10 blur-[160px]"
      />
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-6 md:gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
          <div data-reveal className="lg:sticky lg:top-24 lg:h-fit lg:self-start">
            <span className="mb-2.5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red md:mb-3 md:tracking-[0.22em]">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Contabilidade para empresas
            </span>
            <h2 className="max-w-[540px] text-2xl font-semibold leading-[1.1] tracking-[-0.035em] text-white sm:text-4xl md:text-[2.75rem]">
              Contabilidade para empresas{" "}
              <span className="text-white/55">da abertura à rotina fiscal.</span>
            </h2>
            <p className="mt-3 max-w-[520px] text-sm leading-6 text-white/55 md:mt-4 md:text-base md:leading-7">
              Abertura de CNPJ, saída do MEI, troca de contador e assessoria mensal no mesmo
              escritório.
            </p>
            <div className="mt-6 hidden items-center gap-3.5 md:flex">
              <a
                href="#lead-form"
                data-cta-source="services_primary"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-red px-7 text-center text-sm font-semibold leading-tight text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
              >
                Fazer diagnóstico
              </a>
              <WhatsAppLink
                source="services_whatsapp"
                intent="Quero falar com a Vidotti sobre abertura, MEI, troca de contador ou rotina fiscal da minha empresa."
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-white/15 px-6 text-center text-sm font-semibold leading-tight text-white/75 transition-all duration-300 hover:border-white/35 hover:text-white"
              >
                Especialista
              </WhatsAppLink>
            </div>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {services.map((service, index) => (
              <article
                key={service.title}
                data-reveal
                data-reveal-delay={index * 60}
                className="group grid grid-cols-[32px_1fr] items-baseline gap-3 py-3.5 md:grid-cols-[52px_1fr] md:gap-4 md:py-5"
              >
                <span className="text-xs font-semibold tracking-[0.15em] text-brand-red md:font-medium md:text-white/30 md:transition-colors md:duration-300 md:group-hover:text-brand-red">
                  {service.number}
                </span>
                <div className="grid gap-1 md:grid-cols-[0.75fr_1.25fr] md:items-baseline md:gap-8">
                  <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-white md:text-xl">
                    {service.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-white/55 md:text-[15px] md:leading-relaxed">
                    {service.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 md:mt-14 md:pt-10" data-reveal>
          <div className="mb-5 flex flex-col justify-between gap-4 md:mb-7 md:flex-row md:items-end md:gap-6">
            <div>
              <span className="mb-2.5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red md:mb-3 md:tracking-[0.22em]">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                Empresas atendidas
              </span>
              <h2 className="max-w-xl text-xl font-semibold tracking-[-0.025em] text-white md:text-3xl">
                Empresas que já confiam <span className="text-white/55">na Vidotti.</span>
              </h2>
            </div>
            <p className="max-w-[420px] text-sm leading-6 text-white/45 md:text-right">
              Atendimento próximo para empresas de diferentes segmentos.
            </p>
          </div>
          <div className="relative w-full overflow-hidden" data-reveal data-reveal-delay="100">
            <div className="client-logo-track flex min-w-max items-center gap-4 py-3 md:gap-5">
              {[...logos, ...logos].map((logo, index) => {
                const isDuplicate = index >= logos.length;
                return (
                  <div
                    key={`${logo}-${index}`}
                    aria-hidden={isDuplicate || undefined}
                    className="flex h-[72px] w-[128px] flex-shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white md:h-[92px] md:w-[170px]"
                  >
                    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-white p-2 md:p-3">
                      <img
                        src={logo}
                        alt={isDuplicate ? "" : "Logotipo de empresa atendida pela Vidotti"}
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        className="h-full w-full select-none object-contain"
                      />
                    </div>
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
