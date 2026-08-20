const envSiteUrl = process.env.SITE_URL || process.env.VITE_SITE_URL;

function normalizeUrl(url) {
  return url.replace(/\/+$/, "");
}

export const siteConfig = {
  name: "Vidotti Contabilidade",
  shortName: "Vidotti",
  siteUrl: normalizeUrl(envSiteUrl || "https://vidotticontabilidade.com.br"),
  locale: "pt-BR",
  lang: "pt-BR",
  themeColor: "#0D1126",
  backgroundColor: "#0A0D1E",
  updatedAt: "2026-08-20",
  description:
    "Orientação para abrir CNPJ, desenquadrar MEI, trocar de contador ou revisar rotina tributária e contábil.",
  contact: {
    whatsappPhone: "19993726183",
    whatsappDisplay: "(19) 99372-6183",
    whatsappUrl:
      "https://api.whatsapp.com/send/?phone=19993726183&text&type=phone_number&app_absent=0&utm_source=ig",
    email: "contato@vidotticontabilidade.com.br",
    instagram: "https://instagram.com/vidotticontabilidade2002",
    address: "Av. Dermival Bernardes Siqueira, 1790, Campinas, SP 13049-252",
  },
  campaign: {
    utm_source: "direct",
    utm_medium: "site",
    utm_campaign: "vidotti-cnpj-agosto-2026",
    utm_content: "site-cnpj",
    utm_term: "abertura-cnpj",
  },
  pages: [
    {
      path: "/",
      title: "Vidotti Contabilidade: Abra seu CNPJ com orientação tributária",
      changefreq: "weekly",
      priority: "1.0",
    },
  ],
  services: [
    "Abertura de CNPJ",
    "Desenquadramento MEI",
    "Troca de contador",
    "Planejamento tributário",
    "Assessoria contábil, fiscal e trabalhista",
  ],
};
