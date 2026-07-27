import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Benefits } from "@/components/landing/Benefits";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { CompanyTypes } from "@/components/landing/CompanyTypes";
import { Simulator } from "@/components/landing/Simulator";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vidotti Consultoria — Abertura de CNPJ com assessoria premium" },
      {
        name: "description",
        content:
          "Abra seu CNPJ em 48 horas com a Vidotti Consultoria: planejamento tributário, contabilidade digital e consultor dedicado para empresas que exigem excelência.",
      },
      { property: "og:title", content: "Vidotti Consultoria — Abertura de CNPJ premium" },
      {
        property: "og:description",
        content:
          "Consultoria empresarial premium para abertura de CNPJ, planejamento tributário e contabilidade digital.",
      },
      { property: "og:type", content: "website" },
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
        <Benefits />
        <HowItWorks />
        <CompanyTypes />
        <Simulator />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
