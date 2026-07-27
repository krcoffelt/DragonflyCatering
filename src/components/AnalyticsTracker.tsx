"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

export function AnalyticsTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const trackedElement = event.target.closest<HTMLElement>(
        "[data-analytics-event]",
      );
      if (!trackedElement) return;

      const eventName = trackedElement.dataset.analyticsEvent;
      if (!eventName) return;

      track(eventName, {
        cta_label: trackedElement.dataset.ctaLabel,
        cta_location: trackedElement.dataset.ctaLocation,
        menu_name: trackedElement.dataset.menuName,
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
