import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import logoNavy from "@/assets/vidotti-logo-navy.png";
import { WhatsAppLink } from "./WhatsAppLink";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#0D1126] text-white/80">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-x-6 gap-y-8 px-6 py-9 md:grid-cols-2 md:gap-10 md:py-16 lg:grid-cols-[1.1fr_0.8fr_0.8fr_1.2fr]">
        <div className="col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between gap-4 lg:block">
            <img
              src={logoNavy}
              alt="Vidotti Contabilidade"
              className="h-7 w-auto brightness-0 invert md:h-8"
            />
            <a
              href="https://instagram.com/vidotticontabilidade2002"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Vidotti"
              className="text-white/60 transition-colors hover:text-brand-red lg:mt-6 lg:inline-flex"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
          <p className="mt-3 hidden max-w-md text-xs leading-relaxed text-white/60 md:mt-5 md:block md:text-sm lg:max-w-xs">
            Desde 2002, atendimento fiscal, contábil, tributário e trabalhista para empresas.
          </p>
        </div>

        <nav aria-label="Serviços no rodapé">
          <h4 className="mb-3 text-xs font-semibold text-white md:mb-4 md:text-sm">Serviços</h4>
          <ul className="space-y-1.5 text-xs md:space-y-2 md:text-sm">
            <li>
              <a href="#empresas" className="hover:text-brand-red text-white/60 transition-colors">
                Abertura de Empresa
              </a>
            </li>
            <li>
              <a href="#empresas" className="hover:text-brand-red text-white/60 transition-colors">
                Assessoria Contábil
              </a>
            </li>
            <li>
              <a href="#empresas" className="hover:text-brand-red text-white/60 transition-colors">
                Desenquadramento MEI
              </a>
            </li>
            <li>
              <a href="#empresas" className="hover:text-brand-red text-white/60 transition-colors">
                Planejamento Tributário
              </a>
            </li>
            <li className="hidden sm:list-item">
              <a href="#empresas" className="hover:text-brand-red text-white/60 transition-colors">
                Gestão de RH
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Links institucionais no rodapé">
          <h4 className="mb-3 text-xs font-semibold text-white md:mb-4 md:text-sm">
            Institucional
          </h4>
          <ul className="space-y-1.5 text-xs md:space-y-2 md:text-sm">
            <li>
              <a
                href="#como-funciona"
                className="hover:text-brand-red text-white/60 transition-colors"
              >
                Como funciona
              </a>
            </li>
            <li>
              <a href="#prova" className="hover:text-brand-red text-white/60 transition-colors">
                Confiança
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-brand-red text-white/60 transition-colors">
                Dúvidas frequentes
              </a>
            </li>
          </ul>
        </nav>

        <div className="col-span-2 lg:col-span-1">
          <h4 className="mb-3 text-xs font-semibold text-white md:mb-4 md:text-sm">Contato</h4>
          <ul className="grid gap-2.5 text-xs md:gap-3 md:text-sm">
            <li className="flex items-start gap-2.5 md:gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" strokeWidth={1.5} />
              <WhatsAppLink
                source="footer_phone"
                intent="Quero falar com a Vidotti pelo contato do site sobre meu CNPJ ou rotina contábil."
                withIcon={false}
                className="text-white/60 transition-colors hover:text-brand-red"
              >
                (19) 99372-6183
              </WhatsAppLink>
            </li>
            <li className="flex items-start gap-2.5 md:gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" strokeWidth={1.5} />
              <a
                href="mailto:contato@vidotticontabilidade.com.br"
                className="break-all text-white/60 transition-colors hover:text-brand-red"
              >
                contato@vidotticontabilidade.com.br
              </a>
            </li>
            <li className="flex items-start gap-2.5 md:gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" strokeWidth={1.5} />
              <span className="text-white/60">
                Av. Dermival Bernardes Siqueira, 1790
                <br />
                Campinas, SP 13049-252
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3 px-6 py-4 text-[11px] text-white/50 md:py-6 md:text-xs">
          <p>© {new Date().getFullYear()} Vidotti Contabilidade. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
