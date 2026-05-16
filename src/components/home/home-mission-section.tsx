"use client";

import { BarChart3 } from "lucide-react";
import { MissionSparklines } from "@/components/home/mission-sparklines";
import { FadeUpBlurGroup, FadeUpBlurItem } from "@/components/motion/fade-up-blur";
import { Button } from "@/components/ui/button";
import { SectionKicker } from "@/components/ui/section-kicker";
import { ROUTES } from "@/lib/site-routes";

export function HomeMissionSection() {
  return (
    <section
      className="site-shell border-y-[0.07vw] border-y-[var(--e-border-soft)]"
      aria-labelledby="mission-heading"
    >
      <div className="border-x-[0.07vw] border-[var(--e-border-soft)]">
        <div className="grid grid-cols-12">
          <div className="col-span-8 flex flex-col justify-center px-[var(--space-card-pad)] py-[4.5vw] max-[900px]:col-span-12 max-[900px]:py-[8vw]">
            <FadeUpBlurGroup className="flex max-w-[38vw] flex-col gap-[var(--space-2xl)] max-[900px]:max-w-none">
              <FadeUpBlurItem>
                <SectionKicker>Our mission</SectionKicker>
              </FadeUpBlurItem>
              <FadeUpBlurItem>
                <h2
                  id="mission-heading"
                  className="text-[2.8vw] font-medium leading-[1.14] tracking-[-0.08vw] text-[var(--e-text-primary)]"
                >
                  Our mission is to build dependable electrical solutions that
                  drive industrial growth and operational efficiency.
                </h2>
              </FadeUpBlurItem>
              <FadeUpBlurItem>
                <p className="text-body text-[var(--e-text-secondary)]">
                  We help businesses focus on productivity and innovation while we
                  manage the critical electrical systems that power their
                  operations.
                </p>
              </FadeUpBlurItem>
              <FadeUpBlurItem>
                <Button href={ROUTES.contact} trailingIcon variant="primary">
                  Let&apos;s collaborate
                </Button>
              </FadeUpBlurItem>
            </FadeUpBlurGroup>
          </div>

          <FadeUpBlurGroup
            stagger={0.08}
            className="col-span-4 flex min-h-[28vw] flex-col overflow-hidden bg-[var(--e-text-light-blue)] max-[900px]:col-span-12 max-[900px]:min-h-[70vw]"
          >
            <FadeUpBlurItem className="flex items-start gap-[0.78vw] p-[var(--space-card-pad)] pb-[1vw] max-[900px]:gap-[2vw]">
              <span className="flex size-[2.4vw] min-h-[36px] min-w-[36px] shrink-0 items-center justify-center rounded-[0.42vw] bg-[var(--e-white)]">
                <BarChart3
                  className="size-[1.15vw] min-h-[16px] min-w-[16px] text-[var(--e-text-primary)] max-[900px]:size-[4vw]"
                  strokeWidth={1.75}
                  aria-hidden
                />
              </span>
              <h3 className="text-[1.8vw] leading-snug text-[var(--e-text-primary)] max-[900px]:text-[3.2vw]">
                Empowering Industries Through Innovation &amp; Reliability.
              </h3>
            </FadeUpBlurItem>

            <FadeUpBlurItem>
              <MissionSparklines />
            </FadeUpBlurItem>

            <FadeUpBlurItem>
              <p className="px-[var(--space-card-pad)] pb-[var(--space-card-pad)] text-[0.96vw] leading-[1.6] text-[var(--e-white)] max-[900px]:text-[2.8vw]">
                Our commitment is to deliver safe, future-ready, and
                high-performance electrical infrastructure that supports
                long-term business success.
              </p>
            </FadeUpBlurItem>
          </FadeUpBlurGroup>
        </div>
      </div>
    </section>
  );
}
