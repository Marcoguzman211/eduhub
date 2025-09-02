"use client";

import React from "react";
import { Tabs, Tab, Button, Input, Divider, Spacer } from "~/lib/components/ui";

import type { ComponentProps } from "react";
type FormAction = ComponentProps<"form">["action"];

type Props = {
  onEmailAction: FormAction;
  onGoogleAction: FormAction;
  onDiscordAction: FormAction;
};

export default function AuthTabs({
  onEmailAction,
  onGoogleAction,
  onDiscordAction,
}: Props) {
  return (
    <Tabs
      aria-label="Authentification"
      defaultSelectedKey="signin"
      classNames={{
        tabList: "w-full flex",
        tab: "flex-1",
      }}
    >
      <Tab key="signin" title="Se connecter">
        <form action={onEmailAction} className="grid gap-4 pt-4" noValidate>
          <Input
            name="email"
            type="email"
            label="Email"
            placeholder="vous@ecole.fr"
            required
            autoComplete="email"
          />
          <Button type="submit" className="w-full">
            Recevoir le lien magique
          </Button>
        </form>

        <Spacer y={4} />
        <Divider />
        <Spacer y={4} />

        <div className="grid gap-3">
          <form action={onGoogleAction}>
            <Button
              type="submit"
              variant="flat"
              className="w-full"
              aria-label="Se connecter avec Google"
            >
              Continuer avec Google
            </Button>
          </form>
          <form action={onDiscordAction}>
            <Button
              type="submit"
              variant="flat"
              className="w-full"
              aria-label="Se connecter avec Discord"
            >
              Continuer avec Discord
            </Button>
          </form>
        </div>
      </Tab>

      <Tab key="signup" title="Créer un compte">
        {/* Signup is implicit: same email flow */}
        <form action={onEmailAction} className="grid gap-4 pt-4" noValidate>
          <Input
            name="email"
            type="email"
            label="Email"
            placeholder="vous@ecole.fr"
            required
            autoComplete="email"
          />
          <Button type="submit" className="w-full">
            Créer mon compte
          </Button>
          <p className="text-foreground/60 text-xs">
            Vous recevrez un lien magique pour confirmer votre adresse.
          </p>
        </form>

        <Spacer y={4} />
        <Divider />
        <Spacer y={4} />

        <div className="grid gap-3">
          <form action={onGoogleAction}>
            <Button type="submit" variant="flat" className="w-full">
              Créer avec Google
            </Button>
          </form>
          <form action={onDiscordAction}>
            <Button type="submit" variant="flat" className="w-full">
              Créer avec Discord
            </Button>
          </form>
        </div>
      </Tab>
    </Tabs>
  );
}
