"use client";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "~/lib/components/ui";
import { api } from "~/trpc/react";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function MainNavBar() {
  const { data: session, isLoading } = api.session.getSession.useQuery();

  return (
    <Navbar maxWidth="full">
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">EDUHUB</p>
      </NavbarBrand>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/ressources">
            Ressources
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link aria-current="page" color="primary" href="#">
            Publier
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            FAQ
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        {isLoading ? null : session?.user ? (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="primary"
                name={session.user.name ?? "Utilisateur"}
                size="sm"
                src={session.user.image ?? undefined}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Connecté(e) en tant que</p>
                <p className="font-semibold">{session.user.email}</p>
              </DropdownItem>
              <DropdownItem key="settings">Configurations</DropdownItem>
              <DropdownItem key="team_settings">Confidentialité</DropdownItem>
              <DropdownItem key="logout" color="danger">
                <Link href="/api/auth/signout">Se déconnecter</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <Button as="a" href="/api/auth/signin" color="primary">
            Se connecter
          </Button>
        )}
      </NavbarContent>
    </Navbar>
  );
}
