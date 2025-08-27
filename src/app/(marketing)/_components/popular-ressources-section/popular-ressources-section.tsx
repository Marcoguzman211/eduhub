import RessourceCard from "~/lib/components/common/resource-card";
import { ITEMS } from "./mocked-ressources";

export type Ressource = {
  id: string;
  title: string;
  description: string;
  category: "Mathématiques" | "Français" | "Sciences";
  image: string;
};

export default function PopularRessourcesSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center md:mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ressources populaires
        </h2>
        <p className="text-foreground/70 mt-3 text-base">
          Découvrez les ressources les plus appréciées par la communauté
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {ITEMS.map((r) => (
          <RessourceCard key={r.id} {...r} />
        ))}
      </div>
    </section>
  );
}
