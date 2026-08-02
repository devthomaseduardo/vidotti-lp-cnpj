const steps = [
  {
    title: "Fale com nosso time",
    text: "Entendemos seu modelo de negócio, sócios e projeções para orientar o melhor enquadramento.",
    sla: "resposta em até 4h",
  },
  {
    title: "Envie seus documentos",
    text: "Tudo digital, rápido e seguro. Definimos CNAE, natureza jurídica e capital social.",
    sla: "upload via painel",
  },
  {
    title: "Abrimos seu CNPJ",
    text: "Elaboração e protocolo do contrato social e das inscrições federais, estaduais e municipais.",
    sla: "protocolo em até 48h",
  },
  {
    title: "Você foca no que importa",
    text: "Certificado digital, notas fiscais e contabilidade mensal em pleno funcionamento.",
    sla: "operação contínua",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-20 sm:py-28 lg:py-40 bg-navy/5">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-16 lg:mb-20" data-reveal>
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy/60">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            Como funciona
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[3.25rem] font-bold leading-[1.15] lg:leading-[1.08] text-navy">
            Abrir seu CNPJ nunca foi <span className="text-brand-red">tão simples.</span>
          </h2>
        </div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {steps.map((s, i) => (
            <div
              key={s.title}
              data-reveal
              data-reveal-delay={i * 150}
              className="group relative flex flex-col bg-white rounded-3xl p-6 sm:p-8 border border-navy/5 shadow-sm hover:shadow-xl hover:border-brand-red/20 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-red/10 text-2xl font-bold text-brand-red font-mono-tech transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-navy">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              <span className="mt-5 pt-4 border-t border-border-subtle font-mono-tech text-[11px] text-navy/40">
                {s.sla}
              </span>

              {/* Connector line for desktop */}
              {i !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-[52px] -right-4 w-8 h-px bg-navy/10 z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
