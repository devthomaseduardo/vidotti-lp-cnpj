import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marina Prado",
    role: "CEO, Prado Arquitetura",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&w=200&h=200&facepad=2.5&q=80",
    quote:
      "A Vidotti reestruturou nossa operação em menos de duas semanas. Saímos do Simples para o Presumido com uma economia real de 22% em impostos.",
  },
  {
    name: "Rafael Andrade",
    role: "Sócio-fundador, Tecnix Labs",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=facearea&w=200&h=200&facepad=2.5&q=80",
    quote:
      "Consultoria à altura de uma empresa de tecnologia. Painel próprio, consultor dedicado e respostas em horas — não em dias.",
  },
  {
    name: "Camila Rezende",
    role: "Diretora, Rezende Advocacia",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=facearea&w=200&h=200&facepad=2.5&q=80",
    quote:
      "Migrar de contador nunca foi tão simples. A equipe cuidou de tudo com discrição e precisão. Recomendo sem hesitar.",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-2xl mb-14" data-reveal>
          <span className="text-xs font-semibold text-brand-red uppercase tracking-widest">
            Depoimentos
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-navy">
            Empresas que confiam na Vidotti.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              data-reveal
              data-reveal-delay={i * 80}
              className="rounded-[18px] border border-border bg-card p-8 shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="flex items-center gap-1 text-brand-red mb-5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4" strokeWidth={1.5} />
                ))}
              </div>
              <blockquote className="text-navy text-base leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 pt-6 border-t border-border">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="h-11 w-11 rounded-full object-cover ring-1 ring-border"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
