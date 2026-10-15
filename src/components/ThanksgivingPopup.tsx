"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { events, track } from "@/lib/analytics";
import { isThanksgivingOrderingOpen, thanksgiving } from "@/lib/thanksgiving";

const STORAGE_KEY = `dragonfly-thanksgiving-popup-${thanksgiving.year}`;
const SNOOZE_MS = 3 * 24 * 60 * 60 * 1000;
const DELAY_MS = 6000;
const SCROLL_TRIGGER = 0.3;
const EXCLUDED_PATHS = ["/thanksgiving", "/contact", "/privacy"];

type Stored = { until: number };

function readSnooze(): number {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Stored).until : 0;
  } catch {
    return 0;
  }
}

function writeSnooze(until: number) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ until } satisfies Stored));
  } catch {
    /* storage unavailable; the popup simply may show again next visit */
  }
}

/** Seasonal Thanksgiving pre-order prompt. Hides itself after the order cutoff. */
export function ThanksgivingPopup() {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [visible, setVisible] = useState(false);
  const shownRef = useRef(false);

  const open = useCallback(() => {
    const dialog = dialogRef.current;
    if (!dialog || shownRef.current || dialog.open) return;
    shownRef.current = true;
    dialog.showModal();
    window.requestAnimationFrame(() => setVisible(true));
    track("popup_view", { popup_name: "thanksgiving" });
  }, []);

  const close = useCallback((snoozeUntil: number) => {
    writeSnooze(snoozeUntil);
    setVisible(false);
    window.setTimeout(() => dialogRef.current?.close(), 250);
  }, []);

  useEffect(() => {
    if (shownRef.current) return;
    if (EXCLUDED_PATHS.includes(pathname)) return;
    if (!isThanksgivingOrderingOpen()) return;
    if (readSnooze() > Date.now()) return;

    const timer = window.setTimeout(open, DELAY_MS);
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable > 0 && window.scrollY / scrollable >= SCROLL_TRIGGER) open();
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname, open]);

  const dismiss = () => close(Date.now() + SNOOZE_MS);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="thanksgiving-popup-title"
      aria-describedby="thanksgiving-popup-copy"
      onCancel={(event) => {
        event.preventDefault();
        dismiss();
      }}
      onClick={(event) => {
        if (event.target === dialogRef.current) dismiss();
      }}
      className={`m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[820px] overflow-y-auto overscroll-contain bg-transparent p-0 backdrop:bg-plum/60 backdrop:backdrop-blur-sm backdrop:transition-opacity backdrop:duration-300 ${
        visible ? "backdrop:opacity-100" : "backdrop:opacity-0"
      }`}
    >
      <div
        className={`relative grid overflow-hidden rounded-[28px] bg-warmwhite shadow-[0_40px_120px_rgba(31,26,28,0.45)] transition-all duration-300 ease-out sm:grid-cols-[0.95fr_1.05fr] ${
          visible ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-[0.98] opacity-0"
        }`}
      >
        <div className="relative h-44 max-sm:[@media(max-height:700px)]:h-32 sm:h-auto sm:min-h-[420px] sm:[@media(max-height:560px)]:min-h-0">
          <Image
            src="/assets/dragonfly/photos/stock/pexels-thanksgiving-pumpkin-puree-roasted-vegetables-5718103.jpg"
            alt="Thanksgiving spread with whipped squash, roasted vegetables and small pumpkins"
            fill
            sizes="(min-width: 640px) 400px, 100vw"
            className="object-cover object-[center_62%]"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-plum/70 via-plum/10 to-transparent" />
          <p className="absolute bottom-4 left-5 rounded-full bg-warmwhite px-3.5 py-1.5 text-[12px] font-semibold text-plum shadow-sm sm:bottom-6 sm:left-6">
            Sides from $15
          </p>
        </div>

        <div className="flex flex-col justify-center px-6 pb-7 pt-6 sm:px-10 sm:py-12 sm:[@media(max-height:560px)]:py-7">
          <p className="eyebrow">Thanksgiving {thanksgiving.year} · Now taking orders</p>
          <h2
            id="thanksgiving-popup-title"
            className="mt-3 font-display text-[34px] leading-[1.05] text-plum sm:text-[44px]"
          >
            A dish-free <span className="italic text-royal">Thanksgiving.</span>
          </h2>
          <p id="thanksgiving-popup-copy" className="mt-4 text-[15px] leading-7 text-charcoal/70">
            Chef-made sides, scratch gravy and dessert, packed oven-ready for pickup or delivery on{" "}
            {thanksgiving.serviceDayShort}.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <svg aria-hidden viewBox="0 0 20 20" fill="none" className="h-5 w-5 shrink-0 text-royal">
              <rect x="3" y="4.5" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M3 8.5h14M7 3v3M13 3v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <p className="text-[15px] text-plum">
              <span className="font-semibold">Order by {thanksgiving.cutoffLabel}</span>
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/thanksgiving"
              onClick={() => {
                events.ctaClick("Order Thanksgiving", "thanksgiving-popup");
                close(Date.now() + 365 * 24 * 60 * 60 * 1000);
              }}
              className="group inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-royal px-6 py-3 text-sm font-semibold text-warmwhite shadow-[0_8px_24px_rgba(91,42,134,0.25)] transition-all hover:-translate-y-0.5 hover:bg-plum"
            >
              Order Thanksgiving
              <svg aria-hidden viewBox="0 0 20 20" fill="none" className="h-4 w-4 transition-transform group-hover:translate-x-0.5">
                <path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <button
              type="button"
              onClick={dismiss}
              className="min-h-12 whitespace-nowrap rounded-xl px-4 text-sm font-semibold text-charcoal/55 transition hover:text-plum"
            >
              Maybe later
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-plum shadow-sm transition hover:bg-ivory sm:right-4 sm:top-4"
        >
          <svg aria-hidden viewBox="0 0 20 20" fill="none" className="h-4 w-4">
            <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </dialog>
  );
}
