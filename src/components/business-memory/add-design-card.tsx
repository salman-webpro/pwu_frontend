import { Plus } from "lucide-react";

interface AddDesignCardProps {
  side: "Front" | "Back";
}

export function AddDesignCard({ side }: AddDesignCardProps) {
  return (
    <button
      type="button"
      className="flex h-full min-h-40 cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-border text-brand-pink hover:bg-muted"
    >
      <Plus className="size-4" />
      <span className="text-center text-sm leading-tight font-semibold">
        Add design
        <br />
        {side}
      </span>
    </button>
  );
}
