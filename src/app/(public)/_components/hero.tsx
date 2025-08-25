import Image from "next/image";
import Link from "next/link";
import { Button } from "~/lib/components/ui";

export default function Hero() {
  return (
    <section
      className="relative px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
        <div className="space-y-6 md:col-span-7">
          <h1
            id="hero-heading"
            className="text-foreground text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Partagez et découvrez des ressources pédagogiques pour vos classes
          </h1>

          <p className="text-foreground/70 text-base leading-relaxed sm:text-lg">
            Rejoignez une communauté de professeurs passionnés qui partagent
            leurs meilleures ressources éducatives et collaborent pour enrichir
            l&apos;enseignement.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              as={Link}
              href="/signup"
              color="primary"
              variant="solid"
              size="lg"
              className="font-medium"
            >
              Commencer gratuitement
            </Button>

            <Button
              as={Link}
              href="/ressources"
              variant="bordered"
              size="lg"
              className="font-medium"
            >
              Découvrir les ressources
            </Button>
          </div>
        </div>
        <div className="order-last md:order-none md:col-span-5">
          <div className="relative mx-auto max-w-[620px] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/hero.png"
              alt="Trois enseignantes collaborent autour de ressources pédagogiques."
              width={1240}
              height={880}
              priority
              sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
