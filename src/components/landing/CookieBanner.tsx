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
      className="fixed bottom-3 left-3 right-16 z-40 max-w-md rounded-2xl border border-white/10 bg-[#151933]/95 px-3.5 py-2.5 text-xs text-white/80 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.85)] backdrop-blur-md md:bottom-6 md:left-6 md:right-auto md:p-4"
    >
      <div className="flex flex-wrap items-center justify-between gap-2.5 md:block">
        <p className="text-[11px] leading-snug md:text-xs md:leading-relaxed">
          Cookies de medição para avaliar campanhas.{" "}
          <Link
            to="/politica-de-privacidade"
            className="font-medium text-white underline underline-offset-2 hover:text-brand-red"
          >
            Privacidade
          </Link>
          .
        </p>
        <div className="flex items-center gap-2 md:mt-3">
          <button
            type="button"
            onClick={() => handleDecision("accepted")}
            className="inline-flex min-h-8 items-center justify-center rounded-full bg-brand-red px-3.5 py-1 text-[11px] font-semibold text-white transition-opacity hover:opacity-90 md:min-h-9 md:px-4 md:py-1.5 md:text-xs"
          >
            Aceitar
          </button>
          <button
            type="button"
            onClick={() => handleDecision("rejected")}
            className="inline-flex min-h-8 items-center justify-center rounded-full border border-white/20 bg-transparent px-3 py-1 text-[11px] font-medium text-white/75 transition-colors hover:border-white/40 hover:text-white md:min-h-9 md:px-4 md:py-1.5 md:text-xs"
          >
            Recusar
          </button>
        </div>
      </div>
    </aside>
  );
}
