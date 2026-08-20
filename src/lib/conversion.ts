import { publicSiteConfig } from "@/generated/site-config";

const DEFAULT_UTMS = publicSiteConfig.campaign;
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
const STORAGE_KEY = "vidotti_lp_utm";

export type LandingEventName =
  | "page_view"
  | "cta_clicked"
  | "whatsapp_clicked"
  | "form_started"
  | "form_completed"
  | "whatsapp_opened"
  | "form_submitted";

type UtmKey = (typeof UTM_KEYS)[number];
type UtmParams = Record<UtmKey, string>;

export type LeadData = {
  name?: string;
  business?: string;
  email?: string;
  phone?: string;
  need?: string;
};

type WhatsAppOptions = {
  source: string;
  intent: string;
  lead?: LeadData;
  campaignMode?: "default" | "resolved";
};

type AnalyticsWindow = Window & {
  posthog?: {
    capture: (eventName: string, properties?: Record<string, unknown>) => void;
  };
  gtag?: (command: "event", eventName: string, parameters?: Record<string, unknown>) => void;
};

function getWindow(): AnalyticsWindow | null {
  if (typeof window === "undefined") return null;
  return window as AnalyticsWindow;
}

function readStoredUtms(win: AnalyticsWindow): Partial<UtmParams> {
  try {
    const raw = win.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as Partial<UtmParams>;
  } catch {
    return {};
  }
}

function readUrlUtms(win: AnalyticsWindow): Partial<UtmParams> {
  const search = new URLSearchParams(win.location.search);
  return UTM_KEYS.reduce<Partial<UtmParams>>((acc, key) => {
    const value = search.get(key);
    if (value) acc[key] = value;
    return acc;
  }, {});
}

function persistUtms(win: AnalyticsWindow, utms: UtmParams) {
  try {
    win.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utms));
  } catch {
    // O atendimento continua funcionando mesmo quando o storage está bloqueado.
  }
}

export function resolveCampaignParams(source: string): UtmParams {
  const win = getWindow();

  if (!win) {
    return {
      ...DEFAULT_UTMS,
      utm_content: source,
    };
  }

  const stored = readStoredUtms(win);
  const current = readUrlUtms(win);
  const hasCurrentUtms = Object.keys(current).length > 0;

  const utms: UtmParams = {
    ...DEFAULT_UTMS,
    ...stored,
    ...current,
    utm_content: current.utm_content ?? stored.utm_content ?? source,
  };

  if (hasCurrentUtms || !stored.utm_campaign) persistUtms(win, utms);

  return utms;
}

export function captureInitialCampaign(source = "page_load") {
  resolveCampaignParams(source);
}

function formatLead(lead?: LeadData) {
  if (!lead) return "";

  const fields: Array<[string, string | undefined]> = [
    ["Nome", lead.name],
    ["Atividade/cidade/dúvida", lead.business],
    ["E-mail", lead.email],
    ["WhatsApp informado", lead.phone],
    ["Necessidade", lead.need],
  ];

  return fields
    .filter(([, value]) => Boolean(value?.trim()))
    .map(([label, value]) => `${label}: ${value?.trim()}`)
    .join("\n");
}

export function buildWhatsAppUrl({
  source,
  intent,
  lead,
  campaignMode = "resolved",
}: WhatsAppOptions) {
  if (campaignMode === "resolved") resolveCampaignParams(source);

  const leadBlock = formatLead(lead);
  const message = [
    "Olá, vim pelo site da Vidotti Contabilidade.",
    intent.trim(),
    leadBlock ? `Dados preenchidos:\n${leadBlock}` : "",
  ]
    .filter(Boolean)
    .join("\n\n");

  const url = new URL(publicSiteConfig.contact.whatsappUrl);
  url.searchParams.set("phone", publicSiteConfig.contact.whatsappPhone);
  url.searchParams.set("text", message);
  url.searchParams.set("type", "phone_number");
  url.searchParams.set("app_absent", "0");
  url.searchParams.set("utm_source", "ig");

  return url.toString();
}

export function trackConversionEvent(
  eventName: LandingEventName,
  properties: Record<string, unknown> = {},
) {
  const win = getWindow();
  if (!win) return;

  const source = typeof properties.source === "string" ? properties.source : eventName;
  const payload = {
    ...resolveCampaignParams(source),
    ...properties,
    page_path: win.location.pathname,
    page_search: win.location.search,
  };

  win.posthog?.capture(eventName, payload);
  win.gtag?.("event", eventName, payload);
  win.dispatchEvent(
    new CustomEvent("lp:conversion-event", {
      detail: {
        eventName,
        properties: payload,
      },
    }),
  );
}
