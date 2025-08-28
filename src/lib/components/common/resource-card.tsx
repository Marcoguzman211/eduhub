"use client";

import { Card, CardBody, Chip } from "~/lib/components/ui";
import Image from "next/image";
import { cn } from "~/lib/cn";

type RessourceCardProps = {
  title: string;
  description: string;
  category: string;
  categoryColor?: "primary" | "secondary" | "success" | "warning";
  image: string;
};

export default function RessourceCard({
  title,
  description,
  category,
  categoryColor = "primary",
  image,
}: RessourceCardProps) {
  return (
    <Card
      shadow="sm"
      radius="lg"
      className={cn(
        "border-default-200 border transition-shadow hover:shadow-md",
        "p-3 lg:p-0",
      )}
    >
      <div className="flex items-start gap-4 lg:block">
        <div className="shrink-0 lg:shrink">
          <div className="relative h-24 w-24 overflow-hidden rounded-xl lg:h-48 lg:w-full lg:rounded-t-xl">
            <Image
              src={image}
              alt=""
              fill
              sizes="(min-width:1024px) 33vw, 96px"
              className="object-cover"
            />
          </div>
        </div>
        <CardBody className="p-0 lg:p-6">
          <Chip
            color={categoryColor}
            size="sm"
            variant="flat"
            radius="full"
            className="mb-2"
          >
            {category}
          </Chip>

          <h3 className="text-lg leading-snug font-semibold lg:text-xl">
            {title}
          </h3>
          <p className="text-foreground/70 mt-1 text-sm lg:text-base">
            {description}
          </p>
        </CardBody>
      </div>
    </Card>
  );
}
