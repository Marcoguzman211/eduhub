import type {
  ResourceLanguage,
  ResourceLevel,
  ResourceLicense,
  ResourceSubject,
  ResourceType,
} from "./resource";

export const resourceTypeLabels: Record<ResourceType, string> = {
  fiche: "Fiche",
  video: "Vidéo",
  cours: "Cours",
};

export const resourceSubjectLabels: Record<ResourceSubject, string> = {
  fr: "Français",
  maths: "Mathématiques",
  histoire: "Histoire",
};

export const resourceLevelLabels: Record<ResourceLevel, string> = {
  cp: "CP",
  ce2: "CE2",
  cm1: "CM1",
};

export const resourceLanguageLabels: Record<ResourceLanguage, string> = {
  fr: "Français",
  en: "Anglais",
  es: "Espagnol",
};

export const resourceLicenseLabels: Record<ResourceLicense, string> = {
  "cc-by": "CC BY",
  "cc-by-sa": "CC BY-SA",
  cc0: "CC0",
};

export function getResourceTypeLabel(type: ResourceType): string {
  return resourceTypeLabels[type] ?? type;
}

export function getResourceSubjectLabel(subject: ResourceSubject): string {
  return resourceSubjectLabels[subject] ?? subject;
}

export function getResourceLevelLabel(level: ResourceLevel): string {
  return resourceLevelLabels[level] ?? level;
}

export function getResourceLanguageLabel(language: ResourceLanguage): string {
  return resourceLanguageLabels[language] ?? language;
}

export function getResourceLicenseLabel(license: ResourceLicense): string {
  return resourceLicenseLabels[license] ?? license.toUpperCase();
}
