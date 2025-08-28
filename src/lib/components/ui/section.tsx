import type { ComponentProps } from "react";

import { cn } from "~/lib/cn";

export type SectionType = ComponentProps<"div"> & {
  rounded?: "lg" | "2xl";
};

export function Section({ className, rounded = "2xl", ...rest }: SectionType) {
  return (
    <div
      className={cn(
        "overflow-clip overflow-x-auto rounded-2xl border-1 p-4",
        {
          "rounded-lg": rounded === "lg",
          "rounded-2xl": rounded === "2xl",
        },
        className,
      )}
      {...rest}
    />
  );
}
