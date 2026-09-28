"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Switch } from "@/components/ui/switch";
import type { Company } from "@/types/company";

interface NotificationsCardProps {
  company: Company;
}

interface NotificationToggle {
  key: keyof Pick<
    Company,
    "requireApprovalOnNewArtwork" | "emailOnProduction" | "weeklySpendSummary"
  >;
  label: string;
  description: string;
}

const TOGGLES: NotificationToggle[] = [
  {
    key: "requireApprovalOnNewArtwork",
    label: "Require approval on new artwork",
    description: "Reorders of already-approved artwork stay automatic.",
  },
  {
    key: "emailOnProduction",
    label: "Email me when an order enters production",
    description: "Sent to your primary email on file.",
  },
  {
    key: "weeklySpendSummary",
    label: "Weekly spend summary",
    description:
      "A short recap every Monday — orders, spend, anything waiting on you.",
  },
];

export function NotificationsCard({ company }: NotificationsCardProps) {
  const [values, setValues] = useState({
    requireApprovalOnNewArtwork: company.requireApprovalOnNewArtwork,
    emailOnProduction: company.emailOnProduction,
    weeklySpendSummary: company.weeklySpendSummary,
  });

  function handleToggle(toggle: NotificationToggle, checked: boolean) {
    setValues((prev) => ({ ...prev, [toggle.key]: checked }));
    if (checked) {
      toast.success(`Enabled: ${toggle.label}`);
    } else {
      toast.info(`Turned off: ${toggle.label}`);
    }
  }

  return (
    <div>
      <h2 className="text-lg font-semibold">Notifications</h2>
      <p className="text-sm text-muted-foreground">
        How Print Wave should keep you posted.
      </p>

      <div className="mt-4 divide-y divide-border rounded-xl border border-border bg-card">
        {TOGGLES.map((toggle) => (
          <div
            key={toggle.key}
            className="flex items-start justify-between gap-4 p-4"
          >
            <div>
              <p className="font-semibold">{toggle.label}</p>
              <p className="text-sm text-muted-foreground">
                {toggle.description}
              </p>
            </div>
            <Switch
              checked={values[toggle.key]}
              onCheckedChange={(checked) => handleToggle(toggle, checked)}
              className="mt-1 shrink-0 data-checked:bg-brand-pink"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
