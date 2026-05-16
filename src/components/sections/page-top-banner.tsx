"use client";

import { FadeUpBlur } from "@/components/motion/fade-up-blur";

export function PageTopBanner() {
  return (
    <section className="site-shell section-pad" aria-label="Tagline">
      <FadeUpBlur>
        <p className="text-kicker font-medium text-[var(--e-text-secondary)]">
          We improve your business
        </p>
      </FadeUpBlur>
    </section>
  );
}
