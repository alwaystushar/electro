type ButtonSwapLabelProps = {
  text: string;
  hoverText?: string;
  className?: string;
};

export function ButtonSwapLabel({
  text,
  hoverText,
  className = "",
}: ButtonSwapLabelProps) {
  const alternate = hoverText ?? text;

  return (
    <span className={["e-btn-swap", className].filter(Boolean).join(" ")}>
      <span className="e-btn-swap__stack">
        <span className="e-btn-swap__line">{text}</span>
        <span className="e-btn-swap__line" aria-hidden>
          {alternate}
        </span>
      </span>
    </span>
  );
}
