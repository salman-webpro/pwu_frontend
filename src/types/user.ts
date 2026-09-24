export type Role = "owner" | "approver" | "orderer";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  status: "active" | "invited";
  lastActive?: string;
  avatarInitials: string;
}
