"use client";

import { FadeUpBlur, FadeUpBlurGroup, FadeUpBlurItem } from "@/components/motion/fade-up-blur";
import { ContactForm } from "@/components/sections/contact-form";
import { SectionKicker } from "@/components/ui/section-kicker";
import { SectionPanel } from "@/components/ui/section-panel";

type ContactFormSectionProps = {
  kicker?: string;
  title: string;
  description: string;
  showContactInfo?: boolean;
  layout?: "stacked" | "split";
};

const CONTACT_DETAILS = [
  { label: "Address", value: "14 Tottenham Road, London, England" },
  { label: "Phone", value: "+1 212 425 8617" },
  { label: "Email", value: "information@office.com" },
] as const;

export function ContactFormSection({
  kicker = "Contact us",
  title,
  description,
  showContactInfo = false,
  layout = "split",
}: ContactFormSectionProps) {
  return (
    <section
      className="site-shell pb-[var(--space-hero-y)]"
      aria-labelledby="contact-form-heading"
    >
      <SectionPanel>
        <div className="grid grid-cols-12">
          <FadeUpBlurGroup
            className={[
              "px-[var(--space-card-pad)] py-[4vw]",
              "col-span-5 border-r-[0.07vw] border-r-[var(--e-border-soft)] max-[900px]:col-span-12 max-[900px]:border-r-0 max-[900px]:border-b-[0.07vw]",
            ].join(" ")}
          >
            <FadeUpBlurItem className="stack-lg max-w-[32vw] max-[900px]:max-w-none">
              <SectionKicker>{kicker}</SectionKicker>
              <h2
                id="contact-form-heading"
                className="text-statement font-medium text-[var(--e-text-primary)]"
              >
                {title}
              </h2>
              <p className="text-body text-[var(--e-text-secondary)]">{description}</p>
            </FadeUpBlurItem>
          </FadeUpBlurGroup>

          <FadeUpBlur
            className={[
              "px-[var(--space-card-pad)] py-[4vw]",
              "col-span-7 max-[900px]:col-span-12",
            ].join(" ")}
          >
            <ContactForm layout={layout} />
          </FadeUpBlur>

          {showContactInfo ? (
            <FadeUpBlurGroup
              stagger={0.08}
              className="col-span-12 grid grid-cols-12 border-t-[0.07vw] border-t-[var(--e-border-soft)]"
            >
              {CONTACT_DETAILS.map((item) => (
                <FadeUpBlurItem
                  key={item.label}
                  className="col-span-4 border-r-[0.07vw] border-r-[var(--e-border-soft)] px-[var(--space-card-pad)] py-[2vw] last:border-r-0 max-[900px]:col-span-12 max-[900px]:border-r-0 max-[900px]:border-b-[0.07vw] last:max-[900px]:border-b-0"
                >
                  <p className="text-kicker text-[var(--e-text-secondary)]">{item.label}</p>
                  <p className="mt-[var(--space-sm)] text-body text-[var(--e-text-primary)]">
                    {item.value}
                  </p>
                </FadeUpBlurItem>
              ))}
            </FadeUpBlurGroup>
          ) : null}
        </div>
      </SectionPanel>
    </section>
  );
}
