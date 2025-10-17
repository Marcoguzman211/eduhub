"use server";

import { type UploadResourceFormValues, uploadResourceSchema } from "./schema";
import { auth } from "~/server/auth";
import { db } from "~/server/db";
import { resources } from "~/server/db/schema";

export type CreateResourceActionResult =
  | { status: "success" }
  | { status: "error"; message: string };

export async function createResourceAction(
  input: UploadResourceFormValues,
): Promise<CreateResourceActionResult> {
  const session = await auth();
  if (!session?.user?.id) {
    return {
      status: "error" as const,
      message: "Vous devez être connecté pour publier une ressource.",
    };
  }

  const parsed = uploadResourceSchema.safeParse(input);
  if (!parsed.success) {
    return {
      status: "error" as const,
      message:
        "Le formulaire contient des erreurs. Merci de vérifier les champs.",
    };
  }

  try {
    await db.insert(resources).values({
      title: parsed.data.title,
      resourceType: parsed.data.resourceType,
      subject: parsed.data.subject,
      level: parsed.data.level,
      durationMinutes: parsed.data.durationMinutes,
      language: parsed.data.language,
      description: parsed.data.description,
      objective: parsed.data.objective ?? null,
      license: parsed.data.license,
      allowComments: parsed.data.allowComments,
      allowAdaptations: parsed.data.allowAdaptations,
      fileMetadata: parsed.data.files,
      createdById: session.user.id,
    });

    return { status: "success" as const };
  } catch (error) {
    console.error("createResourceAction error", error);
    return {
      status: "error" as const,
      message: "Erreur interne lors de l'enregistrement de la ressource.",
    };
  }
}
