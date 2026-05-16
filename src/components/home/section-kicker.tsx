type SectionKickerProps = {
  children: string;
  tone?: "light" | "dark";
};

export function SectionKicker({ children, tone = "dark" }: SectionKickerProps) {
  const colorClass =
    tone === "light"
      ? "text-[var(--e-white)]"
      : "text-[var(--e-bg-dark-blue)]";

  return (
    <p className={`cluster-sm text-kicker font-medium ${colorClass}`}>
      <span className="text-[1.5vw] leading-none">+</span>
      <span>{children}</span>
    </p>
  );
}
