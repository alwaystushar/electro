"use client";

import { useRef } from "react";
import { FadeUpBlurGroup, FadeUpBlurItem } from "@/components/motion/fade-up-blur";
import { StatCounterGroup, type StatCounterConfig } from "@/components/ui/stat-counter";

const STATS: StatCounterConfig[] = [
  { value: "500", suffix: "+", label: "Satisfied Clients" },
  {
    value: "10000",
    suffix: "+",
    label: "Hours Saved",
    commaBeforeDigitIndex: 2,
  },
  { value: "99", suffix: "%", label: "Satisfaction Rate" },
];

export function AboutSpecializeSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="about-specialize"
      className="site-shell border-y-[0.07vw] border-y-[var(--e-border-soft)]"
      aria-labelledby="about-specialize-heading"
    >
      <div className="border-x-[0.07vw] border-[var(--e-border-soft)] bg-[#F3F1F8] px-[var(--space-card-pad)] py-[6vw] text-center max-[900px]:py-[10vw]">
        <FadeUpBlurGroup className="mx-auto flex max-w-[52vw] flex-col items-center max-[900px]:max-w-none">
          <FadeUpBlurItem>
            <h2
              id="about-specialize-heading"
              className="text-statement font-medium leading-[1.1] tracking-[-0.08vw] text-[var(--e-text-primary)]"
            >
              We specialize in delivering advanced electrical &amp; infrastructure
              solutions.
            </h2>
          </FadeUpBlurItem>
          <FadeUpBlurItem>
            <p className="mt-[var(--space-xl)] max-w-[40vw] text-body leading-[1.65] text-[var(--e-text-secondary)] max-[900px]:max-w-none">
              With a team of experienced engineers and technical professionals, we
              manage complex electrical systems, industrial installations, power
              distribution, and infrastructure projects with efficiency and
              precision.
            </p>
          </FadeUpBlurItem>
        </FadeUpBlurGroup>

        <div className="mt-[5vw] max-[900px]:mt-[8vw]">
          <StatCounterGroup
            stats={STATS}
            triggerRef={sectionRef}
            start="top 80%"
            counterClassName="text-[5vw] font-semibold text-[var(--e-primary)] max-[900px]:text-[12vw]"
            labelClassName="text-body font-medium text-[var(--e-text-primary)] max-[900px]:text-[3.2vw]"
          />
        </div>
      </div>
    </section>
  );
}
