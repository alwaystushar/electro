"use client";

import { FadeUpBlur } from "@/components/motion/fade-up-blur";

const BANNER_IMAGE =
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1920&q=80";

export function HomeImageSection() {
  return (
    <section className="site-shell pb-[var(--space-hero-y)]" aria-label="Project showcase">
      <FadeUpBlur className="overflow-hidden border-x-[0.07vw] border-x-[var(--e-border-soft)]">
        <img
          src={BANNER_IMAGE}
          alt="Electrical engineers reviewing infrastructure plans on site."
          className="h-[28vw] min-h-[220px] w-full object-cover"
        />
      </FadeUpBlur>
    </section>
  );
}
