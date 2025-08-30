import { signOut } from "../../../server/auth";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Spacer,
} from "../../../lib/components/ui";
import Link from "next/link";

export const metadata = { title: "Se déconnecter - TeacherHub" };

export default function SignOutPage() {
  async function doSignOut() {
    "use server";
    // default redirect is homepage; change if needed
    await signOut({ redirectTo: "/" });
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <h1 className="text-xl font-semibold">Se déconnecter</h1>
        <p className="text-foreground/60 text-sm">
          Êtes-vous sûr de vouloir vous déconnecter ?
        </p>
      </CardHeader>
      <CardBody>
        <form action={doSignOut} className="grid gap-3">
          <Button type="submit" color="danger" className="w-full">
            Se déconnecter
          </Button>
        </form>
        <Spacer y={2} />
        <Link
          href="/"
          className="text-foreground/70 block text-center text-sm underline"
        >
          Annuler et revenir à l’accueil
        </Link>
      </CardBody>
      <CardFooter />
    </Card>
  );
}
