"use client";

import { FadeUpBlurGroup, FadeUpBlurItem } from "@/components/motion/fade-up-blur";
import { SectionKicker } from "@/components/home/section-kicker";

export function HomeTestimonialsSection() {
  return (
    <section
      className="site-shell pb-[var(--space-hero-y)]"
      aria-labelledby="testimonials-heading"
    >
      <div className="border-x-[0.07vw] border-b-[0.07vw] border-[var(--e-border-soft)] bg-[var(--e-bg-light)] px-[var(--space-card-pad)] py-[4.5vw]">
        <FadeUpBlurGroup stagger={0.12}>
          <FadeUpBlurItem>
            <SectionKicker>What our clients say</SectionKicker>
          </FadeUpBlurItem>

          <FadeUpBlurItem>
            <blockquote className="mt-[var(--space-2xl)] max-w-[52vw] stack-md max-[900px]:max-w-none">
              <p
                id="testimonials-heading"
                className="text-[1.85vw] font-medium leading-snug tracking-[-0.03em] text-[var(--e-text-primary)] max-[900px]:text-[4.2vw]"
              >
                &ldquo;Electrotech managed our facility electrical upgrade with
                exceptional professionalism. Their team ensured minimal disruption
                while delivering a system that exceeded our performance
                expectations.&rdquo;
              </p>
              <footer className="stack-sm">
                <cite className="text-body not-italic text-[var(--e-text-secondary)]">
                  Daniel Rogh
                </cite>
                <p className="text-card text-[var(--e-text-secondary)]">
                  Operations Manager
                </p>
              </footer>
            </blockquote>
          </FadeUpBlurItem>
        </FadeUpBlurGroup>
      </div>
    </section>
  );
}
