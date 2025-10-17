import { z } from "zod";

import {
  resourceLevels,
  resourceLicenses,
  resourceSubjects,
  resourceTypes,
  resourceLanguages,
  type ResourceFileMetadata,
} from "~/shared/resource";

const fileMetadataSchema = z.object({
  name: z.string().min(1),
  size: z
    .number()
    .int()
    .positive()
    .max(25 * 1024 * 1024),
  type: z.string(),
}) satisfies z.ZodType<ResourceFileMetadata>;

const durationSchema = z
  .union([z.number(), z.string(), z.null(), z.undefined()])
  .transform((value) => {
    if (typeof value === "number") return value;
    if (value === null || value === undefined) return null;
    const trimmed = value.toString().trim();
    if (!trimmed) return null;
    const parsed = Number.parseInt(trimmed, 10);
    if (Number.isNaN(parsed)) {
      return NaN;
    }
    return parsed;
  })
  .refine((value) => value === null || (Number.isInteger(value) && value > 0), {
    message: "La durée doit être un nombre entier positif.",
  })
  .refine((value) => value === null || value <= 600, {
    message: "La durée ne peut pas dépasser 600 minutes.",
  })
  .nullable();

export const uploadResourceSchema = z.object({
  title: z
    .string({ required_error: "Le titre est requis." })
    .trim()
    .min(1, "Le titre est requis.")
    .max(140, "140 caractères maximum."),
  resourceType: z.enum(resourceTypes, {
    errorMap: () => ({ message: "Sélectionnez un type de ressource." }),
  }),
  subject: z.enum(resourceSubjects, {
    errorMap: () => ({ message: "Sélectionnez une matière." }),
  }),
  level: z.enum(resourceLevels, {
    errorMap: () => ({ message: "Sélectionnez un niveau." }),
  }),
  durationMinutes: durationSchema,
  language: z.enum(resourceLanguages, {
    errorMap: () => ({ message: "Sélectionnez une langue." }),
  }),
  description: z
    .string({ required_error: "La description est requise." })
    .trim()
    .min(30, "La description doit comporter au moins 30 caractères."),
  objective: z
    .string()
    .trim()
    .optional()
    .transform((value) => (value === "" ? undefined : value)),
  license: z.enum(resourceLicenses, {
    errorMap: () => ({ message: "Sélectionnez une licence." }),
  }),
  allowComments: z.boolean(),
  allowAdaptations: z.boolean(),
  files: z
    .array(fileMetadataSchema, {
      required_error: "Ajoutez au moins un fichier.",
    })
    .min(1, "Ajoutez au moins un fichier."),
});

export type UploadResourceFormInput = z.input<typeof uploadResourceSchema>;
export type UploadResourceFormValues = z.output<typeof uploadResourceSchema>;
