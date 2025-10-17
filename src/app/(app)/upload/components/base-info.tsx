"use client";

import { Controller, useFormContext } from "react-hook-form";
import { FiChevronDown } from "react-icons/fi";

import {
  resourceLevels,
  resourceSubjects,
  resourceTypes,
  resourceLanguages,
} from "~/shared/resource";
import { Input, Select, SelectItem } from "~/lib/components/ui";
import type { UploadResourceFormValues } from "../schema";
import type { Selection } from "@react-types/shared";

function selectionToValue(selection: Selection): string {
  if (selection === "all") return "";
  const [first] = Array.from(selection);
  return first?.toString() ?? "";
}

export default function BaseInfoSection() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<UploadResourceFormValues>();

  return (
    <section className="bg-background rounded-2xl p-6">
      <h2 className="text-xl font-semibold">Informations de base</h2>

      <div className="mt-6 space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium">
            Titre <span className="text-destructive">*</span>
          </label>
          <Input
            id="title"
            aria-describedby="title-help"
            placeholder="Titre de votre ressource"
            className="mt-2"
            isInvalid={Boolean(errors.title)}
            errorMessage={errors.title?.message}
            {...register("title")}
          />
          <p id="title-help" className="text-muted-foreground mt-2 text-xs">
            Maximum 140 caractères
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="resourceType" className="block text-sm font-medium">
              Type <span className="text-destructive">*</span>
            </label>
            <Controller
              control={control}
              name="resourceType"
              render={({ field }) => (
                <Select
                  id="resourceType"
                  className="mt-2"
                  selectorIcon={<FiChevronDown aria-hidden />}
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  }
                  onSelectionChange={(keys) =>
                    field.onChange(selectionToValue(keys))
                  }
                  isInvalid={Boolean(errors.resourceType)}
                  errorMessage={errors.resourceType?.message}
                >
                  {resourceTypes.map((type) => (
                    <SelectItem key={type}>
                      {type === "fiche"
                        ? "Fiche"
                        : type === "video"
                          ? "Vidéo"
                          : "Cours"}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium">
              Matière <span className="text-destructive">*</span>
            </label>
            <Controller
              control={control}
              name="subject"
              render={({ field }) => (
                <Select
                  id="subject"
                  className="mt-2"
                  selectorIcon={<FiChevronDown aria-hidden />}
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  }
                  onSelectionChange={(keys) =>
                    field.onChange(selectionToValue(keys))
                  }
                  isInvalid={Boolean(errors.subject)}
                  errorMessage={errors.subject?.message}
                >
                  {resourceSubjects.map((subject) => (
                    <SelectItem key={subject}>
                      {subject === "fr"
                        ? "Français"
                        : subject === "maths"
                          ? "Mathématiques"
                          : "Histoire"}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <label htmlFor="level" className="block text-sm font-medium">
              Niveau <span className="text-destructive">*</span>
            </label>
            <Controller
              control={control}
              name="level"
              render={({ field }) => (
                <Select
                  id="level"
                  className="mt-2"
                  selectorIcon={<FiChevronDown aria-hidden />}
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  }
                  onSelectionChange={(keys) =>
                    field.onChange(selectionToValue(keys))
                  }
                  isInvalid={Boolean(errors.level)}
                  errorMessage={errors.level?.message}
                >
                  {resourceLevels.map((level) => (
                    <SelectItem key={level}>{level.toUpperCase()}</SelectItem>
                  ))}
                </Select>
              )}
            />
          </div>

          <div>
            <label htmlFor="duration" className="block text-sm font-medium">
              Durée (minutes)
            </label>
            <Controller
              control={control}
              name="durationMinutes"
              render={({ field }) => (
                <Input
                  id="duration"
                  type="number"
                  inputMode="numeric"
                  min={1}
                  className="mt-2"
                  value={field.value == null ? "" : String(field.value)}
                  onChange={(event) => {
                    const raw = event.target.value;
                    field.onChange(raw === "" ? null : Number(raw));
                  }}
                  isInvalid={Boolean(errors.durationMinutes)}
                  errorMessage={errors.durationMinutes?.message}
                />
              )}
            />
          </div>

          <div>
            <label htmlFor="language" className="block text-sm font-medium">
              Langue
            </label>
            <Controller
              control={control}
              name="language"
              render={({ field }) => (
                <Select
                  id="language"
                  className="mt-2"
                  selectorIcon={<FiChevronDown aria-hidden />}
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  }
                  onSelectionChange={(keys) =>
                    field.onChange(selectionToValue(keys))
                  }
                  isInvalid={Boolean(errors.language)}
                  errorMessage={errors.language?.message}
                >
                  {resourceLanguages.map((language) => (
                    <SelectItem key={language}>
                      {language === "fr"
                        ? "Français"
                        : language === "en"
                          ? "Anglais"
                          : "Espagnol"}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
