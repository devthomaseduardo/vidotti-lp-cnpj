import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { trackConversionEvent } from "@/lib/conversion";
import logoNavy from "@/assets/vidotti-logo-navy.png";
import { WhatsAppLink } from "./WhatsAppLink";

const links = [
  { href: "#top", label: "Início" },
  { href: "#empresas", label: "Serviços" },
  { href: "#beneficios", label: "Riscos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#prova", label: "Confiança" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/5 bg-[#0D1126]/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-[1280px] items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "h-16" : "h-24"
        }`}
      >
        <a href="#top" className="flex items-center" aria-label="Voltar ao início">
          <img
            src={logoNavy}
            alt="Vidotti Contabilidade"
            className={`w-auto brightness-0 invert transition-all duration-300 ${scrolled ? "h-7" : "h-9"}`}
          />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-white/75 transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-brand-red after:transition-transform after:duration-300 hover:text-white hover:after:origin-left hover:after:scale-x-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 lg:flex">
          <WhatsAppLink
            source="navbar_icon"
            intent="Quero falar com a Vidotti sobre abertura de CNPJ ou contabilidade para minha empresa."
            aria-label="Falar pelo WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/5"
          >
            <span className="sr-only">Falar pelo WhatsApp</span>
          </WhatsAppLink>
          <a
            href="#lead-form"
            onClick={() =>
              trackConversionEvent("cta_clicked", {
                source: "navbar_primary",
                destination: "lead_form",
              })
            }
            className="group inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-14px_rgb(215_25_32_/_0.8)]"
          >
            Fazer diagnóstico
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              strokeWidth={1.75}
            />
          </a>
        </div>

        <button
          className="p-2 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X strokeWidth={1.75} /> : <Menu strokeWidth={1.75} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-[#151933] lg:hidden">
          <ul className="flex flex-col gap-1 px-6 py-5">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/5 py-3 text-sm font-medium text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <a
              href="#lead-form"
              onClick={() => {
                setOpen(false);
                trackConversionEvent("cta_clicked", {
                  source: "navbar_mobile_primary",
                  destination: "lead_form",
                });
              }}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-white"
            >
              Fazer diagnóstico <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
