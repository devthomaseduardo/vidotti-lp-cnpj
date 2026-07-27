import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/vidotti-logo.webp.asset.json";

export function Footer() {
  return (
    <footer className="relative bg-navy-deep text-white/80">
      <div className="max-w-[1280px] mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1">
          <img src={logo.url} alt="Vidotti Consultoria" className="h-8 w-auto" />
          <p className="mt-5 text-sm leading-relaxed text-white/60 max-w-xs">
            Consultoria empresarial premium especializada em abertura de CNPJ, planejamento tributário e contabilidade digital.
          </p>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-widest">Serviços</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#empresas" className="hover:text-white transition-colors">Abertura de CNPJ</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contabilidade mensal</a></li>
            <li><a href="#simulador" className="hover:text-white transition-colors">Planejamento tributário</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Migração de contador</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Certificado digital</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-widest">Empresa</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#beneficios" className="hover:text-white transition-colors">Por que Vidotti</a></li>
            <li><a href="#como-funciona" className="hover:text-white transition-colors">Como funciona</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-widest">Contato</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-brand-red" strokeWidth={1.5} />
              <span>(11) 3000-0000</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-brand-red" strokeWidth={1.5} />
              <span>contato@vidotticonsultoria.com.br</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-brand-red" strokeWidth={1.5} />
              <span>Av. Paulista, 1000 — Bela Vista<br />São Paulo · SP</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Vidotti Consultoria · CNPJ 00.000.000/0001-00</p>
          <p>Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
