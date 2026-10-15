"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { events } from "@/lib/analytics";
import { site } from "@/lib/site";
import {
  allMenuItems,
  desserts,
  formatPrice,
  gravy,
  isThanksgivingOrderingOpen,
  sides,
  thanksgiving,
  type MenuItem,
} from "@/lib/thanksgiving";

const FORM_NAME = "thanksgiving-order";
const MAX_QTY = 20;

type Fulfillment = "pickup" | "delivery";
type FormStatus = "idle" | "submitting" | "error" | "success";
type ErrorKind = "validation" | "submission";
type FieldName = "items" | "fullName" | "email" | "phone" | "address" | "city" | "zip";
type FieldErrors = Partial<Record<FieldName, string>>;

type LineItem = {
  key: string;
  name: string;
  option: string;
  qty: number;
  unit: number;
  total: number;
  vegan: boolean;
};

const lineKey = (itemId: string, optionId: string) => `${itemId}:${optionId}`;

function getValue(data: FormData, name: string) {
  return String(data.get(name) ?? "").trim();
}

function buildLineItems(quantities: Record<string, number>, vegan: Record<string, boolean>) {
  const lines: LineItem[] = [];
  for (const item of allMenuItems) {
    for (const option of item.options) {
      const qty = quantities[lineKey(item.id, option.id)] ?? 0;
      if (qty < 1) continue;
      lines.push({
        key: lineKey(item.id, option.id),
        name: item.name,
        option: item.options.length > 1 ? `${option.label} (${option.detail})` : option.detail,
        qty,
        unit: option.price,
        total: qty * option.price,
        vegan: Boolean(item.veganAvailable && vegan[item.id]),
      });
    }
  }
  return lines;
}

function summaryText(lines: LineItem[], total: number) {
  return [
    ...lines.map(
      (line) =>
        `${line.qty} × ${line.name}${line.vegan ? " [VEGAN]" : ""} — ${line.option} @ ${formatPrice(line.unit)} = ${formatPrice(line.total)}`,
    ),
    "",
    `Estimated total: ${formatPrice(total)}`,
  ].join("\n");
}

function validate(data: FormData, fulfillment: Fulfillment, itemCount: number): FieldErrors {
  const errors: FieldErrors = {};
  const email = getValue(data, "email");
  const phoneDigits = getValue(data, "phone").replace(/\D/g, "");

  if (itemCount < 1) errors.items = "Add at least one item to your order.";
  if (!getValue(data, "fullName")) errors.fullName = "Enter your name.";

  if (!email) errors.email = "Enter your email so we can confirm your order.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email address.";

  if (!phoneDigits) errors.phone = "Enter your phone number.";
  else if (phoneDigits.length < 10 || phoneDigits.length > 15)
    errors.phone = "Enter a valid phone number, including the area code.";

  if (fulfillment === "delivery") {
    if (!getValue(data, "address")) errors.address = "Enter the delivery address.";
    if (!getValue(data, "city")) errors.city = "Enter the town.";
    if (!/^\d{5}$/.test(getValue(data, "zip"))) errors.zip = "Enter a 5-digit ZIP.";
  }

  return errors;
}

/* ---------- Presentational pieces ---------- */

function Stepper({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (delta: number) => void;
}) {
  const active = value > 0;
  return (
    <div
      className={`inline-flex h-10 items-center rounded-full border transition-colors ${
        active ? "border-royal/30 bg-royal/[0.06]" : "border-plum/12 bg-white"
      }`}
    >
      <button
        type="button"
        onClick={() => onChange(-1)}
        disabled={!active}
        aria-label={`Remove one ${label}`}
        className="flex h-10 w-10 items-center justify-center rounded-full text-plum transition hover:bg-plum/[0.06] disabled:cursor-not-allowed disabled:opacity-30"
      >
        <svg aria-hidden viewBox="0 0 20 20" className="h-4 w-4" fill="none">
          <path d="M5 10h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
      <span
        aria-live="polite"
        aria-label={`${value} ${label}`}
        className={`w-6 text-center text-sm font-semibold tabular-nums ${active ? "text-royal" : "text-charcoal/45"}`}
      >
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(1)}
        disabled={value >= MAX_QTY}
        aria-label={`Add one ${label}`}
        className="flex h-10 w-10 items-center justify-center rounded-full text-plum transition hover:bg-plum/[0.06] disabled:opacity-30"
      >
        <svg aria-hidden viewBox="0 0 20 20" className="h-4 w-4" fill="none">
          <path d="M10 5v10M5 10h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}

function MenuRow({
  item,
  quantities,
  vegan,
  setQty,
  toggleVegan,
}: {
  item: MenuItem;
  quantities: Record<string, number>;
  vegan: Record<string, boolean>;
  setQty: (key: string, delta: number) => void;
  toggleVegan: (itemId: string) => void;
}) {
  const itemQty = item.options.reduce((sum, o) => sum + (quantities[lineKey(item.id, o.id)] ?? 0), 0);
  const selected = itemQty > 0;

  return (
    <li
      className={`rounded-2xl border p-5 transition-all duration-300 sm:p-6 ${
        selected
          ? "border-royal/25 bg-white shadow-[0_14px_40px_rgba(44,22,53,0.08)]"
          : "border-plum/[0.08] bg-white/70 hover:border-plum/15 hover:bg-white"
      }`}
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between md:gap-8 lg:flex-col lg:gap-5 xl:flex-row xl:gap-8">
        <div className="min-w-0 md:pt-1.5 lg:pt-0 xl:pt-1.5">
          <h4 className="font-display text-[21px] leading-snug text-plum">{item.name}</h4>
          {item.description && (
            <p className="mt-1.5 text-[14px] leading-6 text-charcoal/60">{item.description}</p>
          )}
        </div>

        <div className="grid shrink-0 grid-cols-2 gap-x-4 gap-y-4 sm:flex sm:flex-wrap sm:gap-x-5 sm:gap-y-3 md:justify-end lg:justify-start xl:justify-end">
          {item.options.map((option) => {
            const key = lineKey(item.id, option.id);
            return (
              <div key={key} className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3">
                <div className="leading-tight sm:text-right">
                  <p className="text-[13px] font-semibold text-plum">
                    {option.label} · {formatPrice(option.price)}
                  </p>
                  <p className="text-[11px] text-charcoal/50">{option.detail}</p>
                </div>
                <Stepper
                  label={`${option.label} ${item.name}`}
                  value={quantities[key] ?? 0}
                  onChange={(delta) => setQty(key, delta)}
                />
              </div>
            );
          })}
        </div>
      </div>

      {item.veganAvailable && selected && (
        <label className="mt-4 inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-sage/35 bg-sage/[0.08] py-1.5 pl-2 pr-3.5 text-[13px] font-medium text-[#4d5a3a] transition hover:bg-sage/15">
          <input
            type="checkbox"
            checked={Boolean(vegan[item.id])}
            onChange={() => toggleVegan(item.id)}
            className="h-4 w-4 rounded accent-[#65704f]"
          />
          Make it vegan
        </label>
      )}
    </li>
  );
}

function MenuSection({
  id,
  eyebrow,
  title,
  note,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  note?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="scroll-mt-28">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow mb-2">{eyebrow}</p>
          <h3 id={id} className="font-display text-[32px] leading-tight text-plum sm:text-[38px]">
            {title}
          </h3>
        </div>
        {note}
      </div>
      <ul className="space-y-3">{children}</ul>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  required,
  error,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-plum">
        {label}
        {required && (
          <span aria-hidden className="ml-1 text-royal">
            *
          </span>
        )}
      </label>
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

function FulfillmentCard({
  value,
  current,
  title,
  detail,
  onSelect,
  icon,
}: {
  value: Fulfillment;
  current: Fulfillment;
  title: string;
  detail: string;
  onSelect: (value: Fulfillment) => void;
  icon: React.ReactNode;
}) {
  const checked = value === current;
  return (
    <label
      className={`relative flex cursor-pointer gap-4 rounded-2xl border p-5 transition-all duration-200 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-royal ${
        checked
          ? "border-royal bg-royal/[0.05] shadow-[0_10px_30px_rgba(91,42,134,0.1)]"
          : "border-plum/12 bg-white hover:border-plum/25"
      }`}
    >
      <input
        type="radio"
        name="fulfillment"
        value={value === "pickup" ? "Pickup" : "Delivery"}
        checked={checked}
        onChange={() => onSelect(value)}
        className="sr-only"
      />
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors ${
          checked ? "bg-royal text-warmwhite" : "bg-ivory text-plum"
        }`}
      >
        {icon}
      </span>
      <span>
        <span className="block font-display text-xl text-plum">{title}</span>
        <span className="mt-1 block text-[13px] leading-5 text-charcoal/60">{detail}</span>
      </span>
      <span
        aria-hidden
        className={`absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full border-2 transition ${
          checked ? "border-royal bg-royal" : "border-plum/20"
        }`}
      >
        {checked && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
      </span>
    </label>
  );
}

/* ---------- Main form ---------- */

export function ThanksgivingOrderForm() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [vegan, setVegan] = useState<Record<string, boolean>>({});
  const [fulfillment, setFulfillment] = useState<Fulfillment>("pickup");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorKind, setErrorKind] = useState<ErrorKind>("validation");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [closed, setClosed] = useState(false);
  const [summaryVisible, setSummaryVisible] = useState(false);
  const [submitted, setSubmitted] = useState<{ lines: LineItem[]; total: number; fulfillment: Fulfillment; name: string } | null>(null);

  const feedbackRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const submittingRef = useRef(false);

  const lines = useMemo(() => buildLineItems(quantities, vegan), [quantities, vegan]);
  const total = lines.reduce((sum, line) => sum + line.total, 0);
  const itemCount = lines.reduce((sum, line) => sum + line.qty, 0);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setClosed(!isThanksgivingOrderingOpen()));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const node = summaryRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setSummaryVisible(entry.isIntersecting), {
      threshold: 0.15,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [status]);

  useEffect(() => {
    if (status === "success" || (status === "error" && errorKind === "submission")) {
      feedbackRef.current?.focus();
    }
  }, [status, errorKind]);

  function clearError(name: FieldName) {
    if (!errors[name]) return;
    setErrors((current) => {
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  function setQty(key: string, delta: number) {
    setQuantities((current) => ({
      ...current,
      [key]: Math.min(MAX_QTY, Math.max(0, (current[key] ?? 0) + delta)),
    }));
    if (delta > 0) clearError("items");
  }

  function toggleVegan(itemId: string) {
    setVegan((current) => ({ ...current, [itemId]: !current[itemId] }));
  }

  function handleInput(event: React.FormEvent<HTMLFormElement>) {
    const name = (event.target as HTMLInputElement).name as FieldName;
    if (name) clearError(name);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting" || submittingRef.current) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors = validate(data, fulfillment, itemCount);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setErrorKind("validation");
      setStatus("error");
      const first = Object.keys(nextErrors)[0] as FieldName;
      window.requestAnimationFrame(() => {
        if (first === "items") {
          document.getElementById("thanksgiving-menu")?.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          (form.elements.namedItem(first) as HTMLElement | null)?.focus();
        }
      });
      return;
    }

    setErrors({});
    submittingRef.current = true;
    setStatus("submitting");

    const veganItems = lines.filter((line) => line.vegan).map((line) => line.name);
    const body = new URLSearchParams();
    data.forEach((value, key) => body.set(key, String(value)));
    body.set("fulfillment", fulfillment === "pickup" ? "Pickup" : "Delivery");
    body.set("orderSummary", summaryText(lines, total));
    body.set("orderTotal", formatPrice(total));
    body.set("itemCount", String(itemCount));
    body.set("veganRequests", veganItems.length ? [...new Set(veganItems)].join(", ") : "None");
    body.set(
      "subject",
      `Thanksgiving order — ${getValue(data, "fullName")} — ${formatPrice(total)} (${fulfillment === "pickup" ? "Pickup" : "Delivery"})`,
    );
    if (fulfillment === "pickup") {
      body.set("address", "");
      body.set("city", "");
      body.set("zip", "");
    }

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!response.ok) throw new Error("Netlify Forms returned an unsuccessful response.");

      events.formSubmit(FORM_NAME);
      setSubmitted({ lines, total, fulfillment, name: getValue(data, "fullName").split(" ")[0] });
      submittingRef.current = false;
      setStatus("success");
      window.scrollTo({ top: document.getElementById("order")?.offsetTop ?? 0, behavior: "smooth" });
    } catch {
      submittingRef.current = false;
      setErrorKind("submission");
      setStatus("error");
    }
  }

  if (closed) {
    return (
      <div className="mx-auto max-w-2xl rounded-[28px] border border-plum/10 bg-warmwhite p-10 text-center shadow-[0_24px_70px_rgba(44,22,53,0.09)] sm:p-14">
        <p className="eyebrow">Ordering closed</p>
        <h2 className="mt-4 font-display text-4xl leading-tight text-plum">
          Thanksgiving pre-orders have closed for {thanksgiving.year}.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[15px] leading-7 text-charcoal/65">
          Thank you to everyone who let us cook for their table. For holiday parties and gatherings, we’d love to
          hear from you.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-12 items-center rounded-xl bg-royal px-7 text-sm font-semibold text-warmwhite transition hover:bg-plum"
        >
          {site.primaryCta}
        </Link>
      </div>
    );
  }

  if (status === "success" && submitted) {
    return (
      <div
        ref={feedbackRef}
        role="status"
        aria-live="polite"
        tabIndex={-1}
        className="mx-auto max-w-2xl rounded-[28px] border border-plum/10 bg-warmwhite p-8 shadow-[0_24px_70px_rgba(44,22,53,0.09)] outline-none sm:p-12"
      >
        <div className="text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sage/15 text-[#4d5a3a]">
            <svg aria-hidden viewBox="0 0 24 24" fill="none" className="h-6 w-6">
              <path d="m5 12.5 4.25 4.25L19 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <h2 className="mt-6 font-display text-4xl leading-tight text-plum">
            Thank you{submitted.name ? `, ${submitted.name}` : ""}. Your order is in.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-7 text-charcoal/65">
            We’ll email you to confirm your order and final total. Your food will be ready for{" "}
            {submitted.fulfillment === "pickup"
              ? `pickup ${thanksgiving.serviceDayLabel}, ${thanksgiving.pickupWindow}`
              : `delivery ${thanksgiving.serviceDayLabel}, ${thanksgiving.deliveryWindow}`}
            .
          </p>
        </div>
        <ul className="mt-9 divide-y divide-plum/[0.08] border-y border-plum/[0.08]">
          {submitted.lines.map((line) => (
            <li key={line.key} className="flex justify-between gap-4 py-3 text-[14px]">
              <span className="text-charcoal/80">
                <span className="font-semibold text-plum">{line.qty}×</span> {line.name}
                {line.vegan && <span className="ml-1.5 text-[#4d5a3a]">· Vegan</span>}
                <span className="block text-xs text-charcoal/50">{line.option}</span>
              </span>
              <span className="font-semibold tabular-nums text-plum">{formatPrice(line.total)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-baseline justify-between">
          <span className="text-sm font-semibold text-plum">Estimated total</span>
          <span className="font-display text-3xl text-plum">{formatPrice(submitted.total)}</span>
        </div>
        <p className="mt-6 text-center text-xs text-charcoal/50">
          Questions? Email{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-royal underline underline-offset-4">
            {site.email}
          </a>
        </p>
      </div>
    );
  }

  const fieldProps = (name: FieldName) => ({
    id: name,
    name,
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
    className: "field",
  });

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
      className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_400px] xl:gap-16"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <div className="hidden" aria-hidden="true">
        <label htmlFor="tg-bot-field">
          Do not fill this out
          <input id="tg-bot-field" name="bot-field" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {/* ---------- Left: menu + details ---------- */}
      <div className="min-w-0 space-y-16">
        <div id="thanksgiving-menu" className="scroll-mt-28 space-y-16">
          {errors.items && (
            <div role="alert" className="flex gap-3 rounded-xl border border-red-900/15 bg-red-50 px-4 py-4">
              <span aria-hidden className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-red-700" />
              <p className="text-sm font-semibold text-red-950">{errors.items}</p>
            </div>
          )}

          <MenuSection
            id="sides-heading"
            eyebrow="Chef-made sides"
            title="The sides"
            note={
              <p className="max-w-[260px] text-[13px] leading-5 text-charcoal/55 sm:text-right">
                Every side can be made <span className="font-semibold text-[#4d5a3a]">vegan</span> — just toggle it
                after adding.
              </p>
            }
          >
            {sides.map((item) => (
              <MenuRow key={item.id} item={item} quantities={quantities} vegan={vegan} setQty={setQty} toggleVegan={toggleVegan} />
            ))}
          </MenuSection>

          <MenuSection id="gravy-heading" eyebrow="Don’t skip it" title="Gravy">
            <MenuRow item={gravy} quantities={quantities} vegan={vegan} setQty={setQty} toggleVegan={toggleVegan} />
          </MenuSection>

          <MenuSection id="desserts-heading" eyebrow="Don’t forget about dessert" title="Desserts">
            {desserts.map((item) => (
              <MenuRow key={item.id} item={item} quantities={quantities} vegan={vegan} setQty={setQty} toggleVegan={toggleVegan} />
            ))}
          </MenuSection>
        </div>

        {/* ---------- Details ---------- */}
        <section
          id="order-details"
          aria-labelledby="details-heading"
          className="scroll-mt-28 rounded-[28px] border border-plum/10 bg-warmwhite p-5 shadow-[0_24px_70px_rgba(44,22,53,0.07)] sm:p-8 lg:p-10"
        >
          <p className="eyebrow mb-2">Almost done</p>
          <h3 id="details-heading" className="font-display text-[32px] leading-tight text-plum sm:text-[38px]">
            Pickup or delivery
          </h3>

          <fieldset className="mt-6">
            <legend className="sr-only">Choose pickup or delivery</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              <FulfillmentCard
                value="pickup"
                current={fulfillment}
                onSelect={setFulfillment}
                title="Pickup"
                detail={`${thanksgiving.serviceDayShort} · ${thanksgiving.pickupWindow}`}
                icon={
                  <svg aria-hidden viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                    <path d="M5 9h14l-1 11H6L5 9Zm3 0V7a4 4 0 1 1 8 0v2" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                  </svg>
                }
              />
              <FulfillmentCard
                value="delivery"
                current={fulfillment}
                onSelect={setFulfillment}
                title="Delivery"
                detail={`${thanksgiving.serviceDayShort} · ${thanksgiving.deliveryWindow}`}
                icon={
                  <svg aria-hidden viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                    <path d="M3 6h11v10H3V6Zm11 4h4l3 3v3h-7v-6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                    <circle cx="7" cy="17.5" r="1.8" fill="currentColor" />
                    <circle cx="17.5" cy="17.5" r="1.8" fill="currentColor" />
                  </svg>
                }
              />
            </div>
          </fieldset>

          <div className="mt-9 border-t border-plum/10 pt-8">
            <h4 className="font-display text-2xl text-plum">Your details</h4>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6">
              <Field label="Full name" htmlFor="fullName" required error={errors.fullName} className="sm:col-span-2">
                <input {...fieldProps("fullName")} type="text" autoComplete="name" placeholder="Your name" />
              </Field>
              <Field label="Phone" htmlFor="phone" required error={errors.phone}>
                <input {...fieldProps("phone")} type="tel" autoComplete="tel" inputMode="tel" placeholder="(484) 555-0123" />
              </Field>
              <Field label="Email" htmlFor="email" required error={errors.email}>
                <input {...fieldProps("email")} type="email" autoComplete="email" inputMode="email" placeholder="you@example.com" />
              </Field>
            </div>
          </div>

          <div
            className={`grid transition-all duration-500 ease-out ${
              fulfillment === "delivery" ? "mt-9 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
            aria-hidden={fulfillment !== "delivery"}
            inert={fulfillment !== "delivery"}
          >
            <div className="overflow-hidden">
              <div className="border-t border-plum/10 pt-8">
                <h4 className="font-display text-2xl text-plum">Delivery address</h4>
                <div className="mt-5 grid gap-5 sm:grid-cols-6 sm:gap-x-6 sm:gap-y-6">
                  <Field label="Street address" htmlFor="address" required error={errors.address} className="sm:col-span-6">
                    <input {...fieldProps("address")} type="text" autoComplete="street-address" placeholder="Street and apt / unit" />
                  </Field>
                  <Field label="Town" htmlFor="city" required error={errors.city} className="sm:col-span-4">
                    <input {...fieldProps("city")} type="text" autoComplete="address-level2" placeholder="Downingtown" />
                  </Field>
                  <Field label="ZIP" htmlFor="zip" required error={errors.zip} className="sm:col-span-2">
                    <input {...fieldProps("zip")} type="text" autoComplete="postal-code" inputMode="numeric" maxLength={5} placeholder="19335" />
                  </Field>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-9 border-t border-plum/10 pt-8">
            <Field label="Notes for the kitchen" htmlFor="notes">
              <textarea
                id="notes"
                name="notes"
                rows={3}
                placeholder="Allergies, gate codes, anything we should know"
                className="field min-h-24 resize-y"
              />
            </Field>
          </div>
        </section>
      </div>

      {/* ---------- Right: sticky summary ---------- */}
      <aside className="lg:sticky lg:top-28">
        <div
          ref={summaryRef}
          id="order-summary"
          className="scroll-mt-28 overflow-hidden rounded-[28px] bg-plum text-warmwhite shadow-[0_30px_80px_rgba(44,22,53,0.28)]"
        >
          <div className="border-b border-warmwhite/10 px-6 pb-5 pt-7 sm:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold">Your order</p>
            <p className="mt-1.5 font-display text-2xl">
              {itemCount === 0 ? "Nothing added yet" : `${itemCount} item${itemCount === 1 ? "" : "s"}`}
            </p>
          </div>

          <div className="max-h-[38vh] overflow-y-auto px-6 sm:px-8 lg:max-h-[calc(100vh-30rem)]">
            {lines.length === 0 ? (
              <p className="py-6 text-[14px] leading-6 text-warmwhite/55">
                Use the + buttons to add sides, gravy and dessert. Your total updates as you go.
              </p>
            ) : (
              <ul className="divide-y divide-warmwhite/10">
                {lines.map((line) => (
                  <li key={line.key} className="flex items-start justify-between gap-4 py-3.5 text-[14px]">
                    <span className="min-w-0">
                      <span className="text-warmwhite/90">
                        <span className="font-semibold text-gold">{line.qty}×</span> {line.name}
                      </span>
                      <span className="mt-0.5 block text-xs text-warmwhite/50">
                        {line.option}
                        {line.vegan && <span className="ml-1.5 font-semibold text-[#c5d3aa]">· Vegan</span>}
                      </span>
                    </span>
                    <span className="shrink-0 font-semibold tabular-nums">{formatPrice(line.total)}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="border-t border-warmwhite/10 px-6 pb-7 pt-5 sm:px-8">
            <dl className="space-y-2 text-[13px] text-warmwhite/65">
              <div className="flex justify-between">
                <dt>{fulfillment === "pickup" ? "Pickup" : "Delivery"}</dt>
                <dd>{thanksgiving.serviceDayShort}</dd>
              </div>
              {fulfillment === "delivery" && (
                <div className="flex justify-between">
                  <dt>Delivery fee</dt>
                  <dd>Confirmed by email</dd>
                </div>
              )}
            </dl>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="text-sm font-semibold">Estimated total</span>
              <span className="font-display text-[40px] leading-none tabular-nums text-gold">{formatPrice(total)}</span>
            </div>

            {status === "error" && (
              <div
                ref={feedbackRef}
                role="alert"
                tabIndex={-1}
                className="mt-5 rounded-xl bg-warmwhite/[0.08] px-4 py-3 text-[13px] font-medium leading-5 text-warmwhite outline-none"
              >
                {errorKind === "validation" ? (
                  "Please complete the highlighted fields."
                ) : (
                  <>
                    We couldn’t send your order. Try again or email{" "}
                    <a href={`mailto:${site.email}`} className="underline">
                      {site.email}
                    </a>
                    .
                  </>
                )}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="group mt-6 flex min-h-[56px] w-full items-center justify-center gap-3 rounded-xl bg-gold px-8 py-4 text-sm font-semibold text-plum shadow-[0_10px_30px_rgba(199,164,93,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d4b46f] disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {status === "submitting" ? (
                <>
                  <span aria-hidden className="h-4 w-4 animate-spin rounded-full border-2 border-plum/30 border-t-plum" />
                  Placing order…
                </>
              ) : (
                <>
                  Place order{total > 0 ? ` · ${formatPrice(total)}` : ""}
                  <svg aria-hidden viewBox="0 0 20 20" fill="none" className="h-4 w-4 transition-transform group-hover:translate-x-0.5">
                    <path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              )}
            </button>
            <p className="mt-4 text-center text-[12px] leading-5 text-warmwhite/50">
              No payment now — we’ll email to confirm your order and total. Orders close {thanksgiving.cutoffLabel}.
            </p>
          </div>
        </div>
      </aside>

      {/* ---------- Mobile sticky total ---------- */}
      <div
        className={`fixed inset-x-3 bottom-3 z-40 transition-all duration-300 lg:hidden ${
          itemCount > 0 && !summaryVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
        aria-hidden={itemCount === 0 || summaryVisible}
      >
        <button
          type="button"
          tabIndex={itemCount > 0 && !summaryVisible ? 0 : -1}
          onClick={() =>
            document.getElementById("order-details")?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          className="flex w-full items-center justify-between gap-4 rounded-2xl bg-plum px-5 py-3.5 text-warmwhite shadow-[0_16px_40px_rgba(31,26,28,0.35)]"
        >
          <span className="text-left">
            <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-gold">
              {itemCount} item{itemCount === 1 ? "" : "s"}
            </span>
            <span className="font-display text-2xl tabular-nums">{formatPrice(total)}</span>
          </span>
          <span className="flex items-center gap-2 rounded-xl bg-gold px-4 py-2.5 text-sm font-semibold text-plum">
            Checkout
            <svg aria-hidden viewBox="0 0 20 20" fill="none" className="h-4 w-4">
              <path d="M4 10h11m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      </div>
    </form>
  );
}
