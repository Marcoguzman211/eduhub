import { signIn } from "~/server/auth";
import { safeCallbackUrl } from "~/server/utils/auth-redirect";
import { Card, CardHeader, CardBody, CardFooter } from "~/lib/components/ui";
import Link from "next/link";
import AuthTabs from "./tabs-client";

type Search = { callbackUrl?: string | string[] };
type Props = { searchParams?: Promise<Search> };

export const metadata = { title: "Se connecter - TeacherHub" };

export default async function SignInPage({ searchParams }: Props) {
  const sp = await searchParams;
  const raw = Array.isArray(sp?.callbackUrl)
    ? sp?.callbackUrl[0]
    : sp?.callbackUrl;
  const callbackUrl = safeCallbackUrl(raw, "/");

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
      <CardHeader className="text-center">
        <div className="bg-foreground/5 mx-auto grid h-12 w-12 place-items-center rounded-xl">
          🎓
        </div>
        <h1 className="mt-3 text-2xl font-semibold">TeacherHub</h1>
        <p className="text-foreground/60 text-sm">
          Plateforme pour enseignants de français
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
          <Link href="/cgu">CGU</Link>
          <span>•</span>
          <Link href="/confidentialite">Confidentialité</Link>
        </div>
        <div>🇫🇷 FR</div>
      </CardFooter>
    </Card>
  );
}
