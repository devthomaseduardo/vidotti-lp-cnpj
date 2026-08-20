import { WhatsappIcon } from "@/components/WhatsappIcon";
import { buildWhatsAppUrl, trackConversionEvent } from "@/lib/conversion";

export function FloatingWhatsApp() {
  const source = "floating_button";
  const intent = "Quero falar com a Vidotti e entender o melhor caminho para meu CNPJ.";
  const href = buildWhatsAppUrl({ source, intent, campaignMode: "default" });

  return (
    <div className="floating-whatsapp fixed bottom-6 right-6 z-50 hidden items-end gap-3 md:flex"><div className="floating-whatsapp-msg relative z-40 mb-1 max-w-[200px] rounded-2xl rounded-br-sm bg-white px-4 py-2.5 text-xs font-medium leading-snug text-gray-800 shadow-lg">Falar pelo WhatsApp<span className="absolute -right-1.5 bottom-3 h-0 w-0 border-b-[6px] border-l-[8px] border-t-[6px] border-b-transparent border-l-white border-t-transparent" /></div><a href={href} target="_blank" rel="noopener noreferrer" aria-label="Falar pelo WhatsApp" onClick={(event) => { event.preventDefault(); trackConversionEvent("whatsapp_clicked", { source, intent }); window.open(buildWhatsAppUrl({ source, intent }), "_blank", "noopener,noreferrer"); }} className="relative z-50 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-red shadow-[0_4px_20px_-4px_rgba(215,25,32,0.6)] transition-transform hover:scale-110"><span className="wave-ring absolute inset-0 rounded-full bg-brand-red opacity-40" /><span className="wave-ring absolute inset-0 rounded-full bg-brand-red opacity-25 [animation-delay:0.4s]" /><span className="wave-ring absolute inset-0 rounded-full bg-brand-red opacity-15 [animation-delay:0.8s]" /><WhatsappIcon className="relative z-10 h-7 w-7 text-white" /></a></div>
  );
}
