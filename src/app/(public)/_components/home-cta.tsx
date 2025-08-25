import { Button } from "~/lib/components/ui";

export default function HomeCta() {
  return (
    <div className="bg-muted bg-primary flex flex-col items-center gap-6 rounded-2xl px-4 py-16 text-center shadow-sm transition-shadow hover:shadow-md sm:px-6 lg:px-8">
      <h3 className="text-4xl font-bold text-white">
        Partagez vos idées, inspirez vos collègues
      </h3>
      <p className="text-xl text-white/90">
        Rejoignez plus de 5000 enseignants qui collaborent déjà sur EduHub
      </p>
      <Button as="a" href="/api/auth/signin">
        Créer mon compte gratuitement
      </Button>
    </div>
  );
}
