"use client";
import { Input, Button, Select, SelectItem, Chip } from "~/lib/components/ui";
import { FiSearch, FiGrid, FiList, FiPlus, FiX } from "react-icons/fi";

export default function ResourceToolbar() {
  return (
    <section className="border-default-200 bg-content1 w-full rounded-2xl border p-3 sm:p-4">
      <div className="grid grid-cols-12 items-center gap-3">
        <div className="col-span-12 md:col-span-7 lg:col-span-8">
          <Input
            aria-label="Rechercher des ressources"
            radius="full"
            size="lg"
            startContent={<FiSearch className="text-default-500 h-5 w-5" />}
            placeholder="Rechercher des ressources..."
          />
        </div>
        <div className="hidden justify-end md:col-span-2 md:flex lg:col-span-1">
          <div className="bg-content2 flex gap-1 rounded-2xl p-1">
            <Button
              radius="full"
              variant="solid"
              className="min-w-0 px-3"
              startContent={<FiGrid className="h-5 w-5" />}
              aria-label="Affichage grille (actif)"
            />
            <Button
              radius="full"
              variant="light"
              className="min-w-0 px-3"
              startContent={<FiList className="h-5 w-5" />}
              aria-label="Affichage liste (inactif)"
            />
          </div>
        </div>
        <div className="hidden justify-end md:col-span-3 md:flex lg:col-span-3">
          <Button
            color="primary"
            size="lg"
            startContent={<FiPlus className="h-5 w-5" />}
          >
            Ajouter une ressource
          </Button>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-12 md:gap-3">
        <Select
          aria-label="Filtrer par matière"
          className="col-span-1 md:col-span-3"
          radius="full"
          size="lg"
          defaultSelectedKeys={["all-subjects"]}
          placeholder="Toutes matières"
        >
          <SelectItem key="all-subjects">Toutes matières</SelectItem>
        </Select>

        <Select
          aria-label="Filtrer par niveau"
          className="col-span-1 md:col-span-3"
          radius="full"
          size="lg"
          defaultSelectedKeys={["all-levels"]}
          placeholder="Tous niveaux"
        >
          <SelectItem key="all-levels">Tous niveaux</SelectItem>
        </Select>

        <Select
          aria-label="Trier par pertinence"
          className="col-span-2 md:col-span-3"
          radius="full"
          size="lg"
          defaultSelectedKeys={["relevant"]}
          placeholder="Plus pertinent"
        >
          <SelectItem key="relevant">Plus pertinent</SelectItem>
        </Select>
        <div className="text-default-500 col-span-2 flex flex-col items-start gap-2 text-sm md:col-span-3 md:items-end">
          <span>1 248 résultats • 0.2s</span>
          <div className="hidden items-center gap-3 md:flex">
            <Chip
              className="bg-primary-50 text-primary"
              endContent={
                <button aria-label="Retirer le filtre Français">
                  <FiX className="h-4 w-4" />
                </button>
              }
            >
              Français
            </Chip>
            <button className="text-primary hover:underline">
              Effacer tout
            </button>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between md:hidden">
        <div className="bg-content2 flex gap-1 rounded-2xl p-1">
          <Button
            radius="full"
            variant="solid"
            className="min-w-0 px-3"
            startContent={<FiGrid className="h-5 w-5" />}
            aria-label="Affichage grille (actif)"
          />
          <Button
            radius="full"
            variant="light"
            className="min-w-0 px-3"
            startContent={<FiList className="h-5 w-5" />}
            aria-label="Affichage liste (inactif)"
          />
        </div>

        <Button
          color="primary"
          radius="full"
          size="lg"
          startContent={<FiPlus className="h-5 w-5" />}
        >
          Ajouter
        </Button>
      </div>
      <div className="mt-2 flex items-center gap-3 text-sm md:hidden">
        <Chip
          className="bg-primary-50 text-primary"
          endContent={
            <button aria-label="Retirer le filtre Français">
              <FiX className="h-4 w-4" />
            </button>
          }
        >
          Français
        </Chip>
        <button className="text-primary hover:underline">Effacer tout</button>
      </div>
    </section>
  );
}
