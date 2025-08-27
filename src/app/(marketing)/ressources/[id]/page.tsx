import RessourceActions from "./components/ressource-actions";
import RessourceAuthor from "./components/ressource-author";
import RessourceHeader from "./components/ressource-header";
import RessourcePageInfo from "./components/ressource-page-info";

export default function ResourcePage() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto grid max-w-screen-xl gap-6 px-4 py-6 md:grid-cols-12">
        <section className="space-y-6 md:col-span-8 lg:col-span-9">
          <header className="border-b p-4">
            <div className="mx-auto max-w-screen-xl">
              <RessourceHeader />
            </div>
          </header>
          <div className="flex h-96 items-center justify-center bg-gray-200">
            Preview (PDF / DOCX / images)
          </div>
          <RessourcePageInfo />
        </section>
        <aside className="space-y-6 md:sticky md:top-24 md:col-span-4 md:self-start lg:col-span-3">
          <RessourceActions />
          <RessourceAuthor />
        </aside>
      </main>
      <div className="fixed inset-x-0 bottom-0 border-t bg-gray-100 p-4 md:hidden">
        <div className="flex items-center justify-between">
          <span>Ici la barre sticky de téléchargement</span>
          <button className="rounded bg-blue-600 px-3 py-1 text-white">
            Télécharger
          </button>
        </div>
      </div>
      <div className="h-20 md:hidden" />{" "}
      {/* espace pour ne pas cacher le contenu */}
    </div>
  );
}
