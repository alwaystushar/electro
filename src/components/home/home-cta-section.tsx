"use client";

import { FadeUpBlurGroup, FadeUpBlurItem } from "@/components/motion/fade-up-blur";
import { Button } from "@/components/ui/button";

const CTA_IMAGE =
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&q=80";

export function HomeCtaSection() {
  return (
    <section className="site-shell pb-[var(--space-hero-y)]" aria-labelledby="cta-heading">
      <div className="relative min-h-[22vw] overflow-hidden border-x-[0.07vw] border-b-[0.07vw] border-[var(--e-border-soft)]">
        <img
          src={CTA_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(0,33,73,0.45) 46%, rgba(0,33,73,0.72) 100%)",
          }}
        />
        <FadeUpBlurGroup
          stagger={0.1}
          className="relative flex min-h-[22vw] max-w-[40vw] flex-col justify-center gap-[var(--space-lg)] p-[var(--space-card-pad)] max-[900px]:max-w-none"
        >
          <FadeUpBlurItem>
            <h2
              id="cta-heading"
              className="text-statement font-medium text-[var(--e-white)]"
            >
              Power Your Next Project
            </h2>
          </FadeUpBlurItem>
          <FadeUpBlurItem>
            <p className="text-body text-[rgba(255,255,255,0.82)]">
              Partner with Electrotech for dependable electrical and
              infrastructure solutions built for long-term performance.
            </p>
          </FadeUpBlurItem>
          <FadeUpBlurItem>
            <Button href="#contact" trailingIcon variant="primary">
              Let&apos;s collaborate
            </Button>
          </FadeUpBlurItem>
        </FadeUpBlurGroup>
      </div>
    </section>
  );
}
