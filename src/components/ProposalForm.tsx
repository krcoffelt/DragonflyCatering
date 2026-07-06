"use client";

import { useState } from "react";
import { events } from "@/lib/analytics";

/**
 * Custom proposal request form.
 * INTEGRATION NEEDED: the submit handler currently opens a pre-filled email
 * draft to dragonflycatering727@gmail.com. Swap in a form backend
 * (Supabase, Formspree, or an API route) before launch for reliable delivery.
 */

const eventTypes = [
  "Wedding",
  "Rehearsal Dinner",
  "Bridal / Baby Shower",
  "Engagement Party",
  "Corporate Event",
  "Private Chef Dinner",
  "Birthday / Anniversary",
  "Celebration of Life",
  "Fundraiser / Nonprofit Event",
  "Holiday Party",
  "Community Gathering",
  "Other",
];

const services = [
  "Custom Catering",
  "Private Chef Experience",
  "Event Bartending",
  "Dragonfly Event Space",
  "Multiple Services",
];

const serviceStyles = [
  "Plated Dinner",
  "Buffet",
  "Family-Style",
  "Stations / Tapas",
  "Passed Hors d'oeuvres",
  "Drop-Off / A La Carte",
  "Not Sure Yet",
];

const referralSources = [
  "Google Search",
  "Instagram / Facebook",
  "Friend or Family",
  "Past Event Guest",
  "Venue Referral",
  "Other",
];

function Field({
  label,
  htmlFor,
  required,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-[13px] font-semibold text-plum"
      >
        {label}
        {required && (
          <span aria-hidden className="ml-0.5 text-gold">
            *
          </span>
        )}
        {optional && (
          <span className="ml-1.5 font-normal text-charcoal/50">(optional)</span>
        )}
      </label>
      {children}
    </div>
  );
}

export function ProposalForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    events.formSubmit("proposal_request");

    const lines = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Event Type: ${data.get("eventType")}`,
      `Event Address: ${data.get("eventAddress")}`,
      `Event Date: ${data.get("eventDate")}`,
      `Guest Count: ${data.get("guestCount")}`,
      `Preferred Budget: ${data.get("budget") || "Not provided"}`,
      `Venue: ${data.get("venue") || "Not provided"}`,
      `Services Interested In: ${data.get("service")}`,
      `Service Style Preference: ${data.get("serviceStyle")}`,
      `How They Heard About Us: ${data.get("referral")}`,
      "",
      "Additional Notes:",
      String(data.get("notes") || "None"),
    ];

    const subject = encodeURIComponent(
      `Custom Proposal Request — ${data.get("name")} (${data.get("eventType")})`
    );
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:dragonflycatering727@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-sage/40 bg-warmwhite p-10 text-center">
        <p className="font-display text-2xl text-plum">Thank you!</p>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-charcoal/75">
          Your email draft should have opened — just press send. Chef Matt
          personally reviews every inquiry and will follow up to talk through
          your event, answer questions, and shape a custom proposal.
        </p>
        <p className="mt-4 text-sm text-charcoal/60">
          Didn&rsquo;t see an email window? Write to us directly at{" "}
          <a
            href="mailto:dragonflycatering727@gmail.com"
            className="font-semibold text-royal underline"
          >
            dragonflycatering727@gmail.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" required>
          <input id="name" name="name" type="text" required autoComplete="name" className="field" />
        </Field>
        <Field label="Phone" htmlFor="phone" required>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className="field" />
        </Field>
      </div>

      <Field label="Email" htmlFor="email" required>
        <input id="email" name="email" type="email" required autoComplete="email" className="field" />
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Event Type" htmlFor="eventType" required>
          <select id="eventType" name="eventType" required className="field" defaultValue="">
            <option value="" disabled>
              Select an event type
            </option>
            {eventTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Event Date" htmlFor="eventDate" required>
          <input id="eventDate" name="eventDate" type="date" required className="field" />
        </Field>
      </div>

      <Field label="Event Address / Location" htmlFor="eventAddress" required>
        <input
          id="eventAddress"
          name="eventAddress"
          type="text"
          required
          placeholder="Town, venue, or full address"
          className="field"
        />
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Guest Count" htmlFor="guestCount" required>
          <input
            id="guestCount"
            name="guestCount"
            type="number"
            min={1}
            required
            placeholder="Approximate is fine"
            className="field"
          />
        </Field>
        <Field label="Preferred Budget" htmlFor="budget" optional>
          <input
            id="budget"
            name="budget"
            type="text"
            placeholder="A range is helpful"
            className="field"
          />
        </Field>
      </div>

      <Field label="Venue" htmlFor="venue" optional>
        <input
          id="venue"
          name="venue"
          type="text"
          placeholder="Booked or considering a venue? Tell us which."
          className="field"
        />
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Which services interest you?" htmlFor="service" required>
          <select id="service" name="service" required className="field" defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Service style preference" htmlFor="serviceStyle" required>
          <select id="serviceStyle" name="serviceStyle" required className="field" defaultValue="">
            <option value="" disabled>
              Select a style
            </option>
            {serviceStyles.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Additional notes" htmlFor="notes" optional>
        <textarea
          id="notes"
          name="notes"
          rows={5}
          placeholder="Tell us about the occasion, favorite foods, dietary needs, or the feeling you want the event to create."
          className="field resize-y"
        />
      </Field>

      <Field label="How did you hear about us?" htmlFor="referral" optional>
        <select id="referral" name="referral" className="field" defaultValue="">
          <option value="">Select one</option>
          {referralSources.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </Field>

      <button
        type="submit"
        className="w-full rounded-full bg-royal px-8 py-4 text-sm font-semibold tracking-wide text-warmwhite shadow-sm transition-all duration-200 hover:bg-plum hover:shadow-md sm:w-auto"
      >
        Request My Custom Proposal
      </button>
      <p className="text-xs leading-relaxed text-charcoal/55">
        Submitting opens a pre-filled email to Dragonfly Catering — nothing is
        stored on this site. We typically respond within one to two business
        days.
      </p>
    </form>
  );
}
