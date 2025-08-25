import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

type Section = { title: string; links: { label: string; href: string }[] };

const sections: Section[] = [
  {
    title: "Ressources",
    links: [
      { label: "Mathématiques", href: "/ressources/mathematiques" },
      { label: "Français", href: "/ressources/francais" },
      { label: "Sciences", href: "/ressources/sciences" },
      { label: "Histoire", href: "/ressources/histoire" },
    ],
  },
  {
    title: "Communauté",
    links: [
      { label: "Discussions", href: "/communaute/discussions" },
      { label: "Événements", href: "/communaute/evenements" },
      { label: "Blog", href: "/blog" },
      { label: "Newsletter", href: "/newsletter" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Conditions d'utilisation", href: "/legal/conditions" },
      { label: "Confidentialité", href: "/legal/confidentialite" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const resources = sections[0]!; // First section is "Ressources"

  return (
    <footer
      className="bg-slate-900 text-slate-300"
      aria-labelledby="footer-heading"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Logo + description (always visible) */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="inline-block h-8 w-8 rounded bg-emerald-500" />
              <span className="text-lg font-semibold text-white">EduHub</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-slate-400">
              La plateforme collaborative pour les enseignants français.
            </p>
          </div>

          {/* --- MOBILE: only the Ressources section --- */}
          <nav aria-label="Ressources" className="md:hidden">
            <h3 className="text-lg font-semibold text-white">Ressources</h3>
            <ul className="mt-4 space-y-3">
              {resources.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="rounded text-base text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* --- DESKTOP: all sections --- */}
          {sections.map((sec) => (
            <nav
              key={sec.title}
              aria-label={sec.title}
              className="hidden md:block"
            >
              <h3 className="text-sm font-semibold text-white">{sec.title}</h3>
              <ul className="mt-4 space-y-2">
                {sec.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="rounded text-sm text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* --- MOBILE bottom: icons centered, divider, copyright under --- */}
        <div className="mt-10 md:hidden">
          <ul className="flex items-center justify-center gap-6">
            <li>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground text-background rounded-full p-2 transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <FaFacebookF className="h-5 w-5" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground text-background rounded-full p-2 transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <FaTwitter className="h-5 w-5" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground text-background rounded-full p-2 transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <FaInstagram className="h-5 w-5" aria-hidden="true" />
              </a>
            </li>
          </ul>

          <div className="my-8 h-px w-full bg-white/10" aria-hidden="true" />

          <p className="text-center text-xs text-slate-400">
            © {year} EduShare. Tous droits réservés.
          </p>
        </div>

        {/* --- DESKTOP bottom: single row with border on top --- */}
        <div className="mt-10 hidden items-center justify-between border-t border-white/10 pt-6 md:flex">
          <p className="text-xs text-slate-400">
            © {year} EduShare. Tous droits réservés.
          </p>
          <ul className="flex items-center gap-4">
            <li>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground text-background rounded-full p-2 transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <FaFacebookF className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://x.com"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground text-background rounded-full p-2 transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <FaTwitter className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground text-background rounded-full p-2 transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <FaInstagram className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
