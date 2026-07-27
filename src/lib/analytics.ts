/**
 * Dragonfly Catering's GA4 property.
 * Events are pushed to window.dataLayer so GTM can also consume them.
 */

export const GA_MEASUREMENT_ID = "G-C4TQR2M23G";

type EventParams = Record<string, string | number | boolean | undefined>;

export type AnalyticsDataAttributes = {
  "data-analytics-event": string;
  "data-cta-label"?: string;
  "data-cta-location"?: string;
  "data-menu-name"?: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: string, params: EventParams = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}

export function analyticsDataAttributes(
  event: string,
  params: {
    ctaLabel?: string;
    ctaLocation?: string;
    menuName?: string;
  } = {},
): AnalyticsDataAttributes {
  return {
    "data-analytics-event": event,
    "data-cta-label": params.ctaLabel,
    "data-cta-location": params.ctaLocation,
    "data-menu-name": params.menuName,
  };
}

export const events = {
  ctaClick: (label: string, location: string) =>
    track("cta_click", { cta_label: label, cta_location: location }),
  formSubmit: (form: string) => track("form_submit", { form_name: form }),
  emailClick: () => track("email_click"),
  phoneClick: () => track("phone_click"),
  menuDownload: (menu: string) => track("menu_download", { menu_name: menu }),
};
