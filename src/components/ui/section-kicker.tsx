type SectionKickerProps = {
  children: string;
  tone?: "light" | "dark" | "muted";
};

export function SectionKicker({ children, tone = "dark" }: SectionKickerProps) {
  const colorClass =
    tone === "light"
      ? "text-[var(--e-white)]"
      : tone === "muted"
        ? "text-[var(--e-text-secondary)]"
        : "text-[var(--e-bg-dark-blue)]";

  return (
    <p className={`cluster-sm text-kicker font-medium ${colorClass}`}>
      <span className="text-[1.5vw] leading-none max-[900px]:text-[3.5vw]">+</span>
      <span>{children}</span>
    </p>
  );
}
