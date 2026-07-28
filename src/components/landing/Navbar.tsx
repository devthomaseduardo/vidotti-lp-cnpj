import { useEffect, useState } from "react";
import { ArrowRight, Menu, MessageCircle, X } from "lucide-react";
import logoNavy from "@/assets/vidotti-logo-navy.png";

const links = [
  { href: "#top", label: "Início" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#empresas", label: "Tipos de Empresa" },
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
        scrolled ? "bg-white/85 backdrop-blur-md border-b border-border-subtle" : "bg-transparent"
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
            alt="Vidotti Consultoria"
            className={`w-auto transition-all duration-300 ${scrolled ? "h-7" : "h-9"}`}
          />
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm font-medium text-navy/75 hover:text-navy transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-brand-red after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href="https://wa.me/551130000000"
            aria-label="WhatsApp"
            className="h-10 w-10 rounded-full border border-border-subtle flex items-center justify-center text-navy transition-all duration-300 hover:border-navy/35 hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
          </a>
          <a
            href="#cta"
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
          className="lg:hidden p-2 text-navy"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X strokeWidth={1.75} /> : <Menu strokeWidth={1.75} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-white border-t border-border-subtle">
          <ul className="px-6 py-5 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium text-navy border-b border-border-subtle"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
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
