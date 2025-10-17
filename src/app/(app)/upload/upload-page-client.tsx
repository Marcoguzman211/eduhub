"use client";

import { useCallback, useMemo, useState, useTransition } from "react";
import { Button } from "@heroui/button";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";

import BaseInfoSection from "./components/base-info";
import DescriptionSection from "./components/description-section";
import LicenseSection from "./components/license-section";
import FileDropzone from "./components/file-dropzone";
import type { UploadFile } from "./types";
import {
  type UploadResourceFormInput,
  type UploadResourceFormValues,
  uploadResourceSchema,
} from "./schema";
import { createResourceAction } from "./actions";
import type { ResourceFileMetadata } from "~/shared/resource";

type FormStatus =
  | { type: "success"; message: string }
  | { type: "error"; message: string }
  | null;

const DEFAULT_VALUES: UploadResourceFormInput = {
  title: "",
  resourceType: "fiche",
  subject: "fr",
  level: "cp",
  durationMinutes: null,
  language: "fr",
  description: "",
  objective: "",
  license: "cc-by",
  allowComments: true,
  allowAdaptations: true,
  files: [],
};

export default function UploadPageClient() {
  const formMethods = useForm<UploadResourceFormInput>({
    resolver: zodResolver(uploadResourceSchema),
    defaultValues: DEFAULT_VALUES,
    mode: "onBlur",
  });

  const {
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = formMethods;

  const [selectedFiles, setSelectedFiles] = useState<UploadFile[]>([]);
  const [dropzoneKey, setDropzoneKey] = useState(0);
  const [status, setStatus] = useState<FormStatus>(null);
  const [isPending, startTransition] = useTransition();

  const handleReset = useCallback(() => {
    reset(DEFAULT_VALUES);
    setSelectedFiles([]);
    setDropzoneKey((key) => key + 1);
    setStatus(null);
  }, [reset]);

  const previewableFile: UploadFile | undefined = useMemo(() => {
    return selectedFiles.find((candidate) => {
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

  const handleFilesChange = useCallback(
    (files: UploadFile[]) => {
      setSelectedFiles(files);
      const metadata = files.map(
        ({ file }): ResourceFileMetadata => ({
          name: file.name,
          size: file.size,
          type: file.type,
        }),
      ) satisfies UploadResourceFormInput["files"];
      setValue("files", metadata, { shouldValidate: true, shouldDirty: true });
    },
    [setValue],
  );

  const onSubmit = useCallback(
    (values: UploadResourceFormInput) => {
      setStatus(null);
      startTransition(async () => {
        const parsed: UploadResourceFormValues =
          uploadResourceSchema.parse(values);
        const result = await createResourceAction(parsed);
        if (result.status === "success") {
          setStatus({
            type: "success",
            message: "Ressource enregistrée avec succès.",
          });
          reset(DEFAULT_VALUES);
          setSelectedFiles([]);
          setDropzoneKey((key) => key + 1);
        } else {
          setStatus({ type: "error", message: result.message });
        }
      });
    },
    [reset],
  );

  const submitForm = useCallback(() => {
    void handleSubmit(onSubmit)();
  }, [handleSubmit, onSubmit]);

  const isSubmittingForm = isSubmitting || isPending;

  return (
    <div className="min-h-screen">
      <main className="mx-auto grid max-w-screen-xl gap-6 px-4 py-6 md:grid-cols-12">
        <FormProvider {...formMethods}>
          <form
            id="upload-form"
            className="space-y-6 md:col-span-8 lg:col-span-9"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <FileDropzone
              key={dropzoneKey}
              onFilesChange={handleFilesChange}
              errorMessage={errors.files?.message}
            />

            {status ? (
              <p
                className={`rounded-lg border px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "border-success/30 bg-success/10 text-success"
                    : "border-danger/30 bg-danger/10 text-danger"
                }`}
              >
                {status.message}
              </p>
            ) : null}

            <section>
              <BaseInfoSection />
            </section>

            <section>
              <DescriptionSection />
            </section>

            <section>
              <LicenseSection />
            </section>

            <div className="flex justify-end gap-3">
              <Button
                variant="flat"
                type="button"
                onClick={handleReset}
                disabled={isSubmittingForm}
              >
                Réinitialiser
              </Button>
              <Button
                color="primary"
                type="submit"
                isDisabled={isSubmittingForm}
              >
                {isSubmittingForm ? "Enregistrement..." : "Publier"}
              </Button>
            </div>
          </form>
        </FormProvider>

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
          <Button
            variant="flat"
            size="sm"
            type="button"
            onClick={handleReset}
            disabled={isSubmittingForm}
          >
            Réinitialiser
          </Button>
          <Button
            color="primary"
            size="sm"
            type="button"
            onClick={submitForm}
            isDisabled={isSubmittingForm}
          >
            {isSubmittingForm ? "Enregistrement..." : "Publier"}
          </Button>
        </div>
      </div>
      <div className="h-20 md:hidden" />
    </div>
  );
}
