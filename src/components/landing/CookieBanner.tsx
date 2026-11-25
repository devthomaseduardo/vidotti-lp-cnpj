import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { readConsentChoice, saveConsentChoice, type ConsentChoice } from "@/lib/conversion";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (readConsentChoice() === null) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const handleDecision = (choice: ConsentChoice) => {
    saveConsentChoice(choice);
    setVisible(false);
  };

  return (
    <aside
      aria-label="Aviso de cookies e privacidade"
      className="fixed bottom-3 left-3 right-16 z-40 max-w-md rounded-2xl border border-white/10 bg-[#151933]/95 p-4 text-xs text-white/80 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.85)] backdrop-blur-md md:bottom-6 md:left-6 md:right-auto"
    >
      <p className="leading-relaxed">
        Usamos cookies de medição para entender o desempenho das campanhas e melhorar o atendimento.
        Veja a{" "}
        <Link
          to="/politica-de-privacidade"
          className="font-medium text-white underline underline-offset-2 hover:text-brand-red"
        >
          Política de Privacidade
        </Link>
        .
      </p>
      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={() => handleDecision("accepted")}
          className="inline-flex min-h-9 items-center justify-center rounded-full bg-brand-red px-4 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-90"
        >
          Aceitar
        </button>
        <button
          type="button"
          onClick={() => handleDecision("rejected")}
          className="inline-flex min-h-9 items-center justify-center rounded-full border border-white/20 bg-transparent px-4 py-1.5 text-xs font-medium text-white/75 transition-colors hover:border-white/40 hover:text-white"
        >
          Recusar
        </button>
      </div>
    </aside>
  );
}
