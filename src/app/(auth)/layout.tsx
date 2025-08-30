import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-[75svh] flex-1 place-items-center px-4 py-4">
      {children}
    </div>
  );
}
