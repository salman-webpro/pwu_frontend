import { MapPin } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description: string;
  location: string;
  role: string;
}

export function PageHeader({
  title,
  description,
  location,
  role,
}: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 border-b border-border px-4 py-6 sm:px-6 md:flex-row md:items-start md:justify-between lg:px-8">
      <div>
        <h1 className="text-2xl font-bold text-brand-pink sm:text-3xl">
          {title}
        </h1>
        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm font-medium">
          <MapPin className="size-4 text-muted-foreground" />
          {location}
        </span>
        <span className="inline-flex items-center rounded-full bg-brand-pink/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-brand-pink uppercase">
          {role}
        </span>
      </div>
    </div>
  );
}
