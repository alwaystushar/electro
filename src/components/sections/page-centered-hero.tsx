"use client";

import { FadeUpBlurGroup, FadeUpBlurItem } from "@/components/motion/fade-up-blur";

type PageCenteredHeroProps = {
  title: string;
  description: string;
  id?: string;
  tagline?: string;
  backgroundColor?: string;
};

export function PageCenteredHero({
  title,
  description,
  id,
  tagline = "We improve your business",
  backgroundColor = "#EBEDFF",
}: PageCenteredHeroProps) {
  return (
    <section
      className="site-shell"
      aria-labelledby={id ?? "page-centered-hero-heading"}
    >
      <div
        className="border-x-[0.07vw] border-b-[0.07vw] border-[var(--e-border-soft)] px-[var(--space-card-pad)] py-[6vw] text-center max-[900px]:py-[12vw]"
        style={{ backgroundColor }}
      >
        <FadeUpBlurGroup
          animateOnMount
          stagger={0.1}
          className="mx-auto flex max-w-[44vw] flex-col items-center gap-[var(--space-xl)] max-[900px]:max-w-none max-[900px]:gap-[var(--space-2xl)]"
        >
          <FadeUpBlurItem>
            <p className="cluster-sm justify-center text-kicker font-medium text-[var(--e-bg-dark-blue)]">
              <span className="text-[1.5vw] leading-none text-(var(--e-text-light-blue)) max-[900px]:text-[3.5vw]">
                +
              </span>
              <span>{tagline}</span>
            </p>
          </FadeUpBlurItem>

          <FadeUpBlurItem>
            <h1
              id={id ?? "page-centered-hero-heading"}
              className="text-display font-medium leading-[0.95] tracking-[-0.2vw] text-[var(--e-text-primary)]"
            >
              {title}
            </h1>
          </FadeUpBlurItem>

          <FadeUpBlurItem>
            <p className="text-body leading-[1.65] text-[var(--e-text-secondary)]">
              {description}
            </p>
          </FadeUpBlurItem>
        </FadeUpBlurGroup>
      </div>
    </section>
  );
}
