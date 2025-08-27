"use client";
import { Card, CardBody, Button, Input } from "~/lib/components/ui";
import {
  LuBookmark as Bookmark,
  LuCopy as Copy,
  LuFacebook as Facebook,
  LuTwitter as Twitter,
  LuLinkedin as Linkedin,
} from "react-icons/lu";

export default function RessourceActions() {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardBody className="gap-6">
        <Button
          fullWidth
          color="primary"
          size="lg"
          startContent={<Bookmark className="size-5" aria-hidden="true" />}
          aria-label="Télécharger la ressource"
          className="h-14 font-semibold"
        >
          Télécharger
        </Button>
        <Button
          fullWidth
          color="success"
          variant="solid"
          size="lg"
          startContent={<Bookmark className="size-5" aria-hidden="true" />}
          aria-label="Sauvegarder la ressource"
          className="h-14 font-semibold"
        >
          Sauvegarder
        </Button>

        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold tracking-tight">Partager</h3>
          <Input
            value="https://teachhub.fr/resource/"
            readOnly
            size="lg"
            className="font-mono"
            aria-label="Lien de partage"
            endContent={
              <Button
                isIconOnly
                variant="flat"
                aria-label="Copier le lien"
                className="rounded-xl"
              >
                <Copy className="size-5" aria-hidden="true" />
              </Button>
            }
          />
        </div>
        <div className="flex items-center gap-4 pt-1">
          <Button
            isIconOnly
            variant="flat"
            aria-label="Partager sur Facebook"
            className="rounded-full"
          >
            <Facebook className="size-5" aria-hidden="true" />
          </Button>
          <Button
            isIconOnly
            variant="flat"
            aria-label="Partager sur Twitter"
            className="rounded-full"
          >
            <Twitter className="size-5" aria-hidden="true" />
          </Button>
          <Button
            isIconOnly
            as="a"
            variant="flat"
            aria-label="Partager sur LinkedIn"
            className="rounded-full"
          >
            <Linkedin className="size-5" aria-hidden="true" />
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
