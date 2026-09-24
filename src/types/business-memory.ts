export type BrandFileType = "pdf" | "svg" | "png";

export interface BrandFile {
  id: string;
  name: string;
  type: BrandFileType;
  status: "approved" | "in-progress";
}

export interface BusinessMemoryTab {
  id: string;
  label: string;
  files: BrandFile[];
}
