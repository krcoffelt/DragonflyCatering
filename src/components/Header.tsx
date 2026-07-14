"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { assets, site } from "@/lib/site";
import { events } from "@/lib/analytics";
import { NavPill, PrimaryButton } from "./verde/VerdePrimitives";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Menus", href: "/sample-menus" },
  { label: "Gallery", href: "/gallery" },
  { label: "Venues", href: "/preferred-venues" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const solid = !isHome || scrolled || open;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    const frame = window.requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        solid
          ? "border-warmwhite/10 bg-plum/96 shadow-[0_10px_35px_rgba(31,26,28,0.12)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="vv-container flex h-[88px] items-center justify-between gap-8 lg:h-[96px]">
        <Link
          href="/"
          aria-label="Dragonfly Catering home"
          onClick={() => setOpen(false)}
          className="relative z-50 shrink-0"
        >
          <Image
            src={assets.logoHeader}
            alt="Dragonfly Catering logo"
            width={520}
            height={135}
            loading="eager"
            fetchPriority="high"
            className="h-[34px] w-auto invert sm:h-[38px] lg:h-[42px]"
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <nav aria-label="Main navigation" className="flex items-center gap-1">
            {navLinks.map((link) => (
              <NavPill key={link.href} href={link.href}>
                {link.label}
              </NavPill>
            ))}
          </nav>
          <PrimaryButton href="/contact" location="header" tone="light" className="ml-4">
            Request a Proposal
          </PrimaryButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-50 flex h-11 w-11 items-center justify-center border border-warmwhite/35 text-warmwhite lg:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-300 ${
                open ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[5px] h-px w-full bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[10px] h-px w-full bg-current transition-transform duration-300 ${
                open ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 bottom-0 top-[88px] overflow-y-auto bg-plum lg:hidden"
          >
            <nav aria-label="Mobile navigation" className="vv-container flex min-h-full flex-col py-8">
              <div className="divide-y divide-warmwhite/12 border-y border-warmwhite/12">
                {[{ label: "Home", href: "/" }, ...navLinks].map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.035, duration: 0.28 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between py-4 font-display text-[28px] leading-none sm:text-[34px] ${
                        pathname === link.href ? "text-gold" : "text-warmwhite"
                      }`}
                    >
                      {link.label}
                      <span className="text-base" aria-hidden>
                        ↗
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-10">
                <Link
                  href="/contact"
                  onClick={() => {
                    setOpen(false);
                    events.ctaClick("Request a Proposal", "mobile-menu");
                  }}
                  className="block bg-gold px-6 py-4 text-center text-[15px] font-semibold text-plum"
                >
                  Request a Proposal
                </Link>
                <p className="mt-5 text-center text-sm text-warmwhite/60">
                  {site.taglines.secondary}
                </p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
