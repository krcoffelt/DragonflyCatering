/**
 * Analytics placeholder — GA4/GTM is not yet configured.
 * Set NEXT_PUBLIC_GA_MEASUREMENT_ID (e.g. "G-XXXXXXXXXX") to enable GA4.
 * Events are pushed to window.dataLayer so GTM can also consume them.
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

type EventParams = Record<string, string | number | boolean | undefined>;

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

export const events = {
  ctaClick: (label: string, location: string) =>
    track("cta_click", { cta_label: label, cta_location: location }),
  formSubmit: (form: string) => track("form_submit", { form_name: form }),
  emailClick: () => track("email_click"),
  phoneClick: () => track("phone_click"),
  menuDownload: (menu: string) => track("menu_download", { menu_name: menu }),
};
