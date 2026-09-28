import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StatusBadge } from "@/components/shared/status-badge";
import { ManageUserAccessDialog } from "@/components/users-roles/manage-user-access-dialog";
import type { User } from "@/types/user";
import type { RoleDefinition } from "@/lib/mock-data/users-roles";

interface TeamMembersCardProps {
  users: User[];
  roles: RoleDefinition[];
  summary: string;
}

function roleLabel(role: User["role"]) {
  return role.charAt(0).toUpperCase() + role.slice(1);
}

export function TeamMembersCard({ users, roles, summary }: TeamMembersCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team members</CardTitle>
        <CardDescription>{summary}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="overflow-x-auto rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Last active</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => {
                const role = roles.find((r) => r.role === user.role);
                return (
                <TableRow key={user.id} className="bg-muted/40">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar size="sm">
                        <AvatarFallback className="bg-brand-pink/80 text-white">
                          {user.avatarInitials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700">
                      <span className="size-1.5 rounded-full bg-indigo-500" />
                      {roleLabel(user.role)}
                    </span>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {user.lastActive ?? "—"}
                  </TableCell>
                  <TableCell>
                    <StatusBadge
                      tone={user.status === "active" ? "approved" : "awaiting"}
                      label={user.status === "active" ? "Active" : "Invited"}
                    />
                  </TableCell>
                  <TableCell className="text-right">
                    {role && <ManageUserAccessDialog user={user} role={role} />}
                  </TableCell>
                </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>

        <div className="rounded-lg border border-dashed border-border px-4 py-4 text-center text-sm text-muted-foreground">
          Invite a team member by email — available when multi-user access
          launches
        </div>
      </CardContent>
    </Card>
  );
}
