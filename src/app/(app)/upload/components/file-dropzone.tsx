"use client";

import { useCallback, useMemo, useState } from "react";
import { useDropzone, type FileRejection } from "react-dropzone";
import { Button, Chip } from "~/lib/components/ui";
import { FiUploadCloud, FiCheck, FiAlertTriangle, FiX } from "react-icons/fi";

type UploadFile = {
  id: string;
  file: File;
};

const ACCEPTED_TYPES = {
  "application/pdf": [".pdf"],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
    ".docx",
  ],
  "image/*": [],
} as const;

const ALLOWED_EXT = Object.values(ACCEPTED_TYPES)
  .flat()
  .filter(Boolean)
  .map((ext) => ext.replace(".", "").toUpperCase())
  .join(", ");

export default function FileDropzone() {
  const [files, setFiles] = useState<UploadFile[]>([]);
  const [rejections, setRejections] = useState<FileRejection[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[], rejected: FileRejection[]) => {
      setRejections(rejected);
      if (acceptedFiles.length) {
        setFiles((prev) => {
          const existing = new Set(
            prev.map((item) => `${item.file.name}-${item.file.size}`),
          );
          const incoming = acceptedFiles
            .filter((file) => !existing.has(`${file.name}-${file.size}`))
            .map((file) => ({
              id: crypto.randomUUID(),
              file,
            }));
          return [...prev, ...incoming];
        });
      }
    },
    [],
  );

  const handleRemove = useCallback((id: string) => {
    setFiles((prev) => prev.filter((file) => file.id !== id));
  }, []);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    accept: ACCEPTED_TYPES,
    multiple: true,
    onDrop,
    maxSize: 25 * 1024 * 1024, // 25MB per file
  });

  const dropzoneClasses = useMemo(() => {
    const base =
      "rounded-2xl border-2 border-dashed transition-colors px-6 py-8 text-center flex flex-col items-center justify-center gap-3";
    if (isDragActive) {
      return `${base} border-primary bg-primary/5`;
    }
    return `${base} border-foreground/20 bg-background`;
  }, [isDragActive]);

  return (
    <div className="space-y-4">
      <div {...getRootProps({ className: dropzoneClasses })}>
        <input {...getInputProps()} />
        <FiUploadCloud className="text-primary h-10 w-10" aria-hidden />
        <div>
          <p className="text-sm font-medium">
            {isDragActive
              ? "Déposez vos fichiers ici"
              : "Glissez-déposez vos fichiers ou cliquez pour sélectionner"}
          </p>
          <p className="text-foreground/60 mt-1 text-xs">
            PDF, DOCX ou images • Taille maximale 25&nbsp;Mo par fichier
          </p>
        </div>
        <Button
          type="button"
          color="primary"
          variant="flat"
          onClick={() => open()}
          className="mt-2"
        >
          Choisir des fichiers
        </Button>
      </div>

      {files.length > 0 && (
        <div className="bg-foreground/5 rounded-2xl px-4 py-3">
          <p className="mb-2 flex items-center gap-2 text-sm font-semibold">
            <FiCheck className="text-success h-4 w-4" aria-hidden />
            Fichiers sélectionnés ({files.length})
          </p>
          <ul className="space-y-2">
            {files.map(({ id, file }) => (
              <li
                key={id}
                className="bg-background flex items-center justify-between gap-3 rounded-lg px-3 py-2 shadow-sm"
              >
                <Chip color="primary" variant="flat">
                  {file.name}
                </Chip>
                <Button
                  type="button"
                  size="sm"
                  variant="light"
                  className="text-danger"
                  onClick={() => handleRemove(id)}
                  aria-label={`Retirer ${file.name}`}
                  startContent={<FiX aria-hidden />}
                >
                  Retirer
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {rejections.length > 0 && (
        <div className="bg-danger/5 rounded-2xl px-4 py-3">
          <p className="text-danger flex items-center gap-2 text-sm font-semibold">
            <FiAlertTriangle className="h-4 w-4" aria-hidden />
            Certains fichiers n&apos;ont pas été importés
          </p>
          <ul className="text-foreground/70 mt-2 space-y-1 text-xs">
            {rejections.map(({ file, errors }) => (
              <li key={`${file.name}-${file.size}`}>
                {file.name} • {errors.map((err) => err.message).join(", ")}
              </li>
            ))}
          </ul>
          <p className="text-foreground/60 mt-2 text-xs">
            Extensions autorisées : {ALLOWED_EXT || "PDF, DOCX, Images"}
          </p>
        </div>
      )}
    </div>
  );
}
