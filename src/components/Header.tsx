"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { assets, site } from "@/lib/site";
import { events } from "@/lib/analytics";
import { NavPill, PrimaryButton } from "./verde/VerdePrimitives";

const leftNav = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Menus", href: "/sample-menus" },
];

const rightNav = [
  { label: "Gallery", href: "/gallery" },
  { label: "Venues", href: "/preferred-venues" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const solid = !isHome || scrolled;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    const frame = window.requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isHome]);

  const textTone = solid || !isHome ? "text-warmwhite" : "text-warmwhite";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid || !isHome ? "bg-plum/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="vv-container">
        <div className="grid h-[86px] grid-cols-[1fr_auto_1fr] items-start pt-[22px]">
          {/* Left nav pills */}
          <nav aria-label="Main left" className="hidden items-center gap-1 lg:flex">
            {leftNav.map((link) => (
              <NavPill key={link.href} href={link.href}>
                {link.label}
              </NavPill>
            ))}
          </nav>

          {/* Center logo */}
          <Link
            href="/"
            aria-label="Dragonfly Catering — Home"
            className="mx-auto flex shrink-0 justify-center"
          >
            <Image
              src={assets.logoHeader}
              alt="Dragonfly Catering logo"
              width={520}
              height={135}
              loading="eager"
              fetchPriority="high"
              className="h-[42px] w-auto invert"
            />
          </Link>

          {/* Right nav + CTA */}
          <div className="hidden items-center justify-end gap-1 lg:flex">
            {rightNav.map((link) => (
              <NavPill key={link.href} href={link.href}>
                {link.label}
              </NavPill>
            ))}
            <PrimaryButton href="/contact" location="header" tone="outline-light" className="ml-2">
              Request a Proposal
            </PrimaryButton>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className={`col-start-3 ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-warmwhite/25 lg:hidden ${textTone}`}
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-full bg-current transition-transform duration-300 ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[5px] h-[1.5px] w-full bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[10px] h-[1.5px] w-full bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[86px] z-40 max-h-[calc(100svh-86px)] overflow-y-auto bg-plum lg:hidden"
          >
            <nav aria-label="Mobile" className="vv-container flex flex-col gap-1 py-8">
              {[{ label: "Home", href: "/" }, ...leftNav, ...rightNav].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-full px-4 py-3 text-lg font-medium ${
                      pathname === link.href ? "bg-warmwhite/10 text-gold" : "text-warmwhite"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-6"
              >
                <Link
                  href="/contact"
                  onClick={() => {
                    setOpen(false);
                    events.ctaClick("Request a Proposal", "mobile-menu");
                  }}
                  className="block rounded-full border border-warmwhite bg-warmwhite px-5 py-3.5 text-center text-[15px] font-medium text-plum transition-colors hover:border-gold hover:bg-gold"
                >
                  Request a Proposal
                </Link>
                <p className="mt-5 text-center text-sm text-gold">{site.taglines.secondary}</p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
