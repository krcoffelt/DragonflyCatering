import { PageHero } from "./PageHero";
import { SectionHeading } from "./SectionHeading";
import { CheckList } from "./CheckList";
import { EditorialSplit } from "./EditorialSplit";
import { Faq, type FaqItem } from "./Faq";
import { FinalCta } from "./FinalCta";
import { CtaButton } from "./CtaButton";
import { Reveal } from "./Reveal";
import { JsonLd } from "./JsonLd";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export type ServicePageProps = {
  path: string;
  eyebrow: string;
  title: string;
  lead: string;
  heroImage?: { src: string; alt: string };
  coverage: {
    eyebrow: string;
    title: string;
    lead?: string;
    items: string[];
  };
  detail: {
    image?: { src: string; alt: string };
    placeholderLabel?: string;
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  faqs?: FaqItem[];
  finalCta?: { title: string; copy: string };
  serviceName: string;
  serviceDescription: string;
  children?: React.ReactNode;
};

/** Shared layout for the six core service pages. */
export function ServicePage({
  path,
  eyebrow,
  title,
  lead,
  heroImage,
  coverage,
  detail,
  faqs,
  finalCta,
  serviceName,
  serviceDescription,
  children,
}: ServicePageProps) {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: serviceName, description: serviceDescription, path }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: serviceName, path },
          ]),
          ...(faqs ? [faqSchema(faqs)] : []),
        ]}
      />

      <PageHero
        eyebrow={eyebrow}
        title={title}
        lead={lead}
        image={heroImage}
        secondaryCta={{ label: "View Sample Menus", href: "/sample-menus" }}
      />

      <section className="bg-ivory py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <SectionHeading
              eyebrow={coverage.eyebrow}
              title={coverage.title}
              lead={coverage.lead}
            />
            <div className="lg:pt-12">
              <CheckList items={coverage.items} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-warmwhite py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <EditorialSplit
            image={detail.image}
            placeholderLabel={detail.placeholderLabel}
          >
            <Reveal>
              <p className="eyebrow mb-3">{detail.eyebrow}</p>
              <h2 className="font-display text-3xl leading-[1.12] text-plum sm:text-4xl">
                {detail.title}
              </h2>
              <div className="mt-6 space-y-4">
                {detail.paragraphs.map((p) => (
                  <p
                    key={p.slice(0, 40)}
                    className="text-[15px] leading-relaxed text-charcoal/75 sm:text-base"
                  >
                    {p}
                  </p>
                ))}
              </div>
              <div className="mt-8">
                <CtaButton href="/contact" location="service-detail">
                  {site.primaryCta}
                </CtaButton>
              </div>
            </Reveal>
          </EditorialSplit>
        </div>
      </section>

      {children}

      {faqs && faqs.length > 0 && (
        <section className="bg-ivory py-20 lg:py-24">
          <div className="mx-auto max-w-[860px] px-5 sm:px-8">
            <SectionHeading
              eyebrow="Good to know"
              title="Common questions"
              align="center"
            />
            <div className="mt-12">
              <Faq items={faqs} />
            </div>
          </div>
        </section>
      )}

      <FinalCta title={finalCta?.title} copy={finalCta?.copy} />
    </>
  );
}
