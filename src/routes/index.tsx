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
import { FloatingWhatsAppButton } from "@/components/landing/FloatingWhatsAppButton";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Vidotti Contabilidade: Abra seu CNPJ com orientação tributária",
      },
      {
        name: "description",
        content:
          "Abra, migre ou organize seu CNPJ com a Vidotti Contabilidade: orientação sobre MEI, CNAE, regime tributário, rotina fiscal e próximos passos para operar como PJ.",
      },
      {
        property: "og:title",
        content: "Vidotti Contabilidade: CNPJ com orientação tributária",
      },
      {
        property: "og:description",
        content:
          "Landing page para abertura de CNPJ, desenquadramento MEI, planejamento tributário e assessoria contábil.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      {
        property: "og:image",
        content: "/contadores/Gustavo%20Vidotti%20e%20Pedro%20Vidotti1.jpg",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="bg-background text-navy overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <CompanyTypes />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
