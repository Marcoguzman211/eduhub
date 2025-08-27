"use client";

import { Checkbox, Slider, Divider } from "~/lib/components/ui";

export default function RessourcesFilter() {
  return (
    <aside className="bg-content1 text-foreground space-y-6 rounded-xl p-4 shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filtres</h2>
        <button className="text-foreground-400 text-sm hover:underline">
          Réinitialiser
        </button>
      </div>
      <section className="space-y-3">
        <h3 className="flex items-center justify-between text-sm font-medium">
          <span>Matières</span>
          <span className="text-xs">⌄</span>
        </h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Checkbox>Français</Checkbox>
            <span className="bg-default-100 rounded-md px-2 py-0.5 text-xs">
              342
            </span>
          </div>
          <div className="flex items-center justify-between">
            <Checkbox>Littérature</Checkbox>
            <span className="bg-default-100 rounded-md px-2 py-0.5 text-xs">
              156
            </span>
          </div>
          <div className="flex items-center justify-between">
            <Checkbox>Grammaire</Checkbox>
            <span className="bg-default-100 rounded-md px-2 py-0.5 text-xs">
              89
            </span>
          </div>
        </div>
      </section>

      <Divider />
      <section className="space-y-3">
        <h3 className="flex items-center justify-between text-sm font-medium">
          <span>Niveaux</span>
          <span className="text-xs">⌄</span>
        </h3>
        <div className="space-y-2">
          <Checkbox>CP</Checkbox>
          <Checkbox>CE1</Checkbox>
          <Checkbox>CE2</Checkbox>
        </div>
      </section>

      <Divider />
      <section className="space-y-3">
        <h3 className="flex items-center justify-between text-sm font-medium">
          <span>Type de ressource</span>
          <span className="text-xs">⌄</span>
        </h3>
        <div className="space-y-2">
          <Checkbox>Fiche d&apos;activité</Checkbox>
          <Checkbox>Séquence</Checkbox>
          <Checkbox>Comptine</Checkbox>
        </div>
      </section>

      <Divider />
      <section className="space-y-3">
        <h3 className="text-sm font-medium">Durée (minutes)</h3>
        <Slider
          step={5}
          minValue={5}
          maxValue={120}
          defaultValue={30}
          aria-label="Durée"
        />
        <div className="text-foreground-500 flex justify-between text-xs">
          <span>5 min</span>
          <span>120 min</span>
        </div>
      </section>
    </aside>
  );
}
