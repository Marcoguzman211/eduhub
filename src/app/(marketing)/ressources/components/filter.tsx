"use client";

import { Checkbox, Slider, Divider } from "~/lib/components/ui";
import {
  resourceLanguages,
  resourceLevels,
  resourceLicenses,
  resourceSubjects,
  resourceTypes,
} from "~/shared/resource";
import {
  resourceLanguageLabels,
  resourceLevelLabels,
  resourceLicenseLabels,
  resourceSubjectLabels,
  resourceTypeLabels,
} from "~/shared/resource-labels";

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
          {resourceSubjects.map((subject) => (
            <div key={subject} className="flex items-center justify-between">
              <Checkbox value={subject}>
                {resourceSubjectLabels[subject]}
              </Checkbox>
              <span className="bg-default-100 rounded-md px-2 py-0.5 text-xs">
                —
              </span>
            </div>
          ))}
        </div>
      </section>

      <Divider />
      <section className="space-y-3">
        <h3 className="flex items-center justify-between text-sm font-medium">
          <span>Niveaux</span>
          <span className="text-xs">⌄</span>
        </h3>
        <div className="space-y-2">
          {resourceLevels.map((level) => (
            <Checkbox key={level} value={level}>
              {resourceLevelLabels[level]}
            </Checkbox>
          ))}
        </div>
      </section>

      <Divider />
      <section className="space-y-3">
        <h3 className="flex items-center justify-between text-sm font-medium">
          <span>Type de ressource</span>
          <span className="text-xs">⌄</span>
        </h3>
        <div className="space-y-2">
          {resourceTypes.map((type) => (
            <Checkbox key={type} value={type}>
              {resourceTypeLabels[type]}
            </Checkbox>
          ))}
        </div>
      </section>

      <Divider />
      <section className="space-y-3">
        <h3 className="flex items-center justify-between text-sm font-medium">
          <span>Langues</span>
          <span className="text-xs">⌄</span>
        </h3>
        <div className="space-y-2">
          {resourceLanguages.map((language) => (
            <Checkbox key={language} value={language}>
              {resourceLanguageLabels[language]}
            </Checkbox>
          ))}
        </div>
      </section>

      <Divider />
      <section className="space-y-3">
        <h3 className="flex items-center justify-between text-sm font-medium">
          <span>Licences</span>
          <span className="text-xs">⌄</span>
        </h3>
        <div className="space-y-2">
          {resourceLicenses.map((license) => (
            <Checkbox key={license} value={license}>
              {resourceLicenseLabels[license]}
            </Checkbox>
          ))}
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
