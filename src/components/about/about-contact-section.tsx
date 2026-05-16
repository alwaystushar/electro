"use client";

import { FadeUpBlur, FadeUpBlurGroup, FadeUpBlurItem } from "@/components/motion/fade-up-blur";
import { ContactForm } from "@/components/sections/contact-form";
import { SectionKicker } from "@/components/ui/section-kicker";
import { SectionPanel } from "@/components/ui/section-panel";

const TITLE = "Let's get in touch.";
const DESCRIPTION =
  "Contact us today to discuss your project requirements and discover how Electrotech can provide reliable, future-ready electrical and infrastructure solutions tailored to your business.";

export function AboutContactSection() {
  return (
    <section
      className="site-shell border-b-[0.07vw] border-b-[var(--e-border-soft)]"
      aria-labelledby="about-contact-heading"
    >
      <SectionPanel gridLines={false} tone="light">
        <div className="grid grid-cols-12">
          <FadeUpBlur
            className="col-span-3  px-[var(--space-card-pad)] py-[4vw] max-[900px]:col-span-12 max-[900px]:py-[6vw]"
          >
            <SectionKicker>Contact us</SectionKicker>
          </FadeUpBlur>

          <FadeUpBlurGroup
            stagger={0.1}
            className="col-span-9 flex flex-col gap-[var(--space-2xl)] px-[var(--space-card-pad)] py-[4vw] max-[900px]:col-span-12 max-[900px]:gap-[var(--space-3xl)] max-[900px]:py-[8vw]"
          >
            <FadeUpBlurItem className="flex max-w-[42vw] flex-col gap-[var(--space-lg)] max-[900px]:max-w-none">
              <h2
                id="about-contact-heading"
                className="text-[3.2vw] font-medium leading-[1.12] tracking-[-0.06vw] text-[var(--e-text-primary)] max-[900px]:text-[7vw]"
              >
                {TITLE}
              </h2>
              <p className="text-body leading-[1.65] text-[var(--e-text-secondary)]">
                {DESCRIPTION}
              </p>
            </FadeUpBlurItem>

            <FadeUpBlurItem>
              <ContactForm layout="split" variant="about" />
            </FadeUpBlurItem>
          </FadeUpBlurGroup>
        </div>
      </SectionPanel>
    </section>
  );
}
