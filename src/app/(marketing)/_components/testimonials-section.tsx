import TestimonialCard from "~/lib/components/common/testimonial-card";

export default function TestimonialsSection() {
  return (
    <div>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ce qu&apos;en pensent nos utilisateurs
          </h2>
          <p className="text-foreground/70 mt-3 text-base">
            Découvrez les témoignages de la communauté
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <TestimonialCard
            name="Julie Leroy"
            role="Professeure CP"
            avatarUrl="/avatars/julie.jpg"
            review="Les outils proposés sont vraiment adaptés à nos besoins. Je recommande vivement cette plateforme."
          />
          <TestimonialCard
            name="Marie Dubois"
            role="Professeure des écoles"
            avatarUrl="/avatars/marie.jpg"
            review="Cette plateforme a transformé ma façon de préparer mes cours. Les ressources sont de"
          />
          <TestimonialCard
            name="Pierre Martin"
            role="Enseignant CM2"
            avatarUrl="/avatars/pierre.jpg"
            review="J'adore la communauté ici ! Les échanges avec d'autres enseignants sont très enrichissants."
          />
        </div>
      </section>
    </div>
  );
}
