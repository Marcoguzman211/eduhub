import type { ReactNode } from "react";
import { auth } from "~/server/auth";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();
  if (!session?.user) {
    redirect("/signin");
  }
  return <>{children}</>;
}
