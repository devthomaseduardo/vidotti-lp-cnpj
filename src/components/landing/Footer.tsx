import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/vidotti-logo.webp.asset.json";
import { WhatsAppLink } from "./WhatsAppLink";

export function Footer() {
  return (
    <footer className="relative bg-[#0D1126] text-white/80 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1">
          <img
            src={logo.url}
            alt="Vidotti Consultoria"
            className="h-8 w-auto brightness-0 invert"
          />
          <p className="mt-5 text-sm leading-relaxed text-white/60 max-w-xs">
            Desde 2002 provendo soluções nas áreas fiscal, contábil, tributária e trabalhista.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="https://instagram.com/vidotticontabilidade2002"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Vidotti"
              className="text-white/60 hover:text-brand-red transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">Serviços</h4>
          <ul className="space-y-2 text-sm">
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
            <li>
              <a href="#empresas" className="hover:text-brand-red text-white/60 transition-colors">
                Gestão de RH
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">Institucional</h4>
          <ul className="space-y-2 text-sm">
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
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">Contato</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-brand-red" strokeWidth={1.5} />
              <WhatsAppLink
                source="footer_phone"
                intent="Quero falar com a Vidotti pelo contato do rodapé da landing page."
                withIcon={false}
                className="text-white/60 transition-colors hover:text-brand-red"
              >
                (19) 99635-5181
              </WhatsAppLink>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-brand-red" strokeWidth={1.5} />
              <a
                href="mailto:contato@vidotticontabilidade.com.br"
                className="text-white/60 transition-colors hover:text-brand-red"
              >
                contato@vidotticontabilidade.com.br
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-brand-red" strokeWidth={1.5} />
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
        <div className="max-w-[1280px] mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Vidotti Contabilidade. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
