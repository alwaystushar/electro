"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useId, type ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

export function Modal({ open, onClose, title, children }: ModalProps) {
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-[100]">
          <motion.button
            type="button"
            aria-label="Close dialog"
            className="absolute inset-0 bg-[rgba(1,6,28,0.55)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="absolute top-1/2 left-1/2 flex max-h-[min(90vh,52rem)] w-[min(42vw,40rem)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-[0.62vw] border-[0.07vw] border-[var(--e-border-soft)] bg-[var(--e-white)] shadow-[0_1.56vw_4.16vw_rgba(1,6,28,0.18)] max-[900px]:w-[calc(100vw-2*var(--space-shell-x))] max-[900px]:rounded-[2vw]"
            initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex shrink-0 items-start justify-between gap-[var(--space-md)] border-b-[0.07vw] border-b-[var(--e-border-soft)] px-[var(--space-card-pad)] py-[1.3vw] max-[900px]:py-[4vw]">
              <h2
                id={titleId}
                className="pr-[var(--space-md)] text-[1.35vw] font-medium leading-snug text-[var(--e-text-primary)] max-[900px]:text-[4vw]"
              >
                {title}
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex size-[2.2vw] min-h-[40px] min-w-[40px] shrink-0 items-center justify-center rounded-[0.42vw] border-[0.07vw] border-[var(--e-border-soft)] text-[var(--e-text-primary)] transition-colors hover:border-[var(--e-primary)] hover:text-[var(--e-primary)] max-[900px]:size-[10vw]"
                aria-label="Close"
              >
                <X className="size-[1vw] min-h-[16px] min-w-[16px] max-[900px]:size-[4.5vw]" strokeWidth={1.75} />
              </button>
            </div>
            <div className="overflow-y-auto px-[var(--space-card-pad)] py-[var(--space-card-pad)]">
              {children}
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
