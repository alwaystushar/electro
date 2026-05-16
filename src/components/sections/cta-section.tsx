"use client";

import { FadeUpBlurGroup, FadeUpBlurItem } from "@/components/motion/fade-up-blur";
import { Button } from "@/components/ui/button";
import { SiteImage } from "@/components/ui/site-image";
import { ROUTES } from "@/lib/site-routes";

type CtaSectionProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export function CtaSection({
  title = "Power Your Next Project",
  description = "Partner with Electrotech to build reliable, efficient, and future-ready electrical systems tailored to your business needs.",
  buttonLabel = "Let's collaborate",
  buttonHref = ROUTES.contact,
}: CtaSectionProps) {
  return (
    <section className="" aria-labelledby="cta-heading">
      <div className="relative min-h-[40vw] overflow-hidden border-x-[0.07vw] border-[var(--e-border-soft)] max-[900px]:min-h-[55vw]">
        <SiteImage
          src="/img/cta.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] max-[900px]:object-center"
        />
        <FadeUpBlurGroup
          stagger={0.1}
          className="relative flex min-h-[40vw] flex-col items-start justify-end gap-[var(--space-xl)] p-[6vw] max-[900px]:min-h-[55vw]"
        >
          <FadeUpBlurItem className="flex max-w-[42vw] flex-col items-start gap-[var(--space-lg)] max-[900px]:max-w-none">
            <h2
              id="cta-heading"
              className="max-w-[38vw] text-[3.6vw] font-medium leading-[1.06] tracking-[-0.1vw] text-[var(--e-white)] [text-shadow:0_0.12vw_0.5vw_rgba(0,0,0,0.45)] max-[900px]:max-w-none max-[900px]:text-[8vw]"
            >
              {title}
            </h2>
            <p className="max-w-[34vw] text-body leading-[1.65] text-[rgba(255,255,255,0.95)] [text-shadow:0_0.08vw_0.35vw_rgba(0,0,0,0.4)] max-[900px]:max-w-none">
              {description}
            </p>
          </FadeUpBlurItem>
          <FadeUpBlurItem>
            <Button href={buttonHref} trailingIcon variant="primary">
              {buttonLabel}
            </Button>
          </FadeUpBlurItem>
        </FadeUpBlurGroup>
      </div>
    </section>
  );
}
