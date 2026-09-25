import { Check } from "lucide-react";

interface TipBannerProps {
  lead: string;
  text: string;
}

export function TipBanner({ lead, text }: TipBannerProps) {
  return (
    <div className="flex items-start gap-2 rounded-xl bg-brand-pink/10 px-4 py-3 text-sm">
      <Check className="mt-0.5 size-4 shrink-0 text-brand-pink" />
      <p>
        <span className="font-semibold text-brand-pink">{lead}</span>{" "}
        <span className="text-brand-pink/80">{text}</span>
      </p>
    </div>
  );
}
