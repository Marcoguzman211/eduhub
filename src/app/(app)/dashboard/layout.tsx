import type { ReactNode } from "react";
import Sidebar from "./components/sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[260px_1fr]">
        <aside className="md:sticky md:top-0 md:h-svh">
          <Sidebar />
        </aside>
        <main>{children}</main>
      </div>
    </div>
  );
}
