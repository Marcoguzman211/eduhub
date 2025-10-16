"use client";

import { useMemo, useState } from "react";
import { Button } from "@heroui/button";
import Image from "next/image";

import BaseInfoSection from "./components/base-info";
import DescriptionSection from "./components/description-section";
import LicenseSection from "./components/license-section";
import FileDropzone from "./components/file-dropzone";
import type { UploadFile } from "./types";

export default function UploadPageClient() {
  const [selectedFiles, setSelectedFiles] = useState<UploadFile[]>([]);

  const previewableFile: UploadFile | undefined = useMemo(() => {
    return selectedFiles.find((candidate): candidate is UploadFile => {
      const mime = candidate.file.type;
      return mime === "application/pdf" || mime.startsWith("image/");
    });
  }, [selectedFiles]);

  const mimeType = previewableFile?.file.type ?? "";
  const isImage = mimeType.startsWith("image/");
  const isPdf = mimeType === "application/pdf";
  const previewSrc = useMemo<string | null>(() => {
    if (!previewableFile) {
      return null;
    }
    const previewUrl = previewableFile.previewUrl;
    if (!previewUrl) {
      return null;
    }
    return isPdf
      ? `${previewUrl}#page=1&view=FitH&scrollbar=0&toolbar=0`
      : previewUrl;
  }, [isPdf, previewableFile]);

  return (
    <div className="min-h-screen">
      <main className="mx-auto grid max-w-screen-xl gap-6 px-4 py-6 md:grid-cols-12">
        <section className="space-y-6 md:col-span-8 lg:col-span-9">
          <FileDropzone onFilesChange={setSelectedFiles} />

          <section>
            <BaseInfoSection />
          </section>

          <section>
            <DescriptionSection />
          </section>

          <section>
            <LicenseSection />
          </section>

          <div className="hidden justify-end gap-3 md:flex">
            <Button variant="flat">Enregistrer</Button>
            <Button color="primary">Publier</Button>
          </div>
        </section>

        <aside className="space-y-6 md:sticky md:top-24 md:col-span-4 md:self-start lg:col-span-3">
          <h2 className="text-base font-semibold">Aperçu</h2>
          {previewableFile && previewSrc ? (
            <div className="space-y-3">
              <div className="bg-foreground/5 relative aspect-[3/4] w-full overflow-hidden rounded-xl border">
                {isImage ? (
                  <Image
                    src={previewSrc}
                    alt={`Prévisualisation de ${previewableFile.file.name}`}
                    fill
                    className="object-cover"
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                ) : (
                  <iframe
                    src={previewSrc}
                    className="h-full w-full"
                    title={`Prévisualisation PDF ${previewableFile.file.name}`}
                  />
                )}
              </div>
              <p
                className="truncate text-sm font-medium"
                title={previewableFile.file.name}
              >
                {previewableFile.file.name}
              </p>
              <p className="text-foreground/60 text-xs">
                Seul le premier aperçu compatible est affiché.
              </p>
            </div>
          ) : (
            <p className="text-foreground/70 text-sm">
              Ajoutez un PDF ou une image pour voir un aperçu. Les fichiers DOCX
              n&apos;ont pas de prévisualisation.
            </p>
          )}
          <p className="text-foreground/60 text-sm">
            Résumé de la ressource (tags, durée, langue, niveaux) lorsque le
            formulaire sera complété.
          </p>
        </aside>
      </main>
      <div className="bg-background/95 fixed inset-x-0 bottom-0 border-t p-4 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-screen-xl items-center justify-end gap-3 px-2">
          <Button variant="flat" size="sm">
            Enregistrer
          </Button>
          <Button color="primary" size="sm">
            Publier
          </Button>
        </div>
      </div>
      <div className="h-20 md:hidden" />
    </div>
  );
}
