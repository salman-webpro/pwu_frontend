interface ProfileCompletenessProps {
  percent: number;
}

export function ProfileCompleteness({ percent }: ProfileCompletenessProps) {
  return (
    <div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-brand-pink"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="mt-2 text-right text-sm font-medium text-muted-foreground">
        {percent}% complete
      </p>
    </div>
  );
}
