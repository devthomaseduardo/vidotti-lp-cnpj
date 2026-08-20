import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Benefits } from "@/components/landing/Benefits";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { CompanyTypes } from "@/components/landing/CompanyTypes";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ, faqItems } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const siteUrl = "https://vidotticontabilidade.com.br";

const accountingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "Vidotti Contabilidade",
  url: `${siteUrl}/`,
  image: `${siteUrl}/contadores/Gustavo%20Vidotti%20e%20Pedro%20Vidotti1.jpg`,
  telephone: "+55 19 99372-6183",
  email: "contato@vidotticontabilidade.com.br",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Dermival Bernardes Siqueira, 1790",
    addressLocality: "Campinas",
    addressRegion: "SP",
    postalCode: "13049-252",
    addressCountry: "BR",
  },
  areaServed: {
    "@type": "City",
    name: "Campinas",
  },
  sameAs: ["https://instagram.com/vidotticontabilidade2002"],
  serviceType: [
    "Abertura de CNPJ",
    "Desenquadramento MEI",
    "Troca de contador",
    "Assessoria contábil",
    "Planejamento tributário",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abertura de Empresa em Campinas | Vidotti Contabilidade" },
      {
        name: "description",
        content:
          "Abra seu CNPJ em Campinas com orientação sobre CNAE, regime tributário, desenquadramento MEI, troca de contador e rotina contábil desde o primeiro passo.",
      },
      { name: "robots", content: "index,follow,max-image-preview:large" },
      { property: "og:title", content: "Abertura de Empresa em Campinas | Vidotti Contabilidade" },
      {
        property: "og:description",
        content:
          "Diagnóstico inicial para abertura de CNPJ, desenquadramento MEI, troca de contador e organização tributária e contábil.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: `${siteUrl}/` },
      {
        property: "og:image",
        content: `${siteUrl}/contadores/Gustavo%20Vidotti%20e%20Pedro%20Vidotti1.jpg`,
      },
      { property: "og:image:alt", content: "Equipe da Vidotti Contabilidade" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Abertura de Empresa em Campinas | Vidotti Contabilidade" },
      {
        name: "twitter:description",
        content: "Abertura de CNPJ, MEI, troca de contador e orientação tributária em Campinas.",
      },
      {
        name: "twitter:image",
        content: `${siteUrl}/contadores/Gustavo%20Vidotti%20e%20Pedro%20Vidotti1.jpg`,
      },
    ],
    links: [{ rel: "canonical", href: `${siteUrl}/` }],
  }),
  component: Index,
});

function Index() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="overflow-x-hidden bg-background text-navy">
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(accountingServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <CompanyTypes />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
