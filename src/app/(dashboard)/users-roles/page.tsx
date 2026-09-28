import { PageHeader } from "@/components/dashboard/page-header";
import { RolePermissionsGrid } from "@/components/users-roles/role-permissions-grid";
import { TeamMembersCard } from "@/components/users-roles/team-members-card";
import { TipBanner } from "@/components/shared/tip-banner";
import { DEMO_USER } from "@/lib/mock-data/user";
import {
  ROLE_DEFINITIONS,
  TEAM_MEMBERS_SUMMARY,
} from "@/lib/mock-data/users-roles";
import { DEFAULT_LOCATION_LABEL } from "@/lib/mock-data/locations";

export default function UsersRolesPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader
        title="Users & roles"
        description="Who can order, approve, and manage this account — and what each role is allowed to do."
        location={DEFAULT_LOCATION_LABEL}
        role={DEMO_USER.role}
      />
      <div className="flex flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8">
        <TeamMembersCard
          users={[DEMO_USER]}
          roles={ROLE_DEFINITIONS}
          summary={TEAM_MEMBERS_SUMMARY}
        />
        <RolePermissionsGrid roles={ROLE_DEFINITIONS} />
        <TipBanner
          lead="Single-owner by design, for now."
          text="V1 keeps one accountable Owner per account so every approval has a clear decision-maker."
        />
      </div>
    </div>
  );
}
