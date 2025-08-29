"use client";

import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Button,
} from "~/lib/components/ui";
import type { RouterOutputs } from "~/trpc/react";
import { NavbarItem } from "~/lib/components/ui";

type Session = RouterOutputs["session"]["getSession"] | null;

export function NavShell({ session }: { session: Session }) {
  return (
    <Navbar maxWidth="full">
      <NavbarBrand>
        <Link href="/" className="inline-flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded bg-emerald-500" />
          <span className="text-lg font-semibold">EduHub</span>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/ressources">
            Ressources
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link aria-current="page" color="primary" href="/upload">
            Publier
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/dashboard/my-resources">
            Mes ressources
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        {session ? (
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
              <DropdownItem key="settings">
                <Link href="/dashboard">Configurations</Link>
              </DropdownItem>
              <DropdownItem key="my-profile">
                <Link href="/dashboard/profile">Mon profil</Link>
              </DropdownItem>
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
