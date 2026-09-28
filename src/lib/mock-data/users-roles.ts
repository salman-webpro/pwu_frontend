import type { Role } from "@/types/user";

// Static reference copy for the Roles & permissions cards. Only "owner" is
// active in V1 (see decisions.md's "V1 is single-owner") — approver and
// orderer are locked, planned roles shown for context only.
export interface RoleDefinition {
  role: Role;
  label: string;
  isActive: boolean;
  description: string;
  permissions: string[];
}

export const ROLE_DEFINITIONS: RoleDefinition[] = [
  {
    role: "owner",
    label: "Owner",
    isActive: true,
    description:
      "Full control of the account — the only decision-maker per account.",
    permissions: [
      "Place & approve orders",
      "Manage Business Memory",
      "Manage billing & users",
      "View all account activity",
    ],
  },
  {
    role: "approver",
    label: "Approver",
    isActive: false,
    description:
      "Reviews and approves proofs on the Owner's behalf. Cannot place orders unsupervised.",
    permissions: ["Approve / reject proofs", "View order & approval history"],
  },
  {
    role: "orderer",
    label: "Orderer",
    isActive: false,
    description:
      "Places reorders from approved products. New artwork still routes to an Approver.",
    permissions: ["Reorder approved products", "Track order status"],
  },
];

// Static summary line under "Team members" — doesn't derive cleanly from
// the mock data (only 1 user/role modeled today), so it's kept literal to
// match the mockup.
export const TEAM_MEMBERS_SUMMARY =
  "1 active user · 0 pending invites · 1 of 4 roles in use";
