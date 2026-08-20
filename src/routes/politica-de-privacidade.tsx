import { createFileRoute, Link } from "@tanstack/react-router";
import logoNavy from "@/assets/vidotti-logo-navy.png";
import { publicSiteConfig } from "@/generated/site-config";

const canonicalUrl = `${publicSiteConfig.siteUrl}/politica-de-privacidade`;

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Vidotti Contabilidade" },
      {
        name: "description",
        content:
          "Saiba como a Vidotti Contabilidade trata informações enviadas pelo site, dados de navegação e contatos iniciados pelo WhatsApp.",
      },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  }),
  component: PrivacyPolicy,
});

const sections = [
  {
    title: "1. Informações que podem ser coletadas",
    text: [
      "Quando você usa o diagnóstico inicial, podemos receber as informações que você preenche sobre atividade, cidade, dúvida principal e necessidade de atendimento.",
      "Também podemos registrar dados técnicos de navegação e campanha, como página acessada, parâmetros UTM e eventos de interação usados para medir o desempenho do site.",
    ],
  },
  {
    title: "2. Como essas informações são usadas",
    text: [
      "As informações são usadas para dar continuidade ao atendimento solicitado, compreender a origem do contato, melhorar a experiência do site e medir campanhas e conversões.",
      "Os parâmetros internos de campanha são usados para análise e não são inseridos no texto visível da mensagem enviada pelo visitante no WhatsApp.",
    ],
  },
  {
    title: "3. WhatsApp e serviços de terceiros",
    text: [
      `Ao escolher falar pelo WhatsApp, você é direcionado para o número ${publicSiteConfig.contact.whatsappDisplay}, usado nesta landing page. A partir desse momento, o uso do WhatsApp também segue as políticas e condições da Meta.`,
      "O site pode utilizar serviços de hospedagem e ferramentas de análise para funcionar, medir acessos e identificar melhorias. Esses fornecedores podem processar dados técnicos necessários à prestação dos seus serviços.",
    ],
  },
  {
    title: "4. Armazenamento e segurança",
    text: [
      "A Vidotti adota medidas compatíveis com a natureza das informações tratadas e busca manter os dados somente pelo período necessário às finalidades de atendimento, operação e obrigações aplicáveis.",
    ],
  },
  {
    title: "5. Seus direitos",
    text: [
      "Você pode solicitar informações sobre o tratamento dos seus dados, correção, atualização ou exclusão quando aplicável, além de revogar consentimentos relacionados ao contato.",
    ],
  },
  {
    title: "6. Contato",
    text: [
      `Para dúvidas sobre privacidade ou tratamento de dados, entre em contato pelo e-mail ${publicSiteConfig.contact.email}.`,
    ],
  },
];

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0A0D1E] text-white">
      <header className="border-b border-white/10 bg-[#0D1126]">
        <div className="mx-auto flex h-20 max-w-[1080px] items-center justify-between px-6">
          <Link to="/" aria-label="Voltar ao site da Vidotti">
            <img
              src={logoNavy}
              alt="Vidotti Contabilidade"
              className="h-8 w-auto brightness-0 invert"
            />
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-white/65 transition-colors hover:text-white"
          >
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[920px] px-6 py-16 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
          Privacidade
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-[-0.03em] md:text-5xl">
          Política de Privacidade
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/60">
          Esta política explica, de forma objetiva, como as informações fornecidas pelo site e os
          dados técnicos de navegação podem ser usados no atendimento e na operação digital da
          Vidotti Contabilidade.
        </p>
        <p className="mt-3 text-sm text-white/40">Última atualização: 20 de agosto de 2026.</p>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {sections.map((section) => (
            <section key={section.title} className="py-8">
              <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              <div className="mt-4 space-y-3">
                {section.text.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-7 text-white/60">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
