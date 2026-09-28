export type ApprovalStatus = "awaiting" | "approved" | "changes-requested";

export interface Approval {
  id: string;
  title: string;
  subtitle: string;
  status: ApprovalStatus;
  requestedAt: string;
  // Status-appropriate date line for the compact summary card, e.g.
  // "Submitted 2 days ago" / "Approved Aug 10" / "Requested Aug 8".
  statusNote: string;
}
