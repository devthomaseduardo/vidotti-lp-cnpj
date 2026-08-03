import { WhatsappIcon } from "@/components/WhatsappIcon";
import { buildWhatsAppUrl, trackConversionEvent } from "@/lib/conversion";

export function FloatingWhatsApp() {
  const href = buildWhatsAppUrl({
    source: "floating_button",
    intent: "Olá! Vim pelo site e gostaria de falar com um especialista sobre abertura de CNPJ.",
  });

  return (
    <div className="floating-whatsapp fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Mensagem flutuante — renderizada antes no DOM mas posicionada à esquerda */}
      <div className="floating-whatsapp-msg relative z-40 mb-1 max-w-[200px] rounded-2xl rounded-br-sm bg-white px-4 py-2.5 text-xs font-medium leading-snug text-gray-800 shadow-lg">
        Fale com um especialista agora 👋
        {/* Rabinho apontando para o botão (direita) */}
        <span className="absolute -right-1.5 bottom-3 h-0 w-0 border-b-[6px] border-l-[8px] border-t-[6px] border-b-transparent border-l-white border-t-transparent" />
      </div>

      {/* Botão com ondas — z-50 garante que fica na frente da mensagem */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        onClick={() =>
          trackConversionEvent("whatsapp_clicked", {
            source: "floating_button",
          })
        }
        className="relative z-50 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-red shadow-[0_4px_20px_-4px_rgba(215,25,32,0.6)] transition-transform hover:scale-110"
      >
        {/* Ondas */}
        <span className="wave-ring absolute inset-0 rounded-full bg-brand-red opacity-40" />
        <span className="wave-ring absolute inset-0 rounded-full bg-brand-red opacity-25 [animation-delay:0.4s]" />
        <span className="wave-ring absolute inset-0 rounded-full bg-brand-red opacity-15 [animation-delay:0.8s]" />

        <WhatsappIcon className="relative z-10 h-7 w-7 text-white" />
      </a>
    </div>
  );
}
