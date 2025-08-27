import RessourcesFilter from "./components/filter";

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
          Search
        </section>

        {/* Results */}
        <section className="flex-2/3 rounded-md bg-gray-100 p-4">
          Results
        </section>
      </main>
    </div>
  );
}
