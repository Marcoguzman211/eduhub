import { Button } from "@heroui/button";
import BaseInfoSection from "./components/base-info";
import DescriptionSection from "./components/description-section";
import LicenseSection from "./components/license-section";

export default function UploadPage() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto grid max-w-screen-xl gap-6 px-4 py-6 md:grid-cols-12">
        <section className="space-y-6 md:col-span-8 lg:col-span-9">
          <header className="rounded-2xl border">
            <div
              aria-label="Zone de dépôt de fichiers"
              className="flex h-28 items-center justify-center rounded-2xl"
              role="region"
            >
              <div className="text-foreground/70 w-full px-6 py-6 text-center text-sm md:text-base">
                <span className="font-medium">Zone de dépôt de fichiers</span>
                <span className="mx-1">•</span> PDF / DOCX / images
              </div>
            </div>
          </header>
          <section>
            <BaseInfoSection />
          </section>

          <section>
            <DescriptionSection />
          </section>

          <section>
            <LicenseSection />
          </section>

          <div className="hidden justify-end gap-3 md:flex">
            <Button variant="flat">Enregistrer</Button>
            <Button color="primary">Publier</Button>
          </div>
        </section>

        <aside className="space-y-6 md:sticky md:top-24 md:col-span-4 md:self-start lg:col-span-3">
          <div className="rounded-2xl border p-4 sm:p-6">
            <h2 className="mb-3 text-base font-semibold">Aperçu</h2>
            <p className="text-foreground/70 text-sm">
              Résumé de la ressource (tags, durée, langue, niveaux) à mesure du
              remplissage.
            </p>
          </div>
        </aside>
      </main>
      <div className="bg-background/95 fixed inset-x-0 bottom-0 border-t p-4 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-screen-xl items-center justify-end gap-3 px-2">
          <Button variant="flat" size="sm">
            Enregistrer
          </Button>
          <Button color="primary" size="sm">
            Publier
          </Button>
        </div>
      </div>
      <div className="h-20 md:hidden" />
    </div>
  );
}
