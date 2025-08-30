import { signIn } from "~/server/auth";
import { Card, CardHeader, CardBody, CardFooter } from "~/lib/components/ui";
import Link from "next/link";
import AuthTabs from "./tabs-client";

export const metadata = { title: "Se connecter - TeacherHub" };

export default async function SignInPage() {
  const callbackUrl = "/";

  // --- server actions (no client JS needed) ---
  async function signInWithEmail(formData: FormData) {
    "use server";
    const email = (formData.get("email") as string | null)?.trim();
    if (!email) return;
    await signIn("resend", { email, redirectTo: callbackUrl });
  }
  async function signInGoogle() {
    "use server";
    await signIn("google", { redirectTo: callbackUrl });
  }
  async function signInDiscord() {
    "use server";
    await signIn("discord", { redirectTo: callbackUrl });
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-col gap-4 text-center">
        <div>
          <span className="inline-block h-8 w-8 rounded bg-emerald-500" />
          <h1 className="mt-3 text-2xl font-semibold">EduHub</h1>
        </div>
        <p className="text-foreground/60 text-sm">
          Plateforme pour enseignants en France
        </p>
      </CardHeader>

      <CardBody>
        {/* pass server actions into a small client component that renders NextUI Tabs */}
        <AuthTabs
          onEmail={signInWithEmail}
          onGoogle={signInGoogle}
          onDiscord={signInDiscord}
        />
      </CardBody>

      <CardFooter className="text-foreground/60 flex justify-between text-xs">
        <div className="space-x-3">
          <Link href="/#">CGU</Link>
          <span>•</span>
          <Link href="/#">Confidentialité</Link>
        </div>
        <div>🇫🇷 FR</div>
      </CardFooter>
    </Card>
  );
}
