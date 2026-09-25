export type BrandFileType = "pdf" | "svg" | "png";

export interface BrandFile {
  id: string;
  name: string;
  type: BrandFileType;
}

export type FileCardStatus = "approved" | "in-progress";

export interface FileCard {
  id: string;
  title: string;
  description: string;
  status: FileCardStatus;
  files: BrandFile[];
}

export interface PrintDesign {
  id: string;
  name: string;
  isDefault: boolean;
  frontColor: string;
  backColor: string;
}
