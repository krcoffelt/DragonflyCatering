import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { getFullAddress, site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Dragonfly Catering",
  description:
    "Learn how Dragonfly Catering collects, uses, and protects information submitted through its website and catering inquiry form.",
  path: "/privacy",
});

const policySections = [
  { id: "information-we-collect", label: "Information we collect" },
  { id: "how-we-use-information", label: "How we use it" },
  { id: "how-we-share-information", label: "How we share it" },
  { id: "cookies-and-services", label: "Cookies and services" },
  { id: "retention-and-security", label: "Retention and security" },
  { id: "your-choices", label: "Your choices" },
  { id: "children-and-changes", label: "Children and changes" },
  { id: "contact-us", label: "Contact us" },
];

const sectionClass = "scroll-mt-32 border-t border-plum/15 pt-9 first:border-t-0 first:pt-0";
const headingClass = "font-display text-2xl text-plum sm:text-3xl";
const copyClass = "mt-4 space-y-4 text-[15px] leading-7 text-charcoal/72";
const listClass = "ml-5 list-disc space-y-2 marker:text-gold";
const linkClass = "font-semibold text-royal underline decoration-royal/30 underline-offset-4 hover:decoration-royal";

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />

      <section className="bg-ivory pb-16 pt-40 sm:pb-20 lg:pt-48">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow mb-4">Privacy</p>
            <h1 className="max-w-3xl font-display text-4xl leading-[1.08] text-plum sm:text-5xl lg:text-6xl">
              Privacy, clearly stated.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-charcoal/75 sm:text-lg">
              How Dragonfly Catering collects, uses, and protects information
              shared through this website.
            </p>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-charcoal/50">
              Effective July 16, 2026
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-warmwhite py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-14 px-5 sm:px-8 lg:grid-cols-[240px_minmax(0,760px)] lg:gap-24">
          <aside aria-label="Privacy policy sections" className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
              On this page
            </p>
            <nav className="mt-5 border-l border-plum/15 pl-5">
              <ul className="space-y-3">
                {policySections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-sm text-charcoal/65 transition-colors hover:text-royal"
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="min-w-0 space-y-12 sm:space-y-14">
            <Reveal>
              <section className={sectionClass}>
                <h2 className={headingClass}>A straightforward promise</h2>
                <div className={copyClass}>
                  <p>
                    {site.legalName}{" "}(&ldquo;Dragonfly Catering,&rdquo; &ldquo;we,&rdquo;
                    or &ldquo;us&rdquo;) uses personal information to respond to
                    inquiries, plan requested services, and operate this website.
                    We do not sell or rent personal information.
                  </p>
                  <p>
                    This policy applies to information collected through{" "}
                    {site.url} and the website&rsquo;s catering inquiry form.
                    It does not govern the privacy practices of websites we link to.
                  </p>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section id="information-we-collect" className={sectionClass}>
                <h2 className={headingClass}>Information we collect</h2>
                <div className={copyClass}>
                  <p>We collect information that you choose to provide, including:</p>
                  <ul className={listClass}>
                    <li>Your name, email address, and phone number.</li>
                    <li>
                      Event details such as event type, date, location, city,
                      estimated guest count, desired service, catering style,
                      budget, dietary needs, and additional notes.
                    </li>
                    <li>How you heard about Dragonfly Catering.</li>
                    <li>
                      Information included in emails, phone calls, or other direct
                      communications with us.
                    </li>
                  </ul>
                  <p>
                    Our hosting provider may also process limited technical
                    information needed to deliver and secure the website, such as
                    IP address, browser or device information, request data, and
                    security logs.
                  </p>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section id="how-we-use-information" className={sectionClass}>
                <h2 className={headingClass}>How we use information</h2>
                <div className={copyClass}>
                  <p>We may use information collected through the website to:</p>
                  <ul className={listClass}>
                    <li>Respond to your inquiry and communicate about your event.</li>
                    <li>Evaluate availability, event fit, and service requirements.</li>
                    <li>Prepare menus, proposals, estimates, and event plans.</li>
                    <li>Provide requested catering or event services.</li>
                    <li>Maintain business records and comply with legal obligations.</li>
                    <li>Operate, protect, and improve the website.</li>
                  </ul>
                  <p>
                    Agreeing to be contacted through the inquiry form allows us to
                    respond about that inquiry. It does not automatically subscribe
                    you to marketing messages.
                  </p>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section id="how-we-share-information" className={sectionClass}>
                <h2 className={headingClass}>How we share information</h2>
                <div className={copyClass}>
                  <p>
                    We share information only when reasonably necessary to operate
                    the website, respond to you, provide requested services, or
                    comply with the law. This may include:
                  </p>
                  <ul className={listClass}>
                    <li>
                      <strong className="text-plum">Netlify</strong>, which hosts
                      the website and processes catering inquiry submissions. Read
                      the{" "}
                      <a
                        href="https://www.netlify.com/privacy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                      >
                        Netlify Privacy Statement
                      </a>
                      .
                    </li>
                    <li>
                      Email and technology providers that deliver and store business
                      communications.
                    </li>
                    <li>
                      Team members, contractors, venues, or event-service providers
                      when needed to evaluate or provide services you requested.
                    </li>
                    <li>
                      Government authorities or professional advisers when required
                      by law or reasonably necessary to protect legal rights.
                    </li>
                  </ul>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section id="cookies-and-services" className={sectionClass}>
                <h2 className={headingClass}>Cookies and third-party services</h2>
                <div className={copyClass}>
                  <p>
                    Dragonfly Catering does not currently use advertising cookies
                    or sell browsing activity. Google Analytics has not been enabled
                    on this website as of the effective date of this policy.
                  </p>
                  <p>
                    The footer includes an embedded Google Map. Loading or using the
                    map may allow Google to receive technical information and apply
                    its own cookies or similar technologies. Learn more in the{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      Google Privacy Policy
                    </a>
                    .
                  </p>
                  <p>
                    Links to Facebook, Instagram, LinkedIn, venue websites, and
                    other third parties take you away from this website. Their own
                    terms and privacy policies apply after you leave.
                  </p>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section id="retention-and-security" className={sectionClass}>
                <h2 className={headingClass}>Retention and security</h2>
                <div className={copyClass}>
                  <p>
                    We retain inquiry and event information only as long as
                    reasonably necessary to respond, provide requested services,
                    maintain appropriate business records, resolve disputes, and
                    meet legal or accounting obligations.
                  </p>
                  <p>
                    We use reasonable administrative and technical safeguards to
                    protect personal information. No website, email system, or
                    Internet transmission can be guaranteed completely secure.
                  </p>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section id="your-choices" className={sectionClass}>
                <h2 className={headingClass}>Your choices</h2>
                <div className={copyClass}>
                  <p>
                    You may ask us to access, correct, or delete personal information
                    you submitted through this website. Some information may need to
                    be retained when required for legal, accounting, security, or
                    active-service purposes. We may also need to verify your identity
                    before completing a request.
                  </p>
                  <p>
                    To make a request, email{" "}
                    <a href={`mailto:${site.email}`} className={linkClass}>
                      {site.email}
                    </a>
                    .
                  </p>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section id="children-and-changes" className={sectionClass}>
                <h2 className={headingClass}>Children and policy changes</h2>
                <div className={copyClass}>
                  <p>
                    This website is intended for adults planning catering and event
                    services. We do not knowingly collect personal information from
                    children under 13 through this website.
                  </p>
                  <p>
                    We may update this policy as the website, our services, or legal
                    requirements change. The effective date at the top of this page
                    will show when the policy was last revised.
                  </p>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section id="contact-us" className={sectionClass}>
                <h2 className={headingClass}>Contact us</h2>
                <div className={copyClass}>
                  <p>Questions or privacy requests can be directed to:</p>
                  <address className="not-italic">
                    <strong className="text-plum">{site.legalName}</strong>
                    <br />
                    {getFullAddress()}
                    <br />
                    <a href={`mailto:${site.email}`} className={linkClass}>
                      {site.email}
                    </a>
                    <br />
                    {site.phone && site.phoneDisplay && (
                      <a href={`tel:${site.phone}`} className={linkClass}>
                        {site.phoneDisplay}
                      </a>
                    )}
                  </address>
                </div>
              </section>
            </Reveal>
          </article>
        </div>
      </section>
    </>
  );
}
