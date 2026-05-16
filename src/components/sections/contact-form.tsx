"use client";

import { Button } from "@/components/ui/button";

type ContactFormProps = {
  submitLabel?: string;
  layout?: "stacked" | "split";
  variant?: "default" | "about";
  /** Pre-filled service or product name (e.g. from feature card click) */
  service?: string;
};

function FormField({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  multiline = false,
  className = "",
  variant = "default",
  defaultValue,
  readOnly = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder: string;
  multiline?: boolean;
  className?: string;
  variant?: "default" | "about";
  defaultValue?: string;
  readOnly?: boolean;
}) {
  const inputClass =
    variant === "about"
      ? "w-full rounded-[0.42vw] border-[0.07vw] border-[var(--e-border-soft)] bg-[var(--e-bg-light)] px-[1.1vw] py-[0.85vw] text-body text-[var(--e-text-primary)] outline-none transition-[border-color] duration-200 placeholder:text-[rgba(1,6,28,0.35)] focus:border-[var(--e-primary)] max-[900px]:rounded-[1.2vw] max-[900px]:px-[3vw] max-[900px]:py-[2.5vw]"
      : "w-full border border-[var(--e-border-soft)] bg-[var(--e-white)] px-[var(--space-button-x)] py-[0.9vw] text-body text-[var(--e-text-primary)] outline-none focus:border-[var(--e-primary)]";

  const labelClass =
    variant === "about"
      ? "text-kicker font-medium text-[var(--e-text-primary)]"
      : "text-kicker text-[var(--e-text-primary)]";

  return (
    <label className={`flex flex-col gap-[0.52vw] ${className}`}>
      <span className={labelClass}>
        {label}
        {required ? "*" : ""}
      </span>
      {multiline ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          placeholder={placeholder}
          defaultValue={defaultValue}
          readOnly={readOnly}
          className={`${inputClass} min-h-[10vw] resize-y max-[900px]:min-h-[28vw] ${readOnly ? "cursor-default opacity-90" : ""}`}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          defaultValue={defaultValue}
          readOnly={readOnly}
          className={`${inputClass} ${readOnly ? "cursor-default opacity-90" : ""}`}
        />
      )}
    </label>
  );
}

export function ContactForm({
  submitLabel = "Submit",
  layout = "split",
  variant = "default",
  service,
}: ContactFormProps) {
  const rowClass =
    layout === "split"
      ? "grid grid-cols-12 gap-[var(--space-lg)] max-[900px]:grid-cols-1"
      : "flex flex-col gap-[var(--space-lg)]";

  const formGap = variant === "about" ? "gap-[1.56vw] max-[900px]:gap-[4vw]" : "stack-lg";

  return (
    <form className={`flex flex-col ${formGap}`} action="#" method="post">
      {service ? (
        <FormField
          variant={variant}
          label="Service"
          name="service"
          required
          placeholder="Service"
          defaultValue={service}
          readOnly
        />
      ) : null}

      <div className={rowClass}>
        <FormField
          variant={variant}
          className={layout === "split" ? "col-span-6 max-[900px]:col-span-12" : ""}
          label="First name"
          name="firstName"
          required
          placeholder="First name"
        />
        <FormField
          variant={variant}
          className={layout === "split" ? "col-span-6 max-[900px]:col-span-12" : ""}
          label="Last name"
          name="lastName"
          required
          placeholder="Last name"
        />
      </div>

      <div className={rowClass}>
        <FormField
          variant={variant}
          className={layout === "split" ? "col-span-6 max-[900px]:col-span-12" : ""}
          label="Your email"
          name="email"
          type="email"
          required
          placeholder="Email"
        />
        <FormField
          variant={variant}
          className={layout === "split" ? "col-span-6 max-[900px]:col-span-12" : ""}
          label="Your phone number"
          name="phone"
          type="tel"
          placeholder="Phone number"
        />
      </div>

      <FormField
        variant={variant}
        label="Your message"
        name="message"
        required
        placeholder="Message"
        multiline
      />

      <Button
        type="submit"
        variant="primary"
        trailingIcon={variant !== "about"}
        className={variant === "about" ? "mt-[0.26vw] w-fit" : ""}
      >
        {submitLabel}
      </Button>
    </form>
  );
}
