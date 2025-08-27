"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Avatar,
} from "~/lib/components/ui";

export default function RessourceAuthor() {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader className="pb-2">
        <h3 className="text-lg font-semibold">À propos de l&apos;auteur</h3>
      </CardHeader>

      <CardBody className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Avatar
            src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=80&h=80&fit=crop&crop=faces"
            alt="Photo de Marie Dubois"
            className="size-12"
          />
          <div>
            <p className="font-semibold">Marie Dubois</p>
            <p className="text-default-500 text-sm">Professeure des écoles</p>
          </div>
        </div>

        <p className="text-default-700 text-sm leading-relaxed">
          Passionnée par l&apos;enseignement du français, je crée des ressources
          ludiques pour mes élèves de primaire.
        </p>
      </CardBody>

      <CardFooter className="flex flex-col gap-2">
        <Button variant="bordered" fullWidth>
          Plus de ressources
        </Button>
        <Button variant="flat" fullWidth>
          Contacter
        </Button>
      </CardFooter>
    </Card>
  );
}
