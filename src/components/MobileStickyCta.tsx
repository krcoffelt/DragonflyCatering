"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { events } from "@/lib/analytics";

/** A compact mobile CTA that appears on upward scroll and clears reading/CTA zones. */
export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const previousY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    previousY.current = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const movingUp = currentY < previousY.current - 3;
      setVisible(currentY > 720 && movingUp);
      previousY.current = currentY;
    };

    const observer = new IntersectionObserver(
      (entries) => setBlocked(entries.some((entry) => entry.isIntersecting)),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.02 },
    );

    document.querySelectorAll("[data-sticky-cta-exclude]").forEach((element) => observer.observe(element));
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  if (pathname === "/contact") return null;

  const shown = visible && !blocked;

  return (
    <div
      className={`fixed bottom-4 right-4 z-40 transition-all duration-300 lg:hidden ${
        shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <Link
        href="/contact"
        onClick={() => events.ctaClick("Request a Proposal", "mobile-sticky")}
        className="flex min-h-12 items-center bg-gold px-5 py-3 text-[13px] font-semibold text-plum shadow-[0_10px_28px_rgba(31,26,28,0.28)]"
      >
        Request a Proposal <span className="ml-2" aria-hidden>↗</span>
      </Link>
    </div>
  );
}
