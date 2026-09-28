"use client";

import { useState } from "react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SpendByMonthChart } from "@/components/reports/spend-by-month-chart";
import { AtAGlanceCard } from "@/components/reports/at-a-glance-card";
import type {
  AtAGlanceStat,
  SpendChartData,
  SpendTimeRange,
  SpendTimeRangeId,
} from "@/lib/mock-data/reports";

interface SpendPerformanceSectionProps {
  timeRanges: SpendTimeRange[];
  spendByRange: Record<SpendTimeRangeId, SpendChartData>;
  atAGlanceByRange: Record<SpendTimeRangeId, AtAGlanceStat[]>;
}

export function SpendPerformanceSection({
  timeRanges,
  spendByRange,
  atAGlanceByRange,
}: SpendPerformanceSectionProps) {
  const [activeRange, setActiveRange] = useState<SpendTimeRangeId>(
    timeRanges[0].id,
  );
  const chart = spendByRange[activeRange];
  const stats = atAGlanceByRange[activeRange];

  return (
    <div className="flex flex-col gap-6">
      <Tabs
        value={activeRange}
        onValueChange={(value) => setActiveRange(value as SpendTimeRangeId)}
      >
        <TabsList>
          {timeRanges.map((range) => (
            <TabsTrigger
              key={range.id}
              value={range.id}
              className="data-active:text-brand-pink"
            >
              {range.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid gap-6 lg:grid-cols-2">
        <SpendByMonthChart
          title={chart.title}
          description={chart.description}
          points={chart.points}
          highlightLabel={chart.highlightLabel}
        />
        <AtAGlanceCard stats={stats} />
      </div>
    </div>
  );
}
