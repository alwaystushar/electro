"use client";

import { FadeUpBlur } from "@/components/motion/fade-up-blur";

const PARTNERS = [
  "Apex Grid",
  "Northline",
  "Meridian",
  "VoltWorks",
  "CoreBuild",
  "Summit Energy",
] as const;

export function HomePartnersSection() {
  const track = [...PARTNERS, ...PARTNERS];

  return (
    <section className="site-shell pb-[var(--space-hero-y)]" aria-label="Partners">
      <FadeUpBlur className="overflow-hidden border-x-[0.07vw] border-b-[0.07vw] border-[var(--e-border-soft)] bg-[var(--e-bg-light)] py-[2.2vw]">
        <div className="partners-marquee flex w-max items-center gap-[5vw]">
          {track.map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="text-[1.1vw] font-medium tracking-[0.12em] text-[var(--e-text-secondary)] uppercase max-[900px]:text-[2.4vw]"
            >
              {name}
            </span>
          ))}
        </div>
      </FadeUpBlur>
    </section>
  );
}
