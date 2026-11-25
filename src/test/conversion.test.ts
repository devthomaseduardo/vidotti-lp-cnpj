import { beforeEach, describe, expect, it } from "vitest";
import {
  buildWhatsAppUrl,
  readConsentChoice,
  resolveCampaignParams,
  saveConsentChoice,
  trackConversionEvent,
} from "@/lib/conversion";
import { publicSiteConfig } from "@/generated/site-config";

const setUrl = (search: string) => window.history.replaceState(null, "", `/${search}`);

beforeEach(() => {
  sessionStorage.clear();
  localStorage.clear();
  setUrl("");
});

describe("buildWhatsAppUrl", () => {
  it("usa o número oficial em formato internacional", () => {
    const url = new URL(buildWhatsAppUrl({ source: "hero", intent: "Quero abrir meu CNPJ." }));

    expect(url.hostname).toBe("api.whatsapp.com");
    expect(url.searchParams.get("phone")).toBe("5519993726183");
    expect(url.searchParams.get("phone")).toBe(publicSiteConfig.contact.whatsappPhone);
  });

  it("monta a mensagem com a intenção e só os campos preenchidos", () => {
    const url = new URL(
      buildWhatsAppUrl({
        source: "hero_form",
        intent: "Quero abrir meu CNPJ.",
        lead: { name: " Ana ", business: "Padaria em Campinas", email: "  " },
      }),
    );
    const text = url.searchParams.get("text") ?? "";

    expect(text).toContain("Olá, vim pelo site da Vidotti Contabilidade.");
    expect(text).toContain("Quero abrir meu CNPJ.");
    expect(text).toContain("Nome: Ana");
    expect(text).toContain("Atividade/cidade/dúvida: Padaria em Campinas");
    expect(text).not.toContain("E-mail");
  });
});

describe("resolveCampaignParams", () => {
  it("usa os UTMs padrão e a origem do clique quando não há campanha", () => {
    const utms = resolveCampaignParams("faq");

    expect(utms.utm_campaign).toBe(publicSiteConfig.campaign.utm_campaign);
    expect(utms.utm_content).toBe("faq");
  });

  it("prioriza os UTMs da URL e guarda para os próximos cliques", () => {
    setUrl("?utm_source=google&utm_campaign=cnpj-novembro");
    expect(resolveCampaignParams("hero").utm_source).toBe("google");

    setUrl("");
    const later = resolveCampaignParams("footer");
    expect(later.utm_source).toBe("google");
    expect(later.utm_campaign).toBe("cnpj-novembro");
  });
});

describe("trackConversionEvent", () => {
  it("manda o evento para o GTM e marca clique no WhatsApp como lead", async () => {
    const { trackConversionEvent } = await import("@/lib/conversion");
    const w = window as unknown as { dataLayer: Array<Record<string, unknown>> };
    w.dataLayer = [];

    trackConversionEvent("whatsapp_clicked", { source: "hero" });

    const events = w.dataLayer.map((entry) => entry.event);
    expect(events).toEqual(["whatsapp_clicked", "generate_lead"]);
    expect(w.dataLayer[1].lead_source).toBe("hero");
  });

  it("não marca visita de página como lead", () => {
    const w = window as unknown as { dataLayer: Array<Record<string, unknown>> };
    w.dataLayer = [];

    trackConversionEvent("page_view", { source: "root" });

    expect(w.dataLayer.map((entry) => entry.event)).toEqual(["page_view"]);
  });

  it("não envia eventos para o GTM quando o visitante recusa os cookies", () => {
    const w = window as unknown as { dataLayer: Array<Record<string, unknown>> };
    w.dataLayer = [];

    saveConsentChoice("rejected");
    expect(readConsentChoice()).toBe("rejected");

    trackConversionEvent("whatsapp_clicked", { source: "hero" });
    expect(w.dataLayer).toEqual([]);
  });
});
