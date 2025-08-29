import { api } from "~/trpc/server";
import { NavShell } from "./nav-shell";

export default async function MainNavBar() {
  const session = await api.session.getSession();
  return <NavShell session={session} />;
}
