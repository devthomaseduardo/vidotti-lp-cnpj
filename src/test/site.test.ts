import { describe, expect, it } from "vitest";
// @ts-expect-error config.mjs é JavaScript puro, usado também pelos scripts de build.
import { siteConfig, validateSiteConfig } from "../../config.mjs";
import { faqItems } from "@/components/landing/FAQ";
import { buildFaqSchema, toJsonLd } from "@/lib/json-ld";

describe("configuração do site", () => {
  it("a configuração versionada é válida", () => {
    expect(() => validateSiteConfig(siteConfig)).not.toThrow();
  });

  it("recusa WhatsApp divergente do oficial", () => {
    const broken = {
      ...siteConfig,
      contact: { ...siteConfig.contact, whatsappPhone: "19000000000" },
    };
    expect(() => validateSiteConfig(broken)).toThrow();
  });
});

describe("dados estruturados", () => {
  it("gera um FAQPage com todas as perguntas da página", () => {
    const schema = buildFaqSchema(faqItems);

    expect(schema["@type"]).toBe("FAQPage");
    expect(schema.mainEntity).toHaveLength(faqItems.length);
    expect(schema.mainEntity[0].name).toBe(faqItems[0].question);
  });

  it("não deixa um texto fechar a tag <script>", () => {
    expect(toJsonLd({ text: "</script><script>alert(1)</script>" })).not.toContain("</script>");
  });
});
