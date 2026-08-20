import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Benefits } from "@/components/landing/Benefits";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { CompanyTypes } from "@/components/landing/CompanyTypes";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abertura de Empresa em Campinas | Vidotti Contabilidade" },
      { name: "description", content: "Abra seu CNPJ em Campinas com orientação sobre CNAE, regime tributário, desenquadramento MEI, troca de contador e rotina contábil desde o primeiro passo." },
      { property: "og:title", content: "Abertura de Empresa em Campinas | Vidotti Contabilidade" },
      { property: "og:description", content: "Diagnóstico inicial para abertura de CNPJ, desenquadramento MEI, troca de contador e organização tributária e contábil." },
      { property: "og:type", content: "website" }, { property: "og:locale", content: "pt_BR" }, { property: "og:url", content: "https://vidotticontabilidade.com.br/" },
      { property: "og:image", content: "https://vidotticontabilidade.com.br/contadores/Gustavo%20Vidotti%20e%20Pedro%20Vidotti1.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://vidotticontabilidade.com.br/" }],
  }),
  component: Index,
});

function Index() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (<div ref={ref} className="overflow-x-hidden bg-background text-navy"><Navbar /><main><Hero /><CompanyTypes /><Benefits /><HowItWorks /><Testimonials /><FAQ /><FinalCTA /></main><Footer /></div>);
}
