import ActivityCard from "~/lib/components/common/activity-card";

export default function CommunityActivitySection() {
  return (
    <div>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Activité de la communauté
          </h2>
          <p className="text-foreground/70 mt-3 text-base">
            Découvrez les dernières contributions de notre communauté
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <ActivityCard
            name="Marie Dubois"
            role="Professeure des écoles"
            avatarUrl="/avatars/marie.jpg"
            description="A partagé une nouvelle ressource en mathématiques pour les CE1"
            timeAgo="Il y a 2 heures"
          />
          <ActivityCard
            name="Pierre Martin"
            role="Enseignant CM2"
            avatarUrl="/avatars/pierre.jpg"
            description='A commenté la ressource "Histoire de France" de Sophie'
            timeAgo="Il y a 4 heures"
          />
          <ActivityCard
            name="Julie Leroy"
            role="Professeure CP"
            avatarUrl="/avatars/julie.jpg"
            description="A créé une nouvelle discussion sur l'apprentissage de la lecture"
            timeAgo="Il y a 6 heures"
          />
        </div>
      </section>
    </div>
  );
}
