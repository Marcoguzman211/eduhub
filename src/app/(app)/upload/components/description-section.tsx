"use client";

import { useFormContext } from "react-hook-form";
import { Textarea } from "~/lib/components/ui";
import type { UploadResourceFormValues } from "../schema";

export default function DescriptionSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext<UploadResourceFormValues>();

  return (
    <section className="bg-background p-6">
      <h2 className="text-xl font-semibold">Description et objectifs</h2>

      <div className="mt-6 space-y-6">
        <div>
          <label htmlFor="description" className="block text-sm font-medium">
            Description <span className="text-destructive">*</span>
          </label>
          <Textarea
            id="description"
            minRows={5}
            placeholder="Décrivez votre ressource..."
            className="mt-2"
            isInvalid={Boolean(errors.description)}
            errorMessage={errors.description?.message}
            {...register("description")}
          />
          <p className="text-muted-foreground mt-2 text-xs">
            Minimum 30 caractères. Markdown supporté.
          </p>
        </div>
        <div>
          <label htmlFor="objective" className="block text-sm font-medium">
            Objectif d&apos;apprentissage
          </label>
          <Textarea
            id="objective"
            minRows={3}
            placeholder="Décrivez un objectif principal (optionnel)..."
            className="mt-2"
            isInvalid={Boolean(errors.objective)}
            errorMessage={errors.objective?.message}
            {...register("objective")}
          />
          <p className="text-muted-foreground mt-2 text-xs">
            Donnez des indications claires sur ce que vos élèves apprendront.
          </p>
        </div>
      </div>
    </section>
  );
}
