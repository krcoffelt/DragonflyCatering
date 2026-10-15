import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { ThanksgivingOrderForm } from "@/components/ThanksgivingOrderForm";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { thanksgiving } from "@/lib/thanksgiving";

export const metadata: Metadata = buildMetadata({
  title: `Thanksgiving Sides & Desserts ${thanksgiving.year} | Dragonfly Catering, Downingtown PA`,
  description:
    "Pre-order chef-made Thanksgiving sides, scratch gravy, bread pudding and cookie platters from Dragonfly Catering. Pickup or delivery in Downingtown and Chester County.",
  path: "/thanksgiving",
});

const keyDates = [
  { label: "Order by", value: thanksgiving.cutoffLabel },
  { label: "Pickup", value: `${thanksgiving.serviceDayLabel} · ${thanksgiving.pickupWindow}` },
  { label: "Delivery", value: `${thanksgiving.serviceDayLabel} · ${thanksgiving.deliveryWindow}` },
];

const goodToKnow = [
  {
    title: "Oven-ready",
    copy: "Everything arrives fully cooked in foil pans made to reheat right in your oven. No dishes.",
  },
  {
    title: "Vegan on request",
    copy: "Every side can be prepared vegan — just toggle it on when you add the dish.",
  },
  {
    title: "Confirmed personally",
    copy: "No payment online. We’ll email to confirm your order, any delivery fee, and your total.",
  },
];

export default function ThanksgivingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Thanksgiving", path: "/thanksgiving" },
        ])}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-plum">
        <Image
          src="/assets/dragonfly/photos/food/dragonfly-food-roasted-root-vegetables-catering-1017-001.webp"
          alt="Herb-roasted root vegetables from Dragonfly Catering"
          fill
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-plum via-plum/80 to-plum/30" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-plum via-transparent to-plum/40" />

        <div className="relative mx-auto w-full max-w-[1280px] px-5 pb-14 pt-36 sm:px-8 sm:pb-16 lg:pb-20 lg:pt-48">
          <Reveal>
            <p className="eyebrow mb-5">Thanksgiving {thanksgiving.year} · Pre-order</p>
            <h1 className="max-w-3xl font-display text-[44px] leading-[1.02] text-warmwhite sm:text-6xl lg:text-[76px]">
              A dish-free <span className="italic text-gold">Thanksgiving.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-warmwhite/80 sm:text-lg">
              Chef-made sides, scratch gravy and dessert, packed oven-ready so you can spend more time with the ones
              you love. {site.taglines.primary}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#order"
                className="group inline-flex min-h-12 items-center gap-2 rounded-xl bg-gold px-7 py-3 text-sm font-semibold text-plum transition hover:-translate-y-0.5 hover:bg-[#d4b46f]"
              >
                Start your order
                <svg aria-hidden viewBox="0 0 20 20" fill="none" className="h-4 w-4 transition-transform group-hover:translate-y-0.5">
                  <path d="M10 4v11m-4-4 4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <p className="text-sm text-warmwhite/65">
                Sides from <span className="font-semibold text-warmwhite">$15</span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-14 grid overflow-hidden rounded-2xl border border-warmwhite/12 bg-plum/50 backdrop-blur-md sm:grid-cols-3">
              {keyDates.map((item, index) => (
                <div
                  key={item.label}
                  className={`px-6 py-5 ${index > 0 ? "border-t border-warmwhite/10 sm:border-l sm:border-t-0" : ""}`}
                >
                  <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold">{item.label}</dt>
                  <dd className="mt-1.5 text-[15px] text-warmwhite">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Good to know */}
      <section className="border-b border-plum/[0.07] bg-warmwhite">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-5 py-12 sm:grid-cols-3 sm:px-8 lg:py-14">
          {goodToKnow.map((item) => (
            <div key={item.title} className="flex gap-4">
              <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-gold" />
              <div>
                <h2 className="font-display text-xl text-plum">{item.title}</h2>
                <p className="mt-1.5 text-[14px] leading-6 text-charcoal/65">{item.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Order builder */}
      <section id="order" className="scroll-mt-20 bg-ivory pb-24 pt-16 lg:pb-32 lg:pt-20">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="mb-12 max-w-2xl lg:mb-14">
            <h2 className="font-display text-[40px] leading-[1.05] text-plum sm:text-5xl">Build your order</h2>
            <p className="mt-4 text-base leading-7 text-charcoal/65">
              Choose your sizes, pick pickup or delivery, and we’ll take it from there. Questions? Email{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-royal underline underline-offset-4">
                {site.email}
              </a>{" "}
              or call{" "}
              <a href={`tel:${site.phone}`} className="font-semibold text-royal underline underline-offset-4">
                {site.phoneDisplay}
              </a>
              .
            </p>
          </div>
          <ThanksgivingOrderForm />
        </div>
      </section>
    </>
  );
}
