import RessourcesFilter from "./components/filter";
import { ResourceCard } from "./components/ressource-card";
import ResourceToolbar from "./components/toolbar";
import { db } from "~/server/db";
import {
  toResourceCardProps,
  type ResourceCardProps,
} from "~/shared/resource-card";

async function loadResources(): Promise<ResourceCardProps[]> {
  const resources = await db.query.resources.findMany({
    orderBy: (resource, { desc }) => desc(resource.createdAt),
    with: { author: true },
  });

  return resources.map(toResourceCardProps);
}

export default async function ResourcesPage() {
  const items = await loadResources();

  return (
    <div className="flex flex-col gap-6 p-4 lg:flex-row">
      {/* Filters */}
      <aside className="rounded-md bg-gray-100 p-4 lg:w-1/4">
        <RessourcesFilter />
      </aside>

      <main className="flex flex-1 flex-col gap-6">
        {/* Search */}
        <section className="flex-1/3 rounded-md bg-gray-100 p-4">
          <ResourceToolbar />
        </section>

        {/* Results */}
        <section className="flex-2/3 rounded-md bg-gray-100 p-4">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-4 md:grid-cols-3">
            {items.length === 0 ? (
              <p className="text-center text-sm text-gray-500">
                Aucune ressource pour le moment.
              </p>
            ) : (
              items.map((item) => <ResourceCard key={item.id} {...item} />)
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
