"use client";

import { useEffect, useState } from "react";
import { Line, LineChart, ResponsiveContainer } from "recharts";

type SparkPoint = { i: number; v: number };

const SPARKLINES: SparkPoint[][] = [
  [
    { i: 0, v: 22 },
    { i: 1, v: 38 },
    { i: 2, v: 28 },
    { i: 3, v: 46 },
    { i: 4, v: 34 },
    { i: 5, v: 52 },
    { i: 6, v: 40 },
    { i: 7, v: 58 },
    { i: 8, v: 44 },
    { i: 9, v: 50 },
    { i: 10, v: 36 },
    { i: 11, v: 48 },
  ],
  [
    { i: 0, v: 40 },
    { i: 1, v: 26 },
    { i: 2, v: 44 },
    { i: 3, v: 30 },
    { i: 4, v: 48 },
    { i: 5, v: 34 },
    { i: 6, v: 50 },
    { i: 7, v: 38 },
    { i: 8, v: 54 },
    { i: 9, v: 42 },
    { i: 10, v: 56 },
    { i: 11, v: 46 },
  ],
  [
    { i: 0, v: 30 },
    { i: 1, v: 46 },
    { i: 2, v: 36 },
    { i: 3, v: 54 },
    { i: 4, v: 42 },
    { i: 5, v: 60 },
    { i: 6, v: 48 },
    { i: 7, v: 38 },
    { i: 8, v: 52 },
    { i: 9, v: 44 },
    { i: 10, v: 58 },
    { i: 11, v: 50 },
  ],
];

function Sparkline({ data }: { data: SparkPoint[] }) {
  return (
    <div className="h-[3vw] w-full min-h-[36px]">
      <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1}>
        <LineChart
          data={data}
          margin={{ top: 6, right: 0, bottom: 6, left: 0 }}
        >
          <Line
            type="natural"
            dataKey="v"
            stroke="#ffffff"
            strokeWidth={2.25}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function MissionSparklines() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="flex flex-1 flex-col justify-center gap-[0.1vw] px-[var(--space-card-pad)] py-[1.5vw] max-[900px]:gap-[3vw] max-[900px]:py-[4vw]"
      aria-hidden
    >
      {mounted
        ? SPARKLINES.map((data, index) => (
            <Sparkline key={index} data={data} />
          ))
        : SPARKLINES.map((_, index) => (
            <div key={index} className="h-[3vw] w-full min-h-[36px]" />
          ))}
    </div>
  );
}
