"use client";

import { useState } from "react";

import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EditBillingProfileDialog } from "@/components/billing-payment/edit-billing-profile-dialog";
import type { BillingProfile } from "@/lib/mock-data/billing";

interface BillingProfileCardProps {
  profile: BillingProfile;
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}

export function BillingProfileCard({ profile: initialProfile }: BillingProfileCardProps) {
  const [profile, setProfile] = useState(initialProfile);

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Billing profile</CardTitle>
        <CardAction>
          <EditBillingProfileDialog profile={profile} onSave={setProfile} />
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Field label="Legal name" value={profile.legalName} />
        <Field label="Billing address" value={profile.billingAddress} />
        <Field label="Billing contact" value={profile.billingContact} />
        <Field label="Invoice email" value={profile.invoiceEmail} />
        <Field label="Terms" value={profile.terms} />
      </CardContent>
    </Card>
  );
}
