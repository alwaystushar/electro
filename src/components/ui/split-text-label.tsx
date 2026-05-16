"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText);

type SplitTextLabelProps = {
  text: string;
  className?: string;
  hover?: boolean;
  enterOnMount?: boolean;
};

export function SplitTextLabel({
  text,
  className,
  hover = true,
  enterOnMount = false,
}: SplitTextLabelProps) {
  const labelRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(
    (_, contextSafe) => {
      const makeSafe =
        contextSafe ?? ((callback: () => void) => callback);
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const reduceMotion = Boolean(context.conditions?.reduceMotion);

          if (!labelRef.current) {
            return;
          }

          const split = SplitText.create(labelRef.current, {
            type: "chars",
            charsClass: "split-char",
            tag: "span",
          });

          gsap.set(split.chars, {
            display: "inline-block",
            y: "0vw",
          });

          if (enterOnMount && !reduceMotion) {
            gsap.from(split.chars, {
              y: "0.62vw",
              autoAlpha: 0,
              duration: 0.56,
              stagger: 0.018,
              ease: "power3.out",
            });
          }

          if (!hover || reduceMotion) {
            return () => split.revert();
          }

          const hoverTarget =
            labelRef.current.closest("[data-split-hover-target]") ??
            labelRef.current.parentElement;

          const onEnter = makeSafe(() => {
            gsap.to(split.chars, {
              y: "-0.16vw",
              duration: 0.28,
              stagger: 0.01,
              ease: "power2.out",
              overwrite: "auto",
            });
          });

          const onLeave = makeSafe(() => {
            gsap.to(split.chars, {
              y: "0vw",
              duration: 0.28,
              stagger: 0.008,
              ease: "power2.out",
              overwrite: "auto",
            });
          });

          hoverTarget?.addEventListener("mouseenter", onEnter);
          hoverTarget?.addEventListener("mouseleave", onLeave);

          return () => {
            hoverTarget?.removeEventListener("mouseenter", onEnter);
            hoverTarget?.removeEventListener("mouseleave", onLeave);
            split.revert();
          };
        },
      );

      return () => mm.revert();
    },
    { scope: labelRef },
  );

  return (
    <span ref={labelRef} className={className}>
      {text}
    </span>
  );
}
