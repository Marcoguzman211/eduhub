"use client";
import { Input, Select, SelectItem } from "~/lib/components/ui";
import { FiChevronDown } from "react-icons/fi";

export default function BaseInfoSection() {
  return (
    <section className="bg-background rounded-2xl p-6">
      <h2 className="text-xl font-semibold">Informations de base</h2>

      <div className="mt-6 space-y-6">
        {/* Titre */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium">
            Titre <span className="text-destructive">*</span>
          </label>
          <Input
            id="title"
            aria-describedby="title-help"
            placeholder="Titre de votre ressource"
            className="mt-2"
            defaultValue=""
          />
          <p id="title-help" className="text-muted-foreground mt-2 text-xs">
            Maximum 140 caractères
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="type" className="block text-sm font-medium">
              Type <span className="text-destructive">*</span>
            </label>
            <Select
              id="type"
              className="mt-2"
              selectorIcon={<FiChevronDown aria-hidden />}
              defaultSelectedKeys={["type-placeholder"]}
            >
              <SelectItem key="type-placeholder">
                Sélectionner un type
              </SelectItem>
              <SelectItem key="fiche">Fiche</SelectItem>
              <SelectItem key="video">Vidéo</SelectItem>
              <SelectItem key="cours">Cours</SelectItem>
            </Select>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium">
              Matière <span className="text-destructive">*</span>
            </label>
            <Select
              id="subject"
              className="mt-2"
              selectorIcon={<FiChevronDown aria-hidden />}
              defaultSelectedKeys={["subject-placeholder"]}
            >
              <SelectItem key="subject-placeholder">
                Sélectionner une matière
              </SelectItem>
              <SelectItem key="fr">Français</SelectItem>
              <SelectItem key="maths">Mathématiques</SelectItem>
              <SelectItem key="histoire">Histoire</SelectItem>
            </Select>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <label className="block text-sm font-medium">
              Niveaux <span className="text-destructive">*</span>
            </label>
            <Select
              id="lang"
              className="mt-2"
              selectorIcon={<FiChevronDown aria-hidden />}
              defaultSelectedKeys={["cp"]}
            >
              <SelectItem key="cp">CP</SelectItem>
              <SelectItem key="ce2">CE2</SelectItem>
              <SelectItem key="cm1">CM1</SelectItem>
            </Select>
          </div>

          <div>
            <label htmlFor="duration" className="block text-sm font-medium">
              Durée (minutes)
            </label>
            <Input id="duration" className="mt-2" defaultValue="45" />
          </div>

          <div>
            <label htmlFor="lang" className="block text-sm font-medium">
              Langue
            </label>
            <Select
              id="lang"
              className="mt-2"
              selectorIcon={<FiChevronDown aria-hidden />}
              defaultSelectedKeys={["fr"]}
            >
              <SelectItem key="fr">Français</SelectItem>
              <SelectItem key="en">Anglais</SelectItem>
              <SelectItem key="es">Espagnol</SelectItem>
            </Select>
          </div>
        </div>
      </div>
    </section>
  );
}
