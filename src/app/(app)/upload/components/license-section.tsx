"use client";

import { Controller, useFormContext } from "react-hook-form";
import type { Selection } from "@react-types/shared";

import { Select, SelectItem, Switch } from "~/lib/components/ui";
import type { UploadResourceFormValues } from "../schema";
import { resourceLicenses } from "~/shared/resource";

function selectionToValue(selection: Selection): string {
  if (selection === "all") return "";
  const [first] = Array.from(selection);
  return first?.toString() ?? "";
}

export default function LicenseSection() {
  const {
    control,
    formState: { errors },
  } = useFormContext<UploadResourceFormValues>();

  return (
    <section className="bg-background p-6">
      <h2 className="text-xl font-semibold">Licence et permissions</h2>

      <div className="mt-6 space-y-6">
        <div>
          <label htmlFor="license" className="block text-sm font-medium">
            Licence <span className="text-destructive">*</span>
          </label>
          <Controller
            name="license"
            control={control}
            render={({ field }) => (
              <Select
                id="license"
                className="mt-2"
                selectedKeys={field.value ? new Set([field.value]) : new Set()}
                onSelectionChange={(keys) =>
                  field.onChange(selectionToValue(keys))
                }
                isInvalid={Boolean(errors.license)}
                errorMessage={errors.license?.message}
              >
                {resourceLicenses.map((license) => (
                  <SelectItem key={license}>
                    {license === "cc-by"
                      ? "CC BY - Attribution"
                      : license === "cc-by-sa"
                        ? "CC BY-SA - Partage dans les mêmes conditions"
                        : "CC0 - Domaine public"}
                  </SelectItem>
                ))}
              </Select>
            )}
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Autoriser les commentaires</p>
            <p className="text-muted-foreground text-xs">
              Les utilisateurs peuvent commenter votre ressource
            </p>
          </div>
          <Controller
            name="allowComments"
            control={control}
            render={({ field }) => (
              <Switch
                isSelected={field.value}
                onValueChange={field.onChange}
                aria-label="Autoriser les commentaires"
              />
            )}
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Autoriser les adaptations</p>
            <p className="text-muted-foreground text-xs">
              Permettre aux autres de modifier votre ressource
            </p>
          </div>
          <Controller
            name="allowAdaptations"
            control={control}
            render={({ field }) => (
              <Switch
                isSelected={field.value}
                onValueChange={field.onChange}
                aria-label="Autoriser les adaptations"
              />
            )}
          />
        </div>
      </div>
    </section>
  );
}
