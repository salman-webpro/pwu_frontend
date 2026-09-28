interface TabCountBadgeProps {
  count: number;
}

export function TabCountBadge({ count }: TabCountBadgeProps) {
  return (
    <span className="flex size-5 items-center justify-center rounded-full bg-muted-foreground/15 text-xs font-bold text-muted-foreground group-data-active/tab:bg-brand-pink group-data-active/tab:text-white">
      {count}
    </span>
  );
}
