export const resourceTypes = ["fiche", "video", "cours"] as const;
export type ResourceType = (typeof resourceTypes)[number];

export const resourceSubjects = ["fr", "maths", "histoire"] as const;
export type ResourceSubject = (typeof resourceSubjects)[number];

export const resourceLevels = ["cp", "ce2", "cm1"] as const;
export type ResourceLevel = (typeof resourceLevels)[number];

export const resourceLanguages = ["fr", "en", "es"] as const;
export type ResourceLanguage = (typeof resourceLanguages)[number];

export const resourceLicenses = ["cc-by", "cc-by-sa", "cc0"] as const;
export type ResourceLicense = (typeof resourceLicenses)[number];

export type ResourceFileMetadata = {
  name: string;
  size: number;
  type: string;
};
