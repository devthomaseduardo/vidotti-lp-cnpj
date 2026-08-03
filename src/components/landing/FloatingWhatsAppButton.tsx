import { useEffect, useState } from "react";
import { WhatsAppLink } from "./WhatsAppLink";

export function FloatingWhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const updateVisibility = () => {
      setVisible(window.scrollY > 520);
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateVisibility();
      });
    };

    updateVisibility();
    const sync = window.setInterval(updateVisibility, 900);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.clearInterval(sync);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateVisibility);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <WhatsAppLink
      source="floating_whatsapp"
      intent="Quero falar com a Vidotti pelo botão flutuante da landing page."
      aria-label="Falar com a Vidotti no WhatsApp"
      iconClassName="h-5 w-5 md:h-6 md:w-6"
      className={`fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_32px_-16px_rgba(37,211,102,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20BD5A] md:bottom-6 md:right-6 md:h-14 md:w-14 print:hidden ${
        visible
          ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-3 scale-95 opacity-0"
      }`}
    >
      <span className="sr-only">Falar no WhatsApp</span>
    </WhatsAppLink>
  );
}
