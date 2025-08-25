import RessourceCard from "~/lib/components/common/resource-card";

type Ressource = {
  id: string;
  title: string;
  description: string;
  category: "Mathématiques" | "Français" | "Sciences";
  image: string;
};

const ITEMS: Ressource[] = [
  {
    id: "geo-ce2",
    title: "Exercices de géométrie CE2",
    description:
      "Une collection d'exercices interactifs pour apprendre les formes géométriques de base.",
    category: "Mathématiques",
    image: "/geom-ce2.png",
  },
  {
    id: "lecture-cp",
    title: "Lecture et compréhension CP",
    description:
      "Fiches de lecture progressive pour développer la compréhension écrite.",
    category: "Français",
    image: "/lecture-cp.png",
  },
  {
    id: "vivant-cm1",
    title: "Découverte du vivant CM1",
    description:
      "Activités d'observation et d'expérimentation sur le monde vivant.",
    category: "Sciences",
    image: "/vivant-cm1.png",
  },
];

export default function PopularRessources() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Titre centré desktop, gauche mobile comme dans ta maquette */}
      <header className="mb-10 text-center md:mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ressources populaires
        </h2>
        <p className="text-foreground/70 mt-3 text-base">
          Découvrez les ressources les plus appréciées par la communauté
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {ITEMS.map((r) => (
          <RessourceCard key={r.id} {...r} />
        ))}
      </div>
    </section>
  );
}
