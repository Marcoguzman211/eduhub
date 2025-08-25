"use client";
import { Card, CardHeader, CardBody } from "~/lib/components/ui";
import Image from "next/image";

type ActivityCardProps = {
  name: string;
  role: string;
  avatarUrl: string;
  description: string;
  timeAgo: string;
};

export default function ActivityCard({
  name,
  role,
  avatarUrl,
  description,
  timeAgo,
}: ActivityCardProps) {
  return (
    <Card className="border-foreground/10 rounded-2xl border shadow-sm transition-shadow hover:shadow-md">
      <CardHeader className="flex items-center gap-3">
        <Image
          src={avatarUrl}
          alt={name}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <p className="text-foreground font-medium">{name}</p>
          <p className="text-foreground/60 text-sm">{role}</p>
        </div>
      </CardHeader>
      <CardBody className="space-y-2">
        <p className="text-foreground text-sm">{description}</p>
        <p className="text-foreground/50 text-xs">{timeAgo}</p>
      </CardBody>
    </Card>
  );
}
