import type { AnchorHTMLAttributes, ReactNode } from "react";
import { WhatsappIcon } from "@/components/WhatsappIcon";
import { buildWhatsAppUrl, trackConversionEvent, type LandingEventName } from "@/lib/conversion";

type WhatsAppLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "target" | "rel"
> & {
  source: string;
  intent: string;
  children: ReactNode;
  eventName?: Extract<LandingEventName, "cta_clicked" | "whatsapp_clicked">;
  eventProperties?: Record<string, unknown>;
  iconClassName?: string;
  withIcon?: boolean;
};

export function WhatsAppLink({
  source,
  intent,
  children,
  eventName = "whatsapp_clicked",
  eventProperties,
  iconClassName = "h-4 w-4",
  withIcon = true,
  onClick,
  ...props
}: WhatsAppLinkProps) {
  const href = buildWhatsAppUrl({ source, intent });

  return (
    <a
      {...props}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => {
        onClick?.(event);
        trackConversionEvent(eventName, {
          source,
          intent,
          ...eventProperties,
        });

        if (typeof window === "undefined" || event.defaultPrevented) return;
        event.preventDefault();
        window.open(buildWhatsAppUrl({ source, intent }), "_blank", "noopener,noreferrer");
      }}
    >
      {withIcon && <WhatsappIcon className={iconClassName} />}
      {children}
    </a>
  );
}
