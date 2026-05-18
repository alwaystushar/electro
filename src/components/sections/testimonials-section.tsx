"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { useRef, useState } from "react";
import { FadeUpBlur, FadeUpBlurGroup, FadeUpBlurItem } from "@/components/motion/fade-up-blur";
import { SectionKicker } from "@/components/ui/section-kicker";
import { SectionPanel } from "@/components/ui/section-panel";

gsap.registerPlugin(useGSAP);

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Electrotech delivered exceptional electrical infrastructure solutions for our facility. Their professionalism, technical expertise, and commitment to quality made the entire process seamless and highly efficient.",
    name: "Daniel Rogh",
    role: "Operations Manager",
  },
  {
    quote:
      "Their automation team transformed our production line with reliable control systems. Downtime dropped significantly and our operators gained confidence in day-to-day operations.",
    name: "Sarah Mitchell",
    role: "Plant Director",
  },
  {
    quote:
      "From planning to commissioning, Electrotech maintained clear communication and strict safety standards. We now have infrastructure we can scale with confidence.",
    name: "James Okonkwo",
    role: "Facilities Lead",
  },
];

type TestimonialsSectionProps = {
  items?: readonly Testimonial[];
  /** Override panel background (e.g. #EBEDFF on About page) */
  backgroundColor?: string;
};

export function TestimonialsSection({
  items = TESTIMONIALS,
  backgroundColor,
}: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const total = items.length;
  const current = items[activeIndex]!;

  useGSAP(
    () => {
      const quote = quoteRef.current;
      const meta = metaRef.current;
      if (!quote || !meta) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          [quote, meta],
          { autoAlpha: 0, y: 18 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.07,
            ease: "power2.out",
            overwrite: true,
          },
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([quote, meta], { autoAlpha: 1, y: 0 });
      });

      return () => mm.revert();
    },
    { dependencies: [activeIndex], scope: contentRef },
  );

  const goToPrevious = () => {
    setActiveIndex((index) => (index - 1 + total) % total);
  };

  const goToNext = () => {
    setActiveIndex((index) => (index + 1) % total);
  };

  return (
    <section
      className="site-shell border-y-[0.07vw] border-y-[var(--e-border-soft)]"
      aria-labelledby="testimonials-heading"
    >
      <SectionPanel
        tone="light"
        gridLines={false}
        style={backgroundColor ? { backgroundColor } : undefined}
      >
        <div className="px-[6vw] py-[6.5vw] max-[900px]:px-[4vw] max-[900px]:py-[8vw]">
          <FadeUpBlur>
            <SectionKicker>What our clients say</SectionKicker>
          </FadeUpBlur>

          <blockquote className="mt-[var(--space-2xl)] max-w-full max-[900px]:max-w-none">
            <FadeUpBlur>
              <div
                ref={contentRef}
                className="min-h-[14vw] max-[900px]:min-h-[36vw]"
                aria-live="polite"
                aria-atomic="true"
              >
                <p
                  ref={quoteRef}
                  id="testimonials-heading"
                  className="text-[2.8vw] font-medium leading-[1.2] tracking-[-0.03em] text-[var(--e-text-primary)] max-[900px]:text-[4.8vw]"
                >
                  &ldquo;{current.quote}&rdquo;
                </p>
              </div>
            </FadeUpBlur>

            <FadeUpBlurGroup
              stagger={0.08}
              className="mt-[var(--space-3xl)] flex items-end justify-between gap-[var(--space-xl)] max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-[6vw]"
            >
              <FadeUpBlurItem className="order-2 flex shrink-0 items-center gap-[0.52vw]">
                <button
                  type="button"
                  onClick={goToPrevious}
                  className="flex size-[2.9vw] min-h-[44px] min-w-[44px] items-center justify-center rounded-[0.42vw] border-[0.07vw] border-[var(--e-border-soft)] bg-[var(--e-white)] text-[var(--e-primary)] transition-[border-color,background-color] duration-300 hover:border-[var(--e-primary)] hover:bg-[var(--e-bg-light)] max-[900px]:size-[11vw]"
                  aria-label="Previous testimonial"
                >
                  <ChevronsLeft
                    className="size-[1.1vw] min-h-[14px] min-w-[14px] max-[900px]:size-[4vw]"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  className="flex size-[2.9vw] min-h-[44px] min-w-[44px] items-center justify-center rounded-[0.42vw] border-[0.07vw] border-[var(--e-border-soft)] bg-[var(--e-white)] text-[var(--e-primary)] transition-[border-color,background-color] duration-300 hover:border-[var(--e-primary)] hover:bg-[var(--e-bg-light)] max-[900px]:size-[11vw]"
                  aria-label="Next testimonial"
                >
                  <ChevronsRight
                    className="size-[1.1vw] min-h-[14px] min-w-[14px] max-[900px]:size-[4vw]"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </button>
              </FadeUpBlurItem>

              <FadeUpBlurItem className="order-1 flex min-h-[2.8vw] flex-col justify-end gap-[0.26vw] max-[900px]:min-h-[8vw]">
                <div ref={metaRef}>
                  <cite className="text-body font-medium not-italic text-[var(--e-text-primary)] max-[900px]:text-[3.2vw]">
                    {current.name}
                  </cite>
                  <p className="text-card text-[var(--e-text-secondary)] max-[900px]:text-[2.6vw]">
                    {current.role}
                  </p>
                </div>
              </FadeUpBlurItem>
            </FadeUpBlurGroup>
          </blockquote>
        </div>
      </SectionPanel>
    </section>
  );
}
