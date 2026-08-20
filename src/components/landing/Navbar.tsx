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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0D1126]/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav
        className={`max-w-[1280px] mx-auto px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16" : "h-24"
        }`}
      >
        <a href="#top" className="flex items-center">
          <img
            src={logoNavy}
            alt="Vidotti Contabilidade"
            className={`w-auto transition-all duration-300 brightness-0 invert ${scrolled ? "h-7" : "h-9"}`}
          />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm font-medium text-white/75 transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-brand-red after:transition-transform after:duration-300 hover:text-white hover:after:origin-left hover:after:scale-x-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-5">
          <WhatsAppLink
            source="navbar_icon"
            intent="Quero falar com a Vidotti sobre abertura de CNPJ ou contabilidade para minha empresa."
            aria-label="WhatsApp"
            className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5 hover:-translate-y-0.5"
          >
            <span className="sr-only">Falar no WhatsApp</span>
          </WhatsAppLink>
          <a
            href="#lead-form"
            onClick={() =>
              trackConversionEvent("cta_clicked", {
                source: "navbar_primary",
                destination: "lead_form",
              })
            }
            className="group inline-flex items-center gap-2 rounded-full bg-brand-red text-white px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-14px_rgb(215_25_32_/_0.8)]"
          >
            Abrir meu CNPJ
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              strokeWidth={1.75}
            />
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X strokeWidth={1.75} /> : <Menu strokeWidth={1.75} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-[#151933] border-t border-white/5">
          <ul className="px-6 py-5 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium text-white border-b border-white/5"
                >
                  {l.label}
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
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-brand-red text-white px-5 py-3 text-sm font-semibold"
            >
              Abrir meu CNPJ <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
