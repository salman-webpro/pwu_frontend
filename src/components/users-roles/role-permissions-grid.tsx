import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { RoleDefinition } from "@/lib/mock-data/users-roles";

interface RolePermissionsGridProps {
  roles: RoleDefinition[];
}

export function RolePermissionsGrid({ roles }: RolePermissionsGridProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold">Roles & permissions</h2>
      <p className="text-sm text-muted-foreground">
        Owner is active today. The rest unlock with multi-user accounts.
      </p>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {roles.map((role) => (
          <Card
            key={role.role}
            className={cn(!role.isActive && "bg-muted/40")}
          >
            <CardHeader className="flex flex-row items-center justify-between">
              <h3 className="font-semibold">{role.label}</h3>
              {role.isActive ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
                  <span className="size-1.5 rounded-full bg-green-500" />
                  Active
                </span>
              ) : (
                <Badge variant="secondary">Planned</Badge>
              )}
            </CardHeader>
            <CardContent
              className={cn(
                "flex flex-col gap-3",
                !role.isActive && "text-muted-foreground",
              )}
            >
              <p className="text-sm">{role.description}</p>
              <ul className="flex flex-col gap-2 text-sm">
                {role.permissions.map((permission) => (
                  <li key={permission} className="flex items-start gap-2">
                    <Check
                      className={cn(
                        "mt-0.5 size-4 shrink-0",
                        role.isActive
                          ? "text-brand-pink"
                          : "text-muted-foreground",
                      )}
                    />
                    {permission}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
