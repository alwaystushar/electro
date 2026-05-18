"use client";

import { FadeUpBlur, FadeUpBlurGroup, FadeUpBlurItem } from "@/components/motion/fade-up-blur";
import { Button } from "@/components/ui/button";
import { SectionKicker } from "@/components/ui/section-kicker";

export function HomeWhatWeDoSection() {
  return (
    <section className="site-shell">
      <div
        className="bg-(--e-bg-light)"
        style={{
          borderLeft: "0.07vw solid var(--e-border-soft)",
          borderRight: "0.07vw solid var(--e-border-soft)",
        }}
      >
        <div className="grid grid-cols-12">
          <FadeUpBlurGroup className="col-span-4 border-r-[0.07vw] border-r-(--e-border-soft) px-[var(--space-card-pad)] py-[3.65vw] pt-[8vw] max-[900px]:col-span-12 max-[900px]:border-r-0 max-[900px]:border-b-[0.07vw] max-[900px]:pt-[8vw] max-[900px]:pb-[6vw]">
            <FadeUpBlurItem className="stack-lg">
              <SectionKicker>What we do</SectionKicker>
              <Button href="#services" variant="primary">
                View services
              </Button>
            </FadeUpBlurItem>
          </FadeUpBlurGroup>

          <FadeUpBlur className="col-span-8 px-[var(--space-card-pad)] py-[3.65vw] pt-[8vw] max-[900px]:col-span-12 max-[900px]:pt-[6vw] max-[900px]:pb-[8vw]">
            <p className="text-[2.2vw] max-w-[55vw] font-medium text-[var(--e-text-primary)] max-[900px]:max-w-none max-[900px]:text-[4.8vw]">
              We provide comprehensive electrical and infrastructure services
              that help businesses operate safely, efficiently, and without
              interruption.{" "}
              <span className="text-[rgba(1,6,28,0.34)]">
                Our experienced team handles everything from power distribution
                and industrial installations to maintenance and system
                optimization.
              </span>
            </p>
          </FadeUpBlur>
        </div>
      </div>
    </section>
  );
}
