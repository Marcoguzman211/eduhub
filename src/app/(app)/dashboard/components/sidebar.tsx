import { Card, Divider, Link } from "~/lib/components/ui";

const NAV_ITEMS = [
  { href: "/dashboard/my-resources", label: "Mes ressources" },
  { href: "/dashboard/saved", label: "Sauvegardé" },
  { href: "/dashboard/profile", label: "Profil" },
  { href: "/dashboard/account", label: "Mon Compte" },
];

export default function Sidebar() {
  return (
    <Card className="rounded-2xl p-3 shadow-sm">
      <div className="px-3 py-2">
        <h2 className="text-muted-foreground text-sm font-semibold tracking-wide uppercase">
          Dashboard
        </h2>
      </div>
      <Divider className="my-2" />
      <nav className="flex flex-col gap-1">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-foreground/80 hover:bg-accent hover:text-accent-foreground rounded-xl px-3 py-2 text-sm transition"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </Card>
  );
}
