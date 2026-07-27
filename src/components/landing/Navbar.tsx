import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import logo from "@/assets/vidotti-logo.webp.asset.json";

const links = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#empresas", label: "Tipos de Empresa" },
  { href: "#simulador", label: "Simulador" },
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
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1280px] mx-auto px-6 h-18 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-10 w-auto flex items-center rounded-md brand-gradient px-3 py-1.5">
            <img src={logo.url} alt="Vidotti Consultoria" className="h-6 w-auto" />
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-navy/80 hover:text-brand-red transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+551130000000"
            className="text-sm font-medium text-navy hover:text-brand-red transition-colors"
          >
            (11) 3000-0000
          </a>
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-red text-white px-5 py-2.5 text-sm font-semibold shadow-soft hover:shadow-card hover:brightness-110 transition-all duration-200"
          >
            Abrir CNPJ
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
          </a>
        </div>

        <button
          className="lg:hidden p-2 rounded-md text-navy"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X strokeWidth={1.75} /> : <Menu strokeWidth={1.75} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-white border-t border-border">
          <ul className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-medium text-navy"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-red text-white px-5 py-3 text-sm font-semibold"
            >
              Abrir CNPJ <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
