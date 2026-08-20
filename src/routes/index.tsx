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
import { publicSiteConfig } from "@/generated/site-config";

const canonicalUrl = `${publicSiteConfig.siteUrl}/`;
const socialImage = `${publicSiteConfig.siteUrl}/contadores/Gustavo%20Vidotti%20e%20Pedro%20Vidotti1.jpg`;

const accountingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: publicSiteConfig.name,
  url: canonicalUrl,
  image: socialImage,
  telephone: `+55${publicSiteConfig.contact.whatsappPhone}`,
  email: publicSiteConfig.contact.email,
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
  sameAs: [publicSiteConfig.companySiteUrl, publicSiteConfig.contact.instagram],
  serviceType: publicSiteConfig.services,
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
      { property: "og:site_name", content: publicSiteConfig.name },
      {
        property: "og:title",
        content: "Abertura de Empresa em Campinas | Vidotti Contabilidade",
      },
      {
        property: "og:description",
        content:
          "Diagnóstico inicial para abertura de CNPJ, desenquadramento MEI, troca de contador e organização tributária e contábil.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: canonicalUrl },
      { property: "og:image", content: socialImage },
      { property: "og:image:alt", content: "Equipe da Vidotti Contabilidade" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Abertura de Empresa em Campinas | Vidotti Contabilidade",
      },
      {
        name: "twitter:description",
        content: "Abertura de CNPJ, MEI, troca de contador e orientação tributária em Campinas.",
      },
      { name: "twitter:image", content: socialImage },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
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
