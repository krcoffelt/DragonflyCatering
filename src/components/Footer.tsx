"use client";

import Link from "next/link";
import Image from "next/image";
import {
  assets,
  footerNav,
  getFullAddress,
  getMapEmbedUrl,
  getMapSearchUrl,
  site,
} from "@/lib/site";
import { events } from "@/lib/analytics";

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const address = getFullAddress();
  const mapUrl = getMapSearchUrl();

  return (
    <footer className="bg-plum text-warmwhite">
      <div className="vv-container py-20">
        <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
          {/* Explore */}
          <div>
            <p className="text-[14px] font-semibold uppercase tracking-[0.06em] text-gold">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Gallery", href: "/gallery" },
                { label: "About", href: "/about" },
                { label: "Sample Menus", href: "/sample-menus" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-warmwhite/75 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-[14px] font-semibold uppercase tracking-[0.06em] text-gold">
              Services
            </p>
            <ul className="mt-5 space-y-3">
              {footerNav[0].links.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-warmwhite/75 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[14px] font-semibold uppercase tracking-[0.06em] text-gold">
              Contact
            </p>
            <div className="mt-5 space-y-4 text-[15px] text-warmwhite/75">
              {site.phoneDisplay && site.phone ? (
                <a
                  href={`tel:${site.phone}`}
                  onClick={() => events.phoneClick()}
                  className="block transition-colors hover:text-gold"
                >
                  {site.phoneDisplay}
                </a>
              ) : (
                <p>By appointment</p>
              )}
              <p>Consultations & tastings</p>
              <a
                href={`mailto:${site.email}`}
                onClick={() => events.emailClick()}
                className="block transition-colors hover:text-gold"
              >
                {site.email}
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <p className="text-[14px] font-semibold uppercase tracking-[0.06em] text-gold">
              Address
            </p>
            <address className="mt-5 not-italic text-[15px] leading-relaxed text-warmwhite/75">
              {site.fullName}
              <br />
              {address}
            </address>
            <iframe
              title={`${site.fullName} map`}
              src={getMapEmbedUrl()}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mt-5 h-[240px] w-full rounded-[3px] border border-warmwhite/15 bg-warmwhite md:h-[280px] lg:aspect-[4/3] lg:h-auto"
            />
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-full bg-warmwhite px-4 py-2 text-[13px] font-semibold text-plum transition-colors hover:bg-gold"
            >
              Open in Google Maps
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center border-t border-warmwhite/10 pt-12">
          <Image
            src={assets.logoFooter}
            alt="Dragonfly Catering logo"
            width={420}
            height={277}
            className="h-12 w-auto invert"
          />
          <p className="mt-8 text-center text-xs text-warmwhite/45">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          onClick={scrollTop}
          aria-label="Back to top"
          className="mb-0 flex h-12 w-24 items-start justify-center rounded-t-full border-t border-x border-warmwhite/15 bg-warmwhite/5 pt-3 text-warmwhite transition-colors hover:text-gold"
        >
          <span aria-hidden>↑</span>
        </button>
      </div>
    </footer>
  );
}
