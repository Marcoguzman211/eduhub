import type { InferSelectModel } from "drizzle-orm";

import type { resources, users } from "~/server/db/schema";
import type {
  ResourceFileMetadata,
  ResourceLanguage,
  ResourceLevel,
  ResourceLicense,
  ResourceSubject,
  ResourceType,
} from "./resource";

export type ResourceCardProps = {
  id: string;
  title: string;
  resourceType: ResourceType;
  subject: ResourceSubject;
  level: ResourceLevel;
  durationMinutes: number | null;
  language: ResourceLanguage | null;
  license: ResourceLicense;
  description: string;
  fileMetadata: ResourceFileMetadata[];
  createdAt: string;
  authorName: string | null;
};

type ResourceRow = InferSelectModel<typeof resources>;
type UserRow = InferSelectModel<typeof users>;

export type ResourceWithAuthor = ResourceRow & {
  author?: UserRow | null;
};

export function toResourceCardProps(
  resource: ResourceWithAuthor,
): ResourceCardProps {
  return {
    id: resource.id,
    title: resource.title,
    resourceType: resource.resourceType,
    subject: resource.subject,
    level: resource.level,
    durationMinutes: resource.durationMinutes,
    language: resource.language
      ? (resource.language as ResourceLanguage)
      : null,
    license: resource.license,
    description: resource.description,
    fileMetadata: resource.fileMetadata,
    createdAt: resource.createdAt.toISOString(),
    authorName: resource.author?.name ?? resource.author?.email ?? null,
  };
}
