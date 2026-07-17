"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { events } from "@/lib/analytics";
import { site } from "@/lib/site";

const FORM_NAME = "catering-inquiry";

const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Private Party",
  "Rehearsal Dinner or Shower",
  "Private Chef Dinner",
  "Fundraiser or Nonprofit Event",
  "Holiday Event",
  "Celebration of Life",
  "Other",
];

const services = [
  "Custom Catering",
  "Private Chef Experience",
  "Event Bartending",
  "Dragonfly Event Space",
  "Multiple Services",
  "Not Sure Yet",
];

type RequiredField =
  | "fullName"
  | "email"
  | "phone"
  | "eventType"
  | "eventDate"
  | "guestCount"
  | "consent";

type FieldErrors = Partial<Record<RequiredField, string>>;
type FormStatus = "idle" | "submitting" | "error" | "success";
type ErrorKind = "validation" | "submission";

function getTodayInputValue() {
  const now = new Date();
  const localTime = new Date(now.getTime() - now.getTimezoneOffset() * 60_000);
  return localTime.toISOString().slice(0, 10);
}

function getValue(data: FormData, name: string) {
  return String(data.get(name) ?? "").trim();
}

function validateInquiry(data: FormData): FieldErrors {
  const errors: FieldErrors = {};
  const email = getValue(data, "email");
  const phoneDigits = getValue(data, "phone").replace(/\D/g, "");
  const eventDate = getValue(data, "eventDate");
  const guestCount = Number(getValue(data, "guestCount"));

  if (!getValue(data, "fullName")) errors.fullName = "Enter your name.";

  if (!email) {
    errors.email = "Enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!phoneDigits) {
    errors.phone = "Enter your phone number.";
  } else if (phoneDigits.length < 7 || phoneDigits.length > 15) {
    errors.phone = "Enter a valid phone number, including the area code.";
  }

  if (!getValue(data, "eventType")) errors.eventType = "Select an event type.";

  if (!eventDate) {
    errors.eventDate = "Select an event date.";
  } else if (eventDate < getTodayInputValue()) {
    errors.eventDate = "Choose today or a future date.";
  }

  if (!Number.isInteger(guestCount) || guestCount < 1) {
    errors.guestCount = "Enter an estimated guest count of at least 1.";
  }

  if (data.get("consent") !== "yes") {
    errors.consent = "Confirm that Dragonfly Catering may contact you.";
  }

  return errors;
}

function Field({
  label,
  htmlFor,
  required,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-2">
        <label htmlFor={htmlFor} className="text-sm font-semibold text-plum">
          {label}
          {required && (
            <span aria-hidden className="ml-1 text-royal">
              *
            </span>
          )}
        </label>
      </div>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-red-800">
          <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-red-700" />
          {error}
        </p>
      )}
    </div>
  );
}

function SelectShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <svg
        aria-hidden
        viewBox="0 0 20 20"
        fill="none"
        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-plum/55"
      >
        <path d="m6 8 4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function FormSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="border-t border-plum/10 pt-7 sm:pt-8">
      <div className="mb-5 sm:mb-6">
        <h3 id={id} className="font-display text-2xl leading-tight text-plum sm:text-[28px]">
          {title}
        </h3>
      </div>
      <div className="space-y-5 sm:space-y-6">{children}</div>
    </section>
  );
}

export function ProposalForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorKind, setErrorKind] = useState<ErrorKind>("validation");
  const [errors, setErrors] = useState<FieldErrors>({});
  const feedbackRef = useRef<HTMLDivElement>(null);
  const submittingRef = useRef(false);

  useEffect(() => {
    if (status === "success" || (status === "error" && errorKind === "submission")) {
      feedbackRef.current?.focus();
    }
  }, [status, errorKind]);

  function handleInput(event: React.FormEvent<HTMLFormElement>) {
    const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    const name = target.name as RequiredField;

    if (!name || !errors[name]) return;

    setErrors((current) => {
      const next = { ...current };
      delete next[name];
      return next;
    });

    if (status === "error" && errorKind === "validation") {
      setStatus("idle");
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting" || submittingRef.current) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors = validateInquiry(data);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setErrorKind("validation");
      setStatus("error");

      const firstInvalidField = Object.keys(nextErrors)[0] as RequiredField;
      window.requestAnimationFrame(() => {
        (form.elements.namedItem(firstInvalidField) as HTMLElement | null)?.focus();
      });
      return;
    }

    setErrors({});
    submittingRef.current = true;
    setStatus("submitting");

    const body = new URLSearchParams();
    data.forEach((value, key) => body.append(key, String(value)));

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      });

      if (!response.ok) {
        throw new Error("Netlify Forms returned an unsuccessful response.");
      }

      events.formSubmit(FORM_NAME);
      form.reset();
      submittingRef.current = false;
      setStatus("success");
    } catch {
      submittingRef.current = false;
      setErrorKind("submission");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        ref={feedbackRef}
        role="status"
        aria-live="polite"
        tabIndex={-1}
        className="flex min-h-[480px] flex-col items-center justify-center px-4 py-12 text-center outline-none"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sage/15 text-sage">
          <svg aria-hidden viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            <path d="m5 12.5 4.25 4.25L19 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h2 className="mt-6 font-display text-4xl leading-tight text-plum">Inquiry received.</h2>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-7 text-charcoal/65">
          Chef Matt will review your details and follow up about your event.
        </p>
      </div>
    );
  }

  return (
    <form
      name={FORM_NAME}
      method="POST"
      action="/__forms.html"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      onInput={handleInput}
      noValidate
      aria-busy={status === "submitting"}
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <input type="hidden" name="subject" value="New Dragonfly Catering Inquiry" />

      <div className="hidden" aria-hidden="true">
        <label htmlFor="bot-field">
          Do not fill this out
          <input id="bot-field" name="bot-field" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="pb-7 sm:pb-8">
        <h2 className="font-display text-3xl leading-tight text-plum sm:text-[36px]">Event details</h2>
      </div>

      {status === "error" && (
        <div
          ref={feedbackRef}
          role="alert"
          aria-live="assertive"
          tabIndex={-1}
          className="mb-8 flex gap-3 rounded-xl border border-red-900/15 bg-red-50 px-4 py-4 outline-none"
        >
          <svg aria-hidden viewBox="0 0 24 24" fill="none" className="mt-0.5 h-5 w-5 shrink-0 text-red-800">
            <path d="M12 8v5m0 3.5v.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
          <p className="text-sm font-semibold text-red-950">
            {errorKind === "validation" ? (
              "Complete the highlighted fields."
            ) : (
              <>
                We couldn’t send this. Try again or email{" "}
                <a href={`mailto:${site.email}`} className="underline">{site.email}</a>.
              </>
            )}
          </p>
        </div>
      )}

      <FormSection id="contact-information" title="Contact">
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6">
          <div className="sm:col-span-2">
            <Field label="Name" htmlFor="fullName" required error={errors.fullName}>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                autoComplete="name"
                placeholder="Your name"
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
                className="field"
              />
            </Field>
          </div>
          <Field label="Email address" htmlFor="email" required error={errors.email}>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              inputMode="email"
              placeholder="you@example.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="field"
            />
          </Field>
          <Field label="Phone number" htmlFor="phone" required error={errors.phone}>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              placeholder="(484) 555-0123"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className="field"
            />
          </Field>
        </div>
      </FormSection>

      <FormSection id="event-details" title="Event">
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          <Field label="Event type" htmlFor="eventType" required error={errors.eventType}>
            <SelectShell>
              <select
                id="eventType"
                name="eventType"
                required
                defaultValue=""
                aria-invalid={Boolean(errors.eventType)}
                aria-describedby={errors.eventType ? "eventType-error" : undefined}
                className="field appearance-none pr-11"
              >
                <option value="" disabled>Select an event type</option>
                {eventTypes.map((eventType) => (
                  <option key={eventType} value={eventType}>{eventType}</option>
                ))}
              </select>
            </SelectShell>
          </Field>
          <Field label="Event date" htmlFor="eventDate" required error={errors.eventDate}>
            <input
              id="eventDate"
              name="eventDate"
              type="date"
              min={getTodayInputValue()}
              required
              aria-invalid={Boolean(errors.eventDate)}
              aria-describedby={errors.eventDate ? "eventDate-error" : undefined}
              className="field"
            />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          <Field label="Estimated guest count" htmlFor="guestCount" required error={errors.guestCount}>
            <input
              id="guestCount"
              name="guestCount"
              type="number"
              min={1}
              step={1}
              required
              inputMode="numeric"
              placeholder="Approximate is fine"
              aria-invalid={Boolean(errors.guestCount)}
              aria-describedby={errors.guestCount ? "guestCount-error" : undefined}
              className="field"
            />
          </Field>
          <Field label="Venue or location" htmlFor="venueLocation">
            <input
              id="venueLocation"
              name="venueLocation"
              type="text"
              autoComplete="street-address"
              placeholder="Where will the event be?"
              className="field"
            />
          </Field>
        </div>
      </FormSection>

      <FormSection id="event-preferences" title="Preferences">
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          <Field label="Service" htmlFor="service">
            <SelectShell>
              <select id="service" name="service" defaultValue="" className="field appearance-none pr-11">
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </SelectShell>
          </Field>
          <Field label="Preferred budget" htmlFor="estimatedBudget">
            <input
              id="estimatedBudget"
              name="estimatedBudget"
              type="text"
              inputMode="decimal"
              placeholder="Optional range"
              className="field"
            />
          </Field>
        </div>

        <Field label="Additional details" htmlFor="eventDetails">
          <textarea
            id="eventDetails"
            name="eventDetails"
            rows={5}
            placeholder="Menu ideas, dietary needs, or anything else"
            className="field min-h-28 resize-y"
          />
        </Field>
      </FormSection>

      <div className="mt-8 border-t border-plum/10 pt-6">
        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            value="yes"
            required
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : "consent-privacy"}
            className="mt-0.5 h-5 w-5 shrink-0 rounded border-plum/25 accent-royal"
          />
          <div>
            <label htmlFor="consent" className="text-sm font-medium leading-relaxed text-charcoal/70">
              Dragonfly Catering may contact me about this inquiry.
              <span aria-hidden className="ml-1 font-semibold text-royal">*</span>
            </label>
            <p id="consent-privacy" className="mt-1 text-xs text-charcoal/50">
              <Link href="/privacy" className="font-semibold text-royal underline underline-offset-4">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
        {errors.consent && (
          <p id="consent-error" className="ml-8 mt-2 text-xs font-semibold text-red-800">
            {errors.consent}
          </p>
        )}
      </div>

      <div className="mt-5">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group flex min-h-[54px] w-full items-center justify-center gap-3 rounded-xl bg-royal px-8 py-4 text-sm font-semibold text-warmwhite shadow-[0_8px_24px_rgba(91,42,134,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-plum hover:shadow-[0_12px_30px_rgba(44,22,53,0.24)] disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {status === "submitting" ? (
            <>
              <span aria-hidden className="h-4 w-4 animate-spin rounded-full border-2 border-warmwhite/35 border-t-warmwhite" />
              Sending inquiry…
            </>
          ) : (
            <>
              {site.primaryCta}
              <svg aria-hidden viewBox="0 0 20 20" fill="none" className="h-4 w-4 transition-transform group-hover:translate-x-0.5">
                <path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
