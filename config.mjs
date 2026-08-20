const explicitSiteUrl = process.env.SITE_URL || process.env.VITE_SITE_URL;
const vercelProjectUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;

function normalizeUrl(url) {
  return url.replace(/\/+$/, "");
}

function resolveSiteUrl() {
  if (explicitSiteUrl) return normalizeUrl(explicitSiteUrl);
  if (vercelProjectUrl) return normalizeUrl(`https://${vercelProjectUrl}`);
  return "https://vidotti-lp-cnpj.vercel.app";
}

const whatsappPhone = "19993726183";
const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=19993726183&text&type=phone_number&app_absent=0&utm_source=ig";

export const siteConfig = {
  name: "Vidotti Contabilidade",
  shortName: "Vidotti",
  siteUrl: resolveSiteUrl(),
  companySiteUrl: "https://vidotticonsultoria.com.br",
  locale: "pt-BR",
  lang: "pt-BR",
  themeColor: "#0D1126",
  backgroundColor: "#0A0D1E",
  updatedAt: "2026-08-20",
  description:
    "Abertura de CNPJ, desenquadramento MEI, troca de contador e orientação tributária e contábil para empresas.",
  contact: {
    whatsappPhone,
    whatsappDisplay: "(19) 99372-6183",
    whatsappUrl,
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
      title: "Abertura de Empresa em Campinas | Vidotti Contabilidade",
      changefreq: "weekly",
      priority: "1.0",
    },
    {
      path: "/politica-de-privacidade",
      title: "Política de Privacidade | Vidotti Contabilidade",
      changefreq: "yearly",
      priority: "0.3",
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

export function validateSiteConfig(config = siteConfig) {
  const errors = [];

  try {
    const siteUrl = new URL(config.siteUrl);
    if (siteUrl.protocol !== "https:") errors.push("siteUrl deve usar HTTPS");
  } catch {
    errors.push("siteUrl inválida");
  }

  if (!/^\d{10,13}$/.test(config.contact.whatsappPhone)) {
    errors.push("WhatsApp deve conter apenas números");
  }

  if (config.contact.whatsappPhone !== whatsappPhone) {
    errors.push(`WhatsApp oficial deve ser ${whatsappPhone}`);
  }

  try {
    const whatsapp = new URL(config.contact.whatsappUrl);
    if (whatsapp.hostname !== "api.whatsapp.com") {
      errors.push("whatsappUrl deve apontar para api.whatsapp.com");
    }
    if (whatsapp.searchParams.get("phone") !== config.contact.whatsappPhone) {
      errors.push("whatsappUrl e whatsappPhone estão divergentes");
    }
    if (whatsapp.searchParams.get("utm_source") !== "ig") {
      errors.push("whatsappUrl deve manter utm_source=ig");
    }
  } catch {
    errors.push("whatsappUrl inválida");
  }

  const pagePaths = config.pages.map((page) => page.path);
  if (new Set(pagePaths).size !== pagePaths.length) {
    errors.push("existem rotas duplicadas em pages");
  }

  if (errors.length) {
    throw new Error(`[site-config] ${errors.join("; ")}`);
  }

  return config;
}

validateSiteConfig();
