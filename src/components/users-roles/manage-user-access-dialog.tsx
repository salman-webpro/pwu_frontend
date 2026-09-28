"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import { toast } from "sonner";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import type { User } from "@/types/user";
import type { RoleDefinition } from "@/lib/mock-data/users-roles";
import { DEFAULT_LOCATION_LABEL } from "@/lib/mock-data/locations";

const MODULES = [
  "Orders",
  "Approvals",
  "Products",
  "Users & Roles",
  "Business Memory",
  "Reports",
  "Company Profile",
  "Billing & Payment",
];

interface ManageUserAccessDialogProps {
  user: User;
  role: RoleDefinition;
}

export function ManageUserAccessDialog({
  user,
  role,
}: ManageUserAccessDialogProps) {
  const [open, setOpen] = useState(false);

  function handleResetPassword() {
    toast.info(`Password reset link sent to ${user.email}.`);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <button className="text-sm font-medium text-brand-pink hover:underline" />
        }
      >
        Manage
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-md">
        <DialogHeader className="flex-row items-center gap-3 space-y-0">
          <Avatar>
            <AvatarFallback className="bg-brand-pink/80 text-white">
              {user.avatarInitials}
            </AvatarFallback>
          </Avatar>
          <div>
            <DialogTitle>{user.name}</DialogTitle>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
        </DialogHeader>

        <div className="flex flex-col gap-3">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Role
          </p>
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-700">
              <span className="size-1.5 rounded-full bg-indigo-500" />
              {role.label}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
              <span className="size-1.5 rounded-full bg-green-500" />
              Active
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{role.description}</p>
          <ul className="flex flex-col gap-1.5 text-sm">
            {role.permissions.map((permission) => (
              <li key={permission}>• {permission}</li>
            ))}
          </ul>
          <div className="flex items-start gap-2 rounded-lg bg-muted/50 p-3 text-sm text-muted-foreground">
            <Lock className="mt-0.5 size-4 shrink-0" />
            Owner is the only role in use today. Approver and Orderer become
            assignable once multi-user accounts launch — nothing to configure
            here yet.
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border pt-4">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Access
          </p>
          <div>
            <p className="mb-1.5 text-sm text-muted-foreground">Locations</p>
            <div className="flex items-center justify-between">
              <span className="text-sm">{DEFAULT_LOCATION_LABEL}</span>
              <Switch checked disabled />
            </div>
          </div>
          <div>
            <p className="mb-1.5 text-sm text-muted-foreground">Modules</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {MODULES.map((module) => (
                <div key={module} className="flex items-center justify-between">
                  <span className="text-sm">{module}</span>
                  <Switch checked disabled />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-start gap-2 rounded-lg bg-muted/50 p-3 text-sm text-muted-foreground">
            <Lock className="mt-0.5 size-4 shrink-0" />
            Owner always has full access across every location and module —
            this can&apos;t be scoped down. Access controls take effect when
            you assign Approver or Orderer to a teammate.
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border pt-4">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Account & security
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Reset password</span>
            <Button variant="outline" size="sm" onClick={handleResetPassword}>
              Send email
            </Button>
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            className="w-full sm:w-auto"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
