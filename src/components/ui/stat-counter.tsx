"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export type StatCounterConfig = {
  value: string;
  suffix: string;
  label: string;
  commaBeforeDigitIndex?: number;
};

type StatCounterDisplayProps = {
  value: string;
  suffix?: string;
  className?: string;
  commaBeforeDigitIndex?: number;
};

function getDigitStepPx(track: HTMLElement) {
  const digit = track.querySelector<HTMLElement>(".sc__digit");
  if (digit) {
    const h = digit.getBoundingClientRect().height;
    if (h > 0) return h;
  }
  const col = track.closest(".sc__column") as HTMLElement | null;
  if (col) {
    const h = col.getBoundingClientRect().height;
    if (h > 0) return h;
  }
  return parseFloat(getComputedStyle(track).fontSize) || 16;
}

function getTargetY(colIndex: number, targetDigit: number, stepPx: number) {
  const totalItems = (colIndex + 1) * 10 + (targetDigit + 1);
  return -((totalItems - 1) * stepPx);
}

/** Renders the slot-machine digit strip (no animation) */
export function StatCounterDisplay({
  value,
  suffix = "",
  className = "",
  commaBeforeDigitIndex,
}: StatCounterDisplayProps) {
  const digits = value.replace(/\D/g, "").split("");

  return (
    <div
      className={`flex items-end justify-center leading-none ${className}`}
      data-stat-counter=""
      data-value={value}
    >
      {digits.map((digit, colIndex) => {
        const targetDigit = Number(digit);
        const rows: number[] = [];

        for (let cycle = 0; cycle <= colIndex; cycle++) {
          for (let d = 0; d <= 9; d++) rows.push(d);
        }
        for (let d = 0; d <= targetDigit; d++) rows.push(d);

        return (
          <span key={colIndex} className="inline-flex items-end">
            {commaBeforeDigitIndex === colIndex ? (
              <span className="sc__comma px-[0.06em]" style={{ lineHeight: "1em" }}>
                ,
              </span>
            ) : null}
            <span
              className="sc__column block overflow-hidden"
              style={{ height: "1em" }}
            >
              <span
                className="sc__track flex flex-col"
                data-col={colIndex}
                data-target={targetDigit}
                style={{ willChange: "transform" }}
              >
                {rows.map((d, rowIndex) => (
                  <span
                    key={rowIndex}
                    className="sc__digit block text-center tabular-nums"
                    style={{ height: "1em", lineHeight: "1em" }}
                  >
                    {d}
                  </span>
                ))}
              </span>
            </span>
          </span>
        );
      })}

      {suffix ? (
        <span className="sc__suffix" style={{ lineHeight: "1em" }}>
          {suffix}
        </span>
      ) : null}
    </div>
  );
}

type StatCounterGroupProps = {
  stats: readonly StatCounterConfig[];
  triggerRef: RefObject<HTMLElement | null>;
  start?: string;
  duration?: number;
  stagger?: number;
  counterClassName?: string;
  labelClassName?: string;
};

/**
 * Renders multiple stat counters and runs ONE ScrollTrigger for the whole row.
 * Use this instead of multiple <StatCounter /> to avoid trigger conflicts.
 */
export function StatCounterGroup({
  stats,
  triggerRef,
  start = "top 85%",
  duration = 2,
  stagger = 0.08,
  counterClassName = "",
  labelClassName = "",
}: StatCounterGroupProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const row = rowRef.current;
      const triggerEl = triggerRef.current;
      if (!row || !triggerEl) return;

      let mmCleanup: (() => void) | undefined;

      const run = () => {
        const tracks = gsap.utils.toArray<HTMLElement>(
          row.querySelectorAll(".sc__track"),
        );
        if (!tracks.length) return;

        const stepPx = getDigitStepPx(tracks[0]!);
        if (stepPx <= 0) {
          requestAnimationFrame(run);
          return;
        }

        const setFinal = () => {
          tracks.forEach((track) => {
            const col = Number(track.dataset.col);
            const target = Number(track.dataset.target);
            gsap.set(track, { y: getTargetY(col, target, getDigitStepPx(track)) });
          });
        };

        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: reduce)", setFinal);

        mm.add("(prefers-reduced-motion: no-preference)", () => {
          gsap.set(tracks, { y: 0 });

          const tween = gsap.fromTo(
            tracks,
            { y: 0 },
            {
              y: (_i, track) => {
                const el = track as HTMLElement;
                const col = Number(el.dataset.col);
                const target = Number(el.dataset.target);
                return getTargetY(col, target, getDigitStepPx(el));
              },
              duration,
              ease: "power3.out",
              stagger,
              scrollTrigger: {
                trigger: triggerEl,
                start,
                once: true,
                toggleActions: "play none none none",
                invalidateOnRefresh: true,
              },
            },
          );

          const sync = () => {
            ScrollTrigger.refresh();
            const st = tween.scrollTrigger;
            if (
              st &&
              tween.progress() === 0 &&
              ScrollTrigger.isInViewport(triggerEl, 0.12)
            ) {
              tween.play(0);
            }
          };

          requestAnimationFrame(() => requestAnimationFrame(sync));
        });

        mmCleanup = () => mm.revert();
      };

      if (document.fonts?.ready) {
        void document.fonts.ready.then(run);
      } else {
        run();
      }

      return () => mmCleanup?.();
    },
    { scope: rowRef, dependencies: [start, duration, stagger] },
  );

  return (
    <div
      ref={rowRef}
      className="grid w-full grid-cols-12 gap-[var(--space-2xl)] max-[900px]:gap-[var(--space-3xl)]"
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="col-span-4 flex flex-col items-center gap-[var(--space-md)] max-[900px]:col-span-12"
        >
          <StatCounterDisplay
            value={stat.value}
            suffix={stat.suffix}
            commaBeforeDigitIndex={stat.commaBeforeDigitIndex}
            className={counterClassName}
          />
          <p className={labelClassName}>{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

/** @deprecated Prefer StatCounterGroup when rendering multiple stats on one section */
export function StatCounter(
  props: StatCounterDisplayProps & {
    triggerRef?: RefObject<HTMLElement | null>;
    start?: string;
    duration?: number;
    stagger?: number;
  },
) {
  const { triggerRef, start, duration, stagger, ...displayProps } = props;
  const soloRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = soloRef.current;
      const wrapper = root?.querySelector("[data-stat-counter]") as HTMLElement | null;
      const triggerEl =
        triggerRef?.current ?? (wrapper?.closest("section") as HTMLElement | null);
      if (!wrapper || !triggerEl) return;

      const tracks = gsap.utils.toArray<HTMLElement>(wrapper.querySelectorAll(".sc__track"));
      if (!tracks.length) return;

      const play = () => {
        const stepPx = getDigitStepPx(tracks[0]!);
        if (stepPx <= 0) {
          requestAnimationFrame(play);
          return;
        }

        gsap.set(tracks, { y: 0 });
        const tween = gsap.fromTo(
          tracks,
          { y: 0 },
          {
            y: (_i, track) => {
              const el = track as HTMLElement;
              return getTargetY(
                Number(el.dataset.col),
                Number(el.dataset.target),
                getDigitStepPx(el),
              );
            },
            duration: duration ?? 2,
            ease: "power3.out",
            stagger: stagger ?? 0.08,
            scrollTrigger: {
              trigger: triggerEl,
              start: start ?? "top 85%",
              once: true,
              toggleActions: "play none none none",
              invalidateOnRefresh: true,
            },
          },
        );

        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
          const st = tween.scrollTrigger;
          if (
            st &&
            tween.progress() === 0 &&
            ScrollTrigger.isInViewport(triggerEl, 0.12)
          ) {
            tween.play(0);
          }
        });
      };

      play();
    },
    { scope: soloRef, dependencies: [start, duration, stagger, displayProps.value] },
  );

  return (
    <div ref={soloRef}>
      <StatCounterDisplay {...displayProps} />
    </div>
  );
}
