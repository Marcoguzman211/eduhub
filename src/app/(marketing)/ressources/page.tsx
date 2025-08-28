import RessourcesFilter from "./components/filter";
import { ResourceCard } from "./components/ressource-card";
import ResourceToolbar from "./components/toolbar";
import { items } from "./mock-data/ressources-list-data";

export default function ResourcesPage() {
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
            {items.map((item, i) => (
              <ResourceCard key={i} {...item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
