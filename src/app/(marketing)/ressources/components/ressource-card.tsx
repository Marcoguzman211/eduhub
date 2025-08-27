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
  LuStar as Star,
  LuDownload as Download,
  LuClock as Clock,
  LuBookmark as Bookmark,
  LuShare2 as Share2,
} from "react-icons/lu";
import type { FC } from "react";

export type ResourceCardProps = {
  title: string;
  subject: string;
  level: string;
  rating: number;
  reviewsCount: number;
  downloads: number;
  durationMin: number;
  author: string;
  postedAgo: string;
  fileType: "PDF" | "DOCX" | "PPTX";
  thumbnailUrl: string;
};

export const ResourceCard: FC<ResourceCardProps> = (props) => {
  const {
    title,
    subject,
    level,
    rating,
    reviewsCount,
    downloads,
    durationMin,
    author,
    postedAgo,
    fileType,
    thumbnailUrl,
  } = props;

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
              {fileType}
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
              {subject}
            </Chip>
            <Chip
              size="sm"
              className="bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-200"
            >
              {level}
            </Chip>
          </div>
        </CardHeader>

        <CardBody className="p-4 pt-0">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-current" />
              <span className="font-medium">{rating.toFixed(1)}</span>
              <span className="opacity-70">({reviewsCount})</span>
            </div>
            <div className="flex items-center gap-1">
              <Download className="h-4 w-4" />
              <span>{downloads}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{durationMin} min</span>
            </div>
          </div>
        </CardBody>

        <CardFooter className="flex items-center justify-between gap-3 p-4 pt-0">
          <div className="flex items-center gap-2">
            <Avatar radius="full" className="h-6 w-6" />
            <div className="text-xs text-gray-600 dark:text-gray-300">
              <span className="font-medium">{author}</span>
              <span className="px-1">•</span>
              <span>{postedAgo}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button isIconOnly variant="light" className="rounded-xl">
              <Bookmark className="h-5 w-5" />
            </Button>
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
                {fileType}
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
                {level}
              </Chip>
              <Chip
                size="sm"
                className="bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-200"
              >
                {subject}
              </Chip>
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-current" />
                <span className="font-medium">{rating.toFixed(1)}</span>
                <span className="opacity-70">({reviewsCount})</span>
              </div>
              <div className="flex items-center gap-1">
                <Download className="h-3.5 w-3.5" />
                <span>{downloads}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                <span>{durationMin} min</span>
              </div>
            </div>

            <div className="mt-2 flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
              <Avatar radius="full" className="h-5 w-5" />
              <span className="truncate font-medium">{author}</span>
              <span className="opacity-70">• {postedAgo}</span>
            </div>
          </div>

          <div className="self-center">
            <Button isIconOnly color="primary" className="rounded-xl">
              <Download className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
