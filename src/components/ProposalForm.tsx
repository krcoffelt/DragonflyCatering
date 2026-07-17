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

const cateringStyles = [
  "Plated Meal",
  "Buffet",
  "Stations",
  "Passed Appetizers",
  "Drop-Off Catering",
  "Boxed Meals",
  "Not Sure Yet",
];

const referralSources = [
  "Google Search",
  "Instagram or Facebook",
  "Friend or Family",
  "Past Event Guest",
  "Venue or Planner Referral",
  "Community Organization",
  "Other",
];

type RequiredField =
  | "firstName"
  | "lastName"
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

  if (!getValue(data, "firstName")) errors.firstName = "Enter your first name.";
  if (!getValue(data, "lastName")) errors.lastName = "Enter your last name.";

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
  optional,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
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
      {error && (
        <p id={`${htmlFor}-error`} className="mt-1.5 text-xs font-medium text-red-800">
          {error}
        </p>
      )}
    </div>
  );
}

function FormSection({
  number,
  title,
  description,
  children,
}: {
  number: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="space-y-6 border-t border-mist pt-7 first:border-t-0 first:pt-0">
      <legend className="w-full">
        <span className="flex items-baseline gap-3">
          <span className="text-[11px] font-semibold tracking-[0.18em] text-gold">
            {number}
          </span>
          <span className="font-display text-xl text-plum sm:text-2xl">{title}</span>
        </span>
        <span className="mt-1.5 block text-sm leading-relaxed text-charcoal/60">
          {description}
        </span>
      </legend>
      {children}
    </fieldset>
  );
}

export function ProposalForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorKind, setErrorKind] = useState<ErrorKind>("validation");
  const [errors, setErrors] = useState<FieldErrors>({});
  const feedbackRef = useRef<HTMLDivElement>(null);
  const submittingRef = useRef(false);

  useEffect(() => {
    if (status === "error" || status === "success") {
      feedbackRef.current?.focus();
    }
  }, [status, errorKind, errors]);

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
        className="border-y border-sage/50 py-10 text-center outline-none sm:py-14"
      >
        <p className="eyebrow mb-3">Inquiry received</p>
        <h2 className="font-display text-3xl text-plum">Your event is in good hands.</h2>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-charcoal/70">
          Thank you for sharing the details. Chef Matt personally reviews each
          inquiry, and Dragonfly Catering will follow up to learn more about
          your event and shape a custom proposal.
        </p>
        <p className="mt-5 text-sm text-charcoal/60">
          Need to add something? Email{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-royal underline">
            {site.email}
          </a>
          .
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
      noValidate
      aria-busy={status === "submitting"}
      className="space-y-9"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <input type="hidden" name="subject" value="New Dragonfly Catering Inquiry" />

      <div className="hidden" aria-hidden="true">
        <label htmlFor="bot-field">
          Do not fill this out
          <input id="bot-field" name="bot-field" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <p className="text-sm leading-relaxed text-charcoal/65">
          A few thoughtful details help Chef Matt prepare a proposal that fits
          your gathering. Fields marked <span className="font-semibold text-gold">*</span> are required.
        </p>
      </div>

      {status === "error" && (
        <div
          ref={feedbackRef}
          role="alert"
          aria-live="assertive"
          tabIndex={-1}
          className="border-l-2 border-gold bg-ivory px-5 py-4 outline-none"
        >
          <p className="font-semibold text-plum">
            {errorKind === "validation"
              ? "Please review the highlighted fields."
              : "We couldn’t send your inquiry."}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-charcoal/70">
            {errorKind === "validation" ? (
              "Your information is still here. Correct the fields below and try again."
            ) : (
              <>
                Your information is still here. Please try again, or email{" "}
                <a href={`mailto:${site.email}`} className="font-semibold text-royal underline">
                  {site.email}
                </a>
                .
              </>
            )}
          </p>
        </div>
      )}

      <FormSection
        number="01"
        title="Contact information"
        description="Where we can reach you to continue the conversation."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="First name" htmlFor="firstName" required error={errors.firstName}>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              autoComplete="given-name"
              aria-invalid={Boolean(errors.firstName)}
              aria-describedby={errors.firstName ? "firstName-error" : undefined}
              className="field"
            />
          </Field>
          <Field label="Last name" htmlFor="lastName" required error={errors.lastName}>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              autoComplete="family-name"
              aria-invalid={Boolean(errors.lastName)}
              aria-describedby={errors.lastName ? "lastName-error" : undefined}
              className="field"
            />
          </Field>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Email address" htmlFor="email" required error={errors.email}>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              inputMode="email"
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

      <FormSection
        number="02"
        title="Event details"
        description="The essentials we need to understand the scale and setting."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Event type" htmlFor="eventType" required error={errors.eventType}>
            <select
              id="eventType"
              name="eventType"
              required
              defaultValue=""
              aria-invalid={Boolean(errors.eventType)}
              aria-describedby={errors.eventType ? "eventType-error" : undefined}
              className="field"
            >
              <option value="" disabled>Select an event type</option>
              {eventTypes.map((eventType) => (
                <option key={eventType} value={eventType}>{eventType}</option>
              ))}
            </select>
          </Field>
          <Field label="Event date" htmlFor="eventDate" required error={errors.eventDate}>
            <input
              id="eventDate"
              name="eventDate"
              type="date"
              required
              aria-invalid={Boolean(errors.eventDate)}
              aria-describedby={errors.eventDate ? "eventDate-error" : undefined}
              className="field"
            />
          </Field>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
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
          <Field label="City" htmlFor="city" optional>
            <input
              id="city"
              name="city"
              type="text"
              autoComplete="address-level2"
              placeholder="Event city"
              className="field"
            />
          </Field>
        </div>

        <Field label="Event venue or location" htmlFor="venueLocation" optional>
          <input
            id="venueLocation"
            name="venueLocation"
            type="text"
            placeholder="Booked venue, private home, or location you’re considering"
            className="field"
          />
        </Field>
      </FormSection>

      <FormSection
        number="03"
        title="Catering preferences"
        description="Share what you know now. It’s perfectly fine to be undecided."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Services of interest" htmlFor="service" optional>
            <select id="service" name="service" className="field" defaultValue="">
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </Field>
          <Field label="Desired catering style" htmlFor="cateringStyle" optional>
            <select id="cateringStyle" name="cateringStyle" className="field" defaultValue="">
              <option value="">Select a style</option>
              {cateringStyles.map((style) => (
                <option key={style} value={style}>{style}</option>
              ))}
            </select>
          </Field>
        </div>

        <Field label="Estimated budget" htmlFor="estimatedBudget" optional>
          <input
            id="estimatedBudget"
            name="estimatedBudget"
            type="text"
            inputMode="decimal"
            placeholder="A total or comfortable range is helpful"
            className="field"
          />
        </Field>

        <Field label="Dietary restrictions or allergies" htmlFor="dietaryRestrictions" optional>
          <textarea
            id="dietaryRestrictions"
            name="dietaryRestrictions"
            rows={3}
            placeholder="List known allergies, dietary needs, or preferences"
            className="field resize-y"
          />
        </Field>

        <Field label="How did you hear about us?" htmlFor="referralSource" optional>
          <select id="referralSource" name="referralSource" className="field" defaultValue="">
            <option value="">Select one</option>
            {referralSources.map((source) => (
              <option key={source} value={source}>{source}</option>
            ))}
          </select>
        </Field>

        <Field label="Additional event details" htmlFor="eventDetails" optional>
          <textarea
            id="eventDetails"
            name="eventDetails"
            rows={5}
            placeholder="Tell us about the occasion, the atmosphere you want to create, and anything else Chef Matt should know."
            className="field resize-y"
          />
        </Field>
      </FormSection>

      <div>
        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            value="yes"
            required
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-1 h-5 w-5 shrink-0 accent-royal"
          />
          <label htmlFor="consent" className="text-sm leading-relaxed text-charcoal/70">
            I agree that Dragonfly Catering may contact me about this inquiry.
            <span aria-hidden className="ml-0.5 font-semibold text-gold">*</span>
          </label>
        </div>
        {errors.consent && (
          <p id="consent-error" className="ml-8 mt-1.5 text-xs font-medium text-red-800">
            {errors.consent}
          </p>
        )}
        <p className="ml-8 mt-2 text-xs leading-relaxed text-charcoal/55">
          Learn how we handle inquiry information in our{" "}
          <Link href="/privacy" className="font-semibold text-royal underline underline-offset-4">
            Privacy Policy
          </Link>
          .
        </p>
      </div>

      <div className="border-t border-mist pt-7">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="min-h-12 w-full rounded-full bg-royal px-8 py-4 text-sm font-semibold tracking-wide text-warmwhite shadow-sm transition-all duration-200 hover:bg-plum hover:shadow-md disabled:cursor-wait disabled:opacity-70 sm:w-auto sm:min-w-64"
        >
          {status === "submitting" ? "Sending Inquiry…" : site.primaryCta}
        </button>
        <p className="mt-4 max-w-xl text-xs leading-relaxed text-charcoal/55">
          Your details are used only to respond to this event inquiry. This
          form is protected by a hidden spam-prevention field.
        </p>
      </div>
    </form>
  );
}
