"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { events } from "@/lib/analytics";

/** Sticky proposal CTA that appears on mobile after scrolling past the hero. */
export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/contact") return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-4 pb-4 transition-all duration-300 lg:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <Link
        href="/contact"
        onClick={() => events.ctaClick("Request a Custom Proposal", "mobile-sticky")}
        className="block rounded-full bg-royal px-6 py-4 text-center text-sm font-semibold text-warmwhite shadow-[0_8px_30px_rgba(44,22,53,0.35)]"
      >
        Request a Custom Proposal
      </Link>
    </div>
  );
}
