import type { CSSProperties, ReactNode } from "react";

type SectionPanelProps = {
  children: ReactNode;
  className?: string;
  tone?: "light" | "white" | "dark";
  gridLines?: boolean;
  style?: CSSProperties;
};

const toneClasses = {
  light: "bg-[var(--e-bg-light)]",
  white: "bg-[var(--e-white)]",
  dark: "bg-[var(--e-bg-dark-blue)]",
} as const;

const gridLineStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(to right, rgba(1, 6, 28, 0.08) 0.07vw, transparent 0.07vw), linear-gradient(to bottom, rgba(1, 6, 28, 0.08) 0.07vw, transparent 0.07vw)",
  backgroundSize: "32% 100%, 100% 100%",
};

export function SectionPanel({
  children,
  className = "",
  tone = "light",
  gridLines = true,
  style,
}: SectionPanelProps) {
  return (
    <div
      className={[
        "border-x-[0.07vw] border-b-[0.07vw] border-[var(--e-border-soft)]",
        toneClasses[tone],
        className,
      ].join(" ")}
      style={gridLines ? { ...gridLineStyle, ...style } : style}
    >
      {children}
    </div>
  );
}
