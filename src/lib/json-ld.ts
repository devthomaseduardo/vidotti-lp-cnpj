/**
 * Serializa dados estruturados para um <script type="application/ld+json">.
 * Escapa "<" para que um texto com "</script>" não feche a tag antes da hora.
 */
export function toJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

type FaqItem = { question: string; answer: string };

export function buildFaqSchema(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
