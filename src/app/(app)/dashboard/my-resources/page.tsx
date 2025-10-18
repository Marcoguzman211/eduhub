import { ResourceCard } from "~/app/(marketing)/ressources/components/ressource-card";
import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { toResourceCardProps } from "~/shared/resource-card";

export default async function MyResourcesPage() {
  const session = await auth();

  if (!session?.user?.id) {
    return (
      <section className="space-y-3 p-6">
        <h1 className="text-2xl font-semibold">Mes ressources</h1>
        <p className="text-sm text-gray-500">
          Vous devez être connecté pour consulter vos ressources.
        </p>
      </section>
    );
  }

  const resources = await db.query.resources.findMany({
    where: (resource, { eq }) => eq(resource.createdById, session.user.id),
    orderBy: (resource, { desc }) => desc(resource.createdAt),
    with: { author: true },
  });

  const items = resources.map(toResourceCardProps);

  return (
    <section className="space-y-6 p-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">Mes ressources</h1>
        <p className="text-sm text-gray-500">
          Retrouvez toutes les ressources que vous avez publiées.
        </p>
      </header>

      {items.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center text-sm text-gray-500">
          Aucune ressource trouvée pour le moment.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <ResourceCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </section>
  );
}
