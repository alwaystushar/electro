"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronsLeft, ChevronsRight, LoaderCircle, Play } from "lucide-react";
import { useRef, useState } from "react";
import { FadeUpBlur, FadeUpBlurGroup, FadeUpBlurItem } from "@/components/motion/fade-up-blur";
import { SectionKicker } from "@/components/ui/section-kicker";
import { SectionPanel } from "@/components/ui/section-panel";
import { SiteImage } from "@/components/ui/site-image";
import { SITE_IMAGES } from "@/lib/site-images";

gsap.registerPlugin(useGSAP);

const HISTORY_SLIDES = [
  {
    intro:
      "Electrotech was founded with a vision to provide industries and businesses with dependable electrical infrastructure solutions that meet evolving technological demands.",
    highlight:
      "Over the years, Electrotech has become a trusted partner for industrial and commercial electrical solutions, known for quality, reliability, and technical expertise.",
  },
  {
    intro:
      "From power distribution and industrial automation to ongoing maintenance, our team has expanded capabilities while keeping safety and precision at the center of every project.",
    highlight:
      "We continue to invest in engineering talent and modern systems so our clients receive infrastructure that performs reliably today and scales for tomorrow.",
  },
] as const;

const HISTORY_CLIP =
  "polygon(0 0, calc(100% - 5.5vw) 0, 100% 5.5vw, 100% 100%, 0 100%)";

const { poster: HISTORY_VIDEO_POSTER, src: HISTORY_VIDEO_SRC } =
  SITE_IMAGES.about.historyVideo;

function HistoryVideoBlock() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = async () => {
    setPlaying(true);
    const video = videoRef.current;
    if (!video) return;
    try {
      await video.play();
    } catch {
      /* autoplay blocked — user can use native controls */
    }
  };

  return (
    <FadeUpBlur className="border-t-[0.07vw] border-t-[var(--e-border-soft)]">
      <div className="relative aspect-[16/7] w-full min-h-[22vw] overflow-hidden bg-[var(--e-text-primary)] max-[900px]:aspect-[4/3] max-[900px]:min-h-[50vw]">
        <video
          ref={videoRef}
          className={[
            "absolute inset-0 h-full w-full object-cover",
            playing ? "z-10" : "pointer-events-none z-0 opacity-0",
          ].join(" ")}
          src={HISTORY_VIDEO_SRC}
          poster={HISTORY_VIDEO_POSTER}
          controls={playing}
          playsInline
          preload="metadata"
          onEnded={() => setPlaying(false)}
          aria-label="Electrotech company overview video"
        />

        {!playing ? (
          <>
            <SiteImage
              src={HISTORY_VIDEO_POSTER}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <button
              type="button"
              onClick={handlePlay}
              className="absolute inset-0 z-20 flex items-center justify-center bg-transparent transition-colors hover:bg-[rgba(0,0,0,0.06)]"
              aria-label="Play video"
            >
              <span className="flex size-[5.2vw] min-h-[60px] min-w-[60px] items-center justify-center rounded-full bg-[var(--e-white)] shadow-[0_0.35vw_1.2vw_rgba(0,0,0,0.18)] max-[900px]:size-[14vw]">
                <Play
                  className="ml-[0.2vw] size-[1.35vw] min-h-[18px] min-w-[18px] fill-[var(--e-primary)] text-[var(--e-primary)] max-[900px]:size-[5vw]"
                  aria-hidden
                />
              </span>
            </button>
          </>
        ) : null}
      </div>
    </FadeUpBlur>
  );
}

export function AboutHistorySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const highlightRef = useRef<HTMLParagraphElement>(null);
  const total = HISTORY_SLIDES.length;
  const current = HISTORY_SLIDES[activeIndex]!;

  useGSAP(
    () => {
      const intro = introRef.current;
      const highlight = highlightRef.current;
      if (!intro || !highlight) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          [intro, highlight],
          { autoAlpha: 0, y: 14 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.06,
            ease: "power2.out",
            overwrite: true,
          },
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([intro, highlight], { autoAlpha: 1, y: 0 });
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
      className="site-shell"
      aria-labelledby="about-history-heading"
    >
      <SectionPanel gridLines={false} tone="light">
        <div
          ref={contentRef}
          className="grid min-h-[32vw] grid-cols-12 max-[900px]:min-h-0"
        >
          <FadeUpBlurGroup className="col-span-8 flex flex-col justify-center gap-[var(--space-3xl)] border-r-[0.07vw] border-r-[var(--e-border-soft)] px-[var(--space-card-pad)] py-[4vw] max-[900px]:col-span-12 max-[900px]:border-r-0 max-[900px]:border-b-[0.07vw] max-[900px]:py-[8vw]">
            <div className="flex flex-col gap-[var(--space-lg)]">
              <FadeUpBlurItem>
                <SectionKicker>Our history</SectionKicker>
              </FadeUpBlurItem>
              <FadeUpBlurItem>
                <h2
                  id="about-history-heading"
                  className="text-[3.6vw] font-medium leading-[1.12] tracking-[-0.06vw] text-[var(--e-text-primary)]"
                >
                  Building reliable electrical <br />
                  solutions since 2008.
                </h2>
              </FadeUpBlurItem>
              <FadeUpBlurItem>
                <p
                  ref={introRef}
                  className="max-w-[34vw] text-body leading-[1.65] text-[var(--e-text-secondary)] max-[900px]:max-w-none"
                  aria-live="polite"
                >
                  {current.intro}
                </p>
              </FadeUpBlurItem>
            </div>

            <FadeUpBlurItem className="flex items-center gap-[0.52vw]">
              <button
                type="button"
                onClick={goToPrevious}
                className="flex size-[2.9vw] min-h-[44px] min-w-[44px] items-center justify-center rounded-[0.42vw] border-[0.07vw] border-[var(--e-border-soft)] text-[var(--e-primary)] transition-[border-color,background-color] duration-300 hover:border-[var(--e-primary)] hover:bg-[var(--e-bg-light)] max-[900px]:size-[11vw]"
                aria-label="Previous history slide"
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
                className="flex size-[2.9vw] min-h-[44px] min-w-[44px] items-center justify-center rounded-[0.42vw] border-[0.07vw] border-[var(--e-border-soft)] text-[var(--e-primary)] transition-[border-color,background-color] duration-300 hover:border-[var(--e-primary)] hover:bg-[var(--e-bg-light)] max-[900px]:size-[11vw]"
                aria-label="Next history slide"
              >
                <ChevronsRight
                  className="size-[1.1vw] min-h-[14px] min-w-[14px] max-[900px]:size-[4vw]"
                  strokeWidth={1.75}
                  aria-hidden
                />
              </button>
            </FadeUpBlurItem>
          </FadeUpBlurGroup>

          <FadeUpBlur className="col-span-4 mt-[6vw] flex max-[900px]:col-span-12">
            <div
              className="flex min-h-[28vw] w-full flex-col bg-[var(--e-text-light-blue)] p-[3vw]  max-[900px]:min-h-[55vw]"
              style={{ clipPath: HISTORY_CLIP }}
            >
              <span className="mb-[var(--space-xl)] flex size-[2.4vw] min-h-[36px] min-w-[36px] shrink-0 items-center justify-center rounded-[0.42vw] bg-[var(--e-white)] max-[900px]:size-[10vw]">
                <LoaderCircle
                  className="size-[1.15vw] min-h-[16px] min-w-[16px] text-[var(--e-text-primary)] max-[900px]:size-[4vw]"
                  strokeWidth={1.75}
                  aria-hidden
                />
              </span>
              <p
                ref={highlightRef}
                className="max-w-[38vw] text-[2.4vw] leading-[1.35] text-[var(--e-white)] max-[900px]:max-w-none max-[900px]:text-[3.8vw]"
                aria-live="polite"
              >
                {current.highlight}
              </p>
            </div>
          </FadeUpBlur>
        </div>

        <HistoryVideoBlock />
      </SectionPanel>
    </section>
  );
}
