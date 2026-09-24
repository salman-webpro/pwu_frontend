export type ApprovalStatus = "awaiting" | "approved" | "changes-requested";

export interface Approval {
  id: string;
  title: string;
  subtitle: string;
  status: ApprovalStatus;
  requestedAt: string;
}
