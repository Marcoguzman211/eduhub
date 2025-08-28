"use client";
import { Card, CardHeader, CardBody } from "~/lib/components/ui";
import Image from "next/image";

type TestimonialCardProps = {
  name: string;
  role: string;
  avatarUrl: string;
  review: string;
};

export default function TestimonialCard({
  name,
  role,
  avatarUrl,
  review,
}: TestimonialCardProps) {
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
        <p className="text-foreground text-sm">&quot;{review}&quot;</p>
      </CardBody>
    </Card>
  );
}
