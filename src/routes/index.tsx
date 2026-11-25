import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Benefits } from "@/components/landing/Benefits";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { CompanyTypes } from "@/components/landing/CompanyTypes";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { faqItems } from "@/components/landing/faq-data";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { publicSiteConfig } from "@/generated/site-config";
import { buildFaqSchema, toJsonLd } from "@/lib/json-ld";

const canonicalUrl = `${publicSiteConfig.siteUrl}/`;
const socialImage = `${publicSiteConfig.siteUrl}/contadores/Gustavo%20Vidotti%20e%20Pedro%20Vidotti1.jpg`;

const accountingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: publicSiteConfig.name,
  url: canonicalUrl,
  image: socialImage,
  telephone: `+${publicSiteConfig.contact.whatsappPhone}`,
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
  foundingDate: "2002",
  sameAs: [publicSiteConfig.companySiteUrl, publicSiteConfig.contact.instagram],
  serviceType: publicSiteConfig.services,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços contábeis",
    itemListElement: publicSiteConfig.services.map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service, areaServed: "Campinas, SP" },
    })),
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: publicSiteConfig.name,
  url: canonicalUrl,
  inLanguage: "pt-BR",
};

const faqSchema = buildFaqSchema(faqItems);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abrir CNPJ em Campinas | Vidotti Contabilidade, desde 2002" },
      {
        name: "description",
        content:
          "Abra seu CNPJ em Campinas com análise de CNAE e regime tributário, saída do MEI e troca de contador. Fale com a Vidotti pelo WhatsApp.",
      },
      { name: "robots", content: "index,follow,max-image-preview:large" },
      { property: "og:site_name", content: publicSiteConfig.name },
      {
        property: "og:title",
        content: "Abrir CNPJ em Campinas | Vidotti Contabilidade, desde 2002",
      },
      {
        property: "og:description",
        content:
          "Abra seu CNPJ em Campinas com análise de CNAE e regime tributário, saída do MEI e troca de contador. Fale com a Vidotti pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: canonicalUrl },
      { property: "og:image", content: socialImage },
      { property: "og:image:alt", content: "Equipe da Vidotti Contabilidade" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Abrir CNPJ em Campinas | Vidotti Contabilidade, desde 2002",
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
        dangerouslySetInnerHTML={{ __html: toJsonLd(accountingServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(websiteSchema) }}
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
