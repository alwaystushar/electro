"use client";

import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { FadeUpBlur, FadeUpBlurGroup, FadeUpBlurItem } from "@/components/motion/fade-up-blur";
import { ContactForm } from "@/components/sections/contact-form";
import { SectionPanel } from "@/components/ui/section-panel";

const TITLE = "Let's get in touch.";
const DESCRIPTION =
  "Contact us today to discover how our comprehensive office support services can help you focus on growth and drive your success!";

const CONTACT_DETAILS: readonly {
  icon: LucideIcon;
  value: string;
  href?: string;
}[] = [
  {
    icon: MapPin,
    value: "14 Tottenham Road, London, England",
  },
  {
    icon: Phone,
    value: "+1 212 425 8617",
    href: "tel:+12124258617",
  },
  {
    icon: Mail,
    value: "information@office.com",
    href: "mailto:information@office.com",
  },
];

function ContactDetailItem({
  icon: Icon,
  value,
  href,
}: {
  icon: LucideIcon;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span
        className="inline-flex size-[2.2vw] min-h-[36px] min-w-[36px] shrink-0 items-center justify-center text-[var(--e-primary)] max-[900px]:size-[9vw]"
        aria-hidden
      >
        <Icon
          className="size-[1.15vw] min-h-[18px] min-w-[18px] max-[900px]:size-[4.5vw]"
          strokeWidth={1.75}
        />
      </span>
      <span className="text-body leading-snug text-[var(--e-text-primary)]">{value}</span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="flex items-center gap-[0.78vw] transition-colors hover:text-[var(--e-primary)] max-[900px]:gap-[2.5vw]"
      >
        {content}
      </Link>
    );
  }

  return <p className="flex items-center gap-[0.78vw] max-[900px]:gap-[2.5vw]">{content}</p>;
}

export function ContactMainSection() {
  return (
    <section
      className="site-shell pb-[var(--space-hero-y)]"
      aria-labelledby="contact-main-heading"
    >
      <SectionPanel gridLines={false} tone="light">
        <div className="grid grid-cols-12">
          <FadeUpBlurGroup className="col-span-5 flex flex-col justify-between gap-[var(--space-4xl)] border-r-[0.07vw] border-r-[var(--e-border-soft)] px-[var(--space-card-pad)] py-[4vw] max-[900px]:col-span-12 max-[900px]:gap-[var(--space-3xl)] max-[900px]:border-r-0 max-[900px]:border-b-[0.07vw]">
            <FadeUpBlurItem className="flex max-w-[28vw] flex-col gap-[var(--space-lg)] max-[900px]:max-w-none">
              <h2
                id="contact-main-heading"
                className="text-[3.2vw] font-medium leading-[1.12] tracking-[-0.06vw] text-[var(--e-text-primary)] max-[900px]:text-[7vw]"
              >
                {TITLE}
              </h2>
              <p className="text-body leading-[1.65] text-[var(--e-text-secondary)]">
                {DESCRIPTION}
              </p>
            </FadeUpBlurItem>

            <FadeUpBlurItem className="flex flex-col gap-[var(--space-sm)] max-[900px]:gap-[5vw]">
              {CONTACT_DETAILS.map((item) => (
                <ContactDetailItem
                  key={item.value}
                  icon={item.icon}
                  value={item.value}
                  href={item.href}
                />
              ))}
            </FadeUpBlurItem>
          </FadeUpBlurGroup>

          <FadeUpBlur className="col-span-7 px-[var(--space-card-pad)] py-[4vw] max-[900px]:col-span-12">
            <ContactForm layout="split" variant="about" submitLabel="Submit" />
          </FadeUpBlur>
        </div>
      </SectionPanel>
    </section>
  );
}
