const steps = [
  {
    title: "Fale com nosso time",
    text: "Entendemos seu modelo de negócio, sócios e projeções para orientar o melhor enquadramento.",
  },
  {
    title: "Envie seus documentos",
    text: "Tudo digital, rápido e seguro. Definimos CNAE, natureza jurídica e capital social.",
  },
  {
    title: "Abrimos seu CNPJ",
    text: "Elaboração e protocolo do contrato social e das inscrições federais, estaduais e municipais.",
  },
  {
    title: "Você foca no que importa",
    text: "Certificado digital, notas fiscais e contabilidade mensal em pleno funcionamento.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-40">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-24" data-reveal>
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy/60">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            Como funciona
          </span>
          <h2 className="mt-6 text-4xl lg:text-[3.25rem] font-bold leading-[1.08] text-navy">
            Abrir seu CNPJ nunca foi <span className="text-brand-red">tão simples.</span>
          </h2>
        </div>

        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
          <div
            data-reveal="mask"
            className="hidden lg:block absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy/12 to-transparent"
          />
          {steps.map((s, i) => (
            <div key={s.title} data-reveal data-reveal-delay={i * 120} className="relative lg:pt-12">
              <span className="hidden lg:block absolute -top-[3px] left-0 h-1.5 w-1.5 rounded-full bg-brand-red/70" />
              <span className="block text-sm font-semibold tracking-[0.2em] text-navy/35">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-navy leading-snug">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-[15rem]">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
