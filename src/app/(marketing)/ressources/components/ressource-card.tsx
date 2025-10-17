"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Avatar,
  Chip,
  Badge,
} from "~/lib/components/ui";
import Image from "next/image";
import {
  LuClock as Clock,
  LuFileText as FileText,
  LuGlobe as Globe,
  LuShare2 as Share2,
  LuShieldCheck as ShieldCheck,
} from "react-icons/lu";
import type { FC } from "react";
import type {
  ResourceFileMetadata,
  ResourceLanguage,
  ResourceLevel,
  ResourceLicense,
  ResourceSubject,
  ResourceType,
} from "~/shared/resource";
import {
  getResourceLanguageLabel,
  getResourceLevelLabel,
  getResourceLicenseLabel,
  getResourceSubjectLabel,
  getResourceTypeLabel,
} from "~/shared/resource-labels";

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

const PLACEHOLDER_THUMBNAILS: Record<ResourceType, string> = {
  fiche: "/ressources/placeholder-1.png",
  video: "/ressources/placeholder-2.png",
  cours: "/ressources/placeholder-3.png",
};

function formatRelativeDate(isoDate: string): string {
  const parsed = new Date(isoDate);
  if (Number.isNaN(parsed.getTime())) {
    return "Date inconnue";
  }

  const diffMs = Date.now() - parsed.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  if (diffMinutes < 1) return "À l'instant";
  if (diffMinutes < 60) return `il y a ${diffMinutes} min`;

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `il y a ${diffHours} h`;

  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 30) return `il y a ${diffDays} j`;

  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "medium",
  }).format(parsed);
}

function extractFileLabel(file: ResourceFileMetadata | undefined): string {
  if (!file) return "FICHIER";

  const extension = file.name.split(".").pop();
  if (extension) return extension.toUpperCase();

  const mimeType = file.type.split("/").pop();
  if (mimeType) return mimeType.toUpperCase();

  return "FICHIER";
}

export const ResourceCard: FC<ResourceCardProps> = (props) => {
  const {
    title,
    resourceType,
    subject,
    level,
    durationMinutes,
    language,
    license,
    description,
    fileMetadata,
    createdAt,
    authorName,
  } = props;

  const primaryFile = fileMetadata[0];
  const fileLabel = extractFileLabel(primaryFile);
  const filesCount = fileMetadata.length;
  const relativeDate = formatRelativeDate(createdAt);
  const thumbnailUrl = PLACEHOLDER_THUMBNAILS[resourceType];
  const subjectLabel = getResourceSubjectLabel(subject);
  const levelLabel = getResourceLevelLabel(level);
  const resourceTypeLabel = getResourceTypeLabel(resourceType);
  const languageLabel =
    language !== null ? getResourceLanguageLabel(language) : null;
  const licenseLabel = getResourceLicenseLabel(license);

  return (
    <Card
      shadow="sm"
      className="group relative w-full overflow-hidden rounded-2xl border border-gray-200/60 bg-white transition-shadow hover:shadow-lg dark:border-gray-800/60 dark:bg-gray-950"
    >
      <div className="hidden md:block">
        <div className="relative h-48 w-full">
          <Image
            src={thumbnailUrl}
            alt="miniature du document"
            fill
            className="z-0 object-cover"
            sizes="(min-width: 768px) 33vw, 100vw"
            priority
          />
          <div className="absolute top-3 left-3 z-20">
            <Badge className="pointer-events-none rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white shadow-md">
              {fileLabel}
            </Badge>
          </div>
        </div>
        <CardHeader className="gap-2 p-4">
          <h3 className="line-clamp-2 text-lg leading-snug font-semibold">
            {title}
          </h3>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <Chip
              size="sm"
              className="bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200"
            >
              {subjectLabel}
            </Chip>
            <Chip
              size="sm"
              className="bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-200"
            >
              {levelLabel}
            </Chip>
            <Chip
              size="sm"
              className="bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-200"
            >
              {resourceTypeLabel}
            </Chip>
          </div>
        </CardHeader>

        <CardBody className="p-4 pt-0">
          <p className="line-clamp-3 text-sm text-gray-600 dark:text-gray-300">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-700 dark:text-gray-300">
            {typeof durationMinutes === "number" ? (
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{durationMinutes} min</span>
              </div>
            ) : null}
            {languageLabel ? (
              <div className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                <span>{languageLabel}</span>
              </div>
            ) : null}
            <div className="flex items-center gap-1">
              <ShieldCheck className="h-4 w-4" />
              <span>{licenseLabel}</span>
            </div>
            <div className="flex items-center gap-1">
              <FileText className="h-4 w-4" />
              <span>
                {filesCount} fichier{filesCount > 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </CardBody>

        <CardFooter className="flex items-center justify-between gap-3 p-4 pt-0">
          <div className="flex items-center gap-2">
            <Avatar radius="full" className="h-6 w-6" />
            <div className="text-xs text-gray-600 dark:text-gray-300">
              <span className="font-medium">
                {authorName ?? "Auteur inconnu"}
              </span>
              <span className="px-1">•</span>
              <span>{relativeDate}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button isIconOnly variant="light" className="rounded-xl">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </CardFooter>

        <div className="flex items-center gap-3 p-4 pt-0">
          <Button className="flex-1 rounded-xl">Aperçu</Button>
          <Button color="primary" className="flex-1 rounded-xl">
            Télécharger
          </Button>
        </div>
      </div>

      {/* Mobile layout (< md): compact row, keep same elements */}
      <div className="md:hidden">
        <div className="flex items-start gap-3 p-3">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
            <Image
              src={thumbnailUrl}
              alt="miniature du document"
              fill
              className="z-0 object-cover"
              sizes="64px"
            />
            <div className="absolute top-1 left-1 z-20">
              <Chip className="pointer-events-none rounded-full bg-red-500 px-1.5 py-0.5 text-[10px] leading-none font-semibold text-white">
                {fileLabel}
              </Chip>
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <h4 className="line-clamp-2 text-base leading-tight font-semibold">
              {title}
            </h4>
            <div className="mt-1 flex flex-wrap items-center gap-1.5">
              <Chip
                size="sm"
                className="bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200"
              >
                {levelLabel}
              </Chip>
              <Chip
                size="sm"
                className="bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-200"
              >
                {subjectLabel}
              </Chip>
              <Chip
                size="sm"
                className="bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-200"
              >
                {resourceTypeLabel}
              </Chip>
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-700 dark:text-gray-300">
              {typeof durationMinutes === "number" ? (
                <div className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{durationMinutes} min</span>
                </div>
              ) : null}
              {languageLabel ? (
                <div className="flex items-center gap-1">
                  <Globe className="h-3.5 w-3.5" />
                  <span>{languageLabel}</span>
                </div>
              ) : null}
              <div className="flex items-center gap-1">
                <FileText className="h-3.5 w-3.5" />
                <span>
                  {filesCount} fichier{filesCount > 1 ? "s" : ""}
                </span>
              </div>
            </div>

            <div className="mt-2 flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
              <Avatar radius="full" className="h-5 w-5" />
              <span className="truncate font-medium">
                {authorName ?? "Auteur inconnu"}
              </span>
              <span className="opacity-70">• {relativeDate}</span>
            </div>
          </div>

          <div className="self-center">
            <Button isIconOnly color="primary" className="rounded-xl">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
