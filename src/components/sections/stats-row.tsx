type Stat = {
  value: string;
  label: string;
};

type StatsRowProps = {
  stats: readonly Stat[];
};

export function StatsRow({ stats }: StatsRowProps) {
  return (
    <div className="grid grid-cols-12 border-t-[0.07vw] border-t-[var(--e-border-soft)]">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={[
            "col-span-4 px-[var(--space-card-pad)] py-[2.5vw] max-[900px]:col-span-12",
            index < stats.length - 1
              ? "border-r-[0.07vw] border-r-[var(--e-border-soft)] max-[900px]:border-r-0 max-[900px]:border-b-[0.07vw]"
              : "",
          ].join(" ")}
        >
          <p className="text-display text-[var(--e-primary)]">{stat.value}</p>
          <p className="mt-[var(--space-sm)] text-body text-[var(--e-text-secondary)]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
