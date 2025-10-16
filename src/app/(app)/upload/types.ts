export type UploadFile = {
  id: string;
  file: File;
  previewUrl?: string;
};

export type FilesChangeHandler = (files: UploadFile[]) => void;
