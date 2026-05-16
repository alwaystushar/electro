"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const hidden = { opacity: 0, y: 40, filter: "blur(14px)" };
const visible = {
  opacity: 1,
  y: 0,
  filter: "blur(0px)",
};

export const fadeUpBlurVariants: Variants = {
  hidden,
  visible: {
    ...visible,
    transition: { duration: 0.75, ease: EASE },
  },
};

export const fadeUpBlurReducedVariants: Variants = {
  hidden: visible,
  visible: { ...visible, transition: { duration: 0 } },
};

const viewport = { once: true, amount: 0.2, margin: "0px 0px -6% 0px" } as const;

function useMotionVariants(delay = 0): Variants {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return fadeUpBlurReducedVariants;

  if (!delay) return fadeUpBlurVariants;

  return {
    hidden,
    visible: {
      ...visible,
      transition: { duration: 0.75, ease: EASE, delay },
    },
  };
}

type FadeUpBlurProps = HTMLMotionProps<"div"> & {
  children?: ReactNode;
  delay?: number;
  animateOnMount?: boolean;
};

/** Single block — fades up and de-blurs when scrolled into view */
export function FadeUpBlur({
  children,
  className,
  delay = 0,
  animateOnMount = false,
  ...rest
}: FadeUpBlurProps) {
  const variants = useMotionVariants(delay);

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate={animateOnMount ? "visible" : undefined}
      whileInView={animateOnMount ? undefined : "visible"}
      viewport={animateOnMount ? undefined : viewport}
      variants={variants}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type FadeUpBlurGroupProps = HTMLMotionProps<"div"> & {
  children?: ReactNode;
  stagger?: number;
  delayChildren?: number;
  animateOnMount?: boolean;
};

/** Parent — staggers child fade-up-blur items */
export function FadeUpBlurGroup({
  children,
  className,
  stagger = 0.1,
  delayChildren = 0,
  animateOnMount = false,
  ...rest
}: FadeUpBlurGroupProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate={animateOnMount ? "visible" : undefined}
      whileInView={animateOnMount ? undefined : "visible"}
      viewport={animateOnMount ? undefined : viewport}
      variants={{
        hidden: {},
        visible: {
          transition: reduceMotion
            ? { duration: 0 }
            : { staggerChildren: stagger, delayChildren },
        },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type FadeUpBlurItemProps = HTMLMotionProps<"div"> & {
  children?: ReactNode;
};

/** Child of FadeUpBlurGroup */
export function FadeUpBlurItem({ children, className, ...rest }: FadeUpBlurItemProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={reduceMotion ? fadeUpBlurReducedVariants : fadeUpBlurVariants}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
