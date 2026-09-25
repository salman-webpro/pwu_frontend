interface OrderCutoffBannerProps {
  countdown: string;
  cutoffTime?: string;
}

export function OrderCutoffBanner({
  countdown,
  cutoffTime = "4:00 PM ET",
}: OrderCutoffBannerProps) {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-brand-pink/10 px-4 py-3 text-sm">
      <span className="size-2 shrink-0 rounded-full bg-brand-pink" />
      <p>
        <span className="font-semibold text-brand-pink">
          Order cutoff in {countdown}
        </span>{" "}
        <span className="text-brand-pink/80">
          — orders placed before {cutoffTime} count as day zero.
        </span>
      </p>
    </div>
  );
}
