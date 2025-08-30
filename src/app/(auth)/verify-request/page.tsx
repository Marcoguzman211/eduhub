import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "~/lib/components/ui";
import Link from "next/link";

export const metadata = { title: "Vérifiez votre email - TeacherHub" };

export default function VerifyRequestPage() {
  return (
    <Card className="w-full max-w-md text-center">
      <CardHeader className="flex flex-col gap-4">
        <div className="bg-foreground/5 mx-auto grid h-12 w-12 place-items-center rounded-xl">
          📩
        </div>
        <h1 className="mt-3 text-2xl font-semibold">Vérifiez vos emails</h1>
        <p className="text-foreground/60 text-sm">
          Nous avons envoyé un lien de connexion à votre adresse email.
        </p>
      </CardHeader>

      <CardBody className="space-y-4">
        <p className="text-foreground/60 text-sm">
          Cliquez sur le lien dans votre boîte de réception pour continuer. Le
          lien peut expirer après quelques minutes. Pensez à vérifier vos
          courriers indésirables (SPAM).
        </p>
        <Link href="/signin">
          <Button className="w-full" variant="flat">
            Retour à la connexion
          </Button>
        </Link>
      </CardBody>

      <CardFooter className="text-foreground/60 text-xs">
        Eduhub • La plateforme pour les enseignants en France
      </CardFooter>
    </Card>
  );
}
